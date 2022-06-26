(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{443:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bus"}},[t._v("#")]),t._v(" bus")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型：")]),t._v(" "),a("code",[t._v("EventBus")])])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("callback")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventBus")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" eventObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EventBus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 任何$emit都会导致监听函数触发，第一个参数为事件名，后续的参数为$emit的参数 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$onAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EventBus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$once")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$off")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EventBus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$offAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EventBus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EventBus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EventBus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("strong",[t._v("详情：")]),t._v(" 去中心化的事件平台，类"),a("code",[t._v("Vue")]),t._v("的事件"),a("code",[t._v("api")]),t._v("，支持链式调用。"),a("RouterLink",{attrs:{to:"/guide/communication.html#eventbus-通信"}},[t._v("示例")])],1)]),t._v(" "),a("h2",{attrs:{id:"on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on"}},[t._v("#")]),t._v(" $on")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),t._v(" "),a("code",[t._v("(event: string, fn: callback) => EventBus")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("{string} event")]),t._v(" 事件名")]),t._v(" "),a("li",[a("code",[t._v("{callback} fn")]),t._v(" 回调参数")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详情：")]),t._v(" 监听事件并提供回调")])])]),t._v(" "),a("h2",{attrs:{id:"onall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onall"}},[t._v("#")]),t._v(" $onAll")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),t._v(" "),a("code",[t._v("(fn: (event: string, ...args: Array<any>) => any) => EventBus")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("{callback} fn")]),t._v(" 回调参数")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详情：")]),t._v(" 监听所有事件并提供回调，回调函数的第一个参数是事件名")])])]),t._v(" "),a("h2",{attrs:{id:"once"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#once"}},[t._v("#")]),t._v(" $once")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),t._v(" "),a("code",[t._v("(event: string, fn: callback) => void")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("{string} event")]),t._v(" 事件名")]),t._v(" "),a("li",[a("code",[t._v("{callback} fn")]),t._v(" 回调参数")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详情：")]),t._v(" 一次性的监听事件")])])]),t._v(" "),a("h2",{attrs:{id:"off"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#off"}},[t._v("#")]),t._v(" $off")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),t._v(" "),a("code",[t._v("(event: string, fn: callback) => EventBus")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("{string} event")]),t._v(" 事件名")]),t._v(" "),a("li",[a("code",[t._v("{callback} fn")]),t._v(" 回调参数")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详情：")]),t._v(" 取消事件监听")])])]),t._v(" "),a("h2",{attrs:{id:"offall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offall"}},[t._v("#")]),t._v(" $offAll")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),t._v(" "),a("code",[t._v("(fn: callback) => EventBus")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("{callback} fn")]),t._v(" 回调参数")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详情：")]),t._v(" 取消监听所有事件")])])]),t._v(" "),a("h2",{attrs:{id:"emit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emit"}},[t._v("#")]),t._v(" $emit")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),t._v(" "),a("code",[t._v("(event: string, ...args: Array<any>) => EventBus")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("{string} event")]),t._v(" 事件名")]),t._v(" "),a("li",[a("code",[t._v("{Array<any>} args")]),t._v(" 其他回调参数")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详情：")]),t._v(" 触发事件")])])]),t._v(" "),a("h2",{attrs:{id:"clear"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[t._v("#")]),t._v(" $clear")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),t._v(" "),a("code",[t._v("Function")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详情：")]),t._v(" 清空"),a("code",[t._v("EventBus")]),t._v("实例下所有监听事件")])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("ul",[a("li",[t._v("子应用在被销毁或者重新渲染（非保活状态）时框架会自动调用清空上次渲染所有的订阅事件")]),t._v(" "),a("li",[t._v("子应用内部组件的渲染可能导致反复订阅（比如在"),a("code",[t._v("mounted")]),t._v("生命周期调用"),a("code",[t._v("$wujie.bus.$on")]),t._v("），需要用户在"),a("code",[t._v("unmount")]),t._v("生命周期内手动调用"),a("code",[t._v("$wujie.bus.$off")]),t._v("来取消订阅")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);