<template>
	<footer>
		<span>© 2022 CMD AMSTERDAM</span>
	</footer>
</template>

<style>
footer {
	border-left: 3px solid var(--color-black);
	border-right: 3px solid var(--color-black);
	border-bottom: 3px solid var(--color-black);
	text-align: right;
	padding: 1rem;
}

span {
	font-weight: 600;
}

@media (min-width: 60rem) {
	footer {
		padding: 1rem 2rem;
	}
}

@media (min-width: 81.25rem) {
	footer {
		padding: 1rem 5rem;
	}
}
</style>
