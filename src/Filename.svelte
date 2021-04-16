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

	.name-section {
		grid-template-columns: 90% 10%;
	}
</style>