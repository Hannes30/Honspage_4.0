<script>
  import Nav from '$lib/components/Nav.svelte'
  import LandingScreen from '$lib/components/LandingScreen.svelte'
  import CallToAction from '../lib/components/CallToAction.svelte'
  import Questions from '../lib/components/Questions.svelte'
  import Wave from '../lib/components/Wave.svelte'
  import FirstCtaText from '../lib/components/FirstCTAText.svelte'
  import MyOffersSection from '../lib/components/MyOffersSection.svelte'
  import HowIdDoItSection from '../lib/components/HowIdDoItSection.svelte'
  import Career from '../lib/components/Career.svelte'
</script>

<svelte:head>
  <title>Home - Hannes Scheibelauer</title>
</svelte:head>
<div class="w-full overflow-x-hidden">
  <Nav active="1"></Nav>
  <LandingScreen />
  <div class="relative top-[-20px] pb-5">
    <div class="overflow-hidden">
      <div
        class="bg-secondary-700 -rotate-1 h-12 w-screen relative top-5 overflow-x-hidden"
      ></div>
    </div>
    <div class=" bg-secondary-700">
      <FirstCtaText></FirstCtaText>
      <CallToAction id="offerings"></CallToAction>
      <MyOffersSection></MyOffersSection>
      <HowIdDoItSection></HowIdDoItSection>
      <Career></Career>

      <Questions></Questions>
    </div>
    <div
      class="absolute bottom-[-100px] z-10 h-20 bg-secondary-700 w-full"
    ></div>
  </div>
</div>

<style>
</style>
