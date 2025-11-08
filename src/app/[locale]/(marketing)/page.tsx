import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return (
    <>
      <h1 className="mt-5 text-3xl font-bold">
        {t('welcome_title', { defaultValue: 'Welcome to TEG' })}
      </h1>
      <p className="mt-3 text-base">
        {t('welcome_description', {
          defaultValue: 'TEG (Transporta Ekspertu Grupa) is an independent group of automotive professionals serving customers across Europe.',
        })}
      </p>
      <h2 className="mt-5 text-2xl font-bold">
        {t('services_title', { defaultValue: 'Our Services' })}
      </h2>
      <ul className="mt-3 text-base">
        <li>
          <Link href={`/${locale}/services/pre-purchase-inspection`} className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700">
            {t('service_pre_purchase', { defaultValue: 'Pre-Purchase Car Inspection' })}
          </Link>
          {' '}
          {t('service_pre_purchase_desc', { defaultValue: '(from €100) - Engine diagnostics, VIN history, body/paint inspection' })}
        </li>
        <li>
          <Link href={`/${locale}/services/car-search-delivery`} className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700">
            {t('service_car_search', { defaultValue: 'Car Search & Delivery' })}
          </Link>
          {' '}
          {t('service_car_search_desc', { defaultValue: '(from €350) - Vehicle sourcing, inspection, and delivery' })}
        </li>
        <li>
          <Link href={`/${locale}/services/mobile-roadside`} className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700">
            {t('service_mobile', { defaultValue: 'Mobile Roadside Service' })}
          </Link>
          {' '}
          {t('service_mobile_desc', { defaultValue: '(from €30) - On-location diagnostics, battery testing, and repairs' })}
        </li>
      </ul>
      <div className="mt-5">
        <Link
          href={`/${locale}/contact`}
          className="inline-block rounded-md bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800"
        >
          {t('contact_us', { defaultValue: 'Contact Us' })}
        </Link>
      </div>
    </>
  );
};
