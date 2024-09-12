<script>
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';

	export let providers;

	async function deleteProvider(id) {
		const response = await fetch(`api/providers/${id}`, {
			method: 'DELETE'
		});

		if (response.ok) {
			providers = providers.filter((provider) => provider.id !== id);
		} else {
			error = 'Failed to delete provider';
		}
	}
</script>

<article class="space-y-4">
	{#each providers as provider (provider.id)}
		<div
			transition:fly={{ y: -50, duration: 150 }}
			animate:flip={{ duration: 200 }}
			class="flex items-center gap-2"
		>
			<h2
				class="w-full p-2 text-lg bg-purple-100 border border-purple-300 text-purple-900 rounded-md"
			>
				{provider.name}
			</h2>
			<button
				on:click={async () => await deleteProvider(provider.id)}
				class="p-2 w-12 aspect-square text-lg bg-purple-50 border border-purple-300 text-purple-900 rounded-md"
				>x</button
			>
		</div>
	{/each}
</article>
