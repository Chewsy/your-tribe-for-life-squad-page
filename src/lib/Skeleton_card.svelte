<article class="skeleton">
	<div class="skeleton-img"></div>
	<div class="skeleton-info">
		<div class="skeleton-text-age">
			<div class="skeleton-text"></div>
			<div class="skeleton-age"></div>
		</div>
		<div class="skeleton-icon"></div>
	</div>
</article>

<style>
	.skeleton {
		position: relative;
		height: 100%;
		overflow: hidden;
		border: 1px solid var(--skeleton-gray);
		border-radius: var(--radius-card);
		background: var(--white);
		box-shadow: 0 4px 12px var(--skeleton-gray);
	}

	.skeleton-img {
		aspect-ratio: 4 / 3;
		background: var(--skeleton-gray);
	}

	.skeleton-info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
		height: 4.8rem;
		padding: var(--space-md);
	}

	.skeleton-text-age {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		flex: 1 1 auto;
	}

	.skeleton-text {
		width: 100%;
		max-width: 12.5rem;
		height: 1.05rem;
		border-radius: var(--radius);
		background: var(--skeleton-gray);
	}

	.skeleton-age {
		width: 50%;
		max-width: 12.5rem;
		height: 0.875rem;
		border-radius: var(--radius);
		background: var(--skeleton-gray);
	}

	.skeleton-icon {
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 50%;
		background: var(--skeleton-gray);
	}

	.skeleton::after {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(
			110deg,
			transparent 40%,
			hsl(0, 0%, 100%, 35%) 50%,
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
