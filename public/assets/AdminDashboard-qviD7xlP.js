import{d as z,M as $,k as G,r as c,z as X,l as y,o as g,c as f,b as t,B as p,s as m,t as o,f as d,G as J,H as K,O as F,A as w,C as Q,D as W,_ as Z}from"./index-fs8rtNj8.js";import{a as C}from"./index-HBKCyU0-.js";import{u as x}from"./useFunctions-BABide0l.js";const l=b=>(Q("data-v-b66bf730"),b=b(),W(),b),tt={class:"container"},st=l(()=>t("h5",{class:"fw-bold page-title mb-4"}," Overview",-1)),et={class:"row g-3"},at={class:"col-md-4 pb-3"},ot={class:"card border-0 shadow-sm h-70"},nt={class:"card-body"},lt={class:"d-flex justify-content-between align-items-cente"},ct={class:"col-12"},dt={class:"fs-4 fw-bold text-primary"},it=l(()=>t("span",{class:"small fw-bold"},"Total Companies",-1)),rt={style:{"font-size":"10px"},class:""},_t={class:"text-info fw-bold"},ut={class:"small badge bg-success"},pt={class:"small badge bg-danger"},ht={class:"col-md-4"},vt={class:"card border-0 shadow-sm h-70"},mt={class:"card-body"},gt={class:"d-flex justify-content-between align-items-cente"},ft={class:"col-12"},bt={class:"fs-4 fw-bold text-warning"},yt=l(()=>t("div",null,[t("span",{class:"small fw-bold"},"Pending Incorporation")],-1)),wt={class:"small"},xt={class:"text-primary fw-bold"},Dt={class:"col-md-4"},St={class:"card border-0 shadow-sm h-70"},Mt={class:"card-body"},Ct={class:"d-flex justify-content-between align-items-cente"},At={class:"col-12"},Ot={class:"fs-4 fw-bold text-success"},Rt=l(()=>t("div",null,[t("span",{class:"small fw-bold"},"Incorporated")],-1)),Tt={class:"small"},kt={class:"text-primary fw-bold"},It={class:"col-lg-6"},Lt={class:"row g-3"},Pt={class:"col-md-12"},Ut={class:"card shadow-sm h-100"},Vt={class:"card-body"},Et={class:"card-header bg-transparent border-0 fw-bold py-4"},Yt=l(()=>t("h5",null,"Registered Companies",-1)),Ft={class:"float-en m-0"},jt={class:"fw-bold"},Nt={class:"samll text-mute"},Bt={class:"row g-3"},Ht={class:"col-lg-12"},qt={class:"smal fw-bold"},zt=l(()=>t("div",{class:"small text-mute"},null,-1)),$t={class:"col-lg-12"},Gt={class:"card p-0"},Xt={class:"col-lg-6"},Jt={class:"card shadow-sm h-100"},Kt={class:"card-body"},Qt=l(()=>t("h5",{class:"card-header bg-transparent border-1 py-1"}," Recent Activities ",-1)),Wt={class:"list-group list-group-flush"},Zt={class:"list-group-item px-0"},ts={class:"row justify-content-left align-items-left px-3"},ss={class:"col-10"},es={class:"small"},as=l(()=>t("span",{class:"text-primary fw-bold"},"User: ",-1)),os={class:"small"},ns=l(()=>t("span",{class:"text-info"}," Action:",-1)),ls={class:"small"},cs=l(()=>t("span",{class:"text-primary"},"IP:",-1)),ds={class:"small"},is=l(()=>t("span",{class:"text-info"},"Location:",-1)),rs={class:"small"},_s=l(()=>t("span",{class:"text-primary"},"Date:",-1)),us={class:"col-12"},ps={class:"card"},hs={class:"card-body"},vs={class:"card-header fw-bold bg-transparent border-0 py-3"},ms={class:"d-lg-flex justify-content-center g-3 align-items-center"},gs=l(()=>t("div",{class:"col-md-8"},[t("h5",null,"Transaction History")],-1)),fs={class:"col-md-4"},bs={class:"fw-bold text-muted"},ys={key:0},ws={class:"badge rounded-pill text-bg-success"},xs={key:1},Ds={class:"badge rounded-pill text-bg-warning"},Ss=z({__name:"AdminDashboard",setup(b){$(),G(()=>{j(),k(),M(),P(),T()});const D=e=>{const n=F(e[0],"MMM D, YYYY"),a=F(e[1],"MMM D, YYYY");return`${n.value} - ${a.value}`};function j(){const e=new Date,n=new Date(new Date().setDate(e.getDate()-7));i.value=v.value=[n,e]}const i=c([]),h=c([]),A=X(()=>{const e=new Date(i.value[0]),n=new Date(i.value[1]),a=[];for(;e<=n;){const r=e.toISOString().split("T")[0];a.push(r),e.setDate(e.getDate()+1)}return a});y(()=>i.value,async()=>{await k(),T()});const O=c({}),R=c([{name:"Companies",data:[]}]);function T(){O.value={chart:{type:"area",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{show:!0,curve:"smooth",lineCap:"round",width:1,dashArray:0},fill:{type:"gradient",gradient:{gradientToColors:["#ccc"],shadeIntensity:0,inverseColors:!0,opacityFrom:.5,opacityTo:0,stops:[0,75]}},states:{hover:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],xaxis:{categories:A.value,type:"datetime",labels:{datetimeFormatter:{year:"yyyy",month:"MMM 'yyyy",day:"dd MMM",hour:"HH:mm"}}},colors:["#0d6efd","#7B61FF"],legend:{show:!1},tooltip:{enabled:!0}};const e=[];A.value.forEach(n=>{const a=h.value.filter(r=>new Date(r.created_at).toDateString()==new Date(n).toDateString());e.push(a.length)}),R.value=[{name:"Companies",data:e}]}const _=c([]);async function k(){var e,n;try{const a={start_date:x.formatDate(i.value[0]),end_date:x.formatDate(i.value[1])},r=await C.getCompanyStats(a);h.value=((e=r.data)==null?void 0:e.data.company)??[],_.value=((n=r.data)==null?void 0:n.data)??[],console.log(h.value)}catch{}}const N=c(0),I=c([]),L=c({page:1,rowsPerPage:15});async function P(){try{const e=new URLSearchParams(L.value).toString(),a=(await C.UserctivityLog(e)).data.data;N.value=a.total,I.value=a.data}catch{}}y(L,e=>{P()},{deep:!0});const v=c([]),U=c(0),V=c([]),S=c({page:1,rowsPerPage:15});async function M(){try{const e={start_date:x.formatDate(v.value[0]),end_date:x.formatDate(v.value[1])},a=(await C.getRevenueStats(e)).data.data;console.log(a,"transactions logs"),U.value=a.total,V.value=a}catch{}}y(S,e=>{M()},{deep:!0}),y(v,e=>{M()},{deep:!0});const B=[{text:"PAYMENT REF",value:"payment_ref"},{text:"CUSTOMER",value:"user.name"},{text:"DATE",value:"date_paid"},{text:"AMOUNT",value:"amount"},{text:"SATUS",value:"status"}];return(e,n)=>{const a=w("router-link"),r=w("VueDatePicker"),H=w("apexchart"),q=w("EasyDataTable");return g(),f("div",tt,[st,t("div",et,[t("div",at,[p(a,{to:"/admin/companies",style:{"text-decoration":"none"}},{default:m(()=>{var s,u,E,Y;return[t("div",ot,[t("div",nt,[t("div",lt,[t("div",ct,[t("span",dt,o((s=h.value)==null?void 0:s.length),1),t("div",null,[it,d("   "),t("small",rt,[t("span",_t,o((u=_.value)==null?void 0:u.thismonth),1),d(" added this month")])]),t("div",null,[t("span",ut,o((E=_.value)==null?void 0:E.active)+" active ",1),d("   "),t("span",pt,o((Y=_.value)==null?void 0:Y.inactive)+" Inactive ",1)])])])])])]}),_:1})]),t("div",ht,[p(a,{to:"/admin/companies",style:{"text-decoration":"none"}},{default:m(()=>{var s,u;return[t("div",vt,[t("div",mt,[t("div",gt,[t("div",ft,[t("span",bt,o((s=_.value)==null?void 0:s.Unincorporated),1),yt,t("div",null,[t("span",wt,[t("span",xt,o((u=_.value)==null?void 0:u.thisMonthUnIncorporated),1),d(" new company added this month")])])])])])])]}),_:1})]),t("div",Dt,[p(a,{to:"/admin/companies",style:{"text-decoration":"none"}},{default:m(()=>{var s,u;return[t("div",St,[t("div",Mt,[t("div",Ct,[t("div",At,[t("span",Ot,o(((s=_.value)==null?void 0:s.incorporated)??"0"),1),Rt,t("div",null,[t("span",Tt,[t("span",kt,o(((u=_.value)==null?void 0:u.thisMonthIncorporated)??"0"),1),d(" new companies added this month")])])])])])])]}),_:1})]),t("div",It,[t("div",Lt,[t("div",Pt,[t("div",Ut,[t("div",Vt,[t("h5",Et,[Yt,t("div",Ft,[p(r,{class:"small",format:D,range:"","multi-calendars":"",clearable:!1,"enable-time-picker":!1,"auto-apply":"",modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=s=>i.value=s)},null,8,["modelValue"])])]),t("div",jt,[t("span",Nt,"Total Company Registered since "+o(i.value?D(i.value):""),1)]),t("div",Bt,[t("div",Ht,[t("div",qt,o(h.value.length)+" "+o(h.value.length==1?"company":"companies"),1),zt]),t("div",$t,[t("div",Gt,[p(H,{type:"area",options:O.value,series:R.value},null,8,["options","series"])])])])])])])])]),t("div",Xt,[t("div",Jt,[t("div",Kt,[Qt,t("ul",Wt,[(g(!0),f(J,null,K(I.value,s=>(g(),f("li",Zt,[t("div",ts,[t("div",ss,[t("div",es,[as,d(" "+o(s.name),1)]),t("div",os,[ns,d(" "+o(s.action),1)]),t("div",ls,[cs,d(" "+o(s.ip_address),1)]),t("div",ds,[is,d(" "+o(s.location),1)]),t("div",rs,[_s,d(" "+o(new Date(s.updated_at).toLocaleString()),1)])])])]))),256))])])])]),t("div",us,[t("div",ps,[t("div",hs,[t("div",vs,[t("div",ms,[gs,t("div",fs,[p(r,{format:D,range:"","multi-calendars":"",clearable:!1,"enable-time-picker":!1,"auto-apply":"",modelValue:v.value,"onUpdate:modelValue":n[1]||(n[1]=s=>v.value=s)},null,8,["modelValue"])])])]),p(q,{class:"easy-data-table border-0","show-index":"",headers:B,items:V.value,"buttons-pagination":"","server-options":S.value,"onUpdate:serverOptions":n[2]||(n[2]=s=>S.value=s),"server-items-length":U.value},{header:m(s=>[t("span",bs,o(s.text=="#"?"S/N":s.text),1)]),"item-action_status":m(s=>[s.action_status=="COMPLETED"?(g(),f("span",ys,[t("span",ws,o(s.action_status),1)])):(g(),f("span",xs,[t("span",Ds,o(s.action_status),1)]))]),"item-updated_at":m(s=>[d(o(new Date(s.updated_at).toLocaleString()),1)]),_:1},8,["items","server-options","server-items-length"])])])])])])}}}),Os=Z(Ss,[["__scopeId","data-v-b66bf730"]]);export{Os as default};
