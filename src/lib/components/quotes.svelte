<script>
  import Quote from './quote.svelte'

  let quotes = [
    {
      author: 'Christina Zehetner',
      text: 'Die Zusammenarbeit mit Hannes war von Anfang an sehr klar und strukturiert. Ich konnte mich gut auf ihn verlassen, dass alles im vereinbarten Zeitrahmen und in hoher Qualität abgeschlossen wird. Ich bin mit dem Endergebnis sehr zufrieden und würde ihn jederzeit weiterempfehlen!',
      site: 'christinazehetner.at',
    },
  ]
</script>

<div>
  {#each quotes as quote}
    <Quote {quote}></Quote>
  {/each}
</div>
