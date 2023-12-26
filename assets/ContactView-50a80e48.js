import{e as w,f as u,o as b,c as h,d,u as _,M as v,g as j,y as T,w as q,b as F,h as I,i as M,S as N,_ as g,a as f,F as L,p as P,j as D}from"./index-c85a9b83.js";const p={_origin:"https://api.emailjs.com"},J=(t,e="https://api.emailjs.com")=>{p._userID=t,p._origin=e},y=(t,e,s)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class V{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const C=(t,e,s={})=>new Promise((r,o)=>{const n=new XMLHttpRequest;n.addEventListener("load",({target:a})=>{const m=new V(a);m.status===200||m.text==="OK"?r(m):o(m)}),n.addEventListener("error",({target:a})=>{o(new V(a))}),n.open("POST",p._origin+t,!0),Object.keys(s).forEach(a=>{n.setRequestHeader(a,s[a])}),n.send(e)}),H=(t,e,s,r)=>{const o=r||p._userID;return y(o,t,e),C("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:t,template_id:e,template_params:s}),{"Content-type":"application/json"})},O=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},z=(t,e,s,r)=>{const o=r||p._userID,n=O(s);y(o,t,e);const a=new FormData(n);return a.append("lib_version","3.11.0"),a.append("service_id",t),a.append("template_id",e),a.append("user_id",o),C("/api/v1.0/email/send-form",a)},B={init:J,send:H,sendForm:z},$=["onSubmit"],A=w({__name:"ContactForm",setup(t){const e=u(""),s=u(""),r=u(""),o=u(""),n=u(),a=u(),m=i=>{n.value=i},x=()=>{console.log("Error callback")},E=()=>{console.log("Expired callback")},S=i=>{a.value=i},k=async()=>{try{const{handleReset:i}=N(),l={to_name:"Juan",from_name:e.value,from_email:s.value,subject:r.value,message:o.value,"g-recaptcha-response":a.value},c=await B.send("service_gdszpy1","template_czq9b2t",l,"HijV1CR_uVeS_0V-8");console.log("Email sent successfully:",c),e.value="",s.value="",r.value="",o.value="",i(n.value)}catch(i){console.error("Error sending email:",i),alert("Please complete the reCAPTCHA.")}};return(i,l)=>(b(),h("form",{class:"contact-form",onSubmit:M(k,["prevent"])},[d(_(v),{type:"text",label:"Name",id:"form4Name",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=c=>e.value=c),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),d(_(v),{type:"email",label:"Email address",id:"form4Email",modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=c=>s.value=c),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),d(_(v),{label:"Subject",id:"form4Subject",modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=c=>r.value=c),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),d(_(j),{label:"Message",id:"form4Textarea",modelValue:o.value,"onUpdate:modelValue":l[3]||(l[3]=c=>o.value=c),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),d(_(T),{onWidgetId:m,onErrorCallback:x,onExpiredCallback:E,onLoadCallback:S}),d(_(I),{block:"",class:"mt-4 mb-4",type:"submit"},{default:q(()=>[F(" Send ")]),_:1})],40,$))}});const R=g(A,[["__scopeId","data-v-7292fc43"]]);const U={},W={class:"divider"};function K(t,e){return b(),h("div",W)}const X=g(U,[["render",K],["__scopeId","data-v-0167b6fe"]]),Z=t=>(P("data-v-999a2878"),t=t(),D(),t),G={class:"contact-container bg-image",style:{"background-image":"url('https://lh3.googleusercontent.com/pw/ABLVV86LrHCzE-2Ez_hAd_vFqibJzUA_9sPrge0jW0fzFss5sOVlEZBchM314-9JKpMN84uy-RVJfdKCahcaSsJ-M48tdOh5qg_bT_bwP6fTgxNJL5e20i0=w2400')"}},Q={class:"mask",style:{background:"var(--bottom-fade)"}},Y={class:"contact d-flex justify-content-center align-items-center flex-column"},ee=Z(()=>f("h1",{class:"mt-3",style:{color:"var(--accent-one)"}},"Contact Me",-1)),te=w({__name:"ContactView",setup(t){return(e,s)=>(b(),h(L,null,[f("div",G,[f("div",Q,[f("div",Y,[ee,d(R)])])]),d(X)],64))}});const se=g(te,[["__scopeId","data-v-999a2878"]]);export{se as default};
