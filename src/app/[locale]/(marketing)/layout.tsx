import { setRequestLocale } from 'next-intl/server';
import { Footer } from '@/components/navigation/Footer';

export default async function MarketingLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">{props.children}</main>
      <Footer />
    </div>
  );
}
