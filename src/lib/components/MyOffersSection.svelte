<div class="w-full flex flex-col justify-center mt-8 items-center">
    <h3 class="text-center text-3xl font-bold">ich mache ... </h3>
    <h2 class="text-center text-8xl font-light mt-4 text-primary-200">
        textus
    </h2>
    <div class="md:w-3/4 w-5/6 text-center text-2xl font-semibold text-gray-300 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus architecto minus consequuntur voluptatum suscipit nulla? Sed quod, quos optio aspernatur iure, accusamus impedit vel porro perferendis illo eius? Eius?
    </div>
    <div class="flex flex-wrap">
        {#each offers as {title}}

{title}
        {/each}
    </div>
</div>


<script>
    let activeOffer = 0;
    let offers = [
        {
            title: "Websites",
            text: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus architecto minus consequuntur voluptatum suscipit nulla? Sed quod, quos optio aspernatur iure, accusamus impedit vel porro perferendis illo eius? Eius?"
        },
        {
            title: "Seo",
            text: "Ahhhhh Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus architecto minus consequuntur voluptatum suscipit nulla? Sed quod, quos optio aspernatur iure, accusamus impedit vel porro perferendis illo eius? Eius?"
        },
    ]

</script>