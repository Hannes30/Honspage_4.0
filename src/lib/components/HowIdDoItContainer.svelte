<script>
  import { animate, inView } from 'motion'
  import { onMount } from 'svelte'
  export let title
  export let text
  export let width
  export let svg

  onMount(() => {
    inView('.HDIC', (info) => {
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
  class="HDIC flex flex-col rounded-md border-primary-300 items-center justify-between border px-5 py-5 bg-primary-500 bg-opacity-20 gap-2 {width} h-min"
>
  <div
    class=" flex md:flex-row justify-between gap-5 flex-col items-center min-w-min"
  >
    <div class="p-4 bg-black bg-opacity-10 rounded-full w-16 text-primary-200">
      <img src={svg} alt={'icon for' + title} />
    </div>

    <span
      class="flex justify-center items-center lg:text-4xl text-2xl text-center font-bold xl:text-5xl"
      >{title}</span
    >
  </div>
  <div class="text-center text-sm md:text-lg">
    {text}
  </div>
</div>

<style>
  @media (max-width: 768px) {
    .HDIC {
      width: 100%;
    }
  }
</style>
