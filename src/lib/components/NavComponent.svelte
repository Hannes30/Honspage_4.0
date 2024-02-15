<script>
  export let href;
  export let active;
  console.log(active);
</script>
<a class={"px-4 py-1  hover:text-secondary hover:bg-primary-200 rounded-md duration-500 font-medium" + (active ? " bg-primary-200 text-secondary": "")}  {href}>
   <slot />
</a>
