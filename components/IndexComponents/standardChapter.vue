<template>
	<li>
		<NuxtLink to="/">{{ chapterTitle }}</NuxtLink>
	</li>
</template>

<script>
export default {
	props: {
		chapterTitle: String,
	},
};
</script>
