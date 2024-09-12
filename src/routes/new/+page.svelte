<script>
	$: serverResponse = '';
	async function addProvider(name) {
		const response = await fetch('api/providers', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name })
		});
		serverResponse = response.ok ? 'Provider added' : 'Failed to add provider';
	}

	async function handleKeyPress(e) {
		if (e.key !== 'Enter') return;
		const name = e.target.value.trim();

		if (!name) return;
		await addProvider(name);
		e.target.value = '';
	}
</script>

<main class="flex flex-col gap-4 m-20">
	<h2 class="text-xl font-medium">Devenir prestataire</h2>
	<form method="POST" action="?/new" class="flex flex-col gap-2">
		<input
			type="text"
			placeholder="Nom du salon"
			class="text-lg p-2 rounded-md border border-purple-300"
		/>
		<input
			type="text"
			placeholder="Numéro de téléphone"
			class="text-lg p-2 rounded-md border border-purple-300"
		/>
		<input
			type="text"
			placeholder="Adresse"
			class="text-lg p-2 rounded-md border border-purple-300"
		/>
		<button type="submit" class="w-min px-4 py-2 text-white bg-purple-600 rounded-md"
			>S'inscrire</button
		>
	</form>

	{#if serverResponse}
		{#await new Promise((resolve) => setTimeout(resolve, 2000))}
			<p>{serverResponse}</p>
		{/await}
	{/if}
</main>
