<script>
	export let regnum = null

	import FirstTimeForm from './FirstTimeForm.svelte'
	import Main from './Main.svelte'

	const stateChange = (rn) => {
		regnum = rn
		localStorage.setItem('regnum', regnum)
	}
</script>

<header>
	<h1><a href="/">Filename Generator</a></h1>
	<h2>End Semester Examinations April 2021</h2>
</header>

<main>
	{#if !!regnum && regnum !== "null"}
	<Main regnum={regnum} stateHandler={stateChange} />
	{:else}
	<FirstTimeForm stateHandler={stateChange} />
	{/if}
</main>

<style>
	header {
		max-height: 10vh;
		display: grid;
		place-items: center;
		background-color: #ff774a;
		padding: 0.5em;
		margin: 0;
	}

	main {
		max-height: 90vh;
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.5em;
		margin: 3em auto;
	}
	@media ( min-width: 800px ){
		main {
			width: 30%;
		}
	}
	
	h1,
	h2 {
		margin-top: 0px;
		margin-bottom: 0px;
		color: #fff;
		text-transform: uppercase;
		font-weight: 350;
	}

	h1 {
		font-size: 2em;
	}

	h2 {
		font-size: 0.75em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
