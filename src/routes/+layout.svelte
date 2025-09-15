<script>
  import '../style.css'
  import logo from '$lib/img/Logo_without_text.png'

  import Footer from '$lib/components/Footer.svelte'

  let showModal = false
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href={logo} />

  <meta
    name="description"
    content="Portfolio Seite von Hannes Scheibelauer, ein Website Entwickler aus Niederösterreich"
  />
  <meta
    name="keywords"
    content="Website Erstellen, Webseite kaufen, Homepage erstellen, Webdesign Mostviertel, Wieselburg Webentwicklung, Responsive Webseiten, Niederösterreich Webdesign, Online-Präsenz gestalten, Lokale Unternehmenswebseiten, Webentwickler Dienstleistungen, Grafikdesign für Webseiten, Nutzerfreundliches Design, Mobile-optimierte Seiten, Online-Marketing, Social-Media-Integration,Webseiten-Wartung"
  />

  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Portfolio Website von Hannes Scheibelauer"
  />
  <meta
    property="og:description"
    content="Hannes Scheibelauer ist ein Web Developer aus Niederösterreich. Er erstellt Websites und Web Apps für Firmen und Privatpersonen."
  />
  <meta property="og:image" content="https://hannes-scheibelauer.at/logo.png" />
</svelte:head>
<div class="body bg-black">
  <div><slot /></div>
  <Footer></Footer>
</div>

<style>
  .body {
    min-height: 100vh;
    color: white;
    background: linear-gradient(90deg, #022034, #054d4d);
  }
</style>
