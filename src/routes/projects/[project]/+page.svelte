<script>
    import Nav from "$lib/components/Nav.svelte";
  import ProjectTag from "$lib/components/ProjectTag.svelte";
  import Waves from "$lib/components/Waves.svelte";
    export let data;
</script>
<svelte:head>
	<title>{data.name} - Hannes Scheibelauer</title>
</svelte:head>
<Nav active=2></Nav>
<div class="pt-16 flex justify-center flex-wrap">
        <h1 class="w-full text-center">{data.name}</h1>
        <div class="flex justify-around lg:flex-nowrap lg:w-1/2 w-full flex-wrap">
        {#each data.tags as tag}
            <ProjectTag text={tag}></ProjectTag>
        {/each}
        </div>
        <div class="lg:p-16 pl-1"><h2 >Die Herausforderung</h2>  <span class="lg:text-2xl lg:mt-16 text-lg">{data.startText}</span></div>
       
        <div class="w-full mt-5"><Waves headingText="Die" headingTextHighlighted="Lösung">{data.problemText}</Waves></div>
       <div class="lg:p-16 pl-1"> <h2 class="w-full">Umsetzung</h2> <span class="lg:text-2xl lg:mt-16 text-lg"> {data.solvingText}</span></div>
       <div class="lg:p-16 pl-1"><h2 class="w-full ">Ergebniss</h2> <span class="lg:text-2xl lg:mt-16 text-lg">  {data.resultText}</span></div>
       <a href={data.link} class="lg:text-3xl text-primary-400 underline hover:animate-pulse w-full text-center">{data.name}</a>
      <div class="m-5 rounded-md"> <img alt={"picture of " + data.name} src={"/src/lib/img"+data.img} ></div>
</div>
<div>
    
</div>