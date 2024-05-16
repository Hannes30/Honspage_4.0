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
<div class="pt-16 relative">
        <h1 class="w-full text-center">{data.name}</h1>
        <div class="flex justify-around lg:flex-nowrap  w-full flex-wrap ">
          <div class="w-full flex justify-center ">
        {#each data.tags as tag}
            <ProjectTag text={tag}></ProjectTag>
        {/each}
      </div>
        </div>
        <div class="lg:p-16 p-10 "><h2 >Die Herausforderung</h2>  <span class="lg:text-2xl lg:mt-16 text-lg">{data.startText}</span></div>
       
        <div class="w-full mt-5 "><Waves headingText="Die" headingTextHighlighted="Lösung">{data.problemText}</Waves></div>

       <div class="p-10 lg:p-16"> <h2 class="w-full">Umsetzung</h2> <span class="lg:text-2xl lg:mt-16 text-lg"> {data.solvingText}</span></div>
      <div class="overflow-hidden"> <div class="bg-secondary w-full h-20 lg:rotate-2 rotate-6 relative top-10"></div></div> <!-- Seperator-->
      <div class="bg-secondary -mb-20 pb-10 flex justify-center flex-wrap">
        <div class="lg:p-16 p-10"><h2 class="w-full ">Ergebnis</h2> <span class="lg:text-2xl lg:mt-16 text-lg ">  {data.resultText}</span></div>
        <a href={data.link} class="text-3xl text-primary-400 underline hover:animate-pulse w-full text-center m-5 font-semibold">{data.name}</a>
       </div>
      
</div>
<div>
    
</div>