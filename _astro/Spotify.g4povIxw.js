/* empty css                      */import{_ as p}from"./_plugin-vue_export-helper.41V5Xjgf.js";import{r as a,o as i,f as r,e as f,n,d as _}from"./runtime-dom.esm-bundler.C4veuAXy.js";const l={__name:"Spotify",props:{spotify:{type:String,default:""}},setup(c,{expose:t}){t();const o="lavozdeloscuentos",e=a(!1),s={spotifyID:o,iframe:e,iframeLoaded:()=>{e.value=!0},ref:a};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},m={key:0,class:"spotify"},y=["src"],u={key:0,class:"spotify__loading"};function v(c,t,o,e,d,s){return o.spotify?(i(),r("div",m,[f("iframe",{class:n(["spotify__iframe",{"spotify__iframe--active":e.iframe}]),title:"Spotify Audio Player",frameborder:"0",scrolling:"no",loading:"lazy",onLoad:e.iframeLoaded,src:`https://podcasters.spotify.com/pod/show/${e.spotifyID}/embed/episodes/${o.spotify}`},null,42,y),e.iframe?_("",!0):(i(),r("div",u)),f("div",{class:n([{"spotify__mask--animation":e.iframe},"spotify__mask"])},null,2)])):_("",!0)}const b=p(l,[["render",v]]);export{b as S};
