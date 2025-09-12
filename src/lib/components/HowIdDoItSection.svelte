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
      title: 'SEO',
      text: 'Mit moderner Suchmaschinenoptimierung (SEO) optimiere ich deine Website für maximale Sichtbarkeit bei Google & Co.',
      svgPath: seoSVG,
      width: 'w-5/12',
    },

    {
      title: 'Aktuallität',
      text: 'Ich beschäftige mich laufend mit aktuellen Webstandards und Designtrends – dieses Wissen fließt direkt in deine Website ein. So ist sie nicht nur modern, sondern auch zukunftssicher.',
      svgPath: upToDateSVG,
      width: 'w-6/12',
    },
    {
      title: 'Zusammenarbeit',
      text: 'Gemeinsam schaffen wir beeindruckende Ergebnisse durch enge Zusammenarbeit und kontinuierliches Feedback. Damit deine Website genauso wird, wie du sie dir vorstellst.',
      svgPath: ZusammenarbeitSVG,
      width: 'w-7/12',
    },

    {
      title: 'Support',
      text: 'Ich unterstütze dich auch nach dem Launch mit Wartung, Updates und technischer Hilfe.',
      svgPath: supportSVG,
      width: 'w-4/12',
    },
  ]

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
  <h3 class="text-center text-2xl lg:text-3xl font-black pb-10 HDISHeading">
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
