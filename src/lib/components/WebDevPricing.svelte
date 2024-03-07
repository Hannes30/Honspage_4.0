<script>
  import Pricing from "./pricing.svelte";



const pricingModels = [
  {
    name: "Web-Starter",
    price: 800,
    benefits: [
      "3-5 Seiten",
      "Responsive - für mobile Geräte optimiert",
      "Grundlegende SEO-Optimierung"
      
    ]
  },
  {
    name: "Business Website Plus",
    price: 1450,
    benefits: [
      "5-7 Seiten mit professionellem Design",
      "Bildergalerie",
      "Content Managment System(CMS)",
      "Best mögliche SEO-Optimierung",
      "eigene 404 Fehlerseite"
    ]
  },
  {
    name: "E-Commerce Pro",
    price: 2450,
    benefits: [
      "E-Commerce-Funktionalität mit Produktdarstellung, Warenkorb und Checkout",
      "Zahlungsgateway-Integration (z.B., PayPal, Stripe)",
      "Produktbilder und -beschreibungen",
      "Kundenkonto und einfache Bestellverfolgung"
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
