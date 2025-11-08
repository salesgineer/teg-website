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

type ContactConfirmationEmailProps = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  locale: 'lv' | 'en' | 'ru';
};

const translations = {
  lv: {
    preview: 'Paldies par jūsu ziņojumu - TEG',
    heading: 'Paldies par jūsu ziņojumu',
    intro: 'Mēs saņēmām jūsu ziņojumu un sazināsimies ar jums tuvākajā laikā.',
    yourMessage: 'Jūsu ziņojums:',
    contactInfo: 'Jūsu kontaktinformācija:',
    phone: 'Tālrunis:',
    nextSteps: 'Nākamie soļi:',
    nextStepsText: 'Mūsu speciālisti pārskatīs jūsu pieprasījumu un sazināsies ar jums darba dienas laikā (pirmdien-sestdien, 9:00-20:00).',
    needHelp: 'Nepieciešama tūlītēja palīdzība?',
    callUs: 'Zvaniet mums: +371 25 201 710',
    whatsapp: 'WhatsApp: +371 25 201 710',
    footer: 'TEG - Transporta Ekspertu Grupa',
    footerSubtext: 'Neatkarīgi automobiļu speciālisti visā Eiropā',
    businessHours: 'Darba laiks: Pirmdien-Sestdien, 9:00-20:00',
  },
  en: {
    preview: 'Thank you for your message - TEG',
    heading: 'Thank you for your message',
    intro: 'We have received your message and will get back to you shortly.',
    yourMessage: 'Your message:',
    contactInfo: 'Your contact information:',
    phone: 'Phone:',
    nextSteps: 'Next steps:',
    nextStepsText: 'Our specialists will review your request and contact you during business hours (Monday-Saturday, 9:00 AM - 8:00 PM).',
    needHelp: 'Need immediate assistance?',
    callUs: 'Call us: +371 25 201 710',
    whatsapp: 'WhatsApp: +371 25 201 710',
    footer: 'TEG - Transport Experts Group',
    footerSubtext: 'Independent automotive specialists across Europe',
    businessHours: 'Business Hours: Monday-Saturday, 9:00 AM - 8:00 PM',
  },
  ru: {
    preview: 'Спасибо за ваше сообщение - TEG',
    heading: 'Спасибо за ваше сообщение',
    intro: 'Мы получили ваше сообщение и свяжемся с вами в ближайшее время.',
    yourMessage: 'Ваше сообщение:',
    contactInfo: 'Ваша контактная информация:',
    phone: 'Телефон:',
    nextSteps: 'Следующие шаги:',
    nextStepsText: 'Наши специалисты рассмотрят ваш запрос и свяжутся с вами в рабочее время (понедельник-суббота, 9:00-20:00).',
    needHelp: 'Нужна немедленная помощь?',
    callUs: 'Позвоните нам: +371 25 201 710',
    whatsapp: 'WhatsApp: +371 25 201 710',
    footer: 'TEG - Группа транспортных экспертов',
    footerSubtext: 'Независимые автомобильные специалисты по всей Европе',
    businessHours: 'Рабочие часы: Понедельник-Суббота, 9:00-20:00',
  },
};

// Styles (Supabase theme green: oklch(0.8348 0.1302 160.9080) -> #3ecf8e approx)
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

const messageSection = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '20px',
  margin: '24px 0',
};

const messageText = {
  color: '#525252',
  fontSize: '15px',
  lineHeight: '22px',
  whiteSpace: 'pre-wrap' as const,
  margin: '0',
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

const nextStepsSection = {
  borderTop: '1px solid #e5e7eb',
  paddingTop: '24px',
  margin: '24px 0',
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

export function ContactConfirmationEmail({
  name: _name,
  email,
  phone,
  message,
  locale = 'lv',
}: ContactConfirmationEmailProps) {
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

            {/* Message Section */}
            <Section style={messageSection}>
              <Text style={sectionHeading}>{t.yourMessage}</Text>
              <Text style={messageText}>{message}</Text>
            </Section>

            {/* Contact Info Section */}
            <Section style={infoSection}>
              <Text style={sectionHeading}>{t.contactInfo}</Text>
              <Text style={infoText}>
                <strong>Email:</strong>
                {' '}
                {email}
              </Text>
              {phone && (
                <Text style={infoText}>
                  <strong>{t.phone}</strong>
                  {' '}
                  {phone}
                </Text>
              )}
            </Section>

            {/* Next Steps */}
            <Section style={nextStepsSection}>
              <Text style={sectionHeading}>{t.nextSteps}</Text>
              <Text style={paragraph}>{t.nextStepsText}</Text>
            </Section>

            {/* Call to Action */}
            <Section style={ctaSection}>
              <Text style={ctaHeading}>{t.needHelp}</Text>
              <Button
                style={button}
                href="tel:+37125201710"
              >
                {t.callUs}
              </Button>
              <Text style={paragraph}>
                {t.whatsapp}
              </Text>
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

export default ContactConfirmationEmail;
