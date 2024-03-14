<script>
  import Pricing from "./pricing.svelte";



const pricingModels = [
  {
    name: "Web-Starter",
    price: 600,
    benefits: [
      "3-5 Seiten",
      "Responsive - für mobile Geräte optimiert",
      "Grundlegende SEO-Optimierung",
      "WCAG konform"
      
    ]
  },
  {
    name: "Business Website Plus",
    price: 1150,
    benefits: [
      "5-7 Seiten mit professionellem Design",
      "Bildergalerie",
      "Content Managment System(CMS)",
      "Best mögliche SEO-Optimierung",
      "eigene 404 Fehlerseite",
      "WCAG konform"
    ]
  },
  {
    name: "E-Commerce Pro",
    price: 2050,
    benefits: [
      "E-Commerce-Funktionalität mit Produktdarstellung, Warenkorb und Checkout",
      "Zahlungsgateway-Integration (z.B., PayPal, Stripe)",
      "Produktbilder und -beschreibungen",
      "Kundenkonto und einfache Bestellverfolgung",
      "WCAG konform"
    ]
  },
  /*{
    name: "Maßgeschneiderte Unternehmenswebsite Deluxe",
    price: 4000,
    benefits: [
      "Umfassende Website mit individuellem Design",
      "Fortgeschrittene SEO-Strategie und -Implementierung",
      "Benutzerdefinierte Funktionen und Programmierung",
      "Schulung und Support für die Website-Verwaltung",
      "Erweiterte Sicherheitsfunktionen"
    ]
  }*/
];
</script>

<div class="w-full text-center justify-center flex flex-wrap">  <h2 class="w-full mb-10">Pakete</h2>
    <div class="w-full flex justify-center flex-wrap lg:flex-nowrap">

        {#each pricingModels as pricingModel}
        <Pricing name={pricingModel.name} benefits={pricingModel.benefits} price={pricingModel.price} ></Pricing>
        {/each}

    </div>


</div>
