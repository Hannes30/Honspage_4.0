<script>
    export let headingText;
    export let headingTextHighlighted;
</script>
<div class={"waves text-secondary"}>
    <article class="lg:p-28 lg:pl-16 lg:pb-40 pb-40 pl-1 p-10">
        <h2 class="mt-12 lg:mt-0">
            {headingText} <span class=" font-bold lg:text-5xl text-secondary">  {headingTextHighlighted}  </span>
        </h2>
        <div class="lg:text-2xl text-lg lg:mt-8 mt-4">
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