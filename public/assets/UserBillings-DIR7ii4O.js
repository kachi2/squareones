import{a as _}from"./index-CXXuVV6p.js";import{u as P}from"./paramsStore-D4YOKsZ3.js";import{u as k}from"./useFunctions-DrElNW4R.js";import{d as C,k as N,p as v,r as c,l as S,o as i,c as l,b as t,t as e,f as p,q as g,s as m,e as T,A as f}from"./index-DRAmyg4x.js";import"./sweetalert2.all-DnBO6ktB.js";const A={class:"container"},I={class:"row g-4"},U={class:"col-lg-6 mb-4"},M={class:"card shadow-sm p- border-1 h-100"},H={class:"card-body"},L={class:"table-responsive"},F=t("div",{class:"fw-bold mb-2"},"Billing Plan",-1),O={class:"table table-borderless table-sm"},R={key:0},V={class:""},Y=t("td",null,"Billing Plan:",-1),q={class:""},K={class:""},j=t("td",null,"Billing Price:",-1),z={class:""},G={class:""},J=t("td",null,"Renewal date:",-1),Q={class:""},W=t("td",null," Duration",-1),X={key:1},Z=t("tr",null,[t("td",null," No Billing plan information found")],-1),$=[Z],tt={class:"col-lg-6 mb-4"},st={class:"card shadow-sm p- border-1 h-100"},ot={class:"card-body"},et={class:"table-responsive"},at=t("div",{class:"fw-bold mb-2"},"Billing information",-1),nt={class:"table table-borderless table-sm"},dt={key:0},it={class:""},lt=t("td",null,"Payment method:",-1),ct={class:""},rt=t("i",{class:"bi bi-credit-card"},null,-1),_t={class:""},pt=t("td",null,"Card Number:",-1),mt={class:""},ut={class:""},ht=t("td",null,"Card Holder Name:",-1),bt={class:""},yt={class:""},vt=t("td",null,"Card Holder Email:",-1),gt={class:""},ft={class:""},xt=t("td",null,"Expiry Date:",-1),wt={class:""},Dt={key:1},Bt=t("tr",null,[t("td",null," No Billing Information Found")],-1),Et=[Bt],Pt=t("div",{class:"card-footer border-0 bg-transparent py-3"},null,-1),kt={class:"col-12 mt-4"},Ct={class:"card"},Nt=t("div",{class:"fw-bold mb-2 p-3"},"Billing History",-1),St={class:"card-body"},Tt=t("span",{class:"m-2 btn btn-outline-secondary btn-sm float-end"}," Downlod Logs",-1),At={class:"fw-bold text-muted"},It={class:"dropdown"},Ut={class:"cursor-pointer bell dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},Mt=t("i",{class:"bi bi-three-dots text-primary"},null,-1),Ht={class:"dropdown-menu dropdown-menu-start"},Lt={class:"list-group list-group-flush"},Ft=t("i",{class:"bi bi-trash3"},null,-1),jt=C({__name:"UserBillings",setup(Ot){P(),N(()=>{u(),x(),w()});const o=v({card_name:"",card_no:"",country:"",expiry:"",email:"",name:""}),a=v({plan_name:"",expiry_date:"",amount_paid:"",payment_id:"",duration:""});async function x(){try{const s=(await _.getPaymentInfo()).data;o.card_name=s.card_name,o.card_no=s.card_no,o.country=s.country,o.expiry=s.expiry,o.email=s.email,o.name=s.name}catch{}}async function w(){try{const s=(await _.getUserSubscription()).data;a.plan_name=s.plans.plan,a.expiry_date=s.expiry_date,a.amount_paid=s.amount_paid,a.payment_id=s.payment_id,a.duration=s.plans.duration+" Days",console.log(s,"getUserSubscription")}catch{}}async function u(){try{const s=(await _.userBillings()).data.data;h.value=s.total,b.value=s.data,y.value=!1}catch(n){console.log(n)}}const r=c({page:1,rowsPerPage:15}),h=c(0),b=c([]),y=c(!0),D=[{text:"PAYMENT STATUS",value:"status"},{text:"PAYMENT REFERENCE",value:"payment_ref"},{text:"AMOUNT PAID",value:"amount"},{text:"PAYMENT ID",value:"payment_intent"},{text:"DATE",value:"date_paid"}];return S(r,n=>{u()},{deep:!0}),(n,s)=>{const B=f("isLoadingComponent"),E=f("EasyDataTable");return i(),l("div",A,[t("div",I,[t("div",U,[t("div",M,[t("div",H,[t("div",L,[F,t("table",O,[a.plan_name?(i(),l("tbody",R,[t("tr",V,[Y,t("td",q,e(a.plan_name),1)]),t("tr",K,[j,t("td",z,e(a.amount_paid)+" HKD",1)]),t("tr",G,[J,t("td",Q,e(a.plan_name),1)]),t("tr",null,[W,t("td",null,e(a.duration),1)])])):(i(),l("tbody",X,$))])])])])]),t("div",tt,[t("div",st,[t("div",ot,[t("div",et,[at,t("table",nt,[o.card_no?(i(),l("tbody",dt,[t("tr",it,[lt,t("td",ct,[rt,p(" "+e(o.card_name??"VISA")+" Credit Card ",1)])]),t("tr",_t,[pt,t("td",mt," **** **** ***** "+e(o.card_no),1)]),t("tr",ut,[ht,t("td",bt,e(o.name),1)]),t("tr",yt,[vt,t("td",gt,e(o.email),1)]),t("tr",ft,[xt,t("td",wt,e(o.expiry),1)])])):(i(),l("tbody",Dt,Et))])])]),Pt])]),t("div",kt,[t("div",Ct,[Nt,t("div",St,[Tt,y.value?(i(),g(B,{key:0})):(i(),g(E,{key:1,class:"easy-data-table","show-index":"",headers:D,items:b.value,"buttons-pagination":"","server-options":r.value,"onUpdate:serverOptions":s[1]||(s[1]=d=>r.value=d),"server-items-length":h.value},{header:m(d=>[t("span",At,e(d.text=="#"?"S/N":d.text),1)]),"item-date_paid":m(d=>[p(e(T(k).dateDisplay(d.date_paid)),1)]),"item-action":m(d=>[t("span",It,[t("span",Ut,[Mt,t("div",Ht,[t("ul",Lt,[t("li",{onClick:s[0]||(s[0]=()=>{}),class:"dropdown-item text-danger",style:{"background-color":"transparent !important"}},[Ft,p(" Delete ")])])])])])]),_:1},8,["items","server-options","server-items-length"]))])])])])])}}});export{jt as default};