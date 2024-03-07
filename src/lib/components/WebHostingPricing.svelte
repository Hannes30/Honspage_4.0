<script>
  import Pricing from "./pricing.svelte";



const pricingModels = [
  {
    name: "Basis-Hosting",
    price: 15,
    benefits: [
      "Kostenloses Domain-Setup",
      "Kostenloses SSL-Zertifikat",
      "Kundensupport"
    ]
  },
  {
    name: "Business-Hosting",
    price: 25,
    benefits: [
      "Unbegrenzter Datenverkehr",
      "Kostenloses Domain-Setup",
      "Kostenloses SSL-Zertifikat",
      "Regelmäßige Backups",
      "24/7 Kundensupport"
    ]
  },
  {
    name: "E-Commerce-Hosting",
    price: "50+",
    benefits: [
      "Sicheres E-Commerce-Setup",
      "Integration von Zahlungs-Gateways (z.B., PayPal, Stripe)",
      "Kostenloses SSL-Zertifikat",
      "Kundensupport"
    ]
  }
];
console.log(pricingModels)

</script>

<div class="w-full text-center justify-center flex flex-wrap">  <h2 class="w-full mb-10">Pakete</h2>
  <div class="w-full flex justify-center flex-wrap lg:flex-nowrap">
      {#each pricingModels as pricingModel}
      <Pricing name={pricingModel.name} benefits={pricingModel.benefits} price={pricingModel.price}><span class="text-2xl"> /Monat</span></Pricing>
      {/each}
  </div>


</div>
