import{k as y,o as h,c as v,d as V,A as d,u as p,a as m,b as u,bQ as b,bR as N,bS as L,w as P,g,x as $,bK as D,bT as O,p as k,j as I,B,D as J,F as H}from"./index-608ea326.js";const R={},A={class:"divider"};function U(t,e){return h(),v("div",A)}const K=y(R,[["render",U],["__scopeId","data-v-0167b6fe"]]),f={_origin:"https://api.emailjs.com"},W=(t,e="https://api.emailjs.com")=>{f._userID=t,f._origin=e},S=(t,e,s)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class w{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const E=(t,e,s={})=>new Promise((r,o)=>{const n=new XMLHttpRequest;n.addEventListener("load",({target:a})=>{const _=new w(a);_.status===200||_.text==="OK"?r(_):o(_)}),n.addEventListener("error",({target:a})=>{o(new w(a))}),n.open("POST",f._origin+t,!0),Object.keys(s).forEach(a=>{n.setRequestHeader(a,s[a])}),n.send(e)}),X=(t,e,s,r)=>{const o=r||f._userID;return S(o,t,e),E("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:t,template_id:e,template_params:s}),{"Content-type":"application/json"})},Q=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},Y=(t,e,s,r)=>{const o=r||f._userID,n=Q(s);S(o,t,e);const a=new FormData(n);return a.append("lib_version","3.11.0"),a.append("service_id",t),a.append("template_id",e),a.append("user_id",o),E("/api/v1.0/email/send-form",a)},Z={init:W,send:X,sendForm:Y},j=t=>(k("data-v-4f98dc52"),t=t(),I(),t),G={key:0,class:"d-flex justify-content-center align-items-center"},ee=["onSubmit"],te={key:1,class:"d-flex justify-content-center align-items-center flex-column text-center p-3"},ae=j(()=>m("h3",null,"Your message was sent successfully!",-1)),se=j(()=>m("p",null,[g("Thank you for contacting me."),m("br"),g("I'll get back to you, as soon as I can.")],-1)),oe=[ae,se],ne=V({__name:"ContactForm",setup(t){let e=!0;const s=d(""),r=d(""),o=d(""),n=d(""),a=d(),_=d(),T=i=>{a.value=i},q=()=>{console.log("Error callback")},F=()=>{console.log("Expired callback")},M=i=>{_.value=i},z=async()=>{try{const{handleReset:i}=O(),l={to_name:"Juan",from_name:s.value,from_email:r.value,subject:o.value,message:n.value,"g-recaptcha-response":_.value},c=await Z.send("service_gdszpy1","template_czq9b2t",l,"HijV1CR_uVeS_0V-8");console.log("Email sent successfully:",c),s.value="",r.value="",o.value="",n.value="",i(a.value),e=!1}catch(i){console.error("Error sending email:",i),alert(`There was an error.
Please complete the reCAPTCHA. OR Please refresh the page.`)}};return(i,l)=>p(e)===!0?(h(),v("div",G,[m("form",{class:"contact-form",onSubmit:D(z,["prevent"])},[u(p(b),{type:"text",label:"Name",id:"form4Name",modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),u(p(b),{type:"email",label:"Email address",id:"form4Email",modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=c=>r.value=c),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),u(p(b),{label:"Subject",id:"form4Subject",modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=c=>o.value=c),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),u(p(N),{label:"Message",id:"form4Textarea",modelValue:n.value,"onUpdate:modelValue":l[3]||(l[3]=c=>n.value=c),wrapperClass:"mb-4",required:""},null,8,["modelValue"]),u(p(L),{onWidgetId:T,onErrorCallback:q,onExpiredCallback:F,onLoadCallback:M}),u(p($),{block:"",class:"mt-4 mb-4",type:"submit"},{default:P(()=>[g(" Send ")]),_:1})],40,ee)])):(h(),v("div",te,oe))}});const re=y(ne,[["__scopeId","data-v-4f98dc52"]]),le=t=>(k("data-v-da625592"),t=t(),I(),t),ce={class:"mask",style:{background:"var(--bottom-fade)"}},ie={class:"contact d-flex justify-content-center align-items-center flex-column"},de=le(()=>m("h1",{class:"mt-3",style:{color:"var(--accent-one)"}},"Contact Me",-1)),x="/images/beach-placeholder.jpg",C="https://lh3.googleusercontent.com/pw/ABLVV86LrHCzE-2Ez_hAd_vFqibJzUA_9sPrge0jW0fzFss5sOVlEZBchM314-9JKpMN84uy-RVJfdKCahcaSsJ-M48tdOh5qg_bT_bwP6fTgxNJL5e20i0=w2400",ue=V({__name:"ContactView",setup(t){const e=d(null),s=d(x);return B(()=>{s.value=x;const r=new Image;r.src=C,r.onload=()=>{s.value=C;const o=new IntersectionObserver(n=>{n.forEach(a=>{a.isIntersecting&&o.disconnect()})},{threshold:0});o.observe(e.value)}}),(r,o)=>{const n=re,a=K;return h(),v(H,null,[m("div",{ref_key:"lazyContainer",ref:e,style:J({backgroundImage:`url(${s.value})`}),class:"contact-container bg-image bg-lazy",title:"Beach and big hill in the background in Izmir, Türkiye."},[m("div",ce,[m("div",ie,[de,u(n)])])],4),u(a)],64)}}});const _e=y(ue,[["__scopeId","data-v-da625592"]]);export{_e as default};
