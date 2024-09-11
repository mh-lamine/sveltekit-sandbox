<script>
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	export let data;
	let { providers, error } = data;

	async function addProvider(name) {
		const response = await fetch('api/providers', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name })
		});

		if (response.ok) {
			const newProvider = await response.json();
			providers = [newProvider, ...providers];
		} else {
			error = 'Failed to add provider';
		}
	}

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

	async function handleKeyPress(e) {
		if (e.key !== 'Enter') return;
		const name = e.target.value.trim();

		if (!name) return;
		await addProvider(name);
		e.target.value = '';
	}
</script>

<main class="flex flex-col mx-auto gap-8 mt-20">
	<input
		type="text"
		on:keydown={handleKeyPress}
		placeholder="Add a provider"
		class="text-lg p-2 rounded-md border border-purple-300"
	/>
	{#if providers?.length}
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
	{:else}
		<p>No providers found</p>
	{/if}

	{#if error}
		<p>{error}</p>
	{/if}
</main>
