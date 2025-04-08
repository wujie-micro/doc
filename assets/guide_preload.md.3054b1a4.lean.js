import{_ as a,c as t,N as r,o}from"./chunks/framework.bc0ac4f7.js";const f=JSON.parse('{"title":"预加载","description":"","frontmatter":{},"headers":[],"relativePath":"guide/preload.md","lastUpdated":1661566413000}'),p={name:"guide/preload.md"};function c(d,e,l,i,s,n){return o(),t("div",null,e[0]||(e[0]=[r('<h1 id="预加载" tabindex="-1">预加载 <a class="header-anchor" href="#预加载" aria-label="Permalink to &quot;预加载&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>预加载能力可以极大的提升子应用打开的首屏时间</p></div><h2 id="预加载-1" tabindex="-1">预加载 <a class="header-anchor" href="#预加载-1" aria-label="Permalink to &quot;预加载&quot;">​</a></h2><p>预加载指的是在应用空闲的时候<code>requestIdleCallback</code>将所需要的静态资源提前从网络中加载到内存中，详见<a href="/doc/api/preloadApp.html">preloadApp</a></p><h2 id="预执行" tabindex="-1">预执行 <a class="header-anchor" href="#预执行" aria-label="Permalink to &quot;预执行&quot;">​</a></h2><p>预执行指的是在应用空闲的时候将子应用提前渲染出来，可以进一步提升子应用打开时间</p><p>只需要在<code>preloadApp</code>中将 <a href="/doc/api/preloadApp.html#exec">exec</a> 设置为<code>true</code>即可</p><p>由于子应用提前渲染可能会导致阻塞主应用的线程，所以无界提供了类似 <a href="https://github.com/acdlite/react-fiber-architecture" target="_blank" rel="noreferrer">react-fiber</a> 方式来防止阻塞线程，详见 <a href="/doc/api/startApp.html#fiber">fiber</a></p>',8)]))}const u=a(p,[["render",c]]);export{f as __pageData,u as default};
