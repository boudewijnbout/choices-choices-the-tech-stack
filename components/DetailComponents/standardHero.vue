<script setup>
const { client } = usePrismic();
const { data: document } = await useAsyncData("document", () =>
	client.getByUID("standard", uid)
);
</script>

<template>
	<section>
		<h2>1.0 Beoogde leerresultaten</h2>
		<p>
			De beoogde leerresultaten passen bij het niveau en de oriëntatie van de
			opleiding en zijn afgestemd op de verwachtingen van het beroepenveld en
			het vakgebied en op internationale eisen.
		</p>
	</section>
</template>

<style scoped>
section {
	background-color: var(--color-cmd-yellow);
	padding: 6rem 5rem;
	border-left: 3px solid var(--color-black);
	border-right: 3px solid var(--color-black);
	border-bottom: 3px solid var(--color-black);
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 5rem;
}

h2 {
	font-size: 3rem;
}
</style>
