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
<Waves headingText="Ich bin"  headingTextHighlighted="Hannes">
  <p>Ich besuche die IT-HTL YBBS als Schüler, habe jedoch früh erkannt, dass mir Webdesign mehr Freude bereitet als andere Fachbereiche. Seit dem Jahr 2022 gestalte ich Websites für verschiedene Unternehmen. Anfang 2024 habe ich schließlich mein eigenes Unternehmen gegründet.</p><br/><p> In meiner Arbeitsweise steht die Zusammenarbeit im Vordergrund – ich arbeite nicht nur für meine Kunden, sondern gemeinsam mit ihnen. Jedes Design stimme ich persönlich mit meinen Kunden ab, um sicherzustellen, dass die Website erst dann finalisiert wird, wenn sie zu 100 % ihren Anforderungen entspricht.</p>
</Waves>
<Blobs></Blobs>
<CallToAction></CallToAction>
<Questions></Questions>

</div>