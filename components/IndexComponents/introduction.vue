<script setup>
const { client } = usePrismic();
const { data: document } = await useAsyncData("document", () =>
	client.getSingle("midterm", "document")
);
</script>

<template>
	<prismic-rich-text :field="document.data.introduction" />
</template>

<style>
p {
	margin-bottom: 1rem;
}

@media (min-width: 40rem) {
	p {
		width: 85%;
	}
}

@media (min-width: 50rem) {
	p {
		width: 70%;
	}
}

@media (min-width: 60rem) {
	p {
		width: 65%;
	}
}

@media (min-width: 68.75rem) {
	p {
		width: 55%;
	}
}

@media (min-width: 81.25rem) {
	p {
		width: 85%;
		font-size: 0.9rem;
	}
}
</style>
