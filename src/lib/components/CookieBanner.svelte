<script>
    export let acceptCookies;
    export let cookiesAccepted;
  </script>
  
  {#if !cookiesAccepted}
  <div class="fixed bottom-0 bg-secondary bg-opacity-50 w-full z-50 p-4">
    <h2>Cookies!!🍪</h2>
    <div class="flex items-center w-full relative  flex-wrap lg:flex-nowrap">
      <p class="text-xl h-min text-center w-full">Diese Seite verwendet Cookies zur Analyse von Benutzerverhalten, um die Website kontinuierlich zu verbessern.</p>
      <div class="  w-100% flex justify-center w-full lg:w-auto"> 
        <!-- Modify the button to call acceptCookies when clicked -->
        <button class="p-5 bg-secondary rounded-md m-2" on:click={rejectCookies}>Cookies Ablehnen</button>
        <button class="p-5 bg-primary-300  rounded-md text-secondary font-bold m-2" on:click={acceptCookies}>Cookies Akzeptieren </button>
      </div>
    </div>
  </div>
  {/if}
  