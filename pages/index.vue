<script setup>
const { client } = usePrismic();

const { data: document } = await useAsyncData("document", async () => {
	return client.getSingle("midterm", "document");
});

let standards = await Promise.all(
	document._value.data.standards.map(async (s) => {
		const standard = await client.getByUID("standard", s.standard.uid);

		const chapters = await Promise.all(
			standard.data.chapters.map(async (s) => {
				const chapter = await client.getByUID("chapter", s.chapter.uid);
				return chapter;
			})
		);

		standard.data.chapters = chapters;
		return standard;
	})
);

standards = standards.map((standard) => standard.data);
</script>

<template>
	<main>
		<IndexComponentsHero :heroTitle="document.data.title" />
		<IndexComponentsStandardSection>
			<IndexComponentsStandard
				v-for="standard in standards"
				:key="standard.uid"
				:standardUID="`/${standard.title}`"
				:standardTitle="`${standard.standardnumber}.0 ${standard.title}`"
			>
				<IndexComponentsStandardChapter
					v-for="(chapter, i) in standard.chapters"
					:key="i"
					:chapterTitle="`${standard.standardnumber}.${i + 1} ${
						chapter.data.title
					}`"
				/>
			</IndexComponentsStandard>
		</IndexComponentsStandardSection>
	</main>
</template>
