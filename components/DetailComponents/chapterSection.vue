<template>
	<section>
		<span>{{ chapterNumber }}</span>
		<h2>{{ chapterTitle }}</h2>
		<div>
			<slot />
		</div>
	</section>
</template>

<script>
export default {
	props: {
		chapterNumber: Number,
		chapterTitle: String,
	},
};
</script>
