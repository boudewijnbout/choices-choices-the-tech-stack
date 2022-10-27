<script setup>
const { client } = usePrismic();
const { data: document } = await useAsyncData("document", () =>
	client.getSingle("midterm", "document")
);

// console.log(document._value.data.standards);
</script>

<template>
	<main>
		<IndexComponentsHero :heroTitle="document.data.title" />
		<IndexComponentsStandardSection>
			<IndexComponentsStandard
				v-for="standard in document.data.standards"
				:key="standard.uid"
				:standardTitle="standard.id"
			>
				<IndexComponentsStandardChapter
					v-for="chapter in document.data.chapters"
				>
				</IndexComponentsStandardChapter>
			</IndexComponentsStandard>
		</IndexComponentsStandardSection>
	</main>
</template>
