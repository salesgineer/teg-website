import { Footer } from '@/components/navigation/Footer';
import { ServiceDetailSection } from '@/components/services/ServiceDetailSection';
import { HOMEPAGE_COPY } from '@/lib/constants/copy';

export default function ServicesPage() {
  return (
    <main>
      {/* Section 1: Pre-Purchase Inspection Details */}
      <ServiceDetailSection
        image="/images/services/inspection.jpg"
        imageAlt="Professional car inspection service"
        imagePosition="left"
        title={HOMEPAGE_COPY.serviceDetails[0].title}
        description={HOMEPAGE_COPY.serviceDetails[0].description}
        ctaText={HOMEPAGE_COPY.serviceDetails[0].ctaText}
        ctaHref={HOMEPAGE_COPY.serviceDetails[0].ctaHref}
        backgroundColor="white"
      />

      {/* Section 2: Car Search & Delivery Details */}
      <ServiceDetailSection
        image="/images/services/car-search.jpg"
        imageAlt="Car search and delivery service"
        imagePosition="right"
        title={HOMEPAGE_COPY.serviceDetails[1].title}
        description={HOMEPAGE_COPY.serviceDetails[1].description}
        ctaText={HOMEPAGE_COPY.serviceDetails[1].ctaText}
        ctaHref={HOMEPAGE_COPY.serviceDetails[1].ctaHref}
        backgroundColor="muted"
      />

      {/* Section 3: Mobile Roadside Service Details */}
      <ServiceDetailSection
        image="/images/services/mobile-service.jpg"
        imageAlt="Mobile roadside service"
        imagePosition="left"
        title={HOMEPAGE_COPY.serviceDetails[2].title}
        description={HOMEPAGE_COPY.serviceDetails[2].description}
        benefits={HOMEPAGE_COPY.serviceDetails[2].benefits ? [...HOMEPAGE_COPY.serviceDetails[2].benefits] : undefined}
        pricing={HOMEPAGE_COPY.serviceDetails[2].pricing}
        ctaText={HOMEPAGE_COPY.serviceDetails[2].ctaText}
        ctaHref={HOMEPAGE_COPY.serviceDetails[2].ctaHref}
        backgroundColor="white"
      />

      {/* Standard Footer */}
      <Footer />
    </main>
  );
}
