import type { Metadata } from 'next';
import {
  BeakerIcon,
  BoltIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  HashtagIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { Car } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { AntiFraudSection } from '@/components/anti-fraud/AntiFraudSection';
import { DarkFooterWithForm } from '@/components/footer/DarkFooterWithForm';
import { Hero } from '@/components/hero/Hero';
import { ScrollableTestimonials } from '@/components/hero/ScrollableTestimonials';
import { InspectionCategoriesGrid } from '@/components/inspection/InspectionCategoriesGrid';
import { ServiceCard } from '@/components/services/ServiceCard';
import { InstagramFeedSection } from '@/components/social/InstagramFeedSection';
import { ValuePropositionGrid } from '@/components/value-proposition/ValuePropositionGrid';
import { HOMEPAGE_COPY } from '@/lib/constants/copy';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Homepage(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Index' });

  // Phone number for roadside assistance
  const roadsidePhone = {
    display: '+371 25 201 710',
    href: 'tel:+37125201710',
  };

  // Hero content - use HOMEPAGE_COPY for Latvian, translations for others
  const heroTitle = locale === 'lv'
    ? HOMEPAGE_COPY.hero.headline
    : locale === 'ru'
      ? 'Проверь перед покупкой!'
      : 'Check Before You Buy!';

  const heroSubtitle = locale === 'lv'
    ? HOMEPAGE_COPY.hero.subheadline
    : locale === 'ru'
      ? 'Детальная проверка технического состояния транспортного средства перед покупкой по всей Европе'
      : 'Detailed vehicle technical inspection before purchase across all of Europe';

  const heroCtaText = locale === 'lv'
    ? HOMEPAGE_COPY.hero.ctaText
    : locale === 'ru'
      ? 'Заказать проверку'
      : 'Book Inspection';

  const heroCtaHref = locale === 'lv'
    ? HOMEPAGE_COPY.hero.ctaHref
    : `/${locale}/appointments`;

  // Testimonials data
  const testimonials = locale === 'lv'
    ? [
        {
          id: '1',
          quote: 'Profesionāla un detalizēta pārbaude. Palīdzēja izvairīties no slikta pirkuma. Ļoti ieteicu!',
          author: 'Jānis Bērziņš',
          rating: 5,
          location: 'Rīga, Latvija',
        },
        {
          id: '2',
          quote: 'Ātra reakcija un detalizēts ziņojums ar fotogrāfijām. Palīdzēja pieņemt pareizo lēmumu.',
          author: 'Anna Kalniņa',
          rating: 5,
          location: 'Liepāja, Latvija',
        },
        {
          id: '3',
          quote: 'Eksperti atklāja vairākas slēptas problēmas, kuras pārdevējs nebija minējis. Liels paldies!',
          author: 'Pēteris Ozols',
          rating: 5,
          location: 'Daugavpils, Latvija',
        },
        {
          id: '4',
          quote: 'Mobilais serviss ieradās ļoti ātri un atrisināja problēmu uz vietas. Ļoti apmierināts ar pakalpojumu.',
          author: 'Māris Liepiņš',
          rating: 5,
          location: 'Jūrmala, Latvija',
        },
        {
          id: '5',
          quote: 'Palīdzēja atrast ideālo auto pēc manām prasībām. Visu procesu organizēja profesionāli.',
          author: 'Līga Zariņa',
          rating: 5,
          location: 'Valmiera, Latvija',
        },
      ]
    : locale === 'ru'
      ? [
          {
            id: '1',
            quote: 'Профессиональная и детальная проверка. Помогла избежать плохой покупки. Очень рекомендую!',
            author: 'Иван Петров',
            rating: 5,
            location: 'Рига, Латвия',
          },
          {
            id: '2',
            quote: 'Быстрая реакция и детальный отчет с фотографиями. Помог принять правильное решение.',
            author: 'Анна Смирнова',
            rating: 5,
            location: 'Лиепая, Латвия',
          },
        ]
      : [
          {
            id: '1',
            quote: 'Professional and detailed inspection. Helped avoid a bad purchase. Highly recommend!',
            author: 'John Smith',
            rating: 5,
            location: 'Riga, Latvia',
          },
          {
            id: '2',
            quote: 'Fast response and detailed report with photos. Helped make the right decision.',
            author: 'Jane Doe',
            rating: 5,
            location: 'Liepaja, Latvia',
          },
        ];

  return (
    <main className="min-h-screen">
      {/* Section 1: Hero with Modern Split Layout */}
      <Hero
        layout="split"
        backgroundImage="/images/dmitry-timofeew-UU18rjWiQmo-unsplash.jpg"
        overlayOpacity="dark"
        titleUppercase={false}
        title={heroTitle}
        subtitle={heroSubtitle}
        highlightText={locale === 'lv' ? 'pirms pērc' : undefined}
        eyebrow={{
          text: locale === 'lv' ? 'Neatkarīgi auto eksperti' : locale === 'ru' ? 'Независимые автоэксперты' : 'Independent Auto Experts',
          showStar: true,
        }}
        stats={[
          {
            value: locale === 'lv' ? 'Neatkarīgi no dīleriem' : locale === 'ru' ? 'Независимо от дилеров' : 'Independent from Dealers',
            label: locale === 'lv' ? 'Objektīva patiesība' : locale === 'ru' ? 'Объективная правда' : 'Objective Truth',
            icon: CheckCircleIcon,
          },
          {
            value: locale === 'lv' ? 'Detalizēti pārskati' : locale === 'ru' ? 'Детальные отчеты' : 'Detailed Reports',
            label: locale === 'lv' ? '100+ fotogrāfijas' : locale === 'ru' ? '100+ фотографий' : '100+ Photos',
            icon: DocumentTextIcon,
          },
          {
            value: locale === 'lv' ? 'Visā Eiropā' : locale === 'ru' ? 'По всей Европе' : 'Across Europe',
            label: locale === 'lv' ? 'Nav nepieciešams ceļot' : locale === 'ru' ? 'Не нужно ехать' : 'No Travel Required',
            icon: GlobeAltIcon,
          },
        ]}
        mediaCard={{
          image: {
            src: 'https://images.unsplash.com/photo-1585062168782-0459bfd34a0c?w=800&h=600&fit=crop&q=80',
            alt: locale === 'lv' ? 'Sarkans BMW E30 auto pārbaude garāžā - automobiļu pārbaudes serviss' : locale === 'ru' ? 'Красный BMW E30 проверка в гараже - автосервис' : 'Red BMW E30 car inspection in garage - automotive inspection service',
          },
        }}
        primaryCta={{
          text: heroCtaText,
          href: heroCtaHref,
        }}
        roadsideAssistance={{
          phone: roadsidePhone,
          locale: locale as 'lv' | 'en' | 'ru',
        }}
        className="min-h-screen"
      />

      {/* Section 2: Scrollable Testimonials */}
      <section className="relative bg-background/95 py-8 backdrop-blur-sm md:py-12">
        {/* Decorative Wave Transition */}
        <div className="pointer-events-none absolute -top-16 right-0 left-0 h-16 overflow-hidden">
          <svg
            className="h-full w-full"
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,64 L0,32 Q180,16 360,24 T720,28 T1080,24 T1440,28 L1440,64 Z"
              fill="currentColor"
              className="text-background/95"
            />
          </svg>
        </div>

        {/* Gradient fade for extra smoothness */}
        <div className="pointer-events-none absolute -top-20 right-0 left-0 h-20 bg-gradient-to-b from-transparent via-background/30 to-background/95" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:text-3xl">
            {locale === 'lv' ? HOMEPAGE_COPY.testimonials.headline : locale === 'ru' ? 'ОТЗЫВЫ' : 'TESTIMONIALS'}
          </h2>
          <p className="mb-8 text-center md:text-lg" style={{ color: 'oklch(0.85 0 0)' }}>
            {locale === 'lv' ? HOMEPAGE_COPY.testimonials.subheadline : locale === 'ru' ? 'Посмотрите, что говорят наши клиенты:' : 'See what our clients say about us:'}
          </p>
          <ScrollableTestimonials testimonials={testimonials} />
        </div>
      </section>

      {/* Section 3: Three Service Cards (Photo Backgrounds) */}
      <section className="relative bg-gradient-to-b from-background via-muted/15 to-background py-16 md:py-24">
        {/* Decorative Wave Transition */}
        <div className="pointer-events-none absolute -top-16 right-0 left-0 h-16 overflow-hidden">
          <svg
            className="h-full w-full"
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,64 L0,32 Q180,16 360,24 T720,28 T1080,24 T1440,28 L1440,64 Z"
              fill="currentColor"
              className="text-background"
            />
          </svg>
        </div>

        {/* Gradient fade for extra smoothness */}
        <div className="pointer-events-none absolute -top-20 right-0 left-0 h-20 bg-gradient-to-b from-transparent via-background/30 to-background" />

        <div className="relative z-10 container mx-auto px-4">
          {/* Section Headline and Subheadline */}
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              {locale === 'lv' ? HOMEPAGE_COPY.services.headline : locale === 'ru' ? 'НАШИ УСЛУГИ' : t('services_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg md:text-xl" style={{ color: 'oklch(0.85 0 0)' }}>
              {locale === 'lv' ? HOMEPAGE_COPY.services.subheadline : locale === 'ru' ? 'Независимые эксперты, помогающие избежать плохой покупки. Профессиональные услуги автоэкспертов по всей Европе.' : 'Independent experts helping you avoid bad purchases. Professional automotive expert services across Europe.'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-3 md:items-stretch">
            {/* Left: Auto meklēšana un piegāde */}
            <div className="relative flex flex-col">
              <ServiceCard
                icon={MagnifyingGlassIcon}
                title={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[1].title : locale === 'ru' ? 'Поиск и доставка авто' : t('service_car_search')}
                description={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[1].description : locale === 'ru' ? 'Полный сервис - поиск автомобиля, техническая проверка, доставка до дверей и помощь с документацией.' : t('service_car_search_desc')}
                price={locale === 'lv' ? 'No €350' : locale === 'ru' ? 'ОТ €350' : 'FROM €350'}
                showEuropeBadge={true}
                features={
                  locale === 'lv'
                    ? [
                        'Auto meklēšana pēc jūsu prasībām un budžeta visā Eiropā',
                        'Pilna tehniskā pārbaude ar profesionālu aprīkojumu',
                        'Dzinēja diagnostika un VIN vēstures pārbaude vairākās datubāzēs',
                        'Virsbūves, krāsojuma un salona elementu inspekcija',
                        'Detalizēts pārskats ar fotogrāfijām un ekspertu atzinumu',
                        'Piegāde līdz durvīm uz jūsu norādīto adresi',
                        'Dokumentu noformēšanas palīdzība un pārbaude',
                        'Sarunu process ar pārdevēju un cenu sarunas',
                        'Dīler centru un ražotāju datu bāzēs glabātā servisa vēsture',
                        'Negadījumu un remonta vēstures pārbaude',
                        'Komplektācijas atbilstības VIN numuram pārbaude',
                        'Viss, kamēr tu vari palikt mājās - pilns serviss no A līdz Z',
                      ]
                    : locale === 'ru'
                      ? [
                          'Поиск автомобиля по вашим требованиям и бюджету по всей Европе',
                          'Полная техническая проверка профессиональным оборудованием',
                          'Диагностика двигателя и проверка истории VIN в нескольких базах данных',
                          'Проверка кузова, краски и элементов салона',
                          'Детальный отчет с фотографиями и экспертным заключением',
                          'Доставка до дверей по указанному адресу',
                          'Помощь с оформлением и проверкой документов',
                          'Процесс переговоров с продавцом и торг',
                          'История обслуживания в базах данных дилерских центров и производителей',
                          'Проверка истории аварий и ремонтов',
                          'Проверка соответствия комплектации VIN номеру',
                          'Все, пока вы можете оставаться дома - полный сервис от А до Я',
                        ]
                      : [
                          'Vehicle sourcing according to your requirements and budget across Europe',
                          'Full technical inspection with professional equipment',
                          'Engine diagnostics and VIN history check in multiple databases',
                          'Body, paint, and interior element inspection',
                          'Detailed report with photos and expert opinion',
                          'Delivery to your door at your specified address',
                          'Documentation assistance and verification',
                          'Negotiation process with seller and price discussions',
                          'Service history stored in dealer and manufacturer databases',
                          'Accident and repair history verification',
                          'Completeness verification against VIN number',
                          'Everything while you can stay home - full service from A to Z',
                        ]
                }
                ctaText={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[1].ctaText : locale === 'ru' ? 'Начать поиск' : 'Start Search'}
                ctaHref={`/${locale}/services`}
                backgroundImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&q=80"
              />
              <p className="absolute right-0 -bottom-6 left-0 mt-2 text-center text-xs text-muted-foreground">
                {locale === 'lv' ? '* Serviss pieejams visās Eiropas valstīs. Detalizētāka informācija pēc pieprasījuma.' : locale === 'ru' ? '* Сервис доступен во всех странах Европы. Более подробная информация по запросу.' : '* Service available in all European countries. More detailed information upon request.'}
              </p>
            </div>
            {/* Middle: Pamatpārbaude (Most Popular) */}
            <ServiceCard
              icon={Car}
              title={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[0].title : locale === 'ru' ? 'Базовая проверка' : t('service_pre_purchase')}
              description={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[0].description : locale === 'ru' ? 'Детальная техническая проверка транспортного средства перед покупкой по всей Европе. Диагностика двигателя, проверка истории VIN, проверка кузова и краски.' : t('service_pre_purchase_desc')}
              price={locale === 'lv' ? 'No €100' : locale === 'ru' ? 'ОТ €100' : 'FROM €100'}
              variant="featured"
              features={
                locale === 'lv'
                  ? [
                      'Dzinēja diagnostika ar profesionālu aprīkojumu',
                      'VIN vēstures pārbaude vairākās datubāzēs',
                      'Virsbūves un krāsojuma inspekcija',
                      'Elektrobloku skenēšana un kļūdu kodu lasīšana',
                      'Krāsas biezuma mērīšana un remonta pēdu identificēšana',
                      'Salona elementu un drošības jostu pārbaude',
                      'Tehnisko šķidrumu kvalitātes un līmeņa novērtējums',
                      'Riepu protektora un nodiluma pārbaude',
                      'Balstiekārtas un bremžu sistēmas novērtējums',
                      'Akumulatora un elektroapgādes sistēmas pārbaude',
                      'Testa brauciens un funkcionalitātes verifikācija',
                      'Detalizēts pārskats ar fotogrāfijām un ekspertu atzinumu',
                    ]
                  : locale === 'ru'
                    ? [
                        'Диагностика двигателя профессиональным оборудованием',
                        'Проверка истории VIN в нескольких базах данных',
                        'Проверка кузова и краски',
                        'Сканирование электронных блоков и чтение кодов ошибок',
                        'Измерение толщины краски и выявление следов ремонта',
                        'Проверка элементов салона и ремней безопасности',
                        'Оценка качества и уровня технических жидкостей',
                        'Проверка протектора шин и износа',
                        'Оценка подвески и тормозной системы',
                        'Проверка аккумулятора и системы электроснабжения',
                        'Тест-драйв и проверка функциональности',
                        'Детальный отчет с фотографиями и экспертным заключением',
                      ]
                    : [
                        'Engine diagnostics with professional equipment',
                        'VIN history check in multiple databases',
                        'Body and paint inspection',
                        'Electronic unit scanning and error code reading',
                        'Paint thickness measurement and repair trace identification',
                        'Interior elements and safety belt inspection',
                        'Technical fluid quality and level assessment',
                        'Tire tread and wear inspection',
                        'Suspension and brake system assessment',
                        'Battery and electrical system inspection',
                        'Test drive and functionality verification',
                        'Detailed report with photos and expert opinion',
                      ]
              }
              ctaText={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[0].ctaText : locale === 'ru' ? 'Заказать проверку' : 'Order Inspection'}
              ctaHref={`/${locale}/services`}
              backgroundImage="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&q=80"
            />
            {/* Right: Mobilais serviss */}
            <ServiceCard
              icon={WrenchScrewdriverIcon}
              title={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[2].title : locale === 'ru' ? 'Мобильный сервис' : t('service_mobile')}
              description={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[2].description : locale === 'ru' ? 'Помощь на дороге - диагностика ошибок, проверка аккумулятора, запуск двигателя, программирование ECU и ремонт ключей.' : t('service_mobile_desc')}
              price={locale === 'lv' ? 'No €50' : locale === 'ru' ? 'ОТ €50' : 'FROM €50'}
              showLatviaBadge={true}
              features={
                locale === 'lv'
                  ? [...(HOMEPAGE_COPY.serviceDetails[2].benefits || [])]
                  : locale === 'ru'
                    ? [
                        'Диагностика на месте',
                        'Тест батареи',
                        'Ремонт',
                        'Быстрая реакция',
                      ]
                    : [
                        'On-location diagnostics',
                        'Battery testing',
                        'Repairs',
                        'Fast response',
                      ]
              }
              ctaText={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[2].ctaText : locale === 'ru' ? 'Вызвать специалиста' : 'Call Specialist'}
              ctaHref={`/${locale}/services`}
              backgroundImage="https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&h=600&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Value Proposition Grid (How it works) */}
      <ValuePropositionGrid
        headline={locale === 'lv' ? HOMEPAGE_COPY.valueProposition.headline : locale === 'ru' ? 'КАК ЭТО РАБОТАЕТ?' : 'HOW IT WORKS?'}
        items={[
          {
            icon: <MagnifyingGlassIcon className="h-12 w-12 text-primary" />,
            title: locale === 'lv' ? HOMEPAGE_COPY.valueProposition.items[0].title : locale === 'ru' ? 'Вы находите желаемый автомобиль' : 'You Find the Desired Car',
            description: locale === 'lv' ? HOMEPAGE_COPY.valueProposition.items[0].description : locale === 'ru' ? 'Вы выбираете транспортное средство, которое вас интересует, и просто связываетесь с нами. Не нужно никуда ехать.' : 'You choose a vehicle that interests you and simply contact us. No need to travel anywhere.',
          },
          {
            icon: <ClipboardDocumentCheckIcon className="h-12 w-12 text-primary" />,
            title: locale === 'lv' ? HOMEPAGE_COPY.valueProposition.items[1].title : locale === 'ru' ? 'Мы проверяем и документируем' : 'We Inspect and Document',
            description: locale === 'lv' ? HOMEPAGE_COPY.valueProposition.items[1].description : locale === 'ru' ? 'Наш эксперт приезжает на место нахождения автомобиля и проводит детальную техническую проверку профессиональным оборудованием. Вы можете остаться дома.' : 'Our expert comes to the vehicle location and performs a detailed technical inspection with professional equipment. You can stay home.',
          },
          {
            icon: <DocumentTextIcon className="h-12 w-12 text-primary" />,
            title: locale === 'lv' ? HOMEPAGE_COPY.valueProposition.items[2].title : locale === 'ru' ? 'Вы получаете полную информацию' : 'You Receive Full Information',
            description: locale === 'lv' ? HOMEPAGE_COPY.valueProposition.items[2].description : locale === 'ru' ? 'Вы получаете детальный отчет с фотографиями и экспертным заключением о состоянии автомобиля. Теперь вы можете принять информированное решение.' : 'You receive a detailed report with photos and expert opinion on the vehicle condition. Now you can make an informed decision.',
          },
        ]}
      />

      {/* Section 5: Inspection Categories Grid (6 boxes + CTA) */}
      <InspectionCategoriesGrid
        headline={locale === 'lv' ? HOMEPAGE_COPY.inspectionCategories.headline : locale === 'ru' ? 'ЧТО МЫ ПРОВЕРЯЕМ?' : 'WHAT DO WE INSPECT?'}
        categories={
          locale === 'lv'
            ? HOMEPAGE_COPY.inspectionCategories.categories.map((category, index) => {
                // Map each category to an appropriate icon
                const iconMap = [
                  <Cog6ToothIcon className="h-10 w-10 text-primary" key="engine" />, // Dzinējs (Engine)
                  <HashtagIcon className="h-10 w-10 text-primary" key="vin" />, // Šasijas numurs (VIN)
                  <RectangleStackIcon className="h-10 w-10 text-primary" key="body" />, // Virsbūve un salons (Body)
                  <BeakerIcon className="h-10 w-10 text-primary" key="fluids" />, // Tehniskie šķidrumi (Fluids)
                  <Car className="h-10 w-10 text-primary" key="suspension" />, // Balstiekārta (Suspension)
                  <BoltIcon className="h-10 w-10 text-primary" key="electrical" />, // Elektroapgāde (Electrical)
                ];
                return {
                  icon: iconMap[index],
                  title: category.title,
                  description: category.description,
                  items: [...category.items],
                };
              })
            : [
                // English/Russian placeholders - can be expanded later
                {
                  icon: <Cog6ToothIcon className="h-10 w-10 text-primary" />,
                  title: locale === 'ru' ? 'Двигатель' : 'Engine',
                  description: locale === 'ru' ? 'Визуальный осмотр и компьютерная диагностика двигателя' : 'Visual inspection and computer diagnostics of the engine',
                  items: [],
                },
                {
                  icon: <HashtagIcon className="h-10 w-10 text-primary" />,
                  title: locale === 'ru' ? 'VIN номер' : 'VIN Number',
                  description: locale === 'ru' ? 'Проверка VIN номера в международных базах данных' : 'VIN number check in international databases',
                  items: [],
                },
              ]
        }
        ctaText={locale === 'lv' ? HOMEPAGE_COPY.inspectionCategories.ctaText : locale === 'ru' ? 'Заказать проверку' : 'Order Inspection'}
        ctaHref={`/${locale}/services`}
      />

      {/* Section 6: Anti-Fraud Educational Section (6 tactics, alternating bg) */}
      <AntiFraudSection
        headline={locale === 'lv' ? HOMEPAGE_COPY.antiFraud.headline : locale === 'ru' ? 'МОШЕННИЧЕСКИЕ СХЕМЫ:' : 'FRAUD TACTICS:'}
        tactics={
          locale === 'lv'
            ? HOMEPAGE_COPY.antiFraud.tactics
            : locale === 'ru'
              ? [
                  {
                    title: 'Корректировка реального пробега',
                    description: 'Изменяя показания одометра, продавец нечестно увеличивает стоимость автомобиля, но сокращает срок службы его узлов.',
                  },
                  {
                    title: 'Скрытые следы аварий',
                    description: 'В большинстве случаев ремонт выполнен некачественно, такие автомобили небезопасны и могут вызвать большие проблемы в эксплуатации.',
                  },
                ]
              : [
                  {
                    title: 'Mileage Tampering',
                    description: 'By altering odometer readings, sellers dishonestly increase vehicle value but reduce component lifespan.',
                  },
                  {
                    title: 'Hidden Accident Damage',
                    description: 'Most repairs are done poorly, making such vehicles unsafe and potentially causing major problems.',
                  },
                ]
        }
      />

      {/* Section 7: Instagram Feed Integration */}
      <InstagramFeedSection
        handle={HOMEPAGE_COPY.instagram.handle}
        profileUrl={HOMEPAGE_COPY.instagram.profileUrl}
        posts={[
          {
            imageUrl: 'https://picsum.photos/seed/instagram-post-1/400/400',
            caption: locale === 'lv' ? 'Instagram ziņa' : locale === 'ru' ? 'Пост в Instagram' : 'Instagram post',
            postUrl: 'https://www.instagram.com/teg.auto/p/DO6TgerCB28/',
            authorName: 'teg.auto',
          },
          {
            imageUrl: 'https://picsum.photos/seed/instagram-post-2/400/400',
            caption: locale === 'lv' ? 'Instagram ziņa' : locale === 'ru' ? 'Пост в Instagram' : 'Instagram post',
            postUrl: 'https://www.instagram.com/teg.auto/p/DM-FjY4CKw3/',
            authorName: 'teg.auto',
          },
          {
            imageUrl: 'https://picsum.photos/seed/instagram-reel/400/400',
            caption: locale === 'lv' ? 'Instagram reel' : locale === 'ru' ? 'Reel в Instagram' : 'Instagram reel',
            postUrl: 'https://www.instagram.com/teg.auto/reel/CuMFIhkuLDT/',
            authorName: 'teg.auto',
          },
        ]}
      />

      {/* Section 8: Dark Footer with Form */}
      <DarkFooterWithForm
        headline={locale === 'lv' ? HOMEPAGE_COPY.darkFooterForm.headline : locale === 'ru' ? 'Мы будем рады получить ваше сообщение.' : 'We would be happy to receive your message.'}
        introText={locale === 'lv' ? HOMEPAGE_COPY.darkFooterForm.introText : locale === 'ru' ? 'Спасибо за проявленный интерес, мы ответим как можно скорее.' : 'Thank you for your interest, we will respond as soon as possible.'}
        contactInfo={{
          phone: '+371 25 201 710',
          email: 'info@teg.lv',
        }}
      />
    </main>
  );
}
