<script>
  import Question from './Question.svelte'
</script>

<div
  class=" w-full flex justify-center flex-wrap bg-secondary-700 py-10 z-10"
  id="qa"
>
  <Question QuestionText="Wie kann eine Website meinem Unternehmen helfen?">
    Eine Website ist deine digitale <span class="highlighted text-2xl"
      >Visitenkarte im Web</span
    >. Für Kunden oder Interessenten ist sie die erste Anlaufstelle für
    Informationen. Ein positiver
    <span class="highlighted text-2xl">erster Eindruck</span> ist nicht nur in der
    realen Welt wichtig, sondern auch in der Digitalen.
  </Question>

  <Question QuestionText="Wie lange dauert die Entwicklung?">
    Die Dauer der Website-Entwicklung ist variabel und hängt von verschiedenen
    Faktoren ab. Für umfangreiche Projekte mit speziellen Anforderungen kann die
    Entwicklung <span class="highlighted text-2xl">mehrere Monate</span> in
    Anspruch nehmen. Hingegen kann eine simpler gestaltete Website für kleine
    Unternehmen in <span class="highlighted text-2xl">wenigen Wochen</span> erstellt
    werden.
  </Question>

  <Question QuestionText="Kann ich meine bestehende Website aktualisieren?">
    Natürlich! Nach Absprache mit Ihnen kann ich Updates oder sogar <span
      class="highlighted text-2xl">komplette Neugestaltungen</span
    > Ihrer Website umsetzen.
  </Question>

  <Question QuestionText="Welche laufenden Kosten gibt es für eine Website?">
    Die Hosting-Kosten, um sicherzustellen, dass die Website online abrufbar
    ist, belaufen sich auf <span class="highlighted text-2xl">20-40€</span> pro
    Monat. Websites, die umfangreiche Daten speichern (z.B. Vereinsverwaltung),
    können aufgrund ihres größeren Umfangs teurer sein. Die Domain-Kosten (z.B.
    hannes-scheibelauer.at), die dazu kommen, liegen hingegen nur bei
    <span class="highlighted text-2xl">3-10€</span> pro Monat.
  </Question>

  <Question QuestionText="Erhalte ich eine eigene E-Mail-Adresse?">
    Ja, nach Bedarf kannst du deine eigene E-Mail für <span
      class="highlighted text-2xl">2,99€</span
    > pro Monat pro Nutzer erhalten.
  </Question>

  <Question QuestionText="Kann ich meine Website selbst bearbeiten?">
    Ja, auf Wunsch erstelle ich ein <span class="highlighted text-2xl"
      >Content Management System (CMS)</span
    > mit dem Sie einfach Texte und Bilder selbst bearbeiten können.
  </Question>
</div>

<style>
  .highlighted {
    background-color: #47ffbf44;
    border-radius: 6px;

    padding: 0px 4px;
    display: inline;
  }
</style>
