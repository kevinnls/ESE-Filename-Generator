<script>
	export let inputHandler
	export let courseAbbr
	export let classGroup
	import abbreviations from "../public/abbreviations.json"
	let rest
	const classGroups = ["Arrear", "I BA", "II BA", "III BA", "I MA", "II MA" ]
	let index = classGroups.indexOf(classGroup)
	let sortedGroups = [...classGroups.splice(index,1), ...classGroups]
	const CUSTOM_NAMES = ["Custom", "(Language)", "(GC Name)"]
	
	$: showCustomField = false
	const isCustom = (item) => CUSTOM_NAMES.some((custom) => custom === item)
	const internalCheck = (e) => {
		if(isCustom(e.target.value)){
			showCustomField = true
			inputHandler(null)
			return
		} else {
			showCustomField = false
			inputHandler(e)
			return
		}
	}
</script>
<div class="flex-parent today-input-section">
	<label for="courseabbrs"><h4>Course/Paper { classGroup === "I MA" || classGroup === "II MA" ? "Title" : "Abbrev"}</h4></label>
	<select on:input={internalCheck} placeholder="Choose a course" value={courseAbbr || ""} name="courseabbrs" id="courseabbrs" required>
		<option value="" disabled>Choose a course</option>
		<option value="Custom">Custom...</option>
		{#each sortedGroups as classGroup}
			<optgroup label={classGroup}>
				{#each abbreviations[classGroup] as course}
					<option value={course}>{course}</option>
				{/each}
			</optgroup>
		{/each}
	</select>
	{#if showCustomField}
	<input id="courseAbbr" list="courseabbrs-data" value={courseAbbr} pattern=".+" placeholder="Enter the course abbreviation" on:input={inputHandler} required>
	{/if}
</div>