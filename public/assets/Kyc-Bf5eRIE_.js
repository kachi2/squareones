import{S as y}from"./StartCompany_template-BXKQFuQL.js";import{u as _}from"./StartCompany_store-6JGRcU_A.js";import{d as f,L as h,a as b,r,k as C,p as k,o as a,q as g,s as i,c as l,b as e}from"./index-d_WrL_zj.js";import{a as v}from"./index-D_5T071w.js";import"./index-Bds7A4M-.js";import"./vee-validate.esm-DkCODyNc.js";import"./index.esm-DVUOn8d9.js";const w={key:0,class:"row justify-content-center"},S=e("div",{id:"complycube-mount"},null,-1),x=e("div",{class:"alert alert-success text-center",role:"alert"},[e("i",{style:{"font-size":"2.56rem"},class:"bi bi-check-circle"}),e("h5",null," KYC Document Submitted"),e("small",null," Verification status will be updated once completed ")],-1),K={key:1,class:"row justify-content-center"},P=e("div",{id:"complycube-mount"},null,-1),T=e("div",{class:"alert alert-success text-center",role:"alert"},[e("i",{style:{"font-size":"2.56rem"},class:"bi bi-check-circle"}),e("h5",null," Payment Successful "),e("p",null,"We are receiving your request, please exercise patience while we setup your company"),e("p",null," Please click the button below to complete your KYC, ensure the details are correct")],-1),j=f({__name:"Kyc",setup(q){const n=_(),u=h(),m=b(),s=r(!1),c=r("");C(async()=>{await n.getCompanyInProgress(),n.companyInProgress.users.kyc_status!=null&&(s.value=!0);try{const t=u.query;let o=await v.paymentConfirm(t)}catch{}c.value=n.companyInProgress.users.user_token}),k({name:"Square One Limited",company_reg_no:"68891673",country_registered:"Hong Kong",licence_no:"TC000012",flat:"Rooms 502-503, 5th Floor",building:"Wanchai Commercial Centre",street:"194-204 Johnston Road",postal_code:"",country:"Hong Kong",state:"Wanchai",city:"Wanchai"});function p(){m.push({path:"/user/dashboard"})}function d(){const t=ComplyCube.mount({containerId:"complycube-mount",token:c.value,onComplete:function(o){setTimeout(()=>{t.unmount(),s.value=!0},3e3)},onModalClose:function(){t.unmount()},onError:function(o){o.type}})}return(t,o)=>(a(),g(y,null,{main:i(()=>[s.value?(a(),l("div",w,[S,x,e("button",{class:"btn btn-primary w-50",onClick:p}," Proceed To Dashboard ")])):(a(),l("div",K,[P,T,e("button",{class:"btn btn-primary",onClick:d}," Proceed to complete KYC ")]))]),info:i(()=>[]),_:1}))}});export{j as default};
