import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/hero/Hero';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    title: `${locale === 'lv' ? 'Par mums' : locale === 'ru' ? 'О нас' : 'About Us'} - TEG`,
  };
}

export default async function AboutPage(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <Hero title="TEG.LV" subtitle={locale === 'lv' ? 'TRANSPORTA EKSPERTU GRUPA' : locale === 'ru' ? 'ГРУППА ТРАНСПОРТНЫХ ЭКСПЕРТОВ' : 'TRANSPORT EXPERTS GROUP'} />
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-lg">
          <p>
            {locale === 'lv'
              ? 'TEG ir neatkarīga automobiļu speciālistu grupa, kas apkalpo klientus visā Eiropā. Mūsu misija ir aizsargāt pircējus no negodīgiem pārdevējiem un slēptiem auto defektiem.'
              : locale === 'ru'
                ? 'TEG - это независимая группа автомобильных специалистов, обслуживающая клиентов по всей Европе. Наша миссия - защищать покупателей от нечестных продавцов и скрытых дефектов автомобилей.'
                : 'TEG is an independent group of automotive specialists serving customers across Europe. Our mission is to protect buyers from dishonest sellers and hidden vehicle defects.'}
          </p>
          <h2 className="text-2xl font-bold">{locale === 'lv' ? 'Mūsu vērtības' : locale === 'ru' ? 'Наши ценности' : 'Our Values'}</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>{locale === 'lv' ? 'Neatkarība - Mēs neesam saistīti ar pārdevējiem' : locale === 'ru' ? 'Независимость - Мы не связаны с продавцами' : 'Independence - We are not affiliated with sellers'}</li>
            <li>{locale === 'lv' ? 'Profesionalitāte - Eksperti ar ilggadīgu pieredzi' : locale === 'ru' ? 'Профессионализм - Эксперты с многолетним опытом' : 'Professionalism - Experts with years of experience'}</li>
            <li>{locale === 'lv' ? 'Caurspīdīgums - Detalizēti atskaites un godīgas cenas' : locale === 'ru' ? 'Прозрачность - Детальные отчеты и честные цены' : 'Transparency - Detailed reports and honest pricing'}</li>
          </ul>
          <p className="font-semibold">
            {locale === 'lv'
              ? 'Apkalpojam visu Eiropu - auto ir mūsu kaislība!'
              : locale === 'ru'
                ? 'Обслуживаем всю Европу - автомобили - наша страсть!'
                : 'Serving all of Europe - cars are our passion!'}
          </p>
        </div>
      </section>
    </>
  );
}
