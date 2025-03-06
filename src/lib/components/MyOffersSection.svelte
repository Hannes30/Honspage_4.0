<script>
  import OfferingsButton from './OfferingsButton.svelte'
  import { onMount } from 'svelte'
  import { animate, inView } from 'motion'
  let activeOffer = 0
  let offers = [
    {
      title: 'Websites',
      text: 'Ich erstelle Websites mit einem frischen, modernen Ansatz, der stets aktuelle Trends und innovative Konzepte berücksichtigt. Durch kreative Designs, responsives Layout und neueste Technologie stelle ich sicher, dass deine Website nicht nur visuell beeindruckend, sondern auch technisch auf dem neuesten Stand ist. Mein Ziel ist es, nicht nur deine Marke optimal zu präsentieren, sondern auch potenzielle Kunden zu begeistern und sie zur Interaktion oder zum Kauf anzuregen. Lass uns gemeinsam eine Website entwickeln, die sowohl deine Vision widerspiegelt als auch deinen Geschäftserfolg steigert!',
    },
    {
      title: 'Seo',
      text: 'Ich optimiere deine Website mit fortschrittlichen SEO-Strategien, die sicherstellen, dass du bei Google und anderen Suchmaschinen sichtbar wirst. Durch gezielte Keyword-Recherche, technisch einwandfreies Design und hochwertigen Content helfe ich dir, die Reichweite deiner Website zu erhöhen und mehr qualifizierte Besucher anzuziehen. Mein Ziel ist es, deine Website nicht nur gefunden zu machen, sondern auch dein Geschäftswachstum zu fördern.',
    },
    {
      title: 'Logos',
      text: 'Ein Logo ist mehr als nur ein Symbol – es ist das Herzstück deiner Markenidentität. Ich entwickle Logos, die einzigartig und einprägsam sind, und die deine Marke klar und professionell repräsentieren. Mit einem Fokus auf kreative Gestaltung und strategisches Design stelle ich sicher, dass dein Logo auffällt, im Gedächtnis bleibt und einen starken Eindruck hinterlässt. Lass uns gemeinsam ein Logo kreieren, das deine Marke perfekt verkörpert und dich von der Konkurrenz abhebt.',
    },
    {
      title: 'Flyer',
      text: 'Mit ansprechenden Flyern und Plakaten unterstütze ich dich dabei, deine Botschaft effektiv zu kommunizieren und Aufmerksamkeit zu erregen. Egal, ob für Partys, Events oder besondere Anlässe. ich gestalte Materialien, die ins Auge fallen und zur Teilnahme oder zum Kauf anregen. Durch gezielte Gestaltung und durchdachte Inhalte sorge ich dafür, dass deine Druckmaterialien sowohl visuell überzeugend als auch wirkungsvoll sind. Lass uns gemeinsam kreative und einprägsame Designs entwickeln, die deine Zielgruppe begeistern und deine Veranstaltung oder dein Angebot erfolgreich präsentieren.',
    },
  ]

  let textContainer
  let fixedHeight = null

  function setFixedHeight() {
    if (textContainer && !fixedHeight) {
      fixedHeight = textContainer.offsetHeight + 'px'
    }
  }

  function changeActiveOffer(newOfferPosition) {
    activeOffer = newOfferPosition
  }

  onMount(() => {
    setFixedHeight()
    inView('.ido', (info) => {
      animate(
        info.target,
        {
          opacity: [0, 1],
          transform: ['translateX(-100px)', 'translateX(0)'],
        },
        { delay: 0.3, duration: 0.5 },
      )
      animate(
        '.idoTitle',
        {
          opacity: [0, 1],
          transform: ['translateY(100px)', 'translateY(0)'],
        },
        { delay: 0.4, duration: 0.5 },
      )
      animate(
        '.idoText',
        {
          opacity: [0, 1],
          transform: ['translateY(100px)', 'translateY(0)'],
        },
        { delay: 0.5, duration: 0.5 },
      )
      animate(
        '.buttons',
        {
          opacity: [0, 1],
          transform: ['translateY(100px)', 'translateY(0)'],
        },
        { delay: 0.8, duration: 0.5 },
      )
    })
  })
</script>

<div class="w-full flex flex-col justify-center mt-8 items-center pb-20">
  <div class="md:w-2/3 w-5/6">
    <h3 class="text-center text-xl lg:text-3xl font-black pb-6 ido">
      ich mache ...
    </h3>
    <h2
      class="text-center text-5xl lg:text-8xl font-medium mt-4 text-primary-200 idoTitle"
    >
      {offers[activeOffer].title}
    </h2>
    <div
      bind:this={textContainer}
      class="text-center md:text-2xl text-xl font-semibold text-gray-300 mt-3 idoText"
      style="height: {fixedHeight}; overflow: hidden;"
    >
      {offers[activeOffer].text}
    </div>
    <div class="flex flex-wrap justify-center mt-12 gap-4 buttons">
      {#each offers as { title }, index}
        <OfferingsButton {index} {title} {changeActiveOffer} {activeOffer} />
      {/each}
    </div>
  </div>
</div>
