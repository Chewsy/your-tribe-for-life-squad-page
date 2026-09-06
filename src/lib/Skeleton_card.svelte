<article class="skeleton">
	<div class="skeleton-img"></div>
	<div class="skeleton-info">
		<div class="skeleton-text"></div>
		<div class="skeleton-icon"></div>
	</div>
</article>

<style>
	.skeleton {
		display: flex;
		flex-direction: column;
		border: 0.094rem solid hsl(0, 0%, 77%);
		border-radius: var(--radius);
		overflow: hidden;
	}

	.skeleton-img {
		height: 9.375rem;
		background: hsl(0, 0%, 93%);
	}

	.skeleton-info {
		display: flex;
		flex-direction: row;
		gap: var(--gap);
		padding: var(--space-sm);
	}

	.skeleton-text {
		height: var(--space-md);
		width: 100%;
		max-width: 12.5rem;
		border-radius: var(--radius);
		background: hsl(0, 0%, 93%);
	}

	.skeleton-icon {
		height: var(--space-md);
		width: var(--space-md);
		border-radius: 50%;
		background: hsl(0, 0%, 93%);
	}
</style>
