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
    : t('hero.title');

  const heroSubtitle = locale === 'lv'
    ? HOMEPAGE_COPY.hero.subheadline
    : t('hero.subtitle');

  const heroCtaText = locale === 'lv'
    ? HOMEPAGE_COPY.hero.ctaText
    : t('hero.ctaText');

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
    : t.raw('testimonials.items').map((item: any, index: number) => ({
        id: String(index + 1),
        quote: item.quote,
        author: item.author,
        rating: 5,
        location: item.location,
      }));

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
          text: locale === 'lv' ? 'Neatkarīgi auto eksperti' : t('hero.eyebrow'),
          showStar: true,
        }}
        stats={[
          {
            value: locale === 'lv' ? 'Neatkarīgi no dīleriem' : t('hero.stats.independent.value'),
            label: locale === 'lv' ? 'Objektīva patiesība' : t('hero.stats.independent.label'),
            icon: CheckCircleIcon,
          },
          {
            value: locale === 'lv' ? 'Detalizēti pārskati' : t('hero.stats.reports.value'),
            label: locale === 'lv' ? '100+ fotogrāfijas' : t('hero.stats.reports.label'),
            icon: DocumentTextIcon,
          },
          {
            value: locale === 'lv' ? 'Visā Eiropā' : t('hero.stats.europe.value'),
            label: locale === 'lv' ? 'Nav nepieciešams ceļot' : t('hero.stats.europe.label'),
            icon: GlobeAltIcon,
          },
        ]}
        mediaCard={{
          image: {
            src: 'https://images.unsplash.com/photo-1585062168782-0459bfd34a0c?w=800&h=600&fit=crop&q=80',
            alt: locale === 'lv' ? 'Sarkans BMW E30 auto pārbaude garāžā - automobiļu pārbaudes serviss' : t('hero.mediaCardAlt'),
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
            {locale === 'lv' ? HOMEPAGE_COPY.testimonials.headline : t('testimonials.headline')}
          </h2>
          <p className="mb-8 text-center md:text-lg" style={{ color: 'oklch(0.85 0 0)' }}>
            {locale === 'lv' ? HOMEPAGE_COPY.testimonials.subheadline : t('testimonials.subheadline')}
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
              {locale === 'lv' ? HOMEPAGE_COPY.services.headline : t('services_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg md:text-xl" style={{ color: 'oklch(0.85 0 0)' }}>
              {locale === 'lv' ? HOMEPAGE_COPY.services.subheadline : t('services.subheadline')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-3 md:items-stretch">
            {/* Left: Auto meklēšana un piegāde */}
            <div className="relative flex flex-col">
              <ServiceCard
                icon={MagnifyingGlassIcon}
                title={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[1].title : t('services.carSearch.title')}
                description={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[1].description : t('services.carSearch.description')}
                price={locale === 'lv' ? 'No €350' : t('services.carSearch.price')}
                showEuropeBadge={true}
                badgeTexts={{
                  europe: locale === 'lv' ? undefined : t('badges.europe'),
                }}
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
                    : t.raw('services.carSearch.features')
                }
                ctaText={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[1].ctaText : t('services.carSearch.ctaText')}
                ctaHref={`/${locale}/services`}
                backgroundImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&q=80"
              />
              <p className="absolute right-0 -bottom-6 left-0 mt-2 text-center text-xs text-muted-foreground">
                {locale === 'lv' ? '* Serviss pieejams visās Eiropas valstīs. Detalizētāka informācija pēc pieprasījuma.' : t('services.carSearch.disclaimer')}
              </p>
            </div>
            {/* Middle: Pamatpārbaude (Most Popular) */}
            <ServiceCard
              icon={Car}
              title={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[0].title : t('services.prePurchase.title')}
              description={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[0].description : t('services.prePurchase.description')}
              price={locale === 'lv' ? 'No €100' : t('services.prePurchase.price')}
              variant="featured"
              badgeTexts={{
                popular: locale === 'lv' ? undefined : t('badges.popular'),
              }}
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
                  : t.raw('services.prePurchase.features')
              }
              ctaText={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[0].ctaText : t('services.prePurchase.ctaText')}
              ctaHref={`/${locale}/services`}
              backgroundImage="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&q=80"
            />
            {/* Right: Mobilais serviss */}
            <ServiceCard
              icon={WrenchScrewdriverIcon}
              title={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[2].title : t('services.mobile.title')}
              description={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[2].description : t('services.mobile.description')}
              price={locale === 'lv' ? 'No €50' : t('services.mobile.price')}
              showLatviaBadge={true}
              badgeTexts={{
                latvia: locale === 'lv' ? undefined : t('badges.latvia'),
              }}
              features={
                locale === 'lv'
                  ? [...(HOMEPAGE_COPY.serviceDetails[2].benefits || [])]
                  : t.raw('services.mobile.features')
              }
              ctaText={locale === 'lv' ? HOMEPAGE_COPY.serviceCards[2].ctaText : t('services.mobile.ctaText')}
              ctaHref={`/${locale}/services`}
              backgroundImage="https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&h=600&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Value Proposition Grid (How it works) */}
      <ValuePropositionGrid
        headline={locale === 'lv' ? HOMEPAGE_COPY.valueProposition.headline : t('valueProposition.headline')}
        items={
          locale === 'lv'
            ? HOMEPAGE_COPY.valueProposition.items.map((item, index) => ({
                icon: index === 0 ? <MagnifyingGlassIcon className="h-12 w-12 text-primary" /> : index === 1 ? <ClipboardDocumentCheckIcon className="h-12 w-12 text-primary" /> : <DocumentTextIcon className="h-12 w-12 text-primary" />,
                title: item.title,
                description: item.description,
              }))
            : t.raw('valueProposition.items').map((item: any, index: number) => ({
                icon: index === 0 ? <MagnifyingGlassIcon className="h-12 w-12 text-primary" /> : index === 1 ? <ClipboardDocumentCheckIcon className="h-12 w-12 text-primary" /> : <DocumentTextIcon className="h-12 w-12 text-primary" />,
                title: item.title,
                description: item.description,
              }))
        }
      />

      {/* Section 5: Inspection Categories Grid (6 boxes + CTA) */}
      <InspectionCategoriesGrid
        headline={locale === 'lv' ? HOMEPAGE_COPY.inspectionCategories.headline : t('inspectionCategories.headline')}
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
            : t.raw('inspectionCategories.categories').map((category: any, index: number) => {
                const iconMap = [
                  <Cog6ToothIcon className="h-10 w-10 text-primary" key="engine" />,
                  <HashtagIcon className="h-10 w-10 text-primary" key="vin" />,
                  <RectangleStackIcon className="h-10 w-10 text-primary" key="body" />,
                  <BeakerIcon className="h-10 w-10 text-primary" key="fluids" />,
                  <Car className="h-10 w-10 text-primary" key="suspension" />,
                  <BoltIcon className="h-10 w-10 text-primary" key="electrical" />,
                ];
                return {
                  icon: iconMap[index],
                  title: category.title,
                  description: category.description,
                  items: category.items || [],
                };
              })
        }
        ctaText={locale === 'lv' ? HOMEPAGE_COPY.inspectionCategories.ctaText : t('inspectionCategories.ctaText')}
        ctaHref={`/${locale}/services`}
      />

      {/* Section 6: Anti-Fraud Educational Section (6 tactics, alternating bg) */}
      <AntiFraudSection
        headline={locale === 'lv' ? HOMEPAGE_COPY.antiFraud.headline : t('antiFraud.headline')}
        subheadline={locale === 'lv' ? 'Šie ir visbiežāk sastopamie krāpnieku paņēmieni, ar kuriem jūs varat saskarties, pērkot lietotu auto. Mūsu eksperti palīdz jums tos atklāt pirms pirkuma.' : t('antiFraud.subheadline')}
        expertDetectsText={locale === 'lv' ? 'Mūsu eksperti to atklāj' : t('antiFraud.expertDetects')}
        ctaText={locale === 'lv' ? 'Pasūtiet mūsu pārbaudi un izvairieties no šiem krāpniekiem' : t('antiFraud.ctaText')}
        tactics={
          locale === 'lv'
            ? HOMEPAGE_COPY.antiFraud.tactics
            : t.raw('antiFraud.tactics')
        }
      />

      {/* Section 7: Instagram Feed Integration */}
      <InstagramFeedSection
        handle={HOMEPAGE_COPY.instagram.handle}
        profileUrl={HOMEPAGE_COPY.instagram.profileUrl}
        posts={[
          {
            imageUrl: 'https://picsum.photos/seed/instagram-post-1/400/400',
            caption: locale === 'lv' ? 'Instagram ziņa' : t('instagram.post'),
            postUrl: 'https://www.instagram.com/teg.auto/p/DO6TgerCB28/',
            authorName: 'teg.auto',
          },
          {
            imageUrl: 'https://picsum.photos/seed/instagram-post-2/400/400',
            caption: locale === 'lv' ? 'Instagram ziņa' : t('instagram.post'),
            postUrl: 'https://www.instagram.com/teg.auto/p/DM-FjY4CKw3/',
            authorName: 'teg.auto',
          },
          {
            imageUrl: 'https://picsum.photos/seed/instagram-reel/400/400',
            caption: locale === 'lv' ? 'Instagram reel' : t('instagram.reel'),
            postUrl: 'https://www.instagram.com/teg.auto/reel/CuMFIhkuLDT/',
            authorName: 'teg.auto',
          },
        ]}
      />

      {/* Section 8: Dark Footer with Form */}
      <DarkFooterWithForm
        headline={locale === 'lv' ? HOMEPAGE_COPY.darkFooterForm.headline : t('darkFooterForm.headline')}
        introText={locale === 'lv' ? HOMEPAGE_COPY.darkFooterForm.introText : t('darkFooterForm.introText')}
        contactInfo={{
          phone: '+371 25 201 710',
          email: 'info@teg.lv',
        }}
      />
    </main>
  );
}
