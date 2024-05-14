import{d as h,z as R,c as o,a,f as c,L as I,M as A,t as w,o as v,x as S,I as P,J as N,e as C,_ as m,C as $,r as B,O as y,h as _,b as f,B as k,s as J,q as x,A as L}from"./index-CGgInkWs.js";const D=t=>(P("data-v-4cff9e5c"),t=t(),N(),t),M={class:"col-12"},E={"aria-label":"Page navigation example"},V={class:"pagination"},O=D(()=>a("div",{class:"page-link fw-lighter"},[a("i",{class:"bi bi-chevron-left"}),C(" Previous ")],-1)),F=[O],H=D(()=>a("span",{class:"page-link"},"1",-1)),K=[H],j={key:1,class:"page-item"},z=["onClick"],U={class:"page-link page-link-numbers"},q={key:2,class:"page-item"},X={class:"page-link"},Y=D(()=>a("div",{class:"page-link fw-light"},[C(" Next "),a("i",{class:"bi bi-chevron-right"})],-1)),Z=[Y],G=h({__name:"customPagination",props:{currentPage:{type:Number,default:0},totalRecords:{type:Number,default:0},perPage:{type:Number,default:0}},emits:["moveToNext"],setup(t,{emit:l}){const s=l,n=t,i=R(()=>Math.ceil(n.totalRecords/n.perPage)),r=R(()=>{let b=Math.max(1,n.currentPage-2),d=Math.min(i.value,n.currentPage+2),e=[];for(let g=b;g<=d;g++)e.push(g);return e}),p=b=>{s("moveToNext",b)},u=b=>{const d=Math.sign(b)*Math.min(Math.abs(b),5),e=Math.min(Math.max(n.currentPage+d,1),i.value);p(e)};return(b,d)=>(v(),o("div",M,[a("nav",E,[a("ul",V,[a("li",{onClick:d[0]||(d[0]=e=>u(-1)),class:"page-item"},F),r.value[0]>1?(v(),o("li",{key:0,onClick:d[1]||(d[1]=e=>p(1)),class:"page-item"},K)):c("",!0),r.value[0]>2?(v(),o("li",j,[a("span",{onClick:d[2]||(d[2]=e=>u(-5)),class:"page-link"},"....")])):c("",!0),(v(!0),o(I,null,A(r.value,e=>(v(),o("li",{key:e,class:S({"page-item":!0,active:e===t.currentPage}),onClick:g=>p(e)},[a("span",U,w(e),1)],10,z))),128)),r.value[r.value.length-1]<i.value-1?(v(),o("li",q,[a("span",{onClick:d[3]||(d[3]=e=>u(5)),class:"page-link"},"...")])):c("",!0),r.value[r.value.length-1]!==i.value?(v(),o("li",{key:3,onClick:d[4]||(d[4]=e=>p(i.value)),class:"page-item"},[a("span",X,w(i.value),1)])):c("",!0),a("li",{onClick:d[5]||(d[5]=e=>u(1)),class:"page-item"},Z)])])]))}}),Q=m(G,[["__scopeId","data-v-4cff9e5c"]]),W=$("companyInfoStore",()=>{const t=B(1);function l(s){t.value=s,window.scrollTo(0,0)}return{currentPanel:t,switchForm:l}}),aa=_('<h5 class="fw-bold page-title mb-4" data-v-df66e6db>Company Registers</h5><div class="row g-3" data-v-df66e6db><div class="col-12" data-v-df66e6db><div class="fw-bold mb-1" data-v-df66e6db>Register of Directors</div><div class="card" data-v-df66e6db><div class="card-body" data-v-df66e6db><div class="table-responsive small" data-v-df66e6db><table class="table table-sm text-nowra" data-v-df66e6db><thead data-v-df66e6db><tr data-v-df66e6db><th data-v-df66e6db>Name</th><th data-v-df66e6db>Date of Appointment</th><th data-v-df66e6db>Date of Appointment</th><th data-v-df66e6db>ID/ Passport/Registration No</th><th data-v-df66e6db>Residential Address/Registered Office</th><th data-v-df66e6db>Ceasing to Act</th><th data-v-df66e6db>Remarks</th></tr></thead><tbody data-v-df66e6db><tr data-v-df66e6db><td data-v-df66e6db>..</td><td data-v-df66e6db></td><td data-v-df66e6db></td><td data-v-df66e6db></td><td data-v-df66e6db></td><td data-v-df66e6db></td><td data-v-df66e6db></td></tr><tr data-v-df66e6db><td data-v-df66e6db>..</td><td data-v-df66e6db></td><td data-v-df66e6db></td><td data-v-df66e6db></td><td data-v-df66e6db></td><td data-v-df66e6db></td><td data-v-df66e6db></td></tr></tbody></table></div></div></div></div><div class="col-12" data-v-df66e6db><div class="fw-bold mb-1" data-v-df66e6db>Register of Shareholders</div><div class="card" data-v-df66e6db><div class="card-body" data-v-df66e6db><div class="table-responsive small" data-v-df66e6db><table class="table table-sm text-nowrap" data-v-df66e6db><thead data-v-df66e6db><tr data-v-df66e6db><th data-v-df66e6db>Name and Address </th><th data-v-df66e6db>Class of Shares</th><th data-v-df66e6db>Denomination</th><th data-v-df66e6db>Total Consideration (HKD)</th><th data-v-df66e6db>Date Entered As a Member</th><th data-v-df66e6db>Date Ceases to Be a Member</th></tr></thead><tbody data-v-df66e6db><tr data-v-df66e6db><td data-v-df66e6db>John Doe</td><td data-v-df66e6db>ABC Street</td><td data-v-df66e6db>123456</td><td data-v-df66e6db>123456</td><td data-v-df66e6db>31 Jan, 2024</td><td data-v-df66e6db>31 Jan, 2024</td></tr><tr data-v-df66e6db><td data-v-df66e6db>.</td><td data-v-df66e6db></td><td data-v-df66e6db></td><td data-v-df66e6db></td><td data-v-df66e6db></td><td data-v-df66e6db></td><td data-v-df66e6db></td></tr></tbody></table></div></div></div></div></div>',2),ta=h({__name:"company_info_registers1",setup(t){return y(),(l,s)=>aa}}),da=m(ta,[["__scopeId","data-v-df66e6db"]]),ea=_('<h5 class="fw-bold page-title mb-4" data-v-b4949f6d>Company Registers</h5><div class="row g-3" data-v-b4949f6d><div class="col-12" data-v-b4949f6d><div class="fw-bold mb-1" data-v-b4949f6d>Secretary’s Register</div><div class="card" data-v-b4949f6d><div class="card-body" data-v-b4949f6d><div class="table-responsive small" data-v-b4949f6d><table class="table table-sm text-nowra" data-v-b4949f6d><thead data-v-b4949f6d><tr data-v-b4949f6d><th data-v-b4949f6d>Date of Registration</th><th data-v-b4949f6d>Transferee</th><th data-v-b4949f6d>Transferor</th><th data-v-b4949f6d>Number of Shares Transferred</th><th data-v-b4949f6d>Total Consideration HKD</th><th data-v-b4949f6d>Transferred/ Disposal Method</th></tr></thead><tbody data-v-b4949f6d><tr data-v-b4949f6d><td data-v-b4949f6d>.1 Jan, 2024</td><td data-v-b4949f6d>John Doe</td><td data-v-b4949f6d>123456</td><td data-v-b4949f6d>ABC Street, 888, 10242, US</td><td data-v-b4949f6d>31 Jan, 2024</td><td data-v-b4949f6d>Lorem Ipsum</td></tr><tr data-v-b4949f6d><td data-v-b4949f6d>.</td><td data-v-b4949f6d></td><td data-v-b4949f6d></td><td data-v-b4949f6d></td><td data-v-b4949f6d></td><td data-v-b4949f6d></td></tr></tbody></table></div></div></div></div><div class="col-12" data-v-b4949f6d><div class="fw-bold mb-1" data-v-b4949f6d>Register of Company Name Changes</div><div class="card" data-v-b4949f6d><div class="card-body" data-v-b4949f6d><div class="table-responsive small" data-v-b4949f6d><table class="table table-sm text-nowrap" data-v-b4949f6d><thead data-v-b4949f6d><tr data-v-b4949f6d><th data-v-b4949f6d>Date of Allotment </th><th data-v-b4949f6d>Name and Address</th><th data-v-b4949f6d>Address</th><th data-v-b4949f6d>Class of Shares</th><th data-v-b4949f6d>Number of Shares Alloted</th></tr></thead><tbody data-v-b4949f6d><tr data-v-b4949f6d><td data-v-b4949f6d>21 Jan, 2024</td><td data-v-b4949f6d>John Doe</td><td data-v-b4949f6d>Lorem Ipsum</td><td data-v-b4949f6d>123456</td><td data-v-b4949f6d>123456</td></tr><tr data-v-b4949f6d><td data-v-b4949f6d>.</td><td data-v-b4949f6d></td><td data-v-b4949f6d></td><td data-v-b4949f6d></td><td data-v-b4949f6d></td><td data-v-b4949f6d></td></tr></tbody></table></div></div></div></div></div>',2),sa=h({__name:"company_info_registers2",setup(t){return y(),(l,s)=>ea}}),va=m(sa,[["__scopeId","data-v-b4949f6d"]]),ia=_('<h5 class="fw-bold page-title mb-4" data-v-a623a721>Company Registers</h5><div class="row g-3" data-v-a623a721><div class="col-12" data-v-a623a721><div class="fw-bold mb-1" data-v-a623a721>Register of Charges</div><div class="card" data-v-a623a721><div class="card-body" data-v-a623a721><div class="table-responsive small" data-v-a623a721><table class="table table-sm text-nowra" data-v-a623a721><thead data-v-a623a721><tr data-v-a623a721><th data-v-a623a721>Charge Creation Date</th><th data-v-a623a721>Amount Secured by the Charge HKD</th><th data-v-a623a721>Type of Charge</th><th data-v-a623a721>Description of Charge</th><th data-v-a623a721>Name of Chargee</th><th data-v-a623a721>Terms of Charge</th></tr></thead><tbody data-v-a623a721><tr data-v-a623a721><td data-v-a623a721>.1 Jan, 2024</td><td data-v-a623a721>John Doe</td><td data-v-a623a721>123456</td><td data-v-a623a721>ABC Street, 888, 10242, US</td><td data-v-a623a721>31 Jan, 2024</td><td data-v-a623a721>Lorem Ipsum</td></tr><tr data-v-a623a721><td data-v-a623a721>.</td><td data-v-a623a721></td><td data-v-a623a721></td><td data-v-a623a721></td><td data-v-a623a721></td><td data-v-a623a721></td></tr></tbody></table></div></div></div></div><div class="col-12" data-v-a623a721><div class="fw-bold mb-1" data-v-a623a721>Register of Significant Controllers</div><div class="card" data-v-a623a721><div class="card-body" data-v-a623a721><div class="table-responsive small" data-v-a623a721><table class="table table-sm" data-v-a623a721><thead data-v-a623a721><tr data-v-a623a721><th data-v-a623a721>Date of Entry</th><th data-v-a623a721>Name of Registrable Person / Legal Entity</th><th width="50%" data-v-a623a721>Particulars</th><th data-v-a623a721>Date Becoming a Registrable Person</th><th data-v-a623a721>Date Cease to Be a Registrable Person</th></tr></thead><tbody data-v-a623a721><tr data-v-a623a721><td data-v-a623a721> Date </td><td data-v-a623a721>Text</td><td data-v-a623a721><div class="text-center rounded-2 mb-2" style="border:1px solid #ccc;" data-v-a623a721><div class="row g-0" data-v-a623a721><div class="col-md-4 bg-light rounded-start-2 py-2" data-v-a623a721> Corresponding Address </div><div class="col-md-8 py-2" data-v-a623a721> Text </div></div></div><div class="text-center rounded-2 mb-2" style="border:1px solid #ccc;" data-v-a623a721><div class="row g-0" data-v-a623a721><div class="col-md-4 bg-light rounded-start-2 py-2" data-v-a623a721> Residential Address </div><div class="col-md-8 py-2" data-v-a623a721> Text </div></div></div><div class="text-center rounded-2 mb-2" style="border:1px solid #ccc;" data-v-a623a721><div class="row g-0" data-v-a623a721><div class="col-md-4 bg-light rounded-start-2 py-2" data-v-a623a721> ID/Passport/ Registration No </div><div class="col-md-8 py-2" data-v-a623a721> Text </div></div></div><div class="text-center rounded-2 mb-2" style="border:1px solid #ccc;" data-v-a623a721><div class="row g-0" data-v-a623a721><div class="col-md-4 bg-light rounded-start-2 py-2" data-v-a623a721> Place of Registration </div><div class="col-md-8 py-2" data-v-a623a721> Text </div></div></div><div class="text-center rounded-2 mb-2" style="border:1px solid #ccc;" data-v-a623a721><div class="row g-0" data-v-a623a721><div class="col-md-4 bg-light rounded-start-2 py-2" data-v-a623a721> Nature of control over the company </div><div class="col-md-8 py-2" data-v-a623a721> Text </div></div></div></td><td data-v-a623a721>Date</td><td data-v-a623a721>Date</td></tr></tbody></table></div></div></div></div><div class="col-12" data-v-a623a721><div class="fw-bold mb-1" data-v-a623a721>Designated Representative</div><div class="card" data-v-a623a721><div class="card-body" data-v-a623a721><div class="table-responsive small" data-v-a623a721><table class="table table-sm" data-v-a623a721><thead data-v-a623a721><tr data-v-a623a721><th data-v-a623a721>Date of Entry</th><th data-v-a623a721>Name (Capacity)</th><th width="50%" data-v-a623a721>Particulars</th><th data-v-a623a721>Remarks</th></tr></thead><tbody data-v-a623a721><tr data-v-a623a721><td data-v-a623a721> Date </td><td data-v-a623a721>Text</td><td data-v-a623a721><div class="text-center rounded-2 mb-2" style="border:1px solid #ccc;" data-v-a623a721><div class="row g-0" data-v-a623a721><div class="col-md-4 bg-light rounded-start-2 py-2" data-v-a623a721> ID/Passport/ Registration No </div><div class="col-md-8 py-2" data-v-a623a721> Text </div></div></div><div class="text-center rounded-2 mb-2" style="border:1px solid #ccc;" data-v-a623a721><div class="row g-0" data-v-a623a721><div class="col-md-4 bg-light rounded-start-2 py-2" data-v-a623a721> Place of Registration </div><div class="col-md-8 py-2" data-v-a623a721> Text </div></div></div><div class="text-center rounded-2 mb-2" style="border:1px solid #ccc;" data-v-a623a721><div class="row g-0" data-v-a623a721><div class="col-md-4 bg-light rounded-start-2 py-2" data-v-a623a721> Nature of control over the company </div><div class="col-md-8 py-2" data-v-a623a721> Text </div></div></div></td><td data-v-a623a721>Remark</td></tr></tbody></table></div></div></div></div></div>',2),oa=h({__name:"company_info_registers3",setup(t){return y(),(l,s)=>ia}}),la=m(oa,[["__scopeId","data-v-a623a721"]]),T=t=>(P("data-v-4636aa9e"),t=t(),N(),t),ra={key:0},ca={class:"col-12"},na={class:"alert alert-dark bg-primary-subtle",role:"alert"},ba={class:"row gy-1"},pa=T(()=>a("div",{class:"col-lg-10"},[a("div",{class:"fw-bold"}," Company Incorporation in progress "),a("small",null,"Complete your application, to set up your company")],-1)),fa={class:"col-lg-2 d-flex justify-content-lg-end align-items-lg-center"},ha=T(()=>a("i",{class:"bi bi-arrow-right"},null,-1)),ma={class:"fw-bold page-title mb-4"},ua=_('<div class="row g-3" data-v-4636aa9e><div class="col-md-6" data-v-4636aa9e><div class="card border-0 h-100 bg-transparent" data-v-4636aa9e><div class="card-header fw-bold bg-transparent border-0 ps-0" data-v-4636aa9e>Track Incorporation</div><div class="card-body small bg-white rounded-3" data-v-4636aa9e><ul class="list-group list-group-flush" data-v-4636aa9e><li class="list-group-item" data-v-4636aa9e> Company Name <span class="float-end" data-v-4636aa9e>ABC LIMITED</span></li><li class="list-group-item" data-v-4636aa9e> Business Registration Number (BRN) <span class="float-end" data-v-4636aa9e>12345456</span></li><li class="list-group-item" data-v-4636aa9e> Incorporation Date <span class="float-end" data-v-4636aa9e>12 Jan, 2024</span></li><li class="list-group-item" data-v-4636aa9e> Company Structure <span class="float-end" data-v-4636aa9e>Private limited by shares</span></li><li class="list-group-item" data-v-4636aa9e> Company Registered In <span class="float-end" data-v-4636aa9e>Hong Kong</span></li><li class="list-group-item" data-v-4636aa9e> Business Classification <span class="float-end" data-v-4636aa9e> 658263-dsfdd;gfwyv:sd</span></li></ul></div></div></div><div class="col-md-6" data-v-4636aa9e><div class="card border-0 h-100 bg-transparent" style="min-height:400px;" data-v-4636aa9e><div class="card-header fw-bold bg-transparent border-0 ps-0" data-v-4636aa9e>Track Incorporation</div><div class="card-body small bg-white rounded-3" data-v-4636aa9e><div class="fw-bold" data-v-4636aa9e>Tax Ready</div><div class="text-muted my-3" data-v-4636aa9e> To pay your company’s formation fee, make sure you’re not using an anonymous IP address or a VPN. </div><div class="my-3" data-v-4636aa9e> Tax ID (EIN) </div><hr data-v-4636aa9e><div class="container mt-5" data-v-4636aa9e><div class="row justify-content-center" data-v-4636aa9e><div class="col-lg-9" data-v-4636aa9e><div class="progress-container" data-v-4636aa9e><div class="progress-line" data-v-4636aa9e></div><i class="bi bi-check-circle-fill text-warning phase phase-1" data-v-4636aa9e></i><i class="bi bi-check-circle-fill text-warning phase phase-2" data-v-4636aa9e></i><i class="bi bi-check-circle-fill text-warning phase phase-3" data-v-4636aa9e></i><i class="bi bi-record-circle text-warning phase phase-4" data-v-4636aa9e></i><i class="bi bi-circle text-warning phase phase-5" data-v-4636aa9e></i><div class="phase-label phase-1" data-v-4636aa9e>Set up <br data-v-4636aa9e> company</div><div class="phase-label phase-2" data-v-4636aa9e>Preparing <br data-v-4636aa9e> Incorporation</div><div class="phase-label phase-3" data-v-4636aa9e>Filling<br data-v-4636aa9e>Documents</div><div class="phase-label phase-4" data-v-4636aa9e>Company<br data-v-4636aa9e>Incorporated</div><div class="phase-label phase-5" data-v-4636aa9e>Tax ID<br data-v-4636aa9e>Ready</div></div></div></div></div></div></div></div><div class="col-12" data-v-4636aa9e><div class="fw-bold" data-v-4636aa9e> Registered Office and Contact </div><div class="card" data-v-4636aa9e><div class="card-body" data-v-4636aa9e><div class="table-responsive" data-v-4636aa9e><table class="table" data-v-4636aa9e><thead data-v-4636aa9e><tr data-v-4636aa9e><th data-v-4636aa9e>Directors</th><th data-v-4636aa9e>Shareholders</th><th data-v-4636aa9e>Company Secretary</th><th data-v-4636aa9e>Registered Office</th><th data-v-4636aa9e>Businness Adress</th><th data-v-4636aa9e>Designated Representative</th></tr></thead><tbody data-v-4636aa9e><tr data-v-4636aa9e><td data-v-4636aa9e>John Doe</td><td data-v-4636aa9e>John Doe</td><td data-v-4636aa9e>ABC Limited</td><td data-v-4636aa9e>Lorem Ipsum dolor et al sin tupar tu</td><td data-v-4636aa9e>Lorem Ipsum dolor et al sin tupar tu</td><td data-v-4636aa9e>ABC limited</td></tr><tr data-v-4636aa9e><td data-v-4636aa9e>John Doe</td><td data-v-4636aa9e>John Doe</td><td data-v-4636aa9e>ABC Limited</td><td data-v-4636aa9e>Lorem Ipsum dolor et al sin tupar tu</td><td data-v-4636aa9e>Lorem Ipsum dolor et al sin tupar tu</td><td data-v-4636aa9e>ABC limited</td></tr><tr data-v-4636aa9e><td data-v-4636aa9e>John Doe</td><td data-v-4636aa9e>John Doe</td><td data-v-4636aa9e>ABC Limited</td><td data-v-4636aa9e>Lorem Ipsum dolor et al sin tupar tu</td><td data-v-4636aa9e>Lorem Ipsum dolor et al sin tupar tu</td><td data-v-4636aa9e>ABC limited</td></tr></tbody></table></div></div></div></div><div class="col-md-5" data-v-4636aa9e><div class="fw-bold" data-v-4636aa9e>Compliance and Reporting</div><div class="card mt-2" data-v-4636aa9e><div class="card-body" data-v-4636aa9e><ul class="list-group list-group-flush" data-v-4636aa9e><li class="list-group-item" data-v-4636aa9e> Auditor <span class="float-end" data-v-4636aa9e>XYZ CPA</span></li><li class="list-group-item" data-v-4636aa9e> Business Registration Renewal <span class="float-end" data-v-4636aa9e>29 Oct, 2025</span></li><li class="list-group-item" data-v-4636aa9e> Accounting Reference Date <span class="float-end" data-v-4636aa9e>31 March</span></li><li class="list-group-item" data-v-4636aa9e> Annual Return Date <span class="float-end" data-v-4636aa9e>12 Jan, 2025</span></li></ul></div></div></div></div>',1),ga={class:"mt-4"},ya=h({__name:"company_info",setup(t){const l=y(),s=W();function n(i){s.switchForm(i)}return(i,r)=>{const p=L("router-link");return v(),o(I,null,[f(s).currentPanel==1?(v(),o("div",ra,[a("div",ca,[a("div",na,[a("div",ba,[pa,a("div",fa,[k(p,{class:"btn btn-primary",to:"/start_company"},{default:J(()=>[C(" Resume "),ha]),_:1})])])])]),a("h5",ma,w(f(l).name),1),ua])):c("",!0),f(s).currentPanel==2?(v(),x(da,{key:1})):c("",!0),f(s).currentPanel==3?(v(),x(va,{key:2})):c("",!0),f(s).currentPanel==4?(v(),x(la,{key:3})):c("",!0),a("div",ga,[k(Q,{"per-page":1,"total-records":4,"current-page":f(s).currentPanel,onMoveToNext:n},null,8,["current-page"])])],64)}}}),xa=m(ya,[["__scopeId","data-v-4636aa9e"]]);export{xa as default};
