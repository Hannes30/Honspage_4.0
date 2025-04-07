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
  class="HDIC flex flex-col rounded-md border-primary-300 items-center justify-center border px-5 py-5 bg-opacity-20 gap-2 md:gap-5 {width}"
>
  <div
    class=" flex lg:flex-row justify-between gap-2 md:gap-5 flex-col items-center min-w-min"
  >
    <div
      class="md:p-4 p-2 bg-black bg-opacity-10 rounded-full w-10 md:w-16 text-primary-200"
    >
      <img src={svg} alt={'icon for' + title} />
    </div>

    <span
      class="flex justify-center items-center md:text-3xl text-xl text-center font-bold xl:text-4xl"
      >{title}</span
    >
  </div>
  <div class="text-center text-sm md:text-xl text-gray-200">
    {text}
  </div>
</div>

<style>
  .HDIC {
    background: linear-gradient(
      45deg,
      rgba(72, 255, 191, 0.2),
      rgba(153, 255, 219, 0.1)
    );
  }
  @media (max-width: 768px) {
    .HDIC {
      width: 100%;
    }
  }
</style>
