import{_ as c,z as f,a as d}from"./index-CTPMvAAz.DQ1hVuj_.js";import{S as p}from"./Spotify.dVpnXeL4.js";/* empty css                      */import{r as n,c as o,w as r,o as l,a as i,b as u,t as m,d as w,e as x}from"./runtime-dom.esm-bundler.BPZR5SMm.js";/* empty css                      */const y={__name:"NewsLetterPage",props:{newsletter:{type:Object,default:{}}},setup(_,{expose:s}){s();const e=n(!1),a={iframe:e,iframeLoaded:()=>{e.value=!0},get VText(){return f},get VContainer(){return d},Spotify:p,ref:n};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},V=["innerHTML"];function g(_,s,e,t,a,h){return l(),o(t.VContainer,{size:"xl",class:"newsletter-page"},{default:r(()=>[i(t.VText,{class:"newsletter-page__title",as:"h1"},{default:r(()=>[u(m(e.newsletter.title),1)]),_:1}),e.newsletter.spotify?(l(),o(t.Spotify,{key:0,spotify:e.newsletter.spotify},null,8,["spotify"])):w("",!0),i(t.VText,null,{default:r(()=>[x("div",{class:"newsletter-page__html",innerHTML:e.newsletter.html},null,8,V)]),_:1})]),_:1})}const v=c(y,[["render",g],["__scopeId","data-v-705fce44"]]);export{v as default};