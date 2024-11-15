<script>
  import { onMount } from 'svelte'
  import { animate, inView } from 'motion'
  export let Date
  export let Title
  export let Text

  onMount(() => {
    inView('.CareerFlyIn', (info) => {
      animate(
        info.target,
        {
          opacity: [0, 1],
          transform: ['translateY(100px)', 'translateY(0)'],
        },
        { delay: 0.4, duration: 0.5 },
      )
    })
  })
</script>

<div
  class="flex md:w-1/3 flex-col justify-center items-center w-full CareerFlyIn"
>
  <div class=" text-primary-200 text-xl md:text-2xl text-center">
    {Date}
  </div>
  <div class="flyinHeading text-3xl md:text-5xl font-bold text-center">
    {Title}
  </div>
  <div class="text-center pt-1 w-5/6">{Text}</div>
</div>

<style>
  .flyinHeading {
    background: -webkit-linear-gradient(45deg, #c2ffea, #70ffcd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
