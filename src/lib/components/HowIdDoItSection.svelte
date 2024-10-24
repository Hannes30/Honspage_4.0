<script>
  import HowIdDoItContainer from './HowIdDoItContainer.svelte'
  import communicationSVG from '$lib/img/HIDI/communication.svg?enhanced'
  import expertSVG from '$lib/img/HIDI/expert.svg?enhanced'
  import ZusammenarbeitSVG from '$lib/img/HIDI/collaboration.svg?enhanced'
  import seoSVG from '$lib/img/HIDI/seo.svg?enhanced'
  import upToDateSVG from '$lib/img/HIDI/upToDate.svg?enhanced'
  import supportSVG from '$lib/img/HIDI/support.svg?enhanced'
  import { animate, inView } from 'motion'
  import { onMount } from 'svelte'

  let data = [
    {
      title: 'Kommunikation',
      text: 'Offene Kommunikation ist der Schlüssel. Ich verstehe deine Anforderungen und entwickle Lösungen, die überzeugen.',
      svgPath: communicationSVG,
      width: 'w-5/12',
    },
    {
      title: 'Zusammenarbeit',
      text: 'Gemeinsam schaffen wir beeindruckende Ergebnisse durch enge Zusammenarbeit und kontinuierliches Feedback.',
      svgPath: ZusammenarbeitSVG,
      width: 'w-5/12',
    },
    {
      title: 'SEO',
      text: 'Mit modernem SEO optimiere ich deine Website für maximale Sichtbarkeit und nachhaltigen Erfolg.',
      svgPath: seoSVG,
      width: 'w-4/12',
    },
    {
      title: 'Up To Date',
      text: 'Ich halte deine Website immer auf dem neuesten Stand, damit sie mit aktuellen Trends Schritt hält.',
      svgPath: upToDateSVG,
      width: 'w-3/12',
    },
    {
      title: 'Support',
      text: 'Ich unterstütze dich auch nach dem Launch mit Wartung, Updates und technischer Hilfe.',
      svgPath: supportSVG,
      width: 'w-4/12',
    },
    {
      title: 'Expertise',
      text: 'Mit jahrelanger Erfahrung setze ich auch komplexe Projekte erfolgreich um.',
      svgPath: expertSVG,
      width: 'w-3/12',
    },
  ]

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
  data = shuffleArray(data)

  onMount(() => {
    inView('.HDISHeading', (info) => {
      animate(
        info.target,
        {
          opacity: [0, 1],
          transform: ['translateX(-100px)', 'translateX(0)'],
        },
        { delay: 0.3, duration: 0.5 },
      )
    })
  })
</script>

<div class="flex justify-center flex-col items-center">
  <h3 class="text-center text-xl lg:text-3xl font-black pb-10 HDISHeading">
    Mein Erfolgsrezept
  </h3>
  <div class="flex justify-center flex-wrap gap-8 w-11/12">
    {#each data as element}
      <HowIdDoItContainer
        title={element.title}
        svg={element.svgPath}
        text={element.text}
        width={element.width}
      ></HowIdDoItContainer>
    {/each}
  </div>
</div>
