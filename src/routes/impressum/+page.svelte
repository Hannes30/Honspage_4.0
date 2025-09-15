<script>
  import Nav from '$lib/components/Nav.svelte'
</script>

<svelte:head>
  <title>Impressum - Hannes Scheibelauer</title>
</svelte:head>

<Nav active={3} />
<div class="impressum-wrapper pt-16 pb-16 flex justify-center">
  <div
    class="impressum-content bg-secondary-800 bg-opacity-80 rounded-lg p-8 max-w-2xl w-full text-gray-100"
  >
    <h1 class="text-4xl font-bold mb-8 text-center">Impressum</h1>

    <div class="mb-6 text-lg leading-relaxed">
      <p>
        Angaben gemäß § 5 TMG / § 25 MedienG (Österreich):<br /><br />
        <strong>Hannes Scheibelauer</strong><br />
        Web- &amp; Mediendesign<br />
        Bahnstraße 64<br />
        3250 Mühling<br />
        Österreich
      </p>
    </div>

    <h2 class="text-2xl font-semibold mt-8 mb-2">Kontakt</h2>
    <div class="mb-6 text-lg">
      <p>
        Telefon: 0670 2018717<br />
        E-Mail:
        <a
          href="mailto:kontakt@hannes-scheibelauer.at"
          class="underline hover:text-primary-400"
          >kontakt@hannes-scheibelauer.at</a
        >
      </p>
    </div>

    <h2 class="text-2xl font-semibold mt-8 mb-2">Umsatzsteuer-ID</h2>
    <div class="mb-6 text-lg">
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
        ATU 15313/5447
      </p>
    </div>

    <h2 class="text-2xl font-semibold mt-8 mb-2">Haftung für Inhalte</h2>
    <div class="mb-6 text-lg">
      <p>
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen.
      </p>
    </div>

    <h2 class="text-2xl font-semibold mt-8 mb-2">Haftung für Links</h2>
    <div class="mb-6 text-lg">
      <p>
        Diese Website enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
      </p>
    </div>

    <h2 class="text-2xl font-semibold mt-8 mb-2">Urheberrecht</h2>
    <div class="mb-6 text-lg">
      <p>
        Die durch den Betreiber dieser Website erstellten Inhalte und Werke
        unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers.
      </p>
    </div>

    <h2 class="text-2xl font-semibold mt-8 mb-2">EU-Streitschlichtung</h2>
    <div class="mb-6 text-lg">
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline hover:text-primary-400"
          >https://ec.europa.eu/consumers/odr/</a
        >.<br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>
    </div>

    <h2 class="text-2xl font-semibold mt-8 mb-2">
      Verbraucher­streit­beilegung / Universal­schlichtungs­stelle
    </h2>
    <div class="mb-6 text-lg">
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </div>
  </div>
</div>

<style>
  .impressum-wrapper {
    min-height: 60vh;
  }
</style>
