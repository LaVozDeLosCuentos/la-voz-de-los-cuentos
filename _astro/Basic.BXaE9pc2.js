import{_ as u,y as f,z as g}from"./_plugin-vue_export-helper.BeEKGKz9.js";import{u as o}from"./stories.DX8l9Rjp.js";/* empty css                         */import{o as n,d as y,e as s,a as d,w as _,b as l,t as m,c as p,f as b}from"./runtime-dom.esm-bundler.CLHyqRja.js";const x={__name:"Basic",props:{title:{type:String,default:""},slug:{type:String,default:""},time:{type:Number,default:0},isStory:{type:Boolean,default:!0}},setup(r,{expose:c}){c();const e=r,{getTime:t}=o({time:e.time}),i=t(),a={props:e,getTime:t,renderedTime:i,get VImage(){return f},get VText(){return g},get useStory(){return o}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},S=["href"],h={class:"basic-card__image"},V={class:"basic-card__content"},B={class:"basic-card__article"};function v(r,c,e,t,i,a){return n(),y("a",{class:"basic-card",href:`/${e.isStory?"cuento":"saga"}/${e.slug}/`},[s("div",h,[d(t.VImage,{aspectRatio:"1/1",src:`/assets/${e.isStory?"stories":"sagas"}/${e.slug}.png`,loading:"eager"},null,8,["src"])]),s("div",V,[s("div",B,[d(t.VText,{class:"basic-card__title",variant:"header",color:"primary",maxLines:"2"},{default:_(()=>[l(m(e.title),1)]),_:1})])]),e.time?(n(),p(t.VText,{key:0,variant:"body",class:"basic-card__time"},{default:_(()=>[l(m(t.renderedTime),1)]),_:1})):b("",!0)],8,S)}const I=u(x,[["render",v],["__scopeId","data-v-8cd7aa7d"]]);export{I as B};