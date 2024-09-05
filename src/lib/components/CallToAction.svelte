<script>
 import showModalStore from '$lib/store/modalStore';

  function openContactModal() {
    showModalStore.set(true);
    document.body.style.overflow = "hidden";
    // darken site if needed
  }



</script>
<div class="p-10 pt-20 flex flex-wrap justify-center">
  <span class="w-full text-center text-5xl font-medium text-white ">Ein Erstgespräch ist Kostenfrei</span>
<button on:click={openContactModal} class="button bg-primary-400  rounded-md text-secondary-700 px-10 py-4 text-3xl font-medium m-10 relative top-0 hover:-top-1 duration-300">Kontaktiere mich</button>
</div>
<style>
  
.button{
  text-shadow: 2px 2px #fff;
}
</style>