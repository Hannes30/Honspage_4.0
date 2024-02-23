<script>
    export let name;
    export let image;
    export let text;
    export let route;
</script>

<a class="m-10  wrapper flex justify-center" href={route + "/"+ name.replace(/\s/g,'')}>
    <div class=" relative group overflow-hidden">

        <img src={image} alt={"Banner Image of " + name} class="h-full rounded-md">

        <div class="absolute -bottom-30 rounded-md bg-gray-800 bg-opacity-50 p-5 left-5 group-hover:transform lg:group-hover:-translate-y-32  group-hover:-translate-y-28 transition duration-500">
            <h2 class="lg:text-3xl text-xl">{name}</h2>
            <p class="text-gray-200 font-light text-lg lg:text-xl">{text}</p>
        </div>
    </div>
</a>

<style>
.wrapper{
    max-height: 80vh;
}
</style>
