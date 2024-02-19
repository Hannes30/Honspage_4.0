<script>
  import NavComponent from "./NavComponent.svelte";
  import { onMount } from 'svelte';
  export let openContactModal;
  let isNavbarAtTop = true;
  export let active;

  onMount(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  function handleScroll() {
    isNavbarAtTop = window.scrollY === 0;
    console.log(window.scrollY);
  }
</script>
<nav class={"flex justify-around items-center mr-4 fixed w-full z-40  p-4 rounded-md bg-opacity-50 duration-500"+ (isNavbarAtTop ? "" : " bg-secondary")}>
    <div class=" bg-stone-500 text-3xl font-normal flex flex-nowrap items-center justify-around"><!-- <img src="../src/lib/img/Logo_without_text_small.png" alt="">--><span class="ml-4 font-bold"> Hannes Scheibelauer</span></div>

    <div class=" w-1/3 flex justify-around">
        <NavComponent href="./"  active={active == 1}> Home </NavComponent>
        <NavComponent href="/projects" active={active == 2}> Projekte </NavComponent>
        <NavComponent href="/services" active={active == 3}> Leistungen </NavComponent>
    </div>
    <button class=" bg-primary-400  rounded-md text-secondary px-4 py-1 font-semibold relative top-0 hover:-top-1 duration-300" on:click={openContactModal}>Kontakt</button>
    
</nav> 
<style>
  a  {
    text-shadow: 1px 3px #EBFFF8;
  }

</style>