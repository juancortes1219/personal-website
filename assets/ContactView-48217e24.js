import{e as w,f as m,g as T,o as f,c as v,d,u as _,M as h,h as x,i as I,w as M,b as P,j,k as F,p as y,l as V,a as u,_ as b,F as H}from"./index-2b8642d5.js";const p={_origin:"https://api.emailjs.com"},q=(t,e="https://api.emailjs.com")=>{p._userID=t,p._origin=e},E=(t,e,o)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class g{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const S=(t,e,o={})=>new Promise((i,n)=>{const c=new XMLHttpRequest;c.addEventListener("load",({target:r})=>{const s=new g(r);s.status===200||s.text==="OK"?i(s):n(s)}),c.addEventListener("error",({target:r})=>{n(new g(r))}),c.open("POST",p._origin+t,!0),Object.keys(o).forEach(r=>{c.setRequestHeader(r,o[r])}),c.send(e)}),J=(t,e,o,i)=>{const n=i||p._userID;return E(n,t,e),S("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:n,service_id:t,template_id:e,template_params:o}),{"Content-type":"application/json"})},L=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},N=(t,e,o,i)=>{const n=i||p._userID,c=L(o);E(n,t,e);const r=new FormData(c);return r.append("lib_version","3.11.0"),r.append("service_id",t),r.append("template_id",e),r.append("user_id",n),S("/api/v1.0/email/send-form",r)},D={init:q,send:J,sendForm:N},A=t=>(y("data-v-6d08b41d"),t=t(),V(),t),$=["onSubmit"],k={key:0},z=A(()=>u("p",{class:"recaptcha-fail"},"reCAPTCHA verification failed. Please ensure you are not a bot.",-1)),O=[z],U=A(()=>u("div",{id:"recaptcha-placeholder"},null,-1)),C="6LefgTspAAAAAP-MMSKwQJipzhr_dEdtJTzaAHUm",B="service_gdszpy1",R="template_czq9b2t",K="HijV1CR_uVeS_0V-8",X=w({__name:"ContactForm",setup(t){const e=m(""),o=m(""),i=m(""),n=m(""),c=m(!1);T(()=>{try{const s=document.createElement("script");s.src=`https://www.google.com/recaptcha/api.js?render=${C}`,s.async=!0,s.defer=!0,s.onload=()=>{grecaptcha.ready(()=>{grecaptcha.execute(C,{action:"homepage"}).then(a=>{console.log("reCAPTCHA Response:",a),c.value=a.score>.5}).catch(a=>{console.error("Error fetching reCAPTCHA response:",a)})})},document.head.appendChild(s)}catch(s){console.error("Error loading reCAPTCHA script:",s)}});const r=async()=>{if(c.value)try{const s={to_name:"Juan",from_name:e.value,from_email:o.value,subject:i.value,message:n.value},a=await D.send(B,R,s,K);console.log("Email sent successfully:",a),e.value="",o.value="",i.value="",n.value=""}catch(s){console.error("Error sending email:",s)}else console.error("reCAPTCHA v3 score is too low. Please verify that you are not a bot.")};return(s,a)=>(f(),v("form",{class:"contact-form",onSubmit:F(r,["prevent"])},[d(_(h),{type:"text",label:"Name",id:"form4Name",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),d(_(h),{type:"email",label:"Email address",id:"form4Email",modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=l=>o.value=l),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),d(_(h),{label:"Subject",id:"form4Subject",modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=l=>i.value=l),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),d(_(x),{label:"Message",id:"form4Textarea",modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]=l=>n.value=l),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),c.value?I("",!0):(f(),v("div",k,O)),U,d(_(j),{block:"",class:"mb-4",type:"submit",disabled:!c.value},{default:M(()=>[P(" Send ")]),_:1},8,["disabled"])],40,$))}});const Q=b(X,[["__scopeId","data-v-6d08b41d"]]);const W={},Y={class:"divider"};function Z(t,e){return f(),v("div",Y)}const G=b(W,[["render",Z],["__scopeId","data-v-0167b6fe"]]),ee=t=>(y("data-v-999a2878"),t=t(),V(),t),te={class:"contact-container bg-image",style:{"background-image":"url('https://lh3.googleusercontent.com/pw/ABLVV86LrHCzE-2Ez_hAd_vFqibJzUA_9sPrge0jW0fzFss5sOVlEZBchM314-9JKpMN84uy-RVJfdKCahcaSsJ-M48tdOh5qg_bT_bwP6fTgxNJL5e20i0=w2400')"}},se={class:"mask",style:{background:"var(--bottom-fade)"}},ae={class:"contact d-flex justify-content-center align-items-center flex-column"},oe=ee(()=>u("h1",{class:"mt-3",style:{color:"var(--accent-one)"}},"Contact Me",-1)),re=w({__name:"ContactView",setup(t){return(e,o)=>(f(),v(H,null,[u("div",te,[u("div",se,[u("div",ae,[oe,d(Q)])])]),d(G)],64))}});const ce=b(re,[["__scopeId","data-v-999a2878"]]);export{ce as default};
