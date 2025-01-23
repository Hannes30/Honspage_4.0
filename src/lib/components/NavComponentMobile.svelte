<script>
  export let href
  export let closeNav
</script>

<a
  on:click={closeNav()}
  class={'lg:px-4 px-1 lg:py-1 sm:mr-2  hover:text-primary-700 hover:underline duration-500 font-medium mx-2 w-full text-5xl border-y-2 py-6 border-primary-300'}
  {href}
>
  <slot />
</a>
