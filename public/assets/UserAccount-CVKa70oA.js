import{d as at,r as c,l as q,P as st,o,c as l,b as t,w as S,v as P,Q as X,S as tt,e as x,G as ot,H as nt,t as u,f as p,C as lt,D as dt,_ as it,K as wt,u as kt,M as St,k as Pt,p as G,q as F,s as w,y as W,g as j,J as Dt,B as xt,j as At,A as et}from"./index-BRNKKXnK.js";import{a as f}from"./index-BBO9Byvm.js";import{u as ct}from"./paramsStore-DvOAhpfO.js";import{u as m}from"./useFunctions-BPURsnT5.js";import{u as Ct}from"./index.esm-DbYabA54.js";import{_ as It}from"./activateTwoFactor.vue_vue_type_script_setup_true_lang-CoFxbVL-.js";const $=h=>(lt("data-v-1f53da1b"),h=h(),dt(),h),Ut={class:"modal fade",id:"userDocumentUploadModalEdit",tabindex:"-1","data-bs-backdrop":"static","data-bs-keyboard":"false",role:"dialog","aria-labelledby":"modalTitleId","aria-hidden":"true"},Et={class:"modal-dialog modal-dialog-centered modal-lg",role:"document"},Ft={class:"modal-content"},Tt=$(()=>t("div",{class:"modal-header p-3 border-0"},[t("h5",{class:"modal-title fw-bold text-center"},"Documents Upload")],-1)),Mt={class:"modal-body"},Nt={class:"row g-3"},$t={class:"col-lg-6"},Vt={class:"col-12"},Ot=$(()=>t("div",{class:"form-label"},"Document title",-1)),Rt={class:"col-12 mt-4"},Lt=$(()=>t("div",{class:"dropzone text-center small py-2"},[t("i",{class:"bi bi-paperclip color-theme"}),p(" Click here to browse or drag files here to add "),t("br"),p(" You can all more than one document. ")],-1)),Bt={class:"col-lg-6"},Yt={class:"card bg-light-subtle h-100"},Jt={class:"card-body"},zt={key:0,class:"text-muted"},Gt={key:1,class:"list-group list-group-flush"},Wt={class:"modal-footer border-0"},jt={key:0,class:"btn btn-primary",type:"button",disabled:""},qt=$(()=>t("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),Ht=["disabled"],Kt=at({__name:"documentUploadModal",emits:["done"],setup(h,{emit:T}){const V=ct(),k=T,M=c(null),A=c(null),O=["doc","docx","pdf","jpg","png","jpeg"],g=c([]),C=c(""),{getRootProps:I,getInputProps:N}=Ct({onDrop:(b,v)=>{if(b.find(U=>!m.isExtension(U.name,O))){m.toast("Invalid file type added","warning");return}g.value=b,console.log(v)}});q(()=>V.documentUploadModal,()=>{g.value.length=0,M.value.click()}),st(()=>{A.value.click()});const D=c(!1),R=async()=>{if(!C.value){m.toast("Please Document(s) title","warning");return}const b=new FormData;b.append("title",C.value),b.append("document_type_id","1"),g.value.forEach((v,_)=>{b.append(`document[${_}]`,v)}),D.value=!0;try{await f.userUploadDocuments(b),D.value=!1,k("done"),A.value.click()}catch(v){console.log(v)}};return(b,v)=>(o(),l("div",null,[t("button",{ref_key:"openModal",ref:M,class:"btn d-none","data-bs-toggle":"modal","data-bs-target":"#userDocumentUploadModalEdit"},null,512),t("div",Ut,[t("div",Et,[t("div",Ft,[Tt,t("div",Mt,[t("div",Nt,[t("div",$t,[t("div",Vt,[Ot,S(t("input",{"onUpdate:modelValue":v[0]||(v[0]=_=>C.value=_),type:"text",class:"form-control w-100"},null,512),[[P,C.value]])]),t("div",Rt,[t("div",X(tt(x(I)())),[Lt,t("input",X(tt(x(N)())),null,16)],16)])]),t("div",Bt,[t("div",Yt,[t("div",Jt,[g.value.length?(o(),l("ul",Gt,[(o(!0),l(ot,null,nt(g.value,(_,U)=>(o(),l("li",{key:_,class:"list-group-item p-0"},u(U+1)+". "+u(_.name),1))),128))])):(o(),l("div",zt,"Uploaded files will show here"))])])])])]),t("div",Wt,[t("button",{onClick:v[1]||(v[1]=_=>g.value.length=0),type:"button",class:"btn btn-warning"}," Remove Documents "),t("button",{ref_key:"closeModal",ref:A,type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Cancel ",512),D.value?(o(),l("button",jt,[qt,p(" Saving data.. ")])):(o(),l("button",{key:1,disabled:!g.value.length,onClick:R,type:"button",class:"btn btn-primary"}," Submit Data ",8,Ht))])])])])]))}}),Qt=it(Kt,[["__scopeId","data-v-1f53da1b"]]),i=h=>(lt("data-v-42ffbcad"),h=h(),dt(),h),Zt={class:"container"},Xt={class:"car border-0 min-vh-100"},te={class:"card-body"},ee={class:"nav nav-tabs",id:"myTab",role:"tablist"},ae=i(()=>t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"tab1-tab","data-bs-toggle":"tab","data-bs-target":"#tab1",type:"button",role:"tab","aria-controls":"tab1","aria-selected":"true"}," General ")],-1)),se={class:"nav-item",role:"presentation"},oe=i(()=>t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"tab3-tab","data-bs-toggle":"tab","data-bs-target":"#tab3",type:"button",role:"tab","aria-controls":"tab3","aria-selected":"false"}," Security ")],-1)),ne=i(()=>t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"tab4-tab","data-bs-toggle":"tab","data-bs-target":"#tab4",type:"button",role:"tab","aria-controls":"tab4","aria-selected":"false"}," Notifications ")],-1)),le=i(()=>t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"tab5-tab","data-bs-toggle":"tab","data-bs-target":"#tab5",type:"button",role:"tab","aria-controls":"tab5","aria-selected":"false"}," Recent Account Activities ")],-1)),de={class:"tab-content pt-5"},ie={class:"tab-pane active",id:"tab1",role:"tabpanel","aria-labelledby":"tab1-tab"},ce={class:"row g-3"},re={class:"col-md-12"},ue={class:"card"},pe=i(()=>t("div",{class:"card-header fw-bold bg-transparent border-0"}," Information ",-1)),be={class:"card-body"},_e=i(()=>t("p",{class:"pl-2"}," Enter your name, username and primary email address. You can change your primary email address at any time. ",-1)),me={class:"row g-3"},ve={class:"col-md-6"},fe=i(()=>t("div",{class:"form-label"},"Name:",-1)),he={class:"col-md-6"},ge=i(()=>t("div",{class:"form-label"},"Phone:",-1)),ye={class:"col-md-6"},we=i(()=>t("div",{class:"form-label"},[p(" Email: "),t("span",{class:"badge rounded-pill bg-success-subtle text-dark"},[p("Verified "),t("i",{class:"bi bi-check-circle"})])],-1)),ke={class:"col-12"},Se=["disabled"],Pe={class:"tab-pane",id:"tab2",role:"tabpanel","aria-labelledby":"tab2-tab"},De={class:"card shadow-sm"},xe=i(()=>t("div",{class:"card-header fw-bold border-0 bg-transparent"},[t("span",{class:"float-end"},[t("div",{id:"complycube-mount"})])],-1)),Ae={class:"card-body"},Ce={class:"fw-bold text-muted"},Ie={key:0,class:"badge bg-info"},Ue={key:1,class:"badge bg-danger"},Ee={key:2,class:"badge bg-success"},Fe={key:0,class:"badge bg-info"},Te={key:1,class:"badge bg-warning"},Me={class:"list-group list-group-flush"},Ne=["href"],$e={class:"dropdown"},Ve={class:"cursor-pointer bell dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},Oe=i(()=>t("i",{class:"bi bi-three-dots text-primary"},null,-1)),Re={class:"dropdown-menu dropdown-menu-start"},Le={class:"list-group list-group-flush"},Be=["onClick"],Ye=i(()=>t("i",{class:"bi bi-trash3"},null,-1)),Je={class:"tab-pane",id:"tab3",role:"tabpanel","aria-labelledby":"tab3-tab"},ze={class:"row g-3 mt-3"},Ge=At('<div class="col-md-6 col-lg-6" data-v-42ffbcad><div class="card h-100 border-" data-v-42ffbcad><div class="card-body" data-v-42ffbcad><div class="fw-bold mb-2" data-v-42ffbcad>Password</div><p data-v-42ffbcad>Changed on Jan 1, 2023, 3:39 PM EST</p><button data-bs-toggle="modal" data-bs-target="#passwordModal" class="btn btn-secondary mt-2" data-v-42ffbcad> Update Password </button></div></div></div>',1),We={class:"col-md-6 col-lg-6"},je={class:"card h-100"},qe={class:"card-body"},He={class:"fw-bold mb-2"},Ke={key:0,class:"badge bg-warning"},Qe={key:0,class:"card-footer bg-transparent border-0 pb-3"},Ze={class:"tab-pane",id:"tab4",role:"tabpanel","aria-labelledby":"tab4-tab"},Xe={class:"row g-3"},ta={class:"col-md-12"},ea={class:"card p-3 bg-transparent fs-5 h-100"},aa={key:0,class:"text-success"},sa={key:1,class:"text-danger"},oa={key:0,class:"btn btn-danger float-end"},na=i(()=>t("i",{class:"bi bi-power"},null,-1)),la={key:1,class:"btn btn-success float-end"},da=i(()=>t("i",{class:"bi bi-power"},null,-1)),ia={class:"tab-pane",id:"tab5",role:"tabpanel","aria-labelledby":"tab5-tab"},ca={class:"col-md-12 mt-5"},ra={class:"card border-0 shadow-sm h-100"},ua={class:"card-body"},pa={class:"fw-bold text-muted"},ba={class:"modal fade",id:"passwordModal",tabindex:"-1","data-bs-backdrop":"static","data-bs-keyboard":"false",role:"dialog","aria-labelledby":"modalTitleId","aria-hidden":"true"},_a={class:"modal-dialog modal-dialog-scrollable modal-dialog-centered",role:"document"},ma={class:"modal-content"},va={class:"modal-header"},fa={class:"modal-body"},ha=i(()=>t("p",{class:"modal-title",id:"modalTitleId"}," You may update your password any time. We suggest you choose a strong password and update it regularly, e.g. every 6 months. All new passwords must contain at least 8 characters. We also suggest having at least one capital and one lower-case letter (Aa-Zz), one special symbol (#, &, % etc), and one number (0-9) in your password for the best strength. ",-1)),ga={class:"row g-3 mt-3"},ya={class:"col-12"},wa=i(()=>t("div",{class:"form-label"},"Old Password:",-1)),ka={class:"small text-danger"},Sa={class:"col-12"},Pa=i(()=>t("div",{class:"form-label"},"New Password:",-1)),Da={class:"col-12"},xa=i(()=>t("div",{class:"form-label"},"Repeat Password:",-1)),Aa={class:"small text-danger"},Ca={class:"modal-footer border-0"},Ia=i(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1)),Ua=["disabled"],Ea={class:"modal fade",id:"twoFAModal",tabindex:"-1","data-bs-backdrop":"static","data-bs-keyboard":"false",role:"dialog","aria-labelledby":"modalTitleId","aria-hidden":"true"},Fa={class:"modal-dialog modal-dialog-scrollable modal-dialog-centered",role:"document"},Ta={class:"modal-content"},Ma={class:"modal-header"},Na=i(()=>t("h5",{class:"modal-title",id:"modalTitleId"},"2-FA SETTINGS",-1)),$a={class:"modal-body"},Va={class:"col-12"},Oa=i(()=>t("div",{class:"form-label"}," Open the two factor authentication app on your device to view your authentication code and verify your identity ",-1)),Ra={key:0,class:"small text-danger"},La=i(()=>t("div",{class:"col-12"},[t("button",{type:"submit",class:"btn btn-primary w-100"}," Continue ")],-1)),Ba=at({__name:"UserAccount",setup(h){const T=wt(),V=ct(),k=kt(),M=St();Pt(()=>{g(),b(),_t(),J(),H(),bt()});const A=c(null),O=c(!1);function g(){var e;(e=M.query)!=null&&e.verify&&(O.value=!0,A.value.click(),C())}function C(){var y;const e=((y=k.profileData)==null?void 0:y.user_token)??"",s=ComplyCube.mount({containerId:"complycube-mount",token:e,onComplete:function(E){setTimeout(()=>{s.unmount()},3e3)},onModalClose:function(){s.unmount()},onError:function(E){E.type}})}const I=c({page:1,rowsPerPage:15}),N=c(0);c([]);const D=c(!0);q(I,e=>{b()},{deep:!0});const R=[{text:"FULL NAME",value:"name"},{text:"KYC VERIFICATION",value:"kyc_status"},{text:"EMAIL VERIFICATION",value:"email_verified_at"},{text:"DATE REGISTERED",value:"created_at"}];async function b(){try{const s=(await f.userGetDocuments()).data.data;N.value=s.total,D.value=!1}catch{}}async function v(e){m.confirmDelete("Delete this document?","Yes, delete").then(async s=>{s.isConfirmed&&(await f.deleteUserDocument(e),m.toast("Document deleted","success"),b())})}const _=c(!1),U=c(!1);function rt(e){e=="app"?U.value=!U.value:_.value=!_.value}async function H(){try{const e=new URLSearchParams(I.value).toString(),y=(await f.userActivities(e)).data.data;K.value=y.total,Q.value=y.data,ut.value=!1}catch{}}const L=c({page:1,rowsPerPage:15}),K=c(0),Q=c([]),ut=c(!0);q(L,e=>{H()},{deep:!0});const pt=[{text:"NAME",value:"name"},{text:"TYPE",value:"type"},{text:"ACTION",value:"action"},{text:"IP ADDRESS",value:"ip_address"},{text:"LOCATION",value:"location"},{text:"DATE",value:"created_at"}],r=G({name:"",phone:"",email:"",isSaving:!1}),B=c([]);async function bt(){const e=await f.getActiveUser();return B.value=e.data.data,B.value}function _t(){const e=JSON.parse(k.profileData);r.email=(e==null?void 0:e.email)??"",r.name=(e==null?void 0:e.name)??"",r.phone=(e==null?void 0:e.phone)??"",console.log(e,"user")}function mt(){const e=JSON.parse(k.profileData);e.name=r.name,e.phone=r.phone,k.profileData=JSON.stringify(e)}async function vt(){if(!r.name){m.toast(" Name field is compulsory","warning");return}if(!r.phone){m.toast(" Phone field is compulsory","warning");return}try{r.isSaving=!0;const e=new FormData;e.append("name",r.name??" "),e.append("phone",r.phone??""),await f.userUpdateDetails(e),r.isSaving=!1,m.toast("Details Updated Successfully","success"),mt()}catch(e){console.log(e)}}const n=G({oldPassword:"",newPassword:"",newPasswordRepeat:"",isSaving:!1,passwordsMatching:"",invalidPassword:""}),Y=c(null);st(()=>{Y.value.click()});async function ft(){if(n.passwordsMatching="",n.invalidPassword="",!(!n.oldPassword&&!n.newPassword)){if(n.oldPassword.length<8||n.newPassword.length<8||n.newPasswordRepeat.length<8){m.toast("Password Fields must be at least 8 characters.","warning");return}if(n.newPassword!==n.newPasswordRepeat){n.passwordsMatching="password do not match";return}try{n.isSaving=!0;const e=new FormData;e.append("user_id",V.currentUserId),e.append("oldPassword",n.oldPassword),e.append("password",n.newPassword),await f.userUpdatePassword(e),n.oldPassword=n.newPassword=n.newPasswordRepeat="",n.isSaving=!1,Y.value.click(),m.toast("Password Changed Successfully","success")}catch(e){console.log(e),e.response&&e.response.status===400&&(n.invalidPassword="Password invalid"),n.isSaving=!1}}}const d=G({isActivated:!1,isEnabled:!1,activation:!1,inputSecret:"",isVerifying:!1,currentAction:"",codeInvalid:!1}),Z=c(null);async function J(){try{const s=(await f.checkAccountStatus()).data.data;d.isActivated=!!s.google2fa_secret,d.isEnabled=!!s.enable_2fa_at}catch(e){console.log(e)}}async function ht(){try{d.codeInvalid=!1;const e=new FormData;e.append("secret",d.inputSecret);const y=await(d.currentAction=="enable"?f.enableTwoFactor(e):f.disableTwoFactor(e));k.twofactorEnabled=d.currentAction=="enable"?"1":null,d.inputSecret="",Z.value.click(),J()}catch(e){if(console.log(e),e.response){d.codeInvalid=!0;return}}}function gt(){d.activation=!1,k.twofactorEnabled="1",J()}return(e,s)=>{const y=et("isLoadingComponent"),E=et("EasyDataTable");return o(),l("div",Zt,[t("div",Xt,[t("div",te,[t("ul",ee,[ae,t("li",se,[t("button",{ref_key:"verifyTabBtn",ref:A,class:"nav-link",id:"tab2-tab","data-bs-toggle":"tab","data-bs-target":"#tab2",type:"button",role:"tab","aria-controls":"tab2","aria-selected":"false"}," Verify ",512)]),oe,ne,le]),t("div",de,[t("div",ie,[t("div",ce,[t("div",re,[t("div",ue,[pe,t("div",be,[_e,t("div",me,[t("div",ve,[fe,S(t("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>r.name=a),type:"text",class:"form-control"},null,512),[[P,r.name]])]),t("div",he,[ge,S(t("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>r.phone=a),type:"text",class:"form-control"},null,512),[[P,r.phone]])]),t("div",ye,[we,S(t("input",{readonly:"","onUpdate:modelValue":s[2]||(s[2]=a=>r.email=a),type:"text",class:"form-control"},null,512),[[P,r.email]])]),t("div",ke,[t("button",{disabled:r.isSaving,onClick:vt,class:"btn btn-primary float-end"},u(r.isSaving?"Updating..":"Update Details"),9,Se)])])])])])])]),t("div",Pe,[t("div",De,[xe,t("div",Ae,[D.value?(o(),F(y,{key:0})):(o(),F(E,{key:1,class:"easy-data-table verify-table",headers:R,items:B.value,"buttons-pagination":"","server-options":I.value,"onUpdate:serverOptions":s[3]||(s[3]=a=>I.value=a),"server-items-length":N.value},{header:w(a=>[t("span",Ce,u(a.text=="#"?"S/N":a.text),1)]),"item-kyc_status":w(a=>[a.kyc_status!="success"?(o(),l("span",Ie,u(a.kyc_status),1)):a.kyc_status==null?(o(),l("span",Ue," KYC not Started ")):(o(),l("span",Ee,u(a.kyc_status),1))]),"item-email_verified_at":w(a=>[a.email_verified_at!=null?(o(),l("span",Fe," Verified ")):(o(),l("span",Te," Not Verified"))]),"item-created_at":w(a=>[p(u(x(m).dateDisplay(a.created_at)),1)]),"item-document":w(a=>[t("ul",Me,[(o(!0),l(ot,null,nt(JSON.parse(a.document),(z,yt)=>(o(),l("li",{key:z,class:"list-group-item p-0 border-0"},[t("a",{href:z,target:"_blank"},"Document "+u(yt+1),9,Ne)]))),128))])]),"item-action":w(a=>[t("span",$e,[t("span",Ve,[Oe,t("div",Re,[t("ul",Le,[t("li",{onClick:z=>v(a.id),class:"dropdown-item text-danger",style:{"background-color":"transparent !important"}},[Ye,p(" Delete ")],8,Be)])])])])]),_:1},8,["items","server-options","server-items-length"]))])])]),t("div",Je,[p(" Your privacy and security are top priority. We do all we can to keep your account secure, and we encourage you to do the same by following best practices: Update your password regularly, enable Two-Factor Authentication, and keep your Support PIN private. "),t("div",ze,[Ge,t("div",We,[t("div",je,[t("div",qe,[t("div",He,[p(" 2-Factor Authentication "),d.isActivated?(o(),l("span",{key:1,class:W(["badge",d.isEnabled?"bg-success":"bg-warning"])},u(d.isEnabled?"Enabled":"Not Enabled"),3)):(o(),l("span",Ke," Not Activated"))]),d.activation?(o(),F(It,{key:0,onVerified:gt})):j("",!0)]),d.activation?j("",!0):(o(),l("div",Qe,[d.isActivated?d.isEnabled?(o(),l("button",{key:2,onClick:s[6]||(s[6]=a=>d.currentAction="disable"),"data-bs-toggle":"modal","data-bs-target":"#twoFAModal",class:"btn btn-secondary"}," Disable 2FA ")):(o(),l("button",{key:1,onClick:s[5]||(s[5]=a=>d.currentAction="enable"),"data-bs-toggle":"modal","data-bs-target":"#twoFAModal",class:"btn btn-secondary"}," Enable 2FA ")):(o(),l("button",{key:0,onClick:s[4]||(s[4]=a=>d.activation=!0),class:"btn btn-secondary"}," Activate 2Fa "))]))])])])]),t("div",Ze,[t("div",Xe,[t("div",ta,[t("div",ea,[p(" Enable Email Notifications "),_.value?(o(),l("span",aa,"(ON)")):(o(),l("span",sa,"(OFF)")),t("div",{class:"float-end",onClick:s[7]||(s[7]=a=>rt("email"))},[_.value?(o(),l("button",oa,[p(" SWITCH OFF "),na])):(o(),l("button",la,[p(" SWITCH ON "),da]))])])])])]),t("div",ia,[t("div",ca,[t("div",ra,[t("div",ua,[D.value?(o(),F(y,{key:0})):(o(),F(E,{key:1,class:"easy-data-table",headers:pt,items:Q.value,"buttons-pagination":"","server-options":L.value,"onUpdate:serverOptions":s[8]||(s[8]=a=>L.value=a),"server-items-length":K.value},{header:w(a=>[t("span",pa,u(a.text=="#"?"S/N":a.text),1)]),"item-updated_at":w(a=>[p(u(x(m).dateDisplay(a.updated_at)),1)]),"item-created_at":w(a=>[p(u(x(m).dateDisplay(a.created_at)),1)]),_:1},8,["items","server-options","server-items-length"]))])])])])])])]),t("div",ba,[t("div",_a,[t("div",ma,[t("div",va,[t("button",{ref_key:"closePasswordModal",ref:Y,type:"button",class:W(["btn-close",{"btn-close-white":x(T).appMode=="dark"}]),"data-bs-dismiss":"modal","aria-label":"Close"},null,2)]),t("div",fa,[ha,t("div",ga,[t("div",ya,[wa,S(t("input",{"onUpdate:modelValue":s[9]||(s[9]=a=>n.oldPassword=a),type:"password",class:"form-control"},null,512),[[P,n.oldPassword]]),t("span",ka,u(n.invalidPassword),1)]),t("div",Sa,[Pa,S(t("input",{"onUpdate:modelValue":s[10]||(s[10]=a=>n.newPassword=a),type:"password",class:"form-control"},null,512),[[P,n.newPassword]])]),t("div",Da,[xa,S(t("input",{"onUpdate:modelValue":s[11]||(s[11]=a=>n.newPasswordRepeat=a),type:"password",class:"form-control"},null,512),[[P,n.newPasswordRepeat]]),t("span",Aa,u(n.passwordsMatching),1)])])]),t("div",Ca,[Ia,t("button",{disabled:n.isSaving,onClick:ft,type:"button",class:"btn btn-primary"},u(n.isSaving?"Saving...":"Update Password"),9,Ua)])])])]),t("div",Ea,[t("div",Fa,[t("div",Ta,[t("div",Ma,[Na,t("button",{ref_key:"closeTwoFAModal",ref:Z,type:"button",class:W(["btn-close",{"btn-close-white":x(T).appMode=="dark"}]),"data-bs-dismiss":"modal","aria-label":"Close"},null,2)]),t("div",$a,[t("form",{onSubmit:s[13]||(s[13]=Dt(a=>ht(),["prevent"])),class:"row g-3"},[t("div",Va,[Oa,S(t("input",{"onUpdate:modelValue":s[12]||(s[12]=a=>d.inputSecret=a),type:"text",class:"form-control",placeholder:"OTP Code.."},null,512),[[P,d.inputSecret]]),d.codeInvalid?(o(),l("span",Ra,"Invalid Code")):j("",!0)]),La],32)])])])]),xt(Qt,{onDone:b})])}}}),qa=it(Ba,[["__scopeId","data-v-42ffbcad"]]);export{qa as default};
