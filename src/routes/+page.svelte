<script>
  import Nav from "$lib/components/Nav.svelte";
  import LandingScreen from "$lib/components/LandingScreen.svelte";
  import CallToAction from "../lib/components/CallToAction.svelte";
  import Questions from "../lib/components/Questions.svelte";
  import Wave from "../lib/components/Wave.svelte";
  

</script>
<svelte:head>
	<title>Home - Hannes Scheibelauer</title>
</svelte:head>
<div>

<Nav active=1></Nav>
<LandingScreen />
<div>
<Wave />
<div class=" bg-secondary-700">

  <CallToAction></CallToAction>




<Questions></Questions>

</div>
</div>
</div>
<style>
</style>