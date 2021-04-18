<script>
	export let inputHandler
	export let courseAbbr
</script>
<div class="flex-parent today-input-section">
	<h4>Course/Paper Abbrev</h4>
	<input value={courseAbbr} placeholder="Enter the course abbreviation" on:input={inputHandler}>
</div>