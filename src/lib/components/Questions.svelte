<script>
  import Question from "./Question.svelte";
</script>

<div class="bg-secondary w-full  h-20 lg:rotate-2 rotate-6 relative overflow-x-hidden"></div> <!-- Seperator-->
<div class="-mt-10 w-full flex justify-center flex-wrap bg-secondary -mb-20 py-10 z-10 relative">
  <Question QuestionText="Wie kann eine Website meinem Unternehmen helfen?">
    Eine Website ist deine digitale <span class="highlighted text-2xl">Visitenkarte im Web</span>. Für Kunden oder Interessenten ist sie die erste Anlaufstelle für Informationen. Ein positiver <span class="highlighted text-2xl">erster Eindruck</span> ist nicht nur in der realen Welt wichtig, sondern auch in der Digitalen.
  </Question>
  
  <Question QuestionText="Was kostet eine Website?">
    Die Kosten für eine Website können variieren und sind nicht festgelegt. Für ein Unternehmen mit umfangreichen Anforderungen und Funktionen können die Kosten bei <span class="highlighted text-2xl">5000€</span> oder mehr liegen. Hingegen kann eine einfache Website für ein kleines Unternehmen mit grundlegenden Informationen <span class="highlighted text-2xl">800€</span>  oder weniger kosten.
  </Question>
  
  <Question QuestionText="Wie lange dauert die Entwicklung?">
    Die Dauer der Website-Entwicklung ist variabel und hängt von verschiedenen Faktoren ab. Für umfangreiche Projekte mit speziellen Anforderungen kann die Entwicklung <span class="highlighted text-2xl">mehrere Monate</span> in Anspruch nehmen. Hingegen kann eine simpler gestaltete Website für kleine Unternehmen in  <span class="highlighted text-2xl">wenigen Wochen</span>  erstellt werden.
  </Question>
  
  <Question QuestionText="Kann ich meine bestehende Website aktualisieren?">
    Natürlich! Nach Absprache mit Ihnen kann ich Updates oder sogar <span class="highlighted text-2xl">komplette Neugestaltungen</span> Ihrer Website umsetzen.
  </Question>
  
  <Question QuestionText="Welche laufenden Kosten gibt es für eine Website?">
    Die Hosting-Kosten, um sicherzustellen, dass die Website online abrufbar ist, belaufen sich auf <span class="highlighted text-2xl">20-40€</span> pro Monat. Websites, die umfangreiche Daten speichern (z.B. Vereinsverwaltung), können aufgrund ihres größeren Umfangs teurer sein. Die Domain-Kosten (z.B. hannes-scheibelauer.at), die dazu kommen, liegen hingegen nur bei <span class="highlighted text-2xl">3-10€</span> pro Monat.
  </Question>
  
  <Question QuestionText="Erhalte ich eine eigene E-Mail-Adresse?">
    Ja, nach Bedarf kannst du deine eigene E-Mail für <span class="highlighted text-2xl">2,99€</span> pro Monat pro Nutzer erhalten.
  </Question>
  
  <Question QuestionText="Kann ich meine Website selbst bearbeiten?">
    Ja, auf Wunsch erstelle ich ein <span class="highlighted text-2xl ">Content Management System (CMS)</span> mit dem Sie einfach Texte und Bilder selbst bearbeiten können.
  </Question>
</div>
<style>

  .highlighted{
    background-color: #47FFBF44;
    border-radius: 6px;
  
    padding: 0px 4px;
    display: inline;
  
  }
</style>