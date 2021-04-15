<script>
	export let stateHandler
	const regNumPattern = '([0-9]{13}|[12]{2}[0-9]{1}(e|E)(g|G)[0-9]{4,})'
	const handleSubmit = (e) => {
		let formData = new FormData(e.target)
		let formUser = {}
		for (const [k, v] of formData.entries()) {
			formUser[k] = v
		}
		localStorage.setItem("regnum", formUser.regnum)
		stateHandler(formUser.regnum)
	}
</script>

<div class="grid-parent">
	<form action="#xxx" on:submit|preventDefault={handleSubmit}>
		<label for="regnum">Enter your Register Number</label>
		<input placeholder="Register Number" pattern={regNumPattern} name="regnum" type="text" autofocus required />
		<input type="submit">
	</form>
</div>

<style>
	.grid-parent {
		height: 80vh;
		place-items: center;
	}

	form {
		display: flex;
		row-gap: 1em;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>