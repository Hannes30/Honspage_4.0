<script>
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
  
    let isVisible = false;
  
    onMount(() => {
      // Set isVisible to true after a delay to trigger the fly-in animation
      setTimeout(() => {
        isVisible = true;
      }, 100);
    });
  </script>
  
  <div transition:fly="{{ y: 50 }}" class:rotate="{isVisible}" class="p-5 bg-primary-200 shadow-lg w-min m-10">
    ich bin ein div
  </div>
  