import{a as k}from"./index-DSG1T6XT.js";import{u as h}from"./useFunctions-BVdw-dsJ.js";import{u as D}from"./paramsStore-FTw4zx9Y.js";import{d as E,a as S,k as A,r as l,l as L,o as d,c as T,b as e,q as x,s as a,t as p,f as c,e as b,A as f,D as U,E as C,_ as I}from"./index-cYwMucy6.js";import"./sweetalert2.all-Dueq_NPN.js";const m=o=>(U("data-v-47a36106"),o=o(),C(),o),N={class:"container min-vh-100"},M={class:"row g-3"},B=m(()=>e("h5",{class:"fw-bold page-title mb-4"}," Team Members",-1)),O={class:"col-12"},P={class:"card"},R={class:"card-body"},q={class:"fw-bold text-muted"},V={class:"dropdown"},F={class:"cursor-pointer bell dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},G=m(()=>e("i",{class:"bi bi-three-dots text-primary"},null,-1)),j={class:"dropdown-menu dropdown-menu-start"},z={class:"list-group list-group-flush"},H=m(()=>e("i",{class:"bi bi-slash-circle"},null,-1)),J=E({__name:"UserUsers",setup(o){D(),S(),A(()=>{_()});async function _(){try{const r=new URLSearchParams(n.value).toString(),i=(await k.getUsers(r)).data.data;u.value=i.total,v.value=i.data,g.value=!1}catch{}}const n=l({page:1,rowsPerPage:15}),u=l(0),v=l([]),g=l(!0),w=[{text:"NAME",value:"name"},{text:"EMAIL",value:"email"},{text:"TEAM",value:"team"},{text:"DATE ADDED",value:"created_at"},{text:"LAST LOGIN",value:"last_login"},{text:"ACTION",value:"action"}];return L(n,r=>{_()},{deep:!0}),(r,s)=>{const i=f("isLoadingComponent"),y=f("EasyDataTable");return d(),T("div",N,[e("div",M,[B,e("div",O,[e("div",P,[e("div",R,[g.value?(d(),x(i,{key:0})):(d(),x(y,{key:1,class:"easy-data-table","show-index":"",headers:w,items:v.value,"buttons-pagination":"","server-options":n.value,"onUpdate:serverOptions":s[1]||(s[1]=t=>n.value=t),"server-items-length":u.value},{header:a(t=>[e("span",q,p(t.text=="#"?"S/N":t.text),1)]),"item-last_login":a(t=>[c(p(b(h).dateDisplay(t.last_login)),1)]),"item-created_at":a(t=>[c(p(b(h).dateDisplay(t.created_at)),1)]),"item-team":a(t=>[c(" Emeka Limited ")]),"item-action":a(t=>[e("span",V,[e("span",F,[G,e("div",j,[e("ul",z,[e("li",{onClick:s[0]||(s[0]=()=>{}),class:"dropdown-item text-danger-emphasis",style:{"background-color":"transparent !important"}},[H,c(" Revoke Access ")])])])])])]),_:1},8,["items","server-options","server-items-length"]))])])])])])}}}),Z=I(J,[["__scopeId","data-v-47a36106"]]);export{Z as default};