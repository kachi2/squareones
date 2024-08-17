import{d as H,M as N,k as U,r as n,z as j,l as A,o as d,c as i,b as t,f as r,B as m,t as _,s as y,G as q,H as z,S as k,A as b,C as $,D as G,_ as K}from"./index-_hV3m8EQ.js";import{a as g}from"./index-RCXhkf4Y.js";import{u}from"./useFunctions-BM4ZfLX9.js";import"./sweetalert2.all-jPLlz7Iy.js";const o=p=>($("data-v-44b79456"),p=p(),G(),p),X={class:"container"},J=o(()=>t("h5",{class:"fw-bold page-title mb-4"}," Overview",-1)),Q={class:"row g-3"},W={class:"col-lg-6"},Z={class:"row g-3"},tt={class:"col-md-12"},et={class:"card h-100"},st={class:"card-header bg-transparent border-0 fw-bold d-flex justify-content-lg-between align-items-center"},at={class:"float-en m-0"},ot={class:"card-body"},nt={class:"fw-bold"},lt={class:"samll text-mute"},ct={class:"row g-3"},dt=o(()=>t("div",{class:"col-lg-12"},[t("div",{class:"small text-mute"}," 2 Companies"),t("div",{class:"small text-mute"})],-1)),it={class:"col-lg-12"},rt={class:"card p-0"},_t={class:"col-lg-6"},ut={class:"card h-100"},pt=o(()=>t("div",{class:"card-header bg-transparent fw-bold py-4"}," Recent Activities ",-1)),ht={class:"card-body"},vt={class:"fw-bold text-muted"},mt={key:0},yt={class:"badge rounded-pill text-bg-success"},bt={key:1},gt={class:"badge rounded-pill text-bg-warning"},ft={class:"col-12"},wt={class:"card"},Dt=o(()=>t("div",{class:"card-header fw-bold bg-transparent py-3"}," Transaction History ",-1)),xt={class:"card-body"},St={class:"table-responsive small"},Ct={class:"table table-sm text-nowrap"},Mt=o(()=>t("thead",null,[t("tr",null,[t("th",null,"Order No."),t("th",null,"Customer"),t("th",null,"Date"),t("th",null,"Ref"),t("th",null,"Amount"),t("th",null,"Status")])],-1)),Tt=o(()=>t("td",{class:"text-primary cursor-pointer"},"#987653",-1)),At=o(()=>t("td",null,"Michael",-1)),kt=o(()=>t("td",null,"04/6/2024",-1)),Rt=o(()=>t("td",null,"SUB-2340981",-1)),Ot=o(()=>t("td",null,[t("span",{class:"fw-bold"},"5000"),r(" HKD")],-1)),Yt={key:0,class:"text-warning fw-bold"},Vt=o(()=>t("i",{class:"bi bi-dot"},null,-1)),It={key:1,class:"text-success fw-bold"},Lt=o(()=>t("i",{class:"bi bi-dot"},null,-1)),Pt={key:2,class:"text-danger fw-bold"},Et=o(()=>t("i",{class:"bi bi-dot"},null,-1)),Ft=H({__name:"AdminDashboard",setup(p){N(),U(()=>{L(),P(),E(),T(),S()});const R=n(new Date),O=n(new Date),Y=n(new Date),V=n(new Date),c=n([]),I=n(),f=e=>{const a=k(e[0],"MMM D, YYYY"),l=k(e[1],"MMM D, YYYY");return`${a.value} - ${l.value}`};function L(){const e=new Date,a=new Date(new Date().setDate(e.getDate()-7));c.value=I.value=[a,e]}const w=j(()=>{const e=new Date(c.value[0]),a=new Date(c.value[1]),l=[];for(;e<=a;){const v=e.toISOString().split("T")[0];l.push(v),e.setDate(e.getDate()+1)}return l});A(()=>c.value,()=>{S()});const D=n({}),x=n([{name:"Companies",data:[2,3,4,5,0,3]}]);function S(){D.value={chart:{type:"area",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{show:!0,curve:"smooth",lineCap:"round",width:1,dashArray:0},fill:{type:"gradient",gradient:{gradientToColors:["#ccc"],shadeIntensity:0,inverseColors:!0,opacityFrom:.5,opacityTo:0,stops:[0,75]}},states:{hover:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],xaxis:{categories:w.value,type:"datetime",labels:{datetimeFormatter:{year:"yyyy",month:"MMM 'yyyy",day:"dd MMM",hour:"HH:mm"}}},colors:["#0d6efd","#7B61FF"],legend:{show:!1},tooltip:{enabled:!0}},x.value=[{name:"Companies",data:u.generateRandomNumbers(w.value.length)}]}async function P(){try{const e={start_date:u.formatDate(R.value),end_date:u.formatDate(O.value)},a=await g.getCompanyStats(e)}catch{}}async function E(){try{const e={start_date:u.formatDate(Y.value),end_date:u.formatDate(V.value)},a=await g.getRevenueStats(e)}catch{}}const C=n(0),M=n([]),h=n({page:1,rowsPerPage:15});async function T(){try{const e=new URLSearchParams(h.value).toString(),l=(await g.activityLog(e)).data.data;C.value=l.total,M.value=l.data}catch{}}A(h,e=>{T()},{deep:!0});const F=[{text:"ACTIVITY",value:"activity"},{text:"TYPE",value:"type"},{text:"STATUS",value:"action_status"},{text:"DATE",value:"updated_at"}];return(e,a)=>{const l=b("VueDatePicker"),v=b("apexchart"),B=b("EasyDataTable");return d(),i("div",X,[J,t("div",Q,[t("div",W,[t("div",Z,[t("div",tt,[t("div",et,[t("div",st,[r(" Registered Companies "),t("span",at,[m(l,{class:"small",format:f,range:"","multi-calendars":"",clearable:!1,"max-date":new Date,"enable-time-picker":!1,"auto-apply":"",modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=s=>c.value=s)},null,8,["max-date","modelValue"])])]),t("div",ot,[t("div",nt,[t("span",lt,"Total Company Registered since "+_(c.value?f(c.value):""),1)]),t("div",ct,[dt,t("div",it,[t("div",rt,[m(v,{type:"area",options:D.value,series:x.value},null,8,["options","series"])])])])])])])])]),t("div",_t,[t("div",ut,[pt,t("div",ht,[m(B,{class:"easy-data-table border-0","show-index":"",headers:F,items:M.value,"buttons-pagination":"","server-options":h.value,"onUpdate:serverOptions":a[1]||(a[1]=s=>h.value=s),"server-items-length":C.value},{header:y(s=>[t("span",vt,_(s.text=="#"?"S/N":s.text),1)]),"item-action_status":y(s=>[s.action_status=="COMPLETED"?(d(),i("span",mt,[t("span",yt,_(s.action_status),1)])):(d(),i("span",bt,[t("span",gt,_(s.action_status),1)]))]),"item-updated_at":y(s=>[r(_(new Date(s.updated_at).toLocaleString()),1)]),_:1},8,["items","server-options","server-items-length"])])])]),t("div",ft,[t("div",wt,[Dt,t("div",xt,[t("div",St,[t("table",Ct,[Mt,t("tbody",null,[(d(),i(q,null,z(2,s=>t("tr",null,[Tt,At,kt,Rt,Ot,s==1?(d(),i("td",Yt,[Vt,r(" Due ")])):s%2==0?(d(),i("td",It,[Lt,r(" Paid ")])):(d(),i("td",Pt,[Et,r(" Cancelled ")]))])),64))])])])])])])])])}}}),jt=K(Ft,[["__scopeId","data-v-44b79456"]]);export{jt as default};