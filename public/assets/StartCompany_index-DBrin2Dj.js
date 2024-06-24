import{u as Z}from"./StartCompany_store-Crp3gC7s.js";import{p as ct}from"./pageLoadingComponent-Cnh3zOiz.js";import{d as J,r as H,k as ie,l as ge,n as Ve,p as je,o as f,q,s as N,b as e,w as x,x as C,e as n,v as F,t as p,y as Q,c as $,f as c,g as I,z as me,A as ee,B,C as Ge,m as dt,D as he,E as fe,_ as ye,F as qe,G as xe,H as Ie}from"./index-C6eV0LR2.js";import{n as Ke,S as ce,d as Ze,f as Je,a as Xe,s as Qe,b as et}from"./StartCompany_template-DCdrU7El.js";import{d as de}from"./index-BTM9KYRX.js";import{a as K}from"./index-heRheSfo.js";import{j as W}from"./maska-Cp-LWreF.js";import{u as ut}from"./vee-validate.esm-CxPZups7.js";import{a as we,c as pt}from"./index.esm-DWxw40V4.js";import{u as _e}from"./useFunctions-DJL75pb0.js";import{B as _t}from"./BasePdf-Dj15sJUL.js";import"./sweetalert2.all-Cq5rX2rr.js";const mt=e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Name"),e("span",null,"Enter your preferred company names in order of priority.")],-1),ht={class:"section"},ft=e("div",{class:"fw-bold"},"Primary Choice",-1),yt=e("div",null,"This is your most preferred company name. Ensure it is the legal name intended for registration. ",-1),vt={class:"row g-2 mt-1"},gt={class:"col-md-6"},bt={class:"text-danger"},$t={class:"col-md-6"},St=e("option",{value:"Limited"},"Limited",-1),wt=e("option",{value:"LIMITED"},"LIMITED",-1),xt=[St,wt],kt={class:"col-md-6"},Ct={class:"text-danger"},Et={class:"col-md-6"},At=e("option",{value:"有限公司"},"有限公司",-1),Ft=[At],Pt={key:0,class:"section"},Tt=e("div",{class:"fw-bolder"},"Secondary Choices",-1),It=e("div",null,"These are alternative names you would consider should your primary choice be unavailable. List them in descending order of preference.",-1),Vt={class:"row g-2 mt-1"},Dt={class:"col-md-6"},Lt={class:"text-danger"},Ot={class:"col-md-6"},Ut=e("option",{value:"Limited"},"Limited",-1),Bt=e("option",{value:"LIMITED"},"LIMITED",-1),Rt=[Ut,Bt],qt={class:"col-md-6"},jt={class:"text-danger"},Nt={class:"col-md-6"},zt=e("option",{value:"有限公司"},"有限公司",-1),Mt=[zt],Ht={class:"p-1 mt-1"},Yt=e("i",{class:"bi bi-x-circle"},null,-1),Wt={key:1,class:"section"},Gt=e("div",{class:"fw-bold"},"Third Choice",-1),Kt=e("div",null,"This is your third choice company name. Ensure it is the legal name intended for registration. ",-1),Zt={class:"row g-2 mt-1"},Jt={class:"col-md-6"},Xt={class:"text-danger"},Qt={class:"col-md-6"},en=e("option",{value:"Limited"},"Limited",-1),tn=e("option",{value:"LIMITED"},"LIMITED",-1),nn=[en,tn],sn={class:"col-md-6"},on={class:"text-danger"},an={class:"col-md-6"},ln=e("option",{value:"有限公司"},"有限公司",-1),rn=[ln],cn={class:"p-1 mt-1"},dn=e("i",{class:"bi bi-x-circle"},null,-1),un={key:2,class:"section"},pn=e("div",{class:"fw-bold"},"Fourth Choice",-1),_n=e("div",null,"This is your fourth company name. Ensure it is the legal name intended for registration. ",-1),mn={class:"row g-2 mt-1"},hn={class:"col-md-6"},fn={class:"text-danger"},yn={class:"col-md-6"},vn=e("option",{value:"Limited"},"Limited",-1),gn=e("option",{value:"LIMITED"},"LIMITED",-1),bn=[vn,gn],$n={class:"col-md-6"},Sn={class:"text-danger"},wn={class:"col-md-6"},xn=e("option",{value:"有限公司"},"有限公司",-1),kn=[xn],Cn={class:"p-1 mt-1"},En=e("i",{class:"bi bi-x-circle"},null,-1),An={key:3,class:"section"},Fn=e("div",{class:"fw-bold"},"Fifth Choice",-1),Pn=e("div",null,"This is your fifth company name. Ensure it is the legal name intended for registration. ",-1),Tn={class:"row g-2 mt-1"},In={class:"col-md-6"},Vn={class:"text-danger"},Dn={class:"col-md-6"},Ln=e("option",{value:"Limited"},"Limited",-1),On=e("option",{value:"LIMITED"},"LIMITED",-1),Un=[Ln,On],Bn={class:"col-md-6"},Rn={class:"text-danger"},qn={class:"col-md-6"},jn=e("option",{value:"有限公司"},"有限公司",-1),Nn=[jn],zn={class:"p-1 mt-1"},Mn=e("i",{class:"bi bi-x-circle"},null,-1),Hn=["disabled"],Yn=e("i",{class:"bi bi-plus-circle"},null,-1),Wn={class:"movement-buttons my-5"},Gn=e("i",{class:"bi bi-arrow-right"},null,-1),Kn={key:1,class:"btn btn-primary",type:"button",disabled:""},Zn=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),Jn=e("section",{class:"section"},[e("div",{class:"fw-bold"}," What are the restrictions on naming my company? "),e("div",null," Your company name should be unique and not be too similar to any existing company registered in Hong Kong. It must end with 'Limited' or ‘有限公司’ for Chinese to signify limited liability and should not contain restricted terms or imply government affiliation without permission. ")],-1),Xn=e("section",{class:"section"},[e("div",{class:"fw-bold"}," Can I include both English and Chinese in my company name? "),e("div",null," Yes, you can register a name in English, Chinese, or both. However, the Chinese name must not be a direct translation of the English name and only Traditional Chinese characters are accepted by the Hong Kong Companies Registry. ")],-1),Qn=e("section",{class:"section"},[e("div",{class:"fw-bold"}," What should I do if my preferred company name is already taken? "),e("div",null," It's advisable to have alternative names ready. You can prioritize your preferred names when filling out this form, and we will register in order of preference. If all listed names are taken, you will be contacted to provide additional names. ")],-1),es=J({__name:"Name",setup(l){const o=de.useToast(),s=Z(),t=Ke();H(""),ie(()=>{t.updateFields(s.companyInProgress)}),console.log(t.choice_level1_eng_name),ge(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});function y(){for(var _ of["isSecond","isThird","isForth","isFifth"])if(!t[_]){t[_]=!0;return}}Ve(()=>{t.choice_level1_chn_name==""&&(t.errors.choice_level1_chn_name="",delete t.errors.choice_level1_chn_name),t.choice_level2_chn_name==""&&(t.errors.choice_level2_chn_name=null,delete t.errors.choice_level2_chn_name),t.choice_level3_chn_name==""&&(t.errors.choice_level3_chn_name=null,delete t.errors.choice_level3_chn_name),t.choice_level4_chn_name==""&&(t.errors.choice_level4_chn_name="",delete t.errors.choice_level4_chn_name),t.choice_level5_chn_name==""&&(t.errors.choice_level5_chn_name="",delete t.errors.choice_level5_chn_name)});function u(_){t[_]=!1,_=="isSecond"&&(t.resetField("choice_level2_eng_name"),t.resetField("choice_level2_chn_name"),delete t.errors.choice_level2_eng_name,delete t.errors.choice_level2_chn_name),_=="isThird"&&(t.resetField("choice_level3_eng_name"),t.resetField("choice_level3_chn_name"),delete t.errors.choice_level3_eng_name,delete t.errors.choice_level3_chn_name),_=="isForth"&&(t.resetField("choice_level4_eng_name"),t.resetField("choice_level4_chn_name"),delete t.errors.choice_level4_eng_name,delete t.errors.choice_level4_chn_name),_=="isFifth"&&(t.resetField("choice_level5_eng_name"),t.resetField("choice_level5_chn_name"),delete t.errors.choice_level5_eng_name,delete t.errors.choice_level5_chn_name)}const i=je({choice_level1_chn_name:"",choice_level2_chn_name:"",choice_level3_chn_name:"",choice_level4_chn_name:"",choice_level5_chn_name:""});ge(()=>[t.choice_level1_chn_name,t.choice_level2_chn_name,t.choice_level3_chn_name,t.choice_level4_chn_name,t.choice_level5_chn_name],()=>{i.choice_level1_chn_name=t.choice_level1_chn_name&&!t.chineseCheck(t.choice_level1_chn_name)?"Please input only Chinese characters":"",i.choice_level2_chn_name=t.choice_level2_chn_name&&!t.chineseCheck(t.choice_level2_chn_name)?"Please input only Chinese characters":"",i.choice_level3_chn_name=t.choice_level3_chn_name&&!t.chineseCheck(t.choice_level3_chn_name)?"Please input only Chinese characters":"",i.choice_level4_chn_name=t.choice_level4_chn_name&&!t.chineseCheck(t.choice_level4_chn_name)?"Please input only Chinese characters":"",i.choice_level5_chn_name=t.choice_level5_chn_name&&!t.chineseCheck(t.choice_level5_chn_name)?"Please input only Chinese characters":""});function v(){var d;if(!t.choice_level1_eng_name&&!t.choice_level1_chn_name){o.error("Please complete Primary choice names",{position:"top-right"});return}if(t.isSecond&&!t.choice_level2_eng_name&&!t.choice_level2_chn_name){o.error("Please complete secondary choice names",{position:"top-right"});return}if(t.isThird&&!t.choice_level3_eng_name&&!t.choice_level3_chn_name){o.error("Please complete third choice names",{position:"top-right"});return}if(t.isForth&&!t.choice_level4_eng_name&&!t.choice_level4_chn_name){o.error("Please complete fourth choice names",{position:"top-right"});return}if(t.isFifth&&!t.choice_level5_eng_name&&!t.choice_level5_chn_name){o.error("Please complete fifth choice names",{position:"top-right"});return}if(console.log(t.errors),Object.keys(t.errors).length>0){o.error("Some fields still have errors",{position:"top-right"});return}if(i.choice_level1_chn_name||i.choice_level2_chn_name||i.choice_level3_chn_name||i.choice_level4_chn_name||i.choice_level5_chn_name){o.default("Some fields still have errors",{position:"top-right"});return}const _=new FormData;_.append("company_id",((d=s.companyInProgress)==null?void 0:d.id)??""),_.append("names[0][eng_name]",t.choice_level1_eng_name),_.append("names[0][prefix]",t.choice_level1_prefix),_.append("names[0][chn_name]",t.choice_level1_chn_name),_.append("names[0][chn_prefix]",t.choice_level1_chn_prefix),_.append("names[0][choice_level]","1"),t.isSecond&&(_.append("names[1][eng_name]",t.choice_level2_eng_name),_.append("names[1][prefix]",t.choice_level2_prefix),_.append("names[1][chn_name]",t.choice_level2_chn_name),_.append("names[1][chn_prefix]",t.choice_level2_chn_prefix),_.append("names[1][choice_level]","2")),t.isThird&&(_.append("names[2][eng_name]",t.choice_level3_eng_name),_.append("names[2][prefix]",t.choice_level3_prefix),_.append("names[2][chn_name]",t.choice_level3_chn_name),_.append("names[2][chn_prefix]",t.choice_level3_chn_prefix),_.append("names[2][choice_level]","3")),t.isForth&&(_.append("names[3][eng_name]",t.choice_level4_eng_name),_.append("names[3][prefix]",t.choice_level4_prefix),_.append("names[3][chn_name]",t.choice_level4_chn_name),_.append("names[3][chn_prefix]",t.choice_level4_chn_prefix),_.append("names[3][choice_level]","4")),t.isFifth&&(_.append("names[4][eng_name]",t.choice_level5_eng_name),_.append("names[4][prefix]",t.choice_level5_prefix),_.append("names[4][chn_name]",t.choice_level5_chn_name),_.append("names[4][chn_prefix]",t.choice_level5_chn_prefix),_.append("names[4][choice_level]","5")),t.isSaving=!0,m(_)}async function m(_){try{await K.registerCompany(_),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(_,d)=>(f(),q(ce,null,{main:N(()=>[mt,e("section",ht,[ft,yt,e("div",vt,[e("div",gt,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level1_eng_name},"form-control"]),"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":d[0]||(d[0]=a=>n(t).choice_level1_eng_name=a),type:"text",placeholder:"This text for English name"},null,2),[[n(W)],[F,n(t).choice_level1_eng_name]]),e("small",bt,p(n(t).errors.choice_level1_eng_name),1)]),e("div",$t,[x(e("select",{"onUpdate:modelValue":d[1]||(d[1]=a=>n(t).choice_level1_prefix=a),class:"form-select"},xt,512),[[Q,n(t).choice_level1_prefix]])]),e("div",kt,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level1_chn_name},"form-control"]),"onUpdate:modelValue":d[2]||(d[2]=a=>n(t).choice_level1_chn_name=a),type:"text",placeholder:"This text for Chinese name"},null,2),[[F,n(t).choice_level1_chn_name]]),e("small",Ct,p(i.choice_level1_chn_name),1)]),e("div",Et,[x(e("select",{"onUpdate:modelValue":d[3]||(d[3]=a=>n(t).choice_level1_chn_prefix=a),class:"form-select"},Ft,512),[[Q,n(t).choice_level1_chn_prefix]])])])]),n(t).isSecond?(f(),$("section",Pt,[Tt,It,e("div",Vt,[e("div",Dt,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level2_eng_name},"form-control"]),"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":d[4]||(d[4]=a=>n(t).choice_level2_eng_name=a),type:"text",placeholder:"This text for English name"},null,2),[[n(W)],[F,n(t).choice_level2_eng_name]]),e("small",Lt,p(n(t).errors.choice_level2_eng_name),1)]),e("div",Ot,[x(e("select",{"onUpdate:modelValue":d[5]||(d[5]=a=>n(t).choice_level2_prefix=a),class:"form-select"},Rt,512),[[Q,n(t).choice_level2_prefix]])]),e("div",qt,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level2_chn_name},"form-control"]),"onUpdate:modelValue":d[6]||(d[6]=a=>n(t).choice_level2_chn_name=a),type:"text",placeholder:"This text for Chinese name"},null,2),[[F,n(t).choice_level2_chn_name]]),e("small",jt,p(i.choice_level2_chn_name),1)]),e("div",Nt,[x(e("select",{"onUpdate:modelValue":d[7]||(d[7]=a=>n(t).choice_level2_chn_prefix=a),class:"form-select"},Mt,512),[[Q,n(t).choice_level2_chn_prefix]])])]),e("div",Ht,[e("button",{onClick:d[8]||(d[8]=a=>u("isSecond")),class:"btn btn-outline-danger me-3"},[Yt,c(" Remove ")])])])):I("",!0),n(t).isThird?(f(),$("section",Wt,[Gt,Kt,e("div",Zt,[e("div",Jt,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level3_eng_name},"form-control"]),"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":d[9]||(d[9]=a=>n(t).choice_level3_eng_name=a),type:"text",placeholder:"This text for English name"},null,2),[[n(W)],[F,n(t).choice_level3_eng_name]]),e("small",Xt,p(n(t).errors.choice_level3_eng_name),1)]),e("div",Qt,[x(e("select",{"onUpdate:modelValue":d[10]||(d[10]=a=>n(t).choice_level3_prefix=a),class:"form-select"},nn,512),[[Q,n(t).choice_level3_prefix]])]),e("div",sn,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level3_chn_name},"form-control"]),"onUpdate:modelValue":d[11]||(d[11]=a=>n(t).choice_level3_chn_name=a),type:"text",placeholder:"This text for Chinese name"},null,2),[[F,n(t).choice_level3_chn_name]]),e("small",on,p(i.choice_level3_chn_name),1)]),e("div",an,[x(e("select",{"onUpdate:modelValue":d[12]||(d[12]=a=>n(t).choice_level3_chn_prefix=a),class:"form-select"},rn,512),[[Q,n(t).choice_level3_chn_prefix]])])]),e("div",cn,[e("button",{onClick:d[13]||(d[13]=a=>u("isThird")),class:"btn btn-outline-danger me-3"},[dn,c(" Remove ")])])])):I("",!0),n(t).isForth?(f(),$("section",un,[pn,_n,e("div",mn,[e("div",hn,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level4_eng_name},"form-control"]),"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":d[14]||(d[14]=a=>n(t).choice_level4_eng_name=a),type:"text",placeholder:"This text for English name"},null,2),[[n(W)],[F,n(t).choice_level4_eng_name]]),e("small",fn,p(n(t).errors.choice_level4_eng_name),1)]),e("div",yn,[x(e("select",{"onUpdate:modelValue":d[15]||(d[15]=a=>n(t).choice_level4_prefix=a),class:"form-select"},bn,512),[[Q,n(t).choice_level4_prefix]])]),e("div",$n,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level4_chn_name},"form-control"]),"onUpdate:modelValue":d[16]||(d[16]=a=>n(t).choice_level4_chn_name=a),type:"text",placeholder:"This text for Chinese name"},null,2),[[F,n(t).choice_level4_chn_name]]),e("small",Sn,p(i.choice_level4_chn_name),1)]),e("div",wn,[x(e("select",{"onUpdate:modelValue":d[17]||(d[17]=a=>n(t).choice_level4_chn_prefix=a),class:"form-select"},kn,512),[[Q,n(t).choice_level4_chn_prefix]])])]),e("div",Cn,[e("button",{onClick:d[18]||(d[18]=a=>u("isForth")),class:"btn btn-outline-danger me-3"},[En,c(" Remove ")])])])):I("",!0),n(t).isFifth?(f(),$("section",An,[Fn,Pn,e("div",Tn,[e("div",In,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level5_eng_name},"form-control"]),"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":d[19]||(d[19]=a=>n(t).choice_level5_eng_name=a),type:"text",placeholder:"This text for English name"},null,2),[[n(W)],[F,n(t).choice_level5_eng_name]]),e("small",Vn,p(n(t).errors.choice_level5_eng_name),1)]),e("div",Dn,[x(e("select",{"onUpdate:modelValue":d[20]||(d[20]=a=>n(t).choice_level5_prefix=a),class:"form-select"},Un,512),[[Q,n(t).choice_level5_prefix]])]),e("div",Bn,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level5_chn_name},"form-control"]),"onUpdate:modelValue":d[21]||(d[21]=a=>n(t).choice_level5_chn_name=a),type:"text",placeholder:"This text for Chinese name"},null,2),[[F,n(t).choice_level5_chn_name]]),e("small",Rn,p(i.choice_level5_chn_name),1)]),e("div",qn,[x(e("select",{"onUpdate:modelValue":d[22]||(d[22]=a=>n(t).choice_level5_chn_prefix=a),class:"form-select"},Nn,512),[[Q,n(t).choice_level5_chn_prefix]])])]),e("div",zn,[e("button",{onClick:d[23]||(d[23]=a=>u("isFifth")),class:"btn btn-outline-danger me-3"},[Mn,c(" Remove ")])])])):I("",!0),e("div",null,[e("button",{disabled:n(t).isThird&&n(t).isForth&&n(t).isFifth,onClick:y,class:"btn btn-outline-success bg-success-subtle"},[c(" Add another name "),Yn],8,Hn)]),e("div",Wn,[n(t).isSaving?(f(),$("button",Kn,[Zn,c(" Saving, Please wait ")])):(f(),$("button",{key:0,onClick:v,class:"btn btn-primary"},[c(" Save & Continue "),Gn]))])]),info:N(()=>[Jn,Xn,Qn]),_:1}))}}),ts=e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Description"),e("span",null,"This information facilitates a faster review process by our team and remains strictly confidential.")],-1),ns={class:"section"},ss=e("div",{class:"fw-bold"},[c("Describe your product or service "),e("span",{class:"text-danger"}," * ")],-1),os=e("div",null,"Please briefly describe the product or service you are developing. Aim for a concise overview in one or two sentences. ",-1),is={class:"row g-2 mt-1"},as={class:"col-md-12"},ls={class:"text-danger"},rs={class:"float-end"},cs={class:"section"},ds=e("div",{class:"fw-bold"},[c("Nature of business "),e("span",{class:"text-danger"}," * ")],-1),us=e("div",null,"Choose the primary category that best represents business nature of your company ",-1),ps={class:"row g-2 mt-1"},_s={class:"col-md-12"},ms={class:"text-danger"},hs={class:"section"},fs=e("div",{class:"fw-bold"},"Website or social media",-1),ys={class:"row g-2 mt-1"},vs={class:"col-md-12"},gs={class:"text-danger"},bs={class:"movement-buttons my-5"},$s=e("i",{class:"bi bi-arrow-left"},null,-1),Ss=e("i",{class:"bi bi-arrow-right"},null,-1),ws={key:1,class:"btn btn-primary",type:"button",disabled:""},xs=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),ks=150,Cs=J({__name:"Description",setup(l){const o=de.useToast(),s=Z(),t=Ze();ie(()=>{t.updateFields(s.companyInProgress)}),ge(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});function y(){s.switchStage("-")}const u=()=>{var _;if(!((_=s.companyInProgress)!=null&&_.id)){o.info("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0)return o.error("Some fields still have errors",{position:"top-right"}),!0;const m=new FormData;m.append("description",t.description),m.append("business_nature_id",t.business_nature_id),m.append("website",t.website),m.append("company_id",s.companyInProgress.id),t.isSaving=!0,i(m)};async function i(m){try{await K.companyDescription(m),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"})}}const v=me(()=>{var m;return((m=t==null?void 0:t.description)==null?void 0:m.length)??0});return(m,_)=>{const d=ee("v-select");return f(),q(ce,null,{main:N(()=>[ts,e("section",ns,[ss,os,e("div",is,[e("div",as,[x(e("textarea",{class:C([{"error-field":n(t).errors.description},"form-control"]),"onUpdate:modelValue":_[0]||(_[0]=a=>n(t).description=a),rows:"5"},null,2),[[F,n(t).description]]),e("small",ls,p(n(t).errors.description),1),e("small",rs,p(v.value)+"/"+p(ks),1)])])]),e("section",cs,[ds,us,e("div",ps,[e("div",_s,[B(d,{class:C({"error-field":n(t).errors.business_nature_id}),modelValue:n(t).business_nature_id,"onUpdate:modelValue":_[1]||(_[1]=a=>n(t).business_nature_id=a),clearable:!0,options:n(s).businessNatures,reduce:a=>a.id,label:"name"},null,8,["class","modelValue","options","reduce"]),e("small",ms,p(n(t).errors.business_nature_id),1)])])]),e("section",hs,[fs,e("div",ys,[e("div",vs,[x(e("input",{class:C([{"error-field":n(t).errors.website},"form-control"]),"onUpdate:modelValue":_[2]||(_[2]=a=>n(t).website=a),type:"text"},null,2),[[F,n(t).website]]),e("small",gs,p(n(t).errors.website),1)])])]),e("div",bs,[e("button",{onClick:y,class:"btn btn-outline-info me-3"},[$s,c(" Back ")]),n(t).isSaving?(f(),$("button",ws,[xs,c(" Saving, Please wait ")])):(f(),$("button",{key:0,onClick:u,class:"btn btn-primary"},[c(" Save & Continue "),Ss]))])]),info:N(()=>[]),_:1})}}}),Es=Ge("address",()=>{const l={flat:we().required(""),building:we().required(""),street:we().required(""),city:we().required(""),state:we().required(""),postal_code:we().required(""),country:we().required("")},{errors:o,handleSubmit:s,defineField:t,setFieldValue:y}=ut({validationSchema:pt(l),initialValues:{flat:"Rooms 502-503, 5th Floor",building:"Wanchai Commercial Centre",street:"194-204 Johnston Road",postal_code:"",country:"Hong Kong",state:"Wanchai",city:"Wanchai"}}),[u]=t("flat"),[i]=t("building"),[v]=t("street"),[m]=t("city"),[_]=t("state"),[d]=t("postal_code"),[a]=t("country");return{flat:u,street:v,city:m,state:_,postal_code:d,country:a,isSaving:!1,building:i,errors:o,handleSubmit:s,setFieldValue:y}}),As=e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Registered Address")],-1),Fs={class:"section"},Ps={class:"row g-3 mt-1"},Ts={class:"col-12"},Is=e("label",{class:"form-label"},[c("Floor／Block "),e("i",{class:"bi bi-lock-fill"})],-1),Vs={class:"text-danger"},Ds={class:"col-12"},Ls=e("label",{class:"form-label"},[c(" Building"),e("i",{class:"bi bi-lock-fill"})],-1),Os={class:"text-danger"},Us={class:"col-12"},Bs=e("label",{class:"form-label"},[c(" Street／Estate／Lot／Village"),e("i",{class:"bi bi-lock-fill"})],-1),Rs={class:"text-danger"},qs={class:"col-12"},js=e("label",{class:"form-label"},[c(" District／City／ Province／State／ Postal Code "),e("i",{class:"bi bi-lock-fill"})],-1),Ns={class:"text-danger"},zs={class:"col-md-12"},Ms=e("label",{class:"form-label"},[c(" Country／Region "),e("i",{class:"bi bi-lock-fill"})],-1),Hs={class:"text-danger"},Ys={class:"movement-buttons my-5"},Ws=e("i",{class:"bi bi-arrow-left"},null,-1),Gs=e("i",{class:"bi bi-arrow-right"},null,-1),Ks={key:1,class:"btn btn-primary",type:"button",disabled:""},Zs=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),Js=e("section",{class:"section"},[e("div",{class:"fw-bold"}," What is registered office address? "),e("div",null," A registered office address is the official legal address of a company where formal communications and notices are sent. ")],-1),Xs=e("section",{class:"section"},[e("div",{class:"fw-bold"}," Why can’t I change the registered office address? "),e("div",null," The registered office address provided is part of our initial services. You can update it to a new address after the incorporation process is completed. ")],-1),Qs=J({__name:"Address",setup(l){const o=de.useToast(),s=Z(),t=Es();function y(){s.switchStage("-")}function u(){t.isSaving=!0,i()}t.handleSubmit(async v=>{var _;if(!((_=s.companyInProgress)!=null&&_.id)){o.default("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0)return o.default("Some fields still have errors",{position:"top-right"}),!0;const m=new FormData;m.append("flat",v.flat),m.append("building",v.building),m.append("street",v.street),m.append("city",v.city),m.append("state",v.state),m.append("postal_code",v.postal_code),m.append("country",v.country),m.append("company_id",s.companyInProgress.id),t.isSaving=!0});async function i(){try{const v=new FormData;v.append("company_id",s.companyInProgress.id),await K.companyAddress(v),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(v,m)=>{const _=ee("v-select");return f(),q(ce,null,{main:N(()=>[As,e("section",Fs,[e("div",Ps,[e("div",Ts,[Is,x(e("input",{disabled:"","onUpdate:modelValue":m[0]||(m[0]=d=>n(t).flat=d),class:"form-control",type:"text",placeholder:"Flat／Floor／Block"},null,512),[[F,n(t).flat]]),e("small",Vs,p(n(t).errors.flat),1)]),e("div",Ds,[Ls,x(e("input",{disabled:"","onUpdate:modelValue":m[1]||(m[1]=d=>n(t).building=d),class:"form-control",type:"text",placeholder:"Street number"},null,512),[[F,n(t).building]]),e("small",Os,p(n(t).errors.building),1)]),e("div",Us,[Bs,x(e("input",{disabled:"","onUpdate:modelValue":m[2]||(m[2]=d=>n(t).street=d),class:"form-control",type:"text",placeholder:"City"},null,512),[[F,n(t).street]]),e("small",Rs,p(n(t).errors.street),1)]),e("div",qs,[js,x(e("input",{disabled:"","onUpdate:modelValue":m[3]||(m[3]=d=>n(t).state=d),class:"form-control",type:"text",placeholder:"State"},null,512),[[F,n(t).state]]),e("small",Ns,p(n(t).errors.state),1)]),e("div",zs,[Ms,B(_,{disabled:!0,placeholder:"select country..",modelValue:n(t).country,"onUpdate:modelValue":m[4]||(m[4]=d=>n(t).country=d),clearable:!1,options:n(s).countries},null,8,["modelValue","options"]),e("small",Hs,p(n(t).errors.country),1)])])]),e("div",Ys,[e("button",{onClick:y,class:"btn btn-outline-info me-3"},[Ws,c(" Back ")]),n(t).isSaving?(f(),$("button",Ks,[Zs,c(" Saving, Please wait ")])):(f(),$("button",{key:0,onClick:u,class:"btn btn-primary"},[c(" Save & Continue "),Gs]))])]),info:N(()=>[Js,Xs]),_:1})}}}),z=l=>(he("data-v-3d1a1780"),l=l(),fe(),l),eo={class:"section"},to=z(()=>e("div",{class:"fw-bold fs-5"},"About your Company ",-1)),no=z(()=>e("div",{class:"fw-bolder"},"Your company name",-1)),so=z(()=>e("span",null,"Enter your legal company name",-1)),oo={class:"row mt-1 g-2"},io={class:"col-12"},ao={class:"text-danger"},lo={class:"col-12"},ro={class:"text-danger"},co={class:"row g-2 section"},uo={class:"col-md-6"},po=z(()=>e("label",{class:"form-label fw-bold"},[c("Date of Incorporation "),e("span",{class:"text-danger"}," * ")],-1)),_o={class:"col-md-6"},mo=z(()=>e("label",{class:"form-label fw-bold"},[c("Company Registration Number "),e("span",{class:"text-danger"}," * ")],-1)),ho={class:"text-danger"},fo={class:"col-md-12"},yo=z(()=>e("label",{class:"form-label"},[c("Country Registered "),e("small",{class:"text-danger"},"*")],-1)),vo={class:"text-danger"},go={class:"col-12"},bo=z(()=>e("label",{class:"form-label fw-bold"},[c("Business nature "),e("span",{class:"text-danger"}," * ")],-1)),$o={class:"text-danger"},So={class:"section"},wo=z(()=>e("div",{class:"fw-bolder"},"Address ",-1)),xo={class:"row g-3 mt-1"},ko={class:"col-12"},Co=z(()=>e("label",{class:"form-label"},[c("Floor／Block "),e("small",{class:"text-danger"},"*")],-1)),Eo={class:"text-danger"},Ao={class:"col-12"},Fo=z(()=>e("label",{class:"form-label"},[c(" Building "),e("small",{class:"text-danger"},"*")],-1)),Po={class:"text-danger"},To={class:"col-12"},Io=z(()=>e("label",{class:"form-label"},[c(" Street／Estate／Lot／Village "),e("small",{class:"text-danger"},"*")],-1)),Vo={class:"text-danger"},Do={class:"col-12"},Lo=z(()=>e("label",{class:"form-label"},[c(" District／City／ Province／State／ Postal Code "),e("small",{class:"text-danger"},"*")],-1)),Oo={class:"text-danger"},Uo={class:"col-md-12"},Bo=z(()=>e("label",{class:"form-label"},[c("Country／Region "),e("small",{class:"text-danger"},"*")],-1)),Ro={class:"text-danger"},qo={class:"row g-2 section"},jo={class:"col-md-12"},No=z(()=>e("label",{class:"fw-bolder"},[c("Authorised Person "),e("span",{class:"text-danger"}," * ")],-1)),zo={class:"row g-2"},Mo={class:"col-md-6"},Ho={class:"text-danger"},Yo={class:"col-md-6"},Wo={class:"text-danger"},Go={class:"col-md-12"},Ko=z(()=>e("label",{class:"fw-bolder"},[c("Phone number "),e("span",{class:"text-danger"}," * ")],-1)),Zo={class:"text-danger"},Jo={class:"col-md-12"},Xo=z(()=>e("label",{class:"fw-bolder"},[c("Email "),e("span",{class:"text-danger"}," * ")],-1)),Qo={class:"text-danger"},ei={class:"col-md-12"},ti=z(()=>e("label",{class:"fw-bolder"},[c("Confirm email "),e("span",{class:"text-danger"}," * ")],-1)),ni={class:"text-danger"},si={key:0,class:"text-danger"},oi={class:"movement-buttons mt-5 mb-4"},ii=z(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),ai=z(()=>e("i",{class:"bi bi-check2"},null,-1)),li={key:1,class:"btn btn-primary",type:"button",disabled:""},ri=z(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),ci=J({__name:"Founders_corporate",setup(l){const o=de.useToast(),s=Z(),t=Je();ie(()=>{t.updateFields(s.companyInProgress)}),ge(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});const y=H(!1);Ve(()=>{t.email&&t.confirm_email&&(t.email!==t.confirm_email&&!t.errors.confirm_email?y.value=!0:y.value=!1)});const u={dropDown:{showDialCodeInSelection:!1,showFlags:!0,showSearchBox:!0,showDialCodeInList:!0},input:{showDialCode:!0,placeholder:"Enter phone",styleClasses:"phone-input-profile",maxlength:12}};Ve(()=>{t.chn_company_name==""&&(t.errors.chn_company_name="",delete t.errors.chn_company_name)});function i(){s.isShowingFoundersForm=!1}const v=t.handleSubmit(_=>{var a;if(console.log("validation passed.."),!((a=s.companyInProgress)!=null&&a.id)){o.error("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(t.phone.length<12){o.error("Error on the phone input <br> must be 12 digits and above",{position:"top-right"});return}if(Object.keys(t.errors).length>0){console.log(t.errors),o.error("Some fields still have errors",{position:"top-right"});return}if(!t.first_name||!t.last_name||!t.phone||!t.email||!t.date_incorporated||!t.company_name||!t.business_nature_id||!t.country_registered||!t.registeration_no){o.error("Some fields still have errors",{position:"top-right"});return}if(!_e.isEmail(t.email)){o.default("Invalid email format",{position:"top-right"});return}if(t.email!==t.confirm_email){o.default("Emails do not match!",{position:"top-right"});return}if(s.checkedEntityCapacity.length==0){o.default("Select at least a Capacity!",{position:"top-right"});return}const d=new FormData;d.append("company_id",s.companyInProgress.id),s.idToEdit&&d.append("company_entity_id",s.idToEdit),d.append("entity_capacity_id",JSON.stringify(s.checkedEntityCapacity)),d.append("entity_type_id",t.entity_type_id),d.append("first_name",t.first_name),d.append("last_name",t.last_name),d.append("email",t.email),d.append("phone",t.phone),d.append("company_name",t.company_name),d.append("chn_company_name",t.chn_company_name),d.append("date_incorporated",t.date_incorporated),d.append("flat",t.flat),d.append("building",t.building),d.append("street",t.street),d.append("state",t.state),d.append("country",t.country),d.append("registeration_no",t.registeration_no),d.append("country_registered",t.country_registered),d.append("business_nature_id",t.business_nature_id),d.append("is_founder",t.is_founder?"1":"0"),t.isSaving=!0,m(d)});async function m(_){try{await K.companyEntity(_),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.getCompanyInProgress("founder"),s.isShowingFoundersForm=!1,t.clearLocalStorage(),t.clearLocalStorage()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(_,d)=>{const a=ee("VueDatePicker"),E=ee("v-select"),V=ee("vue-tel-input");return f(),$("div",null,[e("section",eo,[to,no,so,e("div",oo,[e("div",io,[x(e("input",{class:C([{"error-field":n(t).errors.company_name},"form-control"]),"data-maska":"","data-maska-tokens":"A:[A-Za-z]:multiple|a:[A-Za-z]:multiple 0:[0-9]","onUpdate:modelValue":d[0]||(d[0]=S=>n(t).company_name=S),type:"text",placeholder:"English Name.."},null,2),[[n(W)],[F,n(t).company_name]]),e("small",ao,p(n(t).errors.company_name),1)]),e("div",lo,[x(e("input",{class:C([{"error-field":n(t).errors.chn_company_name},"form-control"]),"onUpdate:modelValue":d[1]||(d[1]=S=>n(t).chn_company_name=S),type:"text",placeholder:"Chinese Name.."},null,2),[[F,n(t).chn_company_name]]),e("small",ro,p(n(t).errors.chn_company_name),1)])])]),e("section",co,[e("div",uo,[po,B(a,{format:n(_e).dateDisplay,"hide-input-icon":"",clearable:!1,"enable-time-picker":!1,"auto-apply":"",modelValue:n(t).date_incorporated,"onUpdate:modelValue":d[2]||(d[2]=S=>n(t).date_incorporated=S)},null,8,["format","modelValue"])]),e("div",_o,[mo,x(e("input",{class:C([{"error-field":n(t).errors.registeration_no},"form-control"]),"onUpdate:modelValue":d[3]||(d[3]=S=>n(t).registeration_no=S),type:"text",placeholder:"Registration no"},null,2),[[F,n(t).registeration_no]]),e("small",ho,p(n(t).errors.registeration_no),1)]),e("div",fo,[yo,B(E,{class:C({"error-field":n(t).errors.country_registered}),placeholder:"select country..",modelValue:n(t).country_registered,"onUpdate:modelValue":d[4]||(d[4]=S=>n(t).country_registered=S),clearable:!1,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",vo,p(n(t).errors.country_registered),1)]),e("div",go,[bo,B(E,{class:C({"error-field":n(t).errors.business_nature_id}),modelValue:n(t).business_nature_id,"onUpdate:modelValue":d[5]||(d[5]=S=>n(t).business_nature_id=S),clearable:!0,options:n(s).businessNatures,reduce:S=>S.id,label:"name"},null,8,["class","modelValue","options","reduce"]),e("small",$o,p(n(t).errors.business_nature_id),1)])]),e("section",So,[wo,e("div",xo,[e("div",ko,[Co,x(e("input",{class:C([{"error-field":n(t).errors.flat},"form-control"]),"onUpdate:modelValue":d[6]||(d[6]=S=>n(t).flat=S),type:"text",placeholder:"Flat／Floor／Block"},null,2),[[F,n(t).flat]]),e("small",Eo,p(n(t).errors.flat),1)]),e("div",Ao,[Fo,x(e("input",{class:C([{"error-field":n(t).errors.building},"form-control"]),"onUpdate:modelValue":d[7]||(d[7]=S=>n(t).building=S),type:"text",placeholder:"building number"},null,2),[[F,n(t).building]]),e("small",Po,p(n(t).errors.building),1)]),e("div",To,[Io,x(e("input",{class:C([{"error-field":n(t).errors.street},"form-control"]),"onUpdate:modelValue":d[8]||(d[8]=S=>n(t).street=S),type:"text",placeholder:"Street"},null,2),[[F,n(t).street]]),e("small",Vo,p(n(t).errors.street),1)]),e("div",Do,[Lo,x(e("input",{class:C([{"error-field":n(t).errors.state},"form-control"]),"onUpdate:modelValue":d[9]||(d[9]=S=>n(t).state=S),type:"text",placeholder:"State/City"},null,2),[[F,n(t).state]]),e("small",Oo,p(n(t).errors.state),1)]),e("div",Uo,[Bo,B(E,{class:C({"error-field":n(t).errors.country}),placeholder:"select country..",modelValue:n(t).country,"onUpdate:modelValue":d[10]||(d[10]=S=>n(t).country=S),clearable:!1,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",Ro,p(n(t).errors.country),1)])])]),e("section",qo,[e("div",jo,[No,e("div",zo,[e("div",Mo,[x(e("input",{class:C([{"error-field":n(t).errors.first_name},"form-control"]),"data-maska-tokens":"A:[A-Za-z]:multiple","onUpdate:modelValue":d[11]||(d[11]=S=>n(t).first_name=S),type:"text",placeholder:"first name.."},null,2),[[n(W)],[F,n(t).first_name]]),e("small",Ho,p(n(t).errors.first_name),1)]),e("div",Yo,[x(e("input",{class:C([{"error-field":n(t).errors.last_name},"form-control"]),"data-maska-tokens":"A:[A-Za-z]:multiple","onUpdate:modelValue":d[12]||(d[12]=S=>n(t).last_name=S),type:"text",placeholder:"first name.."},null,2),[[n(W)],[F,n(t).last_name]]),e("small",Wo,p(n(t).errors.last_name),1)])])]),e("div",Go,[Ko,B(V,{inputOptions:u.input,dropdownOptions:u.dropDown,autoFormat:!0,modelValue:n(t).phone,"onUpdate:modelValue":d[13]||(d[13]=S=>n(t).phone=S)},null,8,["inputOptions","dropdownOptions","modelValue"]),e("small",Zo,p(n(t).errors.phone),1)]),e("div",Jo,[Xo,x(e("input",dt({class:{"error-field":n(t).errors.email},"onUpdate:modelValue":d[14]||(d[14]=S=>n(t).email=S)},n(t).emailAttrs,{type:"text",class:"form-control",placeholder:"email"}),null,16),[[F,n(t).email]]),e("small",Qo,p(n(t).errors.email),1)]),e("div",ei,[ti,x(e("input",{class:C([{"error-field":n(t).errors.confirm_email},"form-control"]),"onUpdate:modelValue":d[15]||(d[15]=S=>n(t).confirm_email=S),type:"text",placeholder:"confirm email"},null,2),[[F,n(t).confirm_email]]),e("small",ni,p(n(t).errors.confirm_email),1),y.value?(f(),$("small",si,"emails do no match")):I("",!0)])]),e("div",oi,[e("button",{onClick:i,class:"btn btn-outline-info me-3"},[ii,c(" Close ")]),n(t).isSaving?(f(),$("button",li,[ri,c(" Saving, Please wait ")])):(f(),$("button",{key:0,onClick:d[16]||(d[16]=(...S)=>n(v)&&n(v)(...S)),class:"btn btn-primary"},[c(" Save and Continue "),ai]))])])}}}),di=ye(ci,[["__scopeId","data-v-3d1a1780"]]),D=l=>(he("data-v-7edeaa38"),l=l(),fe(),l),ui={class:"section"},pi=D(()=>e("div",{class:"fw-bold fs-5"},"About you ",-1)),_i=D(()=>e("div",{class:"fw-bolder"},[c("Your name in English "),e("small",{class:"text-danger"},"*")],-1)),mi=D(()=>e("span",null,"Enter your first and last name as they appear on a government ID ",-1)),hi={class:"row mt-1 g-2"},fi={class:"col-12"},yi={class:"text-danger"},vi={class:"col-12"},gi={class:"text-danger"},bi={class:"col-12"},$i={class:"form-check"},Si=D(()=>e("label",{class:"form-check-label",for:"chinese_name"},"Do you have a Chinese Name?",-1)),wi={key:0,class:"section"},xi=D(()=>e("div",{class:"fw-bolder"},[c("Your name in Chinese "),e("small",{class:"text-danger"},"*")],-1)),ki=D(()=>e("span",null,"Enter your first and last name as they appear on a government ID",-1)),Ci={class:"row mt-1 g-2"},Ei={class:"col-12"},Ai={class:"text-danger"},Fi={class:"col-12"},Pi={class:"text-danger"},Ti={class:"row g-2 section"},Ii={class:"col-md-6"},Vi=D(()=>e("label",{class:"form-label fw-bold"},[c("Date of Birth "),e("small",{class:"text-danger"},"*")],-1)),Di={class:"text-danger"},Li={class:"text-danger"},Oi={class:"col-md-6"},Ui=D(()=>e("label",{class:"form-label fw-bold"},[c("Nationality "),e("small",{class:"text-danger"},"*")],-1)),Bi={class:"section"},Ri=D(()=>e("div",{class:"fw-bolder"},[c("Your residential address "),e("small",{class:"text-danger"},"*")],-1)),qi={class:"row g-3 mt-1"},ji={class:"col-12"},Ni=D(()=>e("label",{class:"form-label"},[c("Flat／Floor／Block "),e("small",{class:"text-danger"},"*")],-1)),zi={class:"text-danger"},Mi={class:"col-12"},Hi=D(()=>e("label",{class:"form-label"},[c("Building "),e("small",{class:"text-danger"},"*")],-1)),Yi={class:"text-danger"},Wi={class:"col-12"},Gi=D(()=>e("label",{class:"form-label"},[c(" Street／Estate／Lot／Village "),e("small",{class:"text-danger"},"*")],-1)),Ki={class:"text-danger"},Zi={class:"col-12"},Ji=D(()=>e("label",{class:"form-label"},[c("District／City／ Province／State／ Postal Code "),e("small",{class:"text-danger"},"*")],-1)),Xi={class:"text-danger"},Qi={class:"col-md-12"},ea=D(()=>e("label",{class:"form-label"},[c(" Country／Region "),e("small",{class:"text-danger"},"*")],-1)),ta={class:"text-danger"},na={class:"section"},sa=D(()=>e("div",{class:"fw-bolder"},"Your corresponding address ",-1)),oa={class:"form-check"},ia=D(()=>e("label",{class:"form-check-label",for:"same_address"},"Same as residential address",-1)),aa={key:0,class:"row g-2 mt-1"},la={class:"col-12"},ra=D(()=>e("label",{class:"form-label"},[c(" Flat／Floor／Block "),e("small",{class:"text-danger"},"*")],-1)),ca={class:"text-danger"},da={class:"col-12"},ua=D(()=>e("label",{class:"form-label"},[c("Building "),e("small",{class:"text-danger"},"*")],-1)),pa={class:"text-danger"},_a={class:"col-12"},ma=D(()=>e("label",{class:"form-label"},[c(" Street／Estate／Lot／Village "),e("small",{class:"text-danger"},"*")],-1)),ha={class:"text-danger"},fa={class:"col-12"},ya=D(()=>e("label",{class:"form-label"},[c("District／City／ Province／State／ Postal Code "),e("small",{class:"text-danger"},"*")],-1)),va={class:"text-danger"},ga={class:"col-md-12"},ba=D(()=>e("label",{class:"form-label"},[c("Country／Region "),e("small",{class:"text-danger"},"*")],-1)),$a={class:"text-danger"},Sa={class:"row g-2 section"},wa={class:"col-md-12"},xa=D(()=>e("label",{class:"fw-bolder"},[c("ID type "),e("small",{class:"text-danger"},"*")],-1)),ka=D(()=>e("option",null,null,-1)),Ca=D(()=>e("option",{value:"1"},"Passport",-1)),Ea=D(()=>e("option",{value:"2"},"ID Card",-1)),Aa=[ka,Ca,Ea],Fa={class:"text-danger"},Pa={key:0,class:"col-md-9"},Ta=D(()=>e("label",{class:"fw-bolder"},[c("HKID No. "),e("small",{class:"text-danger"},"*")],-1)),Ia={class:"text-danger"},Va={key:1,class:"col-md-3",style:{"margin-top":"30px"}},Da={class:"text-danger"},La={key:2,class:"col-md-12"},Oa=D(()=>e("label",{class:"fw-bolder"},[c("Passport No. "),e("small",{class:"text-danger"},"*")],-1)),Ua={class:"text-danger"},Ba={key:3,class:"col-md-12"},Ra=D(()=>e("label",{class:"fw-bolder"},[c("Passport issuing Country/Region "),e("small",{class:"text-danger"},"*")],-1)),qa={class:"text-danger"},ja={class:"col-md-12"},Na=D(()=>e("label",{class:"fw-bolder"},[c("Phone number "),e("small",{class:"text-danger"},"*")],-1)),za={class:"text-danger"},Ma={class:"col-md-12"},Ha=D(()=>e("label",{class:"fw-bolder"},[c("Email "),e("small",{class:"text-danger"},"*")],-1)),Ya={class:"text-danger"},Wa={class:"col-md-12"},Ga=D(()=>e("label",{class:"fw-bolder"},[c("Confirm email "),e("span",{class:"text-danger"}," * ")],-1)),Ka={class:"text-danger"},Za={key:0,class:"text-danger"},Ja={class:"col-md-12"},Xa=D(()=>e("label",{class:"form-labe fw-bolder"},[c("Occupation/Employment "),e("span",{class:"text-danger"}," * ")],-1)),Qa={class:"text-danger"},el={class:"movement-buttons mt-5 mb-4"},tl=D(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),nl=D(()=>e("i",{class:"bi bi-check2"},null,-1)),sl={key:1,class:"btn btn-primary",type:"button",disabled:""},ol=D(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),il=J({__name:"Founders_individual",setup(l){const o=de.useToast(),s=Z(),t=Xe();ie(()=>{t.updateFields(s.companyInProgress),console.log(t.identity_type_id,"idtype")}),ge(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});const y={dropDown:{showDialCodeInSelection:!1,showFlags:!0,showSearchBox:!0,showDialCodeInList:!0},input:{showDialCode:!0,placeholder:"Enter phone",styleClasses:"phone-input-profile",maxlength:15}},u=H(""),i=H(!1);ge(()=>t.dob,()=>{_e.ageInYears(new Date(t.dob))<18?u.value="Must not be less that 18years old":u.value=""}),Ve(()=>{t.email&&t.confirm_email&&(t.email!==t.confirm_email&&!t.errors.confirm_email?i.value=!0:i.value=!1)});function v(){s.isShowingFoundersForm=!1}const m=t.handleSubmit(d=>{var E;if(!((E=s.companyInProgress)!=null&&E.id)){o.error("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0){o.error("Some fields still have errors",{position:"top-right"});return}if(t.phone.length<14){o.error("Phone number is not complete",{position:"top-right"});return}if(!_e.isEmail(t.email)){o.error("Invalid email format",{position:"top-right"});return}if(t.email!==t.confirm_email){o.error("Emails do not macth!",{position:"top-right"});return}if(t.identity_type_id=="1"&&(!t.passport_no||!t.issuing_country)){o.error("Please complete Passport fields",{position:"top-right"});return}if(t.identity_type_id=="2"){if(!t.identity_no){o.error("Please complete ID field",{position:"top-right"});return}if(!t.identity_no_suffix){o.error("Please complete ID field",{position:"top-right"});return}}if(_e.ageInYears(new Date(t.dob))<18){o.error("Must not be less that 18years old",{position:"top-right"});return}if(s.checkedEntityCapacity.length==0){o.error("Select at least a Capacity!",{position:"top-right"});return}const a=new FormData;a.append("company_id",s.companyInProgress.id),s.idToEdit&&(a.append("company_entity_id",s.idToEdit),a.append("isEdit","1")),a.append("entity_type_id",t.entity_type_id),a.append("entity_capacity_id",JSON.stringify(s.checkedEntityCapacity)),a.append("first_name",t.first_name),a.append("last_name",t.last_name),t.hasChineseName&&(a.append("chn_first_name",t.chn_first_name),a.append("chn_last_name",t.chn_last_name)),t.dob&&a.append("dob",t.dob),a.append("nationality",t.nationality),a.append("phone",t.phone),a.append("email",t.email),a.append("occupation",t.occupation),a.append("identity_type_id",t.identity_type_id),a.append("identity_no",t.identity_no),a.append("identity_no_suffix",t.identity_no_suffix||""),a.append("passport_no",t.passport_no),a.append("issuing_country",t.issuing_country),a.append("is_founder",t.is_founder?"1":"0"),a.append("addresses[0][flat]",t.flat),a.append("addresses[0][building]",t.building),a.append("addresses[0][street]",t.street),a.append("addresses[0][city]",t.city),a.append("addresses[0][state]",t.state),a.append("addresses[0][country]",t.country),a.append("addresses[0][is_corAddress]",t.correspondingAddressIsSame?"1":"0"),t.correspondingAddressIsSame||(a.append("addresses[1][flat]",t.flat2),a.append("addresses[1][building]",t.building2),a.append("addresses[1][street]",t.street2),a.append("addresses[1][city]",t.city2),a.append("addresses[1][state]",t.state2),a.append("addresses[1][country]",t.country2)),t.isSaving=!0,_(a)});async function _(d){try{await K.companyEntity(d).then(async a=>{o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.getCompanyInProgress("founder"),s.isShowingFoundersForm=!1,t.clearLocalStorage(),t.clearLocalStorage()})}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(d,a)=>{const E=ee("VueDatePicker"),V=ee("v-select"),S=ee("vue-tel-input");return f(),$(xe,null,[e("section",ui,[pi,_i,mi,e("div",hi,[e("div",fi,[x(e("input",{class:C([{"error-field":n(t).errors.first_name},"form-control"]),"data-maska":"A a","data-maska-tokens":"A:[A-Za-z]:multiple|a:[A-Za-z]:multiple","onUpdate:modelValue":a[0]||(a[0]=r=>n(t).first_name=r),type:"text",placeholder:"First Name.."},null,2),[[n(W)],[F,n(t).first_name]]),e("small",yi,p(n(t).errors.first_name),1)]),e("div",vi,[x(e("input",{class:C([{"error-field":n(t).errors.last_name},"form-control"]),"data-maska":"A a","data-maska-tokens":"A:[A-Za-z]:multiple|a:[A-Za-z]:multiple","onUpdate:modelValue":a[1]||(a[1]=r=>n(t).last_name=r),type:"text",placeholder:"Last Name.."},null,2),[[n(W)],[F,n(t).last_name]]),e("small",gi,p(n(t).errors.last_name),1)]),e("div",bi,[e("div",$i,[x(e("input",{class:"form-check-input","onUpdate:modelValue":a[2]||(a[2]=r=>n(t).hasChineseName=r),type:"checkbox",id:"chinese_name"},null,512),[[qe,n(t).hasChineseName]]),Si])])])]),n(t).hasChineseName?(f(),$("section",wi,[xi,ki,e("div",Ci,[e("div",Ei,[x(e("input",{class:C([{"error-field":n(t).errors.chn_first_name},"form-control"]),"onUpdate:modelValue":a[3]||(a[3]=r=>n(t).chn_first_name=r),type:"text",placeholder:"First Name.."},null,2),[[F,n(t).chn_first_name]]),e("small",Ai,p(n(t).errors.chn_first_name),1)]),e("div",Fi,[x(e("input",{class:C([{"error-field":n(t).errors.chn_last_name},"form-control"]),"onUpdate:modelValue":a[4]||(a[4]=r=>n(t).chn_last_name=r),type:"text",placeholder:"Last Name.."},null,2),[[F,n(t).chn_last_name]]),e("small",Pi,p(n(t).errors.chn_last_name),1)])])])):I("",!0),e("section",Ti,[e("div",Ii,[Vi,B(E,{format:n(_e).dateDisplay,"input-class-name":"dob-settings-input","hide-input-icon":"",clearable:!1,"enable-time-picker":!1,"auto-apply":"",modelValue:n(t).dob,"onUpdate:modelValue":a[5]||(a[5]=r=>n(t).dob=r)},null,8,["format","modelValue"]),e("small",Di,p(n(t).errors.dob),1),e("small",Li,p(u.value),1)]),e("div",Oi,[Ui,B(V,{placeholder:"select country..",modelValue:n(t).nationality,"onUpdate:modelValue":a[6]||(a[6]=r=>n(t).nationality=r),clearable:!1,options:n(s).countries},null,8,["modelValue","options"])])]),e("section",Bi,[Ri,e("div",qi,[e("div",ji,[Ni,x(e("input",{class:C([{"error-field":n(t).errors.flat},"form-control"]),"onUpdate:modelValue":a[7]||(a[7]=r=>n(t).flat=r),type:"text",placeholder:"Flat／Floor／Block"},null,2),[[F,n(t).flat]]),e("small",zi,p(n(t).errors.flat),1)]),e("div",Mi,[Hi,x(e("input",{class:C([{"error-field":n(t).errors.building},"form-control"]),"onUpdate:modelValue":a[8]||(a[8]=r=>n(t).building=r),type:"text",placeholder:"Street number"},null,2),[[F,n(t).building]]),e("small",Yi,p(n(t).errors.building),1)]),e("div",Wi,[Gi,x(e("input",{class:C([{"error-field":n(t).errors.street},"form-control"]),"onUpdate:modelValue":a[9]||(a[9]=r=>n(t).street=r),type:"text",placeholder:"Street"},null,2),[[F,n(t).street]]),e("small",Ki,p(n(t).errors.street),1)]),e("div",Zi,[Ji,x(e("input",{class:C([{"error-field":n(t).errors.state},"form-control"]),"onUpdate:modelValue":a[10]||(a[10]=r=>n(t).state=r),type:"text",placeholder:"State"},null,2),[[F,n(t).state]]),e("small",Xi,p(n(t).errors.state),1)]),e("div",Qi,[ea,B(V,{class:C({"error-field":n(t).errors.country}),placeholder:"select country..",modelValue:n(t).country,"onUpdate:modelValue":a[11]||(a[11]=r=>n(t).country=r),clearable:!1,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",ta,p(n(t).errors.country),1)])])]),e("section",na,[sa,e("span",null,[e("div",oa,[x(e("input",{class:"form-check-input",type:"checkbox",id:"same_address","onUpdate:modelValue":a[12]||(a[12]=r=>n(t).correspondingAddressIsSame=r)},null,512),[[qe,n(t).correspondingAddressIsSame]]),ia])]),n(t).correspondingAddressIsSame?I("",!0):(f(),$("div",aa,[e("div",la,[ra,x(e("input",{class:C([{"error-field":n(t).errors.flat2},"form-control"]),"onUpdate:modelValue":a[13]||(a[13]=r=>n(t).flat2=r),type:"text",placeholder:"Flat／Floor／Block"},null,2),[[F,n(t).flat2]]),e("small",ca,p(n(t).errors.flat2),1)]),e("div",da,[ua,x(e("input",{class:C([{"error-field":n(t).errors.building2},"form-control"]),"onUpdate:modelValue":a[14]||(a[14]=r=>n(t).building2=r),type:"text",placeholder:"Street number"},null,2),[[F,n(t).building2]]),e("small",pa,p(n(t).errors.building2),1)]),e("div",_a,[ma,x(e("input",{class:C([{"error-field":n(t).errors.street2},"form-control"]),"onUpdate:modelValue":a[15]||(a[15]=r=>n(t).street2=r),type:"text",placeholder:"Street"},null,2),[[F,n(t).street2]]),e("small",ha,p(n(t).errors.street2),1)]),e("div",fa,[ya,x(e("input",{class:C([{"error-field":n(t).errors.state2},"form-control"]),"onUpdate:modelValue":a[16]||(a[16]=r=>n(t).state2=r),type:"text",placeholder:"State"},null,2),[[F,n(t).state2]]),e("small",va,p(n(t).errors.state2),1)]),e("div",ga,[ba,B(V,{class:C({"error-field":n(t).errors.country2}),placeholder:"select country..",modelValue:n(t).country2,"onUpdate:modelValue":a[17]||(a[17]=r=>n(t).country2=r),clearable:!1,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",$a,p(n(t).errors.country2),1)])]))]),e("section",Sa,[e("div",wa,[xa,x(e("select",{class:C(["form-select",{"error-field":n(t).errors.identity_type_id}]),"onUpdate:modelValue":a[18]||(a[18]=r=>n(t).identity_type_id=r)},Aa,2),[[Q,n(t).identity_type_id]]),e("small",Fa,p(n(t).errors.identity_type_id),1)]),n(t).identity_type_id=="2"?(f(),$("div",Pa,[Ta,x(e("input",{class:C([{"error-field":n(t).errors.identity_no},"form-control"]),"data-maska":"#### #### #### ####","data-maska-tokens":"#:[0-9a-zA-Z]","onUpdate:modelValue":a[19]||(a[19]=r=>n(t).identity_no=r),ype:"text",placeholder:"HKID No."},null,2),[[n(W)],[F,n(t).identity_no]]),e("small",Ia,p(n(t).errors.identity_no),1)])):I("",!0),n(t).identity_type_id=="2"?(f(),$("div",Va,[c(" ( "),x(e("input",{class:C([{"error-field":n(t).errors.identity_no_suffix},"form-control"]),"data-maska":"##","data-maska-tokens":"#:[0-9]","onUpdate:modelValue":a[20]||(a[20]=r=>n(t).identity_no_suffix=r),type:"text",placeholder:"",style:{display:"inline !important",width:"100px"}},null,2),[[n(W)],[F,n(t).identity_no_suffix]]),c(") "),e("small",Da,p(n(t).errors.identity_no_suffix),1)])):I("",!0),n(t).identity_type_id=="1"?(f(),$("div",La,[Oa,x(e("input",{class:C([{"error-field":n(t).errors.passport_no},"form-control"]),"data-maska":"EEEEEEEEEEEEEEEE","data-maska-tokens":"E:[0-9a-zA-Z]","onUpdate:modelValue":a[21]||(a[21]=r=>n(t).passport_no=r),type:"text",placeholder:"Passport No"},null,2),[[n(W)],[F,n(t).passport_no]]),e("small",Ua,p(n(t).errors.passport_no),1)])):I("",!0),n(t).identity_type_id=="1"?(f(),$("div",Ba,[Ra,B(V,{class:C({"error-field":n(t).errors.issuing_country}),modelValue:n(t).issuing_country,"onUpdate:modelValue":a[22]||(a[22]=r=>n(t).issuing_country=r),clearable:!1,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",qa,p(n(t).errors.issuing_country),1)])):I("",!0),e("div",ja,[Na,B(S,{class:C({"error-field":n(t).errors.phone}),inputOptions:y.input,dropdownOptions:y.dropDown,autoFormat:!0,modelValue:n(t).phone,"onUpdate:modelValue":a[23]||(a[23]=r=>n(t).phone=r),"data-maska-tokens":"0:[0-9]:multiple"},null,8,["class","inputOptions","dropdownOptions","modelValue"]),e("small",za,p(n(t).errors.phone),1)]),e("div",Ma,[Ha,x(e("input",{class:C([{"error-field":n(t).errors.email},"form-control"]),"onUpdate:modelValue":a[24]||(a[24]=r=>n(t).email=r),type:"text",placeholder:"email"},null,2),[[F,n(t).email]]),e("small",Ya,p(n(t).errors.email),1)]),e("div",Wa,[Ga,x(e("input",{class:C([{"error-field":n(t).errors.confirm_email},"form-control"]),"onUpdate:modelValue":a[25]||(a[25]=r=>n(t).confirm_email=r),type:"text",placeholder:"confirm email"},null,2),[[F,n(t).confirm_email]]),e("small",Ka,p(n(t).errors.confirm_email),1),i.value?(f(),$("small",Za,"emails do no match")):I("",!0)]),e("div",Ja,[Xa,B(V,{class:C({"error-field":n(t).errors.occupation}),modelValue:n(t).occupation,"onUpdate:modelValue":a[26]||(a[26]=r=>n(t).occupation=r),clearable:!0,options:n(s).employmentStatusList},null,8,["class","modelValue","options"]),e("small",Qa,p(n(t).errors.occupation),1)])]),e("div",el,[e("button",{onClick:v,class:"btn btn-outline-info me-3"},[tl,c(" Close ")]),n(t).isSaving?(f(),$("button",sl,[ol,c(" Saving, Please wait ")])):(f(),$("button",{key:0,onClick:a[27]||(a[27]=(...r)=>n(m)&&n(m)(...r)),class:"btn btn-primary"},[c(" Save Record "),nl]))])],64)}}}),al=ye(il,[["__scopeId","data-v-7edeaa38"]]),Y=l=>(he("data-v-94bee351"),l=l(),fe(),l),ll={class:"section"},rl={class:"fw-bolder fs-5"},cl={key:0,class:"text-primary small fst-italic"},dl=Y(()=>e("span",null,"Tell us the details about the founder and director.",-1)),ul={key:0},pl=Y(()=>e("i",{class:"bi bi-plus-circle"},null,-1)),_l={key:0,class:"section"},ml={class:"card",style:{width:"100%"}},hl=Y(()=>e("div",{class:"card-header py-3 fw-bold border-0"},"Founders / Directors: ",-1)),fl={class:"table-responsive"},yl={class:"table table-sm"},vl={key:0,class:"text-capitalize"},gl=Y(()=>e("i",{class:"bi bi-person-circle"},null,-1)),bl=Y(()=>e("br",null,null,-1)),$l={key:1,class:"text-capitalize"},Sl=Y(()=>e("i",{class:"bi bi-person-circle"},null,-1)),wl=Y(()=>e("br",null,null,-1)),xl={class:"text"},kl=["onClick"],Cl=Y(()=>e("i",{class:"bi bi-pencil"},null,-1)),El=["onClick"],Al=Y(()=>e("i",{class:"bi bi-trash3"},null,-1)),Fl=Y(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Pl=Y(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Tl={key:1},Il={class:"section"},Vl=Y(()=>e("div",{class:"fw-bold"},"What is the type of founder/director? ",-1)),Dl={class:"row justify-content- mt-1"},Ll={key:0,class:"bi bi-record-circle-fill text-primary me-1"},Ol={key:1,class:"bi bi-circle me-1"},Ul={key:0,class:"bi bi-record-circle-fill text-primary me-1"},Bl={key:1,class:"bi bi-circle me-1"},Rl={class:"section"},ql=Y(()=>e("div",{class:"fw-bold"},"What is the Capacity of this individual? ",-1)),jl={class:"row justify-content- mt-1"},Nl={class:"col-4"},zl={class:"form-check"},Ml=Y(()=>e("label",{class:"form-check-label",for:"shareholder"},"Shareholder",-1)),Hl={class:"col-4"},Yl={class:"form-check"},Wl=Y(()=>e("label",{class:"form-check-label",for:"director"},"Director",-1)),Gl={key:3,class:"p-2"},Kl=Y(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What are the basic requirements to be a founder? "),e("div",null," A founder must be at least 18 years old. There is no residency requirement to be a founder, and our form allows for up to 6 founders to be registered. ")],-1)),Zl=Y(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Is it possible to change founder details after the company has been incorporated? "),e("div",null," Yes, amendments to founder details can be made post-incorporation. ")],-1)),Jl=Y(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Is it possible to change founder details after the company has been incorporated? "),e("div",null," No, you must provide a physical residential address as it is mandatory. ")],-1)),Xl=J({__name:"Founders",setup(l){const o=Je(),s=Xe(),t=H(null),y=Z(),u=de.useToast(),i=H(!1),v=me(()=>{var h;const r=((h=y.companyInProgress)==null?void 0:h.company_entity)??[],w=[];return r.length&&r.forEach(k=>{const O=k.individual||k.corporate;O&&(O.entity_type_id=k.entity_type_id,O.capacity=k.entity_capacity_id,w.push(O))}),w});function m(){y.isShowingFoundersForm=!1,o.clearLocalStorage(),s.clearLocalStorage()}function _(){y.switchStage("-")}function d(){o.resetForm(),s.resetForm(),y.isShowingFoundersForm=!0,y.idToEdit=""}function a(r){t.value=r.entity_type_id=="1"?"individual":"corporate",y.isShowingFoundersForm=!0,y.idToEdit=r.company_entity_id,s.clearLocalStorage(),s.clearLocalStorage(),i.value=!0,E(r)}function E(r){r.entity_type_id=="1"?(s.flat=r.res_address.flat,s.building=r.res_address.building,s.street=r.res_address.street,s.state=r.res_address.state,s.country=r.res_address.country,s.first_name=r.first_name,s.last_name=r.last_name,r.chn_first_name&&r.chn_first_name!="undefined"&&(s.hasChineseName=!0,s.chn_first_name=r.chn_first_name),r.chn_last_name&&r.chn_last_name!="undefined"&&(s.chn_last_name=r.chn_last_name),s.dob=new Date(r.dob),s.nationality=r.nationality,s.phone=r.phone,s.email=r.email,s.confirm_email=r.email,s.occupation=r.occupation,s.identity_type_id=r.get_identity.identity_type,r.get_identity.identity_type==1&&(s.passport_no=r.get_identity.passport_no,s.issuing_country=r.get_identity.issueing_country),r.get_identity.identity_type==2&&(s.identity_no=r.get_identity.identity_no,r.get_identity.identity_no_suffix&&(s.identity_no_suffix=r.get_identity.identity_no_suffix)),y.checkedEntityCapacity=JSON.parse(r.capacity)):(r.company_name!=null&&r.company_name!="undefined"&&(o.company_name=r.company_name),r.chn_company_name!=null&&r.chn_company_name!="undefined"&&(o.chn_company_name=r.chn_company_name),o.date_incorporated=new Date(r.date_incorporated),o.flat=r.flat,o.building=r.building,o.street=r.street,o.state=r.state,o.country=r.country,r.registeration_no!=null&&r.registeration_no!="undefined"&&(o.registeration_no=r.registeration_no),o.country_registered=r.country_registered,o.business_nature_id=parseInt(r.business_nature_id),o.phone=r.authorized_persons.phone,o.email=r.authorized_persons.email,o.confirm_email=r.authorized_persons.email,o.first_name=r.authorized_persons.first_name,o.last_name=r.authorized_persons.last_name,y.checkedEntityCapacity=JSON.parse(r.capacity))}function V(r){_e.confirmDelete("Delete this Record?","Yes, Delete").then(async w=>{if(w.isConfirmed)try{const h=await K.deleteEntity(r);u.success("Record deleted",{position:"top-right"}),y.getCompanyInProgress("founder"),s.clearLocalStorage(),s.clearLocalStorage()}catch{u.error("Sorry Something went wrong",{position:"top-right"})}})}function S(){y.switchStage("+"),y.getCompanyInProgress()}return(r,w)=>(f(),q(ce,null,{main:N(()=>[e("section",ll,[e("div",rl,[c("Founders / Directors "),n(y).isShowingFoundersForm&&n(y).idToEdit?(f(),$("span",cl,"(editing...)")):I("",!0)]),dl]),n(y).isShowingFoundersForm?(f(),$("div",Tl,[t.value=="individual"||t.value=="corporate"?(f(),$("button",{key:0,onClick:m,class:"btn btn-outline-primary float-end btn-sm"}," Clear Form")):I("",!0),e("section",Il,[Vl,e("div",Dl,[e("div",{onClick:w[0]||(w[0]=h=>t.value="individual"),class:C(["col-4 cursor-pointer",{"pointer-events-none":n(y).idToEdit}])},[t.value=="individual"?(f(),$("i",Ll)):(f(),$("i",Ol)),c(" Individual ")],2),e("div",{onClick:w[1]||(w[1]=h=>t.value="corporate"),class:C(["col-4 cursor-pointer",{"pointer-events-none":n(y).idToEdit}])},[t.value=="corporate"?(f(),$("i",Ul)):(f(),$("i",Bl)),c(" Corporate ")],2)])]),e("section",Rl,[ql,e("div",jl,[e("div",Nl,[e("div",zl,[x(e("input",{"onUpdate:modelValue":w[2]||(w[2]=h=>n(y).checkedEntityCapacity=h),class:"form-check-input cursor-pointer exemption",type:"checkbox",id:"shareholder",value:"1"},null,512),[[qe,n(y).checkedEntityCapacity]]),Ml])]),e("div",Hl,[e("div",Yl,[x(e("input",{class:"form-check-input exemption",type:"checkbox",id:"director",value:"2","onUpdate:modelValue":w[3]||(w[3]=h=>n(y).checkedEntityCapacity=h)},null,512),[[qe,n(y).checkedEntityCapacity]]),Wl])])])]),t.value=="individual"?(f(),q(al,{key:1})):t.value=="corporate"?(f(),q(di,{key:2})):(f(),$("div",Gl))])):(f(),$("div",ul,[e("button",{class:"btn w-100 btn-outline-secondary py-3 mb-4",id:"CompanyStore",onClick:d},[pl,c(" Add New founder / Director ")]),v.value.length?(f(),$("section",_l,[e("div",ml,[hl,e("div",fl,[e("table",yl,[e("tbody",null,[(f(!0),$(xe,null,Ie(v.value,(h,k)=>(f(),$("tr",{key:h},[e("td",null,p(k+1),1),h.entity_type_id==1?(f(),$("td",vl,[gl,c(" "+p(h.first_name+" "+h.last_name)+" ",1),bl,e("small",null,p(h.capacity.includes("1")?"Shareholder":""),1),c(" "+p((h.capacity.length>1," "))+" ",1),e("small",null,p(h.capacity.includes("2")?"Director":" "),1)])):(f(),$("td",$l,[Sl,c(" "+p(h.company_name)+" ",1),wl,e("small",null,p(h.capacity.includes("1")?"Shareholder":" "),1),e("small",null,p(h.capacity.includes("2")?" Director":" "),1)])),e("td",xl,p(h.entity_type_id=="1"?"Individual":"Corporate"),1),e("td",null,[e("button",{onClick:O=>a(h),class:"btn btn-sm border-0 text-info p-0 m-0"},[Cl,c(" Edit ")],8,kl)]),e("td",null,[e("button",{onClick:O=>V(h.company_entity_id),class:"btn border-0 btn-sm text-danger p-0 m-0"},[Al,c(" Remove ")],8,El)])]))),128))])])])])])):I("",!0),e("button",{onClick:_,class:"btn btn-outline-info me-3"},[Fl,c(" Back ")]),e("button",{onClick:S,class:"btn btn-primary"},[c(" Continue "),Pl])]))]),info:N(()=>[Kl,Zl,Jl]),_:1}))}}),Ql=ye(Xl,[["__scopeId","data-v-94bee351"]]),er=Ge("ownership",()=>{const l=H("1"),o=H(""),s=H(""),t=H(""),y=!1,u=H([]);return{share_type_id:l,no_of_share:o,total_amount_paid:s,currency:t,isSaving:y,shareHolders:u}}),j=l=>(he("data-v-d2fa5483"),l=l(),fe(),l),tr=j(()=>e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Ownership")],-1)),nr={class:"section"},sr={class:"row g-3 mt-1"},or={class:"col-md-6 col-lg-3"},ir=j(()=>e("label",{class:"form-labe fw-bold small"},[c("Class of shares: "),e("span",{class:"text-danger"}," * ")],-1)),ar={class:"col-md-12"},lr=j(()=>e("option",{selected:"",value:"1"},"Ordinary",-1)),rr=[lr],cr={class:"col-md-6 col-lg-3"},dr=j(()=>e("label",{class:"form-labe fw-bold small"},[c("Total no of shares: "),e("span",{class:"text-danger"}," * ")],-1)),ur={class:"col-md-12"},pr={class:"col-md-6 col-lg-3"},_r=j(()=>e("label",{class:"form-labe fw-bold small"},[c("Total amount paid:"),e("span",{class:"text-danger"}," * ")],-1)),mr={class:"col-md-12"},hr={class:"small text-danger"},fr={class:"col-md-6 col-lg-3"},yr=j(()=>e("label",{class:"form-labe fw-bold small"},[c("Currency: "),e("span",{class:"text-danger"}," * ")],-1)),vr={class:"col-md-12"},gr=j(()=>e("div",{class:"my-4"},"Split the company shares between founders:",-1)),br={class:"card border-0 shadow-sm mb-3"},$r={class:"card-body"},Sr={key:0},wr=j(()=>e("i",{class:"bi bi-plus"},null,-1)),xr={key:1,class:"list-group list-group-flush"},kr=j(()=>e("i",{class:"bi bi-person-circle me-2"},null,-1)),Cr=j(()=>e("span",{class:"text-danger"}," * ",-1)),Er={class:"float-end"},Ar=["onUpdate:modelValue"],Fr={class:"list-group-item"},Pr={key:0,class:"fw-bold float-end text-success"},Tr=j(()=>e("i",{class:"bi bi-check-circle"},null,-1)),Ir={key:1,class:"float-end text-danger small"},Vr=j(()=>e("i",{class:"bi bi-exclamation-circle"},null,-1)),Dr={key:0,class:"section"},Lr=j(()=>e("div",{class:"fw-bolder fs-6"},"Ownership Summary",-1)),Or=j(()=>e("span",null,"Here is how much founders own",-1)),Ur={class:"card mt-1 rounded-0 border-0 bg-light"},Br={class:"card-body bg-transparent"},Rr={class:"table-responsive"},qr={class:"table"},jr=j(()=>e("thead",{class:".thead"},[e("tr",null,[e("th"),e("th",null,"Split")])],-1)),Nr={class:"tbody"},zr={class:"text-capitalize thead"},Mr=j(()=>e("i",{class:"bi bi-circle-fill me-2"},null,-1)),Hr=j(()=>e("tr",{class:""},[e("td"),e("td",{class:"fw-bold text-success"},"100%")],-1)),Yr={class:"movement-buttons mt-5 mb-4"},Wr=j(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Gr=["disabled"],Kr=j(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Zr={key:1,class:"btn btn-primary",type:"button",disabled:""},Jr=j(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),Xr=j(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What are 'Class of Shares', and how do I choose the right one? "),e("div",null," 'Class of Shares' refers to the category of stock you are allocating. 'Ordinary' shares are common stock with no special rights or restrictions. This is the most common and most straight forward to begin with. ")],-1)),Qr=j(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What if the ownership percentages among founders don’t add up to 100%? "),e("div",null," The total ownership must equal 100%. If your allocations don’t sum up to 100%, you'll need to adjust the percentages until they do. The form will indicate any discrepancies with a visual cue. ")],-1)),ec=J({__name:"Ownership",setup(l){const o=de.useToast(),s=Z(),t=er(),y=je({total:""});let u=H("Sum of entries must be equal to Total Amount Paid");const i=me(()=>Object.keys(y).some(r=>y[r]!==""));function v(r){return parseInt(r.replace(/,/g,""))}Ve(()=>{y.total=""}),ie(()=>{var k;const r=((k=s.companyInProgress)==null?void 0:k.company_entity)??[],w=r.find(O=>O.entity_capacity_id.includes(2)&&O.entity_type_id==1);(!r.find(O=>O.entity_capacity_id.includes(1))||!w)&&(o.error("You need to add at least one <br> Shareholder    and one Individual <br> Director to proceed",{position:"top-right"}),s.switchStage("-")),_(),m()});function m(){var w,h,k,O,M,ne;t.no_of_share=((h=(w=s.companyInProgress)==null?void 0:w.shares[0])==null?void 0:h.no_of_share)??"",t.currency=((O=(k=s.companyInProgress)==null?void 0:k.shares[0])==null?void 0:O.currency)??"";const r=((ne=(M=s.companyInProgress)==null?void 0:M.shares[0])==null?void 0:ne.total_amount_paid)??"";t.total_amount_paid=r?parseFloat(r).toFixed(0):""}async function _(){var r;try{const h=(await K.retrieveShaheolders((r=s.companyInProgress)==null?void 0:r.id)).data.data,k=[];h.length&&h.forEach(O=>{var ne;const M=O.individual||O.corporate;M&&(M.entity_name=O.entity_type_id==1?`${M.first_name} ${M.last_name}`:`${M.company_name}`,M.own_share=((ne=O.share)==null?void 0:ne.total_amount)??0,k.push(M))}),t.shareHolders=k}catch{}}const d=me(()=>{let r=0;if(t.shareHolders.length)for(const h of t.shareHolders){if(h.own_share&&(r+=v(h.own_share)),h.own_share<=0)return u="Shareholder must not have zero(0) shares",!1;u="Sum of entries must be equal to Number of Shares"}const w=t.no_of_share?v(t.no_of_share):0;return r==w}),a=me(()=>{const r=[];return t.shareHolders.length&&t.total_amount_paid&&t.shareHolders.forEach(w=>{const h={name:w.entity_name,own_share:w.own_share,company_entity_id:w.company_entity_id,share_percentage:(v(w.own_share)/v(t.no_of_share)*100).toFixed(2)};r.push(h)}),r});function E(){s.switchStage("-")}function V(){var w;if(!((w=s.companyInProgress)!=null&&w.id)){o.default("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(!t.currency||!t.total_amount_paid||!t.no_of_share){o.default("Please complete fields",{position:"top-right"});return}const r=new FormData;r.append("company_id",s.companyInProgress.id),r.append("currency",t.currency),r.append("share_type_id",t.share_type_id),r.append("total_amount_paid",`${v(t.total_amount_paid)}`),r.append("no_of_share",t.no_of_share.replace(/,/g,"")),a.value.forEach((h,k)=>{r.append(`company_entity[${k}][share_percentage]`,h.share_percentage),r.append(`company_entity[${k}][total_amount]`,`${v(h.own_share)}`),r.append(`company_entity[${k}][company_entity_id]`,h.company_entity_id)}),t.isSaving=!0,S(r)}async function S(r){try{await K.companyShares(r),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(r,w)=>{const h=ee("v-select");return f(),q(ce,null,{main:N(()=>[tr,e("section",nr,[e("div",sr,[e("div",or,[ir,e("div",ar,[x(e("select",{"onUpdate:modelValue":w[0]||(w[0]=k=>n(t).share_type_id=k),class:"form-select"},rr,512),[[Q,n(t).share_type_id]])])]),e("div",cr,[dr,e("div",ur,[x(e("input",{"onUpdate:modelValue":w[1]||(w[1]=k=>n(t).no_of_share=k),required:"",placeholder:"0",class:"form-control","data-maska":"9,99#","data-maska-tokens":"9:[0-9]:repeated","data-maska-reversed":""},null,512),[[F,n(t).no_of_share],[n(W)]])])]),e("div",pr,[_r,e("div",mr,[x(e("input",{"onUpdate:modelValue":w[2]||(w[2]=k=>n(t).total_amount_paid=k),placeholder:"0.00",class:"form-control","data-maska":"9,99#","data-maska-tokens":"9:[0-9]:repeated","data-maska-reversed":""},null,512),[[F,n(t).total_amount_paid],[n(W)]]),e("span",hr,p(y.total),1)])]),e("div",fr,[yr,e("div",vr,[B(h,{modelValue:n(t).currency,"onUpdate:modelValue":w[3]||(w[3]=k=>n(t).currency=k),clearable:!1,options:n(s).currencies},null,8,["modelValue","options"])])])])]),gr,e("div",br,[e("div",$r,[n(t).shareHolders?(f(),$("ul",xr,[(f(!0),$(xe,null,Ie(n(t).shareHolders,(k,O)=>(f(),$("li",{key:k,class:"list-group-item text-capitalize"},[kr,c(" "+p(k.entity_name)+" ",1),Cr,e("span",Er,[x(e("input",{"onUpdate:modelValue":M=>k.own_share=M,type:"text",class:"form-control form-control-sm text-end",placeholder:"0","data-maska":"9,99#","data-maska-tokens":"9:[0-9]:repeated","data-maska-reversed":""},null,8,Ar),[[F,k.own_share],[n(W)]])])]))),128)),e("li",Fr,[n(t).total_amount_paid&&d.value?(f(),$("span",Pr,[c(" 100% "),Tr])):(f(),$("span",Ir,[c(p(n(u))+" ",1),Vr]))])])):(f(),$("div",Sr,[e("button",{class:"btn btn-link",onClick:w[4]||(w[4]=k=>n(s).switchStage("-"))},[wr,c("Please add Shareholders. ")])]))])]),n(t).no_of_share&&d.value?(f(),$("section",Dr,[Lr,Or,e("div",Ur,[e("div",Br,[e("div",Rr,[e("table",qr,[jr,e("tbody",Nr,[(f(!0),$(xe,null,Ie(a.value,k=>(f(),$("tr",{key:k,class:"thead"},[e("td",zr,[Mr,c(" "+p(k.name),1)]),e("td",null,p(k.share_percentage)+"%",1)]))),128)),Hr])])])])])])):I("",!0),e("div",Yr,[e("button",{onClick:E,class:"btn btn-outline-info me-3"},[Wr,c(" Back ")]),n(t).isSaving?(f(),$("button",Zr,[Jr,c(" Saving, Please wait ")])):(f(),$("button",{key:0,disabled:!d.value||i.value,onClick:V,class:"btn btn-primary"},[c(" Save Record "),Kr],8,Gr))])]),info:N(()=>[Xr,Qr]),_:1})}}}),tc=ye(ec,[["__scopeId","data-v-d2fa5483"]]),G=l=>(he("data-v-9a880257"),l=l(),fe(),l),nc=G(()=>e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Company Secretary"),e("span",null,"Company secretary details")],-1)),sc={class:"row g-2"},oc=G(()=>e("div",{class:"col-md-12"},[e("label",{class:"fw-bolder"},[c("Type "),e("i",{class:"bi bi-lock-fill"})]),e("select",{disabled:"",class:"form-select"},[e("option",{seleted:"",value:"corporate"},"Corporate"),e("option",{value:"individual"},"Individual")])],-1)),ic={class:"col-md-12"},ac=G(()=>e("label",{class:"fw-bolder"},[c("Name in English "),e("i",{class:"bi bi-lock-fill"})],-1)),lc={class:"col-md-12"},rc=G(()=>e("label",{class:"fw-bolder"},[c("Company registration no "),e("i",{class:"bi bi-lock-fill"})],-1)),cc={class:"col-md-12"},dc=G(()=>e("label",{class:"fw-bolder"},[c("Company license no "),e("i",{class:"bi bi-lock-fill"})],-1)),uc={class:"col-md-12"},pc=G(()=>e("label",{class:"fw-bolder"},[c("Country registered in "),e("i",{class:"bi bi-lock-fill"})],-1)),_c=G(()=>e("option",{selected:"",value:"Hong Kong"},"Hong Kong",-1)),mc=[_c],hc={class:"section"},fc=G(()=>e("div",{class:"fw-bolder pt-3"},"Address ",-1)),yc={class:"row g-3 mt-1"},vc={class:"col-12"},gc=G(()=>e("label",{class:"form-label"},[c(" Flat／Floor／Block "),e("i",{class:"bi bi-lock-fill"})],-1)),bc={class:"col-12"},$c=G(()=>e("label",{class:"form-label"},[c(" Building"),e("i",{class:"bi bi-lock-fill"})],-1)),Sc={class:"col-12"},wc=G(()=>e("label",{class:"form-label"},[c(" Street／Estate／Lot／Village"),e("i",{class:"bi bi-lock-fill"})],-1)),xc={class:"col-12"},kc=G(()=>e("label",{class:"form-label"},[c("District／City／ Province／State／ Postal Code "),e("i",{class:"bi bi-lock-fill"})],-1)),Cc={class:"col-md-12"},Ec=G(()=>e("label",{class:"form-label"},[c("Country／Region "),e("i",{class:"bi bi-lock-fill"})],-1)),Ac=G(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Fc=G(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Pc=J({__name:"Secretary",setup(l){const o=Z(),s=je({name:"Square One Limited",company_reg_no:"68891673",country_registered:"Hong Kong",licence_no:"TC000012",flat:"Rooms 502-503, 5th Floor",building:"Wanchai Commercial Centre",street:"194-204 Johnston Road",postal_code:"",country:"Hong Kong",state:"Wanchai",city:"Wanchai"});function t(){o.switchStage("-")}async function y(){var i;const u=new FormData;u.append("company_id",(i=o.companyInProgress)==null?void 0:i.id),await K.companySecretary(u),o.switchStage("+")}return(u,i)=>{const v=ee("v-select");return f(),q(ce,null,{main:N(()=>[nc,e("section",sc,[oc,e("div",ic,[ac,x(e("input",{disabled:"","onUpdate:modelValue":i[0]||(i[0]=m=>s.name=m),type:"text",class:"form-control",placeholder:"Name in English"},null,512),[[F,s.name]])]),e("div",lc,[rc,x(e("input",{disabled:"","onUpdate:modelValue":i[1]||(i[1]=m=>s.company_reg_no=m),type:"text",class:"form-control",placeholder:"Company registration no"},null,512),[[F,s.company_reg_no]])]),e("div",cc,[dc,x(e("input",{disabled:"","onUpdate:modelValue":i[2]||(i[2]=m=>s.licence_no=m),type:"text",class:"form-control",placeholder:"Company registration no"},null,512),[[F,s.licence_no]])]),e("div",uc,[pc,x(e("select",{disabled:"",class:"form-select","onUpdate:modelValue":i[3]||(i[3]=m=>s.country_registered=m)},mc,512),[[Q,s.country_registered]])])]),e("section",hc,[fc,e("div",yc,[e("div",vc,[gc,x(e("input",{disabled:"","onUpdate:modelValue":i[4]||(i[4]=m=>s.flat=m),class:"form-control",type:"text",placeholder:"Flat／Floor／Block"},null,512),[[F,s.flat]])]),e("div",bc,[$c,x(e("input",{disabled:"","onUpdate:modelValue":i[5]||(i[5]=m=>s.building=m),class:"form-control",type:"text",placeholder:"Street number"},null,512),[[F,s.building]])]),e("div",Sc,[wc,x(e("input",{disabled:"","onUpdate:modelValue":i[6]||(i[6]=m=>s.street=m),class:"form-control",type:"text",placeholder:"City"},null,512),[[F,s.street]])]),e("div",xc,[kc,x(e("input",{disabled:"","onUpdate:modelValue":i[7]||(i[7]=m=>s.state=m),class:"form-control",type:"text",placeholder:"State"},null,512),[[F,s.state]])]),e("div",Cc,[Ec,B(v,{disabled:!0,placeholder:"select country..",modelValue:s.country,"onUpdate:modelValue":i[8]||(i[8]=m=>s.country=m),clearable:!1,options:n(o).countries},null,8,["modelValue","options"])])])]),e("div",{class:"movement-buttons my-5"},[e("button",{onClick:t,class:"btn btn-outline-info me-3"},[Ac,c(" Back ")]),e("button",{onClick:y,class:"btn btn-primary"},[c(" Continue "),Fc])])]),info:N(()=>[]),_:1})}}}),Tc=ye(Pc,[["__scopeId","data-v-9a880257"]]),ae=l=>(he("data-v-9138b6a4"),l=l(),fe(),l),Ic=ae(()=>e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Source of funds"),e("span",null,"Source of funds")],-1)),Vc={class:"row g-2"},Dc={class:"col-md-12"},Lc=ae(()=>e("label",{class:"fw-bolder"},[c("Expected source of funds "),e("small",{class:"text-danger"},"*")],-1)),Oc={class:"text-danger"},Uc={class:"col-md-12"},Bc=ae(()=>e("label",{class:"fw-bolder"},[c("Origin source of funds "),e("small",{class:"text-danger"},"*")],-1)),Rc={class:"text-danger"},qc=ae(()=>e("div",{class:"fw-bolder fs-5"},"Source of Wealth",-1)),jc={class:"col-md-12"},Nc=ae(()=>e("label",{class:"fw-bolder"},[c("Initial source of wealth "),e("small",{class:"text-danger"},"*")],-1)),zc={class:"text-danger"},Mc={class:"col-md-12"},Hc=ae(()=>e("label",{class:"fw-bolder"},[c("Ongoing source of wealth "),e("small",{class:"text-danger"},"*")],-1)),Yc={class:"text-danger"},Wc={class:"movement-buttons my-5"},Gc=ae(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Kc=ae(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Zc={key:1,class:"btn btn-primary",type:"button",disabled:""},Jc=ae(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),Xc=ae(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Why do I need to disclose the source of funds and wealth? "),e("div",null," Disclosure of the source of funds and wealth is a regulatory requirement to comply with anti-money laundering laws. It helps maintain financial transparency and accountability. ")],-1)),Qc=ae(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What qualifies as a source of funds? "),e("div",null," The source of funds refers to the origin of the capital you will invest in the company, such as personal savings, loan or credit, investment income, or any other legitimate source. ")],-1)),ed=ae(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Can the source of wealth and source of funds be the same? "),e("div",null," Yes, they can be the same if your initial wealth, which is funding the company, comes from a consistent ongoing source, such as a business or employment income. ")],-1)),td=J({__name:"Source",setup(l){const o=de.useToast(),s=Z(),t=Qe();ie(()=>{t.updateFields(s.companyInProgress)}),ge(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});function y(){s.switchStage("-")}const u=t.handleSubmit(async v=>{var _;if(!((_=s.companyInProgress)!=null&&_.id)){o.error("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0)return o.error("Some fields still have errors",{position:"top-right"}),!0;const m=new FormData;m.append("company_id",s.companyInProgress.id),m.append("income_expected_source",v.income_expected_source),m.append("origin_funds",v.origin_funds),m.append("wealth_initial_source",v.wealth_initial_source),m.append("income_outgoing_source",v.income_outgoing_source),t.isSaving=!0,i(m)});async function i(v){try{await K.companySource(v),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(v,m)=>{const _=ee("v-select");return f(),q(ce,null,{main:N(()=>[Ic,e("section",Vc,[e("div",Dc,[Lc,B(_,{class:C({"error-field":n(t).errors.income_expected_source}),modelValue:n(t).income_expected_source,"onUpdate:modelValue":m[0]||(m[0]=d=>n(t).income_expected_source=d),clearable:!0,options:n(s).sourceOfFunds},null,8,["class","modelValue","options"]),e("small",Oc,p(n(t).errors.income_expected_source),1)]),e("div",Uc,[Bc,B(_,{class:C({"error-field":n(t).errors.origin_funds}),modelValue:n(t).origin_funds,"onUpdate:modelValue":m[1]||(m[1]=d=>n(t).origin_funds=d),clearable:!0,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",Rc,p(n(t).errors.origin_funds),1)]),qc,e("div",jc,[Nc,B(_,{class:C({"error-field":n(t).errors.wealth_initial_source}),modelValue:n(t).wealth_initial_source,"onUpdate:modelValue":m[2]||(m[2]=d=>n(t).wealth_initial_source=d),clearable:!0,options:n(s).initialSourceOfWealth},null,8,["class","modelValue","options"]),e("small",zc,p(n(t).errors.wealth_initial_source),1)]),e("div",Mc,[Hc,B(_,{class:C({"error-field":n(t).errors.income_outgoing_source}),modelValue:n(t).income_outgoing_source,"onUpdate:modelValue":m[3]||(m[3]=d=>n(t).income_outgoing_source=d),clearable:!0,options:n(s).ongoingSourceOfIncome},null,8,["class","modelValue","options"]),e("small",Yc,p(n(t).errors.income_outgoing_source),1)])]),e("div",Wc,[e("button",{onClick:y,class:"btn btn-outline-info me-3"},[Gc,c(" Back ")]),n(t).isSaving?(f(),$("button",Zc,[Jc,c(" Saving, Please wait ")])):(f(),$("button",{key:0,onClick:m[4]||(m[4]=(...d)=>n(u)&&n(u)(...d)),class:"btn btn-primary"},[c(" Save & Continue "),Kc]))])]),info:N(()=>[Xc,Qc,ed]),_:1})}}}),nd=ye(td,[["__scopeId","data-v-9138b6a4"]]),sd=e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Activities"),e("span",null,"Detail your company's primary business operations below.")],-1),od={class:"section"},id=e("div",{class:"fw-bold"},[c("Describe your expected business activities "),e("span",{class:"text-danger"}," * ")],-1),ad=e("div",null,"Provide a brief but clear description of your anticipated business activities. Be as specific as possible to ensure accurate representation in your business ",-1),ld={class:"row g-2 mt-1"},rd={class:"col-md-12"},cd={class:"text-danger"},dd={class:"float-end"},ud={class:"section"},pd=e("div",{class:"fw-bold"},[c("Level of activity "),e("span",{class:"text-danger"}," * ")],-1),_d=e("div",null,"Select the volume and frequency of transactions your business expects to handle. ",-1),md={class:"row g-2 mt-1"},hd={class:"col-md-12"},fd={class:"text-danger"},yd={class:"section"},vd=e("div",{class:"fw-bold"},[c("Nature of activity "),e("span",{class:"text-danger"}," * ")],-1),gd=e("div",null,"Choose the main industry or sector that best represents your business operations. ",-1),bd={class:"row g-2 mt-1"},$d={class:"col-md-12"},Sd={class:"text-danger"},wd={class:"section"},xd=e("div",{class:"fw-bold"},[c("Customer location and operation "),e("span",{class:"text-danger"}," * ")],-1),kd=e("div",null,"Indicate the primary countries where your company will actively conduct business or serve customers. ",-1),Cd={class:"row g-2 mt-1"},Ed={class:"col-md-12"},Ad={class:"text-danger"},Fd={class:"section"},Pd=e("div",{class:"fw-bold"},[c("List of countries "),e("span",{class:"text-danger"}," * ")],-1),Td=e("div",null,"List all additional countries where your company will have business activities or customer interactions. ",-1),Id={class:"row g-2 mt-1"},Vd={class:"col-md-12"},Dd={class:"text-danger"},Ld={class:"movement-buttons my-5"},Od=e("i",{class:"bi bi-arrow-left"},null,-1),Ud=e("i",{class:"bi bi-arrow-right"},null,-1),Bd={key:1,class:"btn btn-primary",type:"button",disabled:""},Rd=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),qd=150,jd=J({__name:"Activities",setup(l){const o=de.useToast(),s=Z(),t=et();ie(()=>{t.updateFields(s.companyInProgress)}),ge(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});function y(){s.switchStage("-")}ie(()=>{Ve(()=>{t.customer_location_operation&&t.customer_location_operation.length<1&&(t.errors.customer_location_operation="Please select an option"),t.country&&t.country.length<1&&(t.errors.country="Please select an option")})});const u=t.handleSubmit(async m=>{var d;if(!((d=s.companyInProgress)!=null&&d.id)){o.default("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0)return o.default("Some fields still have errors",{position:"top-right"}),!0;const _=new FormData;_.append("company_id",s.companyInProgress.id),_.append("description",m.description),_.append("activity_level",m.activity_level),_.append("activity_nature",m.activity_nature),_.append("customer_location_operation",m.customer_location_operation.toString()),_.append("country",m.country.toString()),t.isSaving=!0,i(_)});async function i(m){try{await K.companyActivity(m),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}const v=me(()=>{var m;return((m=t==null?void 0:t.description)==null?void 0:m.length)??0});return(m,_)=>{const d=ee("v-select");return f(),q(ce,null,{main:N(()=>[sd,e("section",od,[id,ad,e("div",ld,[e("div",rd,[x(e("textarea",{class:C([{"error-field":n(t).errors.description},"form-control"]),"onUpdate:modelValue":_[0]||(_[0]=a=>n(t).description=a),rows:"5"},null,2),[[F,n(t).description]]),e("small",cd,p(n(t).errors.description),1),e("small",dd,p(v.value)+"/"+p(qd),1)])])]),e("section",ud,[pd,_d,e("div",md,[e("div",hd,[B(d,{class:C({"error-field":n(t).errors.activity_level}),modelValue:n(t).activity_level,"onUpdate:modelValue":_[1]||(_[1]=a=>n(t).activity_level=a),clearable:!0,options:n(s).levelOfActivity},null,8,["class","modelValue","options"]),e("small",fd,p(n(t).errors.activity_level),1)])])]),e("section",yd,[vd,gd,e("div",bd,[e("div",$d,[B(d,{class:C({"error-field":n(t).errors.activity_nature}),modelValue:n(t).activity_nature,"onUpdate:modelValue":_[2]||(_[2]=a=>n(t).activity_nature=a),clearable:!0,options:n(s).natureOfActivity},null,8,["class","modelValue","options"]),e("small",Sd,p(n(t).errors.activity_nature),1)])])]),e("section",wd,[xd,kd,e("div",Cd,[e("div",Ed,[B(d,{class:C({"error-field":n(t).errors.customer_location_operation}),multiple:!0,modelValue:n(t).customer_location_operation,"onUpdate:modelValue":_[3]||(_[3]=a=>n(t).customer_location_operation=a),clearable:!0,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",Ad,p(n(t).errors.customer_location_operation),1)])])]),e("section",Fd,[Pd,Td,e("div",Id,[e("div",Vd,[B(d,{class:C({"error-field":n(t).errors.country}),multiple:!0,modelValue:n(t).country,"onUpdate:modelValue":_[4]||(_[4]=a=>n(t).country=a),clearable:!0,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",Dd,p(n(t).errors.country),1)])])]),e("div",Ld,[e("button",{onClick:y,class:"btn btn-outline-info me-3"},[Od,c(" Back ")]),n(t).isSaving?(f(),$("button",Bd,[Rd,c(" Saving, Please wait ")])):(f(),$("button",{key:0,onClick:_[5]||(_[5]=(...a)=>n(u)&&n(u)(...a)),class:"btn btn-primary"},[c(" Save & Continue "),Ud]))])]),_:1})}}}),P=l=>(he("data-v-ef2dc022"),l=l(),fe(),l),Nd=P(()=>e("section",{class:"section"},[e("h5",{class:"fw-bolder"},"Summary"),e("span",null,"Please make sure the following information is correct. We'll use it to generate your documents.")],-1)),zd={class:"section"},Md=P(()=>e("div",{class:"fw-bold mb-2"},"Company",-1)),Hd={class:"card bg-light border-0"},Yd={class:"card-body"},Wd={class:"list-group list-group-flush"},Gd={class:"list-group-item"},Kd={class:"float-end"},Zd={key:0,class:"small text-mut text-capitalize"},Jd={key:1,class:"small text-mut text-capitalize"},Xd={key:2,class:"small text-mut text-capitalize"},Qd={key:3,class:"small text-mut text-capitalize"},eu={key:4,class:"small text-mut text-capitalize"},tu={class:"list-group-item"},nu={class:"float-end"},su={class:"small text-mut"},ou={class:"list-group-item"},iu=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),au=[iu],lu={class:"small text-mut"},ru={class:"list-group-item"},cu=P(()=>e("span",{class:"float-end"},[e("i",{class:"bi bi-pencil-square"})],-1)),du={class:"small text-mut"},uu={class:"section"},pu=P(()=>e("div",{class:"fw-bold mb-2"},"Registered Adrress",-1)),_u={class:"card bg-light border-0"},mu={class:"card-body"},hu={class:"list-group list-group-flush"},fu={class:"list-group-item"},yu={class:"float-end"},vu={class:"small text-mut text-capitalize"},gu={class:"list-group-item"},bu={class:"float-end"},$u={class:"small text-mut"},Su={class:"list-group-item"},wu=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),xu=[wu],ku={class:"small text-mut"},Cu={class:"list-group-item"},Eu=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Au=[Eu],Fu={class:"small text-mut"},Pu={class:"list-group-item"},Tu=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Iu=[Tu],Vu={class:"small text-mut"},Du={class:"section"},Lu=P(()=>e("div",{class:"fw-bold mb-2"},"Founders (Individual)",-1)),Ou={class:"card bg-light border-0 section"},Uu={class:"card-body"},Bu={class:"list-group list-group-flush"},Ru={class:"list-group-item"},qu=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),ju=[qu],Nu={class:"small text-mut text-capitalize"},zu={class:"list-group-item"},Mu=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Hu=[Mu],Yu={class:"small text-mut"},Wu={class:"list-group-item"},Gu=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Ku=[Gu],Zu={class:"small text-mut"},Ju={class:"list-group-item"},Xu=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Qu=[Xu],ep={class:"small text-mut"},tp={class:"list-group-item"},np=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),sp=[np],op={class:"small text-mut"},ip={class:"list-group-item"},ap=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),lp=[ap],rp={class:"small text-mut"},cp={class:"list-group-item"},dp=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),up=[dp],pp={class:"small text-mut"},_p={class:"list-group-item"},mp=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),hp=[mp],fp={class:"small text-mut"},yp={class:"list-group-item"},vp=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),gp=[vp],bp={class:"small text-mut"},$p={class:"list-group-item"},Sp=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),wp=[Sp],xp={class:"small text-mut"},kp={class:"list-group-item"},Cp=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Ep=[Cp],Ap={class:"small text-mut"},Fp={key:0,class:"list-group-item"},Pp=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Tp=[Pp],Ip={class:"small text-mut"},Vp={class:"section"},Dp=P(()=>e("div",{class:"fw-bold mb-2"},"Founders (Corporate)",-1)),Lp={class:"card bg-light border-0 section"},Op={class:"card-body"},Up={class:"list-group list-group-flush"},Bp={class:"list-group-item"},Rp=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),qp=[Rp],jp={class:"small text-mut text-capitalize"},Np={class:"list-group-item"},zp=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Mp=[zp],Hp={class:"small text-mut"},Yp={class:"list-group-item"},Wp=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Gp=[Wp],Kp={class:"small text-mut"},Zp={class:"list-group-item"},Jp=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Xp=[Jp],Qp={class:"small text-mut"},e_={class:"list-group-item"},t_=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),n_=[t_],s_={class:"small text-mut"},o_={class:"list-group-item"},i_=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),a_=[i_],l_={class:"small text-mut"},r_={class:"list-group-item"},c_=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),d_=[c_],u_={class:"small text-mut"},p_={class:"list-group-item"},__=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),m_=[__],h_={class:"small text-mut"},f_={class:"list-group-item"},y_=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),v_=[y_],g_={class:"small text-mut"},b_={class:"list-group-item"},$_=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),S_=[$_],w_={class:"small text-mut"},x_={class:"list-group-item"},k_=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),C_=[k_],E_={class:"small text-mut"},A_={class:"section"},F_=P(()=>e("div",{class:"fw-bold mb-2"},"Ownership",-1)),P_={class:"card bg-light border-0"},T_={class:"card-body"},I_={class:"list-group list-group-flush"},V_={class:"list-group-item"},D_={class:"fw-bold"},L_={class:"float-end"},O_=P(()=>e("div",{class:"small text-mut"},"Ordinary",-1)),U_={class:"list-group-item"},B_={class:"fw-bold"},R_={class:"float-end"},q_={class:"small text-mut"},j_={class:"list-group-item"},N_={class:"fw-bold"},z_={class:"float-end"},M_={class:"small text-mut"},H_={class:"list-group-item"},Y_={class:"fw-bold"},W_={class:"float-end"},G_={class:"small text-mut"},K_={class:"list-group-item"},Z_={class:"fw-bold card border-0 shadow-sm"},J_={class:"card-body"},X_=P(()=>e("div",{class:"fw-bold"},[c(" Shareholders "),e("span",{style:{float:"right"}}," No of Shares")],-1)),Q_={class:"list-group list-group-flush"},em={class:"list-group-item"},tm={class:"float-end text-right"},nm={class:"small text-mut"},sm={class:"section"},om=P(()=>e("div",{class:"fw-bold mb-2"},"Company Secretary",-1)),im={class:"card bg-light border-0"},am={class:"card-body"},lm={class:"list-group list-group-flush"},rm={class:"list-group-item"},cm={class:"fw-bold"},dm={class:"float-end"},um={class:"small text-mut"},pm={class:"list-group-item"},_m={class:"fw-bold"},mm={class:"float-end"},hm={class:"small text-mut"},fm={class:"list-group-item"},ym={class:"fw-bold"},vm={class:"float-end"},gm={class:"small text-mut"},bm={class:"list-group-item"},$m={class:"fw-bold"},Sm={class:"float-end"},wm={class:"small text-mut"},xm={class:"list-group-item"},km={class:"fw-bold"},Cm={class:"float-end"},Em={class:"small text-mut"},Am={class:"list-group-item"},Fm={class:"fw-bold"},Pm={class:"float-end"},Tm={class:"small text-mut"},Im={class:"list-group-item"},Vm={class:"fw-bold"},Dm={class:"float-end"},Lm={class:"small text-mut"},Om={class:"list-group-item"},Um={class:"fw-bold"},Bm={class:"float-end"},Rm={class:"small text-mut"},qm={class:"section"},jm=P(()=>e("div",{class:"fw-bold mb-2"},"Source of Funds",-1)),Nm={class:"card bg-light border-0"},zm={class:"card-body"},Mm={class:"list-group list-group-flush"},Hm={class:"list-group-item"},Ym={class:"float-end"},Wm={class:"small text-mut text-capitalize"},Gm={class:"list-group-item"},Km={class:"float-end"},Zm={class:"small text-mut"},Jm={class:"list-group-item"},Xm=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Qm=[Xm],eh={class:"small text-mut"},th={class:"list-group-item"},nh=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),sh=[nh],oh={class:"small text-mut"},ih={class:"section"},ah=P(()=>e("div",{class:"fw-bold mb-2"},"Activity",-1)),lh={class:"card bg-light border-0"},rh={class:"card-body"},ch={class:"list-group list-group-flush"},dh={class:"list-group-item"},uh={class:"float-end"},ph={class:"small text-mut text-capitalize"},_h={class:"list-group-item"},mh={class:"float-end"},hh={class:"small text-mut"},fh={class:"list-group-item"},yh=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),vh=[yh],gh={class:"small text-mut"},bh={class:"list-group-item"},$h=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Sh=[$h],wh={class:"small text-mut"},xh={class:"list-group-item"},kh=P(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Ch=[kh],Eh={class:"small text-mut"},Ah={class:"movement-buttons my-5"},Fh=P(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Ph=P(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Th=P(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What are the basic requirements to be a founder? "),e("div",null," A founder must be at least 18 years old. There is no residency requirement to be a founder, and our form allows for up to 6 founders to be registered. ")],-1)),Ih=P(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Is it possible to change founder details after the company has been incorporated? "),e("div",null," Yes, amendments to founder details can be made post-incorporation. ")],-1)),Vh=P(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Is it possible to change founder details after the company has been incorporated? "),e("div",null," No, you must provide a physical residential address as it is mandatory. ")],-1)),Dh=J({__name:"Summary",setup(l){const o=Z(),s=je({company_name:[],description:"",address:"",business_nature:"",website:"",phone_number:"",flat:"",building:"",street:"",state:"",country:"",income_expected_source:"",income_outgoing_source:"",origin_funds:"",wealth_initial_source:"",activity_nature:"",activity_level:"",activity_description:"",activity_country:"",activity_customer_location_operation:"",founders_individual:[],founders_corporate:[],secretary_name:"",secretary_chname:"",secretary_company_reg_no:"",secretary_country_registered:"",secretary_licence_no:"",secretary_email:"",secretary_flat:"",secretary_street:"",secretary_city:"",secretary_state:"",secretary_country:"",share_type_id:"",no_of_share:"",total_amount_paid:"",currency:"",ownerShares:[]});ie(()=>{var i,v,m,_,d,a,E,V,S,r,w,h,k,O,M,ne,be,ue,De,$e,Le,Re,Ce,Ee,Ae,Oe;const u=o.companyInProgress;if(u){const b=u.names;console.log(b,"Name array"),b.find(T=>T.choice_level==1),s.company_name=b,s.description=u.description,s.business_nature=((i=u==null?void 0:u.business_nature)==null?void 0:i.name)??"",s.website=u.website,s.secretary_name=((v=u==null?void 0:u.secretary)==null?void 0:v.name)??"",s.secretary_chname=((m=u==null?void 0:u.secretary)==null?void 0:m.chn_name)??"",s.secretary_company_reg_no=((_=u==null?void 0:u.secretary)==null?void 0:_.company_reg_no)??"",s.secretary_country_registered=((d=u==null?void 0:u.secretary)==null?void 0:d.country_registered)??"",s.secretary_licence_no=((a=u==null?void 0:u.secretary)==null?void 0:a.licence_no)??"",s.secretary_email=((E=u==null?void 0:u.secretary)==null?void 0:E.email)??"",s.secretary_flat=((V=u==null?void 0:u.secretary)==null?void 0:V.flat)??"",s.secretary_street=((S=u==null?void 0:u.secretary)==null?void 0:S.street)??"",s.secretary_city=((r=u==null?void 0:u.secretary)==null?void 0:r.city)??"",s.secretary_state=((w=u==null?void 0:u.secretary)==null?void 0:w.state)??"",s.secretary_country=((h=u==null?void 0:u.secretary)==null?void 0:h.country)??"",s.flat=(u==null?void 0:u.flat)??"",s.building=(u==null?void 0:u.building)??"",s.street=(u==null?void 0:u.street)??"",s.state=(u==null?void 0:u.state)??"",s.country=(u==null?void 0:u.country)??"",s.share_type_id=((k=u==null?void 0:u.shares[0])==null?void 0:k.share_type_id)??"",s.no_of_share=((O=u==null?void 0:u.shares[0])==null?void 0:O.no_of_share)??"",s.total_amount_paid=((M=u==null?void 0:u.shares[0])==null?void 0:M.total_amount_paid)??"",s.currency=((ne=u==null?void 0:u.shares[0])==null?void 0:ne.currency)??"",s.income_expected_source=((be=u.fund_source)==null?void 0:be.income_expected_source)??"",s.income_outgoing_source=((ue=u.fund_source)==null?void 0:ue.income_outgoing_source)??"",s.origin_funds=((De=u.fund_source)==null?void 0:De.origin_funds)??"",s.wealth_initial_source=(($e=u.fund_source)==null?void 0:$e.wealth_initial_source)??"",s.activity_nature=((Le=u.activity)==null?void 0:Le.activity_nature)??"",s.activity_level=((Re=u.activity)==null?void 0:Re.activity_level)??"",s.activity_description=((Ce=u.activity)==null?void 0:Ce.description)??"",s.activity_customer_location_operation=((Ee=u.activity)==null?void 0:Ee.customer_location_operation)??"",s.activity_country=((Ae=u.activity)==null?void 0:Ae.country)??"";const g=((Oe=o.companyInProgress)==null?void 0:Oe.company_entity)??[];g.length&&(g.filter(A=>A.entity_type_id==1).forEach(A=>{var se;const U=A.individual;s.founders_individual.push(U),s.ownerShares.push({name:U.first_name||U.chn_first_name+" "+U.last_name||U.chn_last_name,amount:((se=U.owner_shares)==null?void 0:se.total_amount)??0})}),g.filter(A=>A.entity_type_id==2).forEach(A=>{var se;const U=A.corporate;s.founders_corporate.push(U),s.ownerShares.push({name:U.company_name||U.chn_company_name,amount:((se=U.owner_shares)==null?void 0:se.total_amount)??0})}))}console.log("shers:",s.ownerShares)});const t=u=>{const i=o.businessNatures.find(v=>v.id==u);return i?i.name:".."};function y(u){o.switchStage(u)}return(u,i)=>(f(),q(ce,null,{main:N(()=>{var v,m,_,d,a,E,V,S,r,w;return[Nd,e("section",zd,[Md,e("section",Hd,[e("div",Yd,[e("ul",Wd,[e("li",Gd,[e("span",null,[c(" Name "),e("span",Kd,[e("i",{onClick:i[0]||(i[0]=h=>n(o).currentStage=2),class:"bi bi-pencil-square"})]),s!=null&&s.company_name[0]?(f(),$("div",Zd," First Choice: "+p((v=s==null?void 0:s.company_name[0])==null?void 0:v.eng_name)+" "+p((m=s==null?void 0:s.company_name[0])==null?void 0:m.chn_name),1)):I("",!0),s!=null&&s.company_name[1]?(f(),$("div",Jd," Second Choice: "+p((_=s==null?void 0:s.company_name[1])==null?void 0:_.eng_name)+" "+p((d=s==null?void 0:s.company_name[1])==null?void 0:d.chn_name),1)):I("",!0),s!=null&&s.company_name[2]?(f(),$("div",Xd," Third Choice: "+p((a=s==null?void 0:s.company_name[2])==null?void 0:a.eng_name)+" "+p((E=s==null?void 0:s.company_name[2])==null?void 0:E.chn_name),1)):I("",!0),s!=null&&s.company_name[3]?(f(),$("div",Qd,"Forth Choice: "+p((V=s==null?void 0:s.company_name[3])==null?void 0:V.eng_name)+" "+p((S=s==null?void 0:s.company_name[3])==null?void 0:S.chn_name),1)):I("",!0),s!=null&&s.company_name[4]?(f(),$("div",eu,"Fifth Choice: "+p((r=s==null?void 0:s.company_name[4])==null?void 0:r.eng_name)+" "+p((w=s==null?void 0:s.company_name[5])==null?void 0:w.chn_name),1)):I("",!0)])]),e("li",tu,[e("span",null,[c(" Description "),e("span",nu,[e("i",{onClick:i[1]||(i[1]=h=>n(o).currentStage=3),class:"bi bi-pencil-square"})]),e("div",su,p(s.description),1)])]),e("li",ou,[e("span",null,[c(" Nature of business "),e("span",{onClick:i[2]||(i[2]=h=>n(o).currentStage=3),class:"float-end"},au),e("div",lu,p(s.business_nature),1)])]),e("li",ru,[e("span",null,[c(" Website, social media, or app "),cu,e("div",du,p(s==null?void 0:s.website),1)])])])])])]),e("section",uu,[pu,e("section",_u,[e("div",mu,[e("ul",hu,[e("li",fu,[e("span",null,[c(" Flat "),e("span",yu,[e("i",{onClick:i[3]||(i[3]=h=>n(o).currentStage=4),class:"bi bi-pencil-square"})]),e("div",vu,p(s.flat),1)])]),e("li",gu,[e("span",null,[c(" Building "),e("span",bu,[e("i",{onClick:i[4]||(i[4]=h=>n(o).currentStage=4),class:"bi bi-pencil-square"})]),e("div",$u,p(s.building),1)])]),e("li",Su,[e("span",null,[c(" Street "),e("span",{onClick:i[5]||(i[5]=h=>n(o).currentStage=4),class:"float-end"},xu),e("div",ku,p(s.street),1)])]),e("li",Cu,[e("span",null,[c(" State "),e("span",{class:"float-end",onClick:i[6]||(i[6]=h=>n(o).currentStage=4)},Au),e("div",Fu,p(s.state),1)])]),e("li",Pu,[e("span",null,[c(" Country "),e("span",{onClick:i[7]||(i[7]=h=>n(o).currentStage=4),class:"float-end"},Iu),e("div",Vu,p(s.country),1)])])])])])]),e("section",Du,[Lu,(f(!0),$(xe,null,Ie(s.founders_individual,h=>(f(),$("section",Ou,[e("div",Uu,[e("ul",Bu,[e("li",Ru,[e("span",null,[c(" Name "),e("span",{onClick:i[8]||(i[8]=k=>n(o).currentStage=5),class:"float-end"},ju),e("div",Nu,p(h.first_name)+" "+p(h.last_name),1)])]),e("li",zu,[e("span",null,[c(" Email "),e("span",{onClick:i[9]||(i[9]=k=>n(o).currentStage=5),class:"float-end"},Hu),e("div",Yu,p(h.email),1)])]),e("li",Wu,[e("span",null,[c(" Phone "),e("span",{onClick:i[10]||(i[10]=k=>n(o).currentStage=5),class:"float-end"},Ku),e("div",Zu,p(h.phone),1)])]),e("li",Ju,[e("span",null,[c(" Date of birth "),e("span",{onClick:i[11]||(i[11]=k=>n(o).currentStage=5),class:"float-end"},Qu),e("div",ep,p(n(_e).dateDisplay(h.dob)),1)])]),e("li",tp,[e("span",null,[c(" Occupation "),e("span",{onClick:i[12]||(i[12]=k=>n(o).currentStage=5),class:"float-end"},sp),e("div",op,p(h.occupation),1)])]),e("li",ip,[e("span",null,[c(" Flat "),e("span",{onClick:i[13]||(i[13]=k=>n(o).currentStage=5),class:"float-end"},lp),e("div",rp,p(h.res_address.flat),1)])]),e("li",cp,[e("span",null,[c(" Street "),e("span",{onClick:i[14]||(i[14]=k=>n(o).currentStage=5),class:"float-end"},up),e("div",pp,p(h.res_address.street),1)])]),e("li",_p,[e("span",null,[c(" Building "),e("span",{onClick:i[15]||(i[15]=k=>n(o).currentStage=5),class:"float-end"},hp),e("div",fp,p(h.res_address.building),1)])]),e("li",yp,[e("span",null,[c(" State "),e("span",{onClick:i[16]||(i[16]=k=>n(o).currentStage=5),class:"float-end"},gp),e("div",bp,p(h.res_address.state),1)])]),e("li",$p,[e("span",null,[c(" Country "),e("span",{onClick:i[17]||(i[17]=k=>n(o).currentStage=5),class:"float-end"},wp),e("div",xp,p(h.res_address.country),1)])]),e("li",kp,[e("span",null,[c(" Passport /HKID "),e("span",{onClick:i[18]||(i[18]=k=>n(o).currentStage=5),class:"float-end"},Ep),e("div",Ap,p(h.get_identity.identity_no!=null?h.get_identity.identity_no+"-"+h.get_identity.identity_no_suffix:h.get_identity.passport_no),1)])]),h.get_identity.identity_no!=null?(f(),$("li",Fp,[e("span",null,[c(" Issueing country "),e("span",{onClick:i[19]||(i[19]=k=>n(o).currentStage=5),class:"float-end"},Tp),e("div",Ip,p(h.get_identity.issueing_country!="undefined"?h.get_identity.issueing_country:""),1)])])):I("",!0)])])]))),256))]),e("section",Vp,[Dp,(f(!0),$(xe,null,Ie(s.founders_corporate,h=>(f(),$("section",Lp,[e("div",Op,[e("ul",Up,[e("li",Bp,[e("span",null,[c(" Company Name "),e("span",{onClick:i[20]||(i[20]=k=>n(o).currentStage=5),class:"float-end"},qp),e("div",jp,p(h.company_name),1)])]),e("li",Np,[e("span",null,[c(" Business Nature "),e("span",{onClick:i[21]||(i[21]=k=>n(o).currentStage=5),class:"float-end"},Mp),e("div",Hp,p(t(h.business_nature_id)),1)])]),e("li",Yp,[e("span",null,[c(" Date incorporated "),e("span",{onClick:i[22]||(i[22]=k=>n(o).currentStage=5),class:"float-end"},Gp),e("div",Kp,p(n(_e).dateDisplay(h.date_incorporated)),1)])]),e("li",Zp,[e("span",null,[c(" Flat "),e("span",{onClick:i[23]||(i[23]=k=>n(o).currentStage=5),class:"float-end"},Xp),e("div",Qp,p(h.flat),1)])]),e("li",e_,[e("span",null,[c(" Street "),e("span",{onClick:i[24]||(i[24]=k=>n(o).currentStage=5),class:"float-end"},n_),e("div",s_,p(h.street),1)])]),e("li",o_,[e("span",null,[c(" Building "),e("span",{onClick:i[25]||(i[25]=k=>n(o).currentStage=5),class:"float-end"},a_),e("div",l_,p(h.building),1)])]),e("li",r_,[e("span",null,[c(" State "),e("span",{onClick:i[26]||(i[26]=k=>n(o).currentStage=5),class:"float-end"},d_),e("div",u_,p(h.state),1)])]),e("li",p_,[e("span",null,[c(" Country "),e("span",{onClick:i[27]||(i[27]=k=>n(o).currentStage=5),class:"float-end"},m_),e("div",h_,p(h.country),1)])]),e("li",f_,[e("span",null,[c(" Authorized Person's Name "),e("span",{onClick:i[28]||(i[28]=k=>n(o).currentStage=5),class:"float-end"},v_),e("div",g_,p(h.authorized_persons.first_name)+" "+p(h.authorized_persons.last_name),1)])]),e("li",b_,[e("span",null,[c(" Authorized Person's Email "),e("span",{onClick:i[29]||(i[29]=k=>n(o).currentStage=5),class:"float-end"},S_),e("div",w_,p(h.authorized_persons.email),1)])]),e("li",x_,[e("span",null,[c(" Authorized Person's Phone "),e("span",{onClick:i[30]||(i[30]=k=>n(o).currentStage=5),class:"float-end"},C_),e("div",E_,p(h.authorized_persons.phone),1)])])])])]))),256))]),e("section",A_,[F_,e("section",P_,[e("div",T_,[e("ul",I_,[e("li",V_,[e("span",D_,[c(" Share Type "),e("span",L_,[e("i",{onClick:i[31]||(i[31]=h=>n(o).currentStage=6),class:"bi bi-pencil-square"})]),O_])]),e("li",U_,[e("span",B_,[c(" No of Shares "),e("span",R_,[e("i",{onClick:i[32]||(i[32]=h=>n(o).currentStage=6),class:"bi bi-pencil-square"})]),e("div",q_,p(s.no_of_share),1)])]),e("li",j_,[e("span",N_,[c(" Total Amount Paid "),e("span",z_,[e("i",{onClick:i[33]||(i[33]=h=>n(o).currentStage=6),class:"bi bi-pencil-square"})]),e("div",M_,p(s.total_amount_paid),1)])]),e("li",H_,[e("span",Y_,[c(" Currency "),e("span",W_,[e("i",{onClick:i[34]||(i[34]=h=>n(o).currentStage=6),class:"bi bi-pencil-square"})]),e("div",G_,p(s.currency),1)])]),e("li",K_,[e("span",Z_,[e("div",J_,[X_,e("ul",Q_,[(f(!0),$(xe,null,Ie(s.ownerShares,h=>(f(),$("li",em,[e("span",tm,p(h.amount),1),e("div",nm,p(h.name),1)]))),256))])])])])])])])]),e("section",sm,[om,e("section",im,[e("div",am,[e("ul",lm,[e("li",rm,[e("span",cm,[c(" Name "),e("span",dm,[e("i",{onClick:i[35]||(i[35]=h=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",um,p(s.secretary_name),1)])]),e("li",pm,[e("span",_m,[c(" company Reg No "),e("span",mm,[e("i",{onClick:i[36]||(i[36]=h=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",hm,p(s.secretary_company_reg_no),1)])]),e("li",fm,[e("span",ym,[c(" Country Registered "),e("span",vm,[e("i",{onClick:i[37]||(i[37]=h=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",gm,p(s.secretary_country_registered),1)])]),e("li",bm,[e("span",$m,[c(" Licence No "),e("span",Sm,[e("i",{onClick:i[38]||(i[38]=h=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",wm,p(s.secretary_licence_no),1)])]),e("li",xm,[e("span",km,[c(" Flat "),e("span",Cm,[e("i",{onClick:i[39]||(i[39]=h=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",Em,p(s.secretary_flat),1)])]),e("li",Am,[e("span",Fm,[c(" Street "),e("span",Pm,[e("i",{onClick:i[40]||(i[40]=h=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",Tm,p(s.secretary_street),1)])]),e("li",Im,[e("span",Vm,[c(" City/State "),e("span",Dm,[e("i",{onClick:i[41]||(i[41]=h=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",Lm,p(s.secretary_state),1)])]),e("li",Om,[e("span",Um,[c(" Country "),e("span",Bm,[e("i",{onClick:i[42]||(i[42]=h=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",Rm,p(s.secretary_country),1)])])])])])]),e("section",qm,[jm,e("section",Nm,[e("div",zm,[e("ul",Mm,[e("li",Hm,[e("span",null,[c(" Expected Source of Funds "),e("span",Ym,[e("i",{onClick:i[43]||(i[43]=h=>n(o).currentStage=8),class:"bi bi-pencil-square"})]),e("div",Wm,p(s.income_expected_source),1)])]),e("li",Gm,[e("span",null,[c(" Origin Source of Funds "),e("span",Km,[e("i",{onClick:i[44]||(i[44]=h=>n(o).currentStage=8),class:"bi bi-pencil-square"})]),e("div",Zm,p(s.origin_funds),1)])]),e("li",Jm,[e("span",null,[c(" Source of Wealth "),e("span",{onClick:i[45]||(i[45]=h=>n(o).currentStage=8),class:"float-end"},Qm),e("div",eh,p(s.wealth_initial_source),1)])]),e("li",th,[e("span",null,[c(" Ongoing Source of Wealth "),e("span",{onClick:i[46]||(i[46]=h=>n(o).currentStage=8),class:"float-end"},sh),e("div",oh,p(s.income_outgoing_source),1)])])])])])]),e("section",ih,[ah,e("section",lh,[e("div",rh,[e("ul",ch,[e("li",dh,[e("span",null,[c(" Activity Level "),e("span",uh,[e("i",{onClick:i[47]||(i[47]=h=>n(o).currentStage=9),class:"bi bi-pencil-square"})]),e("div",ph,p(s.activity_level),1)])]),e("li",_h,[e("span",null,[c(" Activity Nature "),e("span",mh,[e("i",{onClick:i[48]||(i[48]=h=>n(o).currentStage=9),class:"bi bi-pencil-square"})]),e("div",hh,p(s.activity_nature),1)])]),e("li",fh,[e("span",null,[c(" Description "),e("span",{onClick:i[49]||(i[49]=h=>n(o).currentStage=9),class:"float-end"},vh),e("div",gh,p(s.activity_description),1)])]),e("li",bh,[e("span",null,[c(" Customer Location Operation "),e("span",{onClick:i[50]||(i[50]=h=>n(o).currentStage=9),class:"float-end"},Sh),e("div",wh,p(s.activity_customer_location_operation),1)])]),e("li",xh,[e("span",null,[c(" Country "),e("span",{onClick:i[51]||(i[51]=h=>n(o).currentStage=9),class:"float-end"},Ch),e("div",Eh,p(s.activity_country),1)])])])])])]),e("div",Ah,[e("button",{onClick:i[52]||(i[52]=h=>y("-")),class:"btn btn-outline-info me-3"},[Fh,c(" Back ")]),e("button",{onClick:i[53]||(i[53]=h=>y("+")),class:"btn btn-primary"},[c(" Save & Continue "),Ph])])]}),info:N(()=>[Th,Ih,Vh]),_:1}))}}),Lh=ye(Dh,[["__scopeId","data-v-ef2dc022"]]),te=l=>(he("data-v-a171105a"),l=l(),fe(),l),Oh={class:"movement-buttons my-5"},Uh=te(()=>e("button",{class:"btn btn-outline-info me-3"},[e("i",{class:"bi bi-arrow-left"}),c(" Back ")],-1)),Bh=te(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Rh={key:1,class:"btn btn-primary",type:"button",disabled:""},qh=te(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),jh={key:0,class:"modal show d-block modal-bg-transparent",tabindex:"-1",role:"dialog","aria-hidden":"true"},Nh={class:"modal-dialog modal-dialog-centered",role:"document"},zh={class:"modal-content"},Mh={class:"modal-header"},Hh=te(()=>e("h5",{class:"modal-title"}," Draw Mouse to Sign Document ",-1)),Yh={class:"modal-body"},Wh={class:"modal-footer bg-transparent"},Gh={key:1,class:"btn btn-primary",type:"button",disabled:""},Kh=te(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),Zh=["disabled"],Jh=te(()=>e("span",{class:"float-end"},null,-1)),Xh=te(()=>e("br",null,null,-1)),Qh=te(()=>e("p",{style:{"margin-top":"10px"}},[e("span",{style:{color:"red"}}," Please review and Sign Document")],-1)),ef=te(()=>e("br",null,null,-1)),tf=te(()=>e("p",{style:{"border-bottom":"1px solid #000"}},"Signature will be applied to the following pages",-1)),nf=te(()=>e("p",null,[e("span",{class:"mr-2"},"📄"),c(" Incorporation Form (NNC1) "),e("br"),e("span",null,"We file this with the Companies Registry.")],-1)),sf=te(()=>e("p",null,[e("span",{class:"mr-2"},"📄"),c(" Articles of Association (AA) "),e("p",{class:"ml-6 text-gray-600"},"The Articles of Association is a document that outlines the regulations for a company's operations and the structure of its internal governance.")],-1)),of=te(()=>e("p",{class:"mb-1 flex items-center text-gray-700"},[e("span",{class:"mr-2"},"✔️"),c(" Notice to Business Registration Office (IRBR1) "),e("p",{class:"ml-6 text-gray-600"},"Notify the Inland Revenue for business registration."),e("ul",{class:"ml-10 list-inside list-disc text-gray-600"},[e("li",null,"This makes application for the purpose of business registration."),e("li",null,"Business registration is renewed on an annual basis if elected to obtain 1-year Business Registration Certificate."),e("li",null,"This shows your business address, and the nature of your business.")])],-1)),af=J({__name:"Sign",setup(l){const o=Z(),s=de.useToast(),t=H(!1),y=H(!1),u=H(null);function i(){u.value.undoSignature()}function v(){u.value.clearSignature()}const m=H("");me(()=>{var S;const E=[],V=((S=o.companyInProgress)==null?void 0:S.company_entity)??[];return V.length&&V.forEach(r=>{const w=r.individual||r.corporate;w&&(w.label=r.entity_type_id==1?`${w.first_name??w.chn_first_name} ${w.last_name??w.chn_last_name}`:`${w.company_name??w.chn_company_name}`,w.company_entity_id=r.id,E.push(w))}),E}),ie(async()=>{await K.ProcessKyc()});function _(){const{isEmpty:E,data:V}=u.value.saveSignature();E||(o.signatureImage=V,o.signatureDateSigned=new Date,y.value=!0,d())}async function d(){const E=new FormData;E.append("company_id",o.companyInProgress.id),E.append("company_entity_id",m.value.company_entity_id),E.append("signature",o.signatureImage),E.append("date_signed",o.signatureDateSigned);try{const V=await K.registerSignature(E);s.info("Signature added to founders  <br>  page successfully",{position:"top-right"}),t.value=!1,y.value=!1}catch{s.error("Something went wrong",{position:"top-right"}),t.value=!1,y.value=!1}}function a(){if(!o.signatureImage){s.error("Please add signature first!",{position:"top-right"});return}o.pdfIsSending=!0,setTimeout(()=>{o.pdfAction=!o.pdfAction},500)}return(E,V)=>{const S=ee("VueSignaturePad");return f(),q(ce,null,{main:N(()=>[e("div",null,[B(_t)]),e("div",Oh,[Uh,n(o).pdfIsSending?(f(),$("button",Rh,[qh,c(" Processing, Please wait.... ")])):(f(),$("button",{key:0,onClick:a,class:"btn btn-primary"},[c(" Proceed to complete Payment "),Bh]))])]),info:N(()=>[t.value?(f(),$("div",jh,[e("div",Nh,[e("div",zh,[e("div",Mh,[Hh,e("button",{onClick:V[0]||(V[0]=r=>t.value=!1),type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),e("div",Yh,[B(S,{class:"bg-transparent",height:"300px",width:"100%",ref_key:"signaturePad",ref:u},null,512)]),e("div",Wh,[y.value?(f(),$("button",Gh,[Kh,c(" Saving... ")])):(f(),$("button",{key:0,onClick:_,type:"button",class:"btn btn-primary"},"Save Signature")),e("button",{onClick:v,type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Clear "),e("button",{disabled:y.value,onClick:i,class:"btn btn-warning"},"Undo",8,Zh)])])])])):I("",!0),e("button",{class:"btn btn-primary mt-3",onClick:V[1]||(V[1]=r=>t.value=!0)},"Sign Document"),Jh,Xh,Qh,ef,tf,nf,sf,of]),_:1})}}}),lf=ye(af,[["__scopeId","data-v-a171105a"]]);var Te={};const rf="@vue-stripe/vue-stripe",cf="4.5.0",df="Stripe Checkout & Elements for Vue.js",uf="jofftiquez@gmail.com",pf={build:"rollup -c",lint:"vue-cli-service lint --fix",prebuild:"rimraf dist",test:"jest"},_f="dist/index.js",mf="dist",hf={"@stripe/stripe-js":"^1.13.2","vue-coerce-props":"^1.0.0"},ff={"@babel/cli":"^7.7.5","@babel/core":"^7.7.5","@babel/plugin-proposal-export-default-from":"^7.7.4","@babel/plugin-proposal-optional-chaining":"^7.10.4","@babel/plugin-transform-runtime":"^7.7.5","@babel/preset-env":"^7.7.5","@babel/preset-es2015":"^7.0.0-beta.53","@babel/runtime":"^7.7.5","@rollup/plugin-node-resolve":"^6.0.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"^4.5.10","@vue/eslint-config-standard":"^5.1.2","babel-eslint":"^10.1.0","babel-minify":"^0.5.1","cross-env":"^6.0.3",eslint:"^6.8.0","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.2.2",jest:"^24.9.0","lint-staged":"^9.5.0",rimraf:"^3.0.0",rollup:"^1.27.9","rollup-plugin-babel":"^4.3.3","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-terser":"^5.1.3","rollup-plugin-uglify":"^6.0.3","rollup-plugin-vue":"^5.1.4","vue-template-compiler":"^2.6.11"},yf={url:"https://github.com/vue-stripe/vue-stripe/issues"},vf={"pre-commit":"lint-staged"},gf="https://github.com/vue-stripe/vue-stripe#readme",bf=["vue","vuejs","stripe","checkout","payment"],$f="MIT",Sf={type:"git",url:"git@github.com:vue-stripe/vue-stripe.git"},wf="typings/index.d.ts",xf={name:rf,version:cf,description:df,author:uf,scripts:pf,main:_f,module:mf,dependencies:hf,devDependencies:ff,bugs:yf,gitHooks:vf,homepage:gf,keywords:bf,license:$f,"lint-staged":{"*.{js,jsx,vue}":["vue-cli-service lint","git add"]},repository:Sf,typings:wf};Object.defineProperty(Te,"__esModule",{value:!0});var Ne="auto",kf=["auto","bg","cs","da","de","el","en","en-GB","es","es-419","et","fi","fr","fr-CA","hu","id","it","ja","lt","lv","ms","mt","nb","nl","pl","pt","pt-BR","ro","ru","sk","sl","sv","tr","zh","zh-HK","zh-TW"],Cf=["auto","book","donate","pay"],Ef=["required","auto"],Af={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},Ff=xf.version,Be={name:"vue-stripe",version:Ff,url:"https://vuestripe.com",partner_id:"pp_partner_IqtOXpBSuz0IE2"},Pf={install:function(l,o){var s=o.pk,t=o.stripeAccount,y=o.apiVersion,u=o.locale,i=window.Stripe(s,{stripeAccount:t,apiVersion:y,locale:u});i.registerAppInfo(Be),l.prototype.$stripe=i}};function Tf(l,o){return l(o={exports:{}},o.exports),o.exports}var If=Tf(function(l){var o=function(s){var t,y=Object.prototype,u=y.hasOwnProperty,i=typeof Symbol=="function"?Symbol:{},v=i.iterator||"@@iterator",m=i.asyncIterator||"@@asyncIterator",_=i.toStringTag||"@@toStringTag";function d(b,g,T,L){var A=g&&g.prototype instanceof h?g:h,U=Object.create(A.prototype),se=new Ee(L||[]);return U._invoke=function(ve,Ue,R){var oe=E;return function(Se,Fe){if(oe===S)throw new Error("Generator is already running");if(oe===r){if(Se==="throw")throw Fe;return Oe()}for(R.method=Se,R.arg=Fe;;){var Pe=R.delegate;if(Pe){var pe=Le(Pe,R);if(pe){if(pe===w)continue;return pe}}if(R.method==="next")R.sent=R._sent=R.arg;else if(R.method==="throw"){if(oe===E)throw oe=r,R.arg;R.dispatchException(R.arg)}else R.method==="return"&&R.abrupt("return",R.arg);oe=S;var X=a(ve,Ue,R);if(X.type==="normal"){if(oe=R.done?r:V,X.arg===w)continue;return{value:X.arg,done:R.done}}X.type==="throw"&&(oe=r,R.method="throw",R.arg=X.arg)}}}(b,T,se),U}function a(b,g,T){try{return{type:"normal",arg:b.call(g,T)}}catch(L){return{type:"throw",arg:L}}}s.wrap=d;var E="suspendedStart",V="suspendedYield",S="executing",r="completed",w={};function h(){}function k(){}function O(){}var M={};M[v]=function(){return this};var ne=Object.getPrototypeOf,be=ne&&ne(ne(Ae([])));be&&be!==y&&u.call(be,v)&&(M=be);var ue=O.prototype=h.prototype=Object.create(M);function De(b){["next","throw","return"].forEach(function(g){b[g]=function(T){return this._invoke(g,T)}})}function $e(b){var g;this._invoke=function(T,L){function A(){return new Promise(function(U,se){(function ve(Ue,R,oe,Se){var Fe=a(b[Ue],b,R);if(Fe.type!=="throw"){var Pe=Fe.arg,pe=Pe.value;return pe&&typeof pe=="object"&&u.call(pe,"__await")?Promise.resolve(pe.__await).then(function(X){ve("next",X,oe,Se)},function(X){ve("throw",X,oe,Se)}):Promise.resolve(pe).then(function(X){Pe.value=X,oe(Pe)},function(X){return ve("throw",X,oe,Se)})}Se(Fe.arg)})(T,L,U,se)})}return g=g?g.then(A,A):A()}}function Le(b,g){var T=b.iterator[g.method];if(T===t){if(g.delegate=null,g.method==="throw"){if(b.iterator.return&&(g.method="return",g.arg=t,Le(b,g),g.method==="throw"))return w;g.method="throw",g.arg=new TypeError("The iterator does not provide a 'throw' method")}return w}var L=a(T,b.iterator,g.arg);if(L.type==="throw")return g.method="throw",g.arg=L.arg,g.delegate=null,w;var A=L.arg;return A?A.done?(g[b.resultName]=A.value,g.next=b.nextLoc,g.method!=="return"&&(g.method="next",g.arg=t),g.delegate=null,w):A:(g.method="throw",g.arg=new TypeError("iterator result is not an object"),g.delegate=null,w)}function Re(b){var g={tryLoc:b[0]};1 in b&&(g.catchLoc=b[1]),2 in b&&(g.finallyLoc=b[2],g.afterLoc=b[3]),this.tryEntries.push(g)}function Ce(b){var g=b.completion||{};g.type="normal",delete g.arg,b.completion=g}function Ee(b){this.tryEntries=[{tryLoc:"root"}],b.forEach(Re,this),this.reset(!0)}function Ae(b){if(b){var g=b[v];if(g)return g.call(b);if(typeof b.next=="function")return b;if(!isNaN(b.length)){var T=-1,L=function A(){for(;++T<b.length;)if(u.call(b,T))return A.value=b[T],A.done=!1,A;return A.value=t,A.done=!0,A};return L.next=L}}return{next:Oe}}function Oe(){return{value:t,done:!0}}return k.prototype=ue.constructor=O,O.constructor=k,O[_]=k.displayName="GeneratorFunction",s.isGeneratorFunction=function(b){var g=typeof b=="function"&&b.constructor;return!!g&&(g===k||(g.displayName||g.name)==="GeneratorFunction")},s.mark=function(b){return Object.setPrototypeOf?Object.setPrototypeOf(b,O):(b.__proto__=O,_ in b||(b[_]="GeneratorFunction")),b.prototype=Object.create(ue),b},s.awrap=function(b){return{__await:b}},De($e.prototype),$e.prototype[m]=function(){return this},s.AsyncIterator=$e,s.async=function(b,g,T,L){var A=new $e(d(b,g,T,L));return s.isGeneratorFunction(g)?A:A.next().then(function(U){return U.done?U.value:A.next()})},De(ue),ue[_]="Generator",ue[v]=function(){return this},ue.toString=function(){return"[object Generator]"},s.keys=function(b){var g=[];for(var T in b)g.push(T);return g.reverse(),function L(){for(;g.length;){var A=g.pop();if(A in b)return L.value=A,L.done=!1,L}return L.done=!0,L}},s.values=Ae,Ee.prototype={constructor:Ee,reset:function(b){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Ce),!b)for(var g in this)g.charAt(0)==="t"&&u.call(this,g)&&!isNaN(+g.slice(1))&&(this[g]=t)},stop:function(){this.done=!0;var b=this.tryEntries[0].completion;if(b.type==="throw")throw b.arg;return this.rval},dispatchException:function(b){if(this.done)throw b;var g=this;function T(Ue,R){return U.type="throw",U.arg=b,g.next=Ue,R&&(g.method="next",g.arg=t),!!R}for(var L=this.tryEntries.length-1;L>=0;--L){var A=this.tryEntries[L],U=A.completion;if(A.tryLoc==="root")return T("end");if(A.tryLoc<=this.prev){var se=u.call(A,"catchLoc"),ve=u.call(A,"finallyLoc");if(se&&ve){if(this.prev<A.catchLoc)return T(A.catchLoc,!0);if(this.prev<A.finallyLoc)return T(A.finallyLoc)}else if(se){if(this.prev<A.catchLoc)return T(A.catchLoc,!0)}else{if(!ve)throw new Error("try statement without catch or finally");if(this.prev<A.finallyLoc)return T(A.finallyLoc)}}}},abrupt:function(b,g){for(var T=this.tryEntries.length-1;T>=0;--T){var L=this.tryEntries[T];if(L.tryLoc<=this.prev&&u.call(L,"finallyLoc")&&this.prev<L.finallyLoc){var A=L;break}}A&&(b==="break"||b==="continue")&&A.tryLoc<=g&&g<=A.finallyLoc&&(A=null);var U=A?A.completion:{};return U.type=b,U.arg=g,A?(this.method="next",this.next=A.finallyLoc,w):this.complete(U)},complete:function(b,g){if(b.type==="throw")throw b.arg;return b.type==="break"||b.type==="continue"?this.next=b.arg:b.type==="return"?(this.rval=this.arg=b.arg,this.method="return",this.next="end"):b.type==="normal"&&g&&(this.next=g),w},finish:function(b){for(var g=this.tryEntries.length-1;g>=0;--g){var T=this.tryEntries[g];if(T.finallyLoc===b)return this.complete(T.completion,T.afterLoc),Ce(T),w}},catch:function(b){for(var g=this.tryEntries.length-1;g>=0;--g){var T=this.tryEntries[g];if(T.tryLoc===b){var L=T.completion;if(L.type==="throw"){var A=L.arg;Ce(T)}return A}}throw new Error("illegal catch attempt")},delegateYield:function(b,g,T){return this.delegate={iterator:Ae(b),resultName:g,nextLoc:T},this.method==="next"&&(this.arg=t),w}},s}(l.exports);try{regeneratorRuntime=o}catch{Function("r","regeneratorRuntime = r")(o)}}),re=If;function tt(l){return(tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(l)}var nt,st="https://js.stripe.com/v3",Vf=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,He="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Df=function(){for(var l=document.querySelectorAll('script[src^="'.concat(st,'"]')),o=0;o<l.length;o++){var s=l[o];if(Vf.test(s.src))return s}return null},Lf=function(l){var o=l&&!l.advancedFraudSignals?"?advancedFraudSignals=false":"",s=document.createElement("script");s.src="".concat(st).concat(o);var t=document.head||document.body;if(!t)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return t.appendChild(s),s},Of=function(l,o){l&&l._registerWrapper&&l._registerWrapper({name:"stripe-js",version:"1.13.2",startTime:o})},ze=null,Uf=function(l){return ze!==null?ze:ze=new Promise(function(o,s){if(typeof window<"u")if(window.Stripe&&l&&console.warn(He),window.Stripe)o(window.Stripe);else try{var t=Df();t&&l?console.warn(He):t||(t=Lf(l)),t.addEventListener("load",function(){window.Stripe?o(window.Stripe):s(new Error("Stripe.js not available"))}),t.addEventListener("error",function(){s(new Error("Failed to load Stripe.js"))})}catch(y){return void s(y)}else o(null)})},Bf=function(l,o,s){if(l===null)return null;var t=l.apply(void 0,o);return Of(t,s),t},Rf=function(l){var o=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(l),`
`);if(l===null||tt(l)!=="object")throw new Error(o);if(Object.keys(l).length===1&&typeof l.advancedFraudSignals=="boolean")return l;throw new Error(o)},ot=!1,ke=function(){for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];ot=!0;var t=Date.now();return Uf(nt).then(function(y){return Bf(y,o,t)})};ke.setLoadParameters=function(l){if(ot)throw new Error("You cannot change load parameters after calling loadStripe");nt=Rf(l)};/**
 * vue-coerce-props v1.0.0
 * (c) 2018 Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */var qf={beforeCreate:function(){var l=this.$options.props;l&&(this._$coertions=Object.keys(l).filter(function(o){return l[o].coerce}).map(function(o){return[o,l[o].coerce]}))},computed:{$coerced:function(){var l=this;return this._$coertions.reduce(function(o,s){var t=s[0],y=s[1];return o[t]=y.call(l,l.$props[t]),o},{})}}},jf={pk:{type:String,required:!0},mode:{type:String,validator:function(l){return["payment","subscription"].includes(l)}},lineItems:{type:Array,default:void 0},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(l){return Cf.includes(l)}},billingAddressCollection:{type:String,default:"auto",validator:function(l){return Ef.includes(l)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:Ne,coerce:function(l){return kf.includes(l)?l:(console.warn("VueStripe Warning: '".concat(l,"' is not supported by Stripe yet. Falling back to default '").concat(Ne,"'.")),Ne)}},shippingAddressCollection:{type:Object,validator:function(l){return Object.prototype.hasOwnProperty.call(l,"allowedCountries")}},disableAdvancedFraudDetection:{type:Boolean},stripeOptions:{type:Object,default:null}},Nf={props:jf,mixins:[qf],render:function(l){return l},methods:{redirectToCheckout:function(){var l,o,s;return re.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.$emit("loading",!0),this.disableAdvancedFraudDetection&&ke.setLoadParameters({advancedFraudSignals:!1}),l={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},t.next=6,re.awrap(ke(this.pk,l));case 6:if((o=t.sent).registerAppInfo(Be),!this.sessionId){t.next=11;break}return o.redirectToCheckout({sessionId:this.sessionId}),t.abrupt("return");case 11:if(!this.lineItems||!this.lineItems.length||this.mode){t.next=14;break}return console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode"),t.abrupt("return");case 14:return s={billingAddressCollection:this.billingAddressCollection,cancelUrl:this.cancelUrl,clientReferenceId:this.clientReferenceId,customerEmail:this.customerEmail,items:this.items,lineItems:this.lineItems,locale:this.$coerced.locale,mode:this.mode,shippingAddressCollection:this.shippingAddressCollection,submitType:this.submitType,successUrl:this.successUrl},t.abrupt("return",o.redirectToCheckout(s));case 18:t.prev=18,t.t0=t.catch(0),console.error(t.t0),this.$emit("error",t.t0);case 22:case"end":return t.stop()}},null,this,[[0,18]])}}};function zf(l,o,s){return o in l?Object.defineProperty(l,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[o]=s,l}var Mf=zf;function Ye(l,o){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(l);o&&(t=t.filter(function(y){return Object.getOwnPropertyDescriptor(l,y).enumerable})),s.push.apply(s,t)}return s}function Hf(l){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?Ye(Object(s),!0).forEach(function(t){Mf(l,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):Ye(Object(s)).forEach(function(t){Object.defineProperty(l,t,Object.getOwnPropertyDescriptor(s,t))})}return l}var Yf="card",Wf={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},elementsOptions:{type:Object,default:function(){return{}}},tokenData:{type:Object,default:function(){return{}}},disableAdvancedFraudDetection:{type:Boolean},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return Af}},value:{type:String,default:void 0},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(l){return["solid","default"].includes(l)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,element:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},mounted:function(){var l,o,s=this;return re.async(function(t){for(;;)switch(t.prev=t.next){case 0:return this.disableAdvancedFraudDetection&&ke.setLoadParameters({advancedFraudSignals:!1}),l={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},o={classes:this.classes,style:this.elementStyle,value:this.value,hidePostalCode:this.hidePostalCode,iconStyle:this.iconStyle,hideIcon:this.hideIcon,disabled:this.disabled},t.next=5,re.awrap(ke(this.pk,l));case 5:this.stripe=t.sent,this.stripe.registerAppInfo(Be),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(Yf,o),this.element.mount("#stripe-element-mount-point"),this.element.on("change",function(y){var u=document.getElementById("stripe-element-errors");y.error?u.textContent=y.error.message:u.textContent="",s.onChange(y)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(y){var u,i,v,m;return re.async(function(_){for(;;)switch(_.prev=_.next){case 0:return _.prev=0,s.$emit("loading",!0),y.preventDefault(),u=Hf({},s.element),s.amount&&(u.amount=s.amount),_.next=7,re.awrap(s.stripe.createToken(u,s.tokenData));case 7:if(i=_.sent,v=i.token,!(m=i.error)){_.next=15;break}return document.getElementById("stripe-element-errors").textContent=m.message,s.$emit("error",m),_.abrupt("return");case 15:s.$emit("token",v),_.next=22;break;case 18:_.prev=18,_.t0=_.catch(0),console.error(_.t0),s.$emit("error",_.t0);case 22:return _.prev=22,s.$emit("loading",!1),_.finish(22);case 25:case"end":return _.stop()}},null,null,[[0,18,22,25]])});case 17:case"end":return t.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},unmount:function(){this.element.unmount()},update:function(l){this.element.update(l)},onChange:function(l){this.$emit("element-change",l)},onReady:function(l){this.$emit("element-ready",l)},onFocus:function(l){this.$emit("element-focus",l)},onBlur:function(l){this.$emit("element-blur",l)},onEscape:function(l){this.$emit("element-escape",l)},onClick:function(l){this.$emit("element-click",l)}}};function it(l,o,s,t,y,u,i,v,m,_){typeof i!="boolean"&&(m=v,v=i,i=!1);const d=typeof s=="function"?s.options:s;let a;if(l&&l.render&&(d.render=l.render,d.staticRenderFns=l.staticRenderFns,d._compiled=!0,y&&(d.functional=!0)),t&&(d._scopeId=t),u?(a=function(E){(E=E||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(E=__VUE_SSR_CONTEXT__),o&&o.call(this,m(E)),E&&E._registeredComponents&&E._registeredComponents.add(u)},d._ssrRegister=a):o&&(a=i?function(E){o.call(this,_(E,this.$root.$options.shadowRoot))}:function(E){o.call(this,v(E))}),a)if(d.functional){const E=d.render;d.render=function(V,S){return a.call(S),E(V,S)}}else{const E=d.beforeCreate;d.beforeCreate=E?[].concat(E,a):[a]}return s}const Gf=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function at(l){return(o,s)=>Kf(o,s)}let Me;const We={};function Kf(l,o){const s=Gf?o.media||"default":l,t=We[s]||(We[s]={ids:new Set,styles:[]});if(!t.ids.has(l)){t.ids.add(l);let y=o.source;if(o.map&&(y+=`
/*# sourceURL=`+o.map.sources[0]+" */",y+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(o.map))))+" */"),t.element||(t.element=document.createElement("style"),t.element.type="text/css",o.media&&t.element.setAttribute("media",o.media),Me===void 0&&(Me=document.head||document.getElementsByTagName("head")[0]),Me.appendChild(t.element)),"styleSheet"in t.element)t.styles.push(y),t.element.styleSheet.cssText=t.styles.filter(Boolean).join(`
`);else{const u=t.ids.size-1,i=document.createTextNode(y),v=t.element.childNodes;v[u]&&t.element.removeChild(v[u]),v.length?t.element.insertBefore(i,v[u]):t.element.appendChild(i)}}}const Zf=Wf;var lt=function(){var l=this.$createElement,o=this._self._c||l;return o("div",[o("form",{attrs:{id:"stripe-element-form"}},[o("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[o("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),o("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},Jf=[];lt._withStripped=!0;const Xf=function(l){l&&l("data-v-4dd8360e_0",{source:`





















































































































































































































































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
`]},media:void 0})},Qf="data-v-4dd8360e",ey=it({render:lt,staticRenderFns:Jf},Xf,Zf,Qf,!1,void 0,!1,at,void 0,void 0);var ty="payment",ny={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},elementsOptions:{type:Object,required:!0,default:function(){return{}}},confirmParams:{type:Object,required:!0,default:function(){return{}}},redirect:{type:String,default:"always"},createOptions:{type:Object,default:function(){return{}}},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},disableAdvancedFraudDetection:{type:Boolean}},data:function(){return{loading:!1,stripe:null,elements:null,element:null}},computed:{form:function(){return document.getElementById("stripe-payment-element-form")}},mounted:function(){var l,o=this;return re.async(function(s){for(;;)switch(s.prev=s.next){case 0:return this.disableAdvancedFraudDetection&&ke.setLoadParameters({advancedFraudSignals:!1}),l={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},s.next=4,re.awrap(ke(this.pk,l));case 4:this.stripe=s.sent,this.stripe.registerAppInfo(Be),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(ty,this.createOptions),this.element.mount("#stripe-payment-element-mount-point"),this.element.on("change",function(t){var y=document.getElementById("stripe-payment-element-errors");t.error?y.textContent=t.error.message:y.textContent="",o.onChange(t)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(t){var y,u,i;return re.async(function(v){for(;;)switch(v.prev=v.next){case 0:return v.prev=0,o.$emit("loading",!0),t.preventDefault(),v.next=5,re.awrap(o.stripe.confirmPayment({elements:o.elements,confirmParams:o.confirmParams,redirect:o.redirect}));case 5:if(y=v.sent,u=y.error,i=y.paymentIntent,!u){v.next=15;break}return document.getElementById("stripe-payment-element-errors").textContent=u.message,o.$emit("error",u),v.abrupt("return");case 15:i&&o.$emit("confirmed",i);case 16:v.next=22;break;case 18:v.prev=18,v.t0=v.catch(0),console.error(v.t0),o.$emit("error",v.t0);case 22:return v.prev=22,o.$emit("loading",!1),v.finish(22);case 25:case"end":return v.stop()}},null,null,[[0,18,22,25]])});case 16:case"end":return s.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},collapse:function(){this.element.collapse()},getElement:function(){this.element.getElement()},unmount:function(){this.element.unmount()},update:function(l){this.element.update(l)},onChange:function(l){this.$emit("element-change",l)},onReady:function(l){this.$emit("element-ready",l)},onFocus:function(l){this.$emit("element-focus",l)},onBlur:function(l){this.$emit("element-blur",l)},onEscape:function(l){this.$emit("element-escape",l)},onClick:function(l){this.$emit("element-click",l)}}};const sy=ny;var rt=function(){var l=this.$createElement,o=this._self._c||l;return o("div",[o("form",{attrs:{id:"stripe-payment-element-form"}},[o("div",{attrs:{id:"stripe-payment-element-mount-point"}}),this._v(" "),this._t("stripe-payment-element-errors",[o("div",{attrs:{id:"stripe-payment-element-errors",role:"alert"}})]),this._v(" "),o("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},oy=[];rt._withStripped=!0;const iy=function(l){l&&l("data-v-171d7aec_0",{source:`












































































































































































































































































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
`]},media:void 0})},ay=it({render:rt,staticRenderFns:oy},iy,sy,"data-v-171d7aec",!1,void 0,!1,at,void 0,void 0);var ly={install:function(l,o){var s,t,y,u,i,v,m;return re.async(function(_){for(;;)switch(_.prev=_.next){case 0:s=o.pk,t=o.stripeAccount,y=o.apiVersion,u=o.locale,i=o.elementsOptions,(v=window.Stripe(s,{stripeAccount:t,apiVersion:y,locale:u})).registerAppInfo(Be),m=v.elements(i),l.prototype.$stripe=v,l.prototype.$stripeElements=m;case 6:case"end":return _.stop()}})}};Te.StripeCheckout=Nf,Te.StripeElementCard=ey,Te.StripeElementPayment=ay,Te.StripeElementsPlugin=ly,Te.StripePlugin=Pf;const le=l=>(he("data-v-12e88b02"),l=l(),fe(),l),ry={key:0,class:"row justify-content-center"},cy=le(()=>e("div",{id:"complycube-mount"},null,-1)),dy={class:"alert alert-success text-center",role:"alert"},uy=le(()=>e("i",{style:{"font-size":"2.56rem"},class:"bi bi-check-circle"},null,-1)),py=le(()=>e("h5",null," Payment Completed ",-1)),_y=le(()=>e("p",null,"We have received your request, please exercise patience while we setup your company",-1)),my=["href"],hy={key:1},fy={key:0,class:"text-center text-danger mt-5"},yy=le(()=>e("strong",null,"Error!,",-1)),vy={class:"row justify-content-center"},gy={id:"payment-form"},by={key:0,class:"row my-2"},$y=le(()=>e("div",{class:"col-12"},[e("label",{for:"",class:"form-label"},"Card holder's name"),e("input",{type:"text",class:"form-control",placeholder:"Full name on Card"})],-1)),Sy=[$y],wy=le(()=>e("div",{id:"payment-element"},null,-1)),xy={key:1,class:"form-check"},ky=le(()=>e("input",{class:"form-check-input",type:"checkbox",value:"",id:"checker"},null,-1)),Cy=le(()=>e("label",{class:"form-check-label",for:"checker"},[e("div",{class:"fw-bold"}," Securely save my information for 1-click checkout "),e("span",null," Pay faster on Stripe Atlas and everywhere Link is accepted ")],-1)),Ey=[ky,Cy],Ay={key:2,class:"small my-3"},Fy={key:3,id:"submit"},Py=le(()=>e("div",{class:"spinner hidden",id:"spinner"},null,-1)),Ty=le(()=>e("span",{id:"button-text"},"Pay now",-1)),Iy=[Py,Ty],Vy={key:4,class:"small mt-3"},Dy=le(()=>e("div",{id:"payment-message",class:"hidden"},null,-1)),Ly="pk_test_51P7LhqRxBSKsFyqbPdmjZpG4tFsnyLZEV6Tn38aic7H4oeWOSub5gTRnjF4vgdRbBJutMM0G3d2x3c9VFz2g1dkX00bPRK5pYT",Oy=J({__name:"Pay",setup(l){const o=Z(),s=me(()=>{var r,w;return(w=(r=o.companyInProgress)==null?void 0:r.billing)==null?void 0:w.status}),t=Stripe(Ly),y=H(!1),u=H(!1);let i="",v;const m=[{id:"xl-tshirt"}];ie(async()=>{a();try{u.value=!1;const{data:S}=await K.paymentIntent(m);i=S.client_secret,S!=null&&S.client_secret&&(y.value=!0),v=t.elements({clientSecret:i});const r={layout:"tabs"};v.create("payment",r).mount("#payment-element"),document.querySelector("#payment-form"),document.addEventListener("submit",d)}catch{u.value=!0}});const _=me(()=>"http://localhost:5173/kcy/verifications");async function d(S){S.preventDefault(),V(!0);const{error:r}=await t.confirmPayment({elements:v,confirmParams:{return_url:"http://localhost:5173/kcy/verifications"}});r.type==="card_error"||r.type==="validation_error"?E(r.message):E("An unexpected error occurred."),V(!1)}async function a(){const S=new URLSearchParams(window.location.search).get("payment_intent_client_secret");if(!S)return;const{paymentIntent:r}=await t.retrievePaymentIntent(S);switch(r.status){case"succeeded":E("Payment succeeded!");break;case"processing":E("Your payment is processing.");break;case"requires_payment_method":E("Your payment was not successful, please try again.");break;default:E("Something went wrong.");break}}function E(S){const r=document.querySelector("#payment-message");r.classList.remove("hidden"),r.textContent=S,setTimeout(function(){r.classList.add("hidden"),r.textContent=""},4e3)}function V(S){S?(document.querySelector("#submit").disabled=!0,document.querySelector("#spinner").classList.remove("hidden"),document.querySelector("#button-text").classList.add("hidden")):(document.querySelector("#submit").disabled=!1,document.querySelector("#spinner").classList.add("hidden"),document.querySelector("#button-text").classList.remove("hidden"))}return(S,r)=>(f(),q(ce,null,{main:N(()=>[s.value?(f(),$("div",ry,[cy,e("div",dy,[uy,py,_y,e("small",null,[c("If you have not completed your KYC, please "),e("a",{href:_.value}," click here ",8,my)])])])):(f(),$("div",hy,[u.value?(f(),$("div",fy,[yy,c(" Cannot load payment information, please reload page. ")])):I("",!0),e("div",vy,[e("form",gy,[y.value?(f(),$("div",by,Sy)):I("",!0),wy,y.value?(f(),$("div",xy,Ey)):I("",!0),y.value?(f(),$("div",Ay," To pay your company formation fee, make sure you're not using an anonymous IP address or a VPN. ")):I("",!0),y.value?(f(),$("button",Fy,Iy)):I("",!0),y.value?(f(),$("div",Vy," By confirming your payment, you allow Stripe Atlas to charge you for this payment and the future payments in accordance with their terms. ")):I("",!0),Dy])])]))]),info:N(()=>[]),_:1}))}}),Uy=ye(Oy,[["__scopeId","data-v-12e88b02"]]),By={key:1},Jy=J({__name:"StartCompany_index",setup(l){Ze();const o=Ke();Qe(),et();const s=Z(),t=H(!0);ie(async()=>{await s.getCompanyInProgress(),t.value=!1,s.getBusinessNatures(),s.getCountries(),y()});function y(){var i;const u=((i=s.companyInProgress)==null?void 0:i.names)??[];u.length&&(u.find(a=>a.choice_level==1),u.find(a=>a.choice_level==2)&&(o.isSecond=!0),u.find(a=>a.choice_level==3)&&(o.isThird=!0),u.find(a=>a.choice_level==4)&&(o.isForth=!0),u.find(a=>a.choice_level==5)&&(o.isFifth=!0))}return(u,i)=>t.value?(f(),q(ct,{key:0})):(f(),$("div",By,[n(s).currentStage==2?(f(),q(es,{key:0})):I("",!0),n(s).currentStage==3?(f(),q(Cs,{key:1})):I("",!0),n(s).currentStage==4?(f(),q(Qs,{key:2})):I("",!0),n(s).currentStage==5?(f(),q(Ql,{key:3})):I("",!0),n(s).currentStage==6?(f(),q(tc,{key:4})):I("",!0),n(s).currentStage==7?(f(),q(Tc,{key:5})):I("",!0),n(s).currentStage==8?(f(),q(nd,{key:6})):I("",!0),n(s).currentStage==9?(f(),q(jd,{key:7})):I("",!0),n(s).currentStage==10?(f(),q(Lh,{key:8})):I("",!0),n(s).currentStage==11?(f(),q(lf,{key:9})):I("",!0),n(s).currentStage==12?(f(),q(Uy,{key:10})):I("",!0)]))}});export{Jy as default};
