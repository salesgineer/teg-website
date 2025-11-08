import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { ImageGalleryGrid } from '@/components/gallery/ImageGalleryGrid';
import { Hero } from '@/components/hero/Hero';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/button';
import { CAR_PURCHASE_PAGE_COPY, HOMEPAGE_COPY } from '@/lib/constants/copy';

// Generate 60+ placeholder images for the gallery
// In production, these would be actual inspection photos
const generateGalleryImages = () => {
  const categories = [
    { name: 'engine', count: 15, prefix: 'Engine diagnostics' },
    { name: 'body', count: 12, prefix: 'Body inspection' },
    { name: 'interior', count: 10, prefix: 'Interior assessment' },
    { name: 'vin', count: 8, prefix: 'VIN and documentation' },
    { name: 'undercarriage', count: 10, prefix: 'Undercarriage check' },
    { name: 'mechanical', count: 12, prefix: 'Mechanical components' },
  ];

  const images = [];
  for (const category of categories) {
    for (let i = 1; i <= category.count; i++) {
      images.push({
        src: `/images/gallery/${category.name}/${category.name}-${i}.jpg`,
        alt: `${category.prefix} - Photo ${i}`,
        caption: `${category.prefix} ${i}`,
      });
    }
  }
  return images;
};

export default function CarPurchasePage() {
  const galleryImages = generateGalleryImages();

  return (
    <main>
      {/* Hero Section */}
      <Hero
        backgroundImage="/images/hero/car-purchase.jpg"
        overlayOpacity="dark"
        title="Auto meklēšana, pārbaude, piegāde"
        subtitle="Palīdzēšana esam palaizīgt atrast vēlamu automobili un to iegadāties"
        primaryCta={{
          text: 'Uzzināt vairāk',
          href: '/kontakti',
        }}
      />

      {/* Service Description Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
              {HOMEPAGE_COPY.serviceDetails[1].title}
            </h2>
            <div className="mb-8 text-center whitespace-pre-line text-muted-foreground">
              {HOMEPAGE_COPY.serviceDetails[1].description}
            </div>
          </div>
        </div>
      </section>

      {/* Process Breakdown Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
              Mūsu procesa soļi
            </h2>
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 font-semibold">Transporta meklēšana</h3>
                  <p className="text-sm text-muted-foreground">
                    Atrodam jūsu prasībām atbilstošu automašīnu tirgū
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 font-semibold">Detalizēta pārbaude</h3>
                  <p className="text-sm text-muted-foreground">
                    Veicam pilnu tehnisko un vizuālo pārbaudi
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 font-semibold">Sarunu process</h3>
                  <p className="text-sm text-muted-foreground">
                    Sarunājamies ar pārdevēju par labāko cenu
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 font-semibold">Dokumentu noformēšana</h3>
                  <p className="text-sm text-muted-foreground">
                    Palīdzam ar visu nepieciešamo dokumentāciju
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Mūsu pārbaudes process bildēs
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            {CAR_PURCHASE_PAGE_COPY.galleryNote}
          </p>
          <ImageGalleryGrid
            images={galleryImages}
            columns={{ mobile: 2, tablet: 3, desktop: 4 }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">
              Gatavi sākt automašīnas meklēšanu?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Sazinieties ar mums, lai apspriestu jūsu vēlmes un sāktu auto meklēšanas procesu
            </p>
            <Button asChild size="lg">
              <Link href="/kontakti">Sazināties ar mums</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Standard Footer */}
      <Footer />
    </main>
  );
}
