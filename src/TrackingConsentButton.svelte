<script>
	export let trackingConsent
	export let handler

	const colors = {
		true: "hsl(108, 51%, 60%)",
		false: "hsl(0, 0%, 45%)"
	}
</script>
<button style="--color:{colors[trackingConsent]}" on:click={handler}>{trackingConsent? "Allowed" : "Blocked"}</button>

<style>
	button{
		background-color: var(--color);
		border: none;
	}
</style>