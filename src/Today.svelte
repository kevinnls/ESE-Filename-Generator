<script>
	export let data
	export let stateHandler

</script>

<div class="grid-parent">
	<h3>Today's Exam</h3>
	<table>
		<tr>
			<td>Register Number</td>
			<td>{data.regnum}</td>
			<td><button class="mod-section" on:click={()=> {stateHandler(null)}}>Change register number</button>
			</td>
		</tr>
		<tr>
			<td>Course/Paper Title</td>
			<td>{data.courseTitle}</td>
			<td><button disabled class="mod-section">Change course title</button></td>
		</tr>
	</table>
</div>

<style>

	table {
		border-spacing: 2ch;
		border: 1px solid #000;
	}
	.grid-parent {
		margin: 1em;
		padding: .75em;
		text-align: left;
		/* background-color: blueviolet; */
	}

	button.mod-section {
		font-size: 0.8em;
		border: none;
		background: none;
		text-decoration: underline;
		color: blue;
		cursor: pointer;
	}
	button:disabled {
		color: grey;
		cursor: initial;
	}
</style>