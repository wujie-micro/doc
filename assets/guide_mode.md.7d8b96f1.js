import{_ as e,o,c as a,Q as d}from"./chunks/framework.fe3fd81d.js";const _=JSON.parse('{"title":"运行模式","description":"","frontmatter":{"sidebarDepth":2,"collapsable":false},"headers":[],"relativePath":"guide/mode.md","lastUpdated":1678334209000}'),c={name:"guide/mode.md"},t=d('<h1 id="运行模式" tabindex="-1">运行模式 <a class="header-anchor" href="#运行模式" aria-label="Permalink to &quot;运行模式&quot;">​</a></h1><p><img src="https://vfiles.gtimg.cn/wuji_dashboard/xy/test_wuji_damy/F0NYfpHl.jpeg" alt="无界流程图.jpeg"></p><p>在微前端框架中，子应用放置在主应用页面中随着主应用页面的打开和关闭反复的激活和销毁，而在无界微前端框架中子应用是否保活以及是否进行生命周期的改造会进入完全不同的处理流程</p><h2 id="保活模式" tabindex="-1">保活模式 <a class="header-anchor" href="#保活模式" aria-label="Permalink to &quot;保活模式&quot;">​</a></h2><p>子应用的 <a href="/doc/api/startApp.html#alive">alive</a> 设置为<code>true</code>时进入保活模式，内部的数据和路由的状态不会随着页面切换而丢失。</p><p>在保活模式下，子应用只会进行一次渲染，页面发生切换时承载子应用<code>dom</code>的<code>webcomponent</code>会保留在内存中，当子应用重新激活时无界会将内存中的<code>webcomponent</code>重新挂载到容器上</p><p>保活模式下改变 <a href="/doc/api/startApp.html#url">url</a> 子应用的路由不会发生变化，需要采用 <a href="/doc/guide/communication.html">通信</a> 的方式对子应用路由进行跳转</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>保活的子应用的实例不会销毁，子应用被切走了也可以响应 bus 事件，非保活的子应用切走了监听的事件也会全部销毁，需要等下次重新 mount 后重新监听。</p></div><h2 id="单例模式" tabindex="-1">单例模式 <a class="header-anchor" href="#单例模式" aria-label="Permalink to &quot;单例模式&quot;">​</a></h2><p>子应用的<code>alive</code>为<code>false</code>且进行了<a href="/doc/guide/start.html#生命周期改造">生命周期改造</a>时进入单例模式。</p><p>子应用页面如果切走，会调用<code>window.__WUJIE_UNMOUNT</code>销毁子应用当前实例，子应用页面如果切换回来,会调用<code>window.__WUJIE_MOUNT</code>渲染子应用新的子应用实例</p><p>在单例式下，改变 <a href="/doc/api/startApp.html#url">url</a> 子应用的路由会发生跳转到对应路由</p><p>如果主应用上有多个菜单栏用到了子应用的不同页面，在每个页面启动该子应用的时候将<code>name</code>设置为同一个，这样可以共享一个<code>wujie</code>实例，承载子应用<code>js</code>的<code>iframe</code>也实现了共享，不同页面子应用的<code>url</code>不同，切换这个子应用的过程相当于：销毁当前应用实例 =&gt; 同步新路由 =&gt; 创建新应用实例</p><h2 id="重建模式" tabindex="-1">重建模式 <a class="header-anchor" href="#重建模式" aria-label="Permalink to &quot;重建模式&quot;">​</a></h2><p>子应用既没有设置为保活模式，也没有进行生命周期的改造则进入了重建模式，每次页面切换不仅会销毁承载子应用<code>dom</code>的<code>webcomponent</code>，还会销毁承载子应用<code>js</code>的<code>iframe</code>，相应的<code>wujie</code>实例和子应用实例都会被销毁</p><p>重建模式下改变 <a href="/doc/api/startApp.html#url">url</a> 子应用的路由会跳转对应路由，但是在 <a href="/doc/guide/sync.html">路由同步</a> 场景并且子应用的路由同步参数已经同步到主应用<code>url</code>上时则无法生效，因为改变<code>url</code>后会导致子应用销毁重新渲染，此时如果有同步参数则同步参数的优先级最高</p>',16),r=[t];function p(i,l,s,n,h,m){return o(),a("div",null,r)}const f=e(c,[["render",p]]);export{_ as __pageData,f as default};
