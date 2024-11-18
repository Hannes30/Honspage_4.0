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
    Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem "
    Title="IT-HTL Ybbs"
  />
  <EmptyFlyIn />
  <EmptyFlyIn />
  <CareerFlyIn
    Date="Oktober 2022"
    Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem "
    Title="Erstes Kundenprojekt"
  />
  <CareerFlyIn
    Date="November 2023"
    Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem "
    Title="Skills Austria"
  />
  <EmptyFlyIn />
  <EmptyFlyIn />
  <CareerFlyIn
    Date="Jänner 2024"
    Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem "
    Title="Eröffnung  Firma"
  />
  <CareerFlyIn
    Date="Juni 2024"
    Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem "
    Title="Full Stack Dev"
  />
  <EmptyFlyIn />
</div>
