<article class="skeleton">
	<div class="skeleton-img"></div>
	<div class="skeleton-info">
		<div class="skeleton-text"></div>
		<div class="skeleton-icon"></div>
	</div>
</article>

<style>
	.skeleton {
		position: relative;
		display: flex;
		flex-direction: column;
		border: 0.094rem solid hsl(0, 0%, 77%);
		border-radius: var(--radius-card);
		overflow: hidden;
	}

	.skeleton-img,
	.skeleton-text,
	.skeleton-icon {
		background: hsl(0, 0%, 93%);
	}

	.skeleton-img {
		height: 9.375rem;
		border-top-left-radius: var(--radius-card);
		border-top-right-radius: var(--radius-card);
	}

	.skeleton-info {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
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
	}

	.skeleton-icon {
		height: var(--space-md);
		width: var(--space-md);
		border-radius: 50%;
	}

	/* Animatie bovenop skeleton card */
	
	.skeleton::after {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(
			110deg,
			transparent 40%,
			hsl(0, 0%, 100%, 0.35) 50%,
			transparent 60%
		);
		transform: translateX(-100%);
		animation: shiny 1.6s ease-in-out infinite;
	}

	@keyframes shiny {
		to {
			transform: translateX(100%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.skeleton::after {
			display: none;
		}
	}
</style>
