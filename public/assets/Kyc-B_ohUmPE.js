import{a as y,S as _}from"./StartCompany_template-Dy9f0MIw.js";import{d as f,r,p as h,s as C,x as b,y as l,S as g,j as k,o as n,c as i,a as e}from"./index-BCtUW0zb.js";import{a as v}from"./index-DXb3OOul.js";import"./message-question-CA_-JqIH.js";const S={key:0,class:"row justify-content-center"},w=e("div",{id:"complycube-mount"},null,-1),x=e("div",{class:"alert alert-success text-center",role:"alert"},[e("i",{style:{"font-size":"2.56rem"},class:"bi bi-check-circle"}),e("h5",null," KYC Document Submitted Successfully"),e("small",null," Verification status will be updated once completed ")],-1),K={key:1,class:"row justify-content-center"},P=e("div",{id:"complycube-mount"},null,-1),T=e("div",{class:"alert alert-success text-center",role:"alert"},[e("i",{style:{"font-size":"2.56rem"},class:"bi bi-check-circle"}),e("h5",null," Payment Successful ")],-1),M=f({__name:"Kyc",setup(B){const s=y(),u=g(),m=k(),c=r(!1),a=r("");h(async()=>{await s.getCompanyInProgress();try{const o=u.query;let t=await v.paymentConfirm(o);console.log(t)}catch(o){console.log(o)}a.value=s.companyInProgress.users.user_token}),C({name:"Square One Limited",company_reg_no:"68891673",country_registered:"Hong Kong",licence_no:"TC000012",flat:"Rooms 502-503, 5th Floor",building:"Wanchai Commercial Centre",street:"194-204 Johnston Road",postal_code:"",country:"Hong Kong",state:"Wanchai",city:"Wanchai"});function p(){m.push({path:"/dashboard"})}function d(){console.log("comply");const o=ComplyCube.mount({containerId:"complycube-mount",token:a.value,onComplete:function(t){setTimeout(()=>{o.unmount(),c.value=!0},3e3),console.log("Capture complete",t)},onModalClose:function(){o.unmount()},onError:function(t){t.type==="token_expired"||console.log(t.message)}})}return(o,t)=>(n(),b(_,null,{main:l(()=>[c.value?(n(),i("div",S,[w,x,e("button",{class:"btn btn-primary w-50",onClick:p}," Proceed To Dashboard to Manage Company ")])):(n(),i("div",K,[P,T,e("button",{class:"btn btn-primary",onClick:d}," Proceed to complete KYC ")]))]),info:l(()=>[]),_:1}))}});export{M as default};