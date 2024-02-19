<script>
    import "../style.css";
    import CookieBanner from "$lib/components/CookieBanner.svelte";
  import { onMount } from "svelte";
  /*let showBanner = false;
  onMount(() => {
    console.log(localStorage.getItem("Cookies") ? "exists":"doesn't exist");
    if(!localStorage.getItem("Cookies"))
    {
      setTimeout(() => {
      showBanner = true;
    }, 100);
    }
  });
  function handleClick(){
        localStorage.setItem("Cookies","set")
        showBanner = false;
    }*/
  </script>
  
  <div class="body bg-black"> 
    <!--{#if showBanner}
     <CookieBanner {handleClick}/> 
     {/if}-->
     <div> <slot/></div>
    
    </div>
  <style>
    .body{
      min-height: 100vh;
      color: white;
      background: linear-gradient(90deg,#022034,#054D4D);
    }
  </style>