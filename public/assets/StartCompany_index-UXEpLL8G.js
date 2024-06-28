import{u as X}from"./StartCompany_store-BzSlICDn.js";import{p as dt}from"./pageLoadingComponent-Cu3H2uQf.js";import{d as Q,r as z,k as ae,l as be,n as De,p as Ne,o as g,q,s as N,b as e,w as k,m as F,e as n,v as E,t as u,x as ie,y as W,c as w,f as l,g as I,z as he,A as Z,B as U,C as Ke,D as fe,E as ye,_ as ge,F as je,G as Ve,H as Ie}from"./index-D4gsUGoW.js";import{n as Ze,S as de,d as Je,f as Xe,a as Qe,s as et,b as tt}from"./StartCompany_template-DHCuFshe.js";import{d as _e}from"./index-DHIHXO69.js";import{a as J}from"./index-BU18x3BW.js";import{j as G}from"./maska-Cp-LWreF.js";import{u as ut}from"./vee-validate.esm-B6-U7Mzz.js";import{a as xe,c as _t}from"./index.esm-CpjDoHWK.js";import{u as ue}from"./useFunctions-CWgVnZ2l.js";import{B as pt}from"./BasePdf-SlUj-mt6.js";import"./sweetalert2.all-C5oE6JWa.js";const mt=e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Name"),e("span",null,"Enter your preferred company names in order of priority.")],-1),ht={class:"section"},ft=e("div",{class:"fw-bold"},"Primary Choice",-1),yt=e("div",null,"This is your most preferred company name. Ensure it is the legal name intended for registration. ",-1),gt={class:"row g-2 mt-1"},vt={class:"col-md-6"},bt={class:"text-danger"},$t={class:"col-md-6"},St=e("option",{value:"Limited"},"Limited",-1),wt=e("option",{value:"LIMITED"},"LIMITED",-1),xt=[St,wt],kt={class:"col-md-6"},Ct={class:"text-danger"},Et={class:"col-md-6"},At=e("option",{value:"有限公司"},"有限公司",-1),Ft=[At],Pt={key:0,class:"section"},Tt=e("div",{class:"fw-bolder"},"Secondary Choices",-1),Vt=e("div",null,"These are alternative names you would consider should your primary choice be unavailable. List them in descending order of preference.",-1),It={class:"row g-2 mt-1"},Dt={class:"col-md-6"},Lt={class:"text-danger"},Ot={class:"col-md-6"},Ut=e("option",{value:"Limited"},"Limited",-1),Bt=e("option",{value:"LIMITED"},"LIMITED",-1),Rt=[Ut,Bt],qt={class:"col-md-6"},jt={class:"text-danger"},Nt={class:"col-md-6"},zt=e("option",{value:"有限公司"},"有限公司",-1),Mt=[zt],Ht={class:"p-1 mt-1"},Yt=e("i",{class:"bi bi-x-circle"},null,-1),Wt={key:1,class:"section"},Gt=e("div",{class:"fw-bold"},"Third Choice",-1),Kt=e("div",null,"This is your third choice company name. Ensure it is the legal name intended for registration. ",-1),Zt={class:"row g-2 mt-1"},Jt={class:"col-md-6"},Xt={class:"text-danger"},Qt={class:"col-md-6"},en=e("option",{value:"Limited"},"Limited",-1),tn=e("option",{value:"LIMITED"},"LIMITED",-1),nn=[en,tn],sn={class:"col-md-6"},on={class:"text-danger"},an={class:"col-md-6"},ln=e("option",{value:"有限公司"},"有限公司",-1),rn=[ln],cn={class:"p-1 mt-1"},dn=e("i",{class:"bi bi-x-circle"},null,-1),un={key:2,class:"section"},_n=e("div",{class:"fw-bold"},"Fourth Choice",-1),pn=e("div",null,"This is your fourth company name. Ensure it is the legal name intended for registration. ",-1),mn={class:"row g-2 mt-1"},hn={class:"col-md-6"},fn={class:"text-danger"},yn={class:"col-md-6"},gn=e("option",{value:"Limited"},"Limited",-1),vn=e("option",{value:"LIMITED"},"LIMITED",-1),bn=[gn,vn],$n={class:"col-md-6"},Sn={class:"text-danger"},wn={class:"col-md-6"},xn=e("option",{value:"有限公司"},"有限公司",-1),kn=[xn],Cn={class:"p-1 mt-1"},En=e("i",{class:"bi bi-x-circle"},null,-1),An={key:3,class:"section"},Fn=e("div",{class:"fw-bold"},"Fifth Choice",-1),Pn=e("div",null,"This is your fifth company name. Ensure it is the legal name intended for registration. ",-1),Tn={class:"row g-2 mt-1"},Vn={class:"col-md-6"},In={class:"text-danger"},Dn={class:"col-md-6"},Ln=e("option",{value:"Limited"},"Limited",-1),On=e("option",{value:"LIMITED"},"LIMITED",-1),Un=[Ln,On],Bn={class:"col-md-6"},Rn={class:"text-danger"},qn={class:"col-md-6"},jn=e("option",{value:"有限公司"},"有限公司",-1),Nn=[jn],zn={class:"p-1 mt-1"},Mn=e("i",{class:"bi bi-x-circle"},null,-1),Hn=["disabled"],Yn=e("i",{class:"bi bi-plus-circle"},null,-1),Wn={class:"movement-buttons my-5"},Gn=e("i",{class:"bi bi-arrow-right"},null,-1),Kn={key:1,class:"btn btn-primary",type:"button",disabled:""},Zn=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),Jn=e("section",{class:"section"},[e("div",{class:"fw-bold"}," What are the restrictions on naming my company? "),e("div",null," Your company name should be unique and not be too similar to any existing company registered in Hong Kong. It must end with 'Limited' or ‘有限公司’ for Chinese to signify limited liability and should not contain restricted terms or imply government affiliation without permission. ")],-1),Xn=e("section",{class:"section"},[e("div",{class:"fw-bold"}," Can I include both English and Chinese in my company name? "),e("div",null," Yes, you can register a name in English, Chinese, or both. However, the Chinese name must not be a direct translation of the English name and only Traditional Chinese characters are accepted by the Hong Kong Companies Registry. ")],-1),Qn=e("section",{class:"section"},[e("div",{class:"fw-bold"}," What should I do if my preferred company name is already taken? "),e("div",null," It's advisable to have alternative names ready. You can prioritize your preferred names when filling out this form, and we will register in order of preference. If all listed names are taken, you will be contacted to provide additional names. ")],-1),es=Q({__name:"Name",setup(a){const o=_e.useToast(),s=X(),t=Ze();z(""),ae(()=>{t.updateFields(s.companyInProgress)}),be(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});function v(){for(var _ of["isSecond","isThird","isForth","isFifth"])if(!t[_]){t[_]=!0;return}}De(()=>{t.choice_level1_chn_name==""&&(t.errors.choice_level1_chn_name="",delete t.errors.choice_level1_chn_name),t.choice_level2_chn_name==""&&(t.errors.choice_level2_chn_name=null,delete t.errors.choice_level2_chn_name),t.choice_level3_chn_name==""&&(t.errors.choice_level3_chn_name=null,delete t.errors.choice_level3_chn_name),t.choice_level4_chn_name==""&&(t.errors.choice_level4_chn_name="",delete t.errors.choice_level4_chn_name),t.choice_level5_chn_name==""&&(t.errors.choice_level5_chn_name="",delete t.errors.choice_level5_chn_name)});function c(_){t[_]=!1,_=="isSecond"&&(t.resetField("choice_level2_eng_name"),t.resetField("choice_level2_chn_name"),delete t.errors.choice_level2_eng_name,delete t.errors.choice_level2_chn_name),_=="isThird"&&(t.resetField("choice_level3_eng_name"),t.resetField("choice_level3_chn_name"),delete t.errors.choice_level3_eng_name,delete t.errors.choice_level3_chn_name),_=="isForth"&&(t.resetField("choice_level4_eng_name"),t.resetField("choice_level4_chn_name"),delete t.errors.choice_level4_eng_name,delete t.errors.choice_level4_chn_name),_=="isFifth"&&(t.resetField("choice_level5_eng_name"),t.resetField("choice_level5_chn_name"),delete t.errors.choice_level5_eng_name,delete t.errors.choice_level5_chn_name)}const i=Ne({choice_level1_chn_name:"",choice_level2_chn_name:"",choice_level3_chn_name:"",choice_level4_chn_name:"",choice_level5_chn_name:""});be(()=>[t.choice_level1_chn_name,t.choice_level2_chn_name,t.choice_level3_chn_name,t.choice_level4_chn_name,t.choice_level5_chn_name],()=>{i.choice_level1_chn_name=t.choice_level1_chn_name&&!t.chineseCheck(t.choice_level1_chn_name)?"Please input only Chinese characters":"",i.choice_level2_chn_name=t.choice_level2_chn_name&&!t.chineseCheck(t.choice_level2_chn_name)?"Please input only Chinese characters":"",i.choice_level3_chn_name=t.choice_level3_chn_name&&!t.chineseCheck(t.choice_level3_chn_name)?"Please input only Chinese characters":"",i.choice_level4_chn_name=t.choice_level4_chn_name&&!t.chineseCheck(t.choice_level4_chn_name)?"Please input only Chinese characters":"",i.choice_level5_chn_name=t.choice_level5_chn_name&&!t.chineseCheck(t.choice_level5_chn_name)?"Please input only Chinese characters":""});function b(){var h;if(!t.choice_level1_eng_name&&!t.choice_level1_chn_name){o.error("Please complete Primary choice names",{position:"top-right"});return}if(t.isSecond&&!t.choice_level2_eng_name&&!t.choice_level2_chn_name){o.error("Please complete secondary choice names",{position:"top-right"});return}if(t.isThird&&!t.choice_level3_eng_name&&!t.choice_level3_chn_name){o.error("Please complete third choice names",{position:"top-right"});return}if(t.isForth&&!t.choice_level4_eng_name&&!t.choice_level4_chn_name){o.error("Please complete fourth choice names",{position:"top-right"});return}if(t.isFifth&&!t.choice_level5_eng_name&&!t.choice_level5_chn_name){o.error("Please complete fifth choice names",{position:"top-right"});return}if(console.log(t.errors),Object.keys(t.errors).length>0){o.error("Some fields still have errors",{position:"top-right"});return}if(i.choice_level1_chn_name||i.choice_level2_chn_name||i.choice_level3_chn_name||i.choice_level4_chn_name||i.choice_level5_chn_name){o.default("Some fields still have errors",{position:"top-right"});return}const _=new FormData;_.append("company_id",((h=s.companyInProgress)==null?void 0:h.id)??""),_.append("names[0][eng_name]",t.choice_level1_eng_name),_.append("names[0][prefix]",t.choice_level1_prefix),_.append("names[0][chn_name]",t.choice_level1_chn_name),_.append("names[0][chn_prefix]",t.choice_level1_chn_prefix),_.append("names[0][choice_level]","1"),t.isSecond&&(_.append("names[1][eng_name]",t.choice_level2_eng_name),_.append("names[1][prefix]",t.choice_level2_prefix),_.append("names[1][chn_name]",t.choice_level2_chn_name),_.append("names[1][chn_prefix]",t.choice_level2_chn_prefix),_.append("names[1][choice_level]","2")),t.isThird&&(_.append("names[2][eng_name]",t.choice_level3_eng_name),_.append("names[2][prefix]",t.choice_level3_prefix),_.append("names[2][chn_name]",t.choice_level3_chn_name),_.append("names[2][chn_prefix]",t.choice_level3_chn_prefix),_.append("names[2][choice_level]","3")),t.isForth&&(_.append("names[3][eng_name]",t.choice_level4_eng_name),_.append("names[3][prefix]",t.choice_level4_prefix),_.append("names[3][chn_name]",t.choice_level4_chn_name),_.append("names[3][chn_prefix]",t.choice_level4_chn_prefix),_.append("names[3][choice_level]","4")),t.isFifth&&(_.append("names[4][eng_name]",t.choice_level5_eng_name),_.append("names[4][prefix]",t.choice_level5_prefix),_.append("names[4][chn_name]",t.choice_level5_chn_name),_.append("names[4][chn_prefix]",t.choice_level5_chn_prefix),_.append("names[4][choice_level]","5")),t.isSaving=!0,y(_)}async function y(_){try{await J.registerCompany(_),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(_,h)=>(g(),q(de,null,{main:N(()=>[mt,e("section",ht,[ft,yt,e("div",gt,[e("div",vt,[k(e("input",F(n(t).choice_level1_eng_nameAttr,{class:[{"error-field":n(t).errors.choice_level1_eng_name},"form-control"],"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":h[0]||(h[0]=d=>n(t).choice_level1_eng_name=d),type:"text",placeholder:"This text for English name"}),null,16),[[n(G)],[E,n(t).choice_level1_eng_name]]),e("small",bt,u(n(t).errors.choice_level1_eng_name),1)]),e("div",$t,[k(e("select",{"onUpdate:modelValue":h[1]||(h[1]=d=>n(t).choice_level1_prefix=d),class:"form-select"},xt,512),[[ie,n(t).choice_level1_prefix]])]),e("div",kt,[k(e("input",{class:W([{"error-field":n(t).errors.choice_level1_chn_name},"form-control"]),"onUpdate:modelValue":h[2]||(h[2]=d=>n(t).choice_level1_chn_name=d),type:"text",placeholder:"This text for Chinese name"},null,2),[[E,n(t).choice_level1_chn_name]]),e("small",Ct,u(i.choice_level1_chn_name),1)]),e("div",Et,[k(e("select",{"onUpdate:modelValue":h[3]||(h[3]=d=>n(t).choice_level1_chn_prefix=d),class:"form-select"},Ft,512),[[ie,n(t).choice_level1_chn_prefix]])])])]),n(t).isSecond?(g(),w("section",Pt,[Tt,Vt,e("div",It,[e("div",Dt,[k(e("input",{class:W([{"error-field":n(t).errors.choice_level2_eng_name},"form-control"]),"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":h[4]||(h[4]=d=>n(t).choice_level2_eng_name=d),type:"text",placeholder:"This text for English name"},null,2),[[n(G)],[E,n(t).choice_level2_eng_name]]),e("small",Lt,u(n(t).errors.choice_level2_eng_name),1)]),e("div",Ot,[k(e("select",{"onUpdate:modelValue":h[5]||(h[5]=d=>n(t).choice_level2_prefix=d),class:"form-select"},Rt,512),[[ie,n(t).choice_level2_prefix]])]),e("div",qt,[k(e("input",{class:W([{"error-field":n(t).errors.choice_level2_chn_name},"form-control"]),"onUpdate:modelValue":h[6]||(h[6]=d=>n(t).choice_level2_chn_name=d),type:"text",placeholder:"This text for Chinese name"},null,2),[[E,n(t).choice_level2_chn_name]]),e("small",jt,u(i.choice_level2_chn_name),1)]),e("div",Nt,[k(e("select",{"onUpdate:modelValue":h[7]||(h[7]=d=>n(t).choice_level2_chn_prefix=d),class:"form-select"},Mt,512),[[ie,n(t).choice_level2_chn_prefix]])])]),e("div",Ht,[e("button",{onClick:h[8]||(h[8]=d=>c("isSecond")),class:"btn btn-outline-danger me-3"},[Yt,l(" Remove ")])])])):I("",!0),n(t).isThird?(g(),w("section",Wt,[Gt,Kt,e("div",Zt,[e("div",Jt,[k(e("input",{class:W([{"error-field":n(t).errors.choice_level3_eng_name},"form-control"]),"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":h[9]||(h[9]=d=>n(t).choice_level3_eng_name=d),type:"text",placeholder:"This text for English name"},null,2),[[n(G)],[E,n(t).choice_level3_eng_name]]),e("small",Xt,u(n(t).errors.choice_level3_eng_name),1)]),e("div",Qt,[k(e("select",{"onUpdate:modelValue":h[10]||(h[10]=d=>n(t).choice_level3_prefix=d),class:"form-select"},nn,512),[[ie,n(t).choice_level3_prefix]])]),e("div",sn,[k(e("input",{class:W([{"error-field":n(t).errors.choice_level3_chn_name},"form-control"]),"onUpdate:modelValue":h[11]||(h[11]=d=>n(t).choice_level3_chn_name=d),type:"text",placeholder:"This text for Chinese name"},null,2),[[E,n(t).choice_level3_chn_name]]),e("small",on,u(i.choice_level3_chn_name),1)]),e("div",an,[k(e("select",{"onUpdate:modelValue":h[12]||(h[12]=d=>n(t).choice_level3_chn_prefix=d),class:"form-select"},rn,512),[[ie,n(t).choice_level3_chn_prefix]])])]),e("div",cn,[e("button",{onClick:h[13]||(h[13]=d=>c("isThird")),class:"btn btn-outline-danger me-3"},[dn,l(" Remove ")])])])):I("",!0),n(t).isForth?(g(),w("section",un,[_n,pn,e("div",mn,[e("div",hn,[k(e("input",{class:W([{"error-field":n(t).errors.choice_level4_eng_name},"form-control"]),"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":h[14]||(h[14]=d=>n(t).choice_level4_eng_name=d),type:"text",placeholder:"This text for English name"},null,2),[[n(G)],[E,n(t).choice_level4_eng_name]]),e("small",fn,u(n(t).errors.choice_level4_eng_name),1)]),e("div",yn,[k(e("select",{"onUpdate:modelValue":h[15]||(h[15]=d=>n(t).choice_level4_prefix=d),class:"form-select"},bn,512),[[ie,n(t).choice_level4_prefix]])]),e("div",$n,[k(e("input",{class:W([{"error-field":n(t).errors.choice_level4_chn_name},"form-control"]),"onUpdate:modelValue":h[16]||(h[16]=d=>n(t).choice_level4_chn_name=d),type:"text",placeholder:"This text for Chinese name"},null,2),[[E,n(t).choice_level4_chn_name]]),e("small",Sn,u(i.choice_level4_chn_name),1)]),e("div",wn,[k(e("select",{"onUpdate:modelValue":h[17]||(h[17]=d=>n(t).choice_level4_chn_prefix=d),class:"form-select"},kn,512),[[ie,n(t).choice_level4_chn_prefix]])])]),e("div",Cn,[e("button",{onClick:h[18]||(h[18]=d=>c("isForth")),class:"btn btn-outline-danger me-3"},[En,l(" Remove ")])])])):I("",!0),n(t).isFifth?(g(),w("section",An,[Fn,Pn,e("div",Tn,[e("div",Vn,[k(e("input",{class:W([{"error-field":n(t).errors.choice_level5_eng_name},"form-control"]),"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":h[19]||(h[19]=d=>n(t).choice_level5_eng_name=d),type:"text",placeholder:"This text for English name"},null,2),[[n(G)],[E,n(t).choice_level5_eng_name]]),e("small",In,u(n(t).errors.choice_level5_eng_name),1)]),e("div",Dn,[k(e("select",{"onUpdate:modelValue":h[20]||(h[20]=d=>n(t).choice_level5_prefix=d),class:"form-select"},Un,512),[[ie,n(t).choice_level5_prefix]])]),e("div",Bn,[k(e("input",{class:W([{"error-field":n(t).errors.choice_level5_chn_name},"form-control"]),"onUpdate:modelValue":h[21]||(h[21]=d=>n(t).choice_level5_chn_name=d),type:"text",placeholder:"This text for Chinese name"},null,2),[[E,n(t).choice_level5_chn_name]]),e("small",Rn,u(i.choice_level5_chn_name),1)]),e("div",qn,[k(e("select",{"onUpdate:modelValue":h[22]||(h[22]=d=>n(t).choice_level5_chn_prefix=d),class:"form-select"},Nn,512),[[ie,n(t).choice_level5_chn_prefix]])])]),e("div",zn,[e("button",{onClick:h[23]||(h[23]=d=>c("isFifth")),class:"btn btn-outline-danger me-3"},[Mn,l(" Remove ")])])])):I("",!0),e("div",null,[e("button",{disabled:n(t).isThird&&n(t).isForth&&n(t).isFifth,onClick:v,class:"btn btn-outline-success bg-success-subtle"},[l(" Add another name "),Yn],8,Hn)]),e("div",Wn,[n(t).isSaving?(g(),w("button",Kn,[Zn,l(" Saving, Please wait ")])):(g(),w("button",{key:0,onClick:b,class:"btn btn-primary"},[l(" Save & Continue "),Gn]))])]),info:N(()=>[Jn,Xn,Qn]),_:1}))}}),ts=e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Description"),e("span",null,"This information facilitates a faster review process by our team and remains strictly confidential.")],-1),ns={class:"section"},ss=e("div",{class:"fw-bold"},[l("Describe your product or service "),e("span",{class:"text-danger"}," * ")],-1),os=e("div",null,"Please briefly describe the product or service you are developing. Aim for a concise overview in one or two sentences. ",-1),is={class:"row g-2 mt-1"},as={class:"col-md-12"},ls={class:"text-danger"},rs={class:"float-end"},cs={class:"section"},ds=e("div",{class:"fw-bold"},[l("Nature of business "),e("span",{class:"text-danger"}," * ")],-1),us=e("div",null,"Choose the primary category that best represents business nature of your company ",-1),_s={class:"row g-2 mt-1"},ps={class:"col-md-12"},ms={class:"text-danger"},hs={class:"section"},fs=e("div",{class:"fw-bold"},"Website or social media",-1),ys={class:"row g-2 mt-1"},gs={class:"col-md-12"},vs={class:"text-danger"},bs={class:"movement-buttons my-5"},$s=e("i",{class:"bi bi-arrow-left"},null,-1),Ss=e("i",{class:"bi bi-arrow-right"},null,-1),ws={key:1,class:"btn btn-primary",type:"button",disabled:""},xs=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),ks=150,Cs=Q({__name:"Description",setup(a){const o=_e.useToast(),s=X(),t=Je();ae(()=>{t.resetForm(),t.updateFields(s.companyInProgress)}),be(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});function v(){s.switchStage("-")}const c=t.handleSubmit(async y=>{var h;if(!((h=s.companyInProgress)!=null&&h.id)){o.info("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0)return o.error("Some fields still have errors",{position:"top-right"}),!0;const _=new FormData;_.append("description",t.description),_.append("business_nature_id",t.business_nature_id),_.append("website",t.website),_.append("company_id",s.companyInProgress.id),t.isSaving=!0,i(_)});async function i(y){try{await J.companyDescription(y),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"})}}const b=he(()=>{var y;return((y=t==null?void 0:t.description)==null?void 0:y.length)??0});return(y,_)=>{const h=Z("v-select");return g(),q(de,null,{main:N(()=>[ts,e("section",ns,[ss,os,e("div",is,[e("div",as,[k(e("textarea",F(n(t).descriptiontAttr,{class:[{"error-field":n(t).errors.description},"form-control"],"onUpdate:modelValue":_[0]||(_[0]=d=>n(t).description=d),rows:"5"}),null,16),[[E,n(t).description]]),e("small",ls,u(n(t).errors.description),1),e("small",rs,u(b.value)+"/"+u(ks),1)])])]),e("section",cs,[ds,us,e("div",_s,[e("div",ps,[U(h,F(n(t).business_nature_idAttr,{class:{"error-field":n(t).errors.business_nature_id},modelValue:n(t).business_nature_id,"onUpdate:modelValue":_[1]||(_[1]=d=>n(t).business_nature_id=d),clearable:!0,options:n(s).businessNatures,reduce:d=>d.id,label:"name"}),null,16,["class","modelValue","options","reduce"]),e("small",ms,u(n(t).errors.business_nature_id),1)])])]),e("section",hs,[fs,e("div",ys,[e("div",gs,[k(e("input",F(n(t).websiteAttr,{class:[{"error-field":n(t).errors.website},"form-control"],"onUpdate:modelValue":_[2]||(_[2]=d=>n(t).website=d),type:"text"}),null,16),[[E,n(t).website]]),e("small",vs,u(n(t).errors.website),1)])])]),e("div",bs,[e("button",{onClick:v,class:"btn btn-outline-info me-3"},[$s,l(" Back ")]),n(t).isSaving?(g(),w("button",ws,[xs,l(" Saving, Please wait ")])):(g(),w("button",{key:0,onClick:_[3]||(_[3]=(...d)=>n(c)&&n(c)(...d)),class:"btn btn-primary"},[l(" Save & Continue "),Ss]))])]),info:N(()=>[]),_:1})}}}),Es=Ke("address",()=>{const a={flat:xe().required(""),building:xe().required(""),street:xe().required(""),city:xe().required(""),state:xe().required(""),postal_code:xe().required(""),country:xe().required("")},{errors:o,handleSubmit:s,defineField:t,setFieldValue:v}=ut({validationSchema:_t(a),initialValues:{flat:"Rooms 502-503, 5th Floor",building:"Wanchai Commercial Centre",street:"194-204 Johnston Road",postal_code:"",country:"Hong Kong",state:"Wanchai",city:"Wanchai"}}),[c]=t("flat"),[i]=t("building"),[b]=t("street"),[y]=t("city"),[_]=t("state"),[h]=t("postal_code"),[d]=t("country");return{flat:c,street:b,city:y,state:_,postal_code:h,country:d,isSaving:!1,building:i,errors:o,handleSubmit:s,setFieldValue:v}}),As=e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Registered Address")],-1),Fs={class:"section"},Ps={class:"row g-3 mt-1"},Ts={class:"col-12"},Vs=e("label",{class:"form-label"},[l("Floor／Block "),e("i",{class:"bi bi-lock-fill"})],-1),Is={class:"text-danger"},Ds={class:"col-12"},Ls=e("label",{class:"form-label"},[l(" Building"),e("i",{class:"bi bi-lock-fill"})],-1),Os={class:"text-danger"},Us={class:"col-12"},Bs=e("label",{class:"form-label"},[l(" Street／Estate／Lot／Village"),e("i",{class:"bi bi-lock-fill"})],-1),Rs={class:"text-danger"},qs={class:"col-12"},js=e("label",{class:"form-label"},[l(" District／City／ Province／State／ Postal Code "),e("i",{class:"bi bi-lock-fill"})],-1),Ns={class:"text-danger"},zs={class:"col-md-12"},Ms=e("label",{class:"form-label"},[l(" Country／Region "),e("i",{class:"bi bi-lock-fill"})],-1),Hs={class:"text-danger"},Ys={class:"movement-buttons my-5"},Ws=e("i",{class:"bi bi-arrow-left"},null,-1),Gs=e("i",{class:"bi bi-arrow-right"},null,-1),Ks={key:1,class:"btn btn-primary",type:"button",disabled:""},Zs=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),Js=e("section",{class:"section"},[e("div",{class:"fw-bold"}," What is registered office address? "),e("div",null," A registered office address is the official legal address of a company where formal communications and notices are sent. ")],-1),Xs=e("section",{class:"section"},[e("div",{class:"fw-bold"}," Why can’t I change the registered office address? "),e("div",null," The registered office address provided is part of our initial services. You can update it to a new address after the incorporation process is completed. ")],-1),Qs=Q({__name:"Address",setup(a){const o=_e.useToast(),s=X(),t=Es();function v(){s.switchStage("-")}function c(){t.isSaving=!0,i()}t.handleSubmit(async b=>{var _;if(!((_=s.companyInProgress)!=null&&_.id)){o.default("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0)return o.default("Some fields still have errors",{position:"top-right"}),!0;const y=new FormData;y.append("flat",b.flat),y.append("building",b.building),y.append("street",b.street),y.append("city",b.city),y.append("state",b.state),y.append("postal_code",b.postal_code),y.append("country",b.country),y.append("company_id",s.companyInProgress.id),t.isSaving=!0});async function i(){try{const b=new FormData;b.append("company_id",s.companyInProgress.id),await J.companyAddress(b),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(b,y)=>{const _=Z("v-select");return g(),q(de,null,{main:N(()=>[As,e("section",Fs,[e("div",Ps,[e("div",Ts,[Vs,k(e("input",{disabled:"","onUpdate:modelValue":y[0]||(y[0]=h=>n(t).flat=h),class:"form-control",type:"text",placeholder:"Flat／Floor／Block"},null,512),[[E,n(t).flat]]),e("small",Is,u(n(t).errors.flat),1)]),e("div",Ds,[Ls,k(e("input",{disabled:"","onUpdate:modelValue":y[1]||(y[1]=h=>n(t).building=h),class:"form-control",type:"text",placeholder:"Street number"},null,512),[[E,n(t).building]]),e("small",Os,u(n(t).errors.building),1)]),e("div",Us,[Bs,k(e("input",{disabled:"","onUpdate:modelValue":y[2]||(y[2]=h=>n(t).street=h),class:"form-control",type:"text",placeholder:"City"},null,512),[[E,n(t).street]]),e("small",Rs,u(n(t).errors.street),1)]),e("div",qs,[js,k(e("input",{disabled:"","onUpdate:modelValue":y[3]||(y[3]=h=>n(t).state=h),class:"form-control",type:"text",placeholder:"State"},null,512),[[E,n(t).state]]),e("small",Ns,u(n(t).errors.state),1)]),e("div",zs,[Ms,U(_,{disabled:!0,placeholder:"select country..",modelValue:n(t).country,"onUpdate:modelValue":y[4]||(y[4]=h=>n(t).country=h),clearable:!1,options:n(s).countries},null,8,["modelValue","options"]),e("small",Hs,u(n(t).errors.country),1)])])]),e("div",Ys,[e("button",{onClick:v,class:"btn btn-outline-info me-3"},[Ws,l(" Back ")]),n(t).isSaving?(g(),w("button",Ks,[Zs,l(" Saving, Please wait ")])):(g(),w("button",{key:0,onClick:c,class:"btn btn-primary"},[l(" Save & Continue "),Gs]))])]),info:N(()=>[Js,Xs]),_:1})}}}),M=a=>(fe("data-v-06904ff5"),a=a(),ye(),a),eo={class:"section"},to=M(()=>e("div",{class:"fw-bold fs-5"},"About your Company ",-1)),no=M(()=>e("div",{class:"fw-bolder"},"Your company name",-1)),so=M(()=>e("span",null,"Enter your legal company name",-1)),oo={class:"row mt-1 g-2"},io={class:"col-12"},ao={class:"text-danger"},lo={class:"col-12"},ro={class:"text-danger"},co={class:"row g-2 section"},uo={class:"col-md-6"},_o=M(()=>e("label",{class:"form-label fw-bold"},[l("Date of Incorporation "),e("span",{class:"text-danger"}," * ")],-1)),po={class:"text-danger"},mo={class:"col-md-6"},ho=M(()=>e("label",{class:"form-label fw-bold"},[l("Company Registration Number "),e("span",{class:"text-danger"}," * ")],-1)),fo={class:"text-danger"},yo={class:"col-md-12"},go=M(()=>e("label",{class:"form-label"},[l("Country Registered "),e("small",{class:"text-danger"},"*")],-1)),vo={class:"text-danger"},bo={class:"col-12"},$o=M(()=>e("label",{class:"form-label fw-bold"},[l("Business nature "),e("span",{class:"text-danger"}," * ")],-1)),So={class:"text-danger"},wo={class:"section"},xo=M(()=>e("div",{class:"fw-bolder"},"Address ",-1)),ko={class:"row g-3 mt-1"},Co={class:"col-12"},Eo=M(()=>e("label",{class:"form-label"},[l("Floor／Block "),e("small",{class:"text-danger"},"*")],-1)),Ao={class:"text-danger"},Fo={class:"col-12"},Po=M(()=>e("label",{class:"form-label"},[l(" Building "),e("small",{class:"text-danger"},"*")],-1)),To={class:"text-danger"},Vo={class:"col-12"},Io=M(()=>e("label",{class:"form-label"},[l(" Street／Estate／Lot／Village "),e("small",{class:"text-danger"},"*")],-1)),Do={class:"text-danger"},Lo={class:"col-12"},Oo=M(()=>e("label",{class:"form-label"},[l(" District／City／ Province／State／ Postal Code "),e("small",{class:"text-danger"},"*")],-1)),Uo={class:"text-danger"},Bo={class:"col-md-12"},Ro=M(()=>e("label",{class:"form-label"},[l("Country／Region "),e("small",{class:"text-danger"},"*")],-1)),qo={class:"text-danger"},jo={class:"row g-2 section"},No={class:"col-md-12"},zo=M(()=>e("label",{class:"fw-bolder"},[l("Authorised Person "),e("span",{class:"text-danger"}," * ")],-1)),Mo={class:"row g-2"},Ho={class:"col-md-6"},Yo={class:"text-danger"},Wo={class:"col-md-6"},Go={class:"text-danger"},Ko={class:"col-md-12"},Zo=M(()=>e("label",{class:"fw-bolder"},[l("Phone number "),e("span",{class:"text-danger"}," * ")],-1)),Jo={class:"text-danger"},Xo={class:"col-md-12"},Qo=M(()=>e("label",{class:"fw-bolder"},[l("Email "),e("span",{class:"text-danger"}," * ")],-1)),ei={class:"text-danger"},ti={class:"col-md-12"},ni=M(()=>e("label",{class:"fw-bolder"},[l("Confirm email "),e("span",{class:"text-danger"}," * ")],-1)),si={class:"text-danger"},oi={key:0,class:"text-danger"},ii={class:"movement-buttons mt-5 mb-4"},ai=M(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),li=M(()=>e("i",{class:"bi bi-check2"},null,-1)),ri={key:1,class:"btn btn-primary",type:"button",disabled:""},ci=M(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),di=Q({__name:"Founders_corporate",setup(a){const o=_e.useToast(),s=X(),t=Xe();ae(()=>{t.updateFields(s.companyInProgress)}),be(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});const v=z(!1);De(()=>{t.email&&t.confirm_email&&(t.email!==t.confirm_email&&!t.errors.confirm_email?v.value=!0:v.value=!1)});function c(){t.company_name="",t.chn_company_name="",t.date_incorporated=new Date,t.flat="",t.building="",t.street="",t.state="",t.country="",t.registeration_no="",t.is_founder=!1,t.country_registered="",t.business_nature_id="",t.phone="",t.email="",t.confirm_email="",t.first_name="",t.last_name="",s.checkedEntityCapacity=[]}const i={dropDown:{showDialCodeInSelection:!1,showFlags:!0,showSearchBox:!0,showDialCodeInList:!0},input:{showDialCode:!0,placeholder:"Enter phone",styleClasses:"phone-input-profile",maxlength:12}};De(()=>{t.chn_company_name==""&&(t.errors.chn_company_name="",delete t.errors.chn_company_name)});function b(){c(),t.clearLocalStorage(),s.isShowingFoundersForm=!1,s.idToEdit=""}const y=t.handleSubmit(h=>{var p;if(console.log("validation passed.."),!((p=s.companyInProgress)!=null&&p.id)){o.error("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(t.phone.length<12){o.error("Error on the phone input <br> must be 12 digits and above",{position:"top-right"});return}if(Object.keys(t.errors).length>0){console.log(t.errors),o.error("Some fields still have errors",{position:"top-right"});return}if(!t.first_name||!t.last_name||!t.phone||!t.email||!t.date_incorporated||!t.company_name||!t.business_nature_id||!t.country_registered||!t.registeration_no){o.error("Some fields still have errors",{position:"top-right"});return}if(!ue.isEmail(t.email)){o.default("Invalid email format",{position:"top-right"});return}if(t.email!==t.confirm_email){o.default("Emails do not match!",{position:"top-right"});return}if(s.checkedEntityCapacity.length==0){o.default("Select at least a Capacity!",{position:"top-right"});return}const d=new FormData;d.append("company_id",s.companyInProgress.id),s.idToEdit&&d.append("company_entity_id",s.idToEdit),d.append("entity_capacity_id",JSON.stringify(s.checkedEntityCapacity)),d.append("entity_type_id","2"),d.append("first_name",t.first_name),d.append("last_name",t.last_name),d.append("email",t.email),d.append("phone",t.phone),d.append("company_name",t.company_name),d.append("chn_company_name",t.chn_company_name),d.append("date_incorporated",t.date_incorporated),d.append("flat",t.flat),d.append("building",t.building),d.append("street",t.street),d.append("state",t.state),d.append("country",t.country),d.append("registeration_no",t.registeration_no),d.append("country_registered",t.country_registered),d.append("business_nature_id",t.business_nature_id),d.append("is_founder",t.is_founder?"1":"0"),t.isSaving=!0,_(d)});async function _(h){try{await J.companyEntity(h),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.getCompanyInProgress("founder"),s.isShowingFoundersForm=!1,t.clearLocalStorage(),t.clearLocalStorage()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(h,d)=>{const p=Z("VueDatePicker"),B=Z("v-select"),P=Z("vue-tel-input");return g(),w("div",null,[e("section",eo,[to,no,so,e("div",oo,[e("div",io,[k(e("input",F(n(t).company_nameAttr,{class:[{"error-field":n(t).errors.company_name},"form-control"],"data-maska":"","data-maska-tokens":"A:[A-Za-z]:multiple|a:[A-Za-z]:multiple 0:[0-9]","onUpdate:modelValue":d[0]||(d[0]=r=>n(t).company_name=r),type:"text",placeholder:"English Name.."}),null,16),[[n(G)],[E,n(t).company_name]]),e("small",ao,u(n(t).errors.company_name),1)]),e("div",lo,[k(e("input",F(n(t).chn_company_nameAttr,{class:[{"error-field":n(t).errors.chn_company_name},"form-control"],"onUpdate:modelValue":d[1]||(d[1]=r=>n(t).chn_company_name=r),type:"text",placeholder:"Chinese Name.."}),null,16),[[E,n(t).chn_company_name]]),e("small",ro,u(n(t).errors.chn_company_name),1)])])]),e("section",co,[e("div",uo,[_o,U(p,F(n(t).date_incorporatedAttr,{format:n(ue).dateDisplay,"hide-input-icon":"",clearable:!1,"enable-time-picker":!1,"auto-apply":"",modelValue:n(t).date_incorporated,"onUpdate:modelValue":d[2]||(d[2]=r=>n(t).date_incorporated=r)}),null,16,["format","modelValue"]),e("small",po,u(n(t).errors.date_incorporated),1)]),e("div",mo,[ho,k(e("input",F(n(t).registeration_noAttr,{class:[{"error-field":n(t).errors.registeration_no},"form-control"],"onUpdate:modelValue":d[3]||(d[3]=r=>n(t).registeration_no=r),type:"text",placeholder:"Registration no"}),null,16),[[E,n(t).registeration_no]]),e("small",fo,u(n(t).errors.registeration_no),1)]),e("div",yo,[go,U(B,F(n(t).country_registeredAttr,{class:{"error-field":n(t).errors.country_registered},placeholder:"select country..",modelValue:n(t).country_registered,"onUpdate:modelValue":d[4]||(d[4]=r=>n(t).country_registered=r),clearable:!1,options:n(s).countries}),null,16,["class","modelValue","options"]),e("small",vo,u(n(t).errors.country_registered),1)]),e("div",bo,[$o,U(B,F(n(t).business_nature_idAttr,{class:{"error-field":n(t).errors.business_nature_id},modelValue:n(t).business_nature_id,"onUpdate:modelValue":d[5]||(d[5]=r=>n(t).business_nature_id=r),clearable:!0,placeholder:"select business nature",options:n(s).businessNatures,reduce:r=>r.id,label:"name"}),null,16,["class","modelValue","options","reduce"]),e("small",So,u(n(t).errors.business_nature_id),1)])]),e("section",wo,[xo,e("div",ko,[e("div",Co,[Eo,k(e("input",F(n(t).flatAttr,{class:[{"error-field":n(t).errors.flat},"form-control"],"onUpdate:modelValue":d[6]||(d[6]=r=>n(t).flat=r),type:"text",placeholder:"Flat／Floor／Block"}),null,16),[[E,n(t).flat]]),e("small",Ao,u(n(t).errors.flat),1)]),e("div",Fo,[Po,k(e("input",F(n(t).buildingAttr,{class:[{"error-field":n(t).errors.building},"form-control"],"onUpdate:modelValue":d[7]||(d[7]=r=>n(t).building=r),type:"text",placeholder:"building number"}),null,16),[[E,n(t).building]]),e("small",To,u(n(t).errors.building),1)]),e("div",Vo,[Io,k(e("input",F(n(t).streetAttr,{class:[{"error-field":n(t).errors.street},"form-control"],"onUpdate:modelValue":d[8]||(d[8]=r=>n(t).street=r),type:"text",placeholder:"Street"}),null,16),[[E,n(t).street]]),e("small",Do,u(n(t).errors.street),1)]),e("div",Lo,[Oo,k(e("input",F(n(t).stateAttr,{class:[{"error-field":n(t).errors.state},"form-control"],"onUpdate:modelValue":d[9]||(d[9]=r=>n(t).state=r),type:"text",placeholder:"State/City"}),null,16),[[E,n(t).state]]),e("small",Uo,u(n(t).errors.state),1)]),e("div",Bo,[Ro,U(B,F(n(t).countryAttr,{class:{"error-field":n(t).errors.country},placeholder:"select country..",modelValue:n(t).country,"onUpdate:modelValue":d[10]||(d[10]=r=>n(t).country=r),clearable:!1,options:n(s).countries}),null,16,["class","modelValue","options"]),e("small",qo,u(n(t).errors.country),1)])])]),e("section",jo,[e("div",No,[zo,e("div",Mo,[e("div",Ho,[k(e("input",F(n(t).first_nameAttr,{class:[{"error-field":n(t).errors.first_name},"form-control"],"data-maska-tokens":"A:[A-Za-z]:multiple","onUpdate:modelValue":d[11]||(d[11]=r=>n(t).first_name=r),type:"text",placeholder:"first name.."}),null,16),[[n(G)],[E,n(t).first_name]]),e("small",Yo,u(n(t).errors.first_name),1)]),e("div",Wo,[k(e("input",F(n(t).last_nameAttr,{class:[{"error-field":n(t).errors.last_name},"form-control"],"data-maska-tokens":"A:[A-Za-z]:multiple","onUpdate:modelValue":d[12]||(d[12]=r=>n(t).last_name=r),type:"text",placeholder:"last name.."}),null,16),[[n(G)],[E,n(t).last_name]]),e("small",Go,u(n(t).errors.last_name),1)])])]),e("div",Ko,[Zo,U(P,F(n(t).phoneAttr,{inputOptions:i.input,dropdownOptions:i.dropDown,autoFormat:!0,modelValue:n(t).phone,"onUpdate:modelValue":d[13]||(d[13]=r=>n(t).phone=r)}),null,16,["inputOptions","dropdownOptions","modelValue"]),e("small",Jo,u(n(t).errors.phone),1)]),e("div",Xo,[Qo,k(e("input",F(n(t).emailAttr,{class:[{"error-field":n(t).errors.email},"form-control"],"onUpdate:modelValue":d[14]||(d[14]=r=>n(t).email=r),type:"text",placeholder:"email"}),null,16),[[E,n(t).email]]),e("small",ei,u(n(t).errors.email),1)]),e("div",ti,[ni,k(e("input",F(n(t).confirm_emailAttr,{class:[{"error-field":n(t).errors.confirm_email},"form-control"],"onUpdate:modelValue":d[15]||(d[15]=r=>n(t).confirm_email=r),type:"text",placeholder:"confirm email"}),null,16),[[E,n(t).confirm_email]]),e("small",si,u(n(t).errors.confirm_email),1),v.value?(g(),w("small",oi,"emails do no match")):I("",!0)])]),e("div",ii,[e("button",{onClick:b,class:"btn btn-outline-info me-3"},[ai,l(" Close ")]),n(t).isSaving?(g(),w("button",ri,[ci,l(" Saving, Please wait ")])):(g(),w("button",{key:0,onClick:d[16]||(d[16]=(...r)=>n(y)&&n(y)(...r)),class:"btn btn-primary"},[l(" Save and Continue "),li]))])])}}}),ui=ge(di,[["__scopeId","data-v-06904ff5"]]),L=a=>(fe("data-v-e312bd4d"),a=a(),ye(),a),_i={class:"section"},pi=L(()=>e("div",{class:"fw-bold fs-5"},"About you ",-1)),mi=L(()=>e("div",{class:"fw-bolder"},[l("Your name in English "),e("small",{class:"text-danger"},"*")],-1)),hi=L(()=>e("span",null,"Enter your first and last name as they appear on a government ID",-1)),fi={class:"row mt-1 g-2"},yi={class:"col-12"},gi={class:"text-danger"},vi={class:"col-12"},bi={class:"text-danger"},$i={class:"col-12"},Si={class:"form-check"},wi=L(()=>e("label",{class:"form-check-label",for:"chinese_name"},"Do you have a Chinese Name?",-1)),xi={key:0,class:"section"},ki=L(()=>e("div",{class:"fw-bolder"},[l("Your name in Chinese "),e("small",{class:"text-danger"},"*")],-1)),Ci=L(()=>e("span",null,"Enter your first and last name as they appear on a government ID",-1)),Ei={class:"row mt-1 g-2"},Ai={class:"col-12"},Fi={class:"text-danger"},Pi={class:"col-12"},Ti={class:"text-danger"},Vi={class:"row g-2 section"},Ii={class:"col-md-6"},Di=L(()=>e("label",{class:"form-label fw-bold"},[l("Date of Birth "),e("small",{class:"text-danger"},"*")],-1)),Li={class:"text-danger"},Oi={class:"text-danger"},Ui={class:"col-md-6"},Bi=L(()=>e("label",{class:"form-label fw-bold"},[l("Nationality "),e("small",{class:"text-danger"},"*")],-1)),Ri={class:"text-danger"},qi={class:"section"},ji=L(()=>e("div",{class:"fw-bolder"},[l("Your residential address "),e("small",{class:"text-danger"},"*")],-1)),Ni={class:"row g-3 mt-1"},zi={class:"col-12"},Mi=L(()=>e("label",{class:"form-label"},[l("Flat／Floor／Block "),e("small",{class:"text-danger"},"*")],-1)),Hi={class:"text-danger"},Yi={class:"col-12"},Wi=L(()=>e("label",{class:"form-label"},[l("Building "),e("small",{class:"text-danger"},"*")],-1)),Gi={class:"text-danger"},Ki={class:"col-12"},Zi=L(()=>e("label",{class:"form-label"},[l(" Street／Estate／Lot／Village "),e("small",{class:"text-danger"},"*")],-1)),Ji={class:"text-danger"},Xi={class:"col-12"},Qi=L(()=>e("label",{class:"form-label"},[l("District／City／ Province／State／ Postal Code "),e("small",{class:"text-danger"},"*")],-1)),ea={class:"text-danger"},ta={class:"col-md-12"},na=L(()=>e("label",{class:"form-label"},[l(" Country／Region "),e("small",{class:"text-danger"},"*")],-1)),sa={class:"text-danger"},oa={class:"section"},ia=L(()=>e("div",{class:"fw-bolder"},"Your corresponding address ",-1)),aa={class:"form-check"},la=L(()=>e("label",{class:"form-check-label",for:"same_address"},"Same as residential address",-1)),ra={key:0,class:"row g-2 mt-1"},ca={class:"col-12"},da=L(()=>e("label",{class:"form-label"},[l(" Flat／Floor／Block "),e("small",{class:"text-danger"},"*")],-1)),ua={class:"text-danger"},_a={class:"col-12"},pa=L(()=>e("label",{class:"form-label"},[l("Building "),e("small",{class:"text-danger"},"*")],-1)),ma={class:"text-danger"},ha={class:"col-12"},fa=L(()=>e("label",{class:"form-label"},[l(" Street／Estate／Lot／Village "),e("small",{class:"text-danger"},"*")],-1)),ya={class:"text-danger"},ga={class:"col-12"},va=L(()=>e("label",{class:"form-label"},[l("District／City／ Province／State／ Postal Code "),e("small",{class:"text-danger"},"*")],-1)),ba={class:"text-danger"},$a={class:"col-md-12"},Sa=L(()=>e("label",{class:"form-label"},[l("Country／Region "),e("small",{class:"text-danger"},"*")],-1)),wa={class:"text-danger"},xa={class:"row g-2 section"},ka={class:"col-md-12"},Ca=L(()=>e("label",{class:"fw-bolder"},[l("ID type "),e("small",{class:"text-danger"},"*")],-1)),Ea={class:"text-danger"},Aa={key:0,class:"col-md-9"},Fa=L(()=>e("label",{class:"fw-bolder"},[l("HKID No. "),e("small",{class:"text-danger"},"*")],-1)),Pa={class:"text-danger"},Ta={key:1,class:"col-md-3",style:{"margin-top":"30px"}},Va={class:"text-danger"},Ia={key:2,class:"col-md-12"},Da=L(()=>e("label",{class:"fw-bolder"},[l("Passport No. "),e("small",{class:"text-danger"},"*")],-1)),La={class:"text-danger"},Oa={key:3,class:"col-md-12"},Ua=L(()=>e("label",{class:"fw-bolder"},[l("Passport issuing Country/Region "),e("small",{class:"text-danger"},"*")],-1)),Ba={class:"text-danger"},Ra={class:"col-md-12"},qa=L(()=>e("label",{class:"fw-bolder"},[l("Phone number "),e("small",{class:"text-danger"},"*")],-1)),ja={class:"text-danger"},Na={class:"col-md-12"},za=L(()=>e("label",{class:"fw-bolder"},[l("Email "),e("small",{class:"text-danger"},"*")],-1)),Ma={class:"text-danger"},Ha={class:"col-md-12"},Ya=L(()=>e("label",{class:"fw-bolder"},[l("Confirm email "),e("span",{class:"text-danger"}," * ")],-1)),Wa={class:"text-danger"},Ga={key:0,class:"text-danger"},Ka={class:"col-md-12"},Za=L(()=>e("label",{class:"form-labe fw-bolder"},[l("Occupation/Employment "),e("span",{class:"text-danger"}," * ")],-1)),Ja={class:"text-danger"},Xa={class:"movement-buttons mt-5 mb-4"},Qa=L(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),el=L(()=>e("i",{class:"bi bi-check2"},null,-1)),tl={key:1,class:"btn btn-primary",type:"button",disabled:""},nl=L(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),sl=Q({__name:"Founders_individual",setup(a){const o=_e.useToast(),s=X(),t=Qe();ae(()=>{t.updateFields(s.companyInProgress),console.log(t.identity_type_id,"idtype")}),be(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});const v={dropDown:{showDialCodeInSelection:!1,showFlags:!0,showSearchBox:!0,showDialCodeInList:!0},input:{showDialCode:!0,placeholder:"Enter phone",styleClasses:"phone-input-profile",maxlength:15}};function c(){t.flat="",t.building="",t.street="",t.state="",t.postal_code="",t.country="Hong Kong",t.flat2="",t.building2="",t.street2="",t.state2="",t.postal_code2="",t.country2="Hong Kong",t.first_name="",t.last_name="",t.chn_first_name="",t.chn_last_name="",t.dob=new Date,t.nationality="Hong Kong",t.phone="",t.email="",t.confirm_email="",t.occupation="",t.is_founder=!1,t.identity_type_id="1",t.identity_no="",t.passport_no="",t.issuing_country="Hong Kong",s.checkedEntityCapacity=[]}const i=z(""),b=z(!1);be(()=>t.dob,()=>{ue.ageInYears(new Date(t.dob))<18?i.value="Must not be less that 18years old":i.value=""}),De(()=>{t.email&&t.confirm_email&&(t.email!==t.confirm_email&&!t.errors.confirm_email?b.value=!0:b.value=!1)});function y(){c(),t.clearLocalStorage(),s.isShowingFoundersForm=!1,s.idToEdit=""}const _=t.handleSubmit(d=>{var B;if(!((B=s.companyInProgress)!=null&&B.id)){o.error("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0){o.error("Some fields still have errors",{position:"top-right"});return}if(t.phone.length<14){o.error("Phone number is not complete",{position:"top-right"});return}if(!ue.isEmail(t.email)){o.error("Invalid email format",{position:"top-right"});return}if(t.email!==t.confirm_email){o.error("Emails do not macth!",{position:"top-right"});return}if(t.identity_type_id=="1"&&(!t.passport_no||!t.issuing_country)){o.error("Please complete Passport fields",{position:"top-right"});return}if(t.identity_type_id=="2"){if(!t.identity_no){o.error("Please complete ID field",{position:"top-right"});return}if(!t.identity_no_suffix){o.error("Please complete ID field",{position:"top-right"});return}}if(ue.ageInYears(new Date(t.dob))<18){o.error("Must not be less that 18years old",{position:"top-right"});return}if(s.checkedEntityCapacity.length==0){o.error("Select at least a Capacity!",{position:"top-right"});return}const p=new FormData;p.append("company_id",s.companyInProgress.id),s.idToEdit&&(p.append("company_entity_id",s.idToEdit),p.append("isEdit","1")),p.append("entity_type_id","1"),p.append("entity_capacity_id",JSON.stringify(s.checkedEntityCapacity)),p.append("first_name",t.first_name),p.append("last_name",t.last_name),t.hasChineseName&&(p.append("chn_first_name",t.chn_first_name),p.append("chn_last_name",t.chn_last_name)),t.dob&&p.append("dob",t.dob),p.append("nationality",t.nationality),p.append("phone",t.phone),p.append("email",t.email),p.append("occupation",t.occupation),p.append("identity_type_id",t.identity_type_id),p.append("identity_no",t.identity_no),p.append("identity_no_suffix",t.identity_no_suffix||""),p.append("passport_no",t.passport_no),p.append("issuing_country",t.issuing_country),p.append("is_founder",t.is_founder?"1":"0"),p.append("addresses[0][flat]",t.flat),p.append("addresses[0][building]",t.building),p.append("addresses[0][street]",t.street),p.append("addresses[0][state]",t.state),p.append("addresses[0][country]",t.country),p.append("addresses[0][is_corAddress]",t.correspondingAddressIsSame?"1":"0"),t.correspondingAddressIsSame||(p.append("addresses[1][flat]",t.flat2),p.append("addresses[1][building]",t.building2),p.append("addresses[1][street]",t.street2),p.append("addresses[1][state]",t.state2),p.append("addresses[1][country]",t.country2)),t.isSaving=!0,h(p)});async function h(d){try{await J.companyEntity(d).then(async p=>{o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.getCompanyInProgress("founder"),s.isShowingFoundersForm=!1,t.clearLocalStorage()})}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(d,p)=>{const B=Z("VueDatePicker"),P=Z("v-select"),r=Z("vue-tel-input");return g(),w("div",null,[e("section",_i,[pi,mi,hi,e("div",fi,[e("div",yi,[k(e("input",F(n(t).first_nameAttr,{class:[{"error-field":n(t).errors.first_name},"form-control"],"data-maska":"A a","data-maska-tokens":"A:[A-Za-z]:multiple|a:[A-Za-z]:multiple","onUpdate:modelValue":p[0]||(p[0]=m=>n(t).first_name=m),type:"text",placeholder:"First Name.."}),null,16),[[n(G)],[E,n(t).first_name]]),e("small",gi,u(n(t).errors.first_name),1)]),e("div",vi,[k(e("input",F(n(t).last_nameAttr,{class:[{"error-field":n(t).errors.last_name},"form-control"],"data-maska":"A a","data-maska-tokens":"A:[A-Za-z]:multiple|a:[A-Za-z]:multiple","onUpdate:modelValue":p[1]||(p[1]=m=>n(t).last_name=m),type:"text",placeholder:"Last Name.."}),null,16),[[n(G)],[E,n(t).last_name]]),e("small",bi,u(n(t).errors.last_name),1)]),e("div",$i,[e("div",Si,[k(e("input",{class:"form-check-input exemption","onUpdate:modelValue":p[2]||(p[2]=m=>n(t).hasChineseName=m),type:"checkbox",id:"chinese_name"},null,512),[[je,n(t).hasChineseName]]),wi])])])]),n(t).hasChineseName?(g(),w("section",xi,[ki,Ci,e("div",Ei,[e("div",Ai,[k(e("input",F(n(t).chn_first_nameAttr,{class:[{"error-field":n(t).errors.chn_first_name},"form-control"],"onUpdate:modelValue":p[3]||(p[3]=m=>n(t).chn_first_name=m),type:"text",placeholder:"First Name.."}),null,16),[[E,n(t).chn_first_name]]),e("small",Fi,u(n(t).errors.chn_first_name),1)]),e("div",Pi,[k(e("input",F(n(t).chn_last_nameAttr,{class:[{"error-field":n(t).errors.chn_last_name},"form-control"],"onUpdate:modelValue":p[4]||(p[4]=m=>n(t).chn_last_name=m),type:"text",placeholder:"Last Name.."}),null,16),[[E,n(t).chn_last_name]]),e("small",Ti,u(n(t).errors.chn_last_name),1)])])])):I("",!0),e("section",Vi,[e("div",Ii,[Di,U(B,F({"start-date":n(ue).yearsAgo(18)},n(t).dobAttr,{format:n(ue).dateDisplay,"input-class-name":"dob-settings-input","hide-input-icon":"",clearable:!1,"enable-time-picker":!1,"auto-apply":"",modelValue:n(t).dob,"onUpdate:modelValue":p[5]||(p[5]=m=>n(t).dob=m),placeholder:"select date of birth"}),null,16,["start-date","format","modelValue"]),e("small",Li,u(n(t).errors.dob),1),e("small",Oi,u(i.value),1)]),e("div",Ui,[Bi,U(P,F(n(t).nationalityAttr,{placeholder:"select country..",modelValue:n(t).nationality,"onUpdate:modelValue":p[6]||(p[6]=m=>n(t).nationality=m),clearable:!1,options:n(s).countries}),null,16,["modelValue","options"]),e("small",Ri,u(n(t).errors.nationality),1)])]),e("section",qi,[ji,e("div",Ni,[e("div",zi,[Mi,k(e("input",F(n(t).flatAttr,{class:[{"error-field":n(t).errors.flat},"form-control"],"onUpdate:modelValue":p[7]||(p[7]=m=>n(t).flat=m),type:"text",placeholder:"Flat／Floor／Block"}),null,16),[[E,n(t).flat]]),e("small",Hi,u(n(t).errors.flat),1)]),e("div",Yi,[Wi,k(e("input",F(n(t).buildingAttr,{class:[{"error-field":n(t).errors.building},"form-control"],"onUpdate:modelValue":p[8]||(p[8]=m=>n(t).building=m),type:"text",placeholder:"Street number"}),null,16),[[E,n(t).building]]),e("small",Gi,u(n(t).errors.building),1)]),e("div",Ki,[Zi,k(e("input",F(n(t).streetAttr,{class:[{"error-field":n(t).errors.street},"form-control"],"onUpdate:modelValue":p[9]||(p[9]=m=>n(t).street=m),type:"text",placeholder:"Street"}),null,16),[[E,n(t).street]]),e("small",Ji,u(n(t).errors.street),1)]),e("div",Xi,[Qi,k(e("input",F(n(t).stateAttr,{class:[{"error-field":n(t).errors.state},"form-control"],"onUpdate:modelValue":p[10]||(p[10]=m=>n(t).state=m),type:"text",placeholder:"State"}),null,16),[[E,n(t).state]]),e("small",ea,u(n(t).errors.state),1)]),e("div",ta,[na,U(P,F(n(t).countryAttr,{class:{"error-field":n(t).errors.country},placeholder:"select country..",modelValue:n(t).country,"onUpdate:modelValue":p[11]||(p[11]=m=>n(t).country=m),clearable:!1,options:n(s).countries}),null,16,["class","modelValue","options"]),e("small",sa,u(n(t).errors.country),1)])])]),e("section",oa,[ia,e("span",null,[e("div",aa,[k(e("input",{class:"form-check-input exemption",type:"checkbox",id:"same_address","onUpdate:modelValue":p[12]||(p[12]=m=>n(t).correspondingAddressIsSame=m)},null,512),[[je,n(t).correspondingAddressIsSame]]),la])]),n(t).correspondingAddressIsSame?I("",!0):(g(),w("div",ra,[e("div",ca,[da,k(e("input",F(n(t).flat2Attr,{class:[{"error-field":n(t).errors.flat2},"form-control"],"onUpdate:modelValue":p[13]||(p[13]=m=>n(t).flat2=m),type:"text",placeholder:"Flat／Floor／Block"}),null,16),[[E,n(t).flat2]]),e("small",ua,u(n(t).errors.flat2),1)]),e("div",_a,[pa,k(e("input",F(n(t).building2Attr,{class:[{"error-field":n(t).errors.building2},"form-control"],"onUpdate:modelValue":p[14]||(p[14]=m=>n(t).building2=m),type:"text",placeholder:"Street number"}),null,16),[[E,n(t).building2]]),e("small",ma,u(n(t).errors.building2),1)]),e("div",ha,[fa,k(e("input",F(n(t).street2Attr,{class:[{"error-field":n(t).errors.street2},"form-control"],"onUpdate:modelValue":p[15]||(p[15]=m=>n(t).street2=m),type:"text",placeholder:"Street"}),null,16),[[E,n(t).street2]]),e("small",ya,u(n(t).errors.street2),1)]),e("div",ga,[va,k(e("input",F(n(t).state2Attr,{class:[{"error-field":n(t).errors.state2},"form-control"],"onUpdate:modelValue":p[16]||(p[16]=m=>n(t).state2=m),type:"text",placeholder:"State"}),null,16),[[E,n(t).state2]]),e("small",ba,u(n(t).errors.state2),1)]),e("div",$a,[Sa,U(P,F(n(t).country2Attr,{class:{"error-field":n(t).errors.country2},placeholder:"select country..",modelValue:n(t).country2,"onUpdate:modelValue":p[17]||(p[17]=m=>n(t).country2=m),clearable:!1,options:n(s).countries}),null,16,["class","modelValue","options"]),e("small",wa,u(n(t).errors.country2),1)])]))]),e("section",xa,[e("div",ka,[Ca,U(P,F(n(t).identity_type_idAttr,{class:{"error-field":n(t).errors.identity_type_id},modelValue:n(t).identity_type_id,"onUpdate:modelValue":p[18]||(p[18]=m=>n(t).identity_type_id=m),clearable:!1,options:[{value:1,label:"Passport"},{value:2,label:"ID CARD"}],reduce:m=>m.value}),null,16,["class","modelValue","reduce"]),e("small",Ea,u(n(t).errors.identity_type_id),1)]),n(t).identity_type_id=="2"?(g(),w("div",Aa,[Fa,k(e("input",{class:W([{"error-field":n(t).errors.identity_no},"form-control"]),"data-maska":"#### #### #### ####","data-maska-tokens":"#:[0-9a-zA-Z]","onUpdate:modelValue":p[19]||(p[19]=m=>n(t).identity_no=m),ype:"text",placeholder:"HKID No."},null,2),[[n(G)],[E,n(t).identity_no]]),e("small",Pa,u(n(t).errors.identity_no),1)])):I("",!0),n(t).identity_type_id=="2"?(g(),w("div",Ta,[l(" ( "),k(e("input",F(n(t).identity_no_suffixAttr,{class:[{"error-field":n(t).errors.identity_no_suffix},"form-control"],"data-maska":"##","data-maska-tokens":"#:[0-9]","onUpdate:modelValue":p[20]||(p[20]=m=>n(t).identity_no_suffix=m),type:"text",placeholder:"",style:{display:"inline !important",width:"100px"}}),null,16),[[n(G)],[E,n(t).identity_no_suffix]]),l(") "),e("small",Va,u(n(t).errors.identity_no_suffix),1)])):I("",!0),n(t).identity_type_id=="1"?(g(),w("div",Ia,[Da,k(e("input",F(n(t).passport_noAttr,{class:[{"error-field":n(t).errors.passport_no},"form-control"],"data-maska":"EEEEEEEEEEEEEEEE","data-maska-tokens":"E:[0-9a-zA-Z]","onUpdate:modelValue":p[21]||(p[21]=m=>n(t).passport_no=m),type:"text",placeholder:"Passport No"}),null,16),[[n(G)],[E,n(t).passport_no]]),e("small",La,u(n(t).errors.passport_no),1)])):I("",!0),n(t).identity_type_id=="1"?(g(),w("div",Oa,[Ua,U(P,F(n(t).issuing_countryAttr,{class:{"error-field":n(t).errors.issuing_country},modelValue:n(t).issuing_country,"onUpdate:modelValue":p[22]||(p[22]=m=>n(t).issuing_country=m),clearable:!1,options:n(s).countries}),null,16,["class","modelValue","options"]),e("small",Ba,u(n(t).errors.issuing_country),1)])):I("",!0),e("div",Ra,[qa,U(r,F(n(t).phoneAttr,{class:{"error-field":n(t).errors.phone},inputOptions:v.input,dropdownOptions:v.dropDown,autoFormat:!0,modelValue:n(t).phone,"onUpdate:modelValue":p[23]||(p[23]=m=>n(t).phone=m),"data-maska-tokens":"0:[0-9]:multiple"}),null,16,["class","inputOptions","dropdownOptions","modelValue"]),e("small",ja,u(n(t).errors.phone),1)]),e("div",Na,[za,k(e("input",F(n(t).emailAttr,{class:[{"error-field":n(t).errors.email},"form-control"],"onUpdate:modelValue":p[24]||(p[24]=m=>n(t).email=m),type:"text",placeholder:"email"}),null,16),[[E,n(t).email]]),e("small",Ma,u(n(t).errors.email),1)]),e("div",Ha,[Ya,k(e("input",F(n(t).confirm_emailAttr,{class:[{"error-field":n(t).errors.confirm_email},"form-control"],"onUpdate:modelValue":p[25]||(p[25]=m=>n(t).confirm_email=m),type:"text",placeholder:"confirm email"}),null,16),[[E,n(t).confirm_email]]),e("small",Wa,u(n(t).errors.confirm_email),1),b.value?(g(),w("small",Ga,"emails do no match")):I("",!0)]),e("div",Ka,[Za,U(P,F(n(t).occupationAttr,{class:{"error-field":n(t).errors.occupation},modelValue:n(t).occupation,"onUpdate:modelValue":p[26]||(p[26]=m=>n(t).occupation=m),clearable:!0,options:n(s).employmentStatusList}),null,16,["class","modelValue","options"]),e("small",Ja,u(n(t).errors.occupation),1)])]),e("div",Xa,[e("button",{onClick:y,class:"btn btn-outline-info me-3"},[Qa,l(" Close ")]),n(t).isSaving?(g(),w("button",tl,[nl,l(" Saving, Please wait ")])):(g(),w("button",{key:0,onClick:p[27]||(p[27]=(...m)=>n(_)&&n(_)(...m)),class:"btn btn-primary"},[l(" Save Record "),el]))])])}}}),ol=ge(sl,[["__scopeId","data-v-e312bd4d"]]),Y=a=>(fe("data-v-60659195"),a=a(),ye(),a),il={class:"section"},al={class:"fw-bolder fs-5"},ll={key:0,class:"text-primary small fst-italic"},rl=Y(()=>e("span",null,"Tell us the details about the founder and director.",-1)),cl={key:0},dl=Y(()=>e("i",{class:"bi bi-plus-circle"},null,-1)),ul={key:0,class:"section"},_l={class:"card",style:{width:"100%"}},pl=Y(()=>e("div",{class:"card-header py-3 fw-bold border-0"},"Founders / Directors: ",-1)),ml={class:"table-responsive"},hl={class:"table table-sm"},fl={key:0,class:"text-capitalize"},yl=Y(()=>e("i",{class:"bi bi-person-circle"},null,-1)),gl=Y(()=>e("br",null,null,-1)),vl={key:1,class:"text-capitalize"},bl=Y(()=>e("i",{class:"bi bi-person-circle"},null,-1)),$l=Y(()=>e("br",null,null,-1)),Sl={class:"text"},wl=["onClick"],xl=Y(()=>e("i",{class:"bi bi-pencil"},null,-1)),kl=["onClick"],Cl=Y(()=>e("i",{class:"bi bi-trash3"},null,-1)),El=Y(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Al=Y(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Fl={key:1},Pl={class:"section"},Tl=Y(()=>e("div",{class:"fw-bold"},"What is the type of founder/director? ",-1)),Vl={class:"row justify-content- mt-1"},Il={key:0,class:"bi bi-record-circle-fill text-primary me-1"},Dl={key:1,class:"bi bi-circle me-1"},Ll={key:0,class:"bi bi-record-circle-fill text-primary me-1"},Ol={key:1,class:"bi bi-circle me-1"},Ul={class:"section"},Bl=Y(()=>e("div",{class:"fw-bold"},"What is the Capacity of this individual? ",-1)),Rl={class:"row justify-content- mt-1"},ql={class:"col-4"},jl={class:"form-check"},Nl=Y(()=>e("label",{class:"form-check-label",for:"shareholder"},"Shareholder",-1)),zl={class:"col-4"},Ml={class:"form-check"},Hl=Y(()=>e("label",{class:"form-check-label",for:"director"},"Director",-1)),Yl={key:2,class:"p-2"},Wl=Y(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Gl=Y(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What are the basic requirements to be a founder? "),e("div",null," A founder must be at least 18 years old. There is no residency requirement to be a founder, and our form allows for up to 6 founders to be registered. ")],-1)),Kl=Y(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Is it possible to change founder details after the company has been incorporated? "),e("div",null," Yes, amendments to founder details can be made post-incorporation. ")],-1)),Zl=Y(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Is it possible to change founder details after the company has been incorporated? "),e("div",null," No, you must provide a physical residential address as it is mandatory. ")],-1)),Jl=Q({__name:"Founders",setup(a){const o=Xe(),s=Qe(),t=z(null),v=X(),c=_e.useToast(),i=z(!1),b=he(()=>{var f;const r=((f=v.companyInProgress)==null?void 0:f.company_entity)??[],m=[];return r.length&&r.forEach(x=>{const T=x.individual||x.corporate;T&&(T.entity_type_id=x.entity_type_id,T.capacity=x.entity_capacity_id,m.push(T))}),m});function y(){s.clearLocalStorage(),s.clearLocalStorage(),v.isShowingFoundersForm=!1}function _(){v.switchStage("-")}function h(){o.resetForm(),s.resetForm(),v.isShowingFoundersForm=!0,v.idToEdit=""}function d(r){t.value=r.entity_type_id=="1"?"individual":"corporate",v.isShowingFoundersForm=!0,v.idToEdit=r.company_entity_id,s.clearLocalStorage(),s.clearLocalStorage(),i.value=!0,p(r)}function p(r){r.entity_type_id=="1"?(s.flat=r.res_address.flat,s.building=r.res_address.building,s.street=r.res_address.street,s.state=r.res_address.state,s.country=r.res_address.country,s.first_name=r.first_name,s.last_name=r.last_name,r.chn_first_name&&r.chn_first_name!="undefined"&&(s.hasChineseName=!0,s.chn_first_name=r.chn_first_name),r.chn_last_name&&r.chn_last_name!="undefined"&&(s.chn_last_name=r.chn_last_name),s.dob=new Date(r.dob),s.nationality=r.nationality,s.phone=r.phone,s.email=r.email,s.confirm_email=r.email,s.occupation=r.occupation,s.identity_type_id=r.get_identity.identity_type,r.get_identity.identity_type==1&&(s.passport_no=r.get_identity.passport_no,s.issuing_country=r.get_identity.issueing_country),r.get_identity.identity_type==2&&(s.identity_no=r.get_identity.identity_no,r.get_identity.identity_no_suffix&&(s.identity_no_suffix=r.get_identity.identity_no_suffix)),v.checkedEntityCapacity=JSON.parse(r.capacity)):(r.company_name!=null&&r.company_name!="undefined"&&(o.company_name=r.company_name),r.chn_company_name!=null&&r.chn_company_name!="undefined"&&(o.chn_company_name=r.chn_company_name),o.date_incorporated=new Date(r.date_incorporated),o.flat=r.flat,o.building=r.building,o.street=r.street,o.state=r.state,o.country=r.country,r.registeration_no!=null&&r.registeration_no!="undefined"&&(o.registeration_no=r.registeration_no),o.country_registered=r.country_registered,o.business_nature_id=parseInt(r.business_nature_id),o.phone=r.authorized_persons.phone,o.email=r.authorized_persons.email,o.confirm_email=r.authorized_persons.email,o.first_name=r.authorized_persons.first_name,o.last_name=r.authorized_persons.last_name,v.checkedEntityCapacity=JSON.parse(r.capacity))}function B(r){ue.confirmDelete("Delete this Record?","Yes, Delete").then(async m=>{if(m.isConfirmed)try{const f=await J.deleteEntity(r);c.success("Record deleted",{position:"top-right"}),v.getCompanyInProgress("founder"),s.clearLocalStorage(),s.clearLocalStorage()}catch{c.error("Sorry Something went wrong",{position:"top-right"})}})}function P(){v.switchStage("+"),v.getCompanyInProgress()}return(r,m)=>(g(),q(de,null,{main:N(()=>[e("section",il,[e("div",al,[l("Founders / Directors "),n(v).isShowingFoundersForm&&n(v).idToEdit?(g(),w("span",ll,"(editing...)")):I("",!0)]),rl]),n(v).isShowingFoundersForm?(g(),w("div",Fl,[e("section",Pl,[Tl,e("div",Vl,[e("div",{onClick:m[0]||(m[0]=f=>t.value="individual"),class:W(["col-4 cursor-pointer",{"pointer-events-none":n(v).idToEdit}])},[t.value=="individual"?(g(),w("i",Il)):(g(),w("i",Dl)),l(" Individual ")],2),e("div",{onClick:m[1]||(m[1]=f=>t.value="corporate"),class:W(["col-4 cursor-pointer",{"pointer-events-none":n(v).idToEdit}])},[t.value=="corporate"?(g(),w("i",Ll)):(g(),w("i",Ol)),l(" Corporate ")],2)])]),e("section",Ul,[Bl,e("div",Rl,[e("div",ql,[e("div",jl,[k(e("input",{"onUpdate:modelValue":m[2]||(m[2]=f=>n(v).checkedEntityCapacity=f),class:"form-check-input cursor-pointer exemption",type:"checkbox",id:"shareholder",value:"1"},null,512),[[je,n(v).checkedEntityCapacity]]),Nl])]),e("div",zl,[e("div",Ml,[k(e("input",{class:"form-check-input exemption",type:"checkbox",id:"director",value:"2","onUpdate:modelValue":m[3]||(m[3]=f=>n(v).checkedEntityCapacity=f)},null,512),[[je,n(v).checkedEntityCapacity]]),Hl])])])]),t.value=="individual"?(g(),q(ol,{key:0})):t.value=="corporate"?(g(),q(ui,{key:1})):(g(),w("div",Yl,[e("button",{onClick:y,class:"btn btn-outline-info me-3"},[Wl,l(" Close ")])]))])):(g(),w("div",cl,[e("button",{class:"btn w-100 btn-outline-secondary py-3 mb-4",id:"CompanyStore",onClick:h},[dl,l(" Add New founder / Director ")]),b.value.length?(g(),w("section",ul,[e("div",_l,[pl,e("div",ml,[e("table",hl,[e("tbody",null,[(g(!0),w(Ve,null,Ie(b.value,(f,x)=>(g(),w("tr",{key:f},[e("td",null,u(x+1),1),f.entity_type_id==1?(g(),w("td",fl,[yl,l(" "+u(f.first_name+" "+f.last_name)+" ",1),gl,e("small",null,u(f.capacity.includes("1")?"Shareholder":""),1),l(" "+u((f.capacity.length>1," "))+" ",1),e("small",null,u(f.capacity.includes("2")?"Director":" "),1)])):(g(),w("td",vl,[bl,l(" "+u(f.company_name)+" ",1),$l,e("small",null,u(f.capacity.includes("1")?"Shareholder":" "),1),e("small",null,u(f.capacity.includes("2")?" Director":" "),1)])),e("td",Sl,u(f.entity_type_id=="1"?"Individual":"Corporate"),1),e("td",null,[e("button",{onClick:T=>d(f),class:"btn btn-sm border-0 text-info p-0 m-0"},[xl,l(" Edit ")],8,wl)]),e("td",null,[e("button",{onClick:T=>B(f.company_entity_id),class:"btn border-0 btn-sm text-danger p-0 m-0"},[Cl,l(" Remove ")],8,kl)])]))),128))])])])])])):I("",!0),e("button",{onClick:_,class:"btn btn-outline-info me-3"},[El,l(" Back ")]),e("button",{onClick:P,class:"btn btn-primary"},[l(" Continue "),Al])]))]),info:N(()=>[Gl,Kl,Zl]),_:1}))}}),Xl=ge(Jl,[["__scopeId","data-v-60659195"]]),Ql=Ke("ownership",()=>{const a=z("1"),o=z(""),s=z(""),t=z(""),v=!1,c=z([]);return{share_type_id:a,no_of_share:o,total_amount_paid:s,currency:t,isSaving:v,shareHolders:c}}),j=a=>(fe("data-v-d2fa5483"),a=a(),ye(),a),er=j(()=>e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Ownership")],-1)),tr={class:"section"},nr={class:"row g-3 mt-1"},sr={class:"col-md-6 col-lg-3"},or=j(()=>e("label",{class:"form-labe fw-bold small"},[l("Class of shares: "),e("span",{class:"text-danger"}," * ")],-1)),ir={class:"col-md-12"},ar=j(()=>e("option",{selected:"",value:"1"},"Ordinary",-1)),lr=[ar],rr={class:"col-md-6 col-lg-3"},cr=j(()=>e("label",{class:"form-labe fw-bold small"},[l("Total no of shares: "),e("span",{class:"text-danger"}," * ")],-1)),dr={class:"col-md-12"},ur={class:"col-md-6 col-lg-3"},_r=j(()=>e("label",{class:"form-labe fw-bold small"},[l("Total amount paid:"),e("span",{class:"text-danger"}," * ")],-1)),pr={class:"col-md-12"},mr={class:"small text-danger"},hr={class:"col-md-6 col-lg-3"},fr=j(()=>e("label",{class:"form-labe fw-bold small"},[l("Currency: "),e("span",{class:"text-danger"}," * ")],-1)),yr={class:"col-md-12"},gr=j(()=>e("div",{class:"my-4"},"Split the company shares between founders:",-1)),vr={class:"card border-0 shadow-sm mb-3"},br={class:"card-body"},$r={key:0},Sr=j(()=>e("i",{class:"bi bi-plus"},null,-1)),wr={key:1,class:"list-group list-group-flush"},xr=j(()=>e("i",{class:"bi bi-person-circle me-2"},null,-1)),kr=j(()=>e("span",{class:"text-danger"}," * ",-1)),Cr={class:"float-end"},Er=["onUpdate:modelValue"],Ar={class:"list-group-item"},Fr={key:0,class:"fw-bold float-end text-success"},Pr=j(()=>e("i",{class:"bi bi-check-circle"},null,-1)),Tr={key:1,class:"float-end text-danger small"},Vr=j(()=>e("i",{class:"bi bi-exclamation-circle"},null,-1)),Ir={key:0,class:"section"},Dr=j(()=>e("div",{class:"fw-bolder fs-6"},"Ownership Summary",-1)),Lr=j(()=>e("span",null,"Here is how much founders own",-1)),Or={class:"card mt-1 rounded-0 border-0 bg-light"},Ur={class:"card-body bg-transparent"},Br={class:"table-responsive"},Rr={class:"table"},qr=j(()=>e("thead",{class:".thead"},[e("tr",null,[e("th"),e("th",null,"Split")])],-1)),jr={class:"tbody"},Nr={class:"text-capitalize thead"},zr=j(()=>e("i",{class:"bi bi-circle-fill me-2"},null,-1)),Mr=j(()=>e("tr",{class:""},[e("td"),e("td",{class:"fw-bold text-success"},"100%")],-1)),Hr={class:"movement-buttons mt-5 mb-4"},Yr=j(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Wr=["disabled"],Gr=j(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Kr={key:1,class:"btn btn-primary",type:"button",disabled:""},Zr=j(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),Jr=j(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What are 'Class of Shares', and how do I choose the right one? "),e("div",null," 'Class of Shares' refers to the category of stock you are allocating. 'Ordinary' shares are common stock with no special rights or restrictions. This is the most common and most straight forward to begin with. ")],-1)),Xr=j(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What if the ownership percentages among founders don’t add up to 100%? "),e("div",null," The total ownership must equal 100%. If your allocations don’t sum up to 100%, you'll need to adjust the percentages until they do. The form will indicate any discrepancies with a visual cue. ")],-1)),Qr=Q({__name:"Ownership",setup(a){const o=_e.useToast(),s=X(),t=Ql(),v=Ne({total:""});let c=z("Sum of entries must be equal to Total Amount Paid");const i=he(()=>Object.keys(v).some(r=>v[r]!==""));function b(r){return parseInt(r.replace(/,/g,""))}De(()=>{v.total=""}),ae(()=>{var x;const r=((x=s.companyInProgress)==null?void 0:x.company_entity)??[],m=r.find(T=>T.entity_capacity_id.includes(2)&&T.entity_type_id==1);(!r.find(T=>T.entity_capacity_id.includes(1))||!m)&&(o.error("You need to add at least one <br> Shareholder    and one Individual <br> Director to proceed",{position:"top-right"}),s.switchStage("-")),_(),y()});function y(){var m,f,x,T,H,ne;t.no_of_share=((f=(m=s.companyInProgress)==null?void 0:m.shares[0])==null?void 0:f.no_of_share)??"",t.currency=((T=(x=s.companyInProgress)==null?void 0:x.shares[0])==null?void 0:T.currency)??"";const r=((ne=(H=s.companyInProgress)==null?void 0:H.shares[0])==null?void 0:ne.total_amount_paid)??"";t.total_amount_paid=r?parseFloat(r).toFixed(0):""}async function _(){var r;try{const f=(await J.retrieveShaheolders((r=s.companyInProgress)==null?void 0:r.id)).data.data,x=[];f.length&&f.forEach(T=>{var ne;const H=T.individual||T.corporate;H&&(H.entity_name=T.entity_type_id==1?`${H.first_name} ${H.last_name}`:`${H.company_name}`,H.own_share=((ne=T.share)==null?void 0:ne.total_amount)??0,x.push(H))}),t.shareHolders=x}catch{}}const h=he(()=>{let r=0;if(t.shareHolders.length)for(const f of t.shareHolders){if(f.own_share&&(r+=b(f.own_share)),f.own_share<=0)return c="Shareholder must not have zero(0) shares",!1;c="Sum of entries must be equal to Number of Shares"}const m=t.no_of_share?b(t.no_of_share):0;return r==m}),d=he(()=>{const r=[];return t.shareHolders.length&&t.total_amount_paid&&t.shareHolders.forEach(m=>{const f={name:m.entity_name,own_share:m.own_share,company_entity_id:m.company_entity_id,share_percentage:(b(m.own_share)/b(t.no_of_share)*100).toFixed(2)};r.push(f)}),r});function p(){s.switchStage("-")}function B(){var m;if(!((m=s.companyInProgress)!=null&&m.id)){o.default("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(!t.currency||!t.total_amount_paid||!t.no_of_share){o.default("Please complete fields",{position:"top-right"});return}const r=new FormData;r.append("company_id",s.companyInProgress.id),r.append("currency",t.currency),r.append("share_type_id",t.share_type_id),r.append("total_amount_paid",`${b(t.total_amount_paid)}`),r.append("no_of_share",t.no_of_share.replace(/,/g,"")),d.value.forEach((f,x)=>{r.append(`company_entity[${x}][share_percentage]`,f.share_percentage),r.append(`company_entity[${x}][total_amount]`,`${b(f.own_share)}`),r.append(`company_entity[${x}][company_entity_id]`,f.company_entity_id)}),t.isSaving=!0,P(r)}async function P(r){try{await J.companyShares(r),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(r,m)=>{const f=Z("v-select");return g(),q(de,null,{main:N(()=>[er,e("section",tr,[e("div",nr,[e("div",sr,[or,e("div",ir,[k(e("select",{"onUpdate:modelValue":m[0]||(m[0]=x=>n(t).share_type_id=x),class:"form-select"},lr,512),[[ie,n(t).share_type_id]])])]),e("div",rr,[cr,e("div",dr,[k(e("input",{"onUpdate:modelValue":m[1]||(m[1]=x=>n(t).no_of_share=x),required:"",placeholder:"0",class:"form-control","data-maska":"9,99#","data-maska-tokens":"9:[0-9]:repeated","data-maska-reversed":""},null,512),[[E,n(t).no_of_share],[n(G)]])])]),e("div",ur,[_r,e("div",pr,[k(e("input",{"onUpdate:modelValue":m[2]||(m[2]=x=>n(t).total_amount_paid=x),placeholder:"0.00",class:"form-control","data-maska":"9,99#","data-maska-tokens":"9:[0-9]:repeated","data-maska-reversed":""},null,512),[[E,n(t).total_amount_paid],[n(G)]]),e("span",mr,u(v.total),1)])]),e("div",hr,[fr,e("div",yr,[U(f,{modelValue:n(t).currency,"onUpdate:modelValue":m[3]||(m[3]=x=>n(t).currency=x),clearable:!1,options:n(s).currencies},null,8,["modelValue","options"])])])])]),gr,e("div",vr,[e("div",br,[n(t).shareHolders?(g(),w("ul",wr,[(g(!0),w(Ve,null,Ie(n(t).shareHolders,(x,T)=>(g(),w("li",{key:x,class:"list-group-item text-capitalize"},[xr,l(" "+u(x.entity_name)+" ",1),kr,e("span",Cr,[k(e("input",{"onUpdate:modelValue":H=>x.own_share=H,type:"text",class:"form-control form-control-sm text-end",placeholder:"0","data-maska":"9,99#","data-maska-tokens":"9:[0-9]:repeated","data-maska-reversed":""},null,8,Er),[[E,x.own_share],[n(G)]])])]))),128)),e("li",Ar,[n(t).total_amount_paid&&h.value?(g(),w("span",Fr,[l(" 100% "),Pr])):(g(),w("span",Tr,[l(u(n(c))+" ",1),Vr]))])])):(g(),w("div",$r,[e("button",{class:"btn btn-link",onClick:m[4]||(m[4]=x=>n(s).switchStage("-"))},[Sr,l("Please add Shareholders. ")])]))])]),n(t).no_of_share&&h.value?(g(),w("section",Ir,[Dr,Lr,e("div",Or,[e("div",Ur,[e("div",Br,[e("table",Rr,[qr,e("tbody",jr,[(g(!0),w(Ve,null,Ie(d.value,x=>(g(),w("tr",{key:x,class:"thead"},[e("td",Nr,[zr,l(" "+u(x.name),1)]),e("td",null,u(x.share_percentage)+"%",1)]))),128)),Mr])])])])])])):I("",!0),e("div",Hr,[e("button",{onClick:p,class:"btn btn-outline-info me-3"},[Yr,l(" Back ")]),n(t).isSaving?(g(),w("button",Kr,[Zr,l(" Saving, Please wait ")])):(g(),w("button",{key:0,disabled:!h.value||i.value,onClick:B,class:"btn btn-primary"},[l(" Save Record "),Gr],8,Wr))])]),info:N(()=>[Jr,Xr]),_:1})}}}),ec=ge(Qr,[["__scopeId","data-v-d2fa5483"]]),K=a=>(fe("data-v-9787c920"),a=a(),ye(),a),tc=K(()=>e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Company Secretary"),e("span",null,"Company secretary details")],-1)),nc={class:"row g-2"},sc=K(()=>e("div",{class:"col-md-12"},[e("label",{class:"fw-bolder"},[l("Type "),e("i",{class:"bi bi-lock-fill"})]),e("select",{disabled:"",class:"form-select"},[e("option",{seleted:"",value:"corporate"},"Corporate"),e("option",{value:"individual"},"Individual")])],-1)),oc={class:"col-md-12"},ic=K(()=>e("label",{class:"fw-bolder"},[l("Name in English "),e("i",{class:"bi bi-lock-fill"})],-1)),ac={class:"col-md-12"},lc=K(()=>e("label",{class:"fw-bolder"},[l("Company registration no "),e("i",{class:"bi bi-lock-fill"})],-1)),rc={class:"col-md-12"},cc=K(()=>e("label",{class:"fw-bolder"},[l("Company license no "),e("i",{class:"bi bi-lock-fill"})],-1)),dc={class:"col-md-12"},uc=K(()=>e("label",{class:"fw-bolder"},[l("Country registered in "),e("i",{class:"bi bi-lock-fill"})],-1)),_c=K(()=>e("option",{selected:"",value:"Hong Kong"},"Hong Kong",-1)),pc=[_c],mc={class:"section"},hc=K(()=>e("div",{class:"fw-bolder pt-3"},"Address ",-1)),fc={class:"row g-3 mt-1"},yc={class:"col-12"},gc=K(()=>e("label",{class:"form-label"},[l(" Flat／Floor／Block "),e("i",{class:"bi bi-lock-fill"})],-1)),vc={class:"col-12"},bc=K(()=>e("label",{class:"form-label"},[l(" Building"),e("i",{class:"bi bi-lock-fill"})],-1)),$c={class:"col-12"},Sc=K(()=>e("label",{class:"form-label"},[l(" Street／Estate／Lot／Village"),e("i",{class:"bi bi-lock-fill"})],-1)),wc={class:"col-12"},xc=K(()=>e("label",{class:"form-label"},[l("District／City／ Province／State／ Postal Code "),e("i",{class:"bi bi-lock-fill"})],-1)),kc={class:"col-md-12"},Cc=K(()=>e("label",{class:"form-label"},[l("Country／Region "),e("i",{class:"bi bi-lock-fill"})],-1)),Ec=K(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Ac=K(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Fc=Q({__name:"Secretary",setup(a){const o=X(),s=Ne({name:"Square One Limited",company_reg_no:"68891673",country_registered:"Hong Kong",licence_no:"TC000012",flat:"Rooms 502-503, 5th Floor",building:"Wanchai Commercial Centre",street:"194-204 Johnston Road",postal_code:"",country:"Hong Kong",state:"Wanchai",city:"Wanchai"});function t(){o.switchStage("-")}async function v(){var i;const c=new FormData;c.append("company_id",(i=o.companyInProgress)==null?void 0:i.id),await J.companySecretary(c),o.getCompanyInProgress(),o.switchStage("+")}return(c,i)=>{const b=Z("v-select");return g(),q(de,null,{main:N(()=>[tc,e("section",nc,[sc,e("div",oc,[ic,k(e("input",{disabled:"","onUpdate:modelValue":i[0]||(i[0]=y=>s.name=y),type:"text",class:"form-control",placeholder:"Name in English"},null,512),[[E,s.name]])]),e("div",ac,[lc,k(e("input",{disabled:"","onUpdate:modelValue":i[1]||(i[1]=y=>s.company_reg_no=y),type:"text",class:"form-control",placeholder:"Company registration no"},null,512),[[E,s.company_reg_no]])]),e("div",rc,[cc,k(e("input",{disabled:"","onUpdate:modelValue":i[2]||(i[2]=y=>s.licence_no=y),type:"text",class:"form-control",placeholder:"Company registration no"},null,512),[[E,s.licence_no]])]),e("div",dc,[uc,k(e("select",{disabled:"",class:"form-select","onUpdate:modelValue":i[3]||(i[3]=y=>s.country_registered=y)},pc,512),[[ie,s.country_registered]])])]),e("section",mc,[hc,e("div",fc,[e("div",yc,[gc,k(e("input",{disabled:"","onUpdate:modelValue":i[4]||(i[4]=y=>s.flat=y),class:"form-control",type:"text",placeholder:"Flat／Floor／Block"},null,512),[[E,s.flat]])]),e("div",vc,[bc,k(e("input",{disabled:"","onUpdate:modelValue":i[5]||(i[5]=y=>s.building=y),class:"form-control",type:"text",placeholder:"Street number"},null,512),[[E,s.building]])]),e("div",$c,[Sc,k(e("input",{disabled:"","onUpdate:modelValue":i[6]||(i[6]=y=>s.street=y),class:"form-control",type:"text",placeholder:"City"},null,512),[[E,s.street]])]),e("div",wc,[xc,k(e("input",{disabled:"","onUpdate:modelValue":i[7]||(i[7]=y=>s.state=y),class:"form-control",type:"text",placeholder:"State"},null,512),[[E,s.state]])]),e("div",kc,[Cc,U(b,{disabled:!0,placeholder:"select country..",modelValue:s.country,"onUpdate:modelValue":i[8]||(i[8]=y=>s.country=y),clearable:!1,options:n(o).countries},null,8,["modelValue","options"])])])]),e("div",{class:"movement-buttons my-5"},[e("button",{onClick:t,class:"btn btn-outline-info me-3"},[Ec,l(" Back ")]),e("button",{onClick:v,class:"btn btn-primary"},[l(" Continue "),Ac])])]),info:N(()=>[]),_:1})}}}),Pc=ge(Fc,[["__scopeId","data-v-9787c920"]]),le=a=>(fe("data-v-529143dd"),a=a(),ye(),a),Tc=le(()=>e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Source of funds"),e("span",null,"Source of funds")],-1)),Vc={class:"row g-2"},Ic={class:"col-md-12"},Dc=le(()=>e("label",{class:"fw-bolder"},[l("Expected source of funds "),e("small",{class:"text-danger"},"*")],-1)),Lc={class:"text-danger"},Oc={class:"col-md-12"},Uc=le(()=>e("label",{class:"fw-bolder"},[l("Origin source of funds "),e("small",{class:"text-danger"},"*")],-1)),Bc={class:"text-danger"},Rc=le(()=>e("div",{class:"fw-bolder fs-5"},"Source of Wealth",-1)),qc={class:"col-md-12"},jc=le(()=>e("label",{class:"fw-bolder"},[l("Initial source of wealth "),e("small",{class:"text-danger"},"*")],-1)),Nc={class:"text-danger"},zc={class:"col-md-12"},Mc=le(()=>e("label",{class:"fw-bolder"},[l("Ongoing source of wealth "),e("small",{class:"text-danger"},"*")],-1)),Hc={class:"text-danger"},Yc={class:"movement-buttons my-5"},Wc=le(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Gc=le(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Kc={key:1,class:"btn btn-primary",type:"button",disabled:""},Zc=le(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),Jc=le(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Why do I need to disclose the source of funds and wealth? "),e("div",null," Disclosure of the source of funds and wealth is a regulatory requirement to comply with anti-money laundering laws. It helps maintain financial transparency and accountability. ")],-1)),Xc=le(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What qualifies as a source of funds? "),e("div",null," The source of funds refers to the origin of the capital you will invest in the company, such as personal savings, loan or credit, investment income, or any other legitimate source. ")],-1)),Qc=le(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Can the source of wealth and source of funds be the same? "),e("div",null," Yes, they can be the same if your initial wealth, which is funding the company, comes from a consistent ongoing source, such as a business or employment income. ")],-1)),ed=Q({__name:"Source",setup(a){const o=_e.useToast(),s=X(),t=et();ae(()=>{t.updateFields(s.companyInProgress)}),be(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});function v(){s.switchStage("-")}const c=t.handleSubmit(async b=>{var _;if(!((_=s.companyInProgress)!=null&&_.id)){o.error("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0)return o.error("Some fields still have errors",{position:"top-right"}),!0;const y=new FormData;y.append("company_id",s.companyInProgress.id),y.append("income_expected_source",b.income_expected_source),y.append("origin_funds",b.origin_funds),y.append("wealth_initial_source",b.wealth_initial_source),y.append("income_outgoing_source",b.income_outgoing_source),t.isSaving=!0,i(y)});async function i(b){try{await J.companySource(b),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(b,y)=>{const _=Z("v-select");return g(),q(de,null,{main:N(()=>[Tc,e("section",Vc,[e("div",Ic,[Dc,U(_,{class:W({"error-field":n(t).errors.income_expected_source}),modelValue:n(t).income_expected_source,"onUpdate:modelValue":y[0]||(y[0]=h=>n(t).income_expected_source=h),clearable:!0,placeholder:"select income expected source  ",options:n(s).sourceOfFunds},null,8,["class","modelValue","options"]),e("small",Lc,u(n(t).errors.income_expected_source),1)]),e("div",Oc,[Uc,U(_,{class:W({"error-field":n(t).errors.origin_funds}),modelValue:n(t).origin_funds,"onUpdate:modelValue":y[1]||(y[1]=h=>n(t).origin_funds=h),clearable:!0,options:n(s).countries,placeholder:"select origin funds"},null,8,["class","modelValue","options"]),e("small",Bc,u(n(t).errors.origin_funds),1)]),Rc,e("div",qc,[jc,U(_,{class:W({"error-field":n(t).errors.wealth_initial_source}),modelValue:n(t).wealth_initial_source,"onUpdate:modelValue":y[2]||(y[2]=h=>n(t).wealth_initial_source=h),clearable:!0,options:n(s).initialSourceOfWealth,placeholder:" select wealth initialsource"},null,8,["class","modelValue","options"]),e("small",Nc,u(n(t).errors.wealth_initial_source),1)]),e("div",zc,[Mc,U(_,{class:W({"error-field":n(t).errors.income_outgoing_source}),modelValue:n(t).income_outgoing_source,"onUpdate:modelValue":y[3]||(y[3]=h=>n(t).income_outgoing_source=h),clearable:!0,options:n(s).ongoingSourceOfIncome,placeholder:"select income outgoing source"},null,8,["class","modelValue","options"]),e("small",Hc,u(n(t).errors.income_outgoing_source),1)])]),e("div",Yc,[e("button",{onClick:v,class:"btn btn-outline-info me-3"},[Wc,l(" Back ")]),n(t).isSaving?(g(),w("button",Kc,[Zc,l(" Saving, Please wait ")])):(g(),w("button",{key:0,onClick:y[4]||(y[4]=(...h)=>n(c)&&n(c)(...h)),class:"btn btn-primary"},[l(" Save & Continue "),Gc]))])]),info:N(()=>[Jc,Xc,Qc]),_:1})}}}),td=ge(ed,[["__scopeId","data-v-529143dd"]]),nd=e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Activities"),e("span",null,"Detail your company's primary business operations below.")],-1),sd={class:"section"},od=e("div",{class:"fw-bold"},[l("Describe your expected business activities "),e("span",{class:"text-danger"}," * ")],-1),id=e("div",null,"Provide a brief but clear description of your anticipated business activities. Be as specific as possible to ensure accurate representation in your business ",-1),ad={class:"row g-2 mt-1"},ld={class:"col-md-12"},rd={class:"text-danger"},cd={class:"float-end"},dd={class:"section"},ud=e("div",{class:"fw-bold"},[l("Level of activity "),e("span",{class:"text-danger"}," * ")],-1),_d=e("div",null,"Select the volume and frequency of transactions your business expects to handle. ",-1),pd={class:"row g-2 mt-1"},md={class:"col-md-12"},hd={class:"text-danger"},fd={class:"section"},yd=e("div",{class:"fw-bold"},[l("Nature of activity "),e("span",{class:"text-danger"}," * ")],-1),gd=e("div",null,"Choose the main industry or sector that best represents your business operations. ",-1),vd={class:"row g-2 mt-1"},bd={class:"col-md-12"},$d={class:"text-danger"},Sd={class:"section"},wd=e("div",{class:"fw-bold"},[l("Customer location and operation "),e("span",{class:"text-danger"}," * ")],-1),xd=e("div",null,"Indicate the primary countries where your company will actively conduct business or serve customers. ",-1),kd={class:"row g-2 mt-1"},Cd={class:"col-md-12"},Ed={class:"text-danger"},Ad={class:"section"},Fd=e("div",{class:"fw-bold"},[l("List of countries "),e("span",{class:"text-danger"}," * ")],-1),Pd=e("div",null,"List all additional countries where your company will have business activities or customer interactions. ",-1),Td={class:"row g-2 mt-1"},Vd={class:"col-md-12"},Id={class:"text-danger"},Dd={class:"movement-buttons my-5"},Ld=e("i",{class:"bi bi-arrow-left"},null,-1),Od=e("i",{class:"bi bi-arrow-right"},null,-1),Ud={key:1,class:"btn btn-primary",type:"button",disabled:""},Bd=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),Rd=150,qd=Q({__name:"Activities",setup(a){const o=_e.useToast(),s=X(),t=tt();ae(()=>{t.updateFields(s.companyInProgress)}),be(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});function v(){s.switchStage("-")}ae(()=>{De(()=>{t.customer_location_operation&&t.customer_location_operation.length<1&&(t.errors.customer_location_operation="Please select an option"),t.country&&t.country.length<1&&(t.errors.country="Please select an option")})});const c=t.handleSubmit(async y=>{var h;if(!((h=s.companyInProgress)!=null&&h.id)){o.default("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0)return o.default("Some fields still have errors",{position:"top-right"}),!0;const _=new FormData;_.append("company_id",s.companyInProgress.id),_.append("description",y.description),_.append("activity_level",y.activity_level),_.append("activity_nature",y.activity_nature),_.append("customer_location_operation",y.customer_location_operation.toString()),_.append("country",y.country.toString()),t.isSaving=!0,i(_)});async function i(y){try{await J.companyActivity(y),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}const b=he(()=>{var y;return((y=t==null?void 0:t.description)==null?void 0:y.length)??0});return(y,_)=>{const h=Z("v-select");return g(),q(de,null,{main:N(()=>[nd,e("section",sd,[od,id,e("div",ad,[e("div",ld,[k(e("textarea",F(n(t).descriptionAttr,{class:[{"error-field":n(t).errors.description},"form-control"],"onUpdate:modelValue":_[0]||(_[0]=d=>n(t).description=d),rows:"5"}),null,16),[[E,n(t).description]]),e("small",rd,u(n(t).errors.description),1),e("small",cd,u(b.value)+"/"+u(Rd),1)])])]),e("section",dd,[ud,_d,e("div",pd,[e("div",md,[U(h,F(n(t).activity_levelAttr,{class:{"error-field":n(t).errors.activity_level},modelValue:n(t).activity_level,"onUpdate:modelValue":_[1]||(_[1]=d=>n(t).activity_level=d),clearable:!0,options:n(s).levelOfActivity}),null,16,["class","modelValue","options"]),e("small",hd,u(n(t).errors.activity_level),1)])])]),e("section",fd,[yd,gd,e("div",vd,[e("div",bd,[U(h,F(n(t).activity_natureAttr,{class:{"error-field":n(t).errors.activity_nature},modelValue:n(t).activity_nature,"onUpdate:modelValue":_[2]||(_[2]=d=>n(t).activity_nature=d),clearable:!0,options:n(s).natureOfActivity}),null,16,["class","modelValue","options"]),e("small",$d,u(n(t).errors.activity_nature),1)])])]),e("section",Sd,[wd,xd,e("div",kd,[e("div",Cd,[U(h,F(n(t).customer_location_operationAttr,{class:{"error-field":n(t).errors.customer_location_operation},multiple:!0,modelValue:n(t).customer_location_operation,"onUpdate:modelValue":_[3]||(_[3]=d=>n(t).customer_location_operation=d),clearable:!0,options:n(s).countries}),null,16,["class","modelValue","options"]),e("small",Ed,u(n(t).errors.customer_location_operation),1)])])]),e("section",Ad,[Fd,Pd,e("div",Td,[e("div",Vd,[U(h,{class:W({"error-field":n(t).errors.country}),multiple:!0,modelValue:n(t).country,"onUpdate:modelValue":_[4]||(_[4]=d=>n(t).country=d),clearable:!0,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",Id,u(n(t).errors.country),1)])])]),e("div",Dd,[e("button",{onClick:v,class:"btn btn-outline-info me-3"},[Ld,l(" Back ")]),n(t).isSaving?(g(),w("button",Ud,[Bd,l(" Saving, Please wait ")])):(g(),w("button",{key:0,onClick:_[5]||(_[5]=(...d)=>n(c)&&n(c)(...d)),class:"btn btn-primary"},[l(" Save & Continue "),Od]))])]),_:1})}}}),A=a=>(fe("data-v-68f6cc21"),a=a(),ye(),a),jd=A(()=>e("section",{class:"section"},[e("h5",{class:"fw-bolder"},"Summary"),e("span",null,"Please make sure the following information is correct. We'll use it to generate your documents.")],-1)),Nd={class:"section"},zd=A(()=>e("div",{class:"fw-bold mb-2"},"Company",-1)),Md={class:"card bg-light border-0"},Hd={class:"card-body"},Yd={class:"list-group list-group-flush"},Wd={class:"list-group-item"},Gd={class:"float-end"},Kd={key:0,class:"small text-mut text-capitalize"},Zd={key:1,class:"small text-mut text-capitalize"},Jd={key:2,class:"small text-mut text-capitalize"},Xd={key:3,class:"small text-mut text-capitalize"},Qd={key:4,class:"small text-mut text-capitalize"},eu={class:"list-group-item"},tu={class:"float-end"},nu={class:"small text-mut"},su={class:"list-group-item"},ou=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),iu=[ou],au={class:"small text-mut"},lu={class:"list-group-item"},ru=A(()=>e("span",{class:"float-end"},[e("i",{class:"bi bi-pencil-square"})],-1)),cu={class:"small text-mut"},du={class:"section"},uu=A(()=>e("div",{class:"fw-bold mb-2"},"Registered Adrress",-1)),_u={class:"card bg-light border-0"},pu={class:"card-body"},mu={class:"list-group list-group-flush"},hu={class:"list-group-item"},fu={class:"float-end"},yu={class:"small text-mut text-capitalize"},gu={class:"list-group-item"},vu={class:"float-end"},bu={class:"small text-mut"},$u={class:"list-group-item"},Su=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),wu=[Su],xu={class:"small text-mut"},ku={class:"list-group-item"},Cu=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Eu=[Cu],Au={class:"small text-mut"},Fu={class:"list-group-item"},Pu=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Tu=[Pu],Vu={class:"small text-mut"},Iu={class:"section"},Du=A(()=>e("div",{class:"fw-bold mb-2"},"Founders (Individual)",-1)),Lu={class:"card bg-light border-0 section"},Ou={class:"card-body"},Uu={class:"list-group list-group-flush"},Bu={class:"list-group-item"},Ru=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),qu=[Ru],ju={class:"small text-mut text-capitalize"},Nu={class:"list-group-item"},zu=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Mu=[zu],Hu={class:"small text-mut"},Yu={class:"list-group-item"},Wu=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Gu=[Wu],Ku={class:"small text-mut"},Zu={class:"list-group-item"},Ju=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Xu=[Ju],Qu={class:"small text-mut"},e_={class:"list-group-item"},t_=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),n_=[t_],s_={class:"small text-mut"},o_={class:"list-group-item"},i_=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),a_=[i_],l_={class:"small text-mut"},r_={class:"list-group-item"},c_=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),d_=[c_],u_={class:"small text-mut"},__={class:"list-group-item"},p_=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),m_=[p_],h_={class:"small text-mut"},f_={class:"list-group-item"},y_=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),g_=[y_],v_={class:"small text-mut"},b_={class:"list-group-item"},$_=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),S_=[$_],w_={class:"small text-mut"},x_={class:"list-group-item"},k_=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),C_=[k_],E_={class:"small text-mut"},A_={key:0,class:"list-group-item"},F_=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),P_=[F_],T_={class:"small text-mut"},V_={class:"section"},I_=A(()=>e("div",{class:"fw-bold mb-2"},"Founders (Corporate)",-1)),D_={class:"card bg-light border-0 section"},L_={class:"card-body"},O_={class:"list-group list-group-flush"},U_={class:"list-group-item"},B_=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),R_=[B_],q_={class:"small text-mut text-capitalize"},j_={class:"list-group-item"},N_=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),z_=[N_],M_={class:"small text-mut"},H_={class:"list-group-item"},Y_=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),W_=[Y_],G_={class:"small text-mut"},K_={class:"list-group-item"},Z_=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),J_=[Z_],X_={class:"small text-mut"},Q_={class:"list-group-item"},ep=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),tp=[ep],np={class:"small text-mut"},sp={class:"list-group-item"},op=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),ip=[op],ap={class:"small text-mut"},lp={class:"list-group-item"},rp=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),cp=[rp],dp={class:"small text-mut"},up={class:"list-group-item"},_p=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),pp=[_p],mp={class:"small text-mut"},hp={class:"list-group-item"},fp=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),yp=[fp],gp={class:"small text-mut"},vp={class:"list-group-item"},bp=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),$p=[bp],Sp={class:"small text-mut"},wp={class:"list-group-item"},xp=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),kp=[xp],Cp={class:"small text-mut"},Ep={class:"section"},Ap=A(()=>e("div",{class:"fw-bold mb-2"},"Ownership",-1)),Fp={class:"card bg-light border-0"},Pp={class:"card-body"},Tp={class:"list-group list-group-flush"},Vp={class:"list-group-item"},Ip={class:"fw-bold"},Dp={class:"float-end"},Lp=A(()=>e("div",{class:"small text-mut"},"Ordinary",-1)),Op={class:"list-group-item"},Up={class:"fw-bold"},Bp={class:"float-end"},Rp={class:"small text-mut"},qp={class:"list-group-item"},jp={class:"fw-bold"},Np={class:"float-end"},zp={class:"small text-mut"},Mp={class:"list-group-item"},Hp={class:"fw-bold"},Yp={class:"float-end"},Wp={class:"small text-mut"},Gp={class:"list-group-item"},Kp={class:"fw-bold card border-0 shadow-sm"},Zp={class:"card-body"},Jp=A(()=>e("div",{class:"fw-bold"},[l(" Shareholders "),e("span",{style:{float:"right"}}," No of Shares")],-1)),Xp={class:"list-group list-group-flush"},Qp={class:"list-group-item"},em={class:"float-end text-right"},tm={class:"small text-mut"},nm={class:"section"},sm=A(()=>e("div",{class:"fw-bold mb-2"},"Company Secretary",-1)),om={class:"card bg-light border-0"},im={class:"card-body"},am={class:"list-group list-group-flush"},lm={class:"list-group-item"},rm={class:"fw-bold"},cm={class:"float-end"},dm={class:"small text-mut"},um={class:"list-group-item"},_m={class:"fw-bold"},pm={class:"float-end"},mm={class:"small text-mut"},hm={class:"list-group-item"},fm={class:"fw-bold"},ym={class:"float-end"},gm={class:"small text-mut"},vm={class:"list-group-item"},bm={class:"fw-bold"},$m={class:"float-end"},Sm={class:"small text-mut"},wm={class:"list-group-item"},xm={class:"fw-bold"},km={class:"float-end"},Cm={class:"small text-mut"},Em={class:"list-group-item"},Am={class:"fw-bold"},Fm={class:"float-end"},Pm={class:"small text-mut"},Tm={class:"list-group-item"},Vm={class:"fw-bold"},Im={class:"float-end"},Dm={class:"small text-mut"},Lm={class:"list-group-item"},Om={class:"fw-bold"},Um={class:"float-end"},Bm={class:"small text-mut"},Rm={class:"section"},qm=A(()=>e("div",{class:"fw-bold mb-2"},"Source of Funds",-1)),jm={class:"card bg-light border-0"},Nm={class:"card-body"},zm={class:"list-group list-group-flush"},Mm={class:"list-group-item"},Hm={class:"float-end"},Ym={class:"small text-mut text-capitalize"},Wm={class:"list-group-item"},Gm={class:"float-end"},Km={class:"small text-mut"},Zm={class:"list-group-item"},Jm=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Xm=[Jm],Qm={class:"small text-mut"},eh={class:"list-group-item"},th=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),nh=[th],sh={class:"small text-mut"},oh={class:"section"},ih=A(()=>e("div",{class:"fw-bold mb-2"},"Activity",-1)),ah={class:"card bg-light border-0"},lh={class:"card-body"},rh={class:"list-group list-group-flush"},ch={class:"list-group-item"},dh={class:"float-end"},uh={class:"small text-mut text-capitalize"},_h={class:"list-group-item"},ph={class:"float-end"},mh={class:"small text-mut"},hh={class:"list-group-item"},fh=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),yh=[fh],gh={class:"small text-mut"},vh={class:"list-group-item"},bh=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),$h=[bh],Sh={class:"small text-mut"},wh={class:"list-group-item"},xh=A(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),kh=[xh],Ch={class:"small text-mut"},Eh={class:"movement-buttons my-5"},Ah=A(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Fh=A(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Ph=A(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What are the basic requirements to be a founder? "),e("div",null," A founder must be at least 18 years old. There is no residency requirement to be a founder, and our form allows for up to 6 founders to be registered. ")],-1)),Th=A(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Is it possible to change founder details after the company has been incorporated? "),e("div",null," Yes, amendments to founder details can be made post-incorporation. ")],-1)),Vh=A(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Is it possible to change founder details after the company has been incorporated? "),e("div",null," No, you must provide a physical residential address as it is mandatory. ")],-1)),Ih=Q({__name:"Summary",setup(a){const o=X(),s=Ne({company_name:[],description:"",address:"",business_nature:"",website:"",phone_number:"",flat:"",building:"",street:"",state:"",country:"",income_expected_source:"",income_outgoing_source:"",origin_funds:"",wealth_initial_source:"",activity_nature:"",activity_level:"",activity_description:"",activity_country:"",activity_customer_location_operation:"",founders_individual:[],founders_corporate:[],secretary_name:"",secretary_chname:"",secretary_company_reg_no:"",secretary_country_registered:"",secretary_licence_no:"",secretary_email:"",secretary_flat:"",secretary_street:"",secretary_city:"",secretary_state:"",secretary_country:"",share_type_id:"",no_of_share:"",total_amount_paid:"",currency:"",ownerShares:[]});ae(async()=>{var i,b,y,_,h,d,p,B,P,r,m,f,x,T,H,ne,$e,pe,Le,Se,Oe,qe,Ce,Ee,Ae,Ue;await o.getCompanyInProgress();const c=o.companyInProgress;if(console.log(c,"check activities"),c){const S=c.names;S.find(V=>V.choice_level==1),s.company_name=S,s.description=c.description,s.business_nature=((i=c==null?void 0:c.business_nature)==null?void 0:i.name)??"",s.website=c.website,s.secretary_name=((b=c==null?void 0:c.secretary)==null?void 0:b.name)??"",s.secretary_chname=((y=c==null?void 0:c.secretary)==null?void 0:y.chn_name)??"",s.secretary_company_reg_no=((_=c==null?void 0:c.secretary)==null?void 0:_.company_reg_no)??"",s.secretary_country_registered=((h=c==null?void 0:c.secretary)==null?void 0:h.country_registered)??"",s.secretary_licence_no=((d=c==null?void 0:c.secretary)==null?void 0:d.licence_no)??"",s.secretary_email=((p=c==null?void 0:c.secretary)==null?void 0:p.email)??"",s.secretary_flat=((B=c==null?void 0:c.secretary)==null?void 0:B.flat)??"",s.secretary_street=((P=c==null?void 0:c.secretary)==null?void 0:P.street)??"",s.secretary_city=((r=c==null?void 0:c.secretary)==null?void 0:r.city)??"",s.secretary_state=((m=c==null?void 0:c.secretary)==null?void 0:m.state)??"",s.secretary_country=((f=c==null?void 0:c.secretary)==null?void 0:f.country)??"",s.flat=(c==null?void 0:c.flat)??"",s.building=(c==null?void 0:c.building)??"",s.street=(c==null?void 0:c.street)??"",s.state=(c==null?void 0:c.state)??"",s.country=(c==null?void 0:c.country)??"",s.share_type_id=((x=c==null?void 0:c.shares[0])==null?void 0:x.share_type_id)??"",s.no_of_share=((T=c==null?void 0:c.shares[0])==null?void 0:T.no_of_share)??"",s.total_amount_paid=((H=c==null?void 0:c.shares[0])==null?void 0:H.total_amount_paid)??"",s.currency=((ne=c==null?void 0:c.shares[0])==null?void 0:ne.currency)??"",s.income_expected_source=(($e=c.fund_source)==null?void 0:$e.income_expected_source)??"",s.income_outgoing_source=((pe=c.fund_source)==null?void 0:pe.income_outgoing_source)??"",s.origin_funds=((Le=c.fund_source)==null?void 0:Le.origin_funds)??"",s.wealth_initial_source=((Se=c.fund_source)==null?void 0:Se.wealth_initial_source)??"",s.activity_nature=((Oe=c.activity)==null?void 0:Oe.activity_nature)??"",s.activity_level=((qe=c.activity)==null?void 0:qe.activity_level)??"",s.activity_description=((Ce=c.activity)==null?void 0:Ce.description)??"",s.activity_customer_location_operation=((Ee=c.activity)==null?void 0:Ee.customer_location_operation)??"",s.activity_country=((Ae=c.activity)==null?void 0:Ae.country)??"";const $=((Ue=o.companyInProgress)==null?void 0:Ue.company_entity)??[];$.length&&($.filter(C=>C.entity_type_id==1).forEach(C=>{var se;const O=C.individual;console.log(O,"get shareholder"),s.founders_individual.push(O),O.owner_shares&&s.ownerShares.push({name:O.first_name+" "+O.last_name||O.chn_first_name+" "+O.chn_last_name,amount:((se=O.owner_shares)==null?void 0:se.total_amount)??0})}),$.filter(C=>C.entity_type_id==2).forEach(C=>{var se;const O=C.corporate;s.founders_corporate.push(O),O.owner_shares&&s.ownerShares.push({name:O.company_name||O.chn_company_name,amount:((se=O.owner_shares)==null?void 0:se.total_amount)??0})}))}});const t=c=>{const i=o.businessNatures.find(b=>b.id==c);return i?i.name:".."};function v(c){o.switchStage(c)}return(c,i)=>(g(),q(de,null,{main:N(()=>{var b,y,_,h,d,p,B,P,r,m;return[jd,e("section",Nd,[zd,e("section",Md,[e("div",Hd,[e("ul",Yd,[e("li",Wd,[e("span",null,[l(" Name "),e("span",Gd,[e("i",{onClick:i[0]||(i[0]=f=>n(o).currentStage=2),class:"bi bi-pencil-square"})]),s!=null&&s.company_name[0]?(g(),w("div",Kd," First Choice: "+u((b=s==null?void 0:s.company_name[0])==null?void 0:b.eng_name)+" "+u((y=s==null?void 0:s.company_name[0])==null?void 0:y.chn_name),1)):I("",!0),s!=null&&s.company_name[1]?(g(),w("div",Zd," Second Choice: "+u((_=s==null?void 0:s.company_name[1])==null?void 0:_.eng_name)+" "+u((h=s==null?void 0:s.company_name[1])==null?void 0:h.chn_name),1)):I("",!0),s!=null&&s.company_name[2]?(g(),w("div",Jd," Third Choice: "+u((d=s==null?void 0:s.company_name[2])==null?void 0:d.eng_name)+" "+u((p=s==null?void 0:s.company_name[2])==null?void 0:p.chn_name),1)):I("",!0),s!=null&&s.company_name[3]?(g(),w("div",Xd,"Forth Choice: "+u((B=s==null?void 0:s.company_name[3])==null?void 0:B.eng_name)+" "+u((P=s==null?void 0:s.company_name[3])==null?void 0:P.chn_name),1)):I("",!0),s!=null&&s.company_name[4]?(g(),w("div",Qd,"Fifth Choice: "+u((r=s==null?void 0:s.company_name[4])==null?void 0:r.eng_name)+" "+u((m=s==null?void 0:s.company_name[5])==null?void 0:m.chn_name),1)):I("",!0)])]),e("li",eu,[e("span",null,[l(" Description "),e("span",tu,[e("i",{onClick:i[1]||(i[1]=f=>n(o).currentStage=3),class:"bi bi-pencil-square"})]),e("div",nu,u(s.description),1)])]),e("li",su,[e("span",null,[l(" Nature of business "),e("span",{onClick:i[2]||(i[2]=f=>n(o).currentStage=3),class:"float-end"},iu),e("div",au,u(s.business_nature),1)])]),e("li",lu,[e("span",null,[l(" Website, social media, or app "),ru,e("div",cu,u(s==null?void 0:s.website),1)])])])])])]),e("section",du,[uu,e("section",_u,[e("div",pu,[e("ul",mu,[e("li",hu,[e("span",null,[l(" Flat "),e("span",fu,[e("i",{onClick:i[3]||(i[3]=f=>n(o).currentStage=4),class:"bi bi-pencil-square"})]),e("div",yu,u(s.flat),1)])]),e("li",gu,[e("span",null,[l(" Building "),e("span",vu,[e("i",{onClick:i[4]||(i[4]=f=>n(o).currentStage=4),class:"bi bi-pencil-square"})]),e("div",bu,u(s.building),1)])]),e("li",$u,[e("span",null,[l(" Street "),e("span",{onClick:i[5]||(i[5]=f=>n(o).currentStage=4),class:"float-end"},wu),e("div",xu,u(s.street),1)])]),e("li",ku,[e("span",null,[l(" State "),e("span",{class:"float-end",onClick:i[6]||(i[6]=f=>n(o).currentStage=4)},Eu),e("div",Au,u(s.state),1)])]),e("li",Fu,[e("span",null,[l(" Country "),e("span",{onClick:i[7]||(i[7]=f=>n(o).currentStage=4),class:"float-end"},Tu),e("div",Vu,u(s.country),1)])])])])])]),e("section",Iu,[Du,(g(!0),w(Ve,null,Ie(s.founders_individual,f=>(g(),w("section",Lu,[e("div",Ou,[e("ul",Uu,[e("li",Bu,[e("span",null,[l(" Name "),e("span",{onClick:i[8]||(i[8]=x=>n(o).currentStage=5),class:"float-end"},qu),e("div",ju,u(f.first_name)+" "+u(f.last_name),1)])]),e("li",Nu,[e("span",null,[l(" Email "),e("span",{onClick:i[9]||(i[9]=x=>n(o).currentStage=5),class:"float-end"},Mu),e("div",Hu,u(f.email),1)])]),e("li",Yu,[e("span",null,[l(" Phone "),e("span",{onClick:i[10]||(i[10]=x=>n(o).currentStage=5),class:"float-end"},Gu),e("div",Ku,u(f.phone),1)])]),e("li",Zu,[e("span",null,[l(" Date of birth "),e("span",{onClick:i[11]||(i[11]=x=>n(o).currentStage=5),class:"float-end"},Xu),e("div",Qu,u(n(ue).dateDisplay(f.dob)),1)])]),e("li",e_,[e("span",null,[l(" Occupation "),e("span",{onClick:i[12]||(i[12]=x=>n(o).currentStage=5),class:"float-end"},n_),e("div",s_,u(f.occupation),1)])]),e("li",o_,[e("span",null,[l(" Flat "),e("span",{onClick:i[13]||(i[13]=x=>n(o).currentStage=5),class:"float-end"},a_),e("div",l_,u(f.res_address.flat),1)])]),e("li",r_,[e("span",null,[l(" Street "),e("span",{onClick:i[14]||(i[14]=x=>n(o).currentStage=5),class:"float-end"},d_),e("div",u_,u(f.res_address.street),1)])]),e("li",__,[e("span",null,[l(" Building "),e("span",{onClick:i[15]||(i[15]=x=>n(o).currentStage=5),class:"float-end"},m_),e("div",h_,u(f.res_address.building),1)])]),e("li",f_,[e("span",null,[l(" State "),e("span",{onClick:i[16]||(i[16]=x=>n(o).currentStage=5),class:"float-end"},g_),e("div",v_,u(f.res_address.state),1)])]),e("li",b_,[e("span",null,[l(" Country "),e("span",{onClick:i[17]||(i[17]=x=>n(o).currentStage=5),class:"float-end"},S_),e("div",w_,u(f.res_address.country),1)])]),e("li",x_,[e("span",null,[l(" Passport /HKID "),e("span",{onClick:i[18]||(i[18]=x=>n(o).currentStage=5),class:"float-end"},C_),e("div",E_,u(f.get_identity.identity_no!=null?f.get_identity.identity_no+"-"+f.get_identity.identity_no_suffix:f.get_identity.passport_no),1)])]),f.get_identity.identity_no!=null?(g(),w("li",A_,[e("span",null,[l(" Issueing country "),e("span",{onClick:i[19]||(i[19]=x=>n(o).currentStage=5),class:"float-end"},P_),e("div",T_,u(f.get_identity.issueing_country!="undefined"?f.get_identity.issueing_country:""),1)])])):I("",!0)])])]))),256))]),e("section",V_,[I_,(g(!0),w(Ve,null,Ie(s.founders_corporate,f=>(g(),w("section",D_,[e("div",L_,[e("ul",O_,[e("li",U_,[e("span",null,[l(" Company Name "),e("span",{onClick:i[20]||(i[20]=x=>n(o).currentStage=5),class:"float-end"},R_),e("div",q_,u(f.company_name),1)])]),e("li",j_,[e("span",null,[l(" Business Nature "),e("span",{onClick:i[21]||(i[21]=x=>n(o).currentStage=5),class:"float-end"},z_),e("div",M_,u(t(f.business_nature_id)),1)])]),e("li",H_,[e("span",null,[l(" Date incorporated "),e("span",{onClick:i[22]||(i[22]=x=>n(o).currentStage=5),class:"float-end"},W_),e("div",G_,u(n(ue).dateDisplay(f.date_incorporated)),1)])]),e("li",K_,[e("span",null,[l(" Flat "),e("span",{onClick:i[23]||(i[23]=x=>n(o).currentStage=5),class:"float-end"},J_),e("div",X_,u(f.flat),1)])]),e("li",Q_,[e("span",null,[l(" Street "),e("span",{onClick:i[24]||(i[24]=x=>n(o).currentStage=5),class:"float-end"},tp),e("div",np,u(f.street),1)])]),e("li",sp,[e("span",null,[l(" Building "),e("span",{onClick:i[25]||(i[25]=x=>n(o).currentStage=5),class:"float-end"},ip),e("div",ap,u(f.building),1)])]),e("li",lp,[e("span",null,[l(" State "),e("span",{onClick:i[26]||(i[26]=x=>n(o).currentStage=5),class:"float-end"},cp),e("div",dp,u(f.state),1)])]),e("li",up,[e("span",null,[l(" Country "),e("span",{onClick:i[27]||(i[27]=x=>n(o).currentStage=5),class:"float-end"},pp),e("div",mp,u(f.country),1)])]),e("li",hp,[e("span",null,[l(" Authorized Person's Name "),e("span",{onClick:i[28]||(i[28]=x=>n(o).currentStage=5),class:"float-end"},yp),e("div",gp,u(f.authorized_persons.first_name)+" "+u(f.authorized_persons.last_name),1)])]),e("li",vp,[e("span",null,[l(" Authorized Person's Email "),e("span",{onClick:i[29]||(i[29]=x=>n(o).currentStage=5),class:"float-end"},$p),e("div",Sp,u(f.authorized_persons.email),1)])]),e("li",wp,[e("span",null,[l(" Authorized Person's Phone "),e("span",{onClick:i[30]||(i[30]=x=>n(o).currentStage=5),class:"float-end"},kp),e("div",Cp,u(f.authorized_persons.phone),1)])])])])]))),256))]),e("section",Ep,[Ap,e("section",Fp,[e("div",Pp,[e("ul",Tp,[e("li",Vp,[e("span",Ip,[l(" Share Type "),e("span",Dp,[e("i",{onClick:i[31]||(i[31]=f=>n(o).currentStage=6),class:"bi bi-pencil-square"})]),Lp])]),e("li",Op,[e("span",Up,[l(" No of Shares "),e("span",Bp,[e("i",{onClick:i[32]||(i[32]=f=>n(o).currentStage=6),class:"bi bi-pencil-square"})]),e("div",Rp,u(s.no_of_share),1)])]),e("li",qp,[e("span",jp,[l(" Total Amount Paid "),e("span",Np,[e("i",{onClick:i[33]||(i[33]=f=>n(o).currentStage=6),class:"bi bi-pencil-square"})]),e("div",zp,u(s.total_amount_paid),1)])]),e("li",Mp,[e("span",Hp,[l(" Currency "),e("span",Yp,[e("i",{onClick:i[34]||(i[34]=f=>n(o).currentStage=6),class:"bi bi-pencil-square"})]),e("div",Wp,u(s.currency),1)])]),e("li",Gp,[e("span",Kp,[e("div",Zp,[Jp,e("ul",Xp,[(g(!0),w(Ve,null,Ie(s.ownerShares,f=>(g(),w("li",Qp,[e("span",em,u(f.amount),1),e("div",tm,u(f.name),1)]))),256))])])])])])])])]),e("section",nm,[sm,e("section",om,[e("div",im,[e("ul",am,[e("li",lm,[e("span",rm,[l(" Name "),e("span",cm,[e("i",{onClick:i[35]||(i[35]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",dm,u(s.secretary_name),1)])]),e("li",um,[e("span",_m,[l(" company Reg No "),e("span",pm,[e("i",{onClick:i[36]||(i[36]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",mm,u(s.secretary_company_reg_no),1)])]),e("li",hm,[e("span",fm,[l(" Country Registered "),e("span",ym,[e("i",{onClick:i[37]||(i[37]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",gm,u(s.secretary_country_registered),1)])]),e("li",vm,[e("span",bm,[l(" Licence No "),e("span",$m,[e("i",{onClick:i[38]||(i[38]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",Sm,u(s.secretary_licence_no),1)])]),e("li",wm,[e("span",xm,[l(" Flat "),e("span",km,[e("i",{onClick:i[39]||(i[39]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",Cm,u(s.secretary_flat),1)])]),e("li",Em,[e("span",Am,[l(" Street "),e("span",Fm,[e("i",{onClick:i[40]||(i[40]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",Pm,u(s.secretary_street),1)])]),e("li",Tm,[e("span",Vm,[l(" City/State "),e("span",Im,[e("i",{onClick:i[41]||(i[41]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",Dm,u(s.secretary_state),1)])]),e("li",Lm,[e("span",Om,[l(" Country "),e("span",Um,[e("i",{onClick:i[42]||(i[42]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",Bm,u(s.secretary_country),1)])])])])])]),e("section",Rm,[qm,e("section",jm,[e("div",Nm,[e("ul",zm,[e("li",Mm,[e("span",null,[l(" Expected Source of Funds "),e("span",Hm,[e("i",{onClick:i[43]||(i[43]=f=>n(o).currentStage=8),class:"bi bi-pencil-square"})]),e("div",Ym,u(s.income_expected_source),1)])]),e("li",Wm,[e("span",null,[l(" Origin Source of Funds "),e("span",Gm,[e("i",{onClick:i[44]||(i[44]=f=>n(o).currentStage=8),class:"bi bi-pencil-square"})]),e("div",Km,u(s.origin_funds),1)])]),e("li",Zm,[e("span",null,[l(" Source of Wealth "),e("span",{onClick:i[45]||(i[45]=f=>n(o).currentStage=8),class:"float-end"},Xm),e("div",Qm,u(s.wealth_initial_source),1)])]),e("li",eh,[e("span",null,[l(" Ongoing Source of Wealth "),e("span",{onClick:i[46]||(i[46]=f=>n(o).currentStage=8),class:"float-end"},nh),e("div",sh,u(s.income_outgoing_source),1)])])])])])]),e("section",oh,[ih,e("section",ah,[e("div",lh,[e("ul",rh,[e("li",ch,[e("span",null,[l(" Activity Level "),e("span",dh,[e("i",{onClick:i[47]||(i[47]=f=>n(o).currentStage=9),class:"bi bi-pencil-square"})]),e("div",uh,u(s.activity_level),1)])]),e("li",_h,[e("span",null,[l(" Activity Nature "),e("span",ph,[e("i",{onClick:i[48]||(i[48]=f=>n(o).currentStage=9),class:"bi bi-pencil-square"})]),e("div",mh,u(s.activity_nature),1)])]),e("li",hh,[e("span",null,[l(" Description "),e("span",{onClick:i[49]||(i[49]=f=>n(o).currentStage=9),class:"float-end"},yh),e("div",gh,u(s.activity_description),1)])]),e("li",vh,[e("span",null,[l(" Customer Location Operation "),e("span",{onClick:i[50]||(i[50]=f=>n(o).currentStage=9),class:"float-end"},$h),e("div",Sh,u(s.activity_customer_location_operation),1)])]),e("li",wh,[e("span",null,[l(" Country "),e("span",{onClick:i[51]||(i[51]=f=>n(o).currentStage=9),class:"float-end"},kh),e("div",Ch,u(s.activity_country),1)])])])])])]),e("div",Eh,[e("button",{onClick:i[52]||(i[52]=f=>v("-")),class:"btn btn-outline-info me-3"},[Ah,l(" Back ")]),e("button",{onClick:i[53]||(i[53]=f=>v("+")),class:"btn btn-primary"},[l(" Save & Continue "),Fh])])]}),info:N(()=>[Ph,Th,Vh]),_:1}))}}),Dh=ge(Ih,[["__scopeId","data-v-68f6cc21"]]),te=a=>(fe("data-v-aa334a0b"),a=a(),ye(),a),Lh={class:"movement-buttons my-5"},Oh=te(()=>e("button",{class:"btn btn-outline-info me-3"},[e("i",{class:"bi bi-arrow-left"}),l(" Back ")],-1)),Uh=te(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Bh={key:1,class:"btn btn-primary",type:"button",disabled:""},Rh=te(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),qh={key:0,class:"modal show d-block modal-bg-transparent",tabindex:"-1",role:"dialog","aria-hidden":"true"},jh={class:"modal-dialog modal-dialog-centered",role:"document"},Nh={class:"modal-content"},zh={class:"modal-header"},Mh=te(()=>e("h5",{class:"modal-title"}," Draw Mouse to Sign Document ",-1)),Hh={class:"modal-body"},Yh={class:"modal-footer bg-transparent"},Wh={key:1,class:"btn btn-primary",type:"button",disabled:""},Gh=te(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),Kh=["disabled"],Zh={key:1,style:{color:"darkred"}},Jh=te(()=>e("span",{class:"float-end"},null,-1)),Xh=te(()=>e("br",null,null,-1)),Qh=te(()=>e("p",{style:{"margin-top":"10px"}},[e("span",{style:{color:"red"}}," Please review and Sign Document")],-1)),ef=te(()=>e("br",null,null,-1)),tf=te(()=>e("p",{style:{"border-bottom":"1px solid #000"}},"Signature will be applied to the following pages",-1)),nf=te(()=>e("p",null,[e("span",{class:"mr-2"},"📄"),l(" Incorporation Form (NNC1) "),e("br"),e("span",null,"We file this with the Companies Registry.")],-1)),sf=te(()=>e("p",null,[e("span",{class:"mr-2"},"📄"),l(" Articles of Association (AA) "),e("p",{class:"ml-6 text-gray-600"},"The Articles of Association is a document that outlines the regulations for a company's operations and the structure of its internal governance.")],-1)),of=te(()=>e("p",{class:"mb-1 flex items-center text-gray-700"},[e("span",{class:"mr-2"},"✔️"),l(" Notice to Business Registration Office (IRBR1) "),e("p",{class:"ml-6 text-gray-600"},"Notify the Inland Revenue for business registration."),e("ul",{class:"ml-10 list-inside list-disc text-gray-600"},[e("li",null,"This makes application for the purpose of business registration."),e("li",null,"Business registration is renewed on an annual basis if elected to obtain 1-year Business Registration Certificate."),e("li",null,"This shows your business address, and the nature of your business.")])],-1)),af=Q({__name:"Sign",setup(a){const o=X(),s=_e.useToast(),t=z(!1),v=z(!1),c=z(null),i=z("");function b(){return h.value?t.value=!0:(i.value="Please select a Founder",t.value=!1)}function y(){c.value.undoSignature()}function _(){c.value.clearSignature()}const h=z(""),d=he(()=>{var f;const r=[],m=((f=o.companyInProgress)==null?void 0:f.company_entity)??[];return m.length&&m.forEach(x=>{const T=x.individual||x.corporate;x.entity_capacity_id.includes(1)&&(T.label=x.entity_type_id==1?`${T.first_name??T.chn_first_name} ${T.last_name??T.chn_last_name}`:`${T.company_name??T.chn_company_name}`,T.company_entity_id=x.id,r.push(T))}),r});ae(async()=>{await J.ProcessKyc()});function p(){const{isEmpty:r,data:m}=c.value.saveSignature();r||(o.signatureImage=m,o.signatureDateSigned=new Date,v.value=!0,B())}async function B(){const r=new FormData;r.append("company_id",o.companyInProgress.id),r.append("company_entity_id",h.value.company_entity_id),r.append("signature",o.signatureImage),r.append("date_signed",o.signatureDateSigned);try{const m=await J.registerSignature(r);s.info("Signature added to founders  <br>  page successfully",{position:"top-right"}),t.value=!1,v.value=!1}catch{s.error("Something went wrong",{position:"top-right"}),t.value=!1,v.value=!1}}function P(){if(!o.signatureImage){s.error("Please add signature first!",{position:"top-right"});return}o.pdfIsSending=!0,setTimeout(()=>{o.pdfAction=!o.pdfAction},500)}return(r,m)=>{const f=Z("VueSignaturePad"),x=Z("v-select");return g(),q(de,null,{main:N(()=>[e("div",null,[U(pt)]),e("div",Lh,[Oh,n(o).pdfIsSending?(g(),w("button",Bh,[Rh,l(" Processing, Please wait.... ")])):(g(),w("button",{key:0,onClick:P,class:"btn btn-primary"},[l(" Proceed to complete Payment "),Uh]))])]),info:N(()=>[t.value?(g(),w("div",qh,[e("div",jh,[e("div",Nh,[e("div",zh,[Mh,e("button",{onClick:m[0]||(m[0]=T=>t.value=!1),type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),e("div",Hh,[U(f,{class:"bg-transparent",height:"300px",width:"100%",ref_key:"signaturePad",ref:c},null,512)]),e("div",Yh,[v.value?(g(),w("button",Wh,[Gh,l(" Saving... ")])):(g(),w("button",{key:0,onClick:p,type:"button",class:"btn btn-primary"},"Save Signature")),e("button",{onClick:_,type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Clear "),e("button",{disabled:v.value,onClick:y,class:"btn btn-warning"},"Undo",8,Kh)])])])])):I("",!0),U(x,{placeholder:"select founder..",modelValue:h.value,"onUpdate:modelValue":m[1]||(m[1]=T=>h.value=T),clearable:!1,options:d.value},null,8,["modelValue","options"]),t.value?I("",!0):(g(),w("p",Zh,u(i.value),1)),e("button",{class:"btn btn-primary mt-3",onClick:b},"Sign Document"),Jh,Xh,Qh,ef,tf,nf,sf,of]),_:1})}}}),lf=ge(af,[["__scopeId","data-v-aa334a0b"]]);var Te={};const rf="@vue-stripe/vue-stripe",cf="4.5.0",df="Stripe Checkout & Elements for Vue.js",uf="jofftiquez@gmail.com",_f={build:"rollup -c",lint:"vue-cli-service lint --fix",prebuild:"rimraf dist",test:"jest"},pf="dist/index.js",mf="dist",hf={"@stripe/stripe-js":"^1.13.2","vue-coerce-props":"^1.0.0"},ff={"@babel/cli":"^7.7.5","@babel/core":"^7.7.5","@babel/plugin-proposal-export-default-from":"^7.7.4","@babel/plugin-proposal-optional-chaining":"^7.10.4","@babel/plugin-transform-runtime":"^7.7.5","@babel/preset-env":"^7.7.5","@babel/preset-es2015":"^7.0.0-beta.53","@babel/runtime":"^7.7.5","@rollup/plugin-node-resolve":"^6.0.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"^4.5.10","@vue/eslint-config-standard":"^5.1.2","babel-eslint":"^10.1.0","babel-minify":"^0.5.1","cross-env":"^6.0.3",eslint:"^6.8.0","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.2.2",jest:"^24.9.0","lint-staged":"^9.5.0",rimraf:"^3.0.0",rollup:"^1.27.9","rollup-plugin-babel":"^4.3.3","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-terser":"^5.1.3","rollup-plugin-uglify":"^6.0.3","rollup-plugin-vue":"^5.1.4","vue-template-compiler":"^2.6.11"},yf={url:"https://github.com/vue-stripe/vue-stripe/issues"},gf={"pre-commit":"lint-staged"},vf="https://github.com/vue-stripe/vue-stripe#readme",bf=["vue","vuejs","stripe","checkout","payment"],$f="MIT",Sf={type:"git",url:"git@github.com:vue-stripe/vue-stripe.git"},wf="typings/index.d.ts",xf={name:rf,version:cf,description:df,author:uf,scripts:_f,main:pf,module:mf,dependencies:hf,devDependencies:ff,bugs:yf,gitHooks:gf,homepage:vf,keywords:bf,license:$f,"lint-staged":{"*.{js,jsx,vue}":["vue-cli-service lint","git add"]},repository:Sf,typings:wf};Object.defineProperty(Te,"__esModule",{value:!0});var ze="auto",kf=["auto","bg","cs","da","de","el","en","en-GB","es","es-419","et","fi","fr","fr-CA","hu","id","it","ja","lt","lv","ms","mt","nb","nl","pl","pt","pt-BR","ro","ru","sk","sl","sv","tr","zh","zh-HK","zh-TW"],Cf=["auto","book","donate","pay"],Ef=["required","auto"],Af={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},Ff=xf.version,Re={name:"vue-stripe",version:Ff,url:"https://vuestripe.com",partner_id:"pp_partner_IqtOXpBSuz0IE2"},Pf={install:function(a,o){var s=o.pk,t=o.stripeAccount,v=o.apiVersion,c=o.locale,i=window.Stripe(s,{stripeAccount:t,apiVersion:v,locale:c});i.registerAppInfo(Re),a.prototype.$stripe=i}};function Tf(a,o){return a(o={exports:{}},o.exports),o.exports}var Vf=Tf(function(a){var o=function(s){var t,v=Object.prototype,c=v.hasOwnProperty,i=typeof Symbol=="function"?Symbol:{},b=i.iterator||"@@iterator",y=i.asyncIterator||"@@asyncIterator",_=i.toStringTag||"@@toStringTag";function h(S,$,V,D){var C=$&&$.prototype instanceof f?$:f,O=Object.create(C.prototype),se=new Ee(D||[]);return O._invoke=function(ve,Be,R){var oe=p;return function(we,Fe){if(oe===P)throw new Error("Generator is already running");if(oe===r){if(we==="throw")throw Fe;return Ue()}for(R.method=we,R.arg=Fe;;){var Pe=R.delegate;if(Pe){var me=Oe(Pe,R);if(me){if(me===m)continue;return me}}if(R.method==="next")R.sent=R._sent=R.arg;else if(R.method==="throw"){if(oe===p)throw oe=r,R.arg;R.dispatchException(R.arg)}else R.method==="return"&&R.abrupt("return",R.arg);oe=P;var ee=d(ve,Be,R);if(ee.type==="normal"){if(oe=R.done?r:B,ee.arg===m)continue;return{value:ee.arg,done:R.done}}ee.type==="throw"&&(oe=r,R.method="throw",R.arg=ee.arg)}}}(S,V,se),O}function d(S,$,V){try{return{type:"normal",arg:S.call($,V)}}catch(D){return{type:"throw",arg:D}}}s.wrap=h;var p="suspendedStart",B="suspendedYield",P="executing",r="completed",m={};function f(){}function x(){}function T(){}var H={};H[b]=function(){return this};var ne=Object.getPrototypeOf,$e=ne&&ne(ne(Ae([])));$e&&$e!==v&&c.call($e,b)&&(H=$e);var pe=T.prototype=f.prototype=Object.create(H);function Le(S){["next","throw","return"].forEach(function($){S[$]=function(V){return this._invoke($,V)}})}function Se(S){var $;this._invoke=function(V,D){function C(){return new Promise(function(O,se){(function ve(Be,R,oe,we){var Fe=d(S[Be],S,R);if(Fe.type!=="throw"){var Pe=Fe.arg,me=Pe.value;return me&&typeof me=="object"&&c.call(me,"__await")?Promise.resolve(me.__await).then(function(ee){ve("next",ee,oe,we)},function(ee){ve("throw",ee,oe,we)}):Promise.resolve(me).then(function(ee){Pe.value=ee,oe(Pe)},function(ee){return ve("throw",ee,oe,we)})}we(Fe.arg)})(V,D,O,se)})}return $=$?$.then(C,C):C()}}function Oe(S,$){var V=S.iterator[$.method];if(V===t){if($.delegate=null,$.method==="throw"){if(S.iterator.return&&($.method="return",$.arg=t,Oe(S,$),$.method==="throw"))return m;$.method="throw",$.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var D=d(V,S.iterator,$.arg);if(D.type==="throw")return $.method="throw",$.arg=D.arg,$.delegate=null,m;var C=D.arg;return C?C.done?($[S.resultName]=C.value,$.next=S.nextLoc,$.method!=="return"&&($.method="next",$.arg=t),$.delegate=null,m):C:($.method="throw",$.arg=new TypeError("iterator result is not an object"),$.delegate=null,m)}function qe(S){var $={tryLoc:S[0]};1 in S&&($.catchLoc=S[1]),2 in S&&($.finallyLoc=S[2],$.afterLoc=S[3]),this.tryEntries.push($)}function Ce(S){var $=S.completion||{};$.type="normal",delete $.arg,S.completion=$}function Ee(S){this.tryEntries=[{tryLoc:"root"}],S.forEach(qe,this),this.reset(!0)}function Ae(S){if(S){var $=S[b];if($)return $.call(S);if(typeof S.next=="function")return S;if(!isNaN(S.length)){var V=-1,D=function C(){for(;++V<S.length;)if(c.call(S,V))return C.value=S[V],C.done=!1,C;return C.value=t,C.done=!0,C};return D.next=D}}return{next:Ue}}function Ue(){return{value:t,done:!0}}return x.prototype=pe.constructor=T,T.constructor=x,T[_]=x.displayName="GeneratorFunction",s.isGeneratorFunction=function(S){var $=typeof S=="function"&&S.constructor;return!!$&&($===x||($.displayName||$.name)==="GeneratorFunction")},s.mark=function(S){return Object.setPrototypeOf?Object.setPrototypeOf(S,T):(S.__proto__=T,_ in S||(S[_]="GeneratorFunction")),S.prototype=Object.create(pe),S},s.awrap=function(S){return{__await:S}},Le(Se.prototype),Se.prototype[y]=function(){return this},s.AsyncIterator=Se,s.async=function(S,$,V,D){var C=new Se(h(S,$,V,D));return s.isGeneratorFunction($)?C:C.next().then(function(O){return O.done?O.value:C.next()})},Le(pe),pe[_]="Generator",pe[b]=function(){return this},pe.toString=function(){return"[object Generator]"},s.keys=function(S){var $=[];for(var V in S)$.push(V);return $.reverse(),function D(){for(;$.length;){var C=$.pop();if(C in S)return D.value=C,D.done=!1,D}return D.done=!0,D}},s.values=Ae,Ee.prototype={constructor:Ee,reset:function(S){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Ce),!S)for(var $ in this)$.charAt(0)==="t"&&c.call(this,$)&&!isNaN(+$.slice(1))&&(this[$]=t)},stop:function(){this.done=!0;var S=this.tryEntries[0].completion;if(S.type==="throw")throw S.arg;return this.rval},dispatchException:function(S){if(this.done)throw S;var $=this;function V(Be,R){return O.type="throw",O.arg=S,$.next=Be,R&&($.method="next",$.arg=t),!!R}for(var D=this.tryEntries.length-1;D>=0;--D){var C=this.tryEntries[D],O=C.completion;if(C.tryLoc==="root")return V("end");if(C.tryLoc<=this.prev){var se=c.call(C,"catchLoc"),ve=c.call(C,"finallyLoc");if(se&&ve){if(this.prev<C.catchLoc)return V(C.catchLoc,!0);if(this.prev<C.finallyLoc)return V(C.finallyLoc)}else if(se){if(this.prev<C.catchLoc)return V(C.catchLoc,!0)}else{if(!ve)throw new Error("try statement without catch or finally");if(this.prev<C.finallyLoc)return V(C.finallyLoc)}}}},abrupt:function(S,$){for(var V=this.tryEntries.length-1;V>=0;--V){var D=this.tryEntries[V];if(D.tryLoc<=this.prev&&c.call(D,"finallyLoc")&&this.prev<D.finallyLoc){var C=D;break}}C&&(S==="break"||S==="continue")&&C.tryLoc<=$&&$<=C.finallyLoc&&(C=null);var O=C?C.completion:{};return O.type=S,O.arg=$,C?(this.method="next",this.next=C.finallyLoc,m):this.complete(O)},complete:function(S,$){if(S.type==="throw")throw S.arg;return S.type==="break"||S.type==="continue"?this.next=S.arg:S.type==="return"?(this.rval=this.arg=S.arg,this.method="return",this.next="end"):S.type==="normal"&&$&&(this.next=$),m},finish:function(S){for(var $=this.tryEntries.length-1;$>=0;--$){var V=this.tryEntries[$];if(V.finallyLoc===S)return this.complete(V.completion,V.afterLoc),Ce(V),m}},catch:function(S){for(var $=this.tryEntries.length-1;$>=0;--$){var V=this.tryEntries[$];if(V.tryLoc===S){var D=V.completion;if(D.type==="throw"){var C=D.arg;Ce(V)}return C}}throw new Error("illegal catch attempt")},delegateYield:function(S,$,V){return this.delegate={iterator:Ae(S),resultName:$,nextLoc:V},this.method==="next"&&(this.arg=t),m}},s}(a.exports);try{regeneratorRuntime=o}catch{Function("r","regeneratorRuntime = r")(o)}}),ce=Vf;function nt(a){return(nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(a)}var st,ot="https://js.stripe.com/v3",If=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Ye="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Df=function(){for(var a=document.querySelectorAll('script[src^="'.concat(ot,'"]')),o=0;o<a.length;o++){var s=a[o];if(If.test(s.src))return s}return null},Lf=function(a){var o=a&&!a.advancedFraudSignals?"?advancedFraudSignals=false":"",s=document.createElement("script");s.src="".concat(ot).concat(o);var t=document.head||document.body;if(!t)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return t.appendChild(s),s},Of=function(a,o){a&&a._registerWrapper&&a._registerWrapper({name:"stripe-js",version:"1.13.2",startTime:o})},Me=null,Uf=function(a){return Me!==null?Me:Me=new Promise(function(o,s){if(typeof window<"u")if(window.Stripe&&a&&console.warn(Ye),window.Stripe)o(window.Stripe);else try{var t=Df();t&&a?console.warn(Ye):t||(t=Lf(a)),t.addEventListener("load",function(){window.Stripe?o(window.Stripe):s(new Error("Stripe.js not available"))}),t.addEventListener("error",function(){s(new Error("Failed to load Stripe.js"))})}catch(v){return void s(v)}else o(null)})},Bf=function(a,o,s){if(a===null)return null;var t=a.apply(void 0,o);return Of(t,s),t},Rf=function(a){var o=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(a),`
`);if(a===null||nt(a)!=="object")throw new Error(o);if(Object.keys(a).length===1&&typeof a.advancedFraudSignals=="boolean")return a;throw new Error(o)},it=!1,ke=function(){for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];it=!0;var t=Date.now();return Uf(st).then(function(v){return Bf(v,o,t)})};ke.setLoadParameters=function(a){if(it)throw new Error("You cannot change load parameters after calling loadStripe");st=Rf(a)};/**
 * vue-coerce-props v1.0.0
 * (c) 2018 Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */var qf={beforeCreate:function(){var a=this.$options.props;a&&(this._$coertions=Object.keys(a).filter(function(o){return a[o].coerce}).map(function(o){return[o,a[o].coerce]}))},computed:{$coerced:function(){var a=this;return this._$coertions.reduce(function(o,s){var t=s[0],v=s[1];return o[t]=v.call(a,a.$props[t]),o},{})}}},jf={pk:{type:String,required:!0},mode:{type:String,validator:function(a){return["payment","subscription"].includes(a)}},lineItems:{type:Array,default:void 0},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(a){return Cf.includes(a)}},billingAddressCollection:{type:String,default:"auto",validator:function(a){return Ef.includes(a)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:ze,coerce:function(a){return kf.includes(a)?a:(console.warn("VueStripe Warning: '".concat(a,"' is not supported by Stripe yet. Falling back to default '").concat(ze,"'.")),ze)}},shippingAddressCollection:{type:Object,validator:function(a){return Object.prototype.hasOwnProperty.call(a,"allowedCountries")}},disableAdvancedFraudDetection:{type:Boolean},stripeOptions:{type:Object,default:null}},Nf={props:jf,mixins:[qf],render:function(a){return a},methods:{redirectToCheckout:function(){var a,o,s;return ce.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.$emit("loading",!0),this.disableAdvancedFraudDetection&&ke.setLoadParameters({advancedFraudSignals:!1}),a={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},t.next=6,ce.awrap(ke(this.pk,a));case 6:if((o=t.sent).registerAppInfo(Re),!this.sessionId){t.next=11;break}return o.redirectToCheckout({sessionId:this.sessionId}),t.abrupt("return");case 11:if(!this.lineItems||!this.lineItems.length||this.mode){t.next=14;break}return console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode"),t.abrupt("return");case 14:return s={billingAddressCollection:this.billingAddressCollection,cancelUrl:this.cancelUrl,clientReferenceId:this.clientReferenceId,customerEmail:this.customerEmail,items:this.items,lineItems:this.lineItems,locale:this.$coerced.locale,mode:this.mode,shippingAddressCollection:this.shippingAddressCollection,submitType:this.submitType,successUrl:this.successUrl},t.abrupt("return",o.redirectToCheckout(s));case 18:t.prev=18,t.t0=t.catch(0),console.error(t.t0),this.$emit("error",t.t0);case 22:case"end":return t.stop()}},null,this,[[0,18]])}}};function zf(a,o,s){return o in a?Object.defineProperty(a,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[o]=s,a}var Mf=zf;function We(a,o){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);o&&(t=t.filter(function(v){return Object.getOwnPropertyDescriptor(a,v).enumerable})),s.push.apply(s,t)}return s}function Hf(a){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?We(Object(s),!0).forEach(function(t){Mf(a,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):We(Object(s)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(s,t))})}return a}var Yf="card",Wf={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},elementsOptions:{type:Object,default:function(){return{}}},tokenData:{type:Object,default:function(){return{}}},disableAdvancedFraudDetection:{type:Boolean},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return Af}},value:{type:String,default:void 0},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(a){return["solid","default"].includes(a)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,element:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},mounted:function(){var a,o,s=this;return ce.async(function(t){for(;;)switch(t.prev=t.next){case 0:return this.disableAdvancedFraudDetection&&ke.setLoadParameters({advancedFraudSignals:!1}),a={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},o={classes:this.classes,style:this.elementStyle,value:this.value,hidePostalCode:this.hidePostalCode,iconStyle:this.iconStyle,hideIcon:this.hideIcon,disabled:this.disabled},t.next=5,ce.awrap(ke(this.pk,a));case 5:this.stripe=t.sent,this.stripe.registerAppInfo(Re),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(Yf,o),this.element.mount("#stripe-element-mount-point"),this.element.on("change",function(v){var c=document.getElementById("stripe-element-errors");v.error?c.textContent=v.error.message:c.textContent="",s.onChange(v)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(v){var c,i,b,y;return ce.async(function(_){for(;;)switch(_.prev=_.next){case 0:return _.prev=0,s.$emit("loading",!0),v.preventDefault(),c=Hf({},s.element),s.amount&&(c.amount=s.amount),_.next=7,ce.awrap(s.stripe.createToken(c,s.tokenData));case 7:if(i=_.sent,b=i.token,!(y=i.error)){_.next=15;break}return document.getElementById("stripe-element-errors").textContent=y.message,s.$emit("error",y),_.abrupt("return");case 15:s.$emit("token",b),_.next=22;break;case 18:_.prev=18,_.t0=_.catch(0),console.error(_.t0),s.$emit("error",_.t0);case 22:return _.prev=22,s.$emit("loading",!1),_.finish(22);case 25:case"end":return _.stop()}},null,null,[[0,18,22,25]])});case 17:case"end":return t.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},unmount:function(){this.element.unmount()},update:function(a){this.element.update(a)},onChange:function(a){this.$emit("element-change",a)},onReady:function(a){this.$emit("element-ready",a)},onFocus:function(a){this.$emit("element-focus",a)},onBlur:function(a){this.$emit("element-blur",a)},onEscape:function(a){this.$emit("element-escape",a)},onClick:function(a){this.$emit("element-click",a)}}};function at(a,o,s,t,v,c,i,b,y,_){typeof i!="boolean"&&(y=b,b=i,i=!1);const h=typeof s=="function"?s.options:s;let d;if(a&&a.render&&(h.render=a.render,h.staticRenderFns=a.staticRenderFns,h._compiled=!0,v&&(h.functional=!0)),t&&(h._scopeId=t),c?(d=function(p){(p=p||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(p=__VUE_SSR_CONTEXT__),o&&o.call(this,y(p)),p&&p._registeredComponents&&p._registeredComponents.add(c)},h._ssrRegister=d):o&&(d=i?function(p){o.call(this,_(p,this.$root.$options.shadowRoot))}:function(p){o.call(this,b(p))}),d)if(h.functional){const p=h.render;h.render=function(B,P){return d.call(P),p(B,P)}}else{const p=h.beforeCreate;h.beforeCreate=p?[].concat(p,d):[d]}return s}const Gf=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function lt(a){return(o,s)=>Kf(o,s)}let He;const Ge={};function Kf(a,o){const s=Gf?o.media||"default":a,t=Ge[s]||(Ge[s]={ids:new Set,styles:[]});if(!t.ids.has(a)){t.ids.add(a);let v=o.source;if(o.map&&(v+=`
/*# sourceURL=`+o.map.sources[0]+" */",v+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(o.map))))+" */"),t.element||(t.element=document.createElement("style"),t.element.type="text/css",o.media&&t.element.setAttribute("media",o.media),He===void 0&&(He=document.head||document.getElementsByTagName("head")[0]),He.appendChild(t.element)),"styleSheet"in t.element)t.styles.push(v),t.element.styleSheet.cssText=t.styles.filter(Boolean).join(`
`);else{const c=t.ids.size-1,i=document.createTextNode(v),b=t.element.childNodes;b[c]&&t.element.removeChild(b[c]),b.length?t.element.insertBefore(i,b[c]):t.element.appendChild(i)}}}const Zf=Wf;var rt=function(){var a=this.$createElement,o=this._self._c||a;return o("div",[o("form",{attrs:{id:"stripe-element-form"}},[o("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[o("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),o("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},Jf=[];rt._withStripped=!0;const Xf=function(a){a&&a("data-v-4dd8360e_0",{source:`





















































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement[data-v-4dd8360e] {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.StripeElement--focus[data-v-4dd8360e] {
  box-shadow: 0 1px 3px 0 #cfd7df;
}
.StripeElement--invalid[data-v-4dd8360e] {
  border-color: #fa755a;
}
.StripeElement--webkit-autofill[data-v-4dd8360e] {
  background-color: #fefde5 !important;
}
.hide[data-v-4dd8360e] {
  display: none;
}
`,map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Card.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsPA;;;EAGA;AACA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,aAAA;AACA",file:"Card.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-element-form">
      <div id="stripe-element-mount-point" />
      <slot name="stripe-element-errors">
        <div
          id="stripe-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  DEFAULT_ELEMENT_STYLE,
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'card';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    elementsOptions: {
      type: Object,
      default: () => ({}),
    },
    tokenData: {
      type: Object,
      default: () => ({}),
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
    // element specific options
    classes: {
      type: Object,
      default: () => ({}),
    },
    elementStyle: {
      type: Object,
      default: () => (DEFAULT_ELEMENT_STYLE),
    },
    value: {
      type: String,
      default: undefined,
    },
    hidePostalCode: Boolean,
    iconStyle: {
      type: String,
      default: 'default',
      validator: value => ['solid', 'default'].includes(value),
    },
    hideIcon: Boolean,
    disabled: Boolean,
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
      card: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById('stripe-element-mount-point').innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) loadStripe.setLoadParameters({ advancedFraudSignals: false });

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };
    const createOptions = {
      classes: this.classes,
      style: this.elementStyle,
      value: this.value,
      hidePostalCode: this.hidePostalCode,
      iconStyle: this.iconStyle,
      hideIcon: this.hideIcon,
      disabled: this.disabled,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);
    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, createOptions);
    this.element.mount('#stripe-element-mount-point');

    this.element.on('change', (event) => {
      var displayError = document.getElementById('stripe-element-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async (event) => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const data = {
          ...this.element,
        };
        if (this.amount) data.amount = this.amount;
        const { token, error } = await this.stripe.createToken(data, this.tokenData);
        if (error) {
          const errorElement = document.getElementById('stripe-element-errors');
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        }
        this.$emit('token', token);
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn('This method will currently not work on iOS 13+ due to a system limitation.');
      this.element.focus();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element
     * @param {string} opts.classes.base The base class applied to the container. Defaults to StripeElement.
     * @param {string} opts.classes.complete The class name to apply when the Element is complete. Defaults to StripeElement--complete.
     * @param {string} opts.classes.empty The class name to apply when the Element is empty. Defaults to StripeElement--empty.
     * @param {string} opts.classes.focus The class name to apply when the Element is focused. Defaults to StripeElement--focus.
     * @param {string} opts.classes.invalid The class name to apply when the Element is invalid. Defaults to StripeElement--invalid.
     * @param {string} opts.classes.webkitAutoFill The class name to apply when the Element has its value autofilled by the browser (only on Chrome and Safari). Defaults to StripeElement--webkit-autofill.
     * @param {Object} opts.style Customize the appearance of this element using CSS properties passed in a Style object.
     * @param {string} opts.value A pre-filled set of values to include in the input (e.g., {postalCode: '94110'}). Note that sensitive card information (card number, CVC, and expiration date) cannot be pre-filled
     * @param {boolean} opts.hidePostalCode Hide the postal code field. Default is false. If you are already collecting a full billing address or postal code elsewhere, set this to true.
     * @param {string} opts.iconStyle Appearance of the icon in the Element. Either solid or default.
     * @param {boolean} opts.hideIcon Hides the icon in the Element. Default is false.
     * @param {boolean} opts.disabled Applies a disabled state to the Element such that user input is not accepted. Default is false.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

.hide {
  display: none;
}
</style>
`]},media:void 0})},Qf="data-v-4dd8360e",ey=at({render:rt,staticRenderFns:Jf},Xf,Zf,Qf,!1,void 0,!1,lt,void 0,void 0);var ty="payment",ny={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},elementsOptions:{type:Object,required:!0,default:function(){return{}}},confirmParams:{type:Object,required:!0,default:function(){return{}}},redirect:{type:String,default:"always"},createOptions:{type:Object,default:function(){return{}}},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},disableAdvancedFraudDetection:{type:Boolean}},data:function(){return{loading:!1,stripe:null,elements:null,element:null}},computed:{form:function(){return document.getElementById("stripe-payment-element-form")}},mounted:function(){var a,o=this;return ce.async(function(s){for(;;)switch(s.prev=s.next){case 0:return this.disableAdvancedFraudDetection&&ke.setLoadParameters({advancedFraudSignals:!1}),a={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},s.next=4,ce.awrap(ke(this.pk,a));case 4:this.stripe=s.sent,this.stripe.registerAppInfo(Re),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(ty,this.createOptions),this.element.mount("#stripe-payment-element-mount-point"),this.element.on("change",function(t){var v=document.getElementById("stripe-payment-element-errors");t.error?v.textContent=t.error.message:v.textContent="",o.onChange(t)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(t){var v,c,i;return ce.async(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,o.$emit("loading",!0),t.preventDefault(),b.next=5,ce.awrap(o.stripe.confirmPayment({elements:o.elements,confirmParams:o.confirmParams,redirect:o.redirect}));case 5:if(v=b.sent,c=v.error,i=v.paymentIntent,!c){b.next=15;break}return document.getElementById("stripe-payment-element-errors").textContent=c.message,o.$emit("error",c),b.abrupt("return");case 15:i&&o.$emit("confirmed",i);case 16:b.next=22;break;case 18:b.prev=18,b.t0=b.catch(0),console.error(b.t0),o.$emit("error",b.t0);case 22:return b.prev=22,o.$emit("loading",!1),b.finish(22);case 25:case"end":return b.stop()}},null,null,[[0,18,22,25]])});case 16:case"end":return s.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},collapse:function(){this.element.collapse()},getElement:function(){this.element.getElement()},unmount:function(){this.element.unmount()},update:function(a){this.element.update(a)},onChange:function(a){this.$emit("element-change",a)},onReady:function(a){this.$emit("element-ready",a)},onFocus:function(a){this.$emit("element-focus",a)},onBlur:function(a){this.$emit("element-blur",a)},onEscape:function(a){this.$emit("element-escape",a)},onClick:function(a){this.$emit("element-click",a)}}};const sy=ny;var ct=function(){var a=this.$createElement,o=this._self._c||a;return o("div",[o("form",{attrs:{id:"stripe-payment-element-form"}},[o("div",{attrs:{id:"stripe-payment-element-mount-point"}}),this._v(" "),this._t("stripe-payment-element-errors",[o("div",{attrs:{id:"stripe-payment-element-errors",role:"alert"}})]),this._v(" "),o("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},oy=[];ct._withStripped=!0;const iy=function(a){a&&a("data-v-171d7aec_0",{source:`












































































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide[data-v-171d7aec] {
  display: none;
}
`,map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Payment.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6QA;;;EAGA;AACA;EACA,aAAA;AACA",file:"Payment.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-payment-element-form">
      <div id="stripe-payment-element-mount-point" />
      <slot name="stripe-payment-element-errors">
        <div
          id="stripe-payment-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'payment';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    elementsOptions: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    confirmParams: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    redirect: {
      type: String,
      default: 'always',
    },
    createOptions: {
      type: Object,
      default: () => ({}),
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-payment-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById(
    //     'stripe-payment-element-mount-point',
    //   ).innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) {
      loadStripe.setLoadParameters({ advancedFraudSignals: false });
    }

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);

    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, this.createOptions);
    this.element.mount('#stripe-payment-element-mount-point');

    this.element.on('change', event => {
      var displayError = document.getElementById(
        'stripe-payment-element-errors',
      );
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async event => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const { error, paymentIntent } = await this.stripe.confirmPayment({
          elements: this.elements,
          confirmParams: this.confirmParams,
          redirect: this.redirect,
        });

        // if the response is an error
        if (error) {
          const errorElement = document.getElementById(
            'stripe-payment-element-errors',
          );
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        } else if (paymentIntent) {
          // if the user has passed prop redirect="if_required"
          // and the payment confirmation was successful
          // and the payment method is not forced to redirect
          // then stripe.confirmPayment resolves with a paymentIntent
          // so we sould pass it back up to the caller for consumption
          // https://stripe.com/docs/js/payment_intents/confirm_payment?type=pii#confirm_payment_intent-options-redirect
          this.$emit('confirmed', paymentIntent);
        }
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn(
        'This method will currently not work on iOS 13+ due to a system limitation.',
      );
      this.element.focus();
    },
    /**
     * Collapses the Payment Element into a row of payment method tabs
     * @return {void}
     */
    collapse () {
      this.element.collapse();
    },
    /**
     * Retrieves a previously created element
     */
    getElement () {
      this.element.getElement();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element. See official docs for more detail: https://site-admin.stripe.com/docs/js/elements_object/update_payment_element
     * @param {string} opts.business.name  Information about your business that will be displayed in the Payment Element. This information will be retrieved from the Stripe account if not provided.
     * @param {array} opts.paymentMethodOrder Sets order in which payment methods are displayed. Otherwise payment methods are ordered dynamically to optimize for conversion.
     * @param {string | Object} opts.fields.billingDetails The Payment Element automatically creates input fields to collect required billing information for some payment methods like SEPA debit. Specify 'never' to avoid collecting billing details in the Payment Element if you're collecting them outside of the Payment Element.
     * @param {string} opts.fields.billingDetails.name Specify 'never' to avoid collecting a name as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.email Specify 'never' to avoid collecting an email address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.phone Specify 'never' to avoid collecting a phone number as part of the billing details in the Payment Element.
     * @param {string | Object} opts.fields.billingDetails.address Specify 'never' to avoid collecting an address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line1 Specify 'never' to avoid collecting an address line1 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line2 Specify 'never' to avoid collecting an address line2 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.city Specify 'never' to avoid collecting an address city as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.state Specify 'never' to avoid collecting an address state as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.country Specify 'never' to avoid collecting an address country as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.postalCode Specify 'never' to avoid collecting an address postal code as part of the billing details in the Payment Element.
     * @param {string} opts.fields.terms The Payment Element automatically displays mandates or other legal agreements when required by the payment method, like SEPA debit. Specify 'never' to never show legal agreements.
     * @param {string} opts.fields.terms.auBecsDebit Specify 'never' to never show legal agreements for the BECS Debit payment method.
     * @param {string} opts.fields.terms.bancontact Specify 'never' to never show legal agreements for the Bancontact payment method.
     * @param {string} opts.fields.terms.card Specify 'never' to never show legal agreements for the credit card payment method.
     * @param {string} opts.fields.terms.ideal Specify 'never' to never show legal agreements for the iDEAL payment method.
     * @param {string} opts.fields.terms.sepaDebit Specify 'never' to never show legal agreements for the SEPA Debit payment method.
     * @param {string} opts.fields.terms.sofort Specify 'never' to never show legal agreements for the SOFORT payment method.
     * @param {string} opts.fields.terms.usBankAccount Specify 'never' to never show legal agreements for the US Bank accounts payment method.
     * @param {string} opts.wallets Specify 'never' to never show digital wallet payment methods like Apple Pay and Google Pay.
     * @param {string} opts.wallets.applePay Specify 'never' to never show the Apple Pay digital wallet payment method.
     * @param {string} opts.wallets.googlePay Specify 'never' to never show the Google Pay digital wallet payment method.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide {
  display: none;
}
</style>
`]},media:void 0})},ay=at({render:ct,staticRenderFns:oy},iy,sy,"data-v-171d7aec",!1,void 0,!1,lt,void 0,void 0);var ly={install:function(a,o){var s,t,v,c,i,b,y;return ce.async(function(_){for(;;)switch(_.prev=_.next){case 0:s=o.pk,t=o.stripeAccount,v=o.apiVersion,c=o.locale,i=o.elementsOptions,(b=window.Stripe(s,{stripeAccount:t,apiVersion:v,locale:c})).registerAppInfo(Re),y=b.elements(i),a.prototype.$stripe=b,a.prototype.$stripeElements=y;case 6:case"end":return _.stop()}})}};Te.StripeCheckout=Nf,Te.StripeElementCard=ey,Te.StripeElementPayment=ay,Te.StripeElementsPlugin=ly,Te.StripePlugin=Pf;const re=a=>(fe("data-v-a0e3274f"),a=a(),ye(),a),ry={key:0,class:"row justify-content-center"},cy=re(()=>e("div",{id:"complycube-mount"},null,-1)),dy={class:"alert alert-success text-center",role:"alert"},uy=re(()=>e("i",{style:{"font-size":"2.56rem"},class:"bi bi-check-circle"},null,-1)),_y=re(()=>e("h5",null," Payment Completed ",-1)),py=re(()=>e("p",null,"We have received your request, please exercise patience while we setup your company",-1)),my=["href"],hy={key:1},fy={key:0,class:"text-center text-danger mt-5"},yy=re(()=>e("strong",null,"Error!",-1)),gy={key:1,class:"row justify-content-center"},vy={id:"payment-form"},by=re(()=>e("div",{class:"row my-2"},[e("div",{class:"col-12"},[e("label",{for:"",class:"form-label"},"Card holder's name"),e("input",{type:"text",class:"form-control",placeholder:"Full name on Card"})])],-1)),$y=re(()=>e("div",{id:"payment-element"},null,-1)),Sy={key:0,class:"form-check"},wy=re(()=>e("input",{class:"form-check-input exemption",type:"checkbox",value:"",id:"checker"},null,-1)),xy=re(()=>e("label",{class:"form-check-label",for:"checker"},[e("div",{class:"fw-bold"}," Securely save my information for 1-click checkout "),e("span",null," Pay faster on Stripe Atlas and everywhere Link is accepted ")],-1)),ky=[wy,xy],Cy={key:1,class:"small my-3"},Ey={key:2,id:"submit"},Ay=re(()=>e("div",{class:"spinner hidden",id:"spinner"},null,-1)),Fy=re(()=>e("span",{id:"button-text"},"Pay now",-1)),Py=[Ay,Fy],Ty={key:3,class:"small mt-3"},Vy=re(()=>e("div",{id:"payment-message",class:"hidden"},null,-1)),Iy="pk_test_51P7LhqRxBSKsFyqbPdmjZpG4tFsnyLZEV6Tn38aic7H4oeWOSub5gTRnjF4vgdRbBJutMM0G3d2x3c9VFz2g1dkX00bPRK5pYT",Dy=Q({__name:"Pay",setup(a){const o=X(),s=he(()=>{var r,m;return(m=(r=o.companyInProgress)==null?void 0:r.billing)==null?void 0:m.status}),t=Stripe(Iy),v=z(!1),c=z(!1);let i="",b;const y=[{id:"xl-tshirt",plan_id:1}];ae(async()=>{d();try{c.value=!1;const{data:P}=await J.paymentIntent(y);i=P.client_secret,P!=null&&P.client_secret&&(v.value=!0),b=t.elements({clientSecret:i});const r={layout:"tabs"};b.create("payment",r).mount("#payment-element"),document.querySelector("#payment-form"),document.addEventListener("submit",h)}catch{c.value=!0}});const _=he(()=>"http://127.0.0.1:5173/kcy/verifications");async function h(P){P.preventDefault(),B(!0);const{error:r}=await t.confirmPayment({elements:b,confirmParams:{return_url:"http://127.0.0.1:5173/kcy/verifications"}});r.type==="card_error"||r.type==="validation_error"?p(r.message):p("An unexpected error occurred."),B(!1)}async function d(){const P=new URLSearchParams(window.location.search).get("payment_intent_client_secret");if(!P)return;const{paymentIntent:r}=await t.retrievePaymentIntent(P);switch(r.status){case"succeeded":p("Payment succeeded!");break;case"processing":p("Your payment is processing.");break;case"requires_payment_method":p("Your payment was not successful, please try again.");break;default:p("Something went wrong.");break}}function p(P){const r=document.querySelector("#payment-message");r.classList.remove("hidden"),r.textContent=P,setTimeout(function(){r.classList.add("hidden"),r.textContent=""},4e3)}function B(P){P?(document.querySelector("#submit").disabled=!0,document.querySelector("#spinner").classList.remove("hidden"),document.querySelector("#button-text").classList.add("hidden")):(document.querySelector("#submit").disabled=!1,document.querySelector("#spinner").classList.add("hidden"),document.querySelector("#button-text").classList.remove("hidden"))}return(P,r)=>(g(),q(de,null,{main:N(()=>[s.value?(g(),w("div",ry,[cy,e("div",dy,[uy,_y,py,e("small",null,[l("If you have not completed your KYC, please "),e("a",{href:_.value}," click here ",8,my)])])])):(g(),w("div",hy,[c.value?(g(),w("div",fy,[yy,l(" loading payment information, please reload page. ")])):I("",!0),v.value?(g(),w("div",gy,[e("form",vy,[by,$y,v.value?(g(),w("div",Sy,ky)):I("",!0),v.value?(g(),w("div",Cy," To pay your company formation fee, make sure you're not using an anonymous IP address or a VPN. ")):I("",!0),v.value?(g(),w("button",Ey,Py)):I("",!0),v.value?(g(),w("div",Ty," By confirming your payment, you allow Stripe Atlas to charge you for this payment and the future payments in accordance with their terms. ")):I("",!0),Vy])])):I("",!0)]))]),info:N(()=>[]),_:1}))}}),Ly=ge(Dy,[["__scopeId","data-v-a0e3274f"]]),Oy={key:1},Ky=Q({__name:"StartCompany_index",setup(a){Je();const o=Ze();et(),tt();const s=X(),t=z(!0);ae(async()=>{await s.getCompanyInProgress(),t.value=!1,s.getBusinessNatures(),s.getCountries(),v()});function v(){var i;const c=((i=s.companyInProgress)==null?void 0:i.names)??[];c.length&&(c.find(d=>d.choice_level==1),c.find(d=>d.choice_level==2)&&(o.isSecond=!0),c.find(d=>d.choice_level==3)&&(o.isThird=!0),c.find(d=>d.choice_level==4)&&(o.isForth=!0),c.find(d=>d.choice_level==5)&&(o.isFifth=!0))}return(c,i)=>t.value?(g(),q(dt,{key:0})):(g(),w("div",Oy,[n(s).currentStage==2?(g(),q(es,{key:0})):I("",!0),n(s).currentStage==3?(g(),q(Cs,{key:1})):I("",!0),n(s).currentStage==4?(g(),q(Qs,{key:2})):I("",!0),n(s).currentStage==5?(g(),q(Xl,{key:3})):I("",!0),n(s).currentStage==6?(g(),q(ec,{key:4})):I("",!0),n(s).currentStage==7?(g(),q(Pc,{key:5})):I("",!0),n(s).currentStage==8?(g(),q(td,{key:6})):I("",!0),n(s).currentStage==9?(g(),q(qd,{key:7})):I("",!0),n(s).currentStage==10?(g(),q(Dh,{key:8})):I("",!0),n(s).currentStage==11?(g(),q(lf,{key:9})):I("",!0),n(s).currentStage==12?(g(),q(Ly,{key:10})):I("",!0)]))}});export{Ky as default};
