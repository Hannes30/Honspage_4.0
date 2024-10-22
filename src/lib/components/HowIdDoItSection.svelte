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
      text: 'Eine offene und klare Kommunikation ist der Schlüssel zu einer erfolgreichen Zusammenarbeit. Ich lege großen Wert darauf, alle Anforderungen und Wünsche meiner Kunden zu verstehen, um maßgeschneiderte Lösungen zu entwickeln. Gemeinsam schaffen wir eine Plattform, die alle Erwartungen übertrifft. Diese Kommunikation ermöglicht es uns, den Prozess transparent zu gestalten und Vertrauen aufzubauen.',
      svgPath: communicationSVG,
      width: 'w-5/12',
    },
    {
      title: 'Zusammenarbeit',
      text: 'Der Erfolg einer Website basiert auf einem starken Teamgeist. Durch enge Zusammenarbeit mit meinen Kunden und regelmäßige Feedbackschleifen stelle ich sicher, dass jeder Schritt in die richtige Richtung geht. Gemeinsam verwandeln wir Ideen in beeindruckende digitale Erlebnisse. Die Koordination und das Engagement aller Beteiligten sind entscheidend, um optimale Ergebnisse zu erzielen.',
      svgPath: ZusammenarbeitSVG,
      width: 'w-5/12',
    },
    {
      title: 'SEO',
      text: 'Sichtbarkeit ist entscheidend. Mit modernsten SEO-Strategien optimiere ich deine Website, damit sie nicht nur gefunden wird, sondern auch in den Suchergebnissen an erster Stelle steht. Mein Ziel ist es, dir zu helfen, die richtigen Kunden zu erreichen und dein Geschäft nachhaltig zu fördern. Dies umfasst sowohl On-Page- als auch Off-Page-Optimierung, um sicherzustellen, dass deine Website relevant bleibt.',
      svgPath: seoSVG,
      width: 'w-4/12',
    },
    {
      title: 'Up To Date',
      text: 'Die digitale Welt entwickelt sich ständig weiter. Deshalb halte ich meine Kenntnisse immer auf dem neuesten Stand, um sicherzustellen, dass deine Website mit den neuesten Trends und Technologien kompatibel ist. So bleibt dein Online-Auftritt frisch und ansprechend.',
      svgPath: upToDateSVG,
      width: 'w-3/12',
    },
    {
      title: 'Support',
      text: 'Auch nach der Fertigstellung deiner Website stehe ich dir mit Rat und Tat zur Seite. Regelmäßige Wartung und Updates sind wichtig, um die Sicherheit und Funktionalität deiner Website zu gewährleisten. Dein Erfolg ist mein Ziel, und ich bin da, um dich auf diesem Weg zu begleiten. Ob technische Unterstützung oder Inhaltspflege, ich bin für dich da, um langfristige Lösungen zu schaffen.',
      svgPath: supportSVG,
      width: 'w-4/12',
    },
    {
      title: 'Expertise',
      text: 'Mit jahrelanger Erfahrung in der Webentwicklung bringe ich das notwendige Fachwissen mit, um auch komplexe Anforderungen erfolgreich umzusetzen. ',
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
