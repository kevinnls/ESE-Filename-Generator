<script>
	export let data
	export let handlers
	import PageCount from './PageCount.svelte'
	import CourseAbbr from './CourseAbbr.svelte';
	let classGroup = "Arrear"
	switch(data.regnum.slice(0,10)){
		case "2001711010": 
			classGroup = "I BA"
			break;
		case "1901711010": 
			classGroup = "II BA"
			break;
		case "1801711010": 
			classGroup = "III BA"
			break;
		case "1901712006": 
			classGroup = "I MA"
			break;
		case "2001712006": 
			classGroup = "II MA"
			break;
		default: 
			classGroup = "Arrear"
	}

</script>

<div class="today flex-parent">
	<div class="flex-parent today-input-section">
		<div style="display: flex">
		<h4>Register Number</h4>
		<button class="mod-section" on:click={() => handlers.state(null)}>
				<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>
		</button>
		</div>
		<span style="font-size: 1.3em">{data.regnum}</span>		
	</div>
	<CourseAbbr inputHandler={handlers.courseAbbr} courseAbbr={data.courseAbbr} classGroup={classGroup} />
	<PageCount countChangeHandler={handlers.pageCount} pageCount={data.pageCount} />
</div>


<style>
	.today {
		margin: 0em auto 3em auto;
	}

	.flex-parent {
		flex-direction: column;
		padding: 0.5ch;
	}

	button.mod-section > svg {
		fill: hsl(240, 100%, 59%);
		width: 1.5em;
	}

	button:focus, button:hover > svg {
		-webkit-filter: drop-shadow( 0px 0px 2px rgba(121, 121, 121, 0.7));
		filter: drop-shadow( 0px 0px 2px rgba(121, 121, 121, 0.7));
	}
	
	button.mod-section {
		display: grid;
		place-items: center;
		border: none;
		background: none;
		cursor: pointer;
		padding: 0px;
	}
</style>
