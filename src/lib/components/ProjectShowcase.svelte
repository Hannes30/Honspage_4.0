<script>
  import Banner from '$lib/components/Banner.svelte'
  import projects from '$lib/projects.json'

  function chunk(array, size) {
    const result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size))
    }
    return result
  }

  $: rows = chunk(projects, 2)
</script>

<div
  class="w-full flex justify-center items-center flex-wrap gap-2 mb-14 lg:mb-20 lg:py-10"
  id="projects"
>
  <h3
    class="text-center text-3xl lg:text-5xl font-bold pb-10 HDISHeading w-full"
  >
    Meine Projekte
  </h3>

  <div class="justify-center flex flex-wrap w-3/4 gap-10">
    {#each rows as row}
      <div class="flex gap-10 lg:flex-row flex-col">
        {#each row as project}
          <Banner
            name={project.title}
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
