<script>
  import { onMount } from "svelte";


    onMount(()=>{
        
  
  window._mfq = window._mfq || [];
  (function() {
    var mf = document.createElement("script");
    mf.type = "text/javascript"; mf.defer = true;
    mf.src = "//cdn.mouseflow.com/projects/776c0027-44a5-48e7-8b19-a86e2b9fb735.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
  })();
    })
</script>



<footer class="mt-20 bg-primary-400 text-secondary p-5">
    <div class="text-2xl font-medium text-center sm:text-3xl">© Hannes Scheibelauer</div>
    <div class="flex justify-around">
        <div class="text-l sm:leading-loose sm:text-xl leading-7"> <div class="text-3xl font-medium leading-tight"> Contact </div><p class="py-2">Hannes Scheibelauer</p> <p class="py-2">kontakt@hannes-scheibelauer.at
            </p> <p class="py-2">0670 2018717</p>
        </div>
        <div class="text-l sm:leading-loose sm:text-xl leading-7"> <div class="text-3xl font-medium leading-tight p-1"> Pages </div>
            <p class="text-2xl opacity-80 py-2"><a href="/">Home</a></p>
            <p class="text-2xl opacity-80 py-2"><a href="/projects">Projekte</a></p>
            <p class="text-2xl opacity-80 py-2"><a href="/services">Leistungen</a></p>
            <p class="text-2xl opacity-80 py-2"><a href="/impressum">Impressum</a></p>
        </div>
    </div>
</footer>
<style>
    a:hover {
  background-color: #c2ffea;
}
a {
  padding: 5px;
  border-radius: 6px;
  transition: background-color 0.2s;
}
</style>
