import{d as F,a as $,k as M,r as a,l as D,o as i,c as n,b as s,t as l,B as m,f as p,w as q,v as K,s as _,e as A,A as I,C as W,D as z,_ as G}from"./index-C0wR_aM1.js";import{a as P}from"./index-Bc27vxtU.js";import{u as y}from"./useFunctions-CfmAuQlA.js";import{u as H}from"./adminParamsStore-BHGl3pw4.js";import"./country-Dh2q9MdB.js";const t=b=>(W("data-v-a6418345"),b=b(),z(),b),J={class:"container min-vh-100"},Q=t(()=>s("h5",{class:"fw-bold page-title mb-4"}," Registerd Users",-1)),X={class:"row g-3"},Y={class:"col-md-3"},Z={class:"card border-0 shadow-sm h-100"},ss={class:"card-body"},es={class:"d-flex justify-content-between align-items-cente"},ts={class:"col-6"},os={class:"fs-4 fw-bold text-mute"},as=t(()=>s("div",null,[s("span",{class:"small"},"Registered Users")],-1)),is={class:"col-6"},ns={class:"col-md-3"},ls={class:"card border-0 shadow-sm h-100"},cs={class:"card-body"},ds={class:"d-flex justify-content-between align-items-cente"},rs={class:"col-6"},_s={class:"fs-4 fw-bold text-mute"},ps=t(()=>s("div",null,[s("span",{class:"small"},"Active Users")],-1)),us={class:"col-6"},hs={class:"col-md-3"},vs={class:"card border-0 shadow-sm h-100"},ms={class:"card-body"},bs={class:"d-flex justify-content-between align-items-cente"},gs={class:"col-7"},fs={class:"fs-4 fw-bold text-mute"},ys=t(()=>s("span",{class:"small"},"New Users",-1)),ws=t(()=>s("br",null,null,-1)),xs={style:{color:"green"}},ks={class:"col-5"},Cs={class:"col-md-3"},Ss={class:"card border-0 shadow-sm h-100"},Us={class:"card-body"},Ds={class:"row justify-content-between align-items-cente"},As={class:"col-6"},Is={class:"fs-4 fw-bold text-mute"},Ps=t(()=>s("div",null,[s("span",{class:"small"},"Verified Users"),p(),s("br")],-1)),Ls={class:"col-6"},Ts={class:"col-12"},Vs={style:{color:"red"}},Es={class:"col-12"},Bs={class:"card"},Ns={class:"card-body"},js={class:"row mb-4"},Os=t(()=>s("div",{class:"col-lg-8"},null,-1)),Rs={class:"col-lg-4"},Fs={class:"fw-bold text-muted"},$s={key:0,class:"badge bg-success-subtle text-dark",style:{width:"60px"}},Ms={key:1,class:"badge bg-warning-subtle text-dark",style:{width:"60px"}},qs={key:0,class:"badge bg-success-subtle text-dark",style:{width:"60px"}},Ks={key:1,class:"badge bg-warning-subtle text-dark",style:{width:"60px"}},Ws={key:0,class:"badge bg-success-subtle text-dark",style:{width:"60px"}},zs={key:1,class:"badge bg-warning-subtle text-dark",style:{width:"60px"}},Gs={class:"dropdown"},Hs={class:"cursor-pointer bell dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},Js=t(()=>s("i",{class:"bi bi-three-dots text-primary"},null,-1)),Qs={class:"dropdown-menu dropdown-menu-start"},Xs={class:"list-group list-group-flush"},Ys=["onClick"],Zs=t(()=>s("i",{class:"bi bi-eye"},null,-1)),se=["onClick"],ee=t(()=>s("i",{class:"bi bi-exclamation-circle-fill"},null,-1)),te=["onClick"],oe=t(()=>s("i",{class:"bi bi-check-circle-fill"},null,-1)),ae=F({__name:"AdminUsers",setup(b){const L=H(),T=$();M(()=>{g()});const r=a([]);async function g(){f.value=!0;try{const c={search:v.value,page:u.value.page,rowsPerPage:u.value.rowsPerPage},d=new URLSearchParams(c).toString(),h=(await P.getUsers(d)).data.data;w.value=h.users.total,x.value=h.users.data,r.value=h,f.value=!1,console.log("users:",h)}catch{}}const w=a(0),v=a(""),x=a([]),f=a(!1),V=[{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Email Verification",value:"email_verified_at"},{text:"Status",value:"status"},{text:"Date Registered",value:"created_at"},{text:"Last Login",value:"last_login"},{text:"Kyc Status",value:"kyc_status"},{text:"Action",value:"action"}],u=a({page:1,rowsPerPage:15,search:v.value});D(u,c=>{g()},{deep:!0});const E=y.debounce(g,500);D(v,()=>{u.value.page=1,E()},{deep:!0});function B(c){L.isCompaniesByUser=c,T.push({path:"/admin/companies"})}async function k(c,d){try{const o=new FormData;o.append("user_id",c),o.append("status",d),await P.updateUserStatus(o),g()}catch{}}const N={colors:["#064608","#b1f5b3"],chart:{type:"pie"},dataLabels:{enabled:!1},legend:{show:!1},tooltip:{enabled:!1},responsive:[{options:{chart:{},legend:{position:"bottom"}}}]},j=a([1,9]),O={colors:["#16497c","#92b3d5"],chart:{type:"pie"},dataLabels:{enabled:!1},legend:{show:!1},tooltip:{enabled:!1},responsive:[{options:{chart:{},legend:{position:"bottom"}}}]},R=a([8,2]),C={colors:["#463206","#ecd29c"],chart:{type:"pie"},dataLabels:{enabled:!1},legend:{show:!1},tooltip:{enabled:!1},responsive:[{options:{chart:{},legend:{position:"bottom"}}}]},S=a([3,7]);return(c,d)=>{const o=I("apexchart"),h=I("EasyDataTable");return i(),n("div",J,[Q,s("div",X,[s("div",Y,[s("div",Z,[s("div",ss,[s("div",es,[s("div",ts,[s("span",os,l(r.value.userCount),1),as]),s("div",is,[m(o,{type:"pie",options:N,series:j.value},null,8,["series"])])])])])]),s("div",ns,[s("div",ls,[s("div",cs,[s("div",ds,[s("div",rs,[s("span",_s,l(r.value.active),1),ps]),s("div",us,[m(o,{type:"pie",options:O,series:R.value},null,8,["series"])])])])])]),s("div",hs,[s("div",vs,[s("div",ms,[s("div",bs,[s("div",gs,[s("span",fs,l(r.value.newUsers),1),s("div",null,[ys,p(),ws,s("small",xs,l(r.value.newThisWeek)+" this week",1)])]),s("div",ks,[m(o,{type:"pie",options:C,series:S.value},null,8,["series"])])])])])]),s("div",Cs,[s("div",Ss,[s("div",Us,[s("div",Ds,[s("div",As,[s("span",Is,l(r.value.verified),1),Ps]),s("div",Ls,[m(o,{type:"pie",options:C,series:S.value},null,8,["series"])]),s("div",Ts,[s("small",Vs,l(r.value.unVerified)+" pending unverified ",1)])])])])]),s("div",Es,[s("div",Bs,[s("div",Ns,[s("div",js,[Os,s("div",Rs,[q(s("input",{"onUpdate:modelValue":d[0]||(d[0]=e=>v.value=e),type:"text",class:"form-control",placeholder:"search.."},null,512),[[K,v.value]])])]),m(h,{loading:f.value,class:"easy-data-table","show-index":"",headers:V,items:x.value,"buttons-pagination":"","server-options":u.value,"onUpdate:serverOptions":d[1]||(d[1]=e=>u.value=e),"server-items-length":w.value},{header:_(e=>[s("span",Fs,l(e.text=="#"?"S/N":e.text),1)]),"item-last_login":_(e=>[p(l(A(y).dateDisplay(e.last_login)),1)]),"item-created_at":_(e=>[p(l(A(y).dateDisplay(e.created_at)),1)]),"item-status":_(e=>[e.status==1?(i(),n("span",$s,"ACTIVE")):(i(),n("span",Ms,"DISABLED"))]),"item-kyc_status":_(e=>[e.kyc_status!=null?(i(),n("span",qs,"Completed")):(i(),n("span",Ks,"pending"))]),"item-email_verified_at":_(e=>[e.email_verified_at!=null?(i(),n("span",Ws,"verified")):(i(),n("span",zs,"pending"))]),"item-action":_(e=>[s("span",Gs,[s("span",Hs,[Js,s("div",Qs,[s("ul",Xs,[s("li",{onClick:U=>B(e.id),class:"dropdown-item text-primary",style:{"background-color":"transparent !important"}},[Zs,p(" Companies ")],8,Ys),e.status==1?(i(),n("li",{key:0,onClick:U=>k(e.id,2),class:"dropdown-item text-danger",style:{"background-color":"transparent !important"}},[ee,p(" Disable user ")],8,se)):(i(),n("li",{key:1,onClick:U=>k(e.id,1),class:"dropdown-item text-success",style:{"background-color":"transparent !important"}},[oe,p(" Activate user ")],8,te))])])])])]),_:1},8,["loading","items","server-options","server-items-length"])])])])])])}}}),re=G(ae,[["__scopeId","data-v-a6418345"]]);export{re as default};
