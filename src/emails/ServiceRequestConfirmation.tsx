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

type ServiceRequestConfirmationEmailProps = {
  name: string;
  phone: string;
  serviceType: 'pre-purchase' | 'car-search' | 'mobile-service';
  preferredTime: 'morning' | 'afternoon' | 'evening';
  isUrgent: boolean;
  locale: 'lv' | 'en' | 'ru';
};

const translations = {
  lv: {
    preview: 'Mēs sazināsimies ar jums drīz - TEG',
    headingNormal: 'Pieprasījums saņemts',
    headingUrgent: 'Steidzams pieprasījums saņemts',
    introNormal: 'Paldies par jūsu pieprasījumu! Mēs sazināsimies ar jums tuvākajā laikā.',
    introUrgent: 'Mēs saņēmām jūsu steidzamo pieprasījumu un sazināsimies ar jums pēc iespējas ātrāk.',
    requestDetails: 'Pieprasījuma detaļas:',
    service: 'Pakalpojums:',
    preferredTime: 'Vēlamais laiks:',
    phone: 'Tālrunis:',
    services: {
      'pre-purchase': 'Automašīnas pārbaude pirms pirkuma',
      'car-search': 'Automašīnas meklēšana un piegāde',
      'mobile-service': 'Mobilais ceļu palīdzības serviss',
    },
    times: {
      morning: 'Rīts (9:00-12:00)',
      afternoon: 'Pēcpusdiena (12:00-17:00)',
      evening: 'Vakars (17:00-20:00)',
    },
    responseTime: 'Paredzamais atbildes laiks:',
    responseNormal: 'Mēs sazināsimies darba dienas laikā (pirmdien-sestdien, 9:00-20:00).',
    responseUrgent: 'Mūsu speciālists sazināsies ar jums 1-2 stundu laikā.',
    needImmediate: 'Nepieciešama tūlītēja palīdzība?',
    callNow: 'Zvanīt tagad: +371 25 201 710',
    whatsapp: 'WhatsApp: +371 25 201 710',
    footer: 'TEG - Transporta Ekspertu Grupa',
    footerSubtext: 'Neatkarīgi automobiļu speciālisti visā Eiropā',
    businessHours: 'Darba laiks: Pirmdien-Sestdien, 9:00-20:00',
  },
  en: {
    preview: 'We will contact you soon - TEG',
    headingNormal: 'Request Received',
    headingUrgent: 'Urgent Request Received',
    introNormal: 'Thank you for your request! We will contact you shortly.',
    introUrgent: 'We have received your urgent request and will contact you as soon as possible.',
    requestDetails: 'Request Details:',
    service: 'Service:',
    preferredTime: 'Preferred Time:',
    phone: 'Phone:',
    services: {
      'pre-purchase': 'Pre-Purchase Car Inspection',
      'car-search': 'Car Search & Delivery',
      'mobile-service': 'Mobile Roadside Service',
    },
    times: {
      morning: 'Morning (9:00 AM-12:00 PM)',
      afternoon: 'Afternoon (12:00 PM-5:00 PM)',
      evening: 'Evening (5:00 PM-8:00 PM)',
    },
    responseTime: 'Expected response time:',
    responseNormal: 'We will contact you during business hours (Monday-Saturday, 9:00 AM - 8:00 PM).',
    responseUrgent: 'Our specialist will contact you within 1-2 hours.',
    needImmediate: 'Need immediate assistance?',
    callNow: 'Call now: +371 25 201 710',
    whatsapp: 'WhatsApp: +371 25 201 710',
    footer: 'TEG - Transport Experts Group',
    footerSubtext: 'Independent automotive specialists across Europe',
    businessHours: 'Business Hours: Monday-Saturday, 9:00 AM - 8:00 PM',
  },
  ru: {
    preview: 'Мы свяжемся с вами в ближайшее время - TEG',
    headingNormal: 'Запрос получен',
    headingUrgent: 'Срочный запрос получен',
    introNormal: 'Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время.',
    introUrgent: 'Мы получили ваш срочный запрос и свяжемся с вами как можно скорее.',
    requestDetails: 'Детали запроса:',
    service: 'Услуга:',
    preferredTime: 'Предпочтительное время:',
    phone: 'Телефон:',
    services: {
      'pre-purchase': 'Проверка автомобиля перед покупкой',
      'car-search': 'Поиск и доставка автомобиля',
      'mobile-service': 'Мобильная служба помощи на дороге',
    },
    times: {
      morning: 'Утро (9:00-12:00)',
      afternoon: 'День (12:00-17:00)',
      evening: 'Вечер (17:00-20:00)',
    },
    responseTime: 'Ожидаемое время ответа:',
    responseNormal: 'Мы свяжемся с вами в рабочее время (понедельник-суббота, 9:00-20:00).',
    responseUrgent: 'Наш специалист свяжется с вами в течение 1-2 часов.',
    needImmediate: 'Нужна немедленная помощь?',
    callNow: 'Позвоните сейчас: +371 25 201 710',
    whatsapp: 'WhatsApp: +371 25 201 710',
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

const responseSection = {
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

export function ServiceRequestConfirmationEmail({
  name: _name,
  phone,
  serviceType,
  preferredTime,
  isUrgent,
  locale = 'lv',
}: ServiceRequestConfirmationEmailProps) {
  const t = translations[locale];

  return (
    <Html>
      <Head />
      <Preview>{t.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            {/* Header */}
            <Heading style={h1}>
              {isUrgent ? t.headingUrgent : t.headingNormal}
            </Heading>
            {isUrgent && (
              <Section style={urgentBanner}>
                <Text style={urgentText}>⚡ URGENT REQUEST</Text>
              </Section>
            )}
            <Text style={paragraph}>
              {isUrgent ? t.introUrgent : t.introNormal}
            </Text>

            {/* Request Details */}
            <Section style={detailsSection}>
              <Text style={sectionHeading}>{t.requestDetails}</Text>
              <Text style={detailText}>
                <strong>{t.service}</strong>
                {' '}
                {t.services[serviceType]}
              </Text>
              <Text style={detailText}>
                <strong>{t.preferredTime}</strong>
                {' '}
                {t.times[preferredTime]}
              </Text>
              <Text style={detailText}>
                <strong>{t.phone}</strong>
                {' '}
                {phone}
              </Text>
            </Section>

            {/* Response Time */}
            <Section style={responseSection}>
              <Text style={sectionHeading}>{t.responseTime}</Text>
              <Text style={paragraph}>
                {isUrgent ? t.responseUrgent : t.responseNormal}
              </Text>
            </Section>

            {/* Call to Action */}
            <Section style={ctaSection}>
              <Text style={ctaHeading}>{t.needImmediate}</Text>
              <Button
                style={button}
                href="tel:+37125201710"
              >
                {t.callNow}
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

export default ServiceRequestConfirmationEmail;
