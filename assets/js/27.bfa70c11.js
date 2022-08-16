(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{294:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("无界会在子应用的"),s("code",[t._v("window")]),t._v("对象中注入一些全局变量:")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" global "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Window")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否存在无界")]),t._v("\n    __POWERED_BY_WUJIE__"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子应用公共加载路径")]),t._v("\n    __WUJIE_PUBLIC_PATH__"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原生的querySelector")]),t._v("\n    __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("querySelector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原生的querySelectorAll")]),t._v("\n    __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("querySelectorAll"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原生的window对象")]),t._v("\n    __WUJIE_RAW_WINDOW__"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子应用沙盒实例")]),t._v("\n    __WUJIE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" WuJie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子应用mount函数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("__WUJIE_MOUNT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子应用unmount函数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("__WUJIE_UNMOUNT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注入对象")]),t._v("\n    $wujie"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      bus"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EventBus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      shadowRoot"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ShadowRoot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      location"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"powered-by-wujie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#powered-by-wujie"}},[t._v("#")]),t._v(" "),s("code",[t._v("__POWERED_BY_WUJIE__")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("类型：")]),t._v(" "),s("code",[t._v("Boolean")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("描述：")]),t._v(" 子应用是否在无界的环境中")])])]),t._v(" "),s("h2",{attrs:{id:"wujie-public-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wujie-public-path"}},[t._v("#")]),t._v(" "),s("code",[t._v("__WUJIE_PUBLIC_PATH__")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("类型：")]),t._v(" "),s("code",[t._v("string")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("描述：")]),t._v(" 子应用公共加载路径")])])]),t._v(" "),s("h2",{attrs:{id:"wujie-raw-document-query-selector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wujie-raw-document-query-selector"}},[t._v("#")]),t._v(" "),s("code",[t._v("__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("类型：")]),t._v(" "),s("code",[t._v("typeof Document.prototype.querySelector")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("描述：")]),t._v(" 子应用的 document.querySelector 都被劫持到 webcomponent 上，如果需要没有劫持的 querySelector， 可以使用此变量")])])]),t._v(" "),s("h2",{attrs:{id:"wujie-raw-document-query-selector-all"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wujie-raw-document-query-selector-all"}},[t._v("#")]),t._v(" "),s("code",[t._v("__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("类型：")]),t._v(" "),s("code",[t._v("typeof Document.prototype.querySelectorAll")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("描述：")]),t._v(" 子应用的 document.querySelectorAll 都被劫持到 webcomponent 上，如果需要没有劫持的 querySelectorAll 可以使用此变量")])])]),t._v(" "),s("h2",{attrs:{id:"wujie-raw-window"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wujie-raw-window"}},[t._v("#")]),t._v(" "),s("code",[t._v("__WUJIE_RAW_WINDOW__")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("类型：")]),t._v(" "),s("code",[t._v("Window")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("描述：")]),t._v(" 子应用的原生 window 对象")])])]),t._v(" "),s("h2",{attrs:{id:"wujie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wujie"}},[t._v("#")]),t._v(" "),s("code",[t._v("__WUJIE")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("类型：")]),t._v(" "),s("code",[t._v("Wujie")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("描述：")]),t._v(" 子应用无界实例，用户不应该使用")])])]),t._v(" "),s("h2",{attrs:{id:"wujie-mount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wujie-mount"}},[t._v("#")]),t._v(" "),s("code",[t._v("__WUJIE_MOUNT")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("类型：")]),t._v(" "),s("code",[t._v("Function")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("描述：")]),t._v(" 用户自定义的 mount 生命周期")])])]),t._v(" "),s("h2",{attrs:{id:"wujie-unmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wujie-unmount"}},[t._v("#")]),t._v(" "),s("code",[t._v("__WUJIE_UNMOUNT")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("类型：")]),t._v(" "),s("code",[t._v("Function")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("描述：")]),t._v(" 用户自定义的 unmount 生命周期")])])]),t._v(" "),s("h2",{attrs:{id:"wujie-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wujie-2"}},[t._v("#")]),t._v(" $wujie")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/api/subapp.html#wujie"}},[t._v("详见")])],1)])}),[],!1,null,null,null);s.default=n.exports}}]);