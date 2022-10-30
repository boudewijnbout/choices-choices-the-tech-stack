<script setup>
const { client } = usePrismic();
const route = useRoute();
const uid = route.params.uid;

const { data: standard } = await useAsyncData("standard", async () => {
	return client.getByUID("standard", uid);
});

const chapters = await Promise.all(
	standard._value.data.chapters.map(async (s) => {
		const chapter = await client.getByUID("chapter", s.chapter.uid);
		return chapter;
	})
);

standard._value.data.chapters = chapters;
</script>

<template>
	<main>
		<DetailComponentsStandardHero
			:standardHeroTitle="standard.data.title"
			:standardHeroIntroduction="standard.data.introduction"
			:standardNumber="standard.data.standardnumber"
		/>

		<DetailComponentsChapterSection
			v-for="chapter in standard.chapters"
			:chapterNumber="`${chapter.standardnumber}.${i + 1}`"
			:chapterTitle="chapter.id"
		/>
	</main>
</template>
