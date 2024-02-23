<script>
    import Nav from "$lib/components/Nav.svelte";
    import Banner from "$lib/components/Banner.svelte";
    import WebHostingImage from "$lib/img/projects/Web-Hosting.jpg"
    import WebDevImage from "$lib/img/projects/Web-Entwicklung.jpg"
</script>
<svelte:head>
	<title>Leistungen - Hannes Scheibelauer</title>
</svelte:head>
<Nav active=3></Nav>
<div class="pt-20 flex justify-center flex-wrap">
  <h1 class="w-full text-center">Leistungen</h1>
  <Banner image={WebDevImage} name="Web Development" text="ab 800€" route="services"></Banner>
  <Banner image={WebHostingImage} name="Web Hosting" text="10-40€ Monatlich" route="services"></Banner>
</div>