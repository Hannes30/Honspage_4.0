<script>
  import { animate, inView } from 'motion'
  import { onMount } from 'svelte'
  export let QuestionText
  let AnswerToggler = false

  onMount(() => {
    inView('.question', (info) => {
      animate(
        info.target,
        {
          opacity: [0, 1],
          transform: ['translateX(100px)', 'translateX(0)'],
        },
        { delay: 0.2, duration: 0.5 },
      )
    })
  })
</script>

<div class="w-full flex justify-center flex-nowrap mx-4 question">
  <div class="lg:w-1/2 pb-5">
    <button
      class="border-t pt-7 text-4xl font-thin text-gray-200 border-primary-300 flex items-center w-full hover:animate-pulse"
      on:click={() => (AnswerToggler = !AnswerToggler)}
    >
      <div class=" text-start w-5/6">
        {QuestionText}
      </div>
      <div class="w-5 ml-auto mr-2">
        <svg
          id="Ebene_2"
          data-name="Ebene 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 185.6 197.18"
          class={'w-full transition ' +
            (AnswerToggler ? 'rotate-90' : '-rotate-90')}
        >
          <g id="Ebene_1-2" data-name="Ebene 1">
            <path
              fill="#99FFDB"
              d="M6.63,84.38L167.77,1.37c8.14-4.19,17.83,1.72,17.83,10.87h0c0,4.63-2.61,8.86-6.75,10.93L29.2,98.19v.8l149.65,75.02c4.14,2.07,6.75,6.3,6.75,10.93h0c0,9.15-9.69,15.06-17.83,10.87L6.63,112.8c-4.07-2.1-6.63-6.29-6.63-10.87v-6.69c0-4.58,2.56-8.77,6.63-10.87Z"
            />
          </g>
        </svg>
      </div>
    </button>
    <div
      class={'text-2xl font-light text-gray-300 max-h-0 overflow-hidden transition dropwdown ' +
        (AnswerToggler ? 'max-h-full mt-5' : '')}
    >
      <slot />
    </div>
  </div>
</div>

<style>
</style>
