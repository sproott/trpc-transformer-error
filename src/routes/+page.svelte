<script lang="ts">
  import trpc from "$lib/trpc";
  import { page } from "$app/stores";

  const response = trpc($page).greeting.query();
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

{#await response then greeting}
  {greeting}
{/await}
