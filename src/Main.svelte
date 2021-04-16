<script>
	export let regnum
	export let stateHandler

	import Filename from './Filename.svelte'
	import Today from './Today.svelte'
	import PageCount from './PageCount.svelte'

	import { courseTitleFetcher } from './modules/courseTitleFetcher'

	$: courseTitle = courseTitleFetcher(regnum)
	$: pageCount = 5
	$: filename = `${regnum}_${courseTitle}_${pageCount}pgs`
	const handlePageCountChange = (e) => {
		pageCount = e.target.value
	}
</script>

{#if courseTitle !== false }
<Today data={{regnum: regnum, courseTitle: courseTitle, }} stateHandler={stateHandler} />
<PageCount countChangeHandler={handlePageCountChange} pageCount={pageCount} />
<Filename filename={filename} />
{:else}
<h3>I have no idea what exam you are writing today</h3>
{/if}