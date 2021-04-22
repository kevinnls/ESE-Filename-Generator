import App from './App.svelte';

const regnum = localStorage.getItem("regnum") || null
const trackingConsent =
  localStorage.getItem("trackingconsent") === "false" ? false : true;

const app = new App({
  target: document.body,
  props: {
    regnum: regnum,
    trackingConsent: trackingConsent,
  },
});

export default app;