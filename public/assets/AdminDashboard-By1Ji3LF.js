import{d as G,M as X,k as J,r as c,z as K,l as w,o as f,c as y,b as t,B as h,s as g,t as a,f as i,G as Q,H as W,O as j,A as x,C as Z,D as tt,_ as st}from"./index-CW_PtCg6.js";import{a as O}from"./index-Cu2hPZwR.js";import{u as D}from"./useFunctions-BMMy8IKc.js";const l=b=>(Z("data-v-6b4dd4ae"),b=b(),tt(),b),et={class:"container"},at=l(()=>t("h5",{class:"fw-bold page-title mb-4"}," Overview",-1)),ot={class:"row g-3"},nt={class:"col-md-4 pb-3"},dt={class:"card border-0 shadow-sm h-70"},lt={class:"card-body"},ct={class:"d-flex justify-content-between align-items-cente"},it={class:"col-12"},rt={class:"fs-4 fw-bold text-primary"},_t=l(()=>t("span",{class:"small fw-bold"},"Total Companies",-1)),ut={style:{"font-size":"10px"},class:""},pt={class:"text-info fw-bold"},ht={class:"small badge bg-success"},vt={class:"small badge bg-danger"},mt={class:"col-md-4"},gt={class:"card border-0 shadow-sm h-70"},ft={class:"card-body"},yt={class:"d-flex justify-content-between align-items-cente"},bt={class:"col-12"},wt={class:"fs-4 fw-bold text-warning"},xt=l(()=>t("div",null,[t("span",{class:"small fw-bold"},"Pending Incorporation")],-1)),Dt={class:"small"},St={class:"text-primary fw-bold"},Mt={class:"col-md-4"},Ct={class:"card border-0 shadow-sm h-70"},Ot={class:"card-body"},Rt={class:"d-flex justify-content-between align-items-cente"},At={class:"col-12"},Tt={class:"fs-4 fw-bold text-success"},kt=l(()=>t("div",null,[t("span",{class:"small fw-bold"},"Incorporated")],-1)),It={class:"small"},Lt={class:"text-primary fw-bold"},Ut={class:"col-lg-6"},Vt={class:"row g-3"},Pt={class:"col-md-12"},Et={class:"card shadow-sm h-100"},Yt={class:"card-body"},jt={class:"card-header bg-transparent border-0 fw-bold py-4"},Ft=l(()=>t("h5",null,"Registered Companies",-1)),Nt={class:"float-en m-0"},Bt={class:"fw-bold"},Ht={class:"samll text-mute"},qt={class:"row g-3"},zt={class:"col-lg-12"},$t={class:"smal fw-bold"},Gt=l(()=>t("div",{class:"small text-mute"},null,-1)),Xt={class:"col-lg-12"},Jt={class:"card p-0"},Kt={class:"col-lg-6"},Qt={class:"card shadow-sm h-100"},Wt={class:"card-body"},Zt=l(()=>t("h5",{class:"card-header bg-transparent border-1 py-1"}," Recent Activities ",-1)),ts={class:"list-group list-group-flush"},ss={class:"list-group-item px-0"},es={class:"row justify-content-left align-items-left px-3"},as={class:"col-10"},os={class:"small"},ns=l(()=>t("span",{class:"text-primary fw-bold"},"User: ",-1)),ds={class:"small"},ls=l(()=>t("span",{class:"text-info"}," Action:",-1)),cs={class:"small"},is=l(()=>t("span",{class:"text-primary"},"IP:",-1)),rs={class:"small"},_s=l(()=>t("span",{class:"text-info"},"Location:",-1)),us={class:"small"},ps=l(()=>t("span",{class:"text-primary"},"Date:",-1)),hs={class:"col-12"},vs={class:"card"},ms={class:"card-body"},gs={class:"card-header fw-bold bg-transparent border-0 py-3"},fs={class:"d-lg-flex justify-content-center g-3 align-items-center"},ys=l(()=>t("div",{class:"col-md-8"},[t("h5",null,"Transaction History")],-1)),bs={class:"col-md-4"},ws={class:"fw-bold text-muted"},xs={key:0},Ds={class:"badge rounded-pill text-bg-success"},Ss={key:1},Ms={class:"badge rounded-pill text-bg-warning"},Cs=G({__name:"AdminDashboard",setup(b){X(),J(()=>{F(),I(),C(),V(),k()});const S=e=>{const o=j(e[0],"MMM D, YYYY"),n=j(e[1],"MMM D, YYYY");return`${o.value} - ${n.value}`};function F(){const e=new Date,o=new Date(new Date().setDate(e.getDate()-7));r.value=v.value=[o,e]}const r=c([]),d=c([]),R=K(()=>{const e=new Date(r.value[0]),o=new Date(r.value[1]),n=[];for(;e<=o;){const m=e.toISOString().split("T")[0];n.push(m),e.setDate(e.getDate()+1)}return n});w(()=>r.value,async()=>{await I(),k()});const A=c({}),T=c([{name:"Companies",data:[]}]);function k(){A.value={chart:{type:"area",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{show:!0,curve:"smooth",lineCap:"round",width:1,dashArray:0},fill:{type:"gradient",gradient:{gradientToColors:["#ccc"],shadeIntensity:0,inverseColors:!0,opacityFrom:.5,opacityTo:0,stops:[0,75]}},states:{hover:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],xaxis:{categories:R.value,type:"datetime",labels:{datetimeFormatter:{year:"yyyy",month:"MMM 'yyyy",day:"dd MMM",hour:"HH:mm"}}},colors:["#0d6efd","#7B61FF"],legend:{show:!1},tooltip:{enabled:!0}};const e=[];R.value.forEach(o=>{const n=d.value.filter(m=>new Date(m.created_at).toDateString()==new Date(o).toDateString());e.push(n.length)}),T.value=[{name:"Companies",data:e}]}async function I(){var e;try{const o={start_date:D.formatDate(r.value[0]),end_date:D.formatDate(r.value[1])},n=await O.getCompanyStats(o);d.value=((e=n.data)==null?void 0:e.data)??[],console.log(d.value)}catch{}}const N=c(0),L=c([]),U=c({page:1,rowsPerPage:15});async function V(){try{const e=new URLSearchParams(U.value).toString(),n=(await O.UserctivityLog(e)).data.data;N.value=n.total,L.value=n.data}catch{}}w(U,e=>{V()},{deep:!0});const v=c([]),B=c(0),H=c([]),M=c({page:1,rowsPerPage:15});async function C(){try{const e={start_date:D.formatDate(v.value[0]),end_date:D.formatDate(v.value[1])},o=await O.getRevenueStats(e)}catch{}}w(M,e=>{C()},{deep:!0}),w(v,e=>{C()},{deep:!0});const q=[{text:"ORDER NO.",value:"payment_ref"},{text:"CUSTOMER",value:"user.name"},{text:"DATE",value:"date_paid"},{text:"AMOUNT",value:"amount"},{text:"SATUS",value:"status"}];return(e,o)=>{const n=x("router-link"),m=x("VueDatePicker"),z=x("apexchart"),$=x("EasyDataTable");return f(),y("div",et,[at,t("div",ot,[t("div",nt,[h(n,{to:"/admin/companies",style:{"text-decoration":"none"}},{default:g(()=>{var s,_,u,p,P,E,Y;return[t("div",dt,[t("div",lt,[t("div",ct,[t("div",it,[t("span",rt,a((s=d.value)==null?void 0:s.total),1),t("div",null,[_t,i("   "),t("small",ut,[t("span",pt,a((u=(_=d.value)==null?void 0:_.data)==null?void 0:u.thismonth),1),i(" added this month")])]),t("div",null,[t("span",ht,a((P=(p=d.value)==null?void 0:p.data)==null?void 0:P.active)+" active ",1),i("   "),t("span",vt,a((Y=(E=d.value)==null?void 0:E.data)==null?void 0:Y.inactive)+" Inactive ",1)])])])])])]}),_:1})]),t("div",mt,[h(n,{to:"/admin/companies",style:{"text-decoration":"none"}},{default:g(()=>{var s,_,u,p;return[t("div",gt,[t("div",ft,[t("div",yt,[t("div",bt,[t("span",wt,a((_=(s=d.value)==null?void 0:s.data)==null?void 0:_.Unincorporated),1),xt,t("div",null,[t("span",Dt,[t("span",St,a((p=(u=d.value)==null?void 0:u.data)==null?void 0:p.thisMonthUnIncorporated),1),i(" new company added this month")])])])])])])]}),_:1})]),t("div",Mt,[h(n,{to:"/admin/companies",style:{"text-decoration":"none"}},{default:g(()=>{var s,_,u,p;return[t("div",Ct,[t("div",Ot,[t("div",Rt,[t("div",At,[t("span",Tt,a(((_=(s=d.value)==null?void 0:s.data)==null?void 0:_.incorporated)??"0"),1),kt,t("div",null,[t("span",It,[t("span",Lt,a(((p=(u=d.value)==null?void 0:u.data)==null?void 0:p.thisMonthIncorporated)??"0"),1),i(" new companies added this month")])])])])])])]}),_:1})]),t("div",Ut,[t("div",Vt,[t("div",Pt,[t("div",Et,[t("div",Yt,[t("h5",jt,[Ft,t("div",Nt,[h(m,{class:"small",format:S,range:"","multi-calendars":"",clearable:!1,"enable-time-picker":!1,"auto-apply":"",modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=s=>r.value=s)},null,8,["modelValue"])])]),t("div",Bt,[t("span",Ht,"Total Company Registered since "+a(r.value?S(r.value):""),1)]),t("div",qt,[t("div",zt,[t("div",$t,a(d.value.length)+" "+a(d.value.length==1?"company":"companies"),1),Gt]),t("div",Xt,[t("div",Jt,[h(z,{type:"area",options:A.value,series:T.value},null,8,["options","series"])])])])])])])])]),t("div",Kt,[t("div",Qt,[t("div",Wt,[Zt,t("ul",ts,[(f(!0),y(Q,null,W(L.value,s=>(f(),y("li",ss,[t("div",es,[t("div",as,[t("div",os,[ns,i(" "+a(s.name),1)]),t("div",ds,[ls,i(" "+a(s.action),1)]),t("div",cs,[is,i(" "+a(s.ip_address),1)]),t("div",rs,[_s,i(" "+a(s.location),1)]),t("div",us,[ps,i(" "+a(new Date(s.updated_at).toLocaleString()),1)])])])]))),256))])])])]),t("div",hs,[t("div",vs,[t("div",ms,[t("div",gs,[t("div",fs,[ys,t("div",bs,[h(m,{format:S,range:"","multi-calendars":"",clearable:!1,"enable-time-picker":!1,"auto-apply":"",modelValue:v.value,"onUpdate:modelValue":o[1]||(o[1]=s=>v.value=s)},null,8,["modelValue"])])])]),h($,{class:"easy-data-table border-0","show-index":"",headers:q,items:H.value,"buttons-pagination":"","server-options":M.value,"onUpdate:serverOptions":o[2]||(o[2]=s=>M.value=s),"server-items-length":B.value},{header:g(s=>[t("span",ws,a(s.text=="#"?"S/N":s.text),1)]),"item-action_status":g(s=>[s.action_status=="COMPLETED"?(f(),y("span",xs,[t("span",Ds,a(s.action_status),1)])):(f(),y("span",Ss,[t("span",Ms,a(s.action_status),1)]))]),"item-updated_at":g(s=>[i(a(new Date(s.updated_at).toLocaleString()),1)]),_:1},8,["items","server-options","server-items-length"])])])])])])}}}),Ts=st(Cs,[["__scopeId","data-v-6b4dd4ae"]]);export{Ts as default};
