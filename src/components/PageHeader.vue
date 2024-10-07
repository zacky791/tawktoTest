<template>
	<header class="header-wrapper">
		<div class="header-text">
			<h1>Knowledge base doesn't have to be boring</h1>
			<h3>Everything you need to manage your Messaging</h3>
		</div>
		<div class="search-wrapper">
			<input type="text" placeholder="Search for answers" />
			<button><img :src="searchIcon" alt="Search" /></button>
		</div>
	</header>
</template>

<script>
import searchIcon from '../assets/icons/search.svg';

export default {
	name: 'PageHeader',
	data: () => ({ searchIcon })
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.header-wrapper {
	font-family: $font-family;
	background-color: #ffffff;
	text-align: center;
	width: 100%;
	margin-top: 60px;
	margin-bottom: 20px;
	padding-top: 40px;
	padding-bottom: 40px;

	h1 {
		font-size: 36px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	h3 {
		font-size: 20px;
		font-weight: normal;
		margin-bottom: 30px;
	}
}

.search-wrapper {
	display: flex;
	justify-content: center;
	margin-bottom: 40px;
	width: 100%;

	input {
		width: 500px;
		padding: 15px;
		border: 1px solid #ccc;
		border-radius: 8px;
		font-size: 16px;
		max-width: 100%;

		&:hover {
			border-color: #3ba83b;
		}
	}

	button {
		background-color: #3ba83b;
		border: none;
		border-radius: 8px;
		padding: 0 20px;
		margin-left: 10px;
		cursor: pointer;
		font-size: 16px;

		&:hover {
			background-color: #2a8e2a !important;
		}
	}

	img {
		width: 20px;
		height: 20px;
	}
}
</style>
