<script>
  import NavComponent from './NavComponent.svelte'
  import { onMount } from 'svelte'
  import ContactForm from '$lib/components/ContactForm.svelte'
  import showModalStore from '$lib/store/modalStore'
  import NavComponentMobile from '$lib/components/NavComponentMobile.svelte'
  import { Menu, X } from 'lucide-svelte'
  import { fade, fly } from 'svelte/transition'

  let isNavbarAtTop = true
  let isMenuOpen = false
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
  function closeNav() {
    isMenuOpen = false
  }
  function closeContactModal() {
    showModalStore.set(false)
  }
</script>

{#if $showModalStore}
  <ContactForm {closeContactModal} />
{/if}

<nav
  class={`flex justify-between md:justify-around items-center fixed z-40 p-4 rounded-md bg-opacity-50 duration-500 w-full gap-5 h-24 ${isNavbarAtTop ? '' : 'bg-secondary-700'}`}
>
  <div
    class="font-normal flex flex-nowrap items-center justify-center lg:py-2 text-gray-300"
  >
    <a href="/"
      ><span class="md:ml-4 font-bold text-2xl md:text-5xl"
        >Hannes Scheibelauer</span
      >
    </a>
  </div>
  <div class="md:flex hidden flex-nowrap">
    <div class=" flex-nowrap">
      <div class="flex justify-center">
        <NavComponent href="/#offerings">Leistungen</NavComponent>
        <NavComponent href="/#Career">Karriere</NavComponent>
        <NavComponent href="/#qa">Q&A</NavComponent>
      </div>
    </div>
    <button
      class="bg-primary-400 rounded-md text-secondary-700 button lg:px-4 lg:py-1 px-2 font-semibold top-0 hover:-top-0.5 duration-300 button sm:text-xl lg:text-2xl"
      on:click={openContactModal}>Kontakt</button
    >
  </div>

  <div class="md:hidden flex flex-nowrap">
    <button on:click={() => (isMenuOpen = !isMenuOpen)}>
      <Menu size={24} /></button
    >
    {#if isMenuOpen}
      <div
        transition:fade={{ duration: 200 }}
        class="flex-nowrap h-screen w-screen fixed top-0 left-0 bg-secondary-700 flex flex-col items-center justify-center"
      >
        <div
          class="flex flex-col justify-center w-full h-full p-4"
          in:fly={{ y: 20, duration: 300, delay: 200 }}
          out:fly={{ y: -20, duration: 200 }}
        >
          <div class="w-full justify-end flex pb-2">
            <button on:click={() => (isMenuOpen = false)}>
              <X size={32} /></button
            >
          </div>
          <NavComponentMobile href="/#offerings" {closeNav}
            >Leistungen</NavComponentMobile
          >
          <NavComponentMobile href="/#Career" {closeNav}
            >Karriere</NavComponentMobile
          >
          <NavComponentMobile href="/#qa" {closeNav}>Q&A</NavComponentMobile>
          <div class="flex-1"></div>
        </div>
      </div>
    {/if}
  </div>
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
