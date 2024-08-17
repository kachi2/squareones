import{a as m}from"./index-RCXhkf4Y.js";import{u as E}from"./paramsStore-BWprsx_J.js";import{d as R,u as M,r as i,p as j,k as V,z as q,l as F,o as f,c as z,b as s,f as h,t as c,B as C,q as S,s as y,e as I,A as g,C as G,D as H,_ as J}from"./index-_hV3m8EQ.js";import{u as A}from"./useFunctions-BM4ZfLX9.js";import"./sweetalert2.all-jPLlz7Iy.js";const t=l=>(G("data-v-0a1fe6f5"),l=l(),H(),l),Y={class:"container"},K=t(()=>s("h5",{class:"fw-bold page-title mb-2"},"Dashboard Overview",-1)),Q=t(()=>s("div",{class:""},"Have a Glance of this company Information.",-1)),W=t(()=>s("p",null,"Manage your company in a single clicks, click on the navigation to view individual company details",-1)),X={class:"row g-3"},Z={class:"col-lg-4"},$={class:"card border-0 shadow-sm h-100"},ss={class:"card-body py-4"},ts={class:"d-flex justify-content-between align-items-cente"},es={class:"col-8"},as={class:"fs-4 fw-bold text-mute"},os=t(()=>s("span",{class:"small"},null,-1)),ns=t(()=>s("div",{class:"col-4"},[s("div",{class:"round bg-success-subtle"},[s("i",{class:"bi bi-house-fill text-success"})])],-1)),is={class:"col-lg-4"},cs={class:"card border-0 shadow-sm h-100"},ds={class:"card-body py-4"},ls={class:"d-flex justify-content-between align-items-cente"},rs={class:"col-8"},_s={class:"fs-4 fw-bold text-mute"},ps=t(()=>s("small",null," remaining",-1)),hs=t(()=>s("div",null,[s("span",{class:"small"},"Annual Return")],-1)),us=t(()=>s("p",null," Next Renewal is 5th Dec, 2025",-1)),vs={class:"col-5"},ms={class:"col-lg-4"},fs={class:"card border-0 shadow-sm h-100"},ys={class:"card-body py-4"},gs={class:"d-flex justify-content-between align-items-cente"},bs={class:"col-8"},ws={class:"fs-4 fw-bold text-mute"},xs=t(()=>s("small",null," remaining",-1)),Ds=t(()=>s("div",null,[s("span",{class:"small"},"Next Payment in Jan 10th, 2025")],-1)),Cs=t(()=>s("p",null,"Business Registration Renewal",-1)),Ss={class:"col-5"},Is={class:"col-md-12"},As={class:"card border-0 shadow-sm h-100"},Ns=t(()=>s("div",{class:"card-header bg-transparent fw-bold py-4 border-0"}," Recent Activities ",-1)),Ts={class:"card-body"},ks={class:"fw-bold text-muted"},Ls=t(()=>s("div",{class:"row g-3"},[s("div",{class:"col-12"})],-1)),Bs=R({__name:"UserDashboard",setup(l){M();const N=E();i([]);const T=i([]),d=j({list:[],form_completed:[],is_incorporated:[],isLoading:!0});async function k(){var a;try{const e=await m.userNotifications();T.value=((a=e.data)==null?void 0:a.data)??[]}catch{}}V(()=>{L(),k(),w(),O()});async function L(){try{const e=(await m.getCompaniesByUserID(N.currentUserId)).data.data;d.list=e.companies,d.form_completed=e.form_completed,d.is_incorporated=e.is_incorporated,d.isLoading=!1}catch{}}const B=i("2023-11-24"),r=q(()=>{const a=B.value,e=new Date,o=new Date(a);o.setTime(o.getTime()+360*24*60*60*1e3);const v=o-e,p=Math.floor(v/(1e3*60*60*24));return console.log(p),p}),b={colors:["#92b3d5","#16497c"],chart:{type:"pie"},dataLabels:{enabled:!1},legend:{show:!1},tooltip:{enabled:!1},responsive:[{options:{chart:{},legend:{position:"bottom"}}}]},u=i([]),O=()=>{u.value=[r.value,360-r.value]};async function w(){try{const a=new URLSearchParams(_.value).toString(),o=(await m.userActivities(a)).data.data;x.value=o.total,D.value=!1}catch{}}const _=i({page:1,rowsPerPage:15}),x=i(0),P=i([]),D=i(!0);F(_,a=>{w()},{deep:!0});const U=[{text:"NAME",value:"name"},{text:"TYPE",value:"type"},{text:"ACTION",value:"action"},{text:"DATE",value:"created_at"}];return(a,e)=>{const o=g("apexchart"),v=g("isLoadingComponent"),p=g("EasyDataTable");return f(),z("div",Y,[K,Q,W,s("div",X,[s("div",Z,[s("div",$,[s("div",ss,[s("div",ts,[s("div",es,[h(" Total Companies "),s("div",null,[s("span",as,c(d.list.length),1),os])]),ns])])])]),s("div",is,[s("div",cs,[s("div",ds,[s("div",ls,[s("div",rs,[s("span",_s,c(r.value)+" Days",1),ps,hs,us]),s("div",vs,[C(o,{type:"pie",options:b,series:u.value},null,8,["series"])])])])])]),s("div",ms,[s("div",fs,[s("div",ys,[s("div",gs,[s("div",bs,[s("span",ws,c(r.value)+" Days",1),h(),xs,Ds,Cs]),s("div",Ss,[C(o,{type:"pie",options:b,series:u.value},null,8,["series"])])])])])]),s("div",Is,[s("div",As,[Ns,s("div",Ts,[D.value?(f(),S(v,{key:0})):(f(),S(p,{key:1,class:"easy-data-table","show-index":"",headers:U,items:P.value,"buttons-pagination":"","server-options":_.value,"onUpdate:serverOptions":e[0]||(e[0]=n=>_.value=n),"server-items-length":x.value},{header:y(n=>[s("span",ks,c(n.text=="#"?"S/N":n.text),1)]),"item-updated_at":y(n=>[h(c(I(A).dateDisplay(n.updated_at)),1)]),"item-created_at":y(n=>[h(c(I(A).dateDisplay(n.created_at)),1)]),_:1},8,["items","server-options","server-items-length"]))])]),Ls])])])}}}),Ms=J(Bs,[["__scopeId","data-v-0a1fe6f5"]]);export{Ms as default};