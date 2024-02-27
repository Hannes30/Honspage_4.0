<script>
  import { onMount } from "svelte";

  export let path1;
  export let path2;
  export let duration;
  export let delay;
  export let id1;
  export let id2;
  export let number;
  export let description;

  onMount(() => {
    import("kute.js").then((module) => {
      const KUTE = module.default;
      const tween = KUTE.fromTo(
        "#" + id1,
        { path: "#" + id1 },
        { path: "#" + id2 },
        { repeat: 999, duration: duration, yoyo: true, delay: delay }
      );

      const tween2 = KUTE.fromTo(
        "#" + id1 + "-bg",
        { path: "#" + id1 + "-bg" },
        { path: "#" + id2 + "-bg" },
        { repeat: 999, duration: duration, yoyo: true, delay: delay, easing: "easingSinusoidalIn" }
      );
      tween.start();
      tween2.start();
    });
  });
</script>

<div class="relative w-1/3 min-w-80 max-w-96">
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full absolute z-10 " >

    <g>
      <path id={id1} fill="#47ffbf" d={path1} transform="translate(100 100)"  class=" "/>
    </g>
    <g>
      <path id={id2} fill="#47ffbf" d={path2} transform="translate(100 100)" class=" hidden " />
    </g>

  </svg>
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full relative top-3 left-2 z-0">
    <g>
      <path id={id1 + "-bg"} fill="#99ffdb" d={path1} transform="translate(100 100)" />
    </g>
    <g>
      <path id={id2 + "-bg"} fill="#99ffdb" d={path2} transform="translate(100 100)" class=" hidden" />
    </g>
  </svg>

  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-secondary">
    <div class="lg:text-5xl  xl:text-6xl   text-5xl">{number}</div>
    <div class="lg:text-3xl  xl:text-4xl   text-2xl font-medium"> {description}</div>
  </div>

</div>
<style>

</style>