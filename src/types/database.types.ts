/**
 * Database type definitions for Supabase tables
 *
 * TODO: Generate automatically via Supabase CLI:
 * pnpm supabase gen types typescript --project-id <project-id> > src/types/database.types.ts
 *
 * For now, manually defined based on schema files
 */

export type Json
  = | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export type Database = {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          message: string;
          locale: 'lv' | 'en' | 'ru';
          status: 'new' | 'contacted' | 'completed';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          message: string;
          locale: 'lv' | 'en' | 'ru';
          status?: 'new' | 'contacted' | 'completed';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          message?: string;
          locale?: 'lv' | 'en' | 'ru';
          status?: 'new' | 'contacted' | 'completed';
          created_at?: string;
          updated_at?: string;
        };
      };
      appointments: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string;
          service_type: 'pre-purchase' | 'car-search' | 'mobile-service';
          preferred_date: string;
          preferred_time: string;
          vehicle_info: string | null;
          message: string | null;
          locale: 'lv' | 'en' | 'ru';
          google_calendar_event_id: string | null;
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone: string;
          service_type: 'pre-purchase' | 'car-search' | 'mobile-service';
          preferred_date: string;
          preferred_time: string;
          vehicle_info?: string | null;
          message?: string | null;
          locale: 'lv' | 'en' | 'ru';
          google_calendar_event_id?: string | null;
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string;
          service_type?: 'pre-purchase' | 'car-search' | 'mobile-service';
          preferred_date?: string;
          preferred_time?: string;
          vehicle_info?: string | null;
          message?: string | null;
          locale?: 'lv' | 'en' | 'ru';
          google_calendar_event_id?: string | null;
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          created_at?: string;
          updated_at?: string;
        };
      };
      service_requests: {
        Row: {
          id: string;
          name: string;
          phone: string;
          service_type: 'pre-purchase' | 'car-search' | 'mobile-service';
          preferred_time: 'morning' | 'afternoon' | 'evening';
          is_urgent: boolean;
          locale: 'lv' | 'en' | 'ru';
          status: 'new' | 'contacted' | 'completed';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          phone: string;
          service_type: 'pre-purchase' | 'car-search' | 'mobile-service';
          preferred_time: 'morning' | 'afternoon' | 'evening';
          is_urgent?: boolean;
          locale: 'lv' | 'en' | 'ru';
          status?: 'new' | 'contacted' | 'completed';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          phone?: string;
          service_type?: 'pre-purchase' | 'car-search' | 'mobile-service';
          preferred_time?: 'morning' | 'afternoon' | 'evening';
          is_urgent?: boolean;
          locale?: 'lv' | 'en' | 'ru';
          status?: 'new' | 'contacted' | 'completed';
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
