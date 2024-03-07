<script>
    import Nav from "$lib/components/Nav.svelte";
  import ProjectTag from "$lib/components/ProjectTag.svelte";
  import Waves from "$lib/components/Waves.svelte";
  import WebDevPricing from "../../../lib/components/WebDevPricing.svelte";
  import WebHostingPricing from "../../../lib/components/WebHostingPricing.svelte";
    export let data;  
</script>
<svelte:head>
	<title>{data.services.name} - Hannes Scheibelauer</title>
</svelte:head>
<Nav active=3></Nav>
<div class="pt-16 flex justify-center flex-wrap">
        <h1 class="w-full text-center">{data.services.name}</h1>
        <span class=" text-center lg:text-3xl  w-3/4 py-16 text-lg">{data.services.text}</span>
        {#if data.services.name =="Web Development"}
         <WebDevPricing></WebDevPricing>
         {:else if data.services.name== "Web Hosting"}
         <WebHostingPricing></WebHostingPricing>
        {/if}
        
</div>