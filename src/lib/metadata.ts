import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { AppConfig } from '@/utils/AppConfig';

type LocaleType = (typeof AppConfig.locales)[number];

type GenerateMetadataParams = {
  locale: LocaleType;
  namespace: 'Index' | 'About' | 'Counter' | 'Portfolio' | 'PortfolioSlug' | 'SignIn' | 'SignUp' | 'Dashboard' | 'UserProfile';
  path?: string;
};

export async function generatePageMetadata({
  locale,
  namespace,
  path = '',
}: GenerateMetadataParams): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://teg.lv';
  const canonicalUrl = `${baseUrl}/${locale}${path}`;

  // Generate alternate language links
  const languages: Record<string, string> = {};
  AppConfig.locales.forEach((loc) => {
    languages[loc] = `${baseUrl}/${loc}${path}`;
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
    authors: [{ name: 'TEG - Transporta Ekspertu Grupa' }],
    creator: 'TEG',
    publisher: 'TEG - Transporta Ekspertu Grupa',
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: t('meta_title'),
      description: t('meta_description'),
      url: canonicalUrl,
      siteName: 'TEG - Transporta Ekspertu Grupa',
      locale,
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: t('meta_title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta_title'),
      description: t('meta_description'),
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        'index': true,
        'follow': true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'TEG - Transporta Ekspertu Grupa',
    'alternateName': 'TEG',
    'url': 'https://teg.lv',
    'logo': 'https://teg.lv/logo.png',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+371-25201710',
      'contactType': 'Customer Service',
      'areaServed': 'EU',
      'availableLanguage': ['lv', 'en', 'ru'],
    },
    'sameAs': [
      'https://www.instagram.com/teg.auto',
      'https://www.tiktok.com/@teg.auto',
      'https://www.facebook.com/Transportaekspertugrupa',
    ],
  };
}

export function generateLocalBusinessSchema(locale: LocaleType) {
  const name
    = locale === 'lv'
      ? 'TEG - Transporta Ekspertu Grupa'
      : locale === 'ru'
        ? 'TEG - Группа экспертов по транспорту'
        : 'TEG - Transport Experts Group';

  const description
    = locale === 'lv'
      ? 'Neatkarīga automobiļu ekspertu grupa, kas sniedz auto pārbaudes un tehniskos pakalpojumus visā Eiropā'
      : locale === 'ru'
        ? 'Независимая группа автомобильных экспертов, предоставляющая услуги по проверке и техническому обслуживанию автомобилей по всей Европе'
        : 'Independent automotive expert group providing car inspection and technical services across Europe';

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://teg.lv',
    name,
    description,
    'image': 'https://teg.lv/logo.png',
    'telephone': '+371-25201710',
    'email': 'info@teg.lv',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'LV',
      'addressLocality': 'Rīga',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'addressCountry': 'LV',
    },
    'url': `https://teg.lv/${locale}`,
    'priceRange': '€50 - €350',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '09:00',
        'closes': '20:00',
      },
    ],
    'areaServed': {
      '@type': 'Place',
      'name': 'Europe',
    },
  };
}

export function generateServiceSchema(
  serviceType: 'pre-purchase' | 'car-search' | 'mobile-service',
  locale: LocaleType,
) {
  const services: Record<
    'pre-purchase' | 'car-search' | 'mobile-service',
    Record<LocaleType, { name: string; description: string; price: string }>
  > = {
    'pre-purchase': {
      lv: {
        name: 'Automašīnas pārbaude pirms pirkuma',
        description:
          'Detalizēta transportlīdzekļa tehniskā stāvokļa pārbaude pirms tā iegādes visā Eiropā. Ietver dzinēja diagnostiku, VIN vēsturi, virsbūves un krāsas pārbaudi.',
        price: '100',
      },
      en: {
        name: 'Pre-Purchase Car Inspection',
        description:
          'Detailed vehicle technical inspection before purchase across all of Europe. Includes engine diagnostics, VIN history, body and paint inspection.',
        price: '100',
      },
      ru: {
        name: 'Проверка автомобиля перед покупкой',
        description:
          'Детальная проверка технического состояния транспортного средства перед покупкой по всей Европе. Включает диагностику двигателя, историю VIN, проверку кузова и краски.',
        price: '100',
      },
    },
    'car-search': {
      lv: {
        name: 'Automašīnas meklēšana un piegāde',
        description: 'Transportlīdzekļa meklēšana, pilna pārbaude, piegāde un palīdzība ar dokumentiem.',
        price: '350',
      },
      en: {
        name: 'Car Search & Delivery',
        description: 'Vehicle sourcing, full inspection, delivery and documentation assistance.',
        price: '350',
      },
      ru: {
        name: 'Поиск и доставка автомобиля',
        description: 'Поиск автомобиля, полная проверка, доставка и помощь с документами.',
        price: '350',
      },
    },
    'mobile-service': {
      lv: {
        name: 'Mobilais ceļu palīdzības serviss',
        description: 'Diagnostika vietā, akumulatora testēšana, remonts un ātra reakcija.',
        price: '30',
      },
      en: {
        name: 'Mobile Roadside Service',
        description: 'On-location diagnostics, battery testing, repairs and fast response.',
        price: '30',
      },
      ru: {
        name: 'Мобильная дорожная служба',
        description: 'Диагностика на месте, тестирование аккумулятора, ремонт и быстрая реакция.',
        price: '30',
      },
    },
  };

  const service = services[serviceType][locale]!;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': service.name,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'TEG - Transporta Ekspertu Grupa',
      'telephone': '+371-25201710',
    },
    'areaServed': {
      '@type': 'Place',
      'name': 'Europe',
    },
    'description': service.description,
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'EUR',
      'price': service.price,
      'priceSpecification': {
        '@type': 'PriceSpecification',
        'priceCurrency': 'EUR',
        'price': service.price,
        'valueAddedTaxIncluded': true,
      },
    },
  };
}
