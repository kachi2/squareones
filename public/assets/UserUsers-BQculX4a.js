import{a as E}from"./index-CXXuVV6p.js";import{u as v}from"./useFunctions-DrElNW4R.js";import{u as S}from"./paramsStore-D4YOKsZ3.js";import{d as T,a as U,k as A,r,l as I,o as c,c as L,b as t,q as h,s as l,t as i,f as g,e as f,A as x,C as k,D as C,_ as M}from"./index-DRAmyg4x.js";import"./sweetalert2.all-DnBO6ktB.js";const b=a=>(k("data-v-a77856a2"),a=a(),C(),a),N={class:"container min-vh-100"},B={class:"row g-3"},O=b(()=>t("h5",{class:"fw-bold page-title mb-1"}," Team Members",-1)),P=b(()=>t("p",{class:"p"}," Team members of all the company you own or belong",-1)),R={class:"col-12"},F={class:"card"},V={class:"card-body"},q={class:"fw-bold text-muted"},G=T({__name:"UserUsers",setup(a){const d=S();U(),A(()=>{m()});async function m(){const o=new FormData;o.append("user_id",d.currentUserId);const s=await E.getUsersTeam(o);console.log(s.data,"users with their teams",d.currentUserId),p.value=s.data.total,_.value=!1,u.value=s.data}const n=r({page:1,rowsPerPage:15}),p=r(0),u=r([]),_=r(!0),y=[{text:"NAME",value:"users.name"},{text:"EMAIL",value:"users.email"},{text:"USER'S ROLES",value:"role"},{text:"TEAM NAME",value:"teams.name"},{text:"DATE ADDED",value:"created_at"},{text:"LAST LOGIN",value:"users.last_login"}];return I(n,o=>{m()},{deep:!0}),(o,s)=>{const D=x("isLoadingComponent"),w=x("EasyDataTable");return c(),L("div",N,[t("div",B,[O,P,t("div",R,[t("div",F,[t("div",V,[_.value?(c(),h(D,{key:0})):(c(),h(w,{key:1,class:"easy-data-table",headers:y,items:u.value,"buttons-pagination":"","server-options":n.value,"onUpdate:serverOptions":s[0]||(s[0]=e=>n.value=e),"server-items-length":p.value},{header:l(e=>[t("span",q,i(e.text=="#"?"S/N":e.text),1)]),"item-last_login":l(e=>[g(i(f(v).dateDisplay(e.last_login)),1)]),"item-created_at":l(e=>[g(i(f(v).dateDisplay(e.created_at)),1)]),_:1},8,["items","server-options","server-items-length"]))])])])])])}}}),Q=M(G,[["__scopeId","data-v-a77856a2"]]);export{Q as default};
