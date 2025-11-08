import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

type AppointmentConfirmationEmailProps = {
  name: string;
  email: string;
  phone: string;
  serviceType: 'pre-purchase' | 'car-search' | 'mobile-service';
  preferredDate: string;
  preferredTime: string;
  vehicleInfo?: string;
  message?: string;
  locale: 'lv' | 'en' | 'ru';
  googleCalendarEventId?: string;
};

const translations = {
  lv: {
    preview: 'Jūsu tikšanās ir apstiprināta - TEG',
    heading: 'Tikšanās apstiprināta',
    intro: 'Paldies, ka izvēlējāties TEG! Jūsu tikšanās ir apstiprināta.',
    appointmentDetails: 'Tikšanās detaļas:',
    service: 'Pakalpojums:',
    dateTime: 'Datums un laiks:',
    yourInfo: 'Jūsu informācija:',
    phone: 'Tālrunis:',
    vehicleInfo: 'Transportlīdzekļa informācija:',
    additionalNotes: 'Papildu piezīmes:',
    services: {
      'pre-purchase': 'Automašīnas pārbaude pirms pirkuma',
      'car-search': 'Automašīnas meklēšana un piegāde',
      'mobile-service': 'Mobilais ceļu palīdzības serviss',
    },
    whatHappensNext: 'Kas notiek tālāk:',
    step1: 'Mēs sazināsimies ar jums 24 stundu laikā, lai apstiprinātu tikšanās detaļas.',
    step2: 'Sagatavosim visu nepieciešamo jūsu izvēlētajam pakalpojumam.',
    step3: 'Jūs saņemsiet atgādinājumu 24 stundas pirms tikšanās.',
    needChanges: 'Nepieciešams pārplānot?',
    contactUs: 'Zvaniet mums: +371 25 201 710',
    addToCalendar: 'Pievienot kalendāram',
    footer: 'TEG - Transporta Ekspertu Grupa',
    footerSubtext: 'Neatkarīgi automobiļu speciālisti visā Eiropā',
    businessHours: 'Darba laiks: Pirmdien-Sestdien, 9:00-20:00',
  },
  en: {
    preview: 'Your appointment is confirmed - TEG',
    heading: 'Appointment Confirmed',
    intro: 'Thank you for choosing TEG! Your appointment has been confirmed.',
    appointmentDetails: 'Appointment Details:',
    service: 'Service:',
    dateTime: 'Date & Time:',
    yourInfo: 'Your Information:',
    phone: 'Phone:',
    vehicleInfo: 'Vehicle Information:',
    additionalNotes: 'Additional Notes:',
    services: {
      'pre-purchase': 'Pre-Purchase Car Inspection',
      'car-search': 'Car Search & Delivery',
      'mobile-service': 'Mobile Roadside Service',
    },
    whatHappensNext: 'What happens next:',
    step1: 'We will contact you within 24 hours to confirm appointment details.',
    step2: 'We will prepare everything necessary for your selected service.',
    step3: 'You will receive a reminder 24 hours before your appointment.',
    needChanges: 'Need to reschedule?',
    contactUs: 'Call us: +371 25 201 710',
    addToCalendar: 'Add to Calendar',
    footer: 'TEG - Transport Experts Group',
    footerSubtext: 'Independent automotive specialists across Europe',
    businessHours: 'Business Hours: Monday-Saturday, 9:00 AM - 8:00 PM',
  },
  ru: {
    preview: 'Ваша встреча подтверждена - TEG',
    heading: 'Встреча подтверждена',
    intro: 'Спасибо за выбор TEG! Ваша встреча подтверждена.',
    appointmentDetails: 'Детали встречи:',
    service: 'Услуга:',
    dateTime: 'Дата и время:',
    yourInfo: 'Ваша информация:',
    phone: 'Телефон:',
    vehicleInfo: 'Информация о транспортном средстве:',
    additionalNotes: 'Дополнительные примечания:',
    services: {
      'pre-purchase': 'Проверка автомобиля перед покупкой',
      'car-search': 'Поиск и доставка автомобиля',
      'mobile-service': 'Мобильная служба помощи на дороге',
    },
    whatHappensNext: 'Что происходит дальше:',
    step1: 'Мы свяжемся с вами в течение 24 часов для подтверждения деталей встречи.',
    step2: 'Мы подготовим все необходимое для выбранной вами услуги.',
    step3: 'Вы получите напоминание за 24 часа до встречи.',
    needChanges: 'Нужно перенести встречу?',
    contactUs: 'Позвоните нам: +371 25 201 710',
    addToCalendar: 'Добавить в календарь',
    footer: 'TEG - Группа транспортных экспертов',
    footerSubtext: 'Независимые автомобильные специалисты по всей Европе',
    businessHours: 'Рабочие часы: Понедельник-Суббота, 9:00-20:00',
  },
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: 'Outfit, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
  fontSize: '28px',
  fontWeight: '700',
  margin: '40px 0 20px',
  letterSpacing: '0.025em',
};

const paragraph = {
  color: '#525252',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
  margin: '16px 0',
};

const sectionHeading = {
  color: '#1a1a1a',
  fontSize: '18px',
  fontWeight: '600',
  margin: '24px 0 12px',
};

const detailsSection = {
  backgroundColor: '#f0fdf4',
  borderLeft: '4px solid #3ecf8e',
  borderRadius: '8px',
  padding: '20px',
  margin: '24px 0',
};

const detailText = {
  color: '#1a1a1a',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '8px 0',
};

const infoSection = {
  margin: '24px 0',
};

const infoText = {
  color: '#525252',
  fontSize: '15px',
  lineHeight: '22px',
  margin: '8px 0',
};

const vehicleText = {
  color: '#525252',
  fontSize: '14px',
  lineHeight: '20px',
  backgroundColor: '#f9fafb',
  padding: '12px',
  borderRadius: '6px',
  margin: '8px 0',
  whiteSpace: 'pre-wrap' as const,
};

const nextStepsSection = {
  borderTop: '1px solid #e5e7eb',
  paddingTop: '24px',
  margin: '24px 0',
};

const stepText = {
  color: '#525252',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '8px 0',
};

const ctaSection = {
  textAlign: 'center' as const,
  margin: '32px 0',
  padding: '24px',
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
};

const ctaHeading = {
  color: '#1a1a1a',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 16px',
};

const button = {
  backgroundColor: '#3ecf8e',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 32px',
  margin: '16px 0',
};

const footer = {
  borderTop: '1px solid #e5e7eb',
  paddingTop: '32px',
  marginTop: '48px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#1a1a1a',
  fontSize: '16px',
  margin: '8px 0',
};

const footerSubtext = {
  color: '#737373',
  fontSize: '14px',
  margin: '4px 0',
};

const link = {
  color: '#3ecf8e',
  textDecoration: 'underline',
};

export function AppointmentConfirmationEmail({
  name: _name,
  email,
  phone,
  serviceType,
  preferredDate,
  preferredTime,
  vehicleInfo,
  message,
  locale = 'lv',
  googleCalendarEventId: _googleCalendarEventId,
}: AppointmentConfirmationEmailProps) {
  const t = translations[locale];

  return (
    <Html>
      <Head />
      <Preview>{t.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            {/* Header */}
            <Heading style={h1}>{t.heading}</Heading>
            <Text style={paragraph}>{t.intro}</Text>

            {/* Appointment Details */}
            <Section style={detailsSection}>
              <Text style={sectionHeading}>{t.appointmentDetails}</Text>
              <Text style={detailText}>
                <strong>{t.service}</strong>
                {' '}
                {t.services[serviceType]}
              </Text>
              <Text style={detailText}>
                <strong>{t.dateTime}</strong>
                {' '}
                {preferredDate}
                {' '}
                @
                {' '}
                {preferredTime}
              </Text>
            </Section>

            {/* Customer Info */}
            <Section style={infoSection}>
              <Text style={sectionHeading}>{t.yourInfo}</Text>
              <Text style={infoText}>
                <strong>Email:</strong>
                {' '}
                {email}
              </Text>
              <Text style={infoText}>
                <strong>{t.phone}</strong>
                {' '}
                {phone}
              </Text>
              {vehicleInfo && (
                <>
                  <Text style={infoText}>
                    <strong>{t.vehicleInfo}</strong>
                  </Text>
                  <Text style={vehicleText}>{vehicleInfo}</Text>
                </>
              )}
              {message && (
                <>
                  <Text style={infoText}>
                    <strong>{t.additionalNotes}</strong>
                  </Text>
                  <Text style={vehicleText}>{message}</Text>
                </>
              )}
            </Section>

            {/* Next Steps */}
            <Section style={nextStepsSection}>
              <Text style={sectionHeading}>{t.whatHappensNext}</Text>
              <Text style={stepText}>
                1.
                {t.step1}
              </Text>
              <Text style={stepText}>
                2.
                {t.step2}
              </Text>
              <Text style={stepText}>
                3.
                {t.step3}
              </Text>
            </Section>

            {/* Call to Action */}
            <Section style={ctaSection}>
              <Text style={ctaHeading}>{t.needChanges}</Text>
              <Button
                style={button}
                href="tel:+37125201710"
              >
                {t.contactUs}
              </Button>
            </Section>

            {/* Footer */}
            <Section style={footer}>
              <Text style={footerText}>
                <strong>{t.footer}</strong>
              </Text>
              <Text style={footerSubtext}>{t.footerSubtext}</Text>
              <Text style={footerSubtext}>{t.businessHours}</Text>
              <Text style={footerSubtext}>
                <Link href="https://www.instagram.com/teg.auto" style={link}>
                  Instagram
                </Link>
                {' • '}
                <Link href="https://www.tiktok.com/@teg.auto" style={link}>
                  TikTok
                </Link>
                {' • '}
                <Link href="https://www.facebook.com/Transportaekspertugrupa" style={link}>
                  Facebook
                </Link>
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default AppointmentConfirmationEmail;
