<script>
    import "../style.css";
    import logo from "$lib/img/Logo_without_text.png"
    import ContactForm from "../lib/components/ContactForm.svelte";
    import Footer from "$lib/components/Footer.svelte";
    let showModal = false;

function openContactModal(){
  showModal = true;
  document.body.style.overflow = "hidden";
  //darken site
}
function closeContactModal(){
  showModal = false;
  document.body.style.overflow = "auto";
}
  </script>
  <svelte:head>
    <link rel="icon" type="image/x-icon" href={logo}>
  </svelte:head>
  <div class="body bg-black"> 
    {#if showModal}
<ContactForm {closeContactModal} />
{/if}
     <div> <slot/></div>
     <Footer></Footer>
  </div>

  <style>
    .body{
      min-height: 100vh;
      color: white;
      background: linear-gradient(90deg,#022034,#054D4D);
    }
  </style>