<template>
	<section class="container">
		<slot />
	</section>
</template>

<style scoped>
.container {
	padding: 2rem 5rem;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	border-left: 3px solid var(--color-black);
	border-right: 3px solid var(--color-black);
	border-bottom: 3px solid var(--color-black);
}
</style>
