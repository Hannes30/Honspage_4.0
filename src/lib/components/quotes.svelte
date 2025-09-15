<script>
  import Quote from './quote.svelte'

  let quotes = [
    {
      author: 'Christina Zehetner',
      text: 'Die Zusammenarbeit mit Hannes war von Anfang an sehr klar und strukturiert. Ich konnte mich gut auf ihn verlassen, dass alles im vereinbarten Zeitrahmen und in hoher Qualität abgeschlossen wird. Ich bin mit dem Endergebnis sehr zufrieden und würde ihn jederzeit weiterempfehlen!',
      site: 'https://www.christinazehetner.at/',
    },
  ]
</script>

<div class="lg:pt-10 w-full flex justify-center items-center">
  {#each quotes as quote}
    <Quote {quote}></Quote>
  {/each}
</div>
