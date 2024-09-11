<script>
	import '../app.css';
</script>

<div class="grid grid-cols-[1fr_3fr] min-h-screen">
	<header class="p-4 space-y-4 border-r border-purple-400">
		<div>
			<h1 class="font-semibold text-2xl text-purple-800">WeCollect</h1>
			<p class="text-purple-800/70">Ain't no charity around here</p>
		</div>
		<nav>
			<ul class="space-y-2">
				<li><a href="/" class="hover:text-purple-800 hover:underline">Prestataires</a></li>
				<li><a href="/add" class="hover:text-purple-800 hover:underline">Nouveau</a></li>
			</ul>
		</nav>
	</header>
	<slot />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
