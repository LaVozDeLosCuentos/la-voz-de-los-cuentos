import{B as p}from"./Basic.Dj_XSmKk.js";import{u as a}from"./useStories.Dsw-fZ-h.js";/* empty css                       */import{_ as m}from"./index-CTPMvAAz.DQ1hVuj_.js";import{f as c,F as l,j as u,o,c as d}from"./runtime-dom.esm-bundler.BPZR5SMm.js";import"./stories.DFvJuHsz.js";import"./sagas.CvFQ12-u.js";/* empty css                         */const f={__name:"News",setup(_,{expose:i}){i();const{getLastNStories:s}=a(),e=s(11).reverse(),n=e.slice(1,e.length),r={getLastNStories:s,_stories:e,stories:n,BasicCard:p,get useStories(){return a}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},g={class:"sections-new"};function k(_,i,s,e,n,r){return o(),c("div",g,[(o(!0),c(l,null,u(e.stories,t=>(o(),d(e.BasicCard,{slug:t.key,key:t.key,title:t.name,time:parseInt(t.time),isStory:""},null,8,["slug","title","time"]))),128))])}const j=m(f,[["render",k],["__scopeId","data-v-41b95c38"]]);export{j as default};
