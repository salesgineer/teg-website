import type { Metadata } from 'next';
import { Search, Shield, Wrench } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/hero/Hero';
import { ServiceCard } from '@/components/services/ServiceCard';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'Index' });
  return {
    title: `${t('services_title')} - TEG`,
    description: t('meta_description'),
  };
}

export default async function ServicesPage(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Index' });

  const title = locale === 'lv' ? 'Mūsu pakalpojumi' : locale === 'ru' ? 'Наши услуги' : 'Our Services';

  return (
    <>
      <Hero title={title} />
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <ServiceCard
            icon={Shield}
            title={t('service_pre_purchase')}
            description={t('service_pre_purchase_desc')}
            price={locale === 'lv' ? 'SĀKOT NO €100' : locale === 'ru' ? 'ОТ €100' : 'FROM €100'}
            features={locale === 'lv' ? ['Dzinēja diagnostika', 'VIN vēsture', 'Krāsas pārbaude'] : locale === 'ru' ? ['Диагностика двигателя', 'История VIN', 'Проверка краски'] : ['Engine diagnostics', 'VIN history', 'Paint inspection']}
            ctaText={locale === 'lv' ? 'Rezervēt' : locale === 'ru' ? 'Заказать' : 'Book Now'}
            ctaHref={`/${locale}/appointments`}
            variant="featured"
          />
          <ServiceCard
            icon={Search}
            title={t('service_car_search')}
            description={t('service_car_search_desc')}
            price={locale === 'lv' ? 'SĀKOT NO €350' : locale === 'ru' ? 'ОТ €350' : 'FROM €350'}
            features={locale === 'lv' ? ['Meklēšana', 'Pārbaude', 'Piegāde'] : locale === 'ru' ? ['Поиск', 'Проверка', 'Доставка'] : ['Search', 'Inspection', 'Delivery']}
            ctaText={locale === 'lv' ? 'Rezervēt' : locale === 'ru' ? 'Заказать' : 'Book Now'}
            ctaHref={`/${locale}/appointments`}
          />
          <ServiceCard
            icon={Wrench}
            title={t('service_mobile')}
            description={t('service_mobile_desc')}
            price={locale === 'lv' ? 'SĀKOT NO €50' : locale === 'ru' ? 'ОТ €50' : 'FROM €50'}
            features={locale === 'lv' ? ['Diagnostika', 'Remonts', 'Ātra reakcija'] : locale === 'ru' ? ['Диагностика', 'Ремонт', 'Быстро'] : ['Diagnostics', 'Repairs', 'Fast']}
            ctaText={locale === 'lv' ? 'Rezervēt' : locale === 'ru' ? 'Заказать' : 'Book Now'}
            ctaHref={`/${locale}/appointments`}
          />
        </div>
      </section>
    </>
  );
}
