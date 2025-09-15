<script>
  export let name
  export let image
  export let index
  export let text
  import { onMount } from 'svelte'
  import { animate, inView } from 'motion'
  export let route

  onMount(() => {
    inView('.bannerWrapper' + index, (info) => {
      if (index % 2 === 0) {
        animate(
          info.target,
          {
            opacity: [0, 1],
            transform: ['translateX(-100px)', 'translateX(0)'],
          },
          { delay: 0.3, duration: 0.5 },
        )
        return
      } else {
        animate(
          info.target,
          {
            opacity: [0, 1],
            transform: ['translateX(100px)', 'translateX(0)'],
          },
          { delay: 0.3, duration: 0.5 },
        )
      }
    })
  })
</script>

<div class={'justify-center flex w-full bannerWrapper' + index}>
  <a class=" wrapper flex justify-center" href={route}>
    <div class="relative group overflow-hidden object-cover">
      <img
        loading="lazy"
        src={image}
        alt={'Banner Image of ' + name}
        class="rounded-md object-cover"
      />
      <!-- Black overlay with 10% opacity -->
      <div
        class="absolute inset-0 bg-secondary-700/20 pointer-events-none rounded-md"
      ></div>

      <div
        class="absolute bottom-2 lg:-bottom-28 rounded-md bg-gradient-to-tr from-secondary-700/70 to-secondary-700/30 bg-opacity-70 p-2 left-2 group-hover:transform lg:group-hover:-translate-y-32 transition duration-500 max-w-60 sm:max-w-full lg:p-4"
      >
        <span class="lg:text-3xl sm:text-2xl text-lg text-primary-100"
          >{name}</span
        >
        <p
          class="text-primary-100/70 font-light text-sm sm:text-lg lg:text-xl text-ellipsis line-clamp-1"
        >
          {text}
        </p>
      </div>
    </div>
  </a>
</div>
