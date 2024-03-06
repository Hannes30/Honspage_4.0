<script>
    import {CheckOutline} from "flowbite-svelte-icons";

const pricingModels = [
  {
    name: "Web-Starter",
    price: 700,
    benefits: [
      "3-5 Seiten",
      "Responsives Layout",
      "Grundlegende SEO-Optimierung"
    ]
  },
  {
    name: "Business Website Plus",
    price: 1400,
    benefits: [
      "5-7 Seiten mit professionellem, anpassbarem Design",
      "Bildergalerie oder Portfolio-Sektion",
      "Erweitertes Kontaktformular",
      "Grundlegende SEO-Optimierung",
      "Google Maps-Integration"
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
  {
    name: "Maßgeschneiderte Unternehmenswebsite Deluxe",
    price: 4000,
    benefits: [
      "Umfassende Website mit individuellem Design",
      "Fortgeschrittene SEO-Strategie und -Implementierung",
      "Benutzerdefinierte Funktionen und Programmierung",
      "Schulung und Support für die Website-Verwaltung",
      "Erweiterte Sicherheitsfunktionen"
    ]
  }
];
</script>

<div class="w-full text-center">  <h2>Pricing</h2>
    <div class="w-full flex justify-around">

        <div class="border border-primary-400 rounded-md p-4 flex justify-center flex-wrap w-96 bg-secondary">
            <h2 class=" text-4xl w-full text-center py-2">{pricingModels[0].name}</h2>
            <span class="w-full text-center text-4xl font-bold text-primary-400 py-2">€{pricingModels[0].price}</span>
            <div class="text-center flex flex-wrap py-2">
            {#each pricingModels[0].benefits as  benefit}
            <div class="w-full justify-around"> <CheckOutline class=" w-12 h-12 inline-block"/>  <span class=" text-lg">  {benefit} </span></div>
               
            {/each}</div>   
            <button class="px-6 py-2 font-semibold bg-primary-400 rounded-md button text-black text-3xl"> Kontaktieren</button>
        </div>

    </div>


</div>
<style>.button{
    text-shadow: 2px 2px #fff;
  }</style>