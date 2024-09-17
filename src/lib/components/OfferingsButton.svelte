
<script>
    export let index; 
    export let title; 
    export let changeActiveOffer;
    export let activeOffer;
</script>

<button on:click={()=>changeActiveOffer(index)} class={"px-7 py-2 text-secondary-700 rounded-md md:text-4xl text-2xl font-bold text-center transition-all border-primary-400 border border-3 offerButton" +  (activeOffer == index ? " bg-primary-400" : " bg-primary-200") }>
    {title}
</button>

<style>
.offerButton:hover{
    
    box-shadow: 0px -1px 20px #70FFCD88;
}
.offerButton{
    transition-duration: 0.5s;
    box-shadow: 0px -1px 5px #70FFCD88;

}
</style>