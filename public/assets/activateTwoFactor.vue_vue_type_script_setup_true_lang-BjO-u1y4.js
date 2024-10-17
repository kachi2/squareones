import{d as p,k as _,p as m,o as n,c as r,f as i,b as t,t as b,w as g,v,g as h,J as y}from"./index-BWRL7qZA.js";import{a as c}from"./index-BdVXxnfr.js";const w={clas:"fw-bold bg-danger"},T=t("br",null,null,-1),V=["innerHTML"],F=t("br",null,null,-1),S=t("br",null,null,-1),A=t("br",null,null,-1),x={class:"form-group mb-3"},I=t("label",{for:"secret",class:"control-label"},"Authenticator Code",-1),M={key:0,class:"small text-danger"},k=["disabled"],B=p({__name:"activateTwoFactor",emits:["verified"],setup(C,{emit:l}){_(()=>{u()});const d=l,e=m({barcode:"",google2fa_secret:"",inputSecret:"",isVerifying:!1,isEnabled:!1,isActivated:!1,codeInvalid:!1});async function u(){try{const a=(await c.activateTwoFactor()).data[0];e.barcode=a.barcode,e.google2fa_secret=a.google2fa_secret}catch(o){console.log(o)}}async function f(){try{e.isVerifying=!0,e.codeInvalid=!1;const o=new FormData;o.append("secret",e.inputSecret);const a=await c.verifyTwoFactor(o);e.inputSecret="",d("verified"),e.isVerifying=!1}catch(o){if(console.log(o),o.response){e.codeInvalid=!0;return}e.isVerifying=!1}}return(o,a)=>(n(),r("div",null,[i(" 1. Scan this QR code with your Google Authenticator App. Alternatively, you can use the code: "),t("code",w,b(e.google2fa_secret),1),T,t("span",{innerHTML:e.barcode},null,8,V),F,i(" 2. Enter the pin from Google Authenticator app:"),S,A,t("form",{class:"form-horizontal",onSubmit:a[1]||(a[1]=y(s=>f(),["prevent"]))},[t("div",x,[I,g(t("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>e.inputSecret=s),id:"secret",type:"password",class:"form-control col-md-4"},null,512),[[v,e.inputSecret]])]),e.codeInvalid?(n(),r("span",M,"Invalid Code")):h("",!0),t("button",{disabled:e.isVerifying,type:"submit",class:"btn btn-primary w-100"}," Enable 2FA ",8,k)],32)]))}});export{B as _};