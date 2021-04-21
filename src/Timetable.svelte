<script>
	export let classGroup
	export let classGroups
	import timetable from "../public/timetable.json"
	const dates = Object.keys(timetable)
	const classes = Object.values(classGroups)
	</script>

<div>
<table>
	<tr>
		<td></td>
	{#each dates as date}
		<th nowrap>{date}</th>
		{/each}
	</tr>
	{#each classes as currentClass}
	<tr>
		<th class="freeze">{currentClass}</th>
		{#each dates as date}
		<td nowrap>{timetable[date][currentClass]}</td>
		{/each}
	</tr>
		{/each}
</table>
</div>

<style>
	div {
		overflow: scroll;
	}
	table {
		border-collapse: collapse;
	}
	td, th {
		border: 1px solid black;
		padding: 0.5em;
		text-align: center;
	}
	th.freeze {
		position: sticky;
		left: 0;
		background-color: gray;
		z-index: 1;
		margin: 0px;
	}
</style>