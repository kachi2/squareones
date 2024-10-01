import{d as q,a as M,k as K,r as i,l as A,o as t,c as n,b as s,t as l,B as g,f as p,w as W,v as z,q as I,s as _,e as L,A as y,C as G,D as H,_ as J}from"./index-BH-Tuqip.js";import{a as P}from"./index-CNk5TCeU.js";import{u as f}from"./useFunctions-BLXtJh29.js";import{u as Q}from"./adminParamsStore-DcMQFB3x.js";const o=m=>(G("data-v-a10929b9"),m=m(),H(),m),X={class:"container min-vh-100"},Y=o(()=>s("h5",{class:"fw-bold page-title mb-4"}," Registerd Users",-1)),Z={class:"row g-3"},ss={class:"col-md-3"},es={class:"card border-0 shadow-sm h-100"},ts={class:"card-body"},os={class:"d-flex justify-content-between align-items-cente"},as={class:"col-6"},is={class:"fs-4 fw-bold text-mute"},ns=o(()=>s("div",null,[s("span",{class:"small"},"Registered Users")],-1)),ls={class:"col-6"},cs={class:"col-md-3"},ds={class:"card border-0 shadow-sm h-100"},rs={class:"card-body"},_s={class:"d-flex justify-content-between align-items-cente"},ps={class:"col-6"},us={class:"fs-4 fw-bold text-mute"},hs=o(()=>s("div",null,[s("span",{class:"small"},"Active Users")],-1)),vs={class:"col-6"},ms={class:"col-md-3"},bs={class:"card border-0 shadow-sm h-100"},gs={class:"card-body"},ys={class:"d-flex justify-content-between align-items-cente"},fs={class:"col-7"},ws={class:"fs-4 fw-bold text-mute"},xs=o(()=>s("span",{class:"small"},"New Users",-1)),ks=o(()=>s("br",null,null,-1)),Cs={style:{color:"green"}},Ss={class:"col-5"},Us={class:"col-md-3"},Ds={class:"card border-0 shadow-sm h-100"},As={class:"card-body"},Is={class:"row justify-content-between align-items-cente"},Ls={class:"col-6"},Ps={class:"fs-4 fw-bold text-mute"},Ts=o(()=>s("div",null,[s("span",{class:"small"},"Verified Users"),p(),s("br")],-1)),Vs={class:"col-6"},Bs={class:"col-12"},Es={style:{color:"red"}},Ns={class:"col-12"},js={class:"card"},Os={class:"card-body"},Rs={class:"row mb-4"},Fs=o(()=>s("div",{class:"col-lg-8"},null,-1)),$s={class:"col-lg-4"},qs={class:"fw-bold text-muted"},Ms={key:0,class:"badge bg-success-subtle text-dark",style:{width:"60px"}},Ks={key:1,class:"badge bg-warning-subtle text-dark",style:{width:"60px"}},Ws={key:0,class:"badge bg-success-subtle text-dark",style:{width:"60px"}},zs={key:1,class:"badge bg-warning-subtle text-dark",style:{width:"60px"}},Gs={key:0,class:"badge bg-success-subtle text-dark",style:{width:"60px"}},Hs={key:1,class:"badge bg-warning-subtle text-dark",style:{width:"60px"}},Js={class:"dropdown"},Qs={class:"cursor-pointer bell dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},Xs=o(()=>s("i",{class:"bi bi-three-dots text-primary"},null,-1)),Ys={class:"dropdown-menu dropdown-menu-start"},Zs={class:"list-group list-group-flush"},se=["onClick"],ee=o(()=>s("i",{class:"bi bi-eye"},null,-1)),te=["onClick"],oe=o(()=>s("i",{class:"bi bi-exclamation-circle-fill"},null,-1)),ae=["onClick"],ie=o(()=>s("i",{class:"bi bi-check-circle-fill"},null,-1)),ne=q({__name:"AdminUsers",setup(m){const T=Q(),V=M();K(()=>{b()});const r=i([]);async function b(){try{const c={search:v.value,page:u.value.page,rowsPerPage:u.value.rowsPerPage},d=new URLSearchParams(c).toString(),h=(await P.getUsers(d)).data.data;w.value=h.users.total,x.value=h.users.data,r.value=h,k.value=!1,console.log("users:",h)}catch{}}const w=i(0),v=i(""),x=i([]),k=i(!0),B=[{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Email Verification",value:"email_verified_at"},{text:"Status",value:"status"},{text:"Date Registered",value:"created_at"},{text:"Last Login",value:"last_login"},{text:"Kyc Status",value:"kyc_status"},{text:"Action",value:"action"}],u=i({page:1,rowsPerPage:15,search:v.value});A(u,c=>{b()},{deep:!0});const E=f.debounce(b,500);A(v,()=>{u.value.page=1,E()},{deep:!0});function N(c){T.isCompaniesByUser=c,V.push({path:"/admin/companies"})}async function C(c,d){try{const a=new FormData;a.append("user_id",c),a.append("status",d),await P.updateUserStatus(a),b()}catch{}}const j={colors:["#064608","#b1f5b3"],chart:{type:"pie"},dataLabels:{enabled:!1},legend:{show:!1},tooltip:{enabled:!1},responsive:[{options:{chart:{},legend:{position:"bottom"}}}]},O=i([1,9]),R={colors:["#16497c","#92b3d5"],chart:{type:"pie"},dataLabels:{enabled:!1},legend:{show:!1},tooltip:{enabled:!1},responsive:[{options:{chart:{},legend:{position:"bottom"}}}]},F=i([8,2]),S={colors:["#463206","#ecd29c"],chart:{type:"pie"},dataLabels:{enabled:!1},legend:{show:!1},tooltip:{enabled:!1},responsive:[{options:{chart:{},legend:{position:"bottom"}}}]},U=i([3,7]);return(c,d)=>{const a=y("apexchart"),h=y("isLoadingComponent"),$=y("EasyDataTable");return t(),n("div",X,[Y,s("div",Z,[s("div",ss,[s("div",es,[s("div",ts,[s("div",os,[s("div",as,[s("span",is,l(r.value.userCount),1),ns]),s("div",ls,[g(a,{type:"pie",options:j,series:O.value},null,8,["series"])])])])])]),s("div",cs,[s("div",ds,[s("div",rs,[s("div",_s,[s("div",ps,[s("span",us,l(r.value.active),1),hs]),s("div",vs,[g(a,{type:"pie",options:R,series:F.value},null,8,["series"])])])])])]),s("div",ms,[s("div",bs,[s("div",gs,[s("div",ys,[s("div",fs,[s("span",ws,l(r.value.newUsers),1),s("div",null,[xs,p(),ks,s("small",Cs,l(r.value.newThisWeek)+" this week",1)])]),s("div",Ss,[g(a,{type:"pie",options:S,series:U.value},null,8,["series"])])])])])]),s("div",Us,[s("div",Ds,[s("div",As,[s("div",Is,[s("div",Ls,[s("span",Ps,l(r.value.verified),1),Ts]),s("div",Vs,[g(a,{type:"pie",options:S,series:U.value},null,8,["series"])]),s("div",Bs,[s("small",Es,l(r.value.unVerified)+" pending unverified ",1)])])])])]),s("div",Ns,[s("div",js,[s("div",Os,[s("div",Rs,[Fs,s("div",$s,[W(s("input",{"onUpdate:modelValue":d[0]||(d[0]=e=>v.value=e),type:"text",class:"form-control",placeholder:"search.."},null,512),[[z,v.value]])])]),k.value?(t(),I(h,{key:0})):(t(),I($,{key:1,class:"easy-data-table","show-index":"",headers:B,items:x.value,"buttons-pagination":"","server-options":u.value,"onUpdate:serverOptions":d[1]||(d[1]=e=>u.value=e),"server-items-length":w.value},{header:_(e=>[s("span",qs,l(e.text=="#"?"S/N":e.text),1)]),"item-last_login":_(e=>[p(l(L(f).dateDisplay(e.last_login)),1)]),"item-created_at":_(e=>[p(l(L(f).dateDisplay(e.created_at)),1)]),"item-status":_(e=>[e.status==1?(t(),n("span",Ms,"ACTIVE")):(t(),n("span",Ks,"DISABLED"))]),"item-kyc_status":_(e=>[e.kyc_status!=null?(t(),n("span",Ws,"Completed")):(t(),n("span",zs,"pending"))]),"item-email_verified_at":_(e=>[e.email_verified_at!=null?(t(),n("span",Gs,"verified")):(t(),n("span",Hs,"pending"))]),"item-action":_(e=>[s("span",Js,[s("span",Qs,[Xs,s("div",Ys,[s("ul",Zs,[s("li",{onClick:D=>N(e.id),class:"dropdown-item text-primary",style:{"background-color":"transparent !important"}},[ee,p(" Companies ")],8,se),e.status==1?(t(),n("li",{key:0,onClick:D=>C(e.id,2),class:"dropdown-item text-danger",style:{"background-color":"transparent !important"}},[oe,p(" Disable user ")],8,te)):(t(),n("li",{key:1,onClick:D=>C(e.id,1),class:"dropdown-item text-success",style:{"background-color":"transparent !important"}},[ie,p(" Activate user ")],8,ae))])])])])]),_:1},8,["items","server-options","server-items-length"]))])])])])])}}}),_e=J(ne,[["__scopeId","data-v-a10929b9"]]);export{_e as default};