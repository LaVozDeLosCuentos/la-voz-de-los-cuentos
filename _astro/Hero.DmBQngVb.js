import{u as i}from"./useStories.BBtKqVbg.js";import{u as _}from"./stories.DX8l9Rjp.js";import{_ as m,y as p,z as u}from"./_plugin-vue_export-helper.BeEKGKz9.js";/* empty css                       */import{d as f,a as o,e as s,w as d,o as y,b as h,t as g}from"./runtime-dom.esm-bundler.CLHyqRja.js";import"./sagas.CvFQ12-u.js";const x={__name:"Hero",setup(l,{expose:a}){a();const{getLastStory:t}=i(),e=t(),{firstParagraph:r}=_(t()),c=r(),n={getLastStory:t,story:e,firstParagraph:r,first:c,get useStories(){return i},get useStory(){return _},get VImage(){return p},get VText(){return u}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},S={class:"card-hero"},V={class:"card-hero__content"},v=["href"],T=["innerHTML"];function b(l,a,t,e,r,c){return y(),f("article",S,[o(e.VImage,{aspectRatio:"16/9",src:`/assets/stories/${e.story.key}.png`},null,8,["src"]),s("div",V,[s("a",{class:"card-hero__article",href:`/cuento/${e.story.key}/`},[o(e.VText,{class:"card-hero__title",variant:"header",color:"primary"},{default:d(()=>[h(g(e.story.name),1)]),_:1}),o(e.VText,{"max-lines":"3",variant:"body"},{default:d(()=>[s("div",{innerHTML:e.first},null,8,T)]),_:1})],8,v)])])}const w=m(x,[["render",b],["__scopeId","data-v-33c46b47"]]);export{w as default};