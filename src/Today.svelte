<script>
	export let _regnum
	export let stateHandler
	$: regnum = _regnum
	import Filename from './Filename.svelte'
	let courseTitle = '/*Placeholder Text*/'

</script>

<div class="grid-parent">
	<h3>Today's Exam</h3>
	<table>
		<tr>
			<td>Register Number</td>
			<td>{regnum}</td>
			<td><button class="mod-section" on:click="{() => {stateHandler(false)}}">Change register number</button>
			</td>
		</tr>
		<tr>
			<td>Course/Paper Title</td>
			<td>{courseTitle}</td>
			<td><button class="mod-section">Change course number</button></td>
		</tr>
	</table>
</div>
<Filename regnum={regnum} stateHandler={stateHandler} />

<style>
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
	}
</style>