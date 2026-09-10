<footer class="site-footer">
	<div class="footer-content">
		<h2>FDND microsites</h2>
		<p>Bekijk hier alle studenten van de FDND squad en ontdek hun profielen.</p>
		<nav aria-label="FDND microsites">
			<ul class="footer-links">
				<li><a href="https://fdnd.nl/">FDND.nl</a></li>
				<li><a href="https://contact.fdnd.nl/">Contact</a></li>
				<li><a href="https://programma.fdnd.nl/">Programma</a></li>
				<li><a href="https://partners.fdnd.nl/">Partners</a></li>
				<li><a href="https://niveaumatrix.fdnd.nl/">Niveaumatrix</a></li>
				<li><a href="https://docs.fdnd.nl/">Documenten</a></li>
			</ul>
		</nav>
	</div>
</footer>

<style>
	.site-footer {
		display: none;
		background: var(--dark-purple);
		color: var(--white);
	}

	.footer-content {
		max-width: 1280px;
		margin: 0 auto;
		padding: 3rem 2.5rem;
	}

	.footer-content h2 {
		font-size: 2.5rem;
		font-weight: 700;
	}

	.footer-content > p {
		max-width: 42rem;
		margin: 0.75rem 0 1.5rem;
	}

	.footer-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		list-style: none;
	}

	.footer-links a {
		display: block;
		padding: 0.85rem 1.1rem;
		border: 1px solid var(--dark-purple);
		border-radius: var(--radius);
		background: var(--light-purple);
		color: var(--dark-purple);
		font-weight: 700;
		transition: background 200ms ease;
	}

	.footer-links a:hover {
		background: var(--white);
		color: var(--dark-purple);
	}

	.footer-links a:focus-visible {
		outline: 3px solid var(--white);
		outline-offset: 3px;
	}

	@media (width >= 900px) {
		.site-footer {
			display: block;
		}
	}
</style>