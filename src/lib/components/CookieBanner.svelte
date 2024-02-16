<script>
    import { fade, fly } from 'svelte/transition';
    export let handleClick;
</script>

<div in:fly={{ y: -200, duration: 500 }} out:fly={{ y: -200, duration: 500 }} class="cookie-banner fixed top-10 m-5 lg:left-1/4 lg:w-1/2 bg-secondary z-50 text-gray-200 lg:p-10 p-4 rounded-md shadow-xl border-gray-100 border">
<h1>Cookies!!🍪</h1>
<p>
    Diese Seite verwendet ausschließlich Cookies, um die Erfahrung auf der Website zu verbessern. Wir setzen keine Cookies ein, um persönliche Informationen an Drittanbieter weiterzuleiten. Die von uns verwendeten Cookies dienen lediglich dazu, anonymisierte statistische Daten zu sammeln, die uns helfen, die Website-Funktionalität zu optimieren.
    <a href="cookies" class=" text-primary-300">Cookie-Richtlinie</a>
</p>
<button class="px-4 py-1 rounded-md bg-primary-500 text-secondary font-medium mt-3" on:click={handleClick}>Einverstanden</button>
</div>
