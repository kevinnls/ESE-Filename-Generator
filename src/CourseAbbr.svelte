<script>
	export let inputHandler
	export let courseAbbr
	export let classGroup
	import abbreviations from "../public/abbreviations.json"

	const classGroups = ["Arrear", "I BA", "II BA", "III BA", "I MA", "II MA" ]
	let index = classGroups.indexOf(classGroup)
	let sortedGroups = [...classGroups.splice(index,1), ...classGroups]
	const CUSTOM_NAMES = ["Custom", "(Language II)", "(Language IV)", "(GC Name)", "(ID Name)"]

	$: showCustomField = false
	let _custom = null
	const isCustom = (item) => CUSTOM_NAMES.some((custom) => custom === item)
	if(isCustom(courseAbbr)){
		showCustomField = true
		_custom = courseAbbr
		inputHandler(null)
	}
	const internalCheck = (e) => {
		if(isCustom(e.target.value)){
			showCustomField = true
			_custom = e.target.value
			inputHandler(null)
			return
		} else {
			showCustomField = false
			_custom = null
			inputHandler(e)
		}
	}
</script>
<div class="flex-parent today-input-section">
	<label for="courseabbrs"><h4>Course/Paper { classGroup === "I MA" || classGroup === "II MA" ? "Title" : "Abbrev"}</h4></label>
	<!-- svelte-ignore a11y-no-onchange -->
	<select on:change={internalCheck} placeholder="Choose a course" value={_custom || courseAbbr || ""} name="courseabbrs" id="courseabbrs" required>
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
