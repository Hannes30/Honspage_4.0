<script>
  export let title
  export let text
  export let width
  export let svg
</script>

<div
  class=" flex flex-col rounded-md border-primary-300 items-center justify-center border px-5 py-5 bg-primary-500 bg-opacity-20 gap-2 {width}"
>
  <div class=" flex md:flex-row justify-around gap-3 flex-col items-center">
    <div class="p-4 bg-black bg-opacity-10 rounded-full w-16 text-primary-200">
      <img src={svg} alt={'icon for' + title} />
    </div>

    <span
      class="flex justify-center items-center md:text-5xl text-3xl text-center"
      >{title}</span
    >
  </div>
  <div class="text-center text-sm md:text-lg">
    {text}
  </div>
</div>
