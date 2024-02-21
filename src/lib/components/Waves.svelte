<script>
    export let headingText;
    export let headingTextHighlighted;
</script>
<div class="waves text-secondary -top-44 relative lg:-top-36">
    <article class="p-28 pl-16 pb-40">
        <h2 class="text-5xl">
            {headingText} <span class=" font-bold text-5xl text-secondary">  {headingTextHighlighted}  </span>
        </h2>
        <div class=" text-2xl mt-16">
            <slot />
        </div>
    </article>
</div>


<style>
.waves{
    background-image: url("../src/lib/img/waves.png");
    background-size: 100% 100%;
}
</style>