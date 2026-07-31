import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);

  return (
    <>
      <ScrollProgress />
      <Nav t={t.nav} locale={locale} />
      <main>
        <Hero t={t.hero} />
        <About t={t.about} />
        <Work t={t.work} />
        <Stack t={t.stack} />
        <Experience t={t.experience} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
