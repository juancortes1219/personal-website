import{e as V,f as u,o as f,c as v,d as c,u as d,M as p,g as y,w as x,b as S,h as C,i as j,_ as b,a as _,F as E,p as q,j as F}from"./index-6bd5a971.js";const m={_origin:"https://api.emailjs.com"},T=(t,e="https://api.emailjs.com")=>{m._userID=t,m._origin=e},g=(t,e,o)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class h{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const w=(t,e,o={})=>new Promise((n,r)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:s})=>{const a=new h(s);a.status===200||a.text==="OK"?n(a):r(a)}),i.addEventListener("error",({target:s})=>{r(new h(s))}),i.open("POST",m._origin+t,!0),Object.keys(o).forEach(s=>{i.setRequestHeader(s,o[s])}),i.send(e)}),M=(t,e,o,n)=>{const r=n||m._userID;return g(r,t,e),w("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:r,service_id:t,template_id:e,template_params:o}),{"Content-type":"application/json"})},N=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},I=(t,e,o,n)=>{const r=n||m._userID,i=N(o);g(r,t,e);const s=new FormData(i);return s.append("lib_version","3.11.0"),s.append("service_id",t),s.append("template_id",e),s.append("user_id",r),w("/api/v1.0/email/send-form",s)},k={init:T,send:M,sendForm:I},D=["onSubmit"],J=V({__name:"ContactForm",setup(t){const e=u(""),o=u(""),n=u(""),r=u(""),i=async()=>{try{const s={to_name:"Juan",from_name:e.value,from_email:o.value,subject:n.value,message:r.value},a=await k.send("service_gdszpy1","template_czq9b2t",s,"HijV1CR_uVeS_0V-8");console.log("Email sent successfully:",a),e.value="",o.value="",n.value="",r.value=""}catch(s){console.error("Error sending email:",s)}};return(s,a)=>(f(),v("form",{class:"contact-form",onSubmit:j(i,["prevent"])},[c(d(p),{type:"text",label:"Name",id:"form4Name",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),c(d(p),{type:"email",label:"Email address",id:"form4Email",modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=l=>o.value=l),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),c(d(p),{label:"Subject",id:"form4Subject",modelValue:n.value,"onUpdate:modelValue":a[2]||(a[2]=l=>n.value=l),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),c(d(y),{label:"Message",id:"form4Textarea",modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=l=>r.value=l),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),c(d(C),{block:"",class:"mb-4",type:"submit"},{default:x(()=>[S(" Send ")]),_:1})],40,D))}});const L=b(J,[["__scopeId","data-v-e44ad7e3"]]);const O={},P={class:"divider"};function z(t,e){return f(),v("div",P)}const B=b(O,[["render",z],["__scopeId","data-v-0167b6fe"]]),H=t=>(q("data-v-999a2878"),t=t(),F(),t),$={class:"contact-container bg-image",style:{"background-image":"url('https://lh3.googleusercontent.com/pw/ABLVV86LrHCzE-2Ez_hAd_vFqibJzUA_9sPrge0jW0fzFss5sOVlEZBchM314-9JKpMN84uy-RVJfdKCahcaSsJ-M48tdOh5qg_bT_bwP6fTgxNJL5e20i0=w2400')"}},U={class:"mask",style:{background:"var(--bottom-fade)"}},A={class:"contact d-flex justify-content-center align-items-center flex-column"},K=H(()=>_("h1",{class:"mt-3",style:{color:"var(--accent-one)"}},"Contact Me",-1)),R=V({__name:"ContactView",setup(t){return(e,o)=>(f(),v(E,null,[_("div",$,[_("div",U,[_("div",A,[K,c(L)])])]),c(B)],64))}});const W=b(R,[["__scopeId","data-v-999a2878"]]);export{W as default};