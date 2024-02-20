<script>
    import KUTE from "kute.js";
    import { onMount } from "svelte";
    export let path1;
    export let path2;
    export let duration;
    export let delay;
    export let id1;
    export let id2;
    onMount(() => {
    import("kute.js").then((module) => {
      const KUTE = module.default;
      const tween = KUTE.fromTo(
        "#"+id1,
        { path: "#"+id1 },
        { path: "#"+id2 },
        { repeat: 999, duration: duration, yoyo: true,delay: delay }
      );
      
      const tween2 = KUTE.fromTo(
        "#"+id1+"-bg",
        { path: "#"+id1+"-bg" },
        { path: "#"+id2+"-bg" },
        { repeat: 999, duration: duration, yoyo: true,delay: delay,easing:"easingSinusoidalIn" }
      );
      tween.start();
      tween2.start();
    });
  });</script>
<div class="relative w-1/3">
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full absolute z-10">
    <g> <path id={id1} fill="#47ffbf" d={path1} transform="translate(100 100)" /></g>
      <g><path id={id2} fill="#47ffbf" d={path2} transform="translate(100 100)" class=" hidden"/></g>
    </svg>
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full relative top-3 left-2 z-0">
        <g> <path id={id1 +"-bg"} fill="#99ffdb" d={path1} transform="translate(100 100)" /></g>
          <g><path id={id2+"-bg"} fill="#99ffdb" d={path2} transform="translate(100 100)" class=" hidden"/></g>
        </svg>
</div>