<script>
	import Chit from "./Chit.svelte";
	import { ChitStore } from "../stores/ChitStore";
	import { onMount, onDestroy } from "svelte";

	let allChits;
	let loading = true;

	let chitStoreUnsub = ChitStore.subscribe((data) => (allChits = data));

	onMount(async () => {
		console.log("Component Mounted");
		await ChitStore.loadChits();
		loading = false;
	});

	onDestroy(() => {
		chitStoreUnsub();
	});
</script>

<div class="all-chits">
	{#if loading}
		<div class = loader>Loading...</div>
	{:else}
		{#each allChits as chit (chit.id)}
			<Chit {...chit} />
		{/each}
	{/if}
</div>

<style>
	.loader {
		font-size: x-small;
		padding-top: 20px;
		opacity: 0.6;
	}
</style>
