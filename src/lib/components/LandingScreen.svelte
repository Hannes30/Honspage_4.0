<script>
  import HannesScheibelauerDeckweiss from '$lib/img/HannesScheibelauerDeckweiss.webp?enhanced'
</script>

<div
  class="flex flex-wrap justify-around items-center lg:ml-16 ml-4 lg:flex-nowrap pt-20 overflow-x-hidden sm:pt-24 relative top-[20px]"
>
  <div class="lg:pb-40 pb-8">
    <h1 class="md:text-6xl text-4xl xl:text-9xl pb-5">Hannes Scheibelauer</h1>
    <span class="md:text-5xl leading-tight text-gray-300 text-2xl"
      >Der Mediengestalter für <span
        class=" text-secondary-700 bg-primary-200 px-2 rounded-md backgroundFadeIn md:text-5xl text-2xl"
        >deine</span
      > Erfolgsstory!</span
    >
  </div>
  <div class="w-1/2 md:h-full relative">
    <enhanced:img
      src={HannesScheibelauerDeckweiss}
      alt="Hannes Scheibelauer Potrait photo"
    >
    </enhanced:img>
  </div>
</div>

<style>
  @keyframes background {
    from {
      background-color: #c2ffea00;
    }
    to {
      background-color: #c2ffea;
    }
  }
  .backgroundFadeIn {
    animation-name: background;
    animation-duration: 1s;
  }
</style>
