<script>
	export let filename
	$: pageCount = 5
	import copyTextToClipboard from "copy-to-clipboard"

	const copyToClipboard = () => {
		copyTextToClipboard(filename)
		console.log(`"${filename}" has been copied to clipboard`)
	}

</script>

<div class="filename-grid grid-parent">
	<div class="grid-parent name-section">
		<input type="text" value={filename} style="--len: {filename.length+1}ch" redonly>
		<button alt="Click to copy" on:click="{copyToClipboard}">
		<img alt="Click to copy" src="/copy_content.svg">
		</button>
	</div>
</div>

<style>
	button {
		display: grid;
		padding: 0.25ch;
		place-items: center;
	}
	button:hover{
		box-shadow: 0px 0px 3px grey;
	}
	button:click{
		filter: brightness(-80%);
	}
	input[type="text"] {
		width: var(--len);
		padding: 1ch;
		color: transparent;
		text-shadow: 0 0 #000;
	}

	.filename-grid {
		place-items: center;
		
	}

	.name-section {
		grid-template-columns: 90% 10%;
		gap: 0.5ch;
	}
</style>