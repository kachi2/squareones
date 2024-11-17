import{d as A,r as c,k as M,z as B,p as I,P,o as l,c as i,b as e,w as p,v as b,G as f,H as w,y as z,f as S,t as g,x as E,B as F,e as N,j,A as L,C as H,D as O,_ as G}from"./index-C0wR_aM1.js";import{a as T}from"./index-Bc27vxtU.js";import{u as R}from"./useFunctions-CfmAuQlA.js";import{d as $}from"./index-af_oULFB.js";const n=r=>(H("data-v-c794a308"),r=r(),O(),r),q={class:"container"},J=n(()=>e("h5",{class:"fw-bold page-title mb-4"},"Assign Tasks",-1)),K={class:"row g-4"},Q={class:"col-12"},W={class:"card shadow-sm min-vh-100"},X={class:"card-body"},Y={class:"row g-3 justify-content-center"},Z={class:"col-12"},ee={class:"float-end"},se=n(()=>e("label",{class:"form-label"},"Search Users",-1)),te={class:"col-12"},ae={class:"card shadow-sm h-100"},oe={class:"card-body"},le={key:0,class:"text-muted"},ie={key:1,class:"list-group list-group-flush"},ne={class:"row justify-content-between align-items-center"},de=["onClick"],ce={key:0,class:"me-3 bi bi-check-circle-fill"},re={key:1,class:"me-3 bi bi-circle"},ue={class:"col-lg-5 mt-5"},_e={class:"card shadow-sm h-100"},me={class:"card-body"},pe=j('<div class="text-center mb-3 fs-3" data-v-c794a308><i class="bi bi-card-checklist text-primary me-3" data-v-c794a308></i><i class="bi bi-person-check text-danger" data-v-c794a308></i></div><h5 class="text-center fw-bold" data-v-c794a308>A Simpler way to Assign Tasks</h5><div class="text-center" data-v-c794a308> Experience an effortless solution for assigning and tracking tasks, designed to keep everything organized and on track. </div>',3),ve={class:"d-flex justify-content-center mt-3"},he=["disabled"],be={class:"modal fade",id:"postTaskModal",tabindex:"-1","data-bs-backdrop":"static","data-bs-keyboard":"false",role:"dialog","aria-labelledby":"modalTitleId","aria-hidden":"true"},fe={class:"modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg p-5",role:"document"},ge={class:"modal-content"},ye={class:"modal-header text-capitalize border-0"},ke=n(()=>e("h5",{class:"modal-title",id:"modalTitleId"}," Assign Task ",-1)),we={class:"modal-body"},Se={class:"row g-3"},Te={class:"col-12"},xe=n(()=>e("label",{class:"form-label"},"Task Title",-1)),Ce={class:"col-12"},Ve=n(()=>e("label",{class:"form-label"},"Task Content",-1)),De={class:"col-12"},Ue=n(()=>e("label",{class:"form-label"},"Priority",-1)),Ae=["value"],Me={class:"col-12"},Be=n(()=>e("label",{class:"form-label"},"Due Date",-1)),Ie={class:"modal-footer border-0"},Pe=n(()=>e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1)),ze={key:0,class:"btn btn-primary",type:"button",disabled:""},Ee=n(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),Fe=A({__name:"AdminTasks_assign",setup(r){const v=$.useToast(),h=c([]);c(!1),M(()=>{x()});async function x(){var a,t,m;try{const s=await T.getUsers("?page=1");h.value=((m=(t=(a=s.data)==null?void 0:a.data)==null?void 0:t.users)==null?void 0:m.data)??[]}catch(s){console.log(s)}}const u=c(null),C=a=>{u.value=a,h.value.forEach(t=>{t.isSelected=!1}),a.isSelected=!0},d=c(""),y=B(()=>{let a=[];return d.value?(a=h.value.filter(t=>t.email.includes(d.value)||t.name.includes(d.value)),a.length&&a.forEach(t=>{t.isSelected=!1})):u.value=null,a}),k=c(null),_=c(null);function V(){k.value.click()}const o=I({title:"",priority:"high",content:"",due_date:new Date,isSaving:!1}),D=[{name:"High",value:"high"},{name:"Medium",value:"medium"},{name:"low",value:"low"}];async function U(){try{if(!o.title||!o.content||!o.priority){v.warning("Please conplete fields",{position:"top-right"});return}o.isSaving=!0;const a=new FormData;a.append("user_id",u.value.id),a.append("title",o.title),a.append("content",o.content),a.append("priority",o.priority),a.append("due_date",o.due_date.toDateString());const t=await T.adminPostTask(a);o.isSaving=!1,_.value.click(),d.value="",v.success("Task Created",{position:"top-right"})}catch(a){v.error("Something went wrong",{position:"top-right"}),console.log(a),o.isSaving=!1,_.value.click()}}return P(()=>{_.value.click()}),(a,t)=>{const m=L("VueDatePicker");return l(),i(f,null,[e("div",q,[J,e("div",K,[e("div",Q,[e("div",W,[e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[se,p(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>d.value=s),type:"text",class:"form-control"},null,512),[[b,d.value]])])]),e("div",te,[e("div",ae,[e("div",oe,[y.value.length?(l(),i("ul",ie,[(l(!0),i(f,null,w(y.value,s=>(l(),i("li",{class:z(["list-group-item py-3",{"bg-selected":s.isSelected}])},[e("div",ne,[e("div",{onClick:Ne=>C(s),class:"col-lg-12 text-info-emphasis fw-bold small cursor-pointer"},[s.isSelected?(l(),i("i",ce)):(l(),i("i",re)),S(" "+g(s.name)+" ("+g(s.email)+") ",1)],8,de)])],2))),256))])):(l(),i("div",le," No search results. "))])])]),e("div",ue,[e("div",_e,[e("div",me,[pe,e("div",ve,[e("button",{onClick:V,disabled:!u.value,class:"btn btn-primary"}," Assign Task ",8,he)])])])])])])])])])]),e("button",{ref_key:"modalOpen",ref:k,class:"d-none",type:"button","data-bs-toggle":"modal","data-bs-target":"#postTaskModal"},null,512),e("div",be,[e("div",fe,[e("div",ge,[e("div",ye,[ke,e("button",{ref_key:"modalClose",ref:_,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,512)]),e("div",we,[e("div",Se,[e("div",Te,[xe,p(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>o.title=s),type:"text",class:"form-control"},null,512),[[b,o.title]])]),e("div",Ce,[Ve,p(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=s=>o.content=s),style:{height:"100px"},class:"form-control"},null,512),[[b,o.content]])]),e("div",De,[Ue,p(e("select",{"onUpdate:modelValue":t[3]||(t[3]=s=>o.priority=s),class:"form-select"},[(l(),i(f,null,w(D,s=>e("option",{value:s.value,key:s.value},g(s.name),9,Ae)),64))],512),[[E,o.priority]])]),e("div",Me,[Be,F(m,{class:"small",format:N(R).dateDisplay,clearable:!1,"enable-time-picker":!1,"auto-apply":"",modelValue:o.due_date,"onUpdate:modelValue":t[4]||(t[4]=s=>o.due_date=s)},null,8,["format","modelValue"])])])]),e("div",Ie,[Pe,o.isSaving?(l(),i("button",ze,[Ee,S(" Loading ")])):(l(),i("button",{key:1,onClick:U,type:"button",class:"btn btn-primary text-capitalize"}," Assign "))])])])])],64)}}}),Ge=G(Fe,[["__scopeId","data-v-c794a308"]]);export{Ge as default};
