<script>
	export let regnum
	export let stateHandler

	import Filename from './Filename.svelte'
	import Today from './Today.svelte'

	import { courseTitleFetcher } from './modules/courseTitleFetcher'

	$: data = {
		regnum: regnum,
		courseAbbr: courseTitleFetcher(regnum) || null,
		pageCount: 5
	}
	
	const handlers = {
		pageCount : e => data.pageCount = e.target.value,
		courseAbbr : e => data.courseAbbr = e.target.value,
		state: stateHandler,
	}
</script>

<Today data={{...data}} handlers={handlers} />
<Filename data={{...data}}/>
