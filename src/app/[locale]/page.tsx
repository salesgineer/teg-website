import {
  Car,
  CarFront,
  ClipboardCheck,
  Cog,
  Droplets,
  FileText,
  Globe,
  Hash,
  Search,
  Wrench,
  Zap,
} from 'lucide-react';
import { AntiFraudSection } from '@/components/anti-fraud/AntiFraudSection';
import { DarkFooterWithForm } from '@/components/footer/DarkFooterWithForm';
import { Hero } from '@/components/hero/Hero';
import { InspectionCategoriesGrid } from '@/components/inspection/InspectionCategoriesGrid';
import { ServiceCard } from '@/components/services/ServiceCard';
import { InstagramFeedSection } from '@/components/social/InstagramFeedSection';
import { ValuePropositionGrid } from '@/components/value-proposition/ValuePropositionGrid';
import { HOMEPAGE_COPY } from '@/lib/constants/copy';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Section 1: Hero with Dark Overlay - Option B: Social Proof Hero */}
      <Hero
        backgroundImage="/images/hero-car.jpg"
        overlayOpacity="dark"
        titleUppercase={true}
        title={HOMEPAGE_COPY.hero.headline}
        subtitle={HOMEPAGE_COPY.hero.subheadline}
        primaryCta={{
          text: HOMEPAGE_COPY.hero.ctaText,
          href: HOMEPAGE_COPY.hero.ctaHref,
        }}
        // Option B: Social Proof Elements
        testimonials={{
          overallRating: HOMEPAGE_COPY.testimonials.overallRating,
          reviewCount: HOMEPAGE_COPY.testimonials.reviewCount,
          featuredTestimonial: HOMEPAGE_COPY.testimonials.featured,
        }}
        coverageBadge={{
          text: 'Pieejami visā Eiropā',
        }}
        phoneNumber={{
          display: '+371 25 201 710',
          href: 'tel:+37125201710',
          whatsapp: {
            href: 'https://wa.me/37125201710',
            text: 'WhatsApp',
          },
        }}
        className="min-h-screen"
      />

      {/* Section 2: Three Service Cards (Photo Backgrounds) */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
            {/* Left: Auto meklēšana un piegāde */}
            <ServiceCard
              icon={Wrench}
              title={HOMEPAGE_COPY.serviceCards[1].title}
              description={HOMEPAGE_COPY.serviceCards[1].description}
              price="No €350"
              features={[
                'Auto meklēšana pēc jūsu prasībām',
                'Pilna tehniskā pārbaude',
                'Piegāde līdz durvīm',
                'Dokumentu noformēšanas palīdzība',
                'Sarunu process ar pārdevēju',
                'Viss, kamēr tu vari palikt mājās',
              ]}
              ctaText={HOMEPAGE_COPY.serviceCards[1].ctaText}
              ctaHref={HOMEPAGE_COPY.serviceCards[1].ctaHref}
              backgroundImage="/images/service-purchase.jpg"
            />
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
                'Detalizēts pārskats ar fotogrāfijām',
                'Ekspertu atzinums par auto stāvokli',
                'Pārbaude visā Eiropā',
              ]}
              ctaText={HOMEPAGE_COPY.serviceCards[0].ctaText}
              ctaHref={HOMEPAGE_COPY.serviceCards[0].ctaHref}
              backgroundImage="/images/service-inspection.jpg"
            />
            {/* Right: Mobilais serviss */}
            <ServiceCard
              icon={Globe}
              title={HOMEPAGE_COPY.serviceCards[2].title}
              description={HOMEPAGE_COPY.serviceCards[2].description}
              price="No €30"
              features={[
                'Kļūdu diagnostika un dzēšana',
                'Akumulatora testēšana un maiņa',
                'ECU programmēšana un kodēšana',
                'Atslēgu izgatavošana un remonts',
                'Palīdzība pie riepas punktēšanas',
                'Bremžu un dzinēja remonti uz vietas',
              ]}
              ctaText={HOMEPAGE_COPY.serviceCards[2].ctaText}
              ctaHref={HOMEPAGE_COPY.serviceCards[2].ctaHref}
              backgroundImage="/images/service-europe.jpg"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Value Proposition Grid (How it works) */}
      <ValuePropositionGrid
        headline={HOMEPAGE_COPY.valueProposition.headline}
        items={[
          {
            icon: <Search className="h-12 w-12 text-primary" />,
            title: HOMEPAGE_COPY.valueProposition.items[0].title,
            description: HOMEPAGE_COPY.valueProposition.items[0].description,
          },
          {
            icon: <ClipboardCheck className="h-12 w-12 text-primary" />,
            title: HOMEPAGE_COPY.valueProposition.items[1].title,
            description: HOMEPAGE_COPY.valueProposition.items[1].description,
          },
          {
            icon: <FileText className="h-12 w-12 text-primary" />,
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
            <Cog className="h-10 w-10 text-primary" key="engine" />, // Dzinējs (Engine)
            <Hash className="h-10 w-10 text-primary" key="vin" />, // Šasijas numurs (VIN)
            <CarFront className="h-10 w-10 text-primary" key="body" />, // Virsbūve un salons (Body)
            <Droplets className="h-10 w-10 text-primary" key="fluids" />, // Tehniskie šķidrumi (Fluids)
            <Car className="h-10 w-10 text-primary" key="suspension" />, // Balstiekārta (Suspension)
            <Zap className="h-10 w-10 text-primary" key="electrical" />, // Elektroapgāde (Electrical)
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
