<script>
  export let quote
</script>

<div class="flex flex-col justify-center items-center w-full mb-10">
  <div
    class="flex flex-col justify-center items-center md:w-2/3 text-center gap-4"
  >
    <div class="relative">
      <span
        class="md:text-3xl text-lg md:leading-loose text-gray-300 quoteMarker"
      >
        {quote.text}
      </span>
    </div>
    <a href={quote.site} class="underline md:text-2xl text-lg text-primary-300">
      {quote.site}</a
    >
    <span class="text-gray-400 md:text-xl text-base"> - {quote.author}</span>
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
