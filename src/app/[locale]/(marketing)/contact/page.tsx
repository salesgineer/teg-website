import type { Metadata } from 'next';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';
import { ContactForm } from '@/components/forms/ContactForm';
import { Hero } from '@/components/hero/Hero';
import { Button } from '@/components/ui/button';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    title: `${locale === 'lv' ? 'Kontakti' : locale === 'ru' ? 'Контакты' : 'Contact'} - TEG`,
  };
}

export default async function ContactPage(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const title = locale === 'lv' ? 'Sazināties ar mums' : locale === 'ru' ? 'Свяжитесь с нами' : 'Contact Us';

  return (
    <>
      <Hero title={title} />
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">{locale === 'lv' ? 'Sazinieties ar mums' : locale === 'ru' ? 'Свяжитесь с нами' : 'Get in Touch'}</h2>

            {/* WhatsApp CTA */}
            <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700">
              <a href="https://wa.me/37125201710" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {locale === 'lv' ? 'Rakstīt WhatsApp' : locale === 'ru' ? 'Написать в WhatsApp' : 'Message on WhatsApp'}
              </a>
            </Button>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+37125201710" className="text-lg hover:text-primary">+371 25 201 710</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@teg.lv" className="text-lg hover:text-primary">info@teg.lv</a>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">{locale === 'lv' ? 'Darba laiks' : locale === 'ru' ? 'Рабочие часы' : 'Business Hours'}</h3>
              <p className="text-muted-foreground">{locale === 'lv' ? 'Pirmdiena - Sestdiena' : locale === 'ru' ? 'Понедельник - Суббота' : 'Monday - Saturday'}</p>
              <p className="text-muted-foreground">9:00 - 20:00</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">{locale === 'lv' ? 'Sūtīt ziņojumu' : locale === 'ru' ? 'Отправить сообщение' : 'Send Message'}</h2>
            <ContactForm locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
