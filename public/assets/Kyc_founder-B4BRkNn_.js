import{S as T}from"./Kyc_founder.vue_vue_type_style_index_0_lang-DHuEVU5R.js";import{p as R}from"./pageLoadingComponent-Ba9o8xhd.js";import{u as F}from"./StartCompany_store-6JGRcU_A.js";import{a as p}from"./index-D_5T071w.js";import{d as K,r as a,L as N,k as Y,o as l,q as k,s as y,f as r,t as D,b as e,e as O,c as C}from"./index-d_WrL_zj.js";const B=e("i",{class:"bi bi-person-circle"},null,-1),H=e("div",{id:"complycube-mount"},null,-1),A={class:"container"},V={class:"bg-white pb-5"},W={class:"container"},j={class:"row g-3 justify-content-center align-items-center"},q=e("div",{class:"col-md-11"},[e("div",{class:"card bg-transparent border-0"},[e("div",{class:"card-body justify-content-center text-center"},[e("div",{class:"p-3"}),e("div",{class:"row justify-content-center"},[e("div",{class:"col-lg-12 p"},[e("div",{class:"text-muted"}," This Kyc verifications will take approximately 1-5 munites to complete "),e("div",{class:"text-muted mt-2"}," Before you start, please make sure you the documents below ready ")])])])])],-1),L=e("div",{class:"col-md-10"},[e("div",{class:"card border-0 bg-transparent"},[e("div",{class:"card-body"},[e("section",null,[e("div",{class:"text-muted h6"},"ONE OF THIS DOCUMENT CAN USED FOR THIS PURPOSE"),e("div",{class:"row g-3 mt-1"},[e("div",{class:"col-md-6"},[e("div",{class:"row g-0"},[e("div",{class:"col-1"},[e("i",{class:"bi bi-person-vcard"})]),e("div",{class:"col"},[e("span",{class:"fw-bold color-thick"},"Identification Proof"),e("div",{class:"text-muted"}," Hong Kong Indentity Card / Passport / Travel Document / National Identity Card ")])])]),e("div",{class:"col-md-6"},[e("div",{class:"row g-0"},[e("div",{class:"col-1"},[e("i",{class:"bi bi-award"})]),e("div",{class:"col"},[e("span",{class:"fw-bold color-thick"},"Residential Permit"),e("div",{class:"text-muted"}," An Active Residential Permit from the government of country you currently resides ")])])])])])])])],-1),M={class:"col-md-6 col-lg-6"},U=e("i",{class:"bi bi-arrow-left"},null,-1),$=e("small",{id:"erro"},null,-1),G=e("div",{class:"mt-3"},null,-1),z=e("p",{style:{"border-bottom":"1px solid #000","font-weight":"bolder"}},"WHY THIS KYC PROCEESS",-1),J=e("p",null,[e("span",{class:"mr-2"},"📄"),r(" As Government policy requires every founder/Director to be fully Verified before company can be fuly registered ")],-1),Q=e("p",null,[e("span",{class:"mr-2"},"📄"),r(" This is to ensure there is no ghost founder/Director and to prevent impersonafication ")],-1),X=e("p",{class:"mb-1 flex items-center text-gray-700"},[e("span",{class:"mr-2"},"✔️"),r(" Please Note: Your documents are encrypted and securely stored and will not be share maxPageWidth anyone "),e("p",{class:"ml-6 text-gray-600"},"In the Event this verification fails"),e("ul",{class:"ml-10 list-inside list-disc text-gray-600"},[e("li"),e("li",null,"Your primary user will request for a new verification process for you"),e("li",null,"You will received an updated link to start a new verifications")])],-1),ae=K({__name:"Kyc_founder",setup(Z){function x(){history.back()}const n=F(),v=a(!0),S=a(""),_=a(""),d=N(),u=a(""),f=a(""),b=a({}),c=a("");function P(){window.close()}Y(async()=>{u.value=atob(d.params.founder_id),f.value=atob(d.params.company_id),n.companyIdonRoute=atob(d.params.company_id),await n.getCompanyInProgress(),await p.ProcessKyc(),E()});async function E(){var g,h,w;const{data:s}=await p.companyProgress(f.value);S.value=((h=(g=s==null?void 0:s.company)==null?void 0:g.users)==null?void 0:h.user_token)??"";const t=((w=s==null?void 0:s.company)==null?void 0:w.company_entity)??[],o=n.collateFounders(t);b.value=o.find(m=>m.company_entity_id==u.value);const i=t.find(m=>m.id==u.value);_.value=i.user_token,c.value=i,n.isFounderSigned=c.value.signature,n.isKYCcompleted=c.value.kyc_status,v.value=!1}function I(){const s=ComplyCube.mount({containerId:"complycube-mount",token:_.value,onComplete:async function(t){const o=new FormData;o.append("kyc_status","pending"),o.append("company_id",c.value.company_id),o.append("company_entity_id",c.value.id);const{data:i}=await p.registerSignature(o);console.log(i,"response when u run data"),n.isFounderSigned=i.data.signature,n.isKYCcompleted=i.data.kyc_status,setTimeout(()=>{s.unmount()},3e3)},onModalClose:function(){s.unmount()},onError:function(t){t.type==="token_expired"||console.log(t)}})}return(s,t)=>v.value?(l(),k(R,{key:0})):(l(),k(T,{key:1},{founderName:y(()=>{var o;return[B,r(" "+D(((o=b.value)==null?void 0:o.label)??""),1)]}),main:y(()=>[H,e("div",A,[e("div",V,[e("div",W,[e("div",j,[q,L,e("div",M,[e("button",{class:"btn btn-outline-dark me-3",onClick:t[0]||(t[0]=o=>x())},[U,r(" Back ")]),O(n).isKYCcompleted?(l(),C("button",{key:0,class:"btn btn-primary w-50",id:"closeoncompleted",type:"button",onClick:t[1]||(t[1]=o=>P())}," Close Window")):(l(),C("button",{key:1,class:"btn btn-primary w-50",id:"closeoncompleted",type:"button",onClick:I}," Start verification")),$])])])])])]),info:y(()=>[G,z,J,Q,X]),_:1}))}});export{ae as default};
