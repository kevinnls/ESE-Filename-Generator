<script>
	export let pageCount
	export let countChangeHandler
</script>

<div class="input-section grid-parent">
	<label for="pagecount">How many pages?</label>
	<input type="range" min="0" max="50" value={pageCount} on:input={countChangeHandler}>
	<input type="number" min="0" max="50" value={pageCount} on:input={countChangeHandler} name="pagecount">
</div>

<style>
	.input-section {
		gap: 0.5em;
		grid-template-rows: 1fr auto;
		grid-template-columns: auto 7ch;
		align-items: center;
		/* padding: 1em; */
		margin: 2em;
	}

	.input-section>label {
		grid-column: 1/span 2;
	}
</style>