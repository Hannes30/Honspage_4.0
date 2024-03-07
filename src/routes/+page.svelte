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
  <p>Ich  besuche die <span class=" highlightedSpan  lg:text-2xl text-lg bg-opacity-50">IT-HTL ybbs</span> als Schüler, habe jedoch früh erkannt, dass mir <span class="lg:text-2xl text-lg highlightedSpan bg-opacity-50">Webdesign</span>  mehr Freude bereitet als andere Fachbereiche. Seit dem Jahr <span class="lg:text-2xl text-lg highlightedSpan bg-opacity-50">2022</span> gestalte ich Websites für verschiedene Unternehmen. Anfang 2024 habe ich schließlich mein <span class="lg:text-2xl text-lg highlightedSpan bg-opacity-50">eigenes Unternehmen</span> gegründet.</p><br/><p> In meiner Arbeitsweise steht die <span class="lg:text-2xl text-lg highlightedSpan bg-opacity-50">Zusammenarbeit</span>
     im Vordergrund – ich arbeite nicht nur für meine Kunden, sondern <span class="lg:text-2xl text-lg highlightedSpan bg-opacity-50">gemeinsam</span> mit ihnen. Jedes Design stimme ich persönlich mit meinen Kunden ab, um sicherzustellen, dass die Website erst dann finalisiert wird, wenn sie zu <span class="lg:text-2xl text-lg highlightedSpan bg-opacity-50">100% ihren Anforderungen</span> entspricht.</p>
</Waves> </div>
<Blobs></Blobs>
<CallToAction></CallToAction>
<Questions></Questions>

</div>
<style>
  .highlightedSpan{
    background-color:#99FFDB ;
    border-radius: 6px;
    color: #022034;
    padding: 0px 4px;
    display: inline;
  }
</style>