<script>
  import NavComponent from "./NavComponent.svelte";
  import { onMount } from 'svelte';
  import ContactForm from "$lib/components/ContactForm.svelte";
  import showModalStore from '$lib/store/modalStore';

  let isNavbarAtTop = true;
  export let active;

  onMount(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

    let unsubscribe;
  onMount(() => {
    if (typeof document !== 'undefined') {
      // This check ensures that we are on the client side
      unsubscribe = showModalStore.subscribe((value) => {
        if (value) {
          document.body.style.overflow = "hidden";
          // Perform actions when modal is shown
        } else {
          document.body.style.overflow = "auto";
          // Perform actions when modal is closed
        }
      });
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (unsubscribe) {
        unsubscribe();
      }
    };
  });
  function handleScroll() {
    isNavbarAtTop = window.scrollY === 0;
  }
  function openContactModal() {
    showModalStore.set(true);
  }
  function closeContactModal() {
    showModalStore.set(false);
  }
</script>

{#if $showModalStore}
  <ContactForm {closeContactModal} />
{/if}

<nav class={"flex justify-around items-center fixed z-40  p-4 py-4 rounded-md bg-opacity-50 duration-500 w-[calc(100vw-(100vw-100%))] gap-5" + (isNavbarAtTop ? "" : " bg-secondary-700")}>
  <div class="bg-stone-500  font-normal flex flex-nowrap items-center justify-center lg:py-2">
    <a href="/"><span class="ml-4 font-bold text-2xl sm:text-3xl lg:text-5xl">Hannes Scheibelauer</span></a>
  </div>

  <div class="lg:w-1/3 sm:w-2/3 flex justify-around">
    <NavComponent href="/" aria-label="Back to Home">Home</NavComponent>
    <NavComponent href="/#offerings" > Leistungen </NavComponent>
    <NavComponent href="/#career" > Karriere </NavComponent>
    <NavComponent href="/#qa" > Q&A </NavComponent>
  </div>
  
  <button class="bg-primary-400 rounded-md text-secondary-700 lg:px-4 lg:py-1 px-2 font-semibold relative top-0 hover:-top-0.5 duration-300 button sm:text-xl lg:text-2xl"   on:click={openContactModal}>Kontakt</button>
</nav>
<style>
.button{
  text-shadow: 2px 2px #fff;
}

</style>
