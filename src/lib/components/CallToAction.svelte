<script>
  import { onMount } from 'svelte'
  export let id
  import { animate, inView } from 'motion'

  onMount(() => {
    inView('.CTAWraper', (info) => {
      animate(
        info.target,
        {
          opacity: [0, 1],
          transform: ['translateY(100px)', 'translateY(0)'],
        },
        { delay: 0.3, duration: 0.5 },
      )
    })
  })
</script>

<div class=" p-10 pt-20 flex flex-wrap justify-center gap-10 mb-10 CTAWraper">
  <span
    class="w-full text-center lg:text-7xl font-medium text-white text-5xl CTAText"
  >
    Ein Erstgespräch ist kostenfrei
  </span>
  <a
    href="/#contact"
    class="button bg-primary-400 rounded-md text-secondary-700 px-10 py-4 lg:py-6 lg:px-15 text-2xl lg:text-4xl font-bold m-10 mt-3 relative top-0 hover:-top-1 duration-300 CTAButton"
    {id}
  >
    Kontaktiere mich
  </a>
</div>

<style>
  .button {
    text-shadow: 2px 2px #fff;
  }
  .CTAText {
    background: -webkit-linear-gradient(45deg, #62bdf9, #02cb8b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
