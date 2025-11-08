import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

type TeamNotificationEmailProps = {
  customerName: string;
  phone: string;
  serviceType: 'pre-purchase' | 'car-search' | 'mobile-service';
  preferredTime: 'morning' | 'afternoon' | 'evening';
  isUrgent: boolean;
};

const serviceNames = {
  'pre-purchase': 'Pre-Purchase Inspection',
  'car-search': 'Car Search & Delivery',
  'mobile-service': 'Mobile Roadside Service',
};

const timeLabels = {
  morning: 'Morning (9:00-12:00)',
  afternoon: 'Afternoon (12:00-17:00)',
  evening: 'Evening (17:00-20:00)',
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '24px',
  fontWeight: '700',
  margin: '40px 0 20px',
};

const urgentBanner = {
  backgroundColor: '#fef2f2',
  borderLeft: '4px solid #dc2626',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px 0',
  textAlign: 'center' as const,
};

const urgentText = {
  color: '#dc2626',
  fontSize: '16px',
  fontWeight: '700',
  margin: '0',
  letterSpacing: '0.05em',
};

const detailsSection = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '20px',
  margin: '24px 0',
};

const detailText = {
  color: '#1a1a1a',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '8px 0',
};

const actionSection = {
  backgroundColor: '#fff7ed',
  borderLeft: '4px solid #f59e0b',
  borderRadius: '8px',
  padding: '16px',
  margin: '24px 0',
};

const actionText = {
  color: '#92400e',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
};

export function TeamNotificationEmail({
  customerName,
  phone,
  serviceType,
  preferredTime,
  isUrgent,
}: TeamNotificationEmailProps) {
  const urgencyLabel = isUrgent ? '🚨 URGENT' : '📋 New';

  return (
    <Html>
      <Head />
      <Preview>
        {urgencyLabel}
        {' '}
        Service Request:
        {serviceNames[serviceType]}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            {isUrgent && (
              <Section style={urgentBanner}>
                <Text style={urgentText}>⚡ URGENT REQUEST - Contact ASAP</Text>
              </Section>
            )}

            <Heading style={h1}>
              {urgencyLabel}
              {' '}
              Service Request
            </Heading>

            <Section style={detailsSection}>
              <Text style={detailText}>
                <strong>Service:</strong>
                {' '}
                {serviceNames[serviceType]}
              </Text>
              <Text style={detailText}>
                <strong>Customer:</strong>
                {' '}
                {customerName}
              </Text>
              <Text style={detailText}>
                <strong>Phone:</strong>
                {' '}
                {phone}
              </Text>
              <Text style={detailText}>
                <strong>Preferred Time:</strong>
                {' '}
                {timeLabels[preferredTime]}
              </Text>
            </Section>

            {isUrgent && (
              <Section style={actionSection}>
                <Text style={actionText}>
                  ⚠️ This is an urgent request. Please contact the customer within 1-2 hours.
                </Text>
              </Section>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default TeamNotificationEmail;
