<script>
  export let name
  export let image
  export let text
  export let route
</script>

<div class="justify-center flex w-full">
  <a
    class=" wrapper flex justify-center"
    href={route + '/' + name.replace(/\s/g, '')}
  >
    <div class="relative group overflow-hidden object-cover">
      <img
        src={image}
        alt={'Banner Image of ' + name}
        class="h-full rounded-md"
      />

      <div
        class="absolute bottom-2 lg:-bottom-28 rounded-md bg-gray-800 bg-opacity-50 p-3 left-2 group-hover:transform lg:group-hover:-translate-y-32 transition duration-500 max-w-60 sm:max-w-full"
      >
        <h2 class="lg:text-4xl sm:text-2xl text-xl">{name}</h2>
        <p
          class="text-gray-200 font-light text-sm sm:text-lg lg:text-xl text-ellipsis line-clamp-1"
        >
          {text}
        </p>
      </div>
    </div>
  </a>
</div>

<style>
  .wrapper {
    max-height: 60vh;
    width: 100%;
  }
</style>
