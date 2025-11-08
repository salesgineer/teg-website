import {
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  MessageSquare,
  Phone,
  Share2,
  ThumbsUp,
} from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/forms/ContactForm';
import { InstagramFeedSection } from '@/components/social/InstagramFeedSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CONTACT_PAGE_COPY } from '@/lib/constants/copy';

export default function ContactPage() {
  const whatsappNumber = '37125201710';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* WhatsApp CTA - Prominent at Top */}
        <div className="mb-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] px-8 py-6 text-lg font-semibold text-white hover:bg-[#22C55E]"
          >
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              {CONTACT_PAGE_COPY.whatsappCta}
            </Link>
          </Button>
        </div>

        {/* Headline */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            {CONTACT_PAGE_COPY.headline}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {CONTACT_PAGE_COPY.introText}
          </p>
        </div>

        {/* Two-Column Layout: Form Left, Contact Info Right */}
        <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Contact Form */}
          <div>
            <Card className="p-6 md:p-8">
              <h2 className="mb-2 text-xl font-semibold">
                {CONTACT_PAGE_COPY.form.fields.message}
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                {CONTACT_PAGE_COPY.form.formNote}
              </p>
              <ContactForm locale="lv" />
            </Card>
          </div>

          {/* Right Column: Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="p-6">
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold">
                  {CONTACT_PAGE_COPY.contactInfo.phoneLabel}
                </h3>
                <Link
                  href={CONTACT_PAGE_COPY.contactInfo.phoneHref}
                  className="flex items-center text-xl font-bold text-primary hover:underline"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {CONTACT_PAGE_COPY.contactInfo.phone}
                </Link>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold">
                  {CONTACT_PAGE_COPY.contactInfo.hoursLabel}
                </h3>
                <p className="flex items-center text-lg text-muted-foreground">
                  <Clock className="mr-2 h-5 w-5" />
                  {CONTACT_PAGE_COPY.contactInfo.hours}
                </p>
              </div>
            </Card>

            {/* Social Media Section */}
            <Card className="p-6">
              <h3 className="mb-4 text-lg font-semibold">
                {CONTACT_PAGE_COPY.socialMedia.title}
              </h3>

              {/* Facebook & Instagram Icons */}
              <div className="mb-6 flex gap-4">
                <Link
                  href={CONTACT_PAGE_COPY.socialMedia.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-8 w-8" />
                </Link>
                <Link
                  href={CONTACT_PAGE_COPY.socialMedia.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white transition-transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-8 w-8" />
                </Link>
              </div>

              {/* Instagram Profile Preview */}
              <div className="mb-4 rounded-lg border border-border p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">
                        @
                        {CONTACT_PAGE_COPY.socialMedia.instagram.handle}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  {CONTACT_PAGE_COPY.socialMedia.instagram.bio}
                </p>
                <div className="flex gap-6 text-sm">
                  <span>
                    <strong>{CONTACT_PAGE_COPY.socialMedia.instagram.followers}</strong>
                    {' '}
                    followers
                  </span>
                  <span>
                    <strong>{CONTACT_PAGE_COPY.socialMedia.instagram.likes}</strong>
                    {' '}
                    likes
                  </span>
                </div>
              </div>

              {/* TikTok Section */}
              <Button
                asChild
                variant="outline"
                className="w-full border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-white"
              >
                <Link
                  href={CONTACT_PAGE_COPY.socialMedia.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  {CONTACT_PAGE_COPY.socialMedia.tiktok.buttonText}
                </Link>
              </Button>
            </Card>
          </div>
        </div>

        {/* Instagram Feed Preview */}
        <div className="mb-16">
          <InstagramFeedSection
            handle={CONTACT_PAGE_COPY.socialMedia.instagram.handle}
            posts={[
              {
                imageUrl: '/images/instagram-placeholder-1.jpg',
                caption: 'Auto inspection',
                link: CONTACT_PAGE_COPY.socialMedia.instagram.url,
              },
              {
                imageUrl: '/images/instagram-placeholder-2.jpg',
                caption: 'Quality check',
                link: CONTACT_PAGE_COPY.socialMedia.instagram.url,
              },
              {
                imageUrl: '/images/instagram-placeholder-3.jpg',
                caption: 'Professional service',
                link: CONTACT_PAGE_COPY.socialMedia.instagram.url,
              },
            ]}
          />
        </div>

        {/* Customer Testimonials Section */}
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold">
            {CONTACT_PAGE_COPY.testimonials.title}
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CONTACT_PAGE_COPY.testimonials.items.map(testimonial => (
              <Card key={testimonial.id} className="p-6">
                {/* Facebook Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2]">
                    <Facebook className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.timeAgo}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="mb-4 text-muted-foreground">
                  {testimonial.review}
                </p>

                {/* Facebook Interaction Buttons (Non-functional for MVP) */}
                <div className="flex gap-4 border-t border-border pt-4">
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-[#1877F2]"
                    disabled
                  >
                    <ThumbsUp className="h-4 w-4" />
                    Like
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-[#1877F2]"
                    disabled
                  >
                    <MessageSquare className="h-4 w-4" />
                    Comment
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-[#1877F2]"
                    disabled
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
