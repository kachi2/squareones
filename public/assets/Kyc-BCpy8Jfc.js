import{S as y}from"./StartCompany_template-CvSwq99Q.js";import{u as _}from"./StartCompany_store-Bz61Wck9.js";import{d as f,M as h,a as b,r as c,k as C,p as k,o as r,q as g,s as i,c as l,b as e}from"./index-C0wR_aM1.js";import{a as v}from"./index-Bc27vxtU.js";import"./index-af_oULFB.js";import"./vee-validate.esm-B1piHCuA.js";import"./index.esm-Cbb0974Q.js";import"./StartCompany_jsonData-D7IJQ8VJ.js";import"./country-Dh2q9MdB.js";const w={key:0,class:"row justify-content-center"},S=e("div",{id:"complycube-mount"},null,-1),x=e("div",{class:"alert alert-success text-center",role:"alert"},[e("i",{style:{"font-size":"2.56rem"},class:"bi bi-check-circle"}),e("h5",null," KYC Document Submitted"),e("small",null," Verification status will be updated once completed ")],-1),K={key:1,class:"row justify-content-center"},P=e("div",{id:"complycube-mount"},null,-1),T=e("div",{class:"alert alert-success text-center",role:"alert"},[e("i",{style:{"font-size":"2.56rem"},class:"bi bi-check-circle"}),e("h5",null," Payment Successful "),e("p",null,"We are receiving your request, please exercise patience while we setup your company"),e("p",null," Please click the button below to complete your KYC, ensure the details are correct")],-1),z=f({__name:"Kyc",setup(q){const o=_(),u=h(),m=b(),s=c(!1),a=c("");C(async()=>{await o.getCompanyInProgress(),o.companyInProgress.users.kyc_status!=null&&(s.value=!0);try{const t=u.query;let n=await v.paymentConfirm(t)}catch{}a.value=o.companyInProgress.users.user_token}),k({name:"Square One Limited",company_reg_no:"68891673",country_registered:"Hong Kong",licence_no:"TC000012",flat:"Rooms 502-503, 5th Floor",building:"Wanchai Commercial Centre",street:"194-204 Johnston Road",postal_code:"",country:"Hong Kong",state:"Wanchai",city:"Wanchai"});function p(){m.push({path:"/user/dashboard"}),o.currentStage=2}function d(){const t=ComplyCube.mount({containerId:"complycube-mount",token:a.value,onComplete:function(n){setTimeout(()=>{t.unmount(),s.value=!0},3e3)},onModalClose:function(){t.unmount()},onError:function(n){n.type}})}return(t,n)=>(r(),g(y,null,{main:i(()=>[s.value?(r(),l("div",w,[S,x,e("button",{class:"btn btn-primary w-50",onClick:p}," Proceed To Dashboard ")])):(r(),l("div",K,[P,T,e("button",{class:"btn btn-primary",onClick:d}," Proceed to complete KYC ")]))]),info:i(()=>[]),_:1}))}});export{z as default};
