<script>
  import Banner from '$lib/components/Banner.svelte'
  import projects from '$lib/projects.json'
  import { onMount } from 'svelte'
  import { inView, animate } from 'motion'

  function chunk(array, size) {
    const result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size))
    }
    return result
  }

  onMount(() => {
    inView('.projectHeading', (info) => {
      animate(
        info.target,
        {
          opacity: [0, 1],
          transform: ['translateY(-50px)', 'translateY(0)'],
        },
        { delay: 0.3, duration: 0.5 },
      )
    })
  })

  $: rows = chunk(projects, 2)
</script>

<div
  class="w-full flex justify-center items-center flex-wrap gap-2 mb-14 lg:mb-20 lg:py-10"
  id="projects"
>
  <h3
    class="text-center text-3xl lg:text-5xl font-bold pb-10 projectHeading w-full"
  >
    Ein kurzer Einblick in meine Arbeit
  </h3>

  <div class="justify-center flex flex-wrap w-4/5 gap-10">
    {#each rows as row}
      <div class="flex gap-10 lg:flex-row flex-col">
        {#each row as project, index}
          <Banner
            name={project.title}
            {index}
            image={project.cover}
            text={project.description}
            route={project.url}
          />
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .wrapper {
    max-height: 80vh;
  }
</style>
