import { Buffer } from 'node:buffer';
import * as Sentry from '@sentry/nextjs';
import { google } from 'googleapis';
import { Env } from '@/libs/Env';

/**
 * Google Calendar API client
 * Note: Requires service account credentials for server-side calendar management
 * For MVP, we'll use a simplified approach with calendar event IDs stored in DB
 */

export type CreateCalendarEventParams = {
  summary: string;
  description: string;
  startDateTime: string; // ISO 8601 format
  endDateTime: string; // ISO 8601 format
  attendeeEmail: string;
  attendeeName: string;
};

/**
 * Create a Google Calendar event
 * Returns event ID if successful
 */
export async function createCalendarEvent(params: CreateCalendarEventParams): Promise<{
  success: boolean;
  eventId?: string;
  error?: any;
}> {
  try {
    // Check if Google Calendar is configured
    if (!Env.GOOGLE_CALENDAR_API_KEY || !Env.GOOGLE_CALENDAR_ID) {
      console.warn('Google Calendar not configured, skipping event creation');
      return {
        success: false,
        error: 'Google Calendar not configured',
      };
    }

    // Initialize Google Calendar API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        // For MVP: Use API key approach
        // Production: Switch to service account with JSON key file
        type: 'service_account',
        // Add service account credentials here
      },
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    const event = {
      summary: params.summary,
      description: params.description,
      start: {
        dateTime: params.startDateTime,
        timeZone: 'Europe/Riga', // Latvia timezone
      },
      end: {
        dateTime: params.endDateTime,
        timeZone: 'Europe/Riga',
      },
      attendees: [
        {
          email: params.attendeeEmail,
          displayName: params.attendeeName,
        },
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 24 hours before
          { method: 'popup', minutes: 60 }, // 1 hour before
        ],
      },
    };

    const response = await calendar.events.insert({
      calendarId: Env.GOOGLE_CALENDAR_ID,
      requestBody: event,
      sendUpdates: 'all', // Send email notifications to attendees
    });

    return {
      success: true,
      eventId: response.data.id ?? undefined,
    };
  } catch (error) {
    Sentry.captureException(error, {
      tags: {
        service: 'google-calendar',
        operation: 'create_event',
      },
      extra: { ...params },
    });
    console.error('Google Calendar error:', error);
    return {
      success: false,
      error,
    };
  }
}

/**
 * Generate .ics calendar file for email attachment
 * Simpler approach that doesn't require Google Calendar API
 */
export function generateIcsFile(params: {
  summary: string;
  description: string;
  startDateTime: string;
  endDateTime: string;
  location?: string;
  attendeeEmail: string;
}): Buffer {
  const startDate = new Date(params.startDateTime);
  const endDate = new Date(params.endDateTime);

  // Format dates in iCalendar format (YYYYMMDDTHHMMSS)
  const formatIcsDate = (date: Date) => {
    return date
      .toISOString()
      .replace(/[-:]/g, '')
      .replace(/\.\d{3}Z/, 'Z');
  };

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//TEG//Appointment//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
UID:${Date.now()}@teg.lv
DTSTAMP:${formatIcsDate(new Date())}
DTSTART:${formatIcsDate(startDate)}
DTEND:${formatIcsDate(endDate)}
SUMMARY:${params.summary}
DESCRIPTION:${params.description.replace(/\n/g, '\\n')}
LOCATION:${params.location || 'TEG Service Center'}
STATUS:CONFIRMED
SEQUENCE:0
ORGANIZER;CN=TEG:mailto:noreply@teg.lv
ATTENDEE;CN=${params.attendeeEmail};RSVP=TRUE:mailto:${params.attendeeEmail}
BEGIN:VALARM
TRIGGER:-PT24H
ACTION:DISPLAY
DESCRIPTION:Appointment reminder
END:VALARM
END:VEVENT
END:VCALENDAR`;

  return Buffer.from(icsContent, 'utf-8');
}

/**
 * Calculate end time for appointment (default 1 hour duration)
 */
export function calculateEndTime(startDateTime: string, durationHours: number = 1): string {
  const start = new Date(startDateTime);
  const end = new Date(start.getTime() + durationHours * 60 * 60 * 1000);
  return end.toISOString();
}
