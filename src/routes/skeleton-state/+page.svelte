<script>
	import SkeletonCard from "$lib/Skeleton_card.svelte";
</script>

<main>
	/* Hardcoded 12 cards voor demo */
	<ul class="grid">
		<li>
			<SkeletonCard />
		</li>
		<li>
			<SkeletonCard />
		</li>
		<li>
			<SkeletonCard />
		</li>
		<li>
			<SkeletonCard />
		</li>
		<li>
			<SkeletonCard />
		</li>
		<li>
			<SkeletonCard />
		</li>
		<li>
			<SkeletonCard />
		</li>
		<li>
			<SkeletonCard />
		</li>
		<li>
			<SkeletonCard />
		</li>
		<li>
			<SkeletonCard />
		</li>
		<li>
			<SkeletonCard />
		</li>
		<li>
			<SkeletonCard />
		</li>
	</ul>
</main>

<style>
	/* Grid styling het zelfde als de overzichtspagina, skeleton wordt ingeladen i.p.v. Card.svelte */
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 0.75rem;
		list-style: none;
		margin: 0;
		padding: 1rem;
	}
</style>
