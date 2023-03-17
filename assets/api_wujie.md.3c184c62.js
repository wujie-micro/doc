import{_ as o,o as e,c as a,Q as s}from"./chunks/framework.fe3fd81d.js";const y=JSON.parse('{"title":"$wujie","description":"","frontmatter":{},"headers":[],"relativePath":"api/wujie.md","lastUpdated":1665316282000}'),n={name:"api/wujie.md"},l=s(`<p>无界对子应用注入了<code>$wujie</code>对象，可以通过<code>$wujie</code>或者<code>window.$wujie</code>获取</p><h1 id="wujie" tabindex="-1">$wujie <a class="header-anchor" href="#wujie" aria-label="Permalink to &quot;$wujie&quot;">​</a></h1><ul><li><p><strong>类型：</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">bus</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">EventBus</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">shadowRoot</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ShadowRoot</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">any</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="wujie-bus" tabindex="-1">$wujie.bus <a class="header-anchor" href="#wujie-bus" aria-label="Permalink to &quot;$wujie.bus&quot;">​</a></h2><p>同 <a href="/doc/api/bus.html">bus</a></p><h2 id="wujie-shadowroot" tabindex="-1">$wujie.shadowRoot <a class="header-anchor" href="#wujie-shadowroot" aria-label="Permalink to &quot;$wujie.shadowRoot&quot;">​</a></h2><ul><li><strong>类型</strong>：<a href="https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot" target="_blank" rel="noreferrer">ShadowRoot</a></li></ul><p>子应用的渲染容器<code>shadow DOM</code></p><h2 id="wujie-props" tabindex="-1">$wujie.props <a class="header-anchor" href="#wujie-props" aria-label="Permalink to &quot;$wujie.props&quot;">​</a></h2><ul><li><strong>类型：</strong><code>{ [key: string]: any }</code></li></ul><p>主应用注入的数据</p><h2 id="wujie-location" tabindex="-1">$wujie.location <a class="header-anchor" href="#wujie-location" aria-label="Permalink to &quot;$wujie.location&quot;">​</a></h2><ul><li><p><strong>类型：</strong><code>Object</code></p></li><li><p>由于子应用的<code>location.host</code>拿到的是主应用的<code>host</code>，无界提供了一个正确的<code>location</code>挂载到挂载到<code>$wujie</code>上</p></li><li><p>当采用<code>vite</code>编译框架时，由于<code>script</code>的标签<code>type</code>为<code>module</code>，所以无法采用<a href="/doc/guide/information.html#iframe-数据劫持和注入">闭包</a>的方式将 <code>location</code> 劫持代理，子应用所有采用<code>window.location.host</code>的代码需要统一修改成<code>$wujie.location.host</code></p></li><li><p>当子应用发生降级时，由于<code>proxy</code>无法正常工作导致<code>location</code>无法代理，子应用所有采用<code>window.location.host</code>的代码需要统一修改成<code>$wujie.location.host</code></p></li><li><p>当采用非<code>vite</code>编译框架时，<code>proxy</code>代理了<code>window.location</code>，子应用代码无需做任何更改</p></li></ul>`,13),t=[l];function c(p,i,r,d,u,h){return e(),a("div",null,t)}const F=o(n,[["render",c]]);export{y as __pageData,F as default};
