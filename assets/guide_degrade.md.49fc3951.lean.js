import{_ as o,c as d,N as a,o as c}from"./chunks/framework.bc0ac4f7.js";const h=JSON.parse('{"title":"降级处理","description":"","frontmatter":{},"headers":[],"relativePath":"guide/degrade.md","lastUpdated":1663909922000}'),t={name:"guide/degrade.md"};function i(l,e,r,p,n,s){return c(),d("div",null,e[0]||(e[0]=[a('<h1 id="降级处理" tabindex="-1">降级处理 <a class="header-anchor" href="#降级处理" aria-label="Permalink to &quot;降级处理&quot;">​</a></h1><p>无界提供无感知的降级方案</p><p>在非降级场景下，子应用的<code>dom</code>在<code>webcomponent</code>中，运行环境在<code>iframe</code>中，<code>iframe</code>对<code>dom</code>的操作通过<code>proxy</code>来代理到<code>webcomponent</code>上，而<code>webcomponent</code>和<code>proxy</code> <code>IE</code>都无法支持，这里采用另一个的<code>iframe</code>替换<code>webcomponent</code>，用<code>Object.defineProperty</code>替换<code>proxy</code>来做代理的方案</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>无界并没有对 es6 代码进行 polyfill，因为每个用户对浏览器的兼容程度是不一样的引入的 polyfill 也不一致，如果需要在较低版本的浏览器中运行，需要用户自行 通过 babel 来添加 polyfill。</p></div><h2 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h2><ol><li><p>降级的行为由框架判断，当浏览器不支持时自动降级</p></li><li><p>降级后，应用之间也保证了绝对的隔离度</p></li><li><p>代码无需做任何改动，之前的预加载、保活还有通信的代码都生效，用户不需要为了降级做额外的代码改动导致降级前后运行的代码不一致</p></li><li><p>用户也可以强制降级，比如说当前浏览器对 webcomponent 和 proxy 是支持的，但是用户还是想将 dom 运行在 iframe 中，就可以将 <a href="/doc/api/startApp.html#degrade">degrade</a> 设置为 true</p></li></ol><h2 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h2><ol><li><p>弹窗只能在子应用内部</p></li><li><p>由于无法使用<code>proxy</code>，无法劫持子应用的<code>location</code>，导致访问<code>window.location.host</code>的时候拿到的是主应用的<code>host</code>，子应用可以从 <a href="/doc/api/wujie.html#wujie-location">$wujie.location</a> 中拿到子应用正确的<code>host</code></p></li></ol>',8)]))}const f=o(t,[["render",i]]);export{h as __pageData,f as default};
