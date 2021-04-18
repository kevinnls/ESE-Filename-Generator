<script>
	export let pageCount
	export let countChangeHandler
</script>

<div class="flex-parent">
	<label for="pagecount"><h4>How many pages?</h4></label>
	<div class="input-section grid-parent">
	<input type="range" min="0" max="50" value={pageCount} on:input={countChangeHandler}>
	<input type="number" min="0" max="50" value={pageCount} on:input={countChangeHandler} name="pagecount">
	</div>
</div>

<style>
	.input-section {
		width: 100%;
		grid-template-columns: auto 5.5ch;
		align-items: center;
		grid-gap: 1ch;
		text-align: center;
	}
	.flex-parent{
		flex-direction:column;
	}
</style>