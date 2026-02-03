<script>
  import NavComponent from './NavComponent.svelte'
  import { onMount } from 'svelte'
  import Logo from '$lib/img/Logo_without_text.png'

  let isNavbarAtTop = true
  onMount(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  function handleScroll() {
    isNavbarAtTop = window.scrollY === 0
  }

  function closeNav() {
    isMenuOpen = false
  }
</script>

<nav
  class={`flex justify-center md:justify-around items-center fixed z-40  rounded-md bg-opacity-50 duration-500 w-full gap-5 h-24 ${isNavbarAtTop ? '' : 'md:bg-secondary-700'}`}
>
  <div class="w-4/5 flex justify-between items-center">
    <div
      class="hidden font-normal md:flex flex-nowrap items-center justify-center lg:py-2 text-gray-300"
    >
      <a href="/" class="flex items-center gap-2">
        <img src={Logo} alt="Logo" class="h-8 md:h-12 lg:h-16" />
        <span class=" font-bold text-2xl md:text-5xl">Hannes Scheibelauer</span>
      </a>
    </div>
    <div class="md:flex hidden flex-nowrap">
      <div class=" flex-nowrap">
        <div class="flex justify-center">
          <NavComponent href="/#offerings">Leistungen</NavComponent>
          <NavComponent href="/#projects">Projekte</NavComponent>
        </div>
      </div>
      <a
        href="/#contact"
        class="bg-primary-400 rounded-md text-secondary-700 button lg:px-4 lg:py-1 px-2 font-semibold top-0 hover:-top-0.5 duration-300 button sm:text-xl lg:text-2xl"
      >
        Kontakt
      </a>
    </div>
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
