<template>
	<section>
		<h2>{{ `${standardNumber}.0 ${standardHeroTitle} ` }}</h2>
		<prismic-rich-text :field="standardHeroIntroduction" />
	</section>
</template>

<style scoped>
section {
	background-color: var(--color-cmd-yellow);
	border-left: 3px solid var(--color-black);
	border-right: 3px solid var(--color-black);
	border-bottom: 3px solid var(--color-black);
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 2rem;
	padding: 1rem;
}

h2 {
	font-size: 2rem;
}

@media (min-width: 60rem) {
	section {
		padding: 3rem 2rem;
	}

	h2 {
		font-size: 3rem;
	}
}

@media (min-width: 68.75rem) {
	section {
		padding: 3rem 2rem;
		grid-template-columns: 1fr 1fr;
	}
}

@media (min-width: 81rem) {
	section {
		padding: 6rem 5rem;
		grid-gap: 0;
	}

	h2 {
		font-size: 3rem;
	}
}
</style>

<script>
export default {
	props: {
		standardHeroTitle: String,
		standardHeroIntroduction: Object,
		standardNumber: Number,
	},
};
</script>
