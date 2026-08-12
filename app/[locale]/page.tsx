export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <main>
      <p>{locale === "en" ? "English homepage" : "Albanian homepage"}</p>
    </main>
  );
}
