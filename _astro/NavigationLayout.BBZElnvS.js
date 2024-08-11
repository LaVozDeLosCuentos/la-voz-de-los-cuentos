import{_ as g,y as L,R as S,T as M,U as x,z as C,E as I,V as E,A as N,a as z,F,M as T,w as P,D}from"./_plugin-vue_export-helper.C5XeIz0c.js";/* empty css                      */import{o as d,c as f,w as a,a as s,u as b,r as _,k,f as h,F as B,j as O,b as o,t as j,e as t,O as U,d as m,n as V,T as A,p as G,i as R}from"./runtime-dom.esm-bundler.BPZR5SMm.js";const W={__name:"MenuContainer",setup(r,{expose:i}){i();const n={get VImage(){return L},get VNavigation(){return S}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function X(r,i,n,e,l,c){return d(),f(e.VNavigation,{class:"navigation"},{header:a(()=>[s(e.VImage,{src:"/assets/hero/title.png",aspectRatio:"1/1",loading:"lazy",alt:"Logo"})]),footer:a(()=>[s(e.VImage,{src:"/assets/hero/owl-layer.png",loading:"lazy",alt:"Logo"})]),default:a(()=>[b(r.$slots,"default",{},void 0,!0)]),_:3})}const Y=g(W,[["render",X],["__scopeId","data-v-81bf4f8c"]]),J={__name:"Menu",setup(r,{expose:i}){i();const n=_([{label:"Inicio",link:"/"},{label:"Cuentos",link:"/cuentos/"},{label:"Sagas",link:"/sagas/"},{label:"Cuento Personalizado",link:"/personalizado/cuento/"},{label:"NewsLetter",link:"/newsletters/"}]);k(()=>{const l=window.location.pathname;n.value=n.value.map(c=>l===c.link?{...c,active:!0}:c)});const e={menu:n,get VMenu(){return M},get VMenuItem(){return x},ref:_,onMounted:k};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function q(r,i,n,e,l,c){return d(),f(e.VMenu,{class:"menu"},{default:a(()=>[(d(!0),h(B,null,O(e.menu,u=>(d(),f(e.VMenuItem,{active:u.active,href:u.link},{default:a(()=>[o(j(u.label),1)]),_:2},1032,["active","href"]))),256))]),_:1})}const H=g(J,[["render",q]]),K={__name:"Footer",setup(r,{expose:i}){i();const n=_(""),e=_(!1),l=_(!1),c=_(!1),u=_(!1);function w(){const v=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;c.value=v.test(String(n.value).toLowerCase()),e.value=!c.value}async function y(){if(c.value){u.value=!0,e.value=!1,l.value=!1;try{(await(await fetch("https://script.google.com/macros/s/AKfycbxzhVGv1wPrLwYU9Inq0Pbx9Bm76LBl8RX9oyWSdaEcaCWyschEyNgJbMNS8XUYj7Pi/exec",{method:"POST",body:JSON.stringify({email:n.value}),headers:{"Content-Type":"text/plain;charset=utf-8"}})).json()).result==="success"?(l.value=!0,n.value=""):e.value=!0}catch(v){console.error("Error:",v),e.value=!0}finally{u.value=!1}}}const p={email:n,emailError:e,successMessage:l,isEmailValid:c,isSubmitting:u,validateEmail:w,submitForm:y,ref:_,get VText(){return C},get VLink(){return I},get VDivider(){return E},get VInput(){return N},get VContainer(){return z},get VFieldLabel(){return F},get VFieldHelp(){return T},get VField(){return P},get VButton(){return D}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}},Q={class:"footer"},Z={class:"footer-header"},$={class:"footer-newsletter__content"},ee={class:"footer-wrapper"},ae={class:"footer-links"},te={class:"footer-links"},se={class:"footer-links"},oe={class:"footer-wrapper"},ne={class:"footer-links"},re={class:"footer-links"},ie={class:"footer-links__element"},le={class:"footer-links__element"},ce={class:"footer-links__element"},de={class:"footer-links__element"},_e={class:"footer-links__element"},ue={class:"footer-links"};function fe(r,i,n,e,l,c){return d(),h("div",Q,[t("div",Z,[s(e.VText,{class:"footer-title",variant:"header",as:"h3"},{default:a(()=>[o("La Voz De Los Cuentos")]),_:1})]),s(e.VDivider,{class:"footer-divider"},{default:a(()=>[o("NewsLetter Mensual")]),_:1}),s(e.VContainer,{size:"xs",class:"footer-newsletter"},{default:a(()=>[t("div",$,[s(e.VField,null,U({message:a(()=>[e.successMessage?(d(),f(e.VText,{key:0},{default:a(()=>[o("¡Gracias por la suscripción!")]),_:1})):m("",!0),e.emailError?(d(),f(e.VText,{key:1},{default:a(()=>[o("Correo no válido")]),_:1})):m("",!0)]),default:a(()=>[e.successMessage?m("",!0):(d(),f(e.VInput,{key:0,"aria-label":"Input Email de Newsletter",type:"email",name:"email",modelValue:e.email,"onUpdate:modelValue":i[0]||(i[0]=u=>e.email=u),invalid:e.emailError,onInput:e.validateEmail},null,8,["modelValue","invalid"])),e.successMessage?m("",!0):(d(),f(e.VButton,{key:1,color:"primary",disabled:!e.isEmailValid||e.isSubmitting,onClick:e.submitForm},{default:a(()=>[o(" Suscribirse ")]),_:1},8,["disabled"]))]),_:2},[e.successMessage?void 0:{name:"label",fn:a(()=>[s(e.VFieldLabel,{for:"email"},{default:a(()=>[o("Email:")]),_:1})]),key:"0"}]),1024)])]),_:1}),t("div",ee,[t("div",ae,[s(e.VDivider,null,{default:a(()=>[o("Sagas")]),_:1})]),t("div",te,[s(e.VDivider,null,{default:a(()=>[o("Nuestra Comunidades")]),_:1})]),t("div",se,[s(e.VDivider,null,{default:a(()=>[o("Interés")]),_:1})])]),t("div",oe,[t("div",ne,[s(e.VLink,{href:"/saga/la-vida-de-eloy/"},{default:a(()=>[o("La Vida de Eloy")]),_:1}),s(e.VLink,{href:"/saga/sdg/"},{default:a(()=>[o("Sistema de Distribución de Gatos")]),_:1}),s(e.VLink,{href:"/saga/luna-y-la-fisica/"},{default:a(()=>[o("Luna y la ciencia")]),_:1}),s(e.VLink,{href:"/saga/llamarada/"},{default:a(()=>[o("Llamarada en Imaginaria")]),_:1})]),t("div",re,[t("div",ie,[s(e.VLink,{href:"https://www.youtube.com/@LaVozDeLosCuentos"},{default:a(()=>[o("Youtube")]),_:1})]),t("div",le,[s(e.VLink,{href:"https://open.spotify.com/show/2fmWlaQNGSEcE7IX5Ir06z"},{default:a(()=>[o("Spotify")]),_:1})]),t("div",ce,[s(e.VLink,{href:"https://www.tiktok.com/@lavozdetuscuentos"},{default:a(()=>[o("TikTok")]),_:1})]),t("div",de,[s(e.VLink,{href:"https://www.instagram.com/lavozdetuscuentos/"},{default:a(()=>[o("Instagram")]),_:1})]),t("div",_e,[s(e.VLink,{href:"https://www.facebook.com/AudioCuentosParaTodos"},{default:a(()=>[o("Facebook")]),_:1})])]),t("div",ue,[s(e.VLink,{href:"/personalizado/cuento/"},{default:a(()=>[o("Cuento Personalizado")]),_:1}),s(e.VLink,{href:"/newsletters/"},{default:a(()=>[o("Pasadas NewsLetters")]),_:1})])])])}const ve=g(K,[["render",fe],["__scopeId","data-v-5fc1d47b"]]),me={__name:"NavigationLayout",setup(r,{expose:i}){i();const n=_(!1),l={isOpen:n,toggle:()=>{n.value=!n.value},ref:_,MenuContainer:Y,Menu:H,Footer:ve};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},ge=r=>(G("data-v-031ca080"),r=r(),R(),r),he={class:"navigation-layout"},pe=ge(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25px",viewBox:"0 0 24 24",fill:"none"},[t("path",{d:"M20 7L4 7",stroke:"black","stroke-width":"1.5","stroke-linecap":"round"}),t("path",{d:"M20 12L4 12",stroke:"black","stroke-width":"1.5","stroke-linecap":"round"}),t("path",{d:"M20 17L4 17",stroke:"black","stroke-width":"1.5","stroke-linecap":"round"})],-1)),ke=[pe],Ve={class:"navigation-layout__inner"},be={class:"navigation-layout__content"};function we(r,i,n,e,l,c){return d(),h("div",he,[t("div",{class:"navigation-layout__mobile"},[t("button",{class:"navigation-layout__btn",onClick:e.toggle,"aria-label":"Boton para abrir menú"},ke)]),t("div",{class:V(["navigation-layout__nav",{"navigation-layout__nav--open":e.isOpen}])},[t("div",Ve,[s(e.MenuContainer,null,{default:a(()=>[s(e.Menu)]),_:1})])],2),t("div",be,[b(r.$slots,"default",{},void 0,!0),s(e.Footer)]),(d(),f(A,{to:"body"},[t("div",{class:V(["navigation-layout__backdrop",{"navigation-layout__backdrop--visible":e.isOpen}]),onClick:e.toggle},null,2)]))])}const xe=g(me,[["render",we],["__scopeId","data-v-031ca080"]]);export{xe as default};