<script>
    import HannesScheibelauerDeckweiss from "$lib/img/HannesScheibelauerDeckweiss.webp?enhanced"

</script>
<div class="flex flex-wrap justify-around items-center lg:ml-16 ml-4 lg:flex-nowrap pt-24 overflow-x-hidden sm:pt-32 ">
    <div class="lg:pb-40 pb-8">
        <h1 class="lg:text-9xl text-6xl pb-5">Hannes Scheibelauer</h1>
        <span class="text-5xl leading-tight text-gray-400">Der kreative Webentwickler 
        für <span class=" text-secondary-700 bg-primary-200 px-2 rounded-md backgroundFadeIn ">deine</span> digitale Erfolgsstory!</span>
    </div>
    <div class="h-full">
        <enhanced:img src={HannesScheibelauerDeckweiss} alt="Hannes Scheibelauer Potrait photo">
     </div>
</div>
<style>
@keyframes background {
  from {background-color: #C2FFEA00;}
  to {background-color: #C2FFEA;}
}
.backgroundFadeIn{
    animation-name: background ;
    animation-duration: 1s;
}

</style>