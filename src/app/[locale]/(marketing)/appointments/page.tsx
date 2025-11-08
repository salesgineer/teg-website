import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { Hero } from '@/components/hero/Hero';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    title: `${locale === 'lv' ? 'Pieraksts' : locale === 'ru' ? 'Запись' : 'Appointments'} - TEG`,
  };
}

export default async function AppointmentsPage(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const title = locale === 'lv' ? 'Rezervēt laiku' : locale === 'ru' ? 'Забронировать' : 'Book Appointment';
  const subtitle = locale === 'lv' ? 'Izvēlieties pakalpojumu un vēlamo laiku' : locale === 'ru' ? 'Выберите услугу и желаемое время' : 'Select a service and preferred time';

  return (
    <>
      <Hero title={title} subtitle={subtitle} />
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <AppointmentForm locale={locale} />
        </div>
      </section>
    </>
  );
}
