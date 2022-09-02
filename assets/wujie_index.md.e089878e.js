import{e as g,r as p,w as f,f as b,o as r,c,b as e,g as y,u as v,h as C,F as j,i as F,t as x,j as B,v as E,p as k,k as N,d as m,_ as U,l as _,m as D}from"./app.2baae86e.js";const L=[{name:"UmiJS",url:"https://umijs.org/"},{name:"TurboRepo",url:"https://turborepo.org/docs/getting-started"},{name:"React",url:"https://reactjs.org/"},{name:"Vercel",url:"https://vercel.com/"},{name:"Webpack",url:"https://webpack.js.org/"},{name:"Vuetify",url:"https://vuetifyjs.com/en/"},{name:"AntDesign",url:"https://ant.design/components/drawer-cn/"},{name:"AntV",url:"https://g2.antv.vision/zh"},{name:"NaiveUI",url:"https://www.naiveui.com/zh-CN/os-theme/components/button"}],V={class:"baseContainer"},A={class:"onlineContainer"},T={class:"wujieList"},M=e("h1",null,"\u5FEB\u901F\u524D\u5F80",-1),S=["onClick"],$=g({__name:"wujie-online",props:{url:null,flag:{type:Boolean}},emits:["update:url"],setup(u,{emit:s}){const i=u,t=p("https://wujicode.cn/xy/app/prod/official/home");f(()=>i.flag,a=>{t.value=i.url});const n=document.createElement("div");n.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="30px" viewBox="0 0 24 30">
<rect x="0" y="13" width="4" height="5" fill="#f16b5f">
  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
</rect>
<rect x="10" y="13" width="4" height="5" fill="#f16b5f">
  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
</rect>
<rect x="20" y="13" width="4" height="5" fill="#f16b5f">
  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
</rect>
</svg>`;function l(a){t.value=a.url,s("update:url",a.url)}return(a,o)=>{const d=b("WujieVue");return r(),c("div",V,[e("div",A,[t.value?(r(),y(d,{class:"wujieContainer",key:t.value,name:t.value,alive:"",url:t.value,loading:v(n)},null,8,["name","url","loading"])):C("",!0)]),e("div",T,[M,(r(!0),c(j,null,F(v(L),h=>(r(),c("div",{class:"wujieItem",onClick:P=>l(h)},x(h.name),9,S))),256))])])}}});const w=u=>(k("data-v-e621b3b9"),u=u(),N(),u),I={id:"newsletter",class:"NewsLetter"},W={class:"container"},X=w(()=>e("h2",{class:"title"},[e("span",{class:"link"},"\u5F00\u7BB1\u5373\u7528"),m(" , \u7528\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u4F53\u9A8C"),e("span",{class:"link"},"\u65E0\u754C")],-1)),O={class:"form"},z={class:"box",action:"javascript:"},J=w(()=>e("p",{class:"help"},[m(" \u60A8\u53EF\u4EE5\u8F93\u5165\u4E00\u4E2A\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684"),e("span",{class:"link"},"https"),m("\u534F\u8BAE\u7F51\u7AD9\u6765\u5728\u7EBF\u4F53\u9A8C"),e("span",{class:"link"},"\u65E0\u754C")],-1)),R=g({__name:"wujie-connect",props:{baseUrl:null},emits:["changeUrl"],setup(u,{emit:s}){const i=u,t=p("https://wujicode.cn/xy/app/prod/official/home"),n=p(!1);function l(a){a.preventDefault,/(https):\/\/([\w.]+\/?)\S*/.test(t.value)&&(n.value=!n.value,s("changeUrl",[t.value,n.value]))}return f(()=>i.baseUrl,a=>{t.value=a}),(a,o)=>(r(),c("section",I,[e("div",W,[X,e("div",O,[e("form",z,[B(e("input",{class:"input",placeholder:"Your Website",required:"",pattern:"https:\\/\\/([\\w.]+\\/?)\\S*",title:"\u8BF7\u8F93\u5165\u5141\u8BB8\u8DE8\u57DF\u7684\u5E76\u4E14\u662Fhttps\u534F\u8BAE\u7684\u7F51\u7AD9","onUpdate:modelValue":o[0]||(o[0]=d=>t.value=d)},null,512),[[E,t.value]]),e("div",{class:"action"},[e("input",{class:"button",type:"submit",onClick:l,value:"Magic"})])])]),J])]))}});const q=U(R,[["__scopeId","data-v-e621b3b9"]]),G=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"wujie/index.md"}'),H={name:"wujie/index.md"},K=Object.assign(H,{setup(u){const s=p(""),i=p(null);function t(n){s.value=n[0],i.value=n[1]}return(n,l)=>{const a=b("ClientOnly");return r(),c("div",null,[_(a,null,{default:D(()=>[_(q,{onChangeUrl:t,baseUrl:s.value},null,8,["baseUrl"]),_($,{url:s.value,"onUpdate:url":l[0]||(l[0]=o=>s.value=o),flag:i.value},null,8,["url","flag"])]),_:1})])}}});export{G as __pageData,K as default};
