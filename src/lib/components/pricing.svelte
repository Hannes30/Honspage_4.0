<script>
     import {CheckOutline} from "flowbite-svelte-icons";
     import showModalStore from '$lib/store/modalStore';
    export let benefits;
    export let name;
    export let price;

    function openContactModal() {
    showModalStore.set(true);
    document.body.style.overflow = "hidden";
  }
   
</script>


<div class="border border-primary-400 rounded-md p-10 lg:w-1/4 w-96 bg-secondary h-min mb-2">
    <h2 class=" text-4xl w-full text-center py-2">{name}</h2>
    <div class="w-full text-center  text-4xl font-bold text-primary-400 py-3">€{price} <slot></slot></div>
    <div class="text-center flex flex-wrap py-2">
    {#each benefits as  benefit}
    <div class="w-full justify-around m-2"> <CheckOutline class=" w-12 h-12 inline-block"/>  <span class=" text-lg lines">  {benefit} </span></div>
       
    {/each}</div>   
    <button class="px-6 py-2 font-semibold bg-primary-400 rounded-md button text-black text-3xl mt-5 h-16 relative" on:click={openContactModal}> Kontaktieren</button>
</div>
<style>
    .button{
        text-shadow: 2px 2px #fff;
      }
      .lines{
        line-height: 1;
      }
      
      </style>