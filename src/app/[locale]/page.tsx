import {
  AlertCircle,
  Car,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe,
  Search,
  Wrench,
} from 'lucide-react';
import { AntiFraudSection } from '@/components/anti-fraud/AntiFraudSection';
import { DarkFooterWithForm } from '@/components/footer/DarkFooterWithForm';
import { Hero } from '@/components/hero/Hero';
import { InspectionCategoriesGrid } from '@/components/inspection/InspectionCategoriesGrid';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ServiceDetailSection } from '@/components/services/ServiceDetailSection';
import { InstagramFeedSection } from '@/components/social/InstagramFeedSection';
import { ValuePropositionGrid } from '@/components/value-proposition/ValuePropositionGrid';
import { HOMEPAGE_COPY } from '@/lib/constants/copy';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Section 1: Hero with Dark Overlay */}
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
        className="min-h-screen"
      />

      {/* Section 2: Value Proposition Grid (4 columns) */}
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

      {/* Section 3: Three Service Cards (Photo Backgrounds) */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ServiceCard
              icon={Car}
              title={HOMEPAGE_COPY.serviceCards[0].title}
              description={HOMEPAGE_COPY.serviceCards[0].description}
              price="No €100"
              ctaText={HOMEPAGE_COPY.serviceCards[0].ctaText}
              ctaHref={HOMEPAGE_COPY.serviceCards[0].ctaHref}
              backgroundImage="/images/service-inspection.jpg"
            />
            <ServiceCard
              icon={Wrench}
              title={HOMEPAGE_COPY.serviceCards[1].title}
              description={HOMEPAGE_COPY.serviceCards[1].description}
              price="No €350"
              ctaText={HOMEPAGE_COPY.serviceCards[1].ctaText}
              ctaHref={HOMEPAGE_COPY.serviceCards[1].ctaHref}
              backgroundImage="/images/service-purchase.jpg"
            />
            <ServiceCard
              icon={Globe}
              title={HOMEPAGE_COPY.serviceCards[2].title}
              description={HOMEPAGE_COPY.serviceCards[2].description}
              price="Visa Eiropa"
              ctaText={HOMEPAGE_COPY.serviceCards[2].ctaText}
              ctaHref={HOMEPAGE_COPY.serviceCards[2].ctaHref}
              backgroundImage="/images/service-europe.jpg"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Inspection Categories Grid (6 boxes + CTA) */}
      <InspectionCategoriesGrid
        headline={HOMEPAGE_COPY.inspectionCategories.headline}
        categories={HOMEPAGE_COPY.inspectionCategories.categories.map(category => ({
          icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
          title: category.title,
          items: [...category.items],
        }))}
        ctaText={HOMEPAGE_COPY.inspectionCategories.ctaText}
        ctaHref={HOMEPAGE_COPY.inspectionCategories.ctaHref}
      />

      {/* Section 5: Anti-Fraud Educational Section (6 tactics, alternating bg) */}
      <AntiFraudSection
        headline={HOMEPAGE_COPY.antiFraud.headline}
        tactics={HOMEPAGE_COPY.antiFraud.tactics.map(tactic => ({
          icon: <AlertCircle className="h-12 w-12 text-destructive" />,
          title: tactic.title,
          description: tactic.description,
        }))}
      />

      {/* Section 6: Service Detail 1 - Pre-Purchase Inspection (Image Left, White BG) */}
      <ServiceDetailSection
        image="/images/inspection-detail.jpg"
        imageAlt="Pre-purchase car inspection service"
        imagePosition="left"
        title={HOMEPAGE_COPY.serviceDetails[0].title}
        description={HOMEPAGE_COPY.serviceDetails[0].description}
        ctaText={HOMEPAGE_COPY.serviceDetails[0].ctaText}
        ctaHref={HOMEPAGE_COPY.serviceDetails[0].ctaHref}
        backgroundColor="white"
      />

      {/* Section 7: Service Detail 2 - Car Search & Delivery (Image Right, Gray BG) */}
      <ServiceDetailSection
        image="/images/car-search-detail.jpg"
        imageAlt="Car search and delivery service"
        imagePosition="right"
        title={HOMEPAGE_COPY.serviceDetails[1].title}
        description={HOMEPAGE_COPY.serviceDetails[1].description}
        ctaText={HOMEPAGE_COPY.serviceDetails[1].ctaText}
        ctaHref={HOMEPAGE_COPY.serviceDetails[1].ctaHref}
        backgroundColor="muted"
      />

      {/* Section 8: Service Detail 3 - Mobile Roadside Service (Image Left, White BG) */}
      <ServiceDetailSection
        image="/images/roadside-service-detail.jpg"
        imageAlt="Mobile roadside service"
        imagePosition="left"
        title={HOMEPAGE_COPY.serviceDetails[2].title}
        description={(
          <>
            <p className="mb-4">{HOMEPAGE_COPY.serviceDetails[2].description}</p>
            {HOMEPAGE_COPY.serviceDetails[2].benefits && (
              <ul className="space-y-2">
                {HOMEPAGE_COPY.serviceDetails[2].benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="mt-1 mr-2 h-5 w-5 shrink-0 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
            {HOMEPAGE_COPY.serviceDetails[2].pricing && (
              <p className="mt-6 text-4xl font-bold text-primary md:text-5xl">
                {HOMEPAGE_COPY.serviceDetails[2].pricing}
              </p>
            )}
          </>
        )}
        ctaText={HOMEPAGE_COPY.serviceDetails[2].ctaText}
        ctaHref={HOMEPAGE_COPY.serviceDetails[2].ctaHref}
        backgroundColor="white"
      />

      {/* Section 9: Instagram Feed Integration */}
      <InstagramFeedSection
        handle={HOMEPAGE_COPY.instagram.handle}
        profileUrl={HOMEPAGE_COPY.instagram.profileUrl}
      />

      {/* Section 10: Dark Footer with Form */}
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
