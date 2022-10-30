<template>
	<section>
		<h2>{{ heroTitle }}</h2>
		<IndexComponentsIntroduction />
	</section>
</template>

<style scoped>
section {
	background-color: var(--color-cmd-yellow);
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 2rem;
	border-left: 3px solid var(--color-black);
	border-right: 3px solid var(--color-black);
	border-bottom: 3px solid var(--color-black);
	padding: 1rem;
}

h2 {
	font-size: 2rem;
}

p {
	font-size: 0.85rem;
}

@media (min-width: 50rem) {
	h2 {
		width: 80%;
	}
}

@media (min-width: 60rem) {
	section {
		grid-template-columns: 1fr;
		padding: 3rem 2rem;
	}

	h2 {
		font-size: 3rem;
	}
}

@media (min-width: 81.25rem) {
	section {
		grid-template-columns: 1fr 1fr;
		grid-gap: 5rem;
		padding: 6rem 5rem;
	}

	h2 {
		font-size: 3.5rem;
		width: auto;
	}
}
</style>

<script>
export default {
	props: {
		heroTitle: String,
	},
};
</script>
