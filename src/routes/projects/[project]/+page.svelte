<script>
    import Nav from "$lib/components/Nav.svelte";
    export let data;
    console.log(data);
</script>
<svelte:head>
	<title>{data.name} - Hannes Scheibelauer</title>
</svelte:head>
<Nav active=2></Nav>
<div>
    {data.name}
</div>
<div>
    
</div>