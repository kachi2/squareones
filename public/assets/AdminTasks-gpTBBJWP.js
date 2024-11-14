import{d as Q,K as W,T as ot,r as f,l as X,p as z,P as Y,o as m,c as u,b as t,B as k,t as c,e as l,w,v as L,y as Z,f as p,G as S,H as I,g as nt,x as q,J as lt,A as $,C as tt,D as et,_ as st,k as it,s as y,U as dt}from"./index-DIdjWU0t.js";import{a as C}from"./index-DPdEYKIm.js";import{u as D}from"./useFunctions-CEbRaesJ.js";import{d as at}from"./index-DjxWyTOV.js";const b=g=>(tt("data-v-fb7c756e"),g=g(),et(),g),rt={class:"modal fade",id:"tsk-cm-mdl",tabindex:"-1","data-bs-backdrop":"static","data-bs-keyboard":"false",role:"dialog","aria-labelledby":"modalTitleIdT","aria-hidden":"true"},ct={class:"modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl",role:"document"},mt={class:"modal-content"},ut={class:"modal-header d-inline"},pt={class:"modal-title fw-light text-muted small float-end",id:"modalTitleIdT"},_t={class:"modal-body py-0"},bt={class:"row"},vt={class:"col-lg-7 py-3"},gt={class:"modal-title text-capitalize",id:"modalTitleIdT"},ht={class:"form-floating-custom"},ft=b(()=>t("label",{class:"",for:"confirm"},[p(" Task title "),t("span",{class:"text-danger"}," * ")],-1)),yt={class:"alert alert-info mt-3 border-0",role:"alert"},kt={class:"form-floating-custom"},wt=b(()=>t("label",{class:"",for:"confirm"},[p(" Task Description "),t("span",{class:"text-danger"}," * ")],-1)),xt={class:"table-responsive",style:{height:"300px"}},Tt={class:"table table-primary table-borderless bg-transparent"},St=b(()=>t("td",null,[t("i",{class:"bi bi-stars"}),p(" Status: ")],-1)),Ct={class:"status-dropdown"},$t={class:"dropdown"},Dt=b(()=>t("span",{class:"status-indicator-inside bg-white me-2"},null,-1)),Ut=b(()=>t("td",null,[t("i",{class:"bi bi-calendar"}),p(" Due Date: ")],-1)),Vt={key:0},Mt=b(()=>t("td",null,[t("i",{class:"bi bi-person"}),p(" Assignee: ")],-1)),At={class:"badge bg-info-subtle text-dark"},Pt={class:""},Bt=b(()=>t("td",null,[t("i",{class:"bi bi-flag-fill"}),p(" Priority: ")],-1)),It=["value"],Lt={class:"col-lg-5 activity-tab px-0"},Nt={class:"p-3 fw-bold header shadow-sm"},Ot=b(()=>t("option",{value:"activities"},"Activities",-1)),Ft=b(()=>t("option",{value:"comments"},"Comments",-1)),zt=[Ot,Ft],Et={key:0,class:"body"},Gt={key:1,class:"p-3 body"},Ht={key:0,class:"list-group list-group-flush"},jt=b(()=>t("i",{class:"bi bi-dot"},null,-1)),qt=b(()=>t("br",null,null,-1)),Jt={class:"fst-italic"},Kt={key:1,class:"list-group list-group-flush"},Rt={class:"text-muted"},Qt={class:"fst-italic text-muted xsmall"},Wt={class:"p-3 footer"},Xt={class:"col-9"},Yt=["disabled"],Zt={class:"col-3"},te=["disabled"],ee=b(()=>t("i",{class:"bi bi-send"},null,-1)),se=Q({__name:"adminTasksCommentsModal",emits:["done"],setup(g,{emit:A}){const x=at.useToast(),N=A,O=W(),{commentsModalIsClicked:U,currentTaskComments:E,currentTaskObj:i,currentUserType:F}=ot(O),P=f(null),V=f(null),G=[{name:"High",value:"high"},{name:"Medium",value:"medium"},{name:"low",value:"low"}];async function M(e,o){try{const r=new FormData;r.append("task_id",e.id),r.append("title",e==null?void 0:e.title),r.append("content",e==null?void 0:e.content),r.append("priority",e==null?void 0:e.priority),r.append("due_date",typeof e.due_date!="string"?e.due_date.toDateString():e.due_date),console.log(e==null?void 0:e.title),B(),await C.adminUpdateTask(r)&&x.success("Task Updated",{position:"top-right"})}catch(r){x.error("Something went wrong",{position:"top-right"}),console.log(r)}}X(()=>U.value,()=>{P.value.click(),s.activities=[],s.comments=[],s.contentShowing="activities",s.isLoading=!0,B()});const _=z({text:"",isSending:!1}),s=z({activities:[],comments:[],contentShowing:"activities",isLoading:!0});function H(e){return e.split(" ").map(h=>h.charAt(0)).join("")}async function B(){var e,o,r,h;try{const T=await C.adminGetTaskComments(i.value.id),a=await C.adminGetTaskActivities(i.value.id);s.activities=((o=(e=a==null?void 0:a.data)==null?void 0:e.data)==null?void 0:o.data)??[],s.comments=((h=(r=T==null?void 0:T.data)==null?void 0:r.data)==null?void 0:h.data)??[],s.isLoading=!1}catch{s.isLoading=!1}}async function d(){if(_.text)try{_.isSending=!0;const e=new FormData;e.append("task_id",i.value.id),e.append("comment",_.text);const o=F.value=="admin"?await C.adminSendTaskComment(e):await C.userSendTaskComment(e);_.text="",B(),_.isSending=!1}catch{_.isSending=!1,x.error("Something went wrong with your request")}}return Y(()=>{V.value.click()}),(e,o)=>{var a,j,J,K;const r=$("modalCloseBtn"),h=$("VueDatePicker"),T=$("isLoadingComponent");return m(),u(S,null,[t("button",{ref_key:"taskModalOpener",ref:P,type:"button",class:"d-none","data-bs-toggle":"modal","data-bs-target":"#tsk-cm-mdl"},null,512),t("div",rt,[t("div",ct,[t("div",mt,[t("div",ut,[k(r,{class:"float-end ms-5",onClick:o[0]||(o[0]=n=>N("done"))}),t("h5",pt," Created "+c(`${l(D).dateDisplay(l(i).created_at)}`),1)]),t("div",_t,[t("div",bt,[t("div",vt,[t("h5",gt,[t("div",ht,[w(t("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=n=>l(i).title=n),class:"form-control modal-form",onBlur:o[2]||(o[2]=n=>M(l(i)))},null,544),[[L,l(i).title]]),ft])]),t("div",yt,[t("div",kt,[w(t("textarea",{class:"form-control modal-text","onUpdate:modelValue":o[3]||(o[3]=n=>l(i).content=n),onBlur:o[4]||(o[4]=n=>M(l(i)))}," ",544),[[L,l(i).content]]),wt])]),t("div",xt,[t("table",Tt,[t("tbody",null,[t("tr",null,[St,t("td",null,[t("div",Ct,[t("div",$t,[t("span",{class:Z(["badge py-2","bg-"+l(O).taskStatusColor(l(i).status)]),"aria-expanded":"false"},[Dt,p(" "+c(l(i).status),1)],2)])])]),(m(),u(S,null,I(10,n=>t("td")),64))]),t("tr",null,[Ut,t("td",null,[k(h,{class:"small",format:l(D).dateDisplay,clearable:!1,"enable-time-picker":!1,"auto-apply":"",modelValue:l(i).due_date,"onUpdate:modelValue":o[5]||(o[5]=n=>l(i).due_date=n),onBlur:o[6]||(o[6]=n=>M(l(i)))},null,8,["format","modelValue"])])]),(j=(a=l(i))==null?void 0:a.user_task)!=null&&j.name?(m(),u("tr",Vt,[Mt,t("td",null,[t("span",At,c(H(l(i).user_task.name).toUpperCase()),1),t("span",Pt,c(((K=(J=l(i))==null?void 0:J.user_task)==null?void 0:K.name)??""),1)])])):nt("",!0),t("tr",null,[Bt,t("td",null,[w(t("select",{"onUpdate:modelValue":o[7]||(o[7]=n=>l(i).priority=n),class:"form-select",onBlur:o[8]||(o[8]=n=>M(l(i)))},[(m(),u(S,null,I(G,n=>t("option",{value:n.value,key:n.value},c(n.name),9,It)),64))],544),[[q,l(i).priority]])])])])])])]),t("div",Lt,[t("div",Nt,[w(t("select",{"onUpdate:modelValue":o[9]||(o[9]=n=>s.contentShowing=n),class:"form-select bg-dynamic fw-bold"},zt,512),[[q,s.contentShowing]])]),s.isLoading?(m(),u("div",Et,[k(T)])):(m(),u("div",Gt,[s.contentShowing!="comments"?(m(),u("ul",Ht,[(m(!0),u(S,null,I(s.activities,n=>(m(),u("li",{key:n.id,class:"list-group-item border-0 px-0"},[jt,p(" "+c(n.activity)+" ",1),qt,t("span",Jt,c(l(D).dateDisplay(n.created_at,"m,y,t")),1)]))),128))])):(m(),u("ul",Kt,[(m(!0),u(S,null,I(s.comments,n=>{var R;return m(),u("li",{key:n.id,class:"list-group-item px-0"},[t("div",Rt,c((R=n==null?void 0:n.users)==null?void 0:R.name),1),t("div",null,c(n.comment),1),t("div",Qt,c(l(D).dateDisplay(n.created_at,"m,y,t")),1)])}),128))]))])),t("div",Wt,[t("form",{onSubmit:lt(d,["prevent"]),class:"row g - 3"},[t("div",Xt,[w(t("input",{disabled:s.contentShowing!="comments","onUpdate:modelValue":o[10]||(o[10]=n=>_.text=n),type:"text",class:"form-control",placeholder:"enter comment here.."},null,8,Yt),[[L,_.text]])]),t("div",Zt,[t("button",{disabled:_.isSending||s.contentShowing!="comments",type:"submit",class:"btn btn-primary w-100"},[ee,p(" Send ")],8,te)])],32)])])])]),t("button",{ref_key:"taskModalCloser",ref:V,type:"button",class:"btn btn-secondary d-none","data-bs-dismiss":"modal"}," Close ",512)])])])],64)}}}),ae=st(se,[["__scopeId","data-v-fb7c756e"]]),v=g=>(tt("data-v-6e40e419"),g=g(),et(),g),oe={class:"container"},ne=v(()=>t("h5",{class:"fw-bold page-title mb-4"}," Tasks",-1)),le={class:"row g-4"},ie=v(()=>t("div",{class:"col-md-10"},null,-1)),de={class:"col-md-2"},re={class:"col-12"},ce={class:"card shadow-sm min-vh-100"},me={class:"card-body"},ue={class:"badge bg-info-subtle text-dark"},pe={class:"fw-bold text-muted"},_e=v(()=>t("span",{class:"status-indicator-inside text-dark me-2"},null,-1)),be=v(()=>t("i",{class:"bi bi-flag-fill"},null,-1)),ve=["onClick"],ge={class:"modal fade",id:"updateTaskModal",tabindex:"-1","data-bs-backdrop":"static","data-bs-keyboard":"false",role:"dialog","aria-labelledby":"modalTitleId","aria-hidden":"true"},he={class:"modal-dialog modal-dialog-scrollable modal-dialog-centered",role:"document"},fe={class:"modal-content"},ye={class:"modal-header text-capitalize border-0"},ke=v(()=>t("h5",{class:"modal-title",id:"modalTitleId"}," Update Task ",-1)),we={class:"modal-body"},xe={class:"row g-3"},Te={class:"col-12"},Se=v(()=>t("label",{class:"form-label"},"Task Title",-1)),Ce={class:"col-12"},$e=v(()=>t("label",{class:"form-label"},"Task Content",-1)),De={class:"col-12"},Ue=v(()=>t("label",{class:"form-label"},"Priority",-1)),Ve=["value"],Me={class:"col-12"},Ae=v(()=>t("label",{class:"form-label"},"Due Date",-1)),Pe={class:"modal-footer border-0"},Be={key:0,class:"btn btn-primary",type:"button",disabled:""},Ie=v(()=>t("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),Le=Q({__name:"AdminTasks",setup(g){const A=at.useToast(),x=W(),N=z({list:[]});it(()=>{U()});function O(d){return d.split(" ").map(r=>r.charAt(0)).join("")}async function U(){try{V.value=!0;const d=new URLSearchParams(E.value).toString(),o=(await C.adminGetAllTasks()).data;P.value=o.total,F.value=o.data,N.list=o.data,console.log(N.list,"companies.list"),V.value=!1}catch(d){console.log(d)}}const E=f({page:1,rowsPerPage:15}),i=f({page:1,rowsPerPage:15}),F=f([]),P=f(0),V=f(!0),G=[{text:"User",value:"user_task.name"},{text:"Task Name",value:"title"},{text:"Priority",value:"priority"},{text:"Created",value:"created_at"},{text:"Due Date",value:"due_date"},{text:"Status",value:"status"},{text:"",value:"comment"}];X(E,d=>{U()},{deep:!0});const M=f(null),_=f(null),s=z({task_id:"",user_id:"",title:"",priority:"high",content:"",due_date:new Date,isSaving:!1}),H=[{name:"High",value:"high"},{name:"Medium",value:"medium"},{name:"low",value:"low"}];async function B(){try{if(!s.title||!s.content||!s.priority){A.warning("Please complete fields",{position:"top-right"});return}s.isSaving=!0;const d=new FormData;d.append("user_id",s.user_id),d.append("task_id",s.task_id),d.append("title",s.title),d.append("content",s.content),d.append("priority",s.priority),d.append("due_date",s.due_date.toDateString());const e=await C.adminUpdateTask(d);s.isSaving=!1,_.value.click(),A.success("Task Updated",{position:"top-right"}),U()}catch(d){A.error("Something went wrong",{position:"top-right"}),console.log(d),s.isSaving=!1,_.value.click()}}return Y(()=>{_.value.click()}),(d,e)=>{const o=$("router-link"),r=$("EasyDataTable"),h=$("modalCloseBtn"),T=$("VueDatePicker");return m(),u(S,null,[t("div",oe,[ne,t("div",le,[ie,t("div",de,[k(o,{to:"/admin/tasks-assign",class:"btn btn-primary w-100"},{default:y(()=>[p("Assign Tasks")]),_:1})]),t("div",re,[t("div",ce,[t("div",me,[k(r,{loading:V.value,class:"easy-data-table",headers:G,items:F.value,"buttons-pagination":"","server-options":i.value,"onUpdate:serverOptions":e[0]||(e[0]=a=>i.value=a),"server-items-length":P.value},{"item-user_task.name":y(a=>[t("span",null,[t("span",ue,c(O(a.user_task.name).toUpperCase()),1),p(" "+c(a.user_task.name),1)])]),header:y(a=>[t("span",pe,c(a.text=="#"?"S/N":a.text),1)]),"item-status":y(a=>[t("span",{class:Z([["badge","bg-"+l(x).taskStatusColor(a.status)+"-subtle"],"bgText py-2 text-dark"])},[p(c(a.status)+" ",1),_e],2)]),"item-priority":y(a=>[t("span",{class:"fst-italic",style:dt({color:l(x).taskPriorityColor(a.priority)})},[be,p(" "+c(a.priority),1)],4)]),"item-due_date":y(a=>[p(c(l(D).dateDisplay(a.due_date)),1)]),"item-created_at":y(a=>[p(c(l(D).dateDisplay(a.created_at)),1)]),"item-comment":y(a=>[t("button",{onClick:j=>l(x).openTaskCommentModal(a,"admin"),class:"btn btn-warning"}," View Task ",8,ve)]),_:1},8,["loading","items","server-options","server-items-length"])])])])])]),t("button",{ref_key:"modalOpen",ref:M,class:"d-none",type:"button","data-bs-toggle":"modal","data-bs-target":"#updateTaskModal"},null,512),t("div",ge,[t("div",he,[t("div",fe,[t("div",ye,[ke,k(h)]),t("div",we,[t("div",xe,[t("div",Te,[Se,w(t("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.title=a),type:"text",class:"form-control"},null,512),[[L,s.title]])]),t("div",Ce,[$e,w(t("textarea",{"onUpdate:modelValue":e[2]||(e[2]=a=>s.content=a),style:{height:"100px"},class:"form-control"},null,512),[[L,s.content]])]),t("div",De,[Ue,w(t("select",{"onUpdate:modelValue":e[3]||(e[3]=a=>s.priority=a),class:"form-select"},[(m(),u(S,null,I(H,a=>t("option",{value:a.value,key:a.value},c(a.name),9,Ve)),64))],512),[[q,s.priority]])]),t("div",Me,[Ae,k(T,{class:"small",format:l(D).dateDisplay,clearable:!1,"enable-time-picker":!1,"auto-apply":"",modelValue:s.due_date,"onUpdate:modelValue":e[4]||(e[4]=a=>s.due_date=a)},null,8,["format","modelValue"])])])]),t("div",Pe,[t("button",{ref_key:"modalCloser",ref:_,type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",512),s.isSaving?(m(),u("button",Be,[Ie,p(" Loading ")])):(m(),u("button",{key:1,onClick:B,type:"button",class:"btn btn-primary text-capitalize"}," Update task "))])])])]),k(ae,{onDone:U})],64)}}}),Ee=st(Le,[["__scopeId","data-v-6e40e419"]]);export{Ee as default};
