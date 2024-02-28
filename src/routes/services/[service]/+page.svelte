<script>
    import Nav from "$lib/components/Nav.svelte";
  import ProjectTag from "$lib/components/ProjectTag.svelte";
  import Waves from "$lib/components/Waves.svelte";
    export let data;
</script>
<svelte:head>
	<title>{data.name} - Hannes Scheibelauer</title>
</svelte:head>
<Nav active=3></Nav>
<div class="pt-16 flex justify-center flex-wrap">
        <h1 class="w-full text-center">{data.name}</h1>
</div>