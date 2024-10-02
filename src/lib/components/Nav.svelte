<script>
  import NavComponent from './NavComponent.svelte'
  import { onMount } from 'svelte'
  import ContactForm from '$lib/components/ContactForm.svelte'
  import showModalStore from '$lib/store/modalStore'

  let isNavbarAtTop = true
  onMount(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  let unsubscribe
  onMount(() => {
    if (typeof document !== 'undefined') {
      unsubscribe = showModalStore.subscribe((value) => {
        document.body.style.overflow = value ? 'hidden' : 'auto'
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (unsubscribe) {
        unsubscribe()
      }
    }
  })

  function handleScroll() {
    isNavbarAtTop = window.scrollY === 0
  }
  function openContactModal() {
    showModalStore.set(true)
  }
  function closeContactModal() {
    showModalStore.set(false)
  }
</script>

{#if $showModalStore}
  <ContactForm {closeContactModal} />
{/if}

<nav
  class={`flex justify-center md:justify-around items-center fixed z-40 p-4 py-4 rounded-md bg-opacity-50 duration-500 w-full gap-5 h-24 ${isNavbarAtTop ? '' : 'bg-secondary-700'}`}
>
  <div
    class="font-normal flex flex-nowrap items-center justify-center lg:py-2 text-gray-300"
  >
    <a href="/"
      ><span class="md:ml-4 font-bold text-4xl md:text-5xl hidden md:block"
        >Hannes Scheibelauer</span
      >
    </a>
  </div>
  <div class=" flex-nowrap">
    <div class="flex justify-center">
      <NavComponent href="/#offerings">Leistungen</NavComponent>
      <NavComponent href="/#qa">Q&A</NavComponent>
    </div>
  </div>
  <button
    class="bg-primary-400 rounded-md text-secondary-700 button lg:px-4 lg:py-1 px-2 font-semibold top-0 hover:-top-0.5 duration-300 button sm:text-xl lg:text-2xl"
    on:click={openContactModal}>Kontakt</button
  >
</nav>

<style>
  .NavMenu {
    font-size: 36px;
    font-weight: bold;
    border-radius: 1px;
    padding: 10px 0px;
    border-top: 3px solid rgba(255, 255, 255, 0.5);
  }
  .button {
    text-shadow: 2px 2px #fff;
  }
</style>
