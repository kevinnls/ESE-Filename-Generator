<script>
	export let data
	import copyTextToClipboard from "copy-to-clipboard"
	let filenameField
	let filenameGrid
	
	const FALSY_VALUES = ["false", false, undefined, "undefined", null, "null", 0, "0", "", " "]
	const isFalsy = (val) => FALSY_VALUES.some( (falsy) => val === falsy )
	const someAreFalsy = (obj) => Object.values(obj).some(ele => isFalsy(ele))

	$: copyButtonIsDisabled = someAreFalsy(data)
	$: filename = `${data.regnum}_${ isFalsy(data.courseAbbr) ? "XYZ" : data.courseAbbr }_${data.pageCount}`

	const copyToClipboard = () => {
		copyTextToClipboard(filename)
		console.log(`"${filename}" has been copied to clipboard`)
		filenameGrid.setAttribute("data-value", "Copied!")
		setTimeout(()=>{filenameGrid.setAttribute("data-value", "")}, 3000)
	}
</script>

<div data-value="" bind:this={filenameGrid} class="grid-parent filename-grid">
	<input type="text" value={filename} bind:this={filenameField} on:click={copyButtonIsDisabled || filenameField.select()} readonly>
	<button disabled={copyButtonIsDisabled} alt="Click to copy" on:click="{copyToClipboard}">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
	</button>
</div>

<style>
	div::after{
		content: attr(data-value);
		display: block;
		transition: 5s;
	}
	button {
		display: grid;
		padding: 0.25ch;
		place-items: center;
	}
	button:hover{
		box-shadow: 0px 0px 3px grey;
	}
	button:disabled:hover{
		box-shadow: initial;
	}
	button:click{
		filter: brightness(-80%);
	}
	button > svg {
		width: 2.5ch;
		height: 2em;
	}
	button:disabled > svg{
		fill: darkgrey;
		outline: darkgrey
	}
	input[type="text"] {
		text-align: center;
		padding: 1ch;
		color: transparent;
		text-shadow: 0 0 #000;
		width: 100%;
		margin: 0px auto;
	}
	.filename-grid {
		width: 100%;
		place-items: center;
		grid-template-columns: 90% 10%;
		gap: 0.5ch;
	}
</style>