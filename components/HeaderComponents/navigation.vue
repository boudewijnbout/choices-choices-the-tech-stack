<template>
	<nav>
		<NuxtLink to="/beoogde-leerresultaten">Beoogde leerresultaten</NuxtLink>
		<NuxtLink to="/onderwijsleeromgeving">Onderwijsleeromgeving</NuxtLink>
		<NuxtLink to="/toetsing">Toetsing</NuxtLink>
		<NuxtLink href="/gerealiseerde-leerresultaten"
			>Gerealiseerde leerresultaten</NuxtLink
		>
	</nav>
	<button>
		<span />
		<span />
		<span />
	</button>
</template>

<style>
nav {
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	display: none;
}

button {
	display: block;
	position: relative;
	z-index: 1;
	cursor: pointer;
	z-index: 30;
	all: unset;
}

button span {
	display: block;
	width: 2rem;
	height: 0.2rem;
	margin-bottom: 5px;
	position: relative;
	background-color: var(--color-black);
	border-radius: 6px;
	transform-origin: 0 0;
	transition: 0.4s;
}

button span:last-child {
	margin: 0;
}

button.active span:nth-child(1) {
	transform: translate(0px, -2px) rotate(45deg);
}

button.active span:nth-child(2) {
	opacity: 0;
	transform: translateX(15px);
}

button.active span:nth-child(3) {
	transform: translate(-3px, 3px) rotate(-45deg);
}

@media (min-width: 60rem) {
	nav {
		display: flex;
	}

	button {
		display: none;
	}
}
</style>
