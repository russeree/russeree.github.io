if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>s(e,o),d={module:{uri:o},exports:c,require:t};i[o]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.4fc5c2e4.js",revision:null},{url:"assets/index.b0a288df.css",revision:null},{url:"index.html",revision:"2793a8b83cfb178ec29b57d6f21a53d0"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"scripts/axios.js",revision:"9bf5d8861104308bcfb0e286c61eece3"},{url:"images/icons-1024.png",revision:"81a60aa49943c292504ed5a296b8ba17"},{url:"images/icons-192.png",revision:"8801f3e19ee3b1867facdddad90f42a5"},{url:"images/icons-512.png",revision:"1c9e4a0d8d815cb14d2494e0fd7bf6f0"},{url:"manifest.webmanifest",revision:"205204aa08ff70ea04ca59c0e4951cf6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
