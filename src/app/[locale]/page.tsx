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
import { AntiFraudSection } from '@/components/anti-fraud/AntiFraudSection';
import { DarkFooterWithForm } from '@/components/footer/DarkFooterWithForm';
import { Hero } from '@/components/hero/Hero';
import { ScrollableTestimonials } from '@/components/hero/ScrollableTestimonials';
import { InspectionCategoriesGrid } from '@/components/inspection/InspectionCategoriesGrid';
import { ServiceCard } from '@/components/services/ServiceCard';
import { InstagramFeedSection } from '@/components/social/InstagramFeedSection';
import { ValuePropositionGrid } from '@/components/value-proposition/ValuePropositionGrid';
import { HOMEPAGE_COPY } from '@/lib/constants/copy';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Section 1: Hero with Modern Split Layout */}
      <Hero
        layout="split"
        backgroundImage="/images/dmitry-timofeew-UU18rjWiQmo-unsplash.jpg"
        overlayOpacity="dark"
        titleUppercase={false}
        title={HOMEPAGE_COPY.hero.headline}
        subtitle={HOMEPAGE_COPY.hero.subheadline}
        highlightText="pirms pērc"
        eyebrow={{
          text: 'Neatkarīgi auto eksperti',
          showStar: true,
        }}
        stats={[
          {
            value: 'Neatkarīgi no dīleriem',
            label: 'Objektīva patiesība',
            icon: CheckCircleIcon,
          },
          {
            value: 'Detalizēti pārskati',
            label: '100+ fotogrāfijas',
            icon: DocumentTextIcon,
          },
          {
            value: 'Visā Eiropā',
            label: 'Nav nepieciešams ceļot',
            icon: GlobeAltIcon,
          },
        ]}
        mediaCard={{
          image: {
            src: 'https://images.unsplash.com/photo-1585062168782-0459bfd34a0c?w=800&h=600&fit=crop&q=80',
            alt: 'Red BMW E30 car inspection in garage - automotive inspection service',
          },
        }}
        primaryCta={{
          text: HOMEPAGE_COPY.hero.ctaText,
          href: HOMEPAGE_COPY.hero.ctaHref,
        }}
        roadsideAssistance={{
          phone: {
            display: '+371 25 201 710',
            href: 'tel:+37125201710',
          },
          locale: 'lv',
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
            {HOMEPAGE_COPY.testimonials.headline}
          </h2>
          <p className="mb-8 text-center text-muted-foreground md:text-lg">
            {HOMEPAGE_COPY.testimonials.subheadline}
          </p>
          <ScrollableTestimonials
            testimonials={[
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
            ]}
          />
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
              {HOMEPAGE_COPY.services.headline}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              {HOMEPAGE_COPY.services.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-3 md:items-stretch">
            {/* Left: Auto meklēšana un piegāde */}
            <div className="relative flex flex-col">
              <ServiceCard
                icon={MagnifyingGlassIcon}
                title={HOMEPAGE_COPY.serviceCards[1].title}
                description={HOMEPAGE_COPY.serviceCards[1].description}
                price="No €350"
                showEuropeBadge={true}
                features={[
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
                ]}
                ctaText={HOMEPAGE_COPY.serviceCards[1].ctaText}
                ctaHref={HOMEPAGE_COPY.serviceCards[1].ctaHref}
                backgroundImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&q=80"
              />
              <p className="absolute right-0 -bottom-6 left-0 mt-2 text-center text-xs text-muted-foreground">
                * Serviss pieejams visās Eiropas valstīs. Detalizētāka informācija pēc pieprasījuma.
              </p>
            </div>
            {/* Middle: Pamatpārbaude (Most Popular) */}
            <ServiceCard
              icon={Car}
              title={HOMEPAGE_COPY.serviceCards[0].title}
              description={HOMEPAGE_COPY.serviceCards[0].description}
              price="No €100"
              variant="featured"
              features={[
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
              ]}
              ctaText={HOMEPAGE_COPY.serviceCards[0].ctaText}
              ctaHref={HOMEPAGE_COPY.serviceCards[0].ctaHref}
              backgroundImage="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&q=80"
            />
            {/* Right: Mobilais serviss */}
            <ServiceCard
              icon={WrenchScrewdriverIcon}
              title={HOMEPAGE_COPY.serviceCards[2].title}
              description={HOMEPAGE_COPY.serviceCards[2].description}
              price="No €50"
              showLatviaBadge={true}
              features={HOMEPAGE_COPY.serviceDetails[2].benefits ? [...HOMEPAGE_COPY.serviceDetails[2].benefits] : []}
              ctaText={HOMEPAGE_COPY.serviceCards[2].ctaText}
              ctaHref={HOMEPAGE_COPY.serviceCards[2].ctaHref}
              backgroundImage="https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&h=600&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Value Proposition Grid (How it works) */}
      <ValuePropositionGrid
        headline={HOMEPAGE_COPY.valueProposition.headline}
        items={[
          {
            icon: <MagnifyingGlassIcon className="h-12 w-12 text-primary" />,
            title: HOMEPAGE_COPY.valueProposition.items[0].title,
            description: HOMEPAGE_COPY.valueProposition.items[0].description,
          },
          {
            icon: <ClipboardDocumentCheckIcon className="h-12 w-12 text-primary" />,
            title: HOMEPAGE_COPY.valueProposition.items[1].title,
            description: HOMEPAGE_COPY.valueProposition.items[1].description,
          },
          {
            icon: <DocumentTextIcon className="h-12 w-12 text-primary" />,
            title: HOMEPAGE_COPY.valueProposition.items[2].title,
            description: HOMEPAGE_COPY.valueProposition.items[2].description,
          },
        ]}
      />

      {/* Section 4: Inspection Categories Grid (6 boxes + CTA) */}
      <InspectionCategoriesGrid
        headline={HOMEPAGE_COPY.inspectionCategories.headline}
        categories={HOMEPAGE_COPY.inspectionCategories.categories.map((category, index) => {
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
        })}
        ctaText={HOMEPAGE_COPY.inspectionCategories.ctaText}
        ctaHref={HOMEPAGE_COPY.inspectionCategories.ctaHref}
      />

      {/* Section 5: Anti-Fraud Educational Section (6 tactics, alternating bg) */}
      <AntiFraudSection
        headline={HOMEPAGE_COPY.antiFraud.headline}
        tactics={HOMEPAGE_COPY.antiFraud.tactics}
      />

      {/* Section 6: Instagram Feed Integration */}
      <InstagramFeedSection
        handle={HOMEPAGE_COPY.instagram.handle}
        profileUrl={HOMEPAGE_COPY.instagram.profileUrl}
        posts={[
          {
            // TODO: Add actual image URL - Instagram requires API access to fetch images from post URLs
            // To get image URL manually: Open the post URL below in browser → right-click image → "Copy image address"
            imageUrl: 'https://picsum.photos/seed/instagram-post-1/400/400', // Replace with actual Instagram image URL
            caption: 'Instagram post caption', // Update with actual caption
            postUrl: 'https://www.instagram.com/teg.auto/p/DO6TgerCB28/',
            authorName: 'teg.auto',
          },
          {
            // TODO: Add actual image URL - Instagram requires API access to fetch images from post URLs
            // To get image URL manually: Open the post URL below in browser → right-click image → "Copy image address"
            imageUrl: 'https://picsum.photos/seed/instagram-post-2/400/400', // Replace with actual Instagram image URL
            caption: 'Instagram post caption', // Update with actual caption
            postUrl: 'https://www.instagram.com/teg.auto/p/DM-FjY4CKw3/',
            authorName: 'teg.auto',
          },
          {
            // TODO: Add actual image URL - Instagram requires API access to fetch images from post URLs
            // To get image URL manually: Open the post URL below in browser → right-click image → "Copy image address"
            imageUrl: 'https://picsum.photos/seed/instagram-reel/400/400', // Replace with actual Instagram image URL
            caption: 'Instagram reel caption', // Update with actual caption
            postUrl: 'https://www.instagram.com/teg.auto/reel/CuMFIhkuLDT/',
            authorName: 'teg.auto',
          },
        ]}
      />

      {/* Section 7: Dark Footer with Form */}
      <DarkFooterWithForm
        headline={HOMEPAGE_COPY.darkFooterForm.headline}
        introText={HOMEPAGE_COPY.darkFooterForm.introText}
        contactInfo={{
          phone: '+371 25 201 710',
          email: 'info@teg.lv',
        }}
      />
    </main>
  );
}
