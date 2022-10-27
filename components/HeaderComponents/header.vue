<template>
	<header>
		<NuxtLink to="/">
			<h1>CMD Midterm</h1>
		</NuxtLink>
		<HeaderComponentsNavigation />
	</header>
</template>

<style>
header {
	background-color: var(--color-white);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	border: 3px solid var(--color-black);
}

h1 {
	font-size: 1.5rem;
}

a {
	color: var(--color-black);
}

@media (min-width: 60rem) {
	header {
		padding: 1rem 2rem;
	}
}

@media (min-width: 81.25rem) {
	header {
		padding: 1rem 5rem;
	}
}
</style>
