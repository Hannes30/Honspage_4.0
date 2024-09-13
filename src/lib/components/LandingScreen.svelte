<script>
    import HannesScheibelauerDeckweiss from "$lib/img/HannesScheibelauerDeckweiss.webp?enhanced"

</script>
<div class="flex flex-wrap justify-around items-center lg:ml-16 ml-4 lg:flex-nowrap pt-10 overflow-x-hidden sm:pt-22">
    <div class="lg:pb-40">
        <h1>Hannes Scheibelauer</h1>
        <span>Der kreative Webentwickler 
        für <span class=" text-secondary-700 bg-primary-200 px-2 rounded-md backgroundFadeIn">deine</span> digitale Erfolgsstory!</span>
    </div>
    <div class="md:w-3/5 sm:w-4/5">
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