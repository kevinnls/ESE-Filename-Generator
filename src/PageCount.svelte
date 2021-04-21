<script>
	export let pageCount
	export let countChangeHandler
</script>

<div class="flex-parent today-input-section">
	<label for="pagecount"><h4>How many pages? <small>(<em>including</em> cover page)</h4></label>
	<div class="grid-parent">
	<input type="range" min="0" max="50" value={pageCount} on:input={countChangeHandler}>
	<input type="number" min="0" max="50" value={pageCount} on:input={countChangeHandler} name="pagecount">
	</div>
</div>

<style>
	.grid-parent {
		width: 100%;
		grid-template-columns: auto 5.5ch;
		align-items: center;
		grid-gap: 1ch;
		text-align: center;
	}
</style>