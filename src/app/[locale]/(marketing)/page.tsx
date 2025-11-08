import type { Metadata } from 'next';
import { Search, Shield, Wrench } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/hero/Hero';
import { RoadsideAssistanceCTA } from '@/components/hero/RoadsideAssistanceCTA';
import { ServiceCard } from '@/components/services/ServiceCard';
import { Separator } from '@/components/ui/separator';

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

  const heroTitle = locale === 'lv'
    ? 'Pārbaudi, pirms pērc!'
    : locale === 'ru'
      ? 'Проверь перед покупкой!'
      : 'Check Before You Buy!';

  const heroSubtitle = locale === 'lv'
    ? 'Detalizēta transportlīdzekļa tehniskā stāvokļa pārbaude pirms tā iegādes visā Eiropā'
    : locale === 'ru'
      ? 'Детальная проверка технического состояния транспортного средства перед покупкой по всей Европе'
      : 'Detailed vehicle technical inspection before purchase across all of Europe';

  const bookCta = locale === 'lv' ? 'Rezervēt pārbaudi' : locale === 'ru' ? 'Заказать проверку' : 'Book Inspection';
  const contactCta = locale === 'lv' ? 'Sazināties' : locale === 'ru' ? 'Связаться' : 'Contact Us';

  // Phone number for roadside assistance
  const roadsidePhone = {
    display: '+371 25 201 710',
    href: 'tel:+37125201710',
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        primaryCta={{ text: bookCta, href: `/${locale}/appointments` }}
        secondaryCta={{ text: contactCta, href: `/${locale}/contact` }}
        layout="split"
        roadsideAssistance={{
          phone: roadsidePhone,
          locale: locale as 'lv' | 'en' | 'ru',
        }}
      />

      {/* Roadside Assistance CTA */}
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <RoadsideAssistanceCTA
          phone={roadsidePhone}
          locale={locale as 'lv' | 'en' | 'ru'}
        />
      </div>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          {t('services_title')}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Pre-Purchase Inspection */}
          <ServiceCard
            icon={Shield}
            title={t('service_pre_purchase')}
            description={t('service_pre_purchase_desc')}
            price={locale === 'lv' ? 'SĀKOT NO €100' : locale === 'ru' ? 'ОТ €100' : 'FROM €100'}
            features={
              locale === 'lv'
                ? ['Dzinēja diagnostika', 'VIN vēsture', 'Krāsas pārbaude', 'Detalizēts atskaite']
                : locale === 'ru'
                  ? ['Диагностика двигателя', 'История VIN', 'Проверка краски', 'Детальный отчет']
                  : ['Engine diagnostics', 'VIN history', 'Paint inspection', 'Detailed report']
            }
            ctaText={locale === 'lv' ? 'Uzzināt vairāk' : locale === 'ru' ? 'Узнать больше' : 'Learn More'}
            ctaHref={`/${locale}/services`}
            variant="featured"
          />

          {/* Car Search & Delivery */}
          <ServiceCard
            icon={Search}
            title={t('service_car_search')}
            description={t('service_car_search_desc')}
            price={locale === 'lv' ? 'SĀKOT NO €350' : locale === 'ru' ? 'ОТ €350' : 'FROM €350'}
            features={
              locale === 'lv'
                ? ['Transportlīdzekļa meklēšana', 'Pilna pārbaude', 'Piegāde', 'Dokumentu palīdzība']
                : locale === 'ru'
                  ? ['Поиск автомобиля', 'Полная проверка', 'Доставка', 'Помощь с документами']
                  : ['Vehicle sourcing', 'Full inspection', 'Delivery', 'Documentation help']
            }
            ctaText={locale === 'lv' ? 'Uzzināt vairāk' : locale === 'ru' ? 'Узнать больше' : 'Learn More'}
            ctaHref={`/${locale}/services`}
          />

          {/* Mobile Roadside Service */}
          <ServiceCard
            icon={Wrench}
            title={t('service_mobile')}
            description={t('service_mobile_desc')}
            price={locale === 'lv' ? 'SĀKOT NO €50' : locale === 'ru' ? 'ОТ €50' : 'FROM €50'}
            features={
              locale === 'lv'
                ? ['Diagnostika vietā', 'Akumulatora tests', 'Remonts', 'Ātra reakcija']
                : locale === 'ru'
                  ? ['Диагностика на месте', 'Тест батареи', 'Ремонт', 'Быстрая реакция']
                  : ['On-location diagnostics', 'Battery testing', 'Repairs', 'Fast response']
            }
            ctaText={locale === 'lv' ? 'Uzzināt vairāk' : locale === 'ru' ? 'Узнать больше' : 'Learn More'}
            ctaHref={`/${locale}/services`}
          />
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Fraud Prevention Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            {locale === 'lv' ? 'KRĀPNIEKU PAŅĒMIENI' : locale === 'ru' ? 'МОШЕННИЧЕСКИЕ СХЕМЫ' : 'FRAUD PROTECTION'}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {locale === 'lv'
              ? 'Mēs aizsargājam jūs no negodīgiem pārdevējiem un slēptiem defektiem'
              : locale === 'ru'
                ? 'Мы защищаем вас от нечестных продавцов и скрытых дефектов'
                : 'We protect you from dishonest sellers and hidden defects'}
          </p>
          <ul className="space-y-3 text-left">
            <li className="flex items-start">
              <span className="mr-2 text-primary">✓</span>
              <span>
                {locale === 'lv'
                  ? 'Odometra verifikācija, lai atklātu nobraukuma viltošanu'
                  : locale === 'ru'
                    ? 'Проверка одометра для выявления подделки пробега'
                    : 'Odometer verification to detect mileage fraud'}
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">✓</span>
              <span>
                {locale === 'lv'
                  ? 'Slēptu negadījumu bojājumu identificēšana'
                  : locale === 'ru'
                    ? 'Выявление скрытых повреждений от аварий'
                    : 'Hidden accident damage identification'}
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">✓</span>
              <span>
                {locale === 'lv'
                  ? 'Viltotu dokumentu pārbaude'
                  : locale === 'ru'
                    ? 'Проверка поддельных документов'
                    : 'Counterfeit document verification'}
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
