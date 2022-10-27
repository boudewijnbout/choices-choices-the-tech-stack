<template>
	<section>
		<NuxtLink to="/">{{ standardTitle }}</NuxtLink>
		<ul>
			<slot />
		</ul>
	</section>
</template>

<style scoped>
a {
	font-size: 1.3rem;
	font-weight: 700;
}

ul {
	margin-top: 1rem;
}
</style>

<script>
export default {
	props: {
		standardTitle: String,
		standardUID: String,
	},
};
</script>
