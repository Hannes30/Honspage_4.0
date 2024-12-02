<script lang="ts">
  import { onMount } from 'svelte'
  import CareerFlyIn from './CareerFlyIn.svelte'
  import EmptyFlyIn from './EmptyFlyIn.svelte'

  onMount(() => {
    const careerBg = document.getElementById('career-bg')
    const careerFill = document.getElementById('career-fill')

    if (careerBg && careerFill) {
      const careerBgTop = careerBg.getBoundingClientRect().top + window.scrollY

      const adjustFillHeight = () => {
        const scrollY = window.scrollY
        const distanceScrolled = scrollY - careerBgTop

        const maxHeight = careerBg.offsetHeight
        const newHeight = Math.max(0, Math.min(distanceScrolled, maxHeight))
        careerFill.style.height = `${newHeight + window.innerHeight / 3 < maxHeight ? newHeight + window.innerHeight / 3 : maxHeight}px`
      }

      window.addEventListener('scroll', adjustFillHeight)

      return () => {
        window.removeEventListener('scroll', adjustFillHeight)
      }
    }
  })
</script>

<h3
  class="w-full text-center md:text-7xl font-bold lg:pb-10 mt-10 text-4xl mb-10"
  id="Career"
>
  Karriere
</h3>
<div
  class="w-full justify-items-center flex flex-wrap justify-center gap-6 h-full relative"
>
  <div
    id="career-bg"
    class="h-full w-[7px] bg-primary-200 rounded-md absolute right-1/2 md:block hidden"
  ></div>
  <div
    id="career-fill"
    class="w-[7px] rounded-md bg-primary-700 absolute right-1/2 md:block hidden transition-all duration-500 delay-0"
  ></div>
  <CareerFlyIn
    Date="September 2020"
    Text="Im September 2020 begann ich meine Ausbildung an der IT-HTL Ybbs. Schon seit meiner Kindheit wusste ich, dass es auf diese Schule hinauslaufen würde, und bis heute würde ich keine andere vorziehen."
    Title="IT-HTL Ybbs"
  />
  <EmptyFlyIn />
  <EmptyFlyIn />
  <CareerFlyIn
    Date="Oktober 2022"
    Text="Nach zwei intensiven Jahren an der HTL gelang es mir, mit meinen Fähigkeiten auch außerhalb der Schule Eindruck zu machen. Dieses Projekt war für mich eine prägende und lehrreiche Erfahrung."
    Title="Erstes Kundenprojekt"
  />
  <CareerFlyIn
    Date="November 2023"
    Text="Im November 2023 durfte ich mein Wissen und meine Fähigkeiten bei den Staatsmeisterschaften der Lehrberufe im Bereich 'Web Development' präsentieren. Der dreitägige Wettbewerb war eine spannende Herausforderung mit talentierten Teilnehmern."
    Title="Skills Austria"
  />
  <EmptyFlyIn />
  <EmptyFlyIn />
  <CareerFlyIn
    Date="Jänner 2024"
    Text="Ein Paar tage nach meinem 18. Geburtstag gründete ich mein Unternehmen. Nun konnte ich (so gut es nebe der Schule möglich ist) durchstarten"
    Title="Eröffnung  Firma"
  />
  <CareerFlyIn
    Date="Juni 2024"
    Text="Um meine Fähigkeiten weiter auszubauen, wollte ich mit einem Experten zusammenarbeiten. Bei Deckweiss wurde ich als Full-Stack-Developer Teil eines großartigen Teams, das mich mit Expertise und Know-how unterstützte."
    Title="Full Stack Dev"
  />
  <EmptyFlyIn />
</div>
