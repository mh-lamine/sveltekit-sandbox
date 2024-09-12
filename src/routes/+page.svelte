<script>
	import ProvidersSection from '../components/ProvidersSection.svelte';
	export let data;
	const { providers, error } = data;
</script>

<main class="flex flex-col gap-2 m-20">
	{#if providers?.length}
		<ProvidersSection {providers} />
	{:else}
		<p>No providers found</p>
	{/if}
	{#if error}
		<p>{error}</p>
	{/if}
</main>
