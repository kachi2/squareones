import{a as E}from"./index-BL2SeLQF.js";import{u as D}from"./adminParamsStore-Ctbgljwy.js";import"./sweetalert2.all-DN20mIgf.js";import{d as S,p as P,k as T,r as n,l as C,o as m,c as B,b as e,q as h,s as i,t as b,f as v,j as k,A as f}from"./index-C7Koc73a.js";const U={class:"container"},I={class:"row g-4"},M=k('<div class="col-lg-4 mb-4"><div class="card shadow-sm p-2 border-0 h-100"><div class="fw-bold mb-2">Subscription Plan</div><div class="table-responsive"><table class="table table-borderless table-sm"><tbody><tr class=""><td>Subscription:</td><td class="fw-bold">Annual Plan</td></tr><tr class=""><td>Contact person:</td><td class="fw-bold">John Doe</td></tr><tr class=""><td>Renewal date:</td><td class="fw-bold">17 August 2024 (365 days left) </td></tr></tbody></table></div></div></div><div class="col-lg-4 mb-4"><div class="card shadow-sm p-2 border-0 h-100"><div class="fw-bold mb-2">Payment details</div><div class="table-responsive"><table class="table table-borderless table-sm"><tbody><tr class=""><td>Payment method:</td><td class="fw-bold">VISA ending in 1890 (Expires Nov 20, 2029)</td></tr><tr class=""><td>Upcoming bill:</td><td class="fw-bold">17 August 2024 </td></tr></tbody></table></div></div></div><div class="col-lg-4 mb-4"><div class="card shadow-sm p-2 border-0 h-100"><div class="fw-bold mb-2">Billing information</div><div class="table-responsive"><table class="table table-borderless table-sm"><tbody><tr class=""><td>Name:</td><td class="fw-bold">Joe Doe</td></tr><tr class=""><td>Billing address:</td><td class="fw-bold">ABS Tower format 29 Des Street, Wadham Dorset D123 142 United Kingdom </td></tr></tbody></table></div></div></div>',3),V={class:"col-12 mt-4"},L={class:"card",style:{border:"none"}},O={class:"card-body"},R={class:"fw-bold text-muted"},Y={class:"dropdown"},J={class:"cursor-pointer bell dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},$=e("i",{class:"bi bi-three-dots text-primary"},null,-1),j={class:"dropdown-menu dropdown-menu-start"},q={class:"list-group list-group-flush"},F=e("i",{class:"bi bi-trash3"},null,-1),Q=S({__name:"AdminBillings",setup(K){const w=D(),r=P({list:[]});T(()=>{p()});const x=o=>{o.id;let s="",d="";return r.list.forEach(a=>{const t=a.company.names.find(y=>y.choice_level==1);s=t!=null&&t.eng_name?(t==null?void 0:t.eng_name)+" "+(t==null?void 0:t.eng_prefix):"",d=t!=null&&t.chn_name?(t==null?void 0:t.chn_name)+" "+(t==null?void 0:t.chn_prefix):""}),`${s} ${d}`},A=o=>{o.id;let s="";const d=r.list;return console.log(d),d.forEach(l=>{s=l.user.name}),console.log(s),s};async function p(){try{const s=(await E.getAllBillings(w.currentCompanyId)).data.data;u.value=s.total,_.value=s.data,r.list=s.data,g.value=!1}catch(o){console.log(o)}}const c=n({page:1,rowsPerPage:15}),u=n(0),_=n([]),g=n(!0),N=[{text:"DATE",value:"date_paid"},{text:"PAYMENT STATUS",value:"payment_status"},{text:"PAYMENT REFERENCE",value:"reference"},{text:"AMOUNT PAID",value:"amount_paid"},{text:"PAYMENT ID",value:"payment_id"}];return C(c,o=>{p()},{deep:!0}),(o,s)=>{const d=f("isLoadingComponent"),l=f("EasyDataTable");return m(),B("div",U,[e("div",I,[M,e("div",V,[e("div",L,[e("div",O,[g.value?(m(),h(d,{key:0})):(m(),h(l,{key:1,class:"easy-data-table","show-index":"",headers:N,items:_.value,"buttons-pagination":"","server-options":c.value,"onUpdate:serverOptions":s[1]||(s[1]=a=>c.value=a),"server-items-length":u.value},{header:i(a=>[e("span",R,b(a.text=="#"?"S/N":a.text),1)]),"item-name":i(a=>[v(b(A(a)),1)]),"item-names":i(a=>[v(b(x(a)),1)]),"item-action":i(a=>[e("span",Y,[e("span",J,[$,e("div",j,[e("ul",q,[e("li",{onClick:s[0]||(s[0]=()=>{}),class:"dropdown-item text-danger",style:{"background-color":"transparent !important"}},[F,v(" Delete ")])])])])])]),_:1},8,["items","server-options","server-items-length"]))])])])])])}}});export{Q as default};