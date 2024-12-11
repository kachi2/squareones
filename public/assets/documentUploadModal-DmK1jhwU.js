import{d as E,r as s,n as V,Q as j,o as l,c as n,b as e,w as h,v as g,e as y,S as x,T as D,H as B,I as R,f as v,t as C,D as Y,E as z,_ as $}from"./index-Cx72Huz2.js";import{a as L}from"./index-DONKfzbq.js";import{u as i}from"./useFunctions-BiFwKrCF.js";import{j as N}from"./maska-Cp-LWreF.js";import{u as A}from"./adminParamsStore-Da-Wnp2K.js";import{u as H}from"./index.esm-CnLDyl0i.js";const c=u=>(Y("data-v-021fbf33"),u=u(),z(),u),Q={class:"modal fade",id:"documentUploadModalEdit",tabindex:"-1","data-bs-backdrop":"static","data-bs-keyboard":"false",role:"dialog","aria-labelledby":"modalTitleId","aria-hidden":"true"},q={class:"modal-dialog modal-dialog-centered modal-lg",role:"document"},G={class:"modal-content"},J=c(()=>e("div",{class:"modal-header p-3 border-0"},[e("h5",{class:"modal-title fw-bold text-center"},"Documents Upload")],-1)),K={class:"modal-body"},O={class:"row g-3"},W={class:"col-lg-6"},X={class:"col-12"},Z=c(()=>e("div",{class:"form-label"},"Document title",-1)),ee={class:"col-12 col-lg-6"},te=c(()=>e("div",{class:"form-label"},"Year",-1)),oe={class:"col-12 col-lg-6"},ae=c(()=>e("div",{class:"form-label"},"Document Type",-1)),se={class:"col-12 mt-4"},le=c(()=>e("div",{class:"dropzone text-center small py-2"},[e("i",{class:"bi bi-paperclip color-theme"}),v(" Click here to browse or drag files here to add "),e("br"),v(" You can all more than one document. ")],-1)),ne={class:"col-lg-12"},de={class:"card bg-light-subtle h-100"},ie={class:"card-body"},ce={key:0,class:"text-muted"},re={key:1,class:"list-group list-group-flush"},ue={class:"float-end"},pe=["onClick"],me={class:"modal-footer border-0"},ve={key:0,class:"btn btn-primary",type:"button",disabled:""},_e=c(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),be=["disabled"],fe=E({__name:"documentUploadModal",emits:["done"],setup(u,{emit:I}){const k=A(),M=I,w=s(null),_=s(null),S=["doc","docx","pdf","jpg","png","jpeg"],a=s([]),p=s(""),r=s(""),b=s(""),{getRootProps:U,getInputProps:P}=H({multiple:!1,onDrop:(d,t)=>{const o=d[0];if(!i.isExtension(o.name,S)){i.toast("Invalid file type added, select a vaid document","warning");return}a.value.push(o)}});function T(d){a.value=a.value.filter(t=>t.name!==d)}V(()=>k.documentUploadModal,()=>{a.value.length=0,w.value.click()}),j(()=>{_.value.click()});const f=s(!1),F=async()=>{i.confirm("Continue submit?","Continue").then(async d=>{if(d.value==!0){if(!p.value){i.toast("Please Document(s) title","warning");return}if(!r.value){i.toast("Please enter Year","warning");return}if(!r.value){i.toast("Please enter Type","warning");return}const t=new FormData;t.append("company_id",k.currentCompanyId),t.append("title",p.value),t.append("year",r.value),t.append("type",b.value),t.append("document_type_id","1"),a.value.forEach((o,m)=>{t.append(`document[${m}]`,o)}),f.value=!0;try{await L.uploadCompanyDocuments(t),f.value=!1,M("done"),_.value.click()}catch(o){console.log(o)}}})};return(d,t)=>(l(),n("div",null,[e("button",{ref_key:"openModal",ref:w,class:"btn d-none","data-bs-toggle":"modal","data-bs-target":"#documentUploadModalEdit"},null,512),e("div",Q,[e("div",q,[e("div",G,[J,e("div",K,[e("div",O,[e("div",W,[e("div",X,[Z,h(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>p.value=o),type:"text",class:"form-control w-100"},null,512),[[g,p.value]])])]),e("div",ee,[te,h(e("input",{"data-maska":"####","onUpdate:modelValue":t[1]||(t[1]=o=>r.value=o),type:"text",class:"form-control w-100"},null,512),[[y(N)],[g,r.value]])]),e("div",oe,[ae,h(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>b.value=o),type:"text",class:"form-control w-100"},null,512),[[g,b.value]])]),e("div",se,[e("div",x(D(y(U)())),[le,e("input",x(D(y(P)())),null,16)],16)]),e("div",ne,[e("div",de,[e("div",ie,[a.value.length?(l(),n("ul",re,[(l(!0),n(B,null,R(a.value,(o,m)=>(l(),n("li",{key:o,class:"list-group-item p-0"},[v(C(m+1)+". "+C(o.name)+" ",1),e("span",ue,[e("i",{onClick:he=>T(o.name),class:"bi bi-x-lg cursor-pointer text-danger"},null,8,pe)])]))),128))])):(l(),n("div",ce,"Uploaded files will show here"))])])])])]),e("div",me,[e("button",{onClick:t[3]||(t[3]=o=>a.value.length=0),type:"button",class:"btn btn-warning"}," Clear "),e("button",{ref_key:"closeModal",ref:_,type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Cancel ",512),f.value?(l(),n("button",ve,[_e,v(" Saving data.. ")])):(l(),n("button",{key:1,disabled:!a.value.length,onClick:F,type:"button",class:"btn btn-primary"}," Submit Data ",8,be))])])])])]))}}),Ce=$(fe,[["__scopeId","data-v-021fbf33"]]);export{Ce as d};