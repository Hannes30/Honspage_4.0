<script>
  import Nav from "$lib/components/Nav.svelte";
  import LandingScreen from "$lib/components/LandingScreen.svelte";
  import Waves from "$lib/components/Waves.svelte";
  import Blobs from "$lib/components/Blobs.svelte";
  import CallToAction from "../lib/components/CallToAction.svelte";
  import Questions from "../lib/components/Questions.svelte";

</script>
<svelte:head>
	<title>Home - Hannes Scheibelauer</title>
</svelte:head>
<div>

<Nav active=1></Nav>
<LandingScreen />
<div class="-top-44 relative lg:-top-36">
<Waves headingText="Ich bin"  headingTextHighlighted="Hannes">
  <p>Ich bin ein 18-jähriger angehender Webentwickler und besuche derzeit die IT-HTL Ybbs, wo ich mich im Abschlussjahr befinde. Schon früh habe ich meine Leidenschaft für Webdesign entdeckt und mich auf die Entwicklung von benutzerfreundlichen und ästhetisch ansprechenden Websites spezialisiert. Neben meiner schulischen Ausbildung sammle ich als Full Stack Developer in einem <a href="https://www.deckweiss.at/team/hannes-scheibelauer" class="  px-1 rounded-md underline decoration-primary-800">Unternehmen</a>   wertvolle Praxiserfahrung, die mir hilft, Projekte sowohl im Frontend als auch im Backend erfolgreich umzusetzen.
<br />
    Mein Ansatz basiert auf enger Zusammenarbeit mit meinen Kunden. Gemeinsam entwickeln wir maßgeschneiderte Lösungen, die perfekt auf die jeweiligen Anforderungen abgestimmt sind. Erst wenn meine Kunden zu 100 % zufrieden sind, gilt das Projekt als abgeschlossen.</p>
</Waves> </div>
<Blobs></Blobs>
<CallToAction></CallToAction>
<Questions></Questions>

</div>
<style>
</style>