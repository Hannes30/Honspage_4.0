<script>
  import Quote from './quote.svelte'

  let quotes = [
    {
      author: 'Althea Müller',
      text: 'Hannes hat mir unkompliziert, sehr proaktiv und dabei immer aufs Budget  achtend meine neue Website erstellt. Für Fragen nimmt er sich dabei  gerne Zeit, individuelle Wünsche hat er immer berücksichtigt und toll  umgesetzt. Dazu ist er sehr flexibel und gleichzeitig zuverlässig in der Zusammenarbeit. Vielen Dank dafür! ',
      site: 'altheamueller.com',
    },
  ]
</script>

<div>
  {#each quotes as quote}
    <Quote {quote}></Quote>
  {/each}
</div>
