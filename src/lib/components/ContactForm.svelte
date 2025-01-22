<script>
  import { fade, fly } from 'svelte/transition'
  import {
    PhoneOutline,
    EnvelopeSolid,
    GithubSolid,
    LinkedinSolid,
  } from 'flowbite-svelte-icons'
  export let closeContactModal

  function handleClickOutside(event) {
    // Check if the clicked element is the modal or a child of it
    const modal = document.querySelector('.relative') // The modal div
    if (!modal.contains(event.target)) {
      closeContactModal()
    }
  }
</script>

<div
  class="flex justify-center inset-0 items-center z-50 fixed w-full h-full bg-black bg-opacity-70"
  on:click={handleClickOutside}
>
  <div
    class="w-min lg:w-max relative bg-secondary-700 border border-white rounded-md p-10"
    in:fly={{ y: -200, duration: 500 }}
    out:fly={{ y: 200, duration: 500 }}
  >
    <h1 class="text-5xl pb-3">Kontaktiere mich</h1>
    <p class="inline">
      <PhoneOutline class="h-8 w-8 text-primary-400 inline" /> 0670 2018717
    </p>
    <p>
      <a href="mailto:Kontakt@hannes-scheibelauer.at">
        <EnvelopeSolid class="h-8 w-8 inline text-primary-400" /> Kontakt@hannes-scheibelauer.at
      </a>
    </p>
    <p>
      <a href="mailto:Kontak@hannes-scheibelauer.at">
        <GithubSolid class="h-8 w-8 inline text-primary-400" /> Hannes30
      </a>
    </p>
    <p>
      <a href="https://www.linkedin.com/in/hannes-scheibelauer-65b9a8238/">
        <LinkedinSolid class="h-8 w-8 inline text-primary-400" /> Hannes Scheibelauer
      </a>
    </p>
    <button
      class="absolute top-2 right-3 text-4xl text-primary-400"
      on:click={closeContactModal}
    >
      X
    </button>
  </div>
</div>
