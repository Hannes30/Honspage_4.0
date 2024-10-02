<script>
  export let href
</script>

<a
  class={'lg:px-4 px-1 lg:py-1  sm:mr-2  hover:text-secondary-700 hover:bg-primary-200 rounded-md duration-500 font-medium mx-2 text-xl lg:text-2xl'}
  {href}
>
  <slot />
</a>
