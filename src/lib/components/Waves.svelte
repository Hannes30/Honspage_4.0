<script>
    import waves from "../../lib/img/waves.png"
    export let headingText;
    export let headingTextHighlighted;
</script>
<div class={"waves text-secondary-700"} style="background-image: url('{waves}');">
    <article class="lg:p-28 lg:pl-16 lg:pb-40 pb-40 p-10">
        <h2 class="mt-44 lg:mt-0">
            {headingText} <span class=" font-bold lg:text-5xl text-secondary-700">  {headingTextHighlighted}  </span>
        </h2>
        <div class="lg:text-2xl text-lg lg:mt-8 mt-4">
            <slot />
        </div>
    </article>
</div>  


<style>
.waves{
    
    background-size: 100% 100%;
    background-position: 70%;
}
@media only screen and (min-width: 1024px) {
.waves{
    background-size: 100% 100%;
}
}


</style>