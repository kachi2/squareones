import{a as E}from"./index-BpOGV5-u.js";import{u as _}from"./useFunctions-CSDhsjro.js";import{u as S}from"./paramsStore-CuuwKVYW.js";import{d as T,a as U,k as A,r,l as I,o as l,c as L,b as t,q as v,s as c,t as i,f,e as h,A as g,C as k,D as C,_ as M}from"./index-jxWPx1sk.js";import"./sweetalert2.all-D4A-oTl2.js";const x=a=>(k("data-v-225f7a4b"),a=a(),C(),a),N={class:"container min-vh-100"},B={class:"row g-3"},O=x(()=>t("h5",{class:"fw-bold page-title mb-1"}," Team Members",-1)),P=x(()=>t("p",{class:"p"}," Team members of all the company you own or belong",-1)),R={class:"col-12"},F={class:"card"},V={class:"card-body"},q={class:"fw-bold text-muted"},G=T({__name:"UserUsers",setup(a){const b=S();U(),A(()=>{d()});async function d(){const o=new FormData;o.append("user_id","1");const s=await E.getUsersTeam(o);console.log(s.data,"users with their teams",b.currentUserId),m.value=s.data.total,u.value=!1,p.value=s.data}const n=r({page:1,rowsPerPage:15}),m=r(0),p=r([]),u=r(!0),y=[{text:"NAME",value:"users.name"},{text:"EMAIL",value:"users.email"},{text:"USER'S ROLES",value:"role"},{text:"TEAM NAME",value:"teams.name"},{text:"DATE ADDED",value:"created_at"},{text:"LAST LOGIN",value:"users.last_login"}];return I(n,o=>{d()},{deep:!0}),(o,s)=>{const D=g("isLoadingComponent"),w=g("EasyDataTable");return l(),L("div",N,[t("div",B,[O,P,t("div",R,[t("div",F,[t("div",V,[u.value?(l(),v(D,{key:0})):(l(),v(w,{key:1,class:"easy-data-table",headers:y,items:p.value,"buttons-pagination":"","server-options":n.value,"onUpdate:serverOptions":s[0]||(s[0]=e=>n.value=e),"server-items-length":m.value},{header:c(e=>[t("span",q,i(e.text=="#"?"S/N":e.text),1)]),"item-last_login":c(e=>[f(i(h(_).dateDisplay(e.last_login)),1)]),"item-created_at":c(e=>[f(i(h(_).dateDisplay(e.created_at)),1)]),_:1},8,["items","server-options","server-items-length"]))])])])])])}}}),Q=M(G,[["__scopeId","data-v-225f7a4b"]]);export{Q as default};
