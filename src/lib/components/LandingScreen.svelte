<script>
    import HanneswithDotsLight_medium from "$lib/img/HanneswithDotsLight_medium.webp?enhanced"

</script>
<div class="flex flex-wrap justify-around items-center ml-16 lg:flex-nowrap pt-20 overflow-x-hidden">
    <div class="lg:pb-40">
        <h1>Hannes Scheibelauer</h1>
        <span>Der kreative Webentwickler 
        für <span class=" text-secondary-700 bg-primary-200 px-2 rounded-md backgroundFadeIn">deine</span> digitale Erfolgsstory!</span>
    </div>
    <div class="">
        <enhanced:img src={HanneswithDotsLight_medium} alt="Hannes Scheibelauer with Web Icons">
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