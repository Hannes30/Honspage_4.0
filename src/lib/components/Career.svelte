<script lang="ts">
  import { onMount } from 'svelte'
  import CareerFlyIn from './CareerFlyIn.svelte'
  import EmptyFlyIn from './EmptyFlyIn.svelte'

  onMount(() => {
    window.addEventListener('scroll', () => 'scrolled')
  })
</script>

<h3 class="w-full text-center lg:text-7xl font-semibold lg:pb-10 mt-10">
  Karriere
</h3>
<div
  id="Career"
  class="w-full justify-items-center flex flex-wrap justify-center gap-6 h-full relative"
>
  <div
    id="career-bg"
    class="h-full w-[5px] bg-primary-200 rounded-md absolute right-1/2 md:block hidden"
  ></div>
  <div
    id="career-fill"
    class="h-1/2 w-[5px] rounded-md bg-primary-600 absolute right-1/2 md:block hidden"
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

<style>
</style>
