import App from './App.svelte';

const regnum = localStorage.getItem("regnum") || null

const app = new App({
	target: document.body,
	props: {
		regnum: regnum
	}
});

export default app;