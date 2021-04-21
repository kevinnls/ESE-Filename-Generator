<script>
	export let regnum
	export let stateHandler

	import Filename from './Filename.svelte'
	import Today from './Today.svelte'
	import Timetable from './Timetable.svelte'

	import { courseTitleFetcher } from './modules/courseTitleFetcher'

	const classGroups = {
		2001711010: "I BA",
		1901711010: "II BA",
		1801711010: "III BA",
		1901712006: "II MA",
		2001712006: "I MA",
	}
	const classGroup = classGroups[regnum.slice(0,10)] || "Arrear"

	$: data = {
		regnum: regnum,
		courseAbbr: courseTitleFetcher(classGroup) || null,
		pageCount: 5,
		classGroup: classGroup
	}

	const handlers = {
		pageCount : e => data.pageCount = e.target.value,
		courseAbbr : e => data.courseAbbr = e?.target?.value || '',
		state: stateHandler,
	}
</script>

{#if window.location.search === "?timetable"}
<Timetable classGroups ={{...classGroups}} classGroup={data.classGroup}/>
{:else}
<Today data={{...data}} handlers={handlers} />
<Filename data={{...data}}/>
{/if}
