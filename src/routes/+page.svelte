<script>
  import Nav from "$lib/components/Nav.svelte";
  import LandingScreen from "$lib/components/LandingScreen.svelte";
  import Waves from "$lib/components/Waves.svelte";
  import Blobs from "$lib/components/Blobs.svelte";
  import CallToAction from "../lib/components/CallToAction.svelte";
  import ContactForm from "../lib/components/ContactForm.svelte";
  let showModal = false;

function openContactModal(){
  showModal = true;
  console.log(showModal);
}
function closeContactModal(){
  showModal = false;
}
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>
<div>
{#if showModal}
<ContactForm {closeContactModal} />
{/if}
<Nav active=1 {openContactModal}></Nav>
<LandingScreen />
<Waves headingText="Ich bin"  headingTextHighlighted="Hannes">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum</Waves>
<Blobs></Blobs>
<CallToAction {openContactModal}></CallToAction>
</div>