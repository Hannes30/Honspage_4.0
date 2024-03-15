<script>
  import Nav from "$lib/components/Nav.svelte";
  import Banner from "$lib/components/Banner.svelte";
  import HofcafeImage from "$lib/img/projects/Hofcafe_Collage.jpg"
  import PortfolioImage from "$lib/img/projects/Portfolio_Collage.jpg"
</script>
<svelte:head>
	<title>Projekte - Hannes Scheibelauer</title>
</svelte:head>
<Nav active=2></Nav>
<div class="pt-20 flex justify-center flex-wrap">
  <h1 class="w-full text-center">Projekte</h1>
  <Banner image={HofcafeImage} name="Hofcafe Wolfpassing" text="August 2023" route="projects"></Banner>
  <Banner image={PortfolioImage} name="Portfolio" text="Februar 2024 - März 2024" route="projects"></Banner>
</div>