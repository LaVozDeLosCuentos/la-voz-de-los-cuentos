import{B as p}from"./Basic.Dgd9NKGS.js";import{u as n}from"./useStories.DG5MT7y7.js";/* empty css                       */import{_ as m}from"./_plugin-vue_export-helper.agOY0d8_.js";import{c,F as l,r as u,o,a as d}from"./runtime-dom.esm-bundler.DxFkPoBT.js";import"./index.Dno5OIXc.js";/* empty css                           */const f={__name:"News",setup(_,{expose:a}){a();const{getLastNStories:s}=n(),e=s(11).reverse(),i=e.slice(1,e.length),r={getLastNStories:s,_stories:e,stories:i,BasicCard:p,get useStories(){return n}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},g={class:"sections-new"};function k(_,a,s,e,i,r){return o(),c("div",g,[(o(!0),c(l,null,u(e.stories,t=>(o(),d(e.BasicCard,{slug:t.key,key:t.key,title:t.name,time:parseInt(t.time),isStory:""},null,8,["slug","title","time"]))),128))])}const b=m(f,[["render",k],["__scopeId","data-v-4e15f895"]]);export{b as default};
