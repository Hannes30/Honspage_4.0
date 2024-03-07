<script>
  import "../style.css";
  import logo from "$lib/img/Logo_without_text.png";
  import ContactForm from "../lib/components/ContactForm.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let showModal = false;

  function openContactModal() {
    showModal = true;
    document.body.style.overflow = "hidden";
    //darken site
  }

  function closeContactModal() {
    showModal = false;
    document.body.style.overflow = "auto";
  }
  window._mfq = window._mfq || [];
  (function() {
    var mf = document.createElement("script");
    mf.type = "text/javascript"; mf.defer = true;
    mf.src = "//cdn.mouseflow.com/projects/776c0027-44a5-48e7-8b19-a86e2b9fb735.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
  })();
</script>

  <svelte:head>
    <link rel="icon" type="image/x-icon" href={logo}>
    
    <meta
    name="description"
    content="Portfolio Seite von Hannes Scheibelauer, ein Web Developer aus Niederösterreich"
   />  <meta
    name="keywords"
    content="Hannes Scheibelauer, Scheibelauer, Website Erstellen, Web Developer, Webdesign Mostviertel, Wieselburg Webentwicklung, Responsive Webseiten, Niederösterreich Webdesign, Online-Präsenz gestalten, SEO-optimierte Webseiten, Maßgeschneiderte Websites, E-Commerce Lösungen, Lokale Unternehmenswebseiten, Webentwickler Dienstleistungen, Content-Management-Systeme, Web-Branding, Grafikdesign für Webseiten, Nutzerfreundliches Design, Mobile-optimierte Seiten, Online-Marketing, Social-Media-Integration, Blog-Integration, Webseiten-Wartung"
    />  

  <meta name="robots" content="index, follow"   />  
  <meta
    property="og:title"
    content="Portfolio Website von Hannes Scheibelauer"
    />  
  <meta
    property="og:description"
    content="Hannes Scheibelauer ist ein Web Developer aus Niederösterreich. Er erstellt Websites und Web Apps für Firmen und Privatpersonen."/>  
  <meta
    property="og:image"
    content="https://hannes-scheibelauer.at/images/logo.png" />
  <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
  ></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GA_TRACKING_ID}');
      `,
    }}
  ></script>
  </svelte:head>
  <div class="body bg-black"> 
    {#if showModal}
<ContactForm {closeContactModal} />
{/if}
     <div> <slot/></div>
     <Footer></Footer>
  </div>

  <style>
    .body{
      min-height: 100vh;
      color: white;
      background: linear-gradient(90deg,#022034,#054D4D);
    }
  </style>