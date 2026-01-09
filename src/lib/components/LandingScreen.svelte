<script>
  import HannesScheibelauerDeckweiss from '$lib/img/HannesLaptopNormal.webp?enhanced'
</script>

<div class=" justify-center flex">
  <div
    class="w-4/5 md:w-full flex flex-wrap mr-10 justify-center items-center lg:items-center lg:flex-nowrap overflow-x-hidden md:pt-24 relative top-[40px] lg:top-10 h-full md:ml-[9.9%]"
  >
    <div class="lg:pb-40 pb-8">
      <h1 class="md:text-6xl text-4xl xl:text-9xl pb-5">Hannes Scheibelauer</h1>
      <span class="md:text-5xl leading-tight text-gray-300 text-2xl"
        >Webdesign, das <span
          class=" text-secondary-700 bg-primary-200 px-2 rounded-md backgroundFadeIn md:text-5xl text-2xl"
          >wirkt.</span
        >
      </span>
    </div>
    <div class=" md:h-full relative md:w-1/2 w-3/4">
      <enhanced:img
        loading="lazy"
        src={HannesScheibelauerDeckweiss}
        alt="Hannes Scheibelauer Potrait photo"
      >
      </enhanced:img>
    </div>
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
