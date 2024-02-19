<script>
    import { fade, fly } from 'svelte/transition';
    import {PhoneOutline,EnvelopeSolid, GithubSolid,LinkedinSolid } from "flowbite-svelte-icons";
export let closeContactModal;

</script>
<div class="flex justify-center inset-0 items-center z-50 fixed" in:fly={{ y: -200, duration: 500 }} out:fly={{ y: 200, duration: 500 }}>
    <div class="w-max relative bg-secondary border border-white rounded-md p-10">
        <h1 class="text-5xl pb-3">Kontaktiere mich</h1>
        <p class="inline"> <PhoneOutline class="h-8 w-8 text-primary-400 inline"/> 0670 2018717</p>
        <p> <EnvelopeSolid class="h-8 w-8 inline text-primary-400"/> <a href="mailto:Kontak@hannes-scheibelauer.at"> Kontak@hannes-scheibelauer.at</a></p>
        <p> <GithubSolid class="h-8 w-8 inline text-primary-400"/>  <a href="mailto:Kontak@hannes-scheibelauer.at"> Hannes30</a></p>
        <p> <LinkedinSolid class="h-8 w-8 inline text-primary-400"/> <a href=" https://www.linkedin.com/in/hannes-scheibelauer-65b9a8238/"> Hannes Scheibelauer
         </a></p>
        <button class="absolute top-2 right-3 text-4xl text-primary-400" on:click={closeContactModal}>X</button>
    </div>
</div>