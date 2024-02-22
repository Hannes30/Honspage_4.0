<script>
    export let headingText;
    export let headingTextHighlighted;
</script>
<div class="waves text-secondary -top-44 relative lg:-top-36">
    <article class="p-28 pl-16 pb-40">
        <h2 class="text-3xl lg:text-5xl mt-8 lg:mt-0">
            {headingText} <span class=" font-bold text-3xl lg:text-5xl text-secondary">  {headingTextHighlighted}  </span>
        </h2>
        <div class=" lg:text-2xl text-l lg:mt-16 mt-4">
            <slot />
        </div>
    </article>
</div>


<style>
.waves{
    background-image: url("../src/lib/img/waves.png");
    background-size: 200% 100%;
    background-position: 70%;
}
</style>