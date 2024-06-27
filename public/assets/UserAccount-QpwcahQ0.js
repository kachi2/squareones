import{d as Y,r as b,l as J,N as X,o,c as l,b as t,w as P,v as D,O as Q,P as Z,e as T,G as tt,H as et,t as _,f as c,D as at,E as st,_ as ot,k as nt,p as O,g as V,I as lt,J as ht,u as gt,q as M,s as F,x as B,B as ft,j as yt,A as K}from"./index-Bzc0ZEue.js";import{a as y}from"./index-C-Mp-w7b.js";import{u as dt}from"./paramsStore-CzgFvU-w.js";import{u as m}from"./useFunctions-DBfmydnT.js";import{u as wt}from"./index.esm-ClUo6Tz0.js";import"./sweetalert2.all-CKVQOyT1.js";const R=w=>(at("data-v-1f53da1b"),w=w(),st(),w),kt={class:"modal fade",id:"userDocumentUploadModalEdit",tabindex:"-1","data-bs-backdrop":"static","data-bs-keyboard":"false",role:"dialog","aria-labelledby":"modalTitleId","aria-hidden":"true"},St={class:"modal-dialog modal-dialog-centered modal-lg",role:"document"},Pt={class:"modal-content"},Dt=R(()=>t("div",{class:"modal-header p-3 border-0"},[t("h5",{class:"modal-title fw-bold text-center"},"Documents Upload")],-1)),xt={class:"modal-body"},At={class:"row g-3"},Ft={class:"col-lg-6"},Tt={class:"col-12"},$t=R(()=>t("div",{class:"form-label"},"Document title",-1)),Ct={class:"col-12 mt-4"},It=R(()=>t("div",{class:"dropzone text-center small py-2"},[t("i",{class:"bi bi-paperclip color-theme"}),c(" Click here to browse or drag files here to add "),t("br"),c(" You can all more than one document. ")],-1)),Ut={class:"col-lg-6"},Et={class:"card bg-light-subtle h-100"},Nt={class:"card-body"},Mt={key:0,class:"text-muted"},Ot={key:1,class:"list-group list-group-flush"},Vt={class:"modal-footer border-0"},Rt={key:0,class:"btn btn-primary",type:"button",disabled:""},Lt=R(()=>t("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),Ht=["disabled"],Wt=Y({__name:"documentUploadModal",emits:["done"],setup(w,{emit:$}){const N=dt(),d=$,k=b(null),x=b(null),v=["doc","docx","pdf","jpg","png","jpeg"],u=b([]),S=b(""),{getRootProps:C,getInputProps:L}=wt({onDrop:(f,h)=>{if(f.find(U=>!m.isExtension(U.name,v))){m.toast("Invalid file type added","warning");return}u.value=f,console.log(h)}});J(()=>N.documentUploadModal,()=>{u.value.length=0,k.value.click()}),X(()=>{x.value.click()});const A=b(!1),I=async()=>{if(!S.value){m.toast("Please Document(s) title","warning");return}const f=new FormData;f.append("title",S.value),f.append("document_type_id","1"),u.value.forEach((h,g)=>{f.append(`document[${g}]`,h)}),A.value=!0;try{await y.userUploadDocuments(f),A.value=!1,d("done"),x.value.click()}catch(h){console.log(h)}};return(f,h)=>(o(),l("div",null,[t("button",{ref_key:"openModal",ref:k,class:"btn d-none","data-bs-toggle":"modal","data-bs-target":"#userDocumentUploadModalEdit"},null,512),t("div",kt,[t("div",St,[t("div",Pt,[Dt,t("div",xt,[t("div",At,[t("div",Ft,[t("div",Tt,[$t,P(t("input",{"onUpdate:modelValue":h[0]||(h[0]=g=>S.value=g),type:"text",class:"form-control w-100"},null,512),[[D,S.value]])]),t("div",Ct,[t("div",Q(Z(T(C)())),[It,t("input",Q(Z(T(L)())),null,16)],16)])]),t("div",Ut,[t("div",Et,[t("div",Nt,[u.value.length?(o(),l("ul",Ot,[(o(!0),l(tt,null,et(u.value,(g,U)=>(o(),l("li",{key:g,class:"list-group-item p-0"},_(U+1)+". "+_(g.name),1))),128))])):(o(),l("div",Mt,"Uploaded files will show here"))])])])])]),t("div",Vt,[t("button",{onClick:h[1]||(h[1]=g=>u.value.length=0),type:"button",class:"btn btn-warning"}," Remove Documents "),t("button",{ref_key:"closeModal",ref:x,type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Cancel ",512),A.value?(o(),l("button",Rt,[Lt,c(" Saving data.. ")])):(o(),l("button",{key:1,disabled:!u.value.length,onClick:I,type:"button",class:"btn btn-primary"}," Submit Data ",8,Ht))])])])])]))}}),zt=ot(Wt,[["__scopeId","data-v-1f53da1b"]]),Bt={clas:"fw-bold bg-danger"},Jt=t("br",null,null,-1),Yt=["innerHTML"],jt=t("br",null,null,-1),Gt=t("br",null,null,-1),qt=t("br",null,null,-1),Qt={class:"form-group mb-3"},Zt=t("label",{for:"secret",class:"control-label"},"Authenticator Code",-1),Kt={key:0,class:"small text-danger"},Xt=["disabled"],te=Y({__name:"activateTwoFactor",emits:["verified"],setup(w,{emit:$}){nt(()=>{k()});const N=$,d=O({barcode:"",google2fa_secret:"",inputSecret:"",isVerifying:!1,isEnabled:!1,isActivated:!1,codeInvalid:!1});async function k(){try{const u=(await y.activateTwoFactor()).data[0];console.log(u),d.barcode=u.barcode,d.google2fa_secret=u.google2fa_secret}catch(v){console.log(v)}}async function x(){try{d.isVerifying=!0,d.codeInvalid=!1;const v=new FormData;v.append("secret",d.inputSecret);const u=await y.verifyTwoFactor(v);d.inputSecret="",N("verified"),d.isVerifying=!1}catch(v){if(console.log(v),v.response){d.codeInvalid=!0;return}d.isVerifying=!1}}return(v,u)=>(o(),l("div",null,[c(" 1. Scan this QR code with your Google Authenticator App. Alternatively, you can use the code: "),t("code",Bt,_(d.google2fa_secret),1),Jt,t("span",{innerHTML:d.barcode},null,8,Yt),jt,c(" 2. Enter the pin from Google Authenticator app:"),Gt,qt,t("form",{class:"form-horizontal",onSubmit:u[1]||(u[1]=lt(S=>x(),["prevent"]))},[t("div",Qt,[Zt,P(t("input",{"onUpdate:modelValue":u[0]||(u[0]=S=>d.inputSecret=S),id:"secret",type:"password",class:"form-control col-md-4"},null,512),[[D,d.inputSecret]])]),d.codeInvalid?(o(),l("span",Kt,"Invalid Code")):V("",!0),t("button",{disabled:d.isVerifying,type:"submit",class:"btn btn-primary w-100"}," Enable 2FA ",8,Xt)],32)]))}}),r=w=>(at("data-v-4a3ba532"),w=w(),st(),w),ee={class:"container"},ae={class:"car border-0 min-vh-100"},se={class:"card-body"},oe=r(()=>t("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"tab1-tab","data-bs-toggle":"tab","data-bs-target":"#tab1",type:"button",role:"tab","aria-controls":"tab1","aria-selected":"true"},[c(" Personal Infomation "),t("i",{class:"bi bi-check-circle-fill"})])]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"tab2-tab","data-bs-toggle":"tab","data-bs-target":"#tab2",type:"button",role:"tab","aria-controls":"tab2","aria-selected":"false"},[c(" Verify Documents "),t("i",{class:"bi bi-check-circle-fill"})])]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"tab3-tab","data-bs-toggle":"tab","data-bs-target":"#tab3",type:"button",role:"tab","aria-controls":"tab3","aria-selected":"false"},[c(" Account Security "),t("i",{class:"bi bi-check-circle-fill"})])]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"tab4-tab","data-bs-toggle":"tab","data-bs-target":"#tab4",type:"button",role:"tab","aria-controls":"tab4","aria-selected":"false"},[c(" Notification "),t("i",{class:"bi bi-check-circle-fill"})])])],-1)),ne={class:"tab-content pt-5"},le={class:"tab-pane active",id:"tab1",role:"tabpanel","aria-labelledby":"tab1-tab"},de={class:"row g-3"},ie={class:"col-md-12"},ce={class:"card"},re=r(()=>t("div",{class:"card-header fw-bold bg-transparent border-0"},"Information",-1)),ue={class:"card-body"},pe=r(()=>t("p",{class:"pl-2"},"Enter your name, username and primary email address. You can change your primary email address at any time.",-1)),be={class:"row g-3"},_e={class:"col-md-6"},me=r(()=>t("div",{class:"form-label"},"Name:",-1)),ve={class:"col-md-6"},he=r(()=>t("div",{class:"form-label"},"Phone:",-1)),ge={class:"col-md-6"},fe=r(()=>t("div",{class:"form-label"},"Email:",-1)),ye={class:"col-12"},we=["disabled"],ke={class:"tab-pane",id:"tab2",role:"tabpanel","aria-labelledby":"tab2-tab"},Se={class:"card shadow-sm"},Pe=r(()=>t("div",{class:"card-header fw-bold border-0 bg-transparent"},[t("span",{class:"float-end"})],-1)),De={class:"card-body"},xe={class:"fw-bold text-muted"},Ae={class:"list-group list-group-flush"},Fe=["href"],Te={class:"dropdown"},$e={class:"cursor-pointer bell dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},Ce=r(()=>t("i",{class:"bi bi-three-dots text-primary"},null,-1)),Ie={class:"dropdown-menu dropdown-menu-start"},Ue={class:"list-group list-group-flush"},Ee=["onClick"],Ne=r(()=>t("i",{class:"bi bi-trash3"},null,-1)),Me={class:"tab-pane",id:"tab3",role:"tabpanel","aria-labelledby":"tab3-tab"},Oe={class:"row g-3 mt-3"},Ve=yt('<div class="col-md-6 col-lg-6" data-v-4a3ba532><div class="card h-100 border-" data-v-4a3ba532><div class="card-body" data-v-4a3ba532><div class="fw-bold mb-2" data-v-4a3ba532>Password</div><p data-v-4a3ba532> Changed on Jan 1, 2023, 3:39 PM EST </p><button data-bs-toggle="modal" data-bs-target="#passwordModal" class="btn btn-secondary mt-2" data-v-4a3ba532>Update Password</button></div></div></div>',1),Re={class:"col-md-6 col-lg-6"},Le={class:"card h-100"},He={class:"card-body"},We={class:"fw-bold mb-2"},ze={key:0,class:"badge bg-warning"},Be={key:0,class:"card-footer bg-transparent border-0 pb-3"},Je={class:"tab-pane",id:"tab4",role:"tabpanel","aria-labelledby":"tab4-tab"},Ye={class:"row g-3"},je={class:"col-md-12"},Ge={class:"card p-3 bg-transparent fs-5 h-100"},qe={key:0,class:"text-success"},Qe={key:1,class:"text-danger"},Ze={key:0,class:"btn btn-danger float-end"},Ke=r(()=>t("i",{class:"bi bi-power"},null,-1)),Xe={key:1,class:"btn btn-success float-end"},ta=r(()=>t("i",{class:"bi bi-power"},null,-1)),ea={class:"col-md-12"},aa={class:"card p-3 bg-transparent fs-5 h-100"},sa={key:0,class:"text-success"},oa={key:1,class:"text-danger"},na={key:0,class:"btn btn-danger float-end"},la=r(()=>t("i",{class:"bi bi-power"},null,-1)),da={key:1,class:"btn btn-success float-end"},ia=r(()=>t("i",{class:"bi bi-power"},null,-1)),ca={class:"col-md-12 mt-5"},ra={class:"card border-0 shadow-sm h-100"},ua=r(()=>t("div",{class:"card-header bg-transparent fw-bold py-4"}," Recent Login Activities ",-1)),pa={class:"card-body"},ba={class:"fw-bold text-muted"},_a={class:"modal fade",id:"passwordModal",tabindex:"-1","data-bs-backdrop":"static","data-bs-keyboard":"false",role:"dialog","aria-labelledby":"modalTitleId","aria-hidden":"true"},ma={class:"modal-dialog modal-dialog-scrollable modal-dialog-centered",role:"document"},va={class:"modal-content"},ha={class:"modal-header"},ga={class:"modal-body"},fa=r(()=>t("p",{class:"modal-title",id:"modalTitleId"}," You may update your password any time. We suggest you choose a strong password and update it regularly, e.g. every 6 months. All new passwords must contain at least 8 characters. We also suggest having at least one capital and one lower-case letter (Aa-Zz), one special symbol (#, &, % etc), and one number (0-9) in your password for the best strength. ",-1)),ya={class:"row g-3 mt-3"},wa={class:"col-12"},ka=r(()=>t("div",{class:"form-label"},"Old Password:",-1)),Sa={class:"small text-danger"},Pa={class:"col-12"},Da=r(()=>t("div",{class:"form-label"},"New Password:",-1)),xa={class:"col-12"},Aa=r(()=>t("div",{class:"form-label"}," Repeat Password:",-1)),Fa={class:"small text-danger"},Ta={class:"modal-footer border-0"},$a=r(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1)),Ca=["disabled"],Ia={class:"modal fade",id:"twoFAModal",tabindex:"-1","data-bs-backdrop":"static","data-bs-keyboard":"false",role:"dialog","aria-labelledby":"modalTitleId","aria-hidden":"true"},Ua={class:"modal-dialog modal-dialog-scrollable modal-dialog-centered",role:"document"},Ea={class:"modal-content"},Na={class:"modal-header"},Ma=r(()=>t("h5",{class:"modal-title",id:"modalTitleId"}," 2-FA SETTINGS ",-1)),Oa={class:"modal-body"},Va={class:"col-12"},Ra=r(()=>t("div",{class:"form-label"},"Open the two factor authentication app on your device to view your authentication code and verify your identity",-1)),La={key:0,class:"small text-danger"},Ha=r(()=>t("div",{class:"col-12"},[t("button",{type:"submit",class:"btn btn-primary w-100"},"Continue")],-1)),Wa=Y({__name:"UserAccount",setup(w){const $=ht(),N=dt(),d=gt();nt(()=>{C(),rt(),W(),h()});const k=b({page:1,rowsPerPage:15}),x=b(0),v=b([]),u=b(!0);J(k,e=>{C()},{deep:!0});const S=[{text:"DOCUMENT TITLE",value:"title"},{text:"DOCUMENT",value:"document"},{text:"DATE ADDED",value:"created_at"},{text:"ACTION",value:"action"}];async function C(){try{const s=(await y.userGetDocuments()).data.data;x.value=s.total,u.value=!1}catch{}}async function L(e){m.confirmDelete("Delete this document?","Yes, delete").then(async s=>{s.isConfirmed&&(await y.deleteUserDocument(e),m.toast("Document deleted","success"),C())})}const A=b(!1),I=b(!1);function f(e){e=="app"?I.value=!I.value:A.value=!A.value}async function h(){try{const e=new URLSearchParams(k.value).toString(),E=(await y.userActivities(e)).data.data;U.value=E.total,j.value=E.data,it.value=!1}catch{}}const g=b({page:1,rowsPerPage:15}),U=b(0),j=b([]),it=b(!0);J(g,e=>{h()},{deep:!0});const ct=[{text:"NAME",value:"name"},{text:"TYPE",value:"type"},{text:"ACTION",value:"action"},{text:"DATE",value:"created_at"}],p=O({name:"",phone:"",email:"",isSaving:!1});function rt(){const e=JSON.parse(d.profileData);p.email=(e==null?void 0:e.email)??"",p.name=(e==null?void 0:e.name)??"",p.phone=(e==null?void 0:e.phone)??"",console.log(e,"user")}function ut(){const e=JSON.parse(d.profileData);e.name=p.name,e.phone=p.phone,d.profileData=JSON.stringify(e)}async function pt(){if(!p.name){m.toast(" Name field is compulsory","warning");return}if(!p.phone){m.toast(" Phone field is compulsory","warning");return}try{p.isSaving=!0;const e=new FormData;e.append("name",p.name??" "),e.append("phone",p.phone??""),await y.userUpdateDetails(e),p.isSaving=!1,m.toast("Details Updated Successfully","success"),ut()}catch(e){console.log(e)}}const n=O({oldPassword:"",newPassword:"",newPasswordRepeat:"",isSaving:!1,passwordsMatching:"",invalidPassword:""}),H=b(null);X(()=>{H.value.click()});async function bt(){if(n.passwordsMatching="",n.invalidPassword="",!(!n.oldPassword&&!n.newPassword)){if(n.oldPassword.length<8||n.newPassword.length<8||n.newPasswordRepeat.length<8){m.toast("Password Fields must be at least 8 characters.","warning");return}if(n.newPassword!==n.newPasswordRepeat){n.passwordsMatching="password do not match";return}try{n.isSaving=!0;const e=new FormData;e.append("user_id",N.currentUserId),e.append("oldPassword",n.oldPassword),e.append("password",n.newPassword),await y.userUpdatePassword(e),n.oldPassword=n.newPassword=n.newPasswordRepeat="",n.isSaving=!1,H.value.click(),m.toast("Password Changed Successfully","success")}catch(e){console.log(e),e.response&&e.response.status===400&&(n.invalidPassword="Password invalid"),n.isSaving=!1}}}const i=O({isActivated:!1,isEnabled:!1,activation:!1,inputSecret:"",isVerifying:!1,currentAction:"",codeInvalid:!1}),G=b(null);async function W(){try{const s=(await y.checkAccountStatus()).data.data;i.isActivated=!!s.google2fa_secret,i.isEnabled=!!s.enable_2fa_at}catch(e){console.log(e)}}async function _t(){try{i.codeInvalid=!1;const e=new FormData;e.append("secret",i.inputSecret);const E=await(i.currentAction=="enable"?y.enableTwoFactor(e):y.disableTwoFactor(e));d.twofactorEnabled=i.currentAction=="enable"?"1":null,i.inputSecret="",G.value.click(),W()}catch(e){if(console.log(e),e.response){i.codeInvalid=!0;return}}}function mt(){i.activation=!1,d.twofactorEnabled="1",W()}return(e,s)=>{const E=K("isLoadingComponent"),q=K("EasyDataTable");return o(),l("div",ee,[t("div",ae,[t("div",se,[oe,t("div",ne,[t("div",le,[t("div",de,[t("div",ie,[t("div",ce,[re,t("div",ue,[pe,t("div",be,[t("div",_e,[me,P(t("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>p.name=a),type:"text",class:"form-control"},null,512),[[D,p.name]])]),t("div",ve,[he,P(t("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>p.phone=a),type:"text",class:"form-control"},null,512),[[D,p.phone]])]),t("div",ge,[fe,P(t("input",{readonly:"","onUpdate:modelValue":s[2]||(s[2]=a=>p.email=a),type:"text",class:"form-control"},null,512),[[D,p.email]])]),t("div",ye,[t("button",{disabled:p.isSaving,onClick:pt,class:"btn btn-primary float-end"},_(p.isSaving?"Updating..":"Update Details"),9,we)])])])])])])]),t("div",ke,[t("div",Se,[Pe,t("div",De,[u.value?(o(),M(E,{key:0})):(o(),M(q,{key:1,class:"easy-data-table","show-index":"",headers:S,items:v.value,"buttons-pagination":"","server-options":k.value,"onUpdate:serverOptions":s[3]||(s[3]=a=>k.value=a),"server-items-length":x.value},{header:F(a=>[t("span",xe,_(a.text=="#"?"S/N":a.text),1)]),"item-updated_at":F(a=>[c(_(T(m).dateDisplay(a.updated_at)),1)]),"item-created_at":F(a=>[c(_(T(m).dateDisplay(a.created_at)),1)]),"item-document":F(a=>[t("ul",Ae,[(o(!0),l(tt,null,et(JSON.parse(a.document),(z,vt)=>(o(),l("li",{key:z,class:"list-group-item p-0 border-0"},[t("a",{href:z,target:"_blank"},"Document "+_(vt+1),9,Fe)]))),128))])]),"item-action":F(a=>[t("span",Te,[t("span",$e,[Ce,t("div",Ie,[t("ul",Ue,[t("li",{onClick:z=>L(a.id),class:"dropdown-item text-danger",style:{"background-color":"transparent !important"}},[Ne,c(" Delete ")],8,Ee)])])])])]),_:1},8,["items","server-options","server-items-length"]))])])]),t("div",Me,[c(" Your privacy and security are top priority. We do all we can to keep your account secure, and we encourage you to do the same by following best practices: Update your password regularly, enable Two-Factor Authentication, and keep your Support PIN private. "),t("div",Oe,[Ve,t("div",Re,[t("div",Le,[t("div",He,[t("div",We,[c("2-Factor Authentication "),i.isActivated?(o(),l("span",{key:1,class:B(["badge",i.isEnabled?"bg-success":"bg-warning"])},_(i.isEnabled?"Enabled":"Not Enabled"),3)):(o(),l("span",ze," Not Activated"))]),i.activation?(o(),M(te,{key:0,onVerified:mt})):V("",!0)]),i.activation?V("",!0):(o(),l("div",Be,[i.isActivated?i.isEnabled?(o(),l("button",{key:2,onClick:s[6]||(s[6]=a=>i.currentAction="disable"),"data-bs-toggle":"modal","data-bs-target":"#twoFAModal",class:"btn btn-secondary"},"Disable 2FA ")):(o(),l("button",{key:1,onClick:s[5]||(s[5]=a=>i.currentAction="enable"),"data-bs-toggle":"modal","data-bs-target":"#twoFAModal",class:"btn btn-secondary"},"Enable 2FA")):(o(),l("button",{key:0,onClick:s[4]||(s[4]=a=>i.activation=!0),class:"btn btn-secondary"},"Activate 2Fa"))]))])])])]),t("div",Je,[t("div",Ye,[t("div",je,[t("div",Ge,[c(" Enable In-App Notifications "),I.value?(o(),l("span",qe,"(ON)")):(o(),l("span",Qe,"(OFF)")),t("div",{class:"float-end",onClick:s[7]||(s[7]=a=>f("app"))},[I.value?(o(),l("button",Ze,[c(" SWITCH OFF "),Ke])):(o(),l("button",Xe,[c(" SWITCH ON "),ta]))])])]),t("div",ea,[t("div",aa,[c(" Enable Email Notifications "),A.value?(o(),l("span",sa,"(ON)")):(o(),l("span",oa,"(OFF)")),t("div",{class:"float-end",onClick:s[8]||(s[8]=a=>f("email"))},[A.value?(o(),l("button",na,[c(" SWITCH OFF "),la])):(o(),l("button",da,[c(" SWITCH ON "),ia]))])])])])])])]),t("div",ca,[t("div",ra,[ua,t("div",pa,[u.value?(o(),M(E,{key:0})):(o(),M(q,{key:1,class:"easy-data-table","show-index":"",headers:ct,items:j.value,"buttons-pagination":"","server-options":g.value,"onUpdate:serverOptions":s[9]||(s[9]=a=>g.value=a),"server-items-length":U.value},{header:F(a=>[t("span",ba,_(a.text=="#"?"S/N":a.text),1)]),"item-updated_at":F(a=>[c(_(T(m).dateDisplay(a.updated_at)),1)]),"item-created_at":F(a=>[c(_(T(m).dateDisplay(a.created_at)),1)]),_:1},8,["items","server-options","server-items-length"]))])])])]),t("div",_a,[t("div",ma,[t("div",va,[t("div",ha,[t("button",{ref_key:"closePasswordModal",ref:H,type:"button",class:B(["btn-close",{"btn-close-white":T($).appMode=="dark"}]),"data-bs-dismiss":"modal","aria-label":"Close"},null,2)]),t("div",ga,[fa,t("div",ya,[t("div",wa,[ka,P(t("input",{"onUpdate:modelValue":s[10]||(s[10]=a=>n.oldPassword=a),type:"password",class:"form-control"},null,512),[[D,n.oldPassword]]),t("span",Sa,_(n.invalidPassword),1)]),t("div",Pa,[Da,P(t("input",{"onUpdate:modelValue":s[11]||(s[11]=a=>n.newPassword=a),type:"password",class:"form-control"},null,512),[[D,n.newPassword]])]),t("div",xa,[Aa,P(t("input",{"onUpdate:modelValue":s[12]||(s[12]=a=>n.newPasswordRepeat=a),type:"password",class:"form-control"},null,512),[[D,n.newPasswordRepeat]]),t("span",Fa,_(n.passwordsMatching),1)])])]),t("div",Ta,[$a,t("button",{disabled:n.isSaving,onClick:bt,type:"button",class:"btn btn-primary"},_(n.isSaving?"Saving...":"Update Password"),9,Ca)])])])]),t("div",Ia,[t("div",Ua,[t("div",Ea,[t("div",Na,[Ma,t("button",{ref_key:"closeTwoFAModal",ref:G,type:"button",class:B(["btn-close",{"btn-close-white":T($).appMode=="dark"}]),"data-bs-dismiss":"modal","aria-label":"Close"},null,2)]),t("div",Oa,[t("form",{onSubmit:s[14]||(s[14]=lt(a=>_t(),["prevent"])),class:"row g-3"},[t("div",Va,[Ra,P(t("input",{"onUpdate:modelValue":s[13]||(s[13]=a=>i.inputSecret=a),type:"text",class:"form-control",placeholder:"OTP Code.."},null,512),[[D,i.inputSecret]]),i.codeInvalid?(o(),l("span",La,"Invalid Code")):V("",!0)]),Ha],32)])])])]),ft(zt,{onDone:C})])}}}),qa=ot(Wa,[["__scopeId","data-v-4a3ba532"]]);export{qa as default};
