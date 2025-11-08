import type { Metadata } from 'next';
import { Award, Eye, Shield } from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';
import { ValuesGrid } from '@/components/about/ValuesGrid';
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
      <Hero
        title="TEG"
        subtitle={locale === 'lv'
          ? 'TRANSPORTA EKSPERTU GRUPA'
          : locale === 'ru'
            ? 'ГРУППА ТРАНСПОРТНЫХ ЭКСПЕРТОВ'
            : 'TRANSPORT EXPERTS GROUP'}
      />
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-lg">
          {locale === 'lv' && (
            <h2 className="mb-6 text-center text-2xl font-semibold text-muted-foreground italic">
              Sava aroda profesionāļi, kam auto ir sirdslieta.
            </h2>
          )}
          <p>
            {locale === 'lv'
              ? 'TEG ir neatkarīga automobiļu speciālistu grupa, kas apkalpo klientus visā Eiropā. Mūsu misija ir aizsargāt pircējus no negodīgiem pārdevējiem un slēptiem auto defektiem.'
              : locale === 'ru'
                ? 'TEG - это независимая группа автомобильных специалистов, обслуживающая клиентов по всей Европе. Наша миссия - защищать покупателей от нечестных продавцов и скрытых дефектов автомобилей.'
                : 'TEG is an independent group of automotive specialists serving customers across Europe. Our mission is to protect buyers from dishonest sellers and hidden vehicle defects.'}
          </p>
          <h2 className="text-2xl font-bold">{locale === 'lv' ? 'Mūsu vērtības' : locale === 'ru' ? 'Наши ценности' : 'Our Values'}</h2>
          <ValuesGrid
            values={[
              {
                title: locale === 'lv' ? 'Neatkarība' : locale === 'ru' ? 'Независимость' : 'Independence',
                description: locale === 'lv' ? 'Mēs neesam saistīti ar pārdevējiem' : locale === 'ru' ? 'Мы не связаны с продавцами' : 'We are not affiliated with sellers',
                icon: Shield,
              },
              {
                title: locale === 'lv' ? 'Profesionalitāte' : locale === 'ru' ? 'Профессионализм' : 'Professionalism',
                description: locale === 'lv' ? 'Eksperti ar ilggadīgu pieredzi' : locale === 'ru' ? 'Эксперты с многолетним опытом' : 'Experts with years of experience',
                icon: Award,
              },
              {
                title: locale === 'lv' ? 'Caurspīdīgums' : locale === 'ru' ? 'Прозрачность' : 'Transparency',
                description: locale === 'lv' ? 'Detalizēti atskaites un godīgas cenas' : locale === 'ru' ? 'Детальные отчеты и честные цены' : 'Detailed reports and honest pricing',
                icon: Eye,
              },
            ]}
            className="mt-6"
          />
          <p className="font-semibold">
            {locale === 'lv'
              ? 'Apkalpojam visu Eiropu - auto ir mūsu kaislība!'
              : locale === 'ru'
                ? 'Обслуживаем всю Европу - автомобили - наша страсть!'
                : 'Serving all of Europe - cars are our passion!'}
          </p>

          {locale === 'lv' && (
            <blockquote className="my-8 rounded-r-lg border-l-4 border-primary bg-muted/50 py-4 pl-6 text-lg leading-relaxed italic">
              <p className="mb-4">
                "Labdien!
              </p>
              <p className="mb-4">
                Esam neatkarīgi, pieredzes bagāti, entuziasma pilni autotransporta jomas eksperti. Specializējamies lietotu un jaunu transportlīdzekļu pārbaudē un piegādē, taču priecāsimies arī palīdzēt tehniskās ķibelēs uz ceļa un citos auto jautājumos.
              </p>
              <p className="mb-4">
                Profesionāla palīdzība lietotas un jaunas automašīnas izvēlē un iegādē visā Eiropā. Veicam izbraukuma tehniskā stāvokļa ekspertīzes, jebkuras klases un vecuma transportlīdzekļiem.
              </p>
              <p className="mb-4">
                Strādājam tikai klientu interesēs. Mūsu mērķis ir atklāt negodīgu auto tirgoņu ,,nospiedumus" ar koriģētiem odometra radījumiem, nekvalitatīvu remontu, slēptiem bojājumiem un pat viltotiem dokumentiem.
              </p>
              <p className="mb-4">
                Kvalificētu profesionālo iekārtu izmantošana, sadarbība ar jomas ekspertiem un auto datubāzēm, mums ļauj sniegt kvalitatīvu, drošu un uzticamu pakalpojumu.
              </p>
              <p className="mb-4">
                Transporta ekspertu grupa atradīs jūsu vēlmēm un budžetam atbilstošu transportlīdzekli, iesakot un konsultējot par labāko. Mēs pārbaudīsim, lai tas būtu atbilstošā tehniskā stāvoklī. To visu paveiksim jums pat neizejot no mājas. Ja būs nepieciešams, palīdzēsim dokumentu noformēšanas brīdī.
              </p>
              <p>
                Tiekamies ceļā!"
              </p>
            </blockquote>
          )}
        </div>
      </section>
    </>
  );
}
