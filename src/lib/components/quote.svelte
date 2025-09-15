<script>
  export let quote
  import { onMount, tick } from 'svelte'
  import { inView, animate } from 'motion'

  onMount(async () => {
    await tick()
    inView('.quoteMarker', (info) => {
      animate(
        info.target,
        { opacity: [0, 1], transform: ['translateY(40px)', 'translateY(0)'] },
        { duration: 0.5 },
      )
    })
    inView('.quoteSite', (info) => {  
      animate(
        info.target,
        { opacity: [0, 1], transform: ['translateY(40px)', 'translateY(0)'] },
        { delay: 0.15, duration: 0.5 },
      )
    })
    inView('.quoteAuthor', (info) => {
      animate(
        info.target,
        { opacity: [0, 1], transform: ['translateY(40px)', 'translateY(0)'] },
        { delay: 0.3, duration: 0.5 },
      )
    })
  })
</script>

<div class="flex flex-col justify-center items-center mb-10 max-w-[80%]">
  <div class="flex flex-col justify-center items-center text-center gap-4">
    <div class="relative">
      <span
        class="md:text-3xl text-lg md:leading-loose text-gray-300 quoteMarker"
        style="opacity:0"
      >
        {quote.text}
      </span>
    </div>
    <a
      href={quote.site}
      class="underline md:text-2xl text-lg text-primary-300 quoteSite"
      style="opacity:0"
    >
      {quote.site}
    </a>
    <span
      class="text-gray-400 md:text-xl text-base quoteAuthor"
      style="opacity:0"
    >
      - {quote.author}
    </span>
  </div>
</div>

<style>
  .quoteMarker {
    display: inline-block;
    line-height: 1.5;
    padding: 0 20px;
  }

  .quoteMarker::before,
  .quoteMarker::after {
    position: absolute;
    color: #758a8c;
    font-size: 90px;
    font-weight: 700;
    line-height: 0;
  }

  .quoteMarker::before {
    content: '”';
    left: 0px;
  }

  .quoteMarker::after {
    content: '„';
    right: 0px;
  }
</style>
