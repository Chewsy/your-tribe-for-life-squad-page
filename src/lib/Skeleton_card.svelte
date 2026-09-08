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
		border-radius: var(--radius-card);
		overflow: hidden;
	}

	.skeleton-img {
		height: 9.375rem;
		background: hsl(0, 0%, 93%);
		border-top-left-radius: var(--radius-card);
		border-top-right-radius: var(--radius-card);
	}

	.skeleton-info {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		background: transparent;
		gap: var(--gap);
		padding: var(--space-sm);
		border-radius: var(--radius-card);
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	.skeleton-text {
		height: var(--space-md);
		width: 80%;
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
