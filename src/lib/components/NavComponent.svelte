<script>
  export let href;
  export let active;
</script>
<a class={"lg:px-4 px-1 lg:py-1  sm:mr-2  hover:text-secondary-700 hover:bg-primary-200 rounded-md duration-500 font-medium mx-2" + (active ? " bg-primary-200 text-secondary-700": "")}  {href}>
   <slot />
</a>
