<script>
  import Nav from '$lib/components/Nav.svelte'
  import LandingScreen from '$lib/components/LandingScreen.svelte'
  import CallToAction from '../lib/components/CallToAction.svelte'

  import FirstCtaText from '../lib/components/FirstCTAText.svelte'
  import MyOffersSection from '../lib/components/MyOffersSection.svelte'
  import Quotes from '../lib/components/quotes.svelte'
  import ProjectShowcase from '../lib/components/ProjectShowcase.svelte'
  import Contact from '../lib/components/contact.svelte'
</script>

<svelte:head>
  <title>Home - Hannes Scheibelauer</title>
</svelte:head>
<div class="w-full overflow-x-hidden">
  <Nav active="1"></Nav>
  <LandingScreen />
  <div class="relative">
    <div class="overflow-hidden">
      <div
        class="bg-secondary-700 -rotate-1 h-12 w-full relative top-6 overflow-x-hidden"
      ></div>
    </div>
    <div class=" bg-secondary-700 overflow-x-hidden h-max">
      <FirstCtaText></FirstCtaText>
      <CallToAction id="offerings"></CallToAction>

      <ProjectShowcase></ProjectShowcase>

      <Quotes></Quotes>
      <MyOffersSection></MyOffersSection>
      <Contact></Contact>
    </div>
  </div>
</div>
