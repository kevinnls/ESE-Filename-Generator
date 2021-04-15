<script>
	export let regnum
	$: pageCount = 5
	import copyTextToClipboard from "copy-to-clipboard"
	import { filenameGenerator } from "./modules/courseTitleFetcher"
	const filename = filenameGenerator(regnum, 9)
	// let filename = "/*placeholder text*/"
	const copyToClipboard = () => {
		copyTextToClipboard(filename)
		console.log(`"${filename}" has been copied to clipboard`)
	}
	const handlePageCountChange = (e) => {
		pageCount = e.target.value
	}
</script>

<div class="filename-grid grid-parent">
	<div class="input-section grid-parent">
		<label for="pagecount">How many pages?</label>
		<input type="range" min="0" max="50" value={pageCount} on:input={handlePageCountChange}>
		<input type="number" min="0" max="50" value={pageCount} on:input={handlePageCountChange} name="pagecount">
	</div>

	<div class="grid-parent name-section">
		<input type="text" value={filename} style="--len: {filename.length}ch" redonly>
		<button on:click="{copyToClipboard}">COPY</button>
	</div>


</div>

<style>
	input[type="text"] {
		width: var(--len);
		padding: 1ch;
		color: transparent;
		text-shadow: 0 0 #000;
	}

	.filename-grid {
		place-items: center;
	}

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

	.name-section {
		grid-template-columns: 90% 10%;
	}
</style>