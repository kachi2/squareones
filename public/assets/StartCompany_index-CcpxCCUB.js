import{u as J}from"./StartCompany_store-COw-lhC_.js";import{p as ct}from"./pageLoadingComponent-CK82PhXS.js";import{d as X,r as H,k as ie,l as ge,n as Ie,p as je,o as y,q as R,s as N,b as e,w as x,x as C,e as n,v as A,t as p,y as ee,c as w,f as r,g as V,z as me,A as K,B as U,C as Ge,m as dt,D as he,E as fe,_ as ye,F as qe,G as xe,H as Ve}from"./index-BgsvWNgW.js";import{n as Ke,S as ce,d as Ze,f as Je,a as Xe,s as Qe,b as et}from"./StartCompany_template-CuYvup-J.js";import{d as de}from"./index-BTQnJxF_.js";import{a as Z}from"./index-D20_6Lrq.js";import{j as W}from"./maska-Cp-LWreF.js";import{u as ut}from"./vee-validate.esm-BNAo_wuU.js";import{a as we,c as pt}from"./index.esm-BZdrmVid.js";import{u as _e}from"./useFunctions-BabDraho.js";import{B as _t}from"./BasePdf-DcIfwJMF.js";import"./sweetalert2.all-BeYPNZzi.js";const mt=e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Name"),e("span",null,"Enter your preferred company names in order of priority.")],-1),ht={class:"section"},ft=e("div",{class:"fw-bold"},"Primary Choice",-1),yt=e("div",null,"This is your most preferred company name. Ensure it is the legal name intended for registration. ",-1),vt={class:"row g-2 mt-1"},gt={class:"col-md-6"},bt={class:"text-danger"},$t={class:"col-md-6"},St=e("option",{value:"Limited"},"Limited",-1),wt=e("option",{value:"LIMITED"},"LIMITED",-1),xt=[St,wt],kt={class:"col-md-6"},Ct={class:"text-danger"},Et={class:"col-md-6"},At=e("option",{value:"有限公司"},"有限公司",-1),Ft=[At],Pt={key:0,class:"section"},Tt=e("div",{class:"fw-bolder"},"Secondary Choices",-1),Vt=e("div",null,"These are alternative names you would consider should your primary choice be unavailable. List them in descending order of preference.",-1),It={class:"row g-2 mt-1"},Dt={class:"col-md-6"},Lt={class:"text-danger"},Ot={class:"col-md-6"},Ut=e("option",{value:"Limited"},"Limited",-1),Bt=e("option",{value:"LIMITED"},"LIMITED",-1),Rt=[Ut,Bt],qt={class:"col-md-6"},jt={class:"text-danger"},Nt={class:"col-md-6"},zt=e("option",{value:"有限公司"},"有限公司",-1),Mt=[zt],Ht={class:"p-1 mt-1"},Yt=e("i",{class:"bi bi-x-circle"},null,-1),Wt={key:1,class:"section"},Gt=e("div",{class:"fw-bold"},"Third Choice",-1),Kt=e("div",null,"This is your third choice company name. Ensure it is the legal name intended for registration. ",-1),Zt={class:"row g-2 mt-1"},Jt={class:"col-md-6"},Xt={class:"text-danger"},Qt={class:"col-md-6"},en=e("option",{value:"Limited"},"Limited",-1),tn=e("option",{value:"LIMITED"},"LIMITED",-1),nn=[en,tn],sn={class:"col-md-6"},on={class:"text-danger"},an={class:"col-md-6"},ln=e("option",{value:"有限公司"},"有限公司",-1),rn=[ln],cn={class:"p-1 mt-1"},dn=e("i",{class:"bi bi-x-circle"},null,-1),un={key:2,class:"section"},pn=e("div",{class:"fw-bold"},"Fourth Choice",-1),_n=e("div",null,"This is your fourth company name. Ensure it is the legal name intended for registration. ",-1),mn={class:"row g-2 mt-1"},hn={class:"col-md-6"},fn={class:"text-danger"},yn={class:"col-md-6"},vn=e("option",{value:"Limited"},"Limited",-1),gn=e("option",{value:"LIMITED"},"LIMITED",-1),bn=[vn,gn],$n={class:"col-md-6"},Sn={class:"text-danger"},wn={class:"col-md-6"},xn=e("option",{value:"有限公司"},"有限公司",-1),kn=[xn],Cn={class:"p-1 mt-1"},En=e("i",{class:"bi bi-x-circle"},null,-1),An={key:3,class:"section"},Fn=e("div",{class:"fw-bold"},"Fifth Choice",-1),Pn=e("div",null,"This is your fifth company name. Ensure it is the legal name intended for registration. ",-1),Tn={class:"row g-2 mt-1"},Vn={class:"col-md-6"},In={class:"text-danger"},Dn={class:"col-md-6"},Ln=e("option",{value:"Limited"},"Limited",-1),On=e("option",{value:"LIMITED"},"LIMITED",-1),Un=[Ln,On],Bn={class:"col-md-6"},Rn={class:"text-danger"},qn={class:"col-md-6"},jn=e("option",{value:"有限公司"},"有限公司",-1),Nn=[jn],zn={class:"p-1 mt-1"},Mn=e("i",{class:"bi bi-x-circle"},null,-1),Hn=["disabled"],Yn=e("i",{class:"bi bi-plus-circle"},null,-1),Wn={class:"movement-buttons my-5"},Gn=e("i",{class:"bi bi-arrow-right"},null,-1),Kn={key:1,class:"btn btn-primary",type:"button",disabled:""},Zn=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),Jn=e("section",{class:"section"},[e("div",{class:"fw-bold"}," What are the restrictions on naming my company? "),e("div",null," Your company name should be unique and not be too similar to any existing company registered in Hong Kong. It must end with 'Limited' or ‘有限公司’ for Chinese to signify limited liability and should not contain restricted terms or imply government affiliation without permission. ")],-1),Xn=e("section",{class:"section"},[e("div",{class:"fw-bold"}," Can I include both English and Chinese in my company name? "),e("div",null," Yes, you can register a name in English, Chinese, or both. However, the Chinese name must not be a direct translation of the English name and only Traditional Chinese characters are accepted by the Hong Kong Companies Registry. ")],-1),Qn=e("section",{class:"section"},[e("div",{class:"fw-bold"}," What should I do if my preferred company name is already taken? "),e("div",null," It's advisable to have alternative names ready. You can prioritize your preferred names when filling out this form, and we will register in order of preference. If all listed names are taken, you will be contacted to provide additional names. ")],-1),es=X({__name:"Name",setup(l){const o=de.useToast(),s=J(),t=Ke();H(""),ie(()=>{t.updateFields(s.companyInProgress)}),ge(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});function v(){for(var d of["isSecond","isThird","isForth","isFifth"])if(!t[d]){t[d]=!0;return}}Ie(()=>{t.choice_level1_chn_name==""&&(t.errors.choice_level1_chn_name="",delete t.errors.choice_level1_chn_name),t.choice_level2_chn_name==""&&(t.errors.choice_level2_chn_name=null,delete t.errors.choice_level2_chn_name),t.choice_level3_chn_name==""&&(t.errors.choice_level3_chn_name=null,delete t.errors.choice_level3_chn_name),t.choice_level4_chn_name==""&&(t.errors.choice_level4_chn_name="",delete t.errors.choice_level4_chn_name),t.choice_level5_chn_name==""&&(t.errors.choice_level5_chn_name="",delete t.errors.choice_level5_chn_name)});function c(d){t[d]=!1,d=="isSecond"&&(t.resetField("choice_level2_eng_name"),t.resetField("choice_level2_chn_name"),delete t.errors.choice_level2_eng_name,delete t.errors.choice_level2_chn_name),d=="isThird"&&(t.resetField("choice_level3_eng_name"),t.resetField("choice_level3_chn_name"),delete t.errors.choice_level3_eng_name,delete t.errors.choice_level3_chn_name),d=="isForth"&&(t.resetField("choice_level4_eng_name"),t.resetField("choice_level4_chn_name"),delete t.errors.choice_level4_eng_name,delete t.errors.choice_level4_chn_name),d=="isFifth"&&(t.resetField("choice_level5_eng_name"),t.resetField("choice_level5_chn_name"),delete t.errors.choice_level5_eng_name,delete t.errors.choice_level5_chn_name)}const i=je({choice_level1_chn_name:"",choice_level2_chn_name:"",choice_level3_chn_name:"",choice_level4_chn_name:"",choice_level5_chn_name:""});ge(()=>[t.choice_level1_chn_name,t.choice_level2_chn_name,t.choice_level3_chn_name,t.choice_level4_chn_name,t.choice_level5_chn_name],()=>{i.choice_level1_chn_name=t.choice_level1_chn_name&&!t.chineseCheck(t.choice_level1_chn_name)?"Please input only Chinese characters":"",i.choice_level2_chn_name=t.choice_level2_chn_name&&!t.chineseCheck(t.choice_level2_chn_name)?"Please input only Chinese characters":"",i.choice_level3_chn_name=t.choice_level3_chn_name&&!t.chineseCheck(t.choice_level3_chn_name)?"Please input only Chinese characters":"",i.choice_level4_chn_name=t.choice_level4_chn_name&&!t.chineseCheck(t.choice_level4_chn_name)?"Please input only Chinese characters":"",i.choice_level5_chn_name=t.choice_level5_chn_name&&!t.chineseCheck(t.choice_level5_chn_name)?"Please input only Chinese characters":""});function g(){var u;if(!t.choice_level1_eng_name&&!t.choice_level1_chn_name){o.error("Please complete Primary choice names",{position:"top-right"});return}if(t.isSecond&&!t.choice_level2_eng_name&&!t.choice_level2_chn_name){o.error("Please complete secondary choice names",{position:"top-right"});return}if(t.isThird&&!t.choice_level3_eng_name&&!t.choice_level3_chn_name){o.error("Please complete third choice names",{position:"top-right"});return}if(t.isForth&&!t.choice_level4_eng_name&&!t.choice_level4_chn_name){o.error("Please complete fourth choice names",{position:"top-right"});return}if(t.isFifth&&!t.choice_level5_eng_name&&!t.choice_level5_chn_name){o.error("Please complete fifth choice names",{position:"top-right"});return}if(console.log(t.errors),Object.keys(t.errors).length>0){o.error("Some fields still have errors",{position:"top-right"});return}if(i.choice_level1_chn_name||i.choice_level2_chn_name||i.choice_level3_chn_name||i.choice_level4_chn_name||i.choice_level5_chn_name){o.default("Some fields still have errors",{position:"top-right"});return}const d=new FormData;d.append("company_id",((u=s.companyInProgress)==null?void 0:u.id)??""),d.append("names[0][eng_name]",t.choice_level1_eng_name),d.append("names[0][prefix]",t.choice_level1_prefix),d.append("names[0][chn_name]",t.choice_level1_chn_name),d.append("names[0][chn_prefix]",t.choice_level1_chn_prefix),d.append("names[0][choice_level]","1"),t.isSecond&&(d.append("names[1][eng_name]",t.choice_level2_eng_name),d.append("names[1][prefix]",t.choice_level2_prefix),d.append("names[1][chn_name]",t.choice_level2_chn_name),d.append("names[1][chn_prefix]",t.choice_level2_chn_prefix),d.append("names[1][choice_level]","2")),t.isThird&&(d.append("names[2][eng_name]",t.choice_level3_eng_name),d.append("names[2][prefix]",t.choice_level3_prefix),d.append("names[2][chn_name]",t.choice_level3_chn_name),d.append("names[2][chn_prefix]",t.choice_level3_chn_prefix),d.append("names[2][choice_level]","3")),t.isForth&&(d.append("names[3][eng_name]",t.choice_level4_eng_name),d.append("names[3][prefix]",t.choice_level4_prefix),d.append("names[3][chn_name]",t.choice_level4_chn_name),d.append("names[3][chn_prefix]",t.choice_level4_chn_prefix),d.append("names[3][choice_level]","4")),t.isFifth&&(d.append("names[4][eng_name]",t.choice_level5_eng_name),d.append("names[4][prefix]",t.choice_level5_prefix),d.append("names[4][chn_name]",t.choice_level5_chn_name),d.append("names[4][chn_prefix]",t.choice_level5_chn_prefix),d.append("names[4][choice_level]","5")),t.isSaving=!0,h(d)}async function h(d){try{await Z.registerCompany(d),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(d,u)=>(y(),R(ce,null,{main:N(()=>[mt,e("section",ht,[ft,yt,e("div",vt,[e("div",gt,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level1_eng_name},"form-control"]),"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":u[0]||(u[0]=a=>n(t).choice_level1_eng_name=a),type:"text",placeholder:"This text for English name"},null,2),[[n(W)],[A,n(t).choice_level1_eng_name]]),e("small",bt,p(n(t).errors.choice_level1_eng_name),1)]),e("div",$t,[x(e("select",{"onUpdate:modelValue":u[1]||(u[1]=a=>n(t).choice_level1_prefix=a),class:"form-select"},xt,512),[[ee,n(t).choice_level1_prefix]])]),e("div",kt,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level1_chn_name},"form-control"]),"onUpdate:modelValue":u[2]||(u[2]=a=>n(t).choice_level1_chn_name=a),type:"text",placeholder:"This text for Chinese name"},null,2),[[A,n(t).choice_level1_chn_name]]),e("small",Ct,p(i.choice_level1_chn_name),1)]),e("div",Et,[x(e("select",{"onUpdate:modelValue":u[3]||(u[3]=a=>n(t).choice_level1_chn_prefix=a),class:"form-select"},Ft,512),[[ee,n(t).choice_level1_chn_prefix]])])])]),n(t).isSecond?(y(),w("section",Pt,[Tt,Vt,e("div",It,[e("div",Dt,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level2_eng_name},"form-control"]),"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":u[4]||(u[4]=a=>n(t).choice_level2_eng_name=a),type:"text",placeholder:"This text for English name"},null,2),[[n(W)],[A,n(t).choice_level2_eng_name]]),e("small",Lt,p(n(t).errors.choice_level2_eng_name),1)]),e("div",Ot,[x(e("select",{"onUpdate:modelValue":u[5]||(u[5]=a=>n(t).choice_level2_prefix=a),class:"form-select"},Rt,512),[[ee,n(t).choice_level2_prefix]])]),e("div",qt,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level2_chn_name},"form-control"]),"onUpdate:modelValue":u[6]||(u[6]=a=>n(t).choice_level2_chn_name=a),type:"text",placeholder:"This text for Chinese name"},null,2),[[A,n(t).choice_level2_chn_name]]),e("small",jt,p(i.choice_level2_chn_name),1)]),e("div",Nt,[x(e("select",{"onUpdate:modelValue":u[7]||(u[7]=a=>n(t).choice_level2_chn_prefix=a),class:"form-select"},Mt,512),[[ee,n(t).choice_level2_chn_prefix]])])]),e("div",Ht,[e("button",{onClick:u[8]||(u[8]=a=>c("isSecond")),class:"btn btn-outline-danger me-3"},[Yt,r(" Remove ")])])])):V("",!0),n(t).isThird?(y(),w("section",Wt,[Gt,Kt,e("div",Zt,[e("div",Jt,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level3_eng_name},"form-control"]),"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":u[9]||(u[9]=a=>n(t).choice_level3_eng_name=a),type:"text",placeholder:"This text for English name"},null,2),[[n(W)],[A,n(t).choice_level3_eng_name]]),e("small",Xt,p(n(t).errors.choice_level3_eng_name),1)]),e("div",Qt,[x(e("select",{"onUpdate:modelValue":u[10]||(u[10]=a=>n(t).choice_level3_prefix=a),class:"form-select"},nn,512),[[ee,n(t).choice_level3_prefix]])]),e("div",sn,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level3_chn_name},"form-control"]),"onUpdate:modelValue":u[11]||(u[11]=a=>n(t).choice_level3_chn_name=a),type:"text",placeholder:"This text for Chinese name"},null,2),[[A,n(t).choice_level3_chn_name]]),e("small",on,p(i.choice_level3_chn_name),1)]),e("div",an,[x(e("select",{"onUpdate:modelValue":u[12]||(u[12]=a=>n(t).choice_level3_chn_prefix=a),class:"form-select"},rn,512),[[ee,n(t).choice_level3_chn_prefix]])])]),e("div",cn,[e("button",{onClick:u[13]||(u[13]=a=>c("isThird")),class:"btn btn-outline-danger me-3"},[dn,r(" Remove ")])])])):V("",!0),n(t).isForth?(y(),w("section",un,[pn,_n,e("div",mn,[e("div",hn,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level4_eng_name},"form-control"]),"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":u[14]||(u[14]=a=>n(t).choice_level4_eng_name=a),type:"text",placeholder:"This text for English name"},null,2),[[n(W)],[A,n(t).choice_level4_eng_name]]),e("small",fn,p(n(t).errors.choice_level4_eng_name),1)]),e("div",yn,[x(e("select",{"onUpdate:modelValue":u[15]||(u[15]=a=>n(t).choice_level4_prefix=a),class:"form-select"},bn,512),[[ee,n(t).choice_level4_prefix]])]),e("div",$n,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level4_chn_name},"form-control"]),"onUpdate:modelValue":u[16]||(u[16]=a=>n(t).choice_level4_chn_name=a),type:"text",placeholder:"This text for Chinese name"},null,2),[[A,n(t).choice_level4_chn_name]]),e("small",Sn,p(i.choice_level4_chn_name),1)]),e("div",wn,[x(e("select",{"onUpdate:modelValue":u[17]||(u[17]=a=>n(t).choice_level4_chn_prefix=a),class:"form-select"},kn,512),[[ee,n(t).choice_level4_chn_prefix]])])]),e("div",Cn,[e("button",{onClick:u[18]||(u[18]=a=>c("isForth")),class:"btn btn-outline-danger me-3"},[En,r(" Remove ")])])])):V("",!0),n(t).isFifth?(y(),w("section",An,[Fn,Pn,e("div",Tn,[e("div",Vn,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level5_eng_name},"form-control"]),"data-maska-tokens":"*:[a-zA-Z0-9]:multiple","onUpdate:modelValue":u[19]||(u[19]=a=>n(t).choice_level5_eng_name=a),type:"text",placeholder:"This text for English name"},null,2),[[n(W)],[A,n(t).choice_level5_eng_name]]),e("small",In,p(n(t).errors.choice_level5_eng_name),1)]),e("div",Dn,[x(e("select",{"onUpdate:modelValue":u[20]||(u[20]=a=>n(t).choice_level5_prefix=a),class:"form-select"},Un,512),[[ee,n(t).choice_level5_prefix]])]),e("div",Bn,[x(e("input",{class:C([{"error-field":n(t).errors.choice_level5_chn_name},"form-control"]),"onUpdate:modelValue":u[21]||(u[21]=a=>n(t).choice_level5_chn_name=a),type:"text",placeholder:"This text for Chinese name"},null,2),[[A,n(t).choice_level5_chn_name]]),e("small",Rn,p(i.choice_level5_chn_name),1)]),e("div",qn,[x(e("select",{"onUpdate:modelValue":u[22]||(u[22]=a=>n(t).choice_level5_chn_prefix=a),class:"form-select"},Nn,512),[[ee,n(t).choice_level5_chn_prefix]])])]),e("div",zn,[e("button",{onClick:u[23]||(u[23]=a=>c("isFifth")),class:"btn btn-outline-danger me-3"},[Mn,r(" Remove ")])])])):V("",!0),e("div",null,[e("button",{disabled:n(t).isThird&&n(t).isForth&&n(t).isFifth,onClick:v,class:"btn btn-outline-success bg-success-subtle"},[r(" Add another name "),Yn],8,Hn)]),e("div",Wn,[n(t).isSaving?(y(),w("button",Kn,[Zn,r(" Saving, Please wait ")])):(y(),w("button",{key:0,onClick:g,class:"btn btn-primary"},[r(" Save & Continue "),Gn]))])]),info:N(()=>[Jn,Xn,Qn]),_:1}))}}),ts=e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Description"),e("span",null,"This information facilitates a faster review process by our team and remains strictly confidential.")],-1),ns={class:"section"},ss=e("div",{class:"fw-bold"},[r("Describe your product or service "),e("span",{class:"text-danger"}," * ")],-1),os=e("div",null,"Please briefly describe the product or service you are developing. Aim for a concise overview in one or two sentences. ",-1),is={class:"row g-2 mt-1"},as={class:"col-md-12"},ls={class:"text-danger"},rs={class:"float-end"},cs={class:"section"},ds=e("div",{class:"fw-bold"},[r("Nature of business "),e("span",{class:"text-danger"}," * ")],-1),us=e("div",null,"Choose the primary category that best represents business nature of your company ",-1),ps={class:"row g-2 mt-1"},_s={class:"col-md-12"},ms={class:"text-danger"},hs={class:"section"},fs=e("div",{class:"fw-bold"},"Website or social media",-1),ys={class:"row g-2 mt-1"},vs={class:"col-md-12"},gs={class:"text-danger"},bs={class:"movement-buttons my-5"},$s=e("i",{class:"bi bi-arrow-left"},null,-1),Ss=e("i",{class:"bi bi-arrow-right"},null,-1),ws={key:1,class:"btn btn-primary",type:"button",disabled:""},xs=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),ks=150,Cs=X({__name:"Description",setup(l){const o=de.useToast(),s=J(),t=Ze();ie(()=>{t.updateFields(s.companyInProgress)}),ge(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});function v(){s.switchStage("-")}const c=()=>{var d;if(!((d=s.companyInProgress)!=null&&d.id)){o.info("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0)return o.error("Some fields still have errors",{position:"top-right"}),!0;const h=new FormData;h.append("description",t.description),h.append("business_nature_id",t.business_nature_id),h.append("website",t.website),h.append("company_id",s.companyInProgress.id),t.isSaving=!0,i(h)};async function i(h){try{await Z.companyDescription(h),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"})}}const g=me(()=>{var h;return((h=t==null?void 0:t.description)==null?void 0:h.length)??0});return(h,d)=>{const u=K("v-select");return y(),R(ce,null,{main:N(()=>[ts,e("section",ns,[ss,os,e("div",is,[e("div",as,[x(e("textarea",{class:C([{"error-field":n(t).errors.description},"form-control"]),"onUpdate:modelValue":d[0]||(d[0]=a=>n(t).description=a),rows:"5"},null,2),[[A,n(t).description]]),e("small",ls,p(n(t).errors.description),1),e("small",rs,p(g.value)+"/"+p(ks),1)])])]),e("section",cs,[ds,us,e("div",ps,[e("div",_s,[U(u,{class:C({"error-field":n(t).errors.business_nature_id}),modelValue:n(t).business_nature_id,"onUpdate:modelValue":d[1]||(d[1]=a=>n(t).business_nature_id=a),clearable:!0,options:n(s).businessNatures,reduce:a=>a.id,label:"name"},null,8,["class","modelValue","options","reduce"]),e("small",ms,p(n(t).errors.business_nature_id),1)])])]),e("section",hs,[fs,e("div",ys,[e("div",vs,[x(e("input",{class:C([{"error-field":n(t).errors.website},"form-control"]),"onUpdate:modelValue":d[2]||(d[2]=a=>n(t).website=a),type:"text"},null,2),[[A,n(t).website]]),e("small",gs,p(n(t).errors.website),1)])])]),e("div",bs,[e("button",{onClick:v,class:"btn btn-outline-info me-3"},[$s,r(" Back ")]),n(t).isSaving?(y(),w("button",ws,[xs,r(" Saving, Please wait ")])):(y(),w("button",{key:0,onClick:c,class:"btn btn-primary"},[r(" Save & Continue "),Ss]))])]),info:N(()=>[]),_:1})}}}),Es=Ge("address",()=>{const l={flat:we().required(""),building:we().required(""),street:we().required(""),city:we().required(""),state:we().required(""),postal_code:we().required(""),country:we().required("")},{errors:o,handleSubmit:s,defineField:t,setFieldValue:v}=ut({validationSchema:pt(l),initialValues:{flat:"Rooms 502-503, 5th Floor",building:"Wanchai Commercial Centre",street:"194-204 Johnston Road",postal_code:"",country:"Hong Kong",state:"Wanchai",city:"Wanchai"}}),[c]=t("flat"),[i]=t("building"),[g]=t("street"),[h]=t("city"),[d]=t("state"),[u]=t("postal_code"),[a]=t("country");return{flat:c,street:g,city:h,state:d,postal_code:u,country:a,isSaving:!1,building:i,errors:o,handleSubmit:s,setFieldValue:v}}),As=e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Registered Address")],-1),Fs={class:"section"},Ps={class:"row g-3 mt-1"},Ts={class:"col-12"},Vs=e("label",{class:"form-label"},[r("Floor／Block "),e("i",{class:"bi bi-lock-fill"})],-1),Is={class:"text-danger"},Ds={class:"col-12"},Ls=e("label",{class:"form-label"},[r(" Building"),e("i",{class:"bi bi-lock-fill"})],-1),Os={class:"text-danger"},Us={class:"col-12"},Bs=e("label",{class:"form-label"},[r(" Street／Estate／Lot／Village"),e("i",{class:"bi bi-lock-fill"})],-1),Rs={class:"text-danger"},qs={class:"col-12"},js=e("label",{class:"form-label"},[r(" District／City／ Province／State／ Postal Code "),e("i",{class:"bi bi-lock-fill"})],-1),Ns={class:"text-danger"},zs={class:"col-md-12"},Ms=e("label",{class:"form-label"},[r(" Country／Region "),e("i",{class:"bi bi-lock-fill"})],-1),Hs={class:"text-danger"},Ys={class:"movement-buttons my-5"},Ws=e("i",{class:"bi bi-arrow-left"},null,-1),Gs=e("i",{class:"bi bi-arrow-right"},null,-1),Ks={key:1,class:"btn btn-primary",type:"button",disabled:""},Zs=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),Js=e("section",{class:"section"},[e("div",{class:"fw-bold"}," What is registered office address? "),e("div",null," A registered office address is the official legal address of a company where formal communications and notices are sent. ")],-1),Xs=e("section",{class:"section"},[e("div",{class:"fw-bold"}," Why can’t I change the registered office address? "),e("div",null," The registered office address provided is part of our initial services. You can update it to a new address after the incorporation process is completed. ")],-1),Qs=X({__name:"Address",setup(l){const o=de.useToast(),s=J(),t=Es();function v(){s.switchStage("-")}function c(){t.isSaving=!0,i()}t.handleSubmit(async g=>{var d;if(!((d=s.companyInProgress)!=null&&d.id)){o.default("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0)return o.default("Some fields still have errors",{position:"top-right"}),!0;const h=new FormData;h.append("flat",g.flat),h.append("building",g.building),h.append("street",g.street),h.append("city",g.city),h.append("state",g.state),h.append("postal_code",g.postal_code),h.append("country",g.country),h.append("company_id",s.companyInProgress.id),t.isSaving=!0});async function i(){try{const g=new FormData;g.append("company_id",s.companyInProgress.id),await Z.companyAddress(g),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(g,h)=>{const d=K("v-select");return y(),R(ce,null,{main:N(()=>[As,e("section",Fs,[e("div",Ps,[e("div",Ts,[Vs,x(e("input",{disabled:"","onUpdate:modelValue":h[0]||(h[0]=u=>n(t).flat=u),class:"form-control",type:"text",placeholder:"Flat／Floor／Block"},null,512),[[A,n(t).flat]]),e("small",Is,p(n(t).errors.flat),1)]),e("div",Ds,[Ls,x(e("input",{disabled:"","onUpdate:modelValue":h[1]||(h[1]=u=>n(t).building=u),class:"form-control",type:"text",placeholder:"Street number"},null,512),[[A,n(t).building]]),e("small",Os,p(n(t).errors.building),1)]),e("div",Us,[Bs,x(e("input",{disabled:"","onUpdate:modelValue":h[2]||(h[2]=u=>n(t).street=u),class:"form-control",type:"text",placeholder:"City"},null,512),[[A,n(t).street]]),e("small",Rs,p(n(t).errors.street),1)]),e("div",qs,[js,x(e("input",{disabled:"","onUpdate:modelValue":h[3]||(h[3]=u=>n(t).state=u),class:"form-control",type:"text",placeholder:"State"},null,512),[[A,n(t).state]]),e("small",Ns,p(n(t).errors.state),1)]),e("div",zs,[Ms,U(d,{disabled:!0,placeholder:"select country..",modelValue:n(t).country,"onUpdate:modelValue":h[4]||(h[4]=u=>n(t).country=u),clearable:!1,options:n(s).countries},null,8,["modelValue","options"]),e("small",Hs,p(n(t).errors.country),1)])])]),e("div",Ys,[e("button",{onClick:v,class:"btn btn-outline-info me-3"},[Ws,r(" Back ")]),n(t).isSaving?(y(),w("button",Ks,[Zs,r(" Saving, Please wait ")])):(y(),w("button",{key:0,onClick:c,class:"btn btn-primary"},[r(" Save & Continue "),Gs]))])]),info:N(()=>[Js,Xs]),_:1})}}}),z=l=>(he("data-v-b40d075a"),l=l(),fe(),l),eo={class:"section"},to=z(()=>e("div",{class:"fw-bold fs-5"},"About your Company ",-1)),no=z(()=>e("div",{class:"fw-bolder"},"Your company name",-1)),so=z(()=>e("span",null,"Enter your legal company name",-1)),oo={class:"row mt-1 g-2"},io={class:"col-12"},ao={class:"text-danger"},lo={class:"col-12"},ro={class:"text-danger"},co={class:"row g-2 section"},uo={class:"col-md-6"},po=z(()=>e("label",{class:"form-label fw-bold"},[r("Date of Incorporation "),e("span",{class:"text-danger"}," * ")],-1)),_o={class:"col-md-6"},mo=z(()=>e("label",{class:"form-label fw-bold"},[r("Company Registration Number "),e("span",{class:"text-danger"}," * ")],-1)),ho={class:"text-danger"},fo={class:"col-md-12"},yo=z(()=>e("label",{class:"form-label"},[r("Country Registered "),e("small",{class:"text-danger"},"*")],-1)),vo={class:"text-danger"},go={class:"col-12"},bo=z(()=>e("label",{class:"form-label fw-bold"},[r("Business nature "),e("span",{class:"text-danger"}," * ")],-1)),$o={class:"text-danger"},So={class:"section"},wo=z(()=>e("div",{class:"fw-bolder"},"Address ",-1)),xo={class:"row g-3 mt-1"},ko={class:"col-12"},Co=z(()=>e("label",{class:"form-label"},[r("Floor／Block "),e("small",{class:"text-danger"},"*")],-1)),Eo={class:"text-danger"},Ao={class:"col-12"},Fo=z(()=>e("label",{class:"form-label"},[r(" Building "),e("small",{class:"text-danger"},"*")],-1)),Po={class:"text-danger"},To={class:"col-12"},Vo=z(()=>e("label",{class:"form-label"},[r(" Street／Estate／Lot／Village "),e("small",{class:"text-danger"},"*")],-1)),Io={class:"text-danger"},Do={class:"col-12"},Lo=z(()=>e("label",{class:"form-label"},[r(" District／City／ Province／State／ Postal Code "),e("small",{class:"text-danger"},"*")],-1)),Oo={class:"text-danger"},Uo={class:"col-md-12"},Bo=z(()=>e("label",{class:"form-label"},[r("Country／Region "),e("small",{class:"text-danger"},"*")],-1)),Ro={class:"text-danger"},qo={class:"row g-2 section"},jo={class:"col-md-12"},No=z(()=>e("label",{class:"fw-bolder"},[r("Authorised Person "),e("span",{class:"text-danger"}," * ")],-1)),zo={class:"row g-2"},Mo={class:"col-md-6"},Ho={class:"text-danger"},Yo={class:"col-md-6"},Wo={class:"text-danger"},Go={class:"col-md-12"},Ko=z(()=>e("label",{class:"fw-bolder"},[r("Phone number "),e("span",{class:"text-danger"}," * ")],-1)),Zo={class:"text-danger"},Jo={class:"col-md-12"},Xo=z(()=>e("label",{class:"fw-bolder"},[r("Email "),e("span",{class:"text-danger"}," * ")],-1)),Qo={class:"text-danger"},ei={class:"col-md-12"},ti=z(()=>e("label",{class:"fw-bolder"},[r("Confirm email "),e("span",{class:"text-danger"}," * ")],-1)),ni={class:"text-danger"},si={key:0,class:"text-danger"},oi={class:"movement-buttons mt-5 mb-4"},ii=z(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),ai=z(()=>e("i",{class:"bi bi-check2"},null,-1)),li={key:1,class:"btn btn-primary",type:"button",disabled:""},ri=z(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),ci=X({__name:"Founders_corporate",setup(l){const o=de.useToast(),s=J(),t=Je();ie(()=>{t.updateFields(s.companyInProgress)}),ge(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});const v=H(!1);Ie(()=>{t.email&&t.confirm_email&&(t.email!==t.confirm_email&&!t.errors.confirm_email?v.value=!0:v.value=!1)});const c={dropDown:{showDialCodeInSelection:!1,showFlags:!0,showSearchBox:!0,showDialCodeInList:!0},input:{showDialCode:!0,placeholder:"Enter phone",styleClasses:"phone-input-profile",maxlength:12}};Ie(()=>{t.chn_company_name==""&&(t.errors.chn_company_name="",delete t.errors.chn_company_name)});function i(){s.isShowingFoundersForm=!1}function g(){var u;if(console.log("validation passed.."),!((u=s.companyInProgress)!=null&&u.id)){o.error("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(t.phone.length<12){o.error("Error on the phone input <br> must be 12 digits and above",{position:"top-right"});return}if(Object.keys(t.errors).length>0){console.log(t.errors),o.error("Some fields still have errors",{position:"top-right"});return}if(!t.first_name||!t.last_name||!t.phone||!t.email||!t.date_incorporated||!t.company_name||!t.business_nature_id||!t.country_registered||!t.registeration_no){o.error("Some fields still have errors",{position:"top-right"});return}if(!_e.isEmail(t.email)){o.default("Invalid email format",{position:"top-right"});return}if(t.email!==t.confirm_email){o.default("Emails do not match!",{position:"top-right"});return}if(s.checkedEntityCapacity.length==0){o.default("Select at least a Capacity!",{position:"top-right"});return}const d=new FormData;d.append("company_id",s.companyInProgress.id),s.idToEdit&&d.append("company_entity_id",s.idToEdit),d.append("entity_capacity_id",JSON.stringify(s.checkedEntityCapacity)),d.append("entity_type_id",t.entity_type_id),d.append("first_name",t.first_name),d.append("last_name",t.last_name),d.append("email",t.email),d.append("phone",t.phone),d.append("company_name",t.company_name),d.append("chn_company_name",t.chn_company_name),d.append("date_incorporated",t.date_incorporated),d.append("flat",t.flat),d.append("building",t.building),d.append("street",t.street),d.append("state",t.state),d.append("country",t.country),d.append("registeration_no",t.registeration_no),d.append("country_registered",t.country_registered),d.append("business_nature_id",t.business_nature_id),d.append("is_founder",t.is_founder?"1":"0"),t.isSaving=!0,h(d)}async function h(d){try{await Z.companyEntity(d),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.getCompanyInProgress("founder"),s.isShowingFoundersForm=!1,t.clearLocalStorage(),t.clearLocalStorage()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(d,u)=>{const a=K("VueDatePicker"),P=K("v-select"),I=K("vue-tel-input");return y(),w("div",null,[e("section",eo,[to,no,so,e("div",oo,[e("div",io,[x(e("input",{class:C([{"error-field":n(t).errors.company_name},"form-control"]),"data-maska":"","data-maska-tokens":"A:[A-Za-z]:multiple|a:[A-Za-z]:multiple 0:[0-9]","onUpdate:modelValue":u[0]||(u[0]=_=>n(t).company_name=_),type:"text",placeholder:"English Name.."},null,2),[[n(W)],[A,n(t).company_name]]),e("small",ao,p(n(t).errors.company_name),1)]),e("div",lo,[x(e("input",{class:C([{"error-field":n(t).errors.chn_company_name},"form-control"]),"onUpdate:modelValue":u[1]||(u[1]=_=>n(t).chn_company_name=_),type:"text",placeholder:"Chinese Name.."},null,2),[[A,n(t).chn_company_name]]),e("small",ro,p(n(t).errors.chn_company_name),1)])])]),e("section",co,[e("div",uo,[po,U(a,{format:n(_e).dateDisplay,"hide-input-icon":"",clearable:!1,"enable-time-picker":!1,"auto-apply":"",modelValue:n(t).date_incorporated,"onUpdate:modelValue":u[2]||(u[2]=_=>n(t).date_incorporated=_)},null,8,["format","modelValue"])]),e("div",_o,[mo,x(e("input",{class:C([{"error-field":n(t).errors.registeration_no},"form-control"]),"onUpdate:modelValue":u[3]||(u[3]=_=>n(t).registeration_no=_),type:"text",placeholder:"Registration no"},null,2),[[A,n(t).registeration_no]]),e("small",ho,p(n(t).errors.registeration_no),1)]),e("div",fo,[yo,U(P,{class:C({"error-field":n(t).errors.country_registered}),placeholder:"select country..",modelValue:n(t).country_registered,"onUpdate:modelValue":u[4]||(u[4]=_=>n(t).country_registered=_),clearable:!1,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",vo,p(n(t).errors.country_registered),1)]),e("div",go,[bo,U(P,{class:C({"error-field":n(t).errors.business_nature_id}),modelValue:n(t).business_nature_id,"onUpdate:modelValue":u[5]||(u[5]=_=>n(t).business_nature_id=_),clearable:!0,placeholder:"select business nature",options:n(s).businessNatures,reduce:_=>_.id,label:"name"},null,8,["class","modelValue","options","reduce"]),e("small",$o,p(n(t).errors.business_nature_id),1)])]),e("section",So,[wo,e("div",xo,[e("div",ko,[Co,x(e("input",{class:C([{"error-field":n(t).errors.flat},"form-control"]),"onUpdate:modelValue":u[6]||(u[6]=_=>n(t).flat=_),type:"text",placeholder:"Flat／Floor／Block"},null,2),[[A,n(t).flat]]),e("small",Eo,p(n(t).errors.flat),1)]),e("div",Ao,[Fo,x(e("input",{class:C([{"error-field":n(t).errors.building},"form-control"]),"onUpdate:modelValue":u[7]||(u[7]=_=>n(t).building=_),type:"text",placeholder:"building number"},null,2),[[A,n(t).building]]),e("small",Po,p(n(t).errors.building),1)]),e("div",To,[Vo,x(e("input",{class:C([{"error-field":n(t).errors.street},"form-control"]),"onUpdate:modelValue":u[8]||(u[8]=_=>n(t).street=_),type:"text",placeholder:"Street"},null,2),[[A,n(t).street]]),e("small",Io,p(n(t).errors.street),1)]),e("div",Do,[Lo,x(e("input",{class:C([{"error-field":n(t).errors.state},"form-control"]),"onUpdate:modelValue":u[9]||(u[9]=_=>n(t).state=_),type:"text",placeholder:"State/City"},null,2),[[A,n(t).state]]),e("small",Oo,p(n(t).errors.state),1)]),e("div",Uo,[Bo,U(P,{class:C({"error-field":n(t).errors.country}),placeholder:"select country..",modelValue:n(t).country,"onUpdate:modelValue":u[10]||(u[10]=_=>n(t).country=_),clearable:!1,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",Ro,p(n(t).errors.country),1)])])]),e("section",qo,[e("div",jo,[No,e("div",zo,[e("div",Mo,[x(e("input",{class:C([{"error-field":n(t).errors.first_name},"form-control"]),"data-maska-tokens":"A:[A-Za-z]:multiple","onUpdate:modelValue":u[11]||(u[11]=_=>n(t).first_name=_),type:"text",placeholder:"first name.."},null,2),[[n(W)],[A,n(t).first_name]]),e("small",Ho,p(n(t).errors.first_name),1)]),e("div",Yo,[x(e("input",{class:C([{"error-field":n(t).errors.last_name},"form-control"]),"data-maska-tokens":"A:[A-Za-z]:multiple","onUpdate:modelValue":u[12]||(u[12]=_=>n(t).last_name=_),type:"text",placeholder:"last name.."},null,2),[[n(W)],[A,n(t).last_name]]),e("small",Wo,p(n(t).errors.last_name),1)])])]),e("div",Go,[Ko,U(I,{inputOptions:c.input,dropdownOptions:c.dropDown,autoFormat:!0,modelValue:n(t).phone,"onUpdate:modelValue":u[13]||(u[13]=_=>n(t).phone=_)},null,8,["inputOptions","dropdownOptions","modelValue"]),e("small",Zo,p(n(t).errors.phone),1)]),e("div",Jo,[Xo,x(e("input",dt({class:{"error-field":n(t).errors.email},"onUpdate:modelValue":u[14]||(u[14]=_=>n(t).email=_)},n(t).emailAttrs,{type:"text",class:"form-control",placeholder:"email"}),null,16),[[A,n(t).email]]),e("small",Qo,p(n(t).errors.email),1)]),e("div",ei,[ti,x(e("input",{class:C([{"error-field":n(t).errors.confirm_email},"form-control"]),"onUpdate:modelValue":u[15]||(u[15]=_=>n(t).confirm_email=_),type:"text",placeholder:"confirm email"},null,2),[[A,n(t).confirm_email]]),e("small",ni,p(n(t).errors.confirm_email),1),v.value?(y(),w("small",si,"emails do no match")):V("",!0)])]),e("div",oi,[e("button",{onClick:i,class:"btn btn-outline-info me-3"},[ii,r(" Close ")]),n(t).isSaving?(y(),w("button",li,[ri,r(" Saving, Please wait ")])):(y(),w("button",{key:0,onClick:g,class:"btn btn-primary"},[r(" Save and Continue "),ai]))])])}}}),di=ye(ci,[["__scopeId","data-v-b40d075a"]]),D=l=>(he("data-v-196c5d9b"),l=l(),fe(),l),ui={class:"section"},pi=D(()=>e("div",{class:"fw-bold fs-5"},"About you ",-1)),_i=D(()=>e("div",{class:"fw-bolder"},[r("Your name in English "),e("small",{class:"text-danger"},"*")],-1)),mi=D(()=>e("span",null,"Enter your first and last name as they appear on a government ID",-1)),hi={class:"row mt-1 g-2"},fi={class:"col-12"},yi={class:"text-danger"},vi={class:"col-12"},gi={class:"text-danger"},bi={class:"col-12"},$i={class:"form-check"},Si=D(()=>e("label",{class:"form-check-label",for:"chinese_name"},"Do you have a Chinese Name?",-1)),wi={key:0,class:"section"},xi=D(()=>e("div",{class:"fw-bolder"},[r("Your name in Chinese "),e("small",{class:"text-danger"},"*")],-1)),ki=D(()=>e("span",null,"Enter your first and last name as they appear on a government ID",-1)),Ci={class:"row mt-1 g-2"},Ei={class:"col-12"},Ai={class:"text-danger"},Fi={class:"col-12"},Pi={class:"text-danger"},Ti={class:"row g-2 section"},Vi={class:"col-md-6"},Ii=D(()=>e("label",{class:"form-label fw-bold"},[r("Date of Birth "),e("small",{class:"text-danger"},"*")],-1)),Di={class:"text-danger"},Li={class:"text-danger"},Oi={class:"col-md-6"},Ui=D(()=>e("label",{class:"form-label fw-bold"},[r("Nationality "),e("small",{class:"text-danger"},"*")],-1)),Bi={class:"section"},Ri=D(()=>e("div",{class:"fw-bolder"},[r("Your residential address "),e("small",{class:"text-danger"},"*")],-1)),qi={class:"row g-3 mt-1"},ji={class:"col-12"},Ni=D(()=>e("label",{class:"form-label"},[r("Flat／Floor／Block "),e("small",{class:"text-danger"},"*")],-1)),zi={class:"text-danger"},Mi={class:"col-12"},Hi=D(()=>e("label",{class:"form-label"},[r("Building "),e("small",{class:"text-danger"},"*")],-1)),Yi={class:"text-danger"},Wi={class:"col-12"},Gi=D(()=>e("label",{class:"form-label"},[r(" Street／Estate／Lot／Village "),e("small",{class:"text-danger"},"*")],-1)),Ki={class:"text-danger"},Zi={class:"col-12"},Ji=D(()=>e("label",{class:"form-label"},[r("District／City／ Province／State／ Postal Code "),e("small",{class:"text-danger"},"*")],-1)),Xi={class:"text-danger"},Qi={class:"col-md-12"},ea=D(()=>e("label",{class:"form-label"},[r(" Country／Region "),e("small",{class:"text-danger"},"*")],-1)),ta={class:"text-danger"},na={class:"section"},sa=D(()=>e("div",{class:"fw-bolder"},"Your corresponding address ",-1)),oa={class:"form-check"},ia=D(()=>e("label",{class:"form-check-label",for:"same_address"},"Same as residential address",-1)),aa={key:0,class:"row g-2 mt-1"},la={class:"col-12"},ra=D(()=>e("label",{class:"form-label"},[r(" Flat／Floor／Block "),e("small",{class:"text-danger"},"*")],-1)),ca={class:"text-danger"},da={class:"col-12"},ua=D(()=>e("label",{class:"form-label"},[r("Building "),e("small",{class:"text-danger"},"*")],-1)),pa={class:"text-danger"},_a={class:"col-12"},ma=D(()=>e("label",{class:"form-label"},[r(" Street／Estate／Lot／Village "),e("small",{class:"text-danger"},"*")],-1)),ha={class:"text-danger"},fa={class:"col-12"},ya=D(()=>e("label",{class:"form-label"},[r("District／City／ Province／State／ Postal Code "),e("small",{class:"text-danger"},"*")],-1)),va={class:"text-danger"},ga={class:"col-md-12"},ba=D(()=>e("label",{class:"form-label"},[r("Country／Region "),e("small",{class:"text-danger"},"*")],-1)),$a={class:"text-danger"},Sa={class:"row g-2 section"},wa={class:"col-md-12"},xa=D(()=>e("label",{class:"fw-bolder"},[r("ID type "),e("small",{class:"text-danger"},"*")],-1)),ka=D(()=>e("option",null,null,-1)),Ca=D(()=>e("option",{value:"1"},"Passport",-1)),Ea=D(()=>e("option",{value:"2"},"ID Card",-1)),Aa=[ka,Ca,Ea],Fa={class:"text-danger"},Pa={key:0,class:"col-md-9"},Ta=D(()=>e("label",{class:"fw-bolder"},[r("HKID No. "),e("small",{class:"text-danger"},"*")],-1)),Va={class:"text-danger"},Ia={key:1,class:"col-md-3",style:{"margin-top":"30px"}},Da={class:"text-danger"},La={key:2,class:"col-md-12"},Oa=D(()=>e("label",{class:"fw-bolder"},[r("Passport No. "),e("small",{class:"text-danger"},"*")],-1)),Ua={class:"text-danger"},Ba={key:3,class:"col-md-12"},Ra=D(()=>e("label",{class:"fw-bolder"},[r("Passport issuing Country/Region "),e("small",{class:"text-danger"},"*")],-1)),qa={class:"text-danger"},ja={class:"col-md-12"},Na=D(()=>e("label",{class:"fw-bolder"},[r("Phone number "),e("small",{class:"text-danger"},"*")],-1)),za={class:"text-danger"},Ma={class:"col-md-12"},Ha=D(()=>e("label",{class:"fw-bolder"},[r("Email "),e("small",{class:"text-danger"},"*")],-1)),Ya={class:"text-danger"},Wa={class:"col-md-12"},Ga=D(()=>e("label",{class:"fw-bolder"},[r("Confirm email "),e("span",{class:"text-danger"}," * ")],-1)),Ka={class:"text-danger"},Za={key:0,class:"text-danger"},Ja={class:"col-md-12"},Xa=D(()=>e("label",{class:"form-labe fw-bolder"},[r("Occupation/Employment "),e("span",{class:"text-danger"}," * ")],-1)),Qa={class:"text-danger"},el={class:"movement-buttons mt-5 mb-4"},tl=D(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),nl=D(()=>e("i",{class:"bi bi-check2"},null,-1)),sl={key:1,class:"btn btn-primary",type:"button",disabled:""},ol=D(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),il=X({__name:"Founders_individual",setup(l){const o=de.useToast(),s=J(),t=Xe();ie(()=>{t.updateFields(s.companyInProgress),console.log(t.identity_type_id,"idtype")}),ge(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});const v={dropDown:{showDialCodeInSelection:!1,showFlags:!0,showSearchBox:!0,showDialCodeInList:!0},input:{showDialCode:!0,placeholder:"Enter phone",styleClasses:"phone-input-profile",maxlength:15}},c=H(""),i=H(!1);ge(()=>t.dob,()=>{_e.ageInYears(new Date(t.dob))<18?c.value="Must not be less that 18years old":c.value=""}),Ie(()=>{t.email&&t.confirm_email&&(t.email!==t.confirm_email&&!t.errors.confirm_email?i.value=!0:i.value=!1)});function g(){s.isShowingFoundersForm=!1}const h=t.handleSubmit(u=>{var P;if(!((P=s.companyInProgress)!=null&&P.id)){o.error("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0){o.error("Some fields still have errors",{position:"top-right"});return}if(t.phone.length<14){o.error("Phone number is not complete",{position:"top-right"});return}if(!_e.isEmail(t.email)){o.error("Invalid email format",{position:"top-right"});return}if(t.email!==t.confirm_email){o.error("Emails do not macth!",{position:"top-right"});return}if(t.identity_type_id=="1"&&(!t.passport_no||!t.issuing_country)){o.error("Please complete Passport fields",{position:"top-right"});return}if(t.identity_type_id=="2"){if(!t.identity_no){o.error("Please complete ID field",{position:"top-right"});return}if(!t.identity_no_suffix){o.error("Please complete ID field",{position:"top-right"});return}}if(_e.ageInYears(new Date(t.dob))<18){o.error("Must not be less that 18years old",{position:"top-right"});return}if(s.checkedEntityCapacity.length==0){o.error("Select at least a Capacity!",{position:"top-right"});return}const a=new FormData;a.append("company_id",s.companyInProgress.id),s.idToEdit&&(a.append("company_entity_id",s.idToEdit),a.append("isEdit","1")),a.append("entity_type_id",t.entity_type_id),a.append("entity_capacity_id",JSON.stringify(s.checkedEntityCapacity)),a.append("first_name",t.first_name),a.append("last_name",t.last_name),t.hasChineseName&&(a.append("chn_first_name",t.chn_first_name),a.append("chn_last_name",t.chn_last_name)),t.dob&&a.append("dob",t.dob),a.append("nationality",t.nationality),a.append("phone",t.phone),a.append("email",t.email),a.append("occupation",t.occupation),a.append("identity_type_id",t.identity_type_id),a.append("identity_no",t.identity_no),a.append("identity_no_suffix",t.identity_no_suffix||""),a.append("passport_no",t.passport_no),a.append("issuing_country",t.issuing_country),a.append("is_founder",t.is_founder?"1":"0"),a.append("addresses[0][flat]",t.flat),a.append("addresses[0][building]",t.building),a.append("addresses[0][street]",t.street),a.append("addresses[0][city]",t.city),a.append("addresses[0][state]",t.state),a.append("addresses[0][country]",t.country),a.append("addresses[0][is_corAddress]",t.correspondingAddressIsSame?"1":"0"),t.correspondingAddressIsSame||(a.append("addresses[1][flat]",t.flat2),a.append("addresses[1][building]",t.building2),a.append("addresses[1][street]",t.street2),a.append("addresses[1][state]",t.state2),a.append("addresses[1][country]",t.country2)),t.isSaving=!0,d(a)});async function d(u){try{await Z.companyEntity(u).then(async a=>{o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.getCompanyInProgress("founder"),s.isShowingFoundersForm=!1,t.clearLocalStorage(),t.clearLocalStorage()})}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(u,a)=>{const P=K("VueDatePicker"),I=K("v-select"),_=K("vue-tel-input");return y(),w(xe,null,[e("section",ui,[pi,_i,mi,e("div",hi,[e("div",fi,[x(e("input",{class:C([{"error-field":n(t).errors.first_name},"form-control"]),"data-maska":"A a","data-maska-tokens":"A:[A-Za-z]:multiple|a:[A-Za-z]:multiple","onUpdate:modelValue":a[0]||(a[0]=m=>n(t).first_name=m),type:"text",placeholder:"First Name.."},null,2),[[n(W)],[A,n(t).first_name]]),e("small",yi,p(n(t).errors.first_name),1)]),e("div",vi,[x(e("input",{class:C([{"error-field":n(t).errors.last_name},"form-control"]),"data-maska":"A a","data-maska-tokens":"A:[A-Za-z]:multiple|a:[A-Za-z]:multiple","onUpdate:modelValue":a[1]||(a[1]=m=>n(t).last_name=m),type:"text",placeholder:"Last Name.."},null,2),[[n(W)],[A,n(t).last_name]]),e("small",gi,p(n(t).errors.last_name),1)]),e("div",bi,[e("div",$i,[x(e("input",{class:"form-check-input exemption","onUpdate:modelValue":a[2]||(a[2]=m=>n(t).hasChineseName=m),type:"checkbox",id:"chinese_name"},null,512),[[qe,n(t).hasChineseName]]),Si])])])]),n(t).hasChineseName?(y(),w("section",wi,[xi,ki,e("div",Ci,[e("div",Ei,[x(e("input",{class:C([{"error-field":n(t).errors.chn_first_name},"form-control"]),"onUpdate:modelValue":a[3]||(a[3]=m=>n(t).chn_first_name=m),type:"text",placeholder:"First Name.."},null,2),[[A,n(t).chn_first_name]]),e("small",Ai,p(n(t).errors.chn_first_name),1)]),e("div",Fi,[x(e("input",{class:C([{"error-field":n(t).errors.chn_last_name},"form-control"]),"onUpdate:modelValue":a[4]||(a[4]=m=>n(t).chn_last_name=m),type:"text",placeholder:"Last Name.."},null,2),[[A,n(t).chn_last_name]]),e("small",Pi,p(n(t).errors.chn_last_name),1)])])])):V("",!0),e("section",Ti,[e("div",Vi,[Ii,U(P,{format:n(_e).dateDisplay,"input-class-name":"dob-settings-input","hide-input-icon":"",clearable:!1,"enable-time-picker":!1,"auto-apply":"",modelValue:n(t).dob,"onUpdate:modelValue":a[5]||(a[5]=m=>n(t).dob=m),placeholder:"select date of birth"},null,8,["format","modelValue"]),e("small",Di,p(n(t).errors.dob),1),e("small",Li,p(c.value),1)]),e("div",Oi,[Ui,U(I,{placeholder:"select country..",modelValue:n(t).nationality,"onUpdate:modelValue":a[6]||(a[6]=m=>n(t).nationality=m),clearable:!1,options:n(s).countries},null,8,["modelValue","options"])])]),e("section",Bi,[Ri,e("div",qi,[e("div",ji,[Ni,x(e("input",{class:C([{"error-field":n(t).errors.flat},"form-control"]),"onUpdate:modelValue":a[7]||(a[7]=m=>n(t).flat=m),type:"text",placeholder:"Flat／Floor／Block"},null,2),[[A,n(t).flat]]),e("small",zi,p(n(t).errors.flat),1)]),e("div",Mi,[Hi,x(e("input",{class:C([{"error-field":n(t).errors.building},"form-control"]),"onUpdate:modelValue":a[8]||(a[8]=m=>n(t).building=m),type:"text",placeholder:"Street number"},null,2),[[A,n(t).building]]),e("small",Yi,p(n(t).errors.building),1)]),e("div",Wi,[Gi,x(e("input",{class:C([{"error-field":n(t).errors.street},"form-control"]),"onUpdate:modelValue":a[9]||(a[9]=m=>n(t).street=m),type:"text",placeholder:"Street"},null,2),[[A,n(t).street]]),e("small",Ki,p(n(t).errors.street),1)]),e("div",Zi,[Ji,x(e("input",{class:C([{"error-field":n(t).errors.state},"form-control"]),"onUpdate:modelValue":a[10]||(a[10]=m=>n(t).state=m),type:"text",placeholder:"State"},null,2),[[A,n(t).state]]),e("small",Xi,p(n(t).errors.state),1)]),e("div",Qi,[ea,U(I,{class:C({"error-field":n(t).errors.country}),placeholder:"select country..",modelValue:n(t).country,"onUpdate:modelValue":a[11]||(a[11]=m=>n(t).country=m),clearable:!1,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",ta,p(n(t).errors.country),1)])])]),e("section",na,[sa,e("span",null,[e("div",oa,[x(e("input",{class:"form-check-input exemption",type:"checkbox",id:"same_address","onUpdate:modelValue":a[12]||(a[12]=m=>n(t).correspondingAddressIsSame=m)},null,512),[[qe,n(t).correspondingAddressIsSame]]),ia])]),n(t).correspondingAddressIsSame?V("",!0):(y(),w("div",aa,[e("div",la,[ra,x(e("input",{class:C([{"error-field":n(t).errors.flat2},"form-control"]),"onUpdate:modelValue":a[13]||(a[13]=m=>n(t).flat2=m),type:"text",placeholder:"Flat／Floor／Block"},null,2),[[A,n(t).flat2]]),e("small",ca,p(n(t).errors.flat2),1)]),e("div",da,[ua,x(e("input",{class:C([{"error-field":n(t).errors.building2},"form-control"]),"onUpdate:modelValue":a[14]||(a[14]=m=>n(t).building2=m),type:"text",placeholder:"Street number"},null,2),[[A,n(t).building2]]),e("small",pa,p(n(t).errors.building2),1)]),e("div",_a,[ma,x(e("input",{class:C([{"error-field":n(t).errors.street2},"form-control"]),"onUpdate:modelValue":a[15]||(a[15]=m=>n(t).street2=m),type:"text",placeholder:"Street"},null,2),[[A,n(t).street2]]),e("small",ha,p(n(t).errors.street2),1)]),e("div",fa,[ya,x(e("input",{class:C([{"error-field":n(t).errors.state2},"form-control"]),"onUpdate:modelValue":a[16]||(a[16]=m=>n(t).state2=m),type:"text",placeholder:"State"},null,2),[[A,n(t).state2]]),e("small",va,p(n(t).errors.state2),1)]),e("div",ga,[ba,U(I,{class:C({"error-field":n(t).errors.country2}),placeholder:"select country..",modelValue:n(t).country2,"onUpdate:modelValue":a[17]||(a[17]=m=>n(t).country2=m),clearable:!1,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",$a,p(n(t).errors.country2),1)])]))]),e("section",Sa,[e("div",wa,[xa,x(e("select",{class:C(["form-select",{"error-field":n(t).errors.identity_type_id}]),"onUpdate:modelValue":a[18]||(a[18]=m=>n(t).identity_type_id=m)},Aa,2),[[ee,n(t).identity_type_id]]),e("small",Fa,p(n(t).errors.identity_type_id),1)]),n(t).identity_type_id=="2"?(y(),w("div",Pa,[Ta,x(e("input",{class:C([{"error-field":n(t).errors.identity_no},"form-control"]),"data-maska":"#### #### #### ####","data-maska-tokens":"#:[0-9a-zA-Z]","onUpdate:modelValue":a[19]||(a[19]=m=>n(t).identity_no=m),ype:"text",placeholder:"HKID No."},null,2),[[n(W)],[A,n(t).identity_no]]),e("small",Va,p(n(t).errors.identity_no),1)])):V("",!0),n(t).identity_type_id=="2"?(y(),w("div",Ia,[r(" ( "),x(e("input",{class:C([{"error-field":n(t).errors.identity_no_suffix},"form-control"]),"data-maska":"##","data-maska-tokens":"#:[0-9]","onUpdate:modelValue":a[20]||(a[20]=m=>n(t).identity_no_suffix=m),type:"text",placeholder:"",style:{display:"inline !important",width:"100px"}},null,2),[[n(W)],[A,n(t).identity_no_suffix]]),r(") "),e("small",Da,p(n(t).errors.identity_no_suffix),1)])):V("",!0),n(t).identity_type_id=="1"?(y(),w("div",La,[Oa,x(e("input",{class:C([{"error-field":n(t).errors.passport_no},"form-control"]),"data-maska":"EEEEEEEEEEEEEEEE","data-maska-tokens":"E:[0-9a-zA-Z]","onUpdate:modelValue":a[21]||(a[21]=m=>n(t).passport_no=m),type:"text",placeholder:"Passport No"},null,2),[[n(W)],[A,n(t).passport_no]]),e("small",Ua,p(n(t).errors.passport_no),1)])):V("",!0),n(t).identity_type_id=="1"?(y(),w("div",Ba,[Ra,U(I,{class:C({"error-field":n(t).errors.issuing_country}),modelValue:n(t).issuing_country,"onUpdate:modelValue":a[22]||(a[22]=m=>n(t).issuing_country=m),clearable:!1,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",qa,p(n(t).errors.issuing_country),1)])):V("",!0),e("div",ja,[Na,U(_,{class:C({"error-field":n(t).errors.phone}),inputOptions:v.input,dropdownOptions:v.dropDown,autoFormat:!0,modelValue:n(t).phone,"onUpdate:modelValue":a[23]||(a[23]=m=>n(t).phone=m),"data-maska-tokens":"0:[0-9]:multiple"},null,8,["class","inputOptions","dropdownOptions","modelValue"]),e("small",za,p(n(t).errors.phone),1)]),e("div",Ma,[Ha,x(e("input",{class:C([{"error-field":n(t).errors.email},"form-control"]),"onUpdate:modelValue":a[24]||(a[24]=m=>n(t).email=m),type:"text",placeholder:"email"},null,2),[[A,n(t).email]]),e("small",Ya,p(n(t).errors.email),1)]),e("div",Wa,[Ga,x(e("input",{class:C([{"error-field":n(t).errors.confirm_email},"form-control"]),"onUpdate:modelValue":a[25]||(a[25]=m=>n(t).confirm_email=m),type:"text",placeholder:"confirm email"},null,2),[[A,n(t).confirm_email]]),e("small",Ka,p(n(t).errors.confirm_email),1),i.value?(y(),w("small",Za,"emails do no match")):V("",!0)]),e("div",Ja,[Xa,U(I,{class:C({"error-field":n(t).errors.occupation}),modelValue:n(t).occupation,"onUpdate:modelValue":a[26]||(a[26]=m=>n(t).occupation=m),clearable:!0,options:n(s).employmentStatusList},null,8,["class","modelValue","options"]),e("small",Qa,p(n(t).errors.occupation),1)])]),e("div",el,[e("button",{onClick:g,class:"btn btn-outline-info me-3"},[tl,r(" Close ")]),n(t).isSaving?(y(),w("button",sl,[ol,r(" Saving, Please wait ")])):(y(),w("button",{key:0,onClick:a[27]||(a[27]=(...m)=>n(h)&&n(h)(...m)),class:"btn btn-primary"},[r(" Save Record "),nl]))])],64)}}}),al=ye(il,[["__scopeId","data-v-196c5d9b"]]),Y=l=>(he("data-v-b9229c64"),l=l(),fe(),l),ll={class:"section"},rl={class:"fw-bolder fs-5"},cl={key:0,class:"text-primary small fst-italic"},dl=Y(()=>e("span",null,"Tell us the details about the founder and director.",-1)),ul={key:0},pl=Y(()=>e("i",{class:"bi bi-plus-circle"},null,-1)),_l={key:0,class:"section"},ml={class:"card",style:{width:"100%"}},hl=Y(()=>e("div",{class:"card-header py-3 fw-bold border-0"},"Founders / Directors: ",-1)),fl={class:"table-responsive"},yl={class:"table table-sm"},vl={key:0,class:"text-capitalize"},gl=Y(()=>e("i",{class:"bi bi-person-circle"},null,-1)),bl=Y(()=>e("br",null,null,-1)),$l={key:1,class:"text-capitalize"},Sl=Y(()=>e("i",{class:"bi bi-person-circle"},null,-1)),wl=Y(()=>e("br",null,null,-1)),xl={class:"text"},kl=["onClick"],Cl=Y(()=>e("i",{class:"bi bi-pencil"},null,-1)),El=["onClick"],Al=Y(()=>e("i",{class:"bi bi-trash3"},null,-1)),Fl=Y(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Pl=Y(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Tl={key:1},Vl={class:"section"},Il=Y(()=>e("div",{class:"fw-bold"},"What is the type of founder/director? ",-1)),Dl={class:"row justify-content- mt-1"},Ll={key:0,class:"bi bi-record-circle-fill text-primary me-1"},Ol={key:1,class:"bi bi-circle me-1"},Ul={key:0,class:"bi bi-record-circle-fill text-primary me-1"},Bl={key:1,class:"bi bi-circle me-1"},Rl={class:"section"},ql=Y(()=>e("div",{class:"fw-bold"},"What is the Capacity of this individual? ",-1)),jl={class:"row justify-content- mt-1"},Nl={class:"col-4"},zl={class:"form-check"},Ml=Y(()=>e("label",{class:"form-check-label",for:"shareholder"},"Shareholder",-1)),Hl={class:"col-4"},Yl={class:"form-check"},Wl=Y(()=>e("label",{class:"form-check-label",for:"director"},"Director",-1)),Gl={key:2,class:"p-2"},Kl=Y(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Zl=Y(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What are the basic requirements to be a founder? "),e("div",null," A founder must be at least 18 years old. There is no residency requirement to be a founder, and our form allows for up to 6 founders to be registered. ")],-1)),Jl=Y(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Is it possible to change founder details after the company has been incorporated? "),e("div",null," Yes, amendments to founder details can be made post-incorporation. ")],-1)),Xl=Y(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Is it possible to change founder details after the company has been incorporated? "),e("div",null," No, you must provide a physical residential address as it is mandatory. ")],-1)),Ql=X({__name:"Founders",setup(l){const o=Je(),s=Xe(),t=H(null),v=J(),c=de.useToast(),i=H(!1),g=me(()=>{var S;const _=((S=v.companyInProgress)==null?void 0:S.company_entity)??[],m=[];return _.length&&_.forEach(f=>{const k=f.individual||f.corporate;k&&(k.entity_type_id=f.entity_type_id,k.capacity=f.entity_capacity_id,m.push(k))}),m});function h(){v.switchStage("-")}function d(){o.resetForm(),s.resetForm(),v.isShowingFoundersForm=!0,v.idToEdit=""}function u(_){t.value=_.entity_type_id=="1"?"individual":"corporate",v.isShowingFoundersForm=!0,v.idToEdit=_.company_entity_id,s.clearLocalStorage(),s.clearLocalStorage(),i.value=!0,a(_)}function a(_){_.entity_type_id=="1"?(s.flat=_.res_address.flat,s.building=_.res_address.building,s.street=_.res_address.street,s.state=_.res_address.state,s.country=_.res_address.country,s.first_name=_.first_name,s.last_name=_.last_name,_.chn_first_name&&_.chn_first_name!="undefined"&&(s.hasChineseName=!0,s.chn_first_name=_.chn_first_name),_.chn_last_name&&_.chn_last_name!="undefined"&&(s.chn_last_name=_.chn_last_name),s.dob=new Date(_.dob),s.nationality=_.nationality,s.phone=_.phone,s.email=_.email,s.confirm_email=_.email,s.occupation=_.occupation,s.identity_type_id=_.get_identity.identity_type,_.get_identity.identity_type==1&&(s.passport_no=_.get_identity.passport_no,s.issuing_country=_.get_identity.issueing_country),_.get_identity.identity_type==2&&(s.identity_no=_.get_identity.identity_no,_.get_identity.identity_no_suffix&&(s.identity_no_suffix=_.get_identity.identity_no_suffix)),v.checkedEntityCapacity=JSON.parse(_.capacity)):(_.company_name!=null&&_.company_name!="undefined"&&(o.company_name=_.company_name),_.chn_company_name!=null&&_.chn_company_name!="undefined"&&(o.chn_company_name=_.chn_company_name),o.date_incorporated=new Date(_.date_incorporated),o.flat=_.flat,o.building=_.building,o.street=_.street,o.state=_.state,o.country=_.country,_.registeration_no!=null&&_.registeration_no!="undefined"&&(o.registeration_no=_.registeration_no),o.country_registered=_.country_registered,o.business_nature_id=parseInt(_.business_nature_id),o.phone=_.authorized_persons.phone,o.email=_.authorized_persons.email,o.confirm_email=_.authorized_persons.email,o.first_name=_.authorized_persons.first_name,o.last_name=_.authorized_persons.last_name,v.checkedEntityCapacity=JSON.parse(_.capacity))}function P(_){_e.confirmDelete("Delete this Record?","Yes, Delete").then(async m=>{if(m.isConfirmed)try{const S=await Z.deleteEntity(_);c.success("Record deleted",{position:"top-right"}),v.getCompanyInProgress("founder"),s.clearLocalStorage(),s.clearLocalStorage()}catch{c.error("Sorry Something went wrong",{position:"top-right"})}})}function I(){v.switchStage("+"),v.getCompanyInProgress()}return(_,m)=>(y(),R(ce,null,{main:N(()=>[e("section",ll,[e("div",rl,[r("Founders / Directors "),n(v).isShowingFoundersForm&&n(v).idToEdit?(y(),w("span",cl,"(editing...)")):V("",!0)]),dl]),n(v).isShowingFoundersForm?(y(),w("div",Tl,[e("section",Vl,[Il,e("div",Dl,[e("div",{onClick:m[0]||(m[0]=S=>t.value="individual"),class:C(["col-4 cursor-pointer",{"pointer-events-none":n(v).idToEdit}])},[t.value=="individual"?(y(),w("i",Ll)):(y(),w("i",Ol)),r(" Individual ")],2),e("div",{onClick:m[1]||(m[1]=S=>t.value="corporate"),class:C(["col-4 cursor-pointer",{"pointer-events-none":n(v).idToEdit}])},[t.value=="corporate"?(y(),w("i",Ul)):(y(),w("i",Bl)),r(" Corporate ")],2)])]),e("section",Rl,[ql,e("div",jl,[e("div",Nl,[e("div",zl,[x(e("input",{"onUpdate:modelValue":m[2]||(m[2]=S=>n(v).checkedEntityCapacity=S),class:"form-check-input cursor-pointer exemption",type:"checkbox",id:"shareholder",value:"1"},null,512),[[qe,n(v).checkedEntityCapacity]]),Ml])]),e("div",Hl,[e("div",Yl,[x(e("input",{class:"form-check-input exemption",type:"checkbox",id:"director",value:"2","onUpdate:modelValue":m[3]||(m[3]=S=>n(v).checkedEntityCapacity=S)},null,512),[[qe,n(v).checkedEntityCapacity]]),Wl])])])]),t.value=="individual"?(y(),R(al,{key:0})):t.value=="corporate"?(y(),R(di,{key:1})):(y(),w("div",Gl,[e("button",{onClick:h,class:"btn btn-outline-info me-3"},[Kl,r(" Close ")])]))])):(y(),w("div",ul,[e("button",{class:"btn w-100 btn-outline-secondary py-3 mb-4",id:"CompanyStore",onClick:d},[pl,r(" Add New founder / Director ")]),g.value.length?(y(),w("section",_l,[e("div",ml,[hl,e("div",fl,[e("table",yl,[e("tbody",null,[(y(!0),w(xe,null,Ve(g.value,(S,f)=>(y(),w("tr",{key:S},[e("td",null,p(f+1),1),S.entity_type_id==1?(y(),w("td",vl,[gl,r(" "+p(S.first_name+" "+S.last_name)+" ",1),bl,e("small",null,p(S.capacity.includes("1")?"Shareholder":""),1),r(" "+p((S.capacity.length>1," "))+" ",1),e("small",null,p(S.capacity.includes("2")?"Director":" "),1)])):(y(),w("td",$l,[Sl,r(" "+p(S.company_name)+" ",1),wl,e("small",null,p(S.capacity.includes("1")?"Shareholder":" "),1),e("small",null,p(S.capacity.includes("2")?" Director":" "),1)])),e("td",xl,p(S.entity_type_id=="1"?"Individual":"Corporate"),1),e("td",null,[e("button",{onClick:k=>u(S),class:"btn btn-sm border-0 text-info p-0 m-0"},[Cl,r(" Edit ")],8,kl)]),e("td",null,[e("button",{onClick:k=>P(S.company_entity_id),class:"btn border-0 btn-sm text-danger p-0 m-0"},[Al,r(" Remove ")],8,El)])]))),128))])])])])])):V("",!0),e("button",{onClick:h,class:"btn btn-outline-info me-3"},[Fl,r(" Back ")]),e("button",{onClick:I,class:"btn btn-primary"},[r(" Continue "),Pl])]))]),info:N(()=>[Zl,Jl,Xl]),_:1}))}}),er=ye(Ql,[["__scopeId","data-v-b9229c64"]]),tr=Ge("ownership",()=>{const l=H("1"),o=H(""),s=H(""),t=H(""),v=!1,c=H([]);return{share_type_id:l,no_of_share:o,total_amount_paid:s,currency:t,isSaving:v,shareHolders:c}}),j=l=>(he("data-v-d2fa5483"),l=l(),fe(),l),nr=j(()=>e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Ownership")],-1)),sr={class:"section"},or={class:"row g-3 mt-1"},ir={class:"col-md-6 col-lg-3"},ar=j(()=>e("label",{class:"form-labe fw-bold small"},[r("Class of shares: "),e("span",{class:"text-danger"}," * ")],-1)),lr={class:"col-md-12"},rr=j(()=>e("option",{selected:"",value:"1"},"Ordinary",-1)),cr=[rr],dr={class:"col-md-6 col-lg-3"},ur=j(()=>e("label",{class:"form-labe fw-bold small"},[r("Total no of shares: "),e("span",{class:"text-danger"}," * ")],-1)),pr={class:"col-md-12"},_r={class:"col-md-6 col-lg-3"},mr=j(()=>e("label",{class:"form-labe fw-bold small"},[r("Total amount paid:"),e("span",{class:"text-danger"}," * ")],-1)),hr={class:"col-md-12"},fr={class:"small text-danger"},yr={class:"col-md-6 col-lg-3"},vr=j(()=>e("label",{class:"form-labe fw-bold small"},[r("Currency: "),e("span",{class:"text-danger"}," * ")],-1)),gr={class:"col-md-12"},br=j(()=>e("div",{class:"my-4"},"Split the company shares between founders:",-1)),$r={class:"card border-0 shadow-sm mb-3"},Sr={class:"card-body"},wr={key:0},xr=j(()=>e("i",{class:"bi bi-plus"},null,-1)),kr={key:1,class:"list-group list-group-flush"},Cr=j(()=>e("i",{class:"bi bi-person-circle me-2"},null,-1)),Er=j(()=>e("span",{class:"text-danger"}," * ",-1)),Ar={class:"float-end"},Fr=["onUpdate:modelValue"],Pr={class:"list-group-item"},Tr={key:0,class:"fw-bold float-end text-success"},Vr=j(()=>e("i",{class:"bi bi-check-circle"},null,-1)),Ir={key:1,class:"float-end text-danger small"},Dr=j(()=>e("i",{class:"bi bi-exclamation-circle"},null,-1)),Lr={key:0,class:"section"},Or=j(()=>e("div",{class:"fw-bolder fs-6"},"Ownership Summary",-1)),Ur=j(()=>e("span",null,"Here is how much founders own",-1)),Br={class:"card mt-1 rounded-0 border-0 bg-light"},Rr={class:"card-body bg-transparent"},qr={class:"table-responsive"},jr={class:"table"},Nr=j(()=>e("thead",{class:".thead"},[e("tr",null,[e("th"),e("th",null,"Split")])],-1)),zr={class:"tbody"},Mr={class:"text-capitalize thead"},Hr=j(()=>e("i",{class:"bi bi-circle-fill me-2"},null,-1)),Yr=j(()=>e("tr",{class:""},[e("td"),e("td",{class:"fw-bold text-success"},"100%")],-1)),Wr={class:"movement-buttons mt-5 mb-4"},Gr=j(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Kr=["disabled"],Zr=j(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Jr={key:1,class:"btn btn-primary",type:"button",disabled:""},Xr=j(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),Qr=j(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What are 'Class of Shares', and how do I choose the right one? "),e("div",null," 'Class of Shares' refers to the category of stock you are allocating. 'Ordinary' shares are common stock with no special rights or restrictions. This is the most common and most straight forward to begin with. ")],-1)),ec=j(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What if the ownership percentages among founders don’t add up to 100%? "),e("div",null," The total ownership must equal 100%. If your allocations don’t sum up to 100%, you'll need to adjust the percentages until they do. The form will indicate any discrepancies with a visual cue. ")],-1)),tc=X({__name:"Ownership",setup(l){const o=de.useToast(),s=J(),t=tr(),v=je({total:""});let c=H("Sum of entries must be equal to Total Amount Paid");const i=me(()=>Object.keys(v).some(m=>v[m]!==""));function g(m){return parseInt(m.replace(/,/g,""))}Ie(()=>{v.total=""}),ie(()=>{var k;const m=((k=s.companyInProgress)==null?void 0:k.company_entity)??[],S=m.find(q=>q.entity_capacity_id.includes(2)&&q.entity_type_id==1);(!m.find(q=>q.entity_capacity_id.includes(1))||!S)&&(o.error("You need to add at least one <br> Shareholder    and one Individual <br> Director to proceed",{position:"top-right"}),s.switchStage("-")),d(),h()});function h(){var S,f,k,q,M,ne;t.no_of_share=((f=(S=s.companyInProgress)==null?void 0:S.shares[0])==null?void 0:f.no_of_share)??"",t.currency=((q=(k=s.companyInProgress)==null?void 0:k.shares[0])==null?void 0:q.currency)??"";const m=((ne=(M=s.companyInProgress)==null?void 0:M.shares[0])==null?void 0:ne.total_amount_paid)??"";t.total_amount_paid=m?parseFloat(m).toFixed(0):""}async function d(){var m;try{const f=(await Z.retrieveShaheolders((m=s.companyInProgress)==null?void 0:m.id)).data.data,k=[];f.length&&f.forEach(q=>{var ne;const M=q.individual||q.corporate;M&&(M.entity_name=q.entity_type_id==1?`${M.first_name} ${M.last_name}`:`${M.company_name}`,M.own_share=((ne=q.share)==null?void 0:ne.total_amount)??0,k.push(M))}),t.shareHolders=k}catch{}}const u=me(()=>{let m=0;if(t.shareHolders.length)for(const f of t.shareHolders){if(f.own_share&&(m+=g(f.own_share)),f.own_share<=0)return c="Shareholder must not have zero(0) shares",!1;c="Sum of entries must be equal to Number of Shares"}const S=t.no_of_share?g(t.no_of_share):0;return m==S}),a=me(()=>{const m=[];return t.shareHolders.length&&t.total_amount_paid&&t.shareHolders.forEach(S=>{const f={name:S.entity_name,own_share:S.own_share,company_entity_id:S.company_entity_id,share_percentage:(g(S.own_share)/g(t.no_of_share)*100).toFixed(2)};m.push(f)}),m});function P(){s.switchStage("-")}function I(){var S;if(!((S=s.companyInProgress)!=null&&S.id)){o.default("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(!t.currency||!t.total_amount_paid||!t.no_of_share){o.default("Please complete fields",{position:"top-right"});return}const m=new FormData;m.append("company_id",s.companyInProgress.id),m.append("currency",t.currency),m.append("share_type_id",t.share_type_id),m.append("total_amount_paid",`${g(t.total_amount_paid)}`),m.append("no_of_share",t.no_of_share.replace(/,/g,"")),a.value.forEach((f,k)=>{m.append(`company_entity[${k}][share_percentage]`,f.share_percentage),m.append(`company_entity[${k}][total_amount]`,`${g(f.own_share)}`),m.append(`company_entity[${k}][company_entity_id]`,f.company_entity_id)}),t.isSaving=!0,_(m)}async function _(m){try{await Z.companyShares(m),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(m,S)=>{const f=K("v-select");return y(),R(ce,null,{main:N(()=>[nr,e("section",sr,[e("div",or,[e("div",ir,[ar,e("div",lr,[x(e("select",{"onUpdate:modelValue":S[0]||(S[0]=k=>n(t).share_type_id=k),class:"form-select"},cr,512),[[ee,n(t).share_type_id]])])]),e("div",dr,[ur,e("div",pr,[x(e("input",{"onUpdate:modelValue":S[1]||(S[1]=k=>n(t).no_of_share=k),required:"",placeholder:"0",class:"form-control","data-maska":"9,99#","data-maska-tokens":"9:[0-9]:repeated","data-maska-reversed":""},null,512),[[A,n(t).no_of_share],[n(W)]])])]),e("div",_r,[mr,e("div",hr,[x(e("input",{"onUpdate:modelValue":S[2]||(S[2]=k=>n(t).total_amount_paid=k),placeholder:"0.00",class:"form-control","data-maska":"9,99#","data-maska-tokens":"9:[0-9]:repeated","data-maska-reversed":""},null,512),[[A,n(t).total_amount_paid],[n(W)]]),e("span",fr,p(v.total),1)])]),e("div",yr,[vr,e("div",gr,[U(f,{modelValue:n(t).currency,"onUpdate:modelValue":S[3]||(S[3]=k=>n(t).currency=k),clearable:!1,options:n(s).currencies},null,8,["modelValue","options"])])])])]),br,e("div",$r,[e("div",Sr,[n(t).shareHolders?(y(),w("ul",kr,[(y(!0),w(xe,null,Ve(n(t).shareHolders,(k,q)=>(y(),w("li",{key:k,class:"list-group-item text-capitalize"},[Cr,r(" "+p(k.entity_name)+" ",1),Er,e("span",Ar,[x(e("input",{"onUpdate:modelValue":M=>k.own_share=M,type:"text",class:"form-control form-control-sm text-end",placeholder:"0","data-maska":"9,99#","data-maska-tokens":"9:[0-9]:repeated","data-maska-reversed":""},null,8,Fr),[[A,k.own_share],[n(W)]])])]))),128)),e("li",Pr,[n(t).total_amount_paid&&u.value?(y(),w("span",Tr,[r(" 100% "),Vr])):(y(),w("span",Ir,[r(p(n(c))+" ",1),Dr]))])])):(y(),w("div",wr,[e("button",{class:"btn btn-link",onClick:S[4]||(S[4]=k=>n(s).switchStage("-"))},[xr,r("Please add Shareholders. ")])]))])]),n(t).no_of_share&&u.value?(y(),w("section",Lr,[Or,Ur,e("div",Br,[e("div",Rr,[e("div",qr,[e("table",jr,[Nr,e("tbody",zr,[(y(!0),w(xe,null,Ve(a.value,k=>(y(),w("tr",{key:k,class:"thead"},[e("td",Mr,[Hr,r(" "+p(k.name),1)]),e("td",null,p(k.share_percentage)+"%",1)]))),128)),Yr])])])])])])):V("",!0),e("div",Wr,[e("button",{onClick:P,class:"btn btn-outline-info me-3"},[Gr,r(" Back ")]),n(t).isSaving?(y(),w("button",Jr,[Xr,r(" Saving, Please wait ")])):(y(),w("button",{key:0,disabled:!u.value||i.value,onClick:I,class:"btn btn-primary"},[r(" Save Record "),Zr],8,Kr))])]),info:N(()=>[Qr,ec]),_:1})}}}),nc=ye(tc,[["__scopeId","data-v-d2fa5483"]]),G=l=>(he("data-v-9a880257"),l=l(),fe(),l),sc=G(()=>e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Company Secretary"),e("span",null,"Company secretary details")],-1)),oc={class:"row g-2"},ic=G(()=>e("div",{class:"col-md-12"},[e("label",{class:"fw-bolder"},[r("Type "),e("i",{class:"bi bi-lock-fill"})]),e("select",{disabled:"",class:"form-select"},[e("option",{seleted:"",value:"corporate"},"Corporate"),e("option",{value:"individual"},"Individual")])],-1)),ac={class:"col-md-12"},lc=G(()=>e("label",{class:"fw-bolder"},[r("Name in English "),e("i",{class:"bi bi-lock-fill"})],-1)),rc={class:"col-md-12"},cc=G(()=>e("label",{class:"fw-bolder"},[r("Company registration no "),e("i",{class:"bi bi-lock-fill"})],-1)),dc={class:"col-md-12"},uc=G(()=>e("label",{class:"fw-bolder"},[r("Company license no "),e("i",{class:"bi bi-lock-fill"})],-1)),pc={class:"col-md-12"},_c=G(()=>e("label",{class:"fw-bolder"},[r("Country registered in "),e("i",{class:"bi bi-lock-fill"})],-1)),mc=G(()=>e("option",{selected:"",value:"Hong Kong"},"Hong Kong",-1)),hc=[mc],fc={class:"section"},yc=G(()=>e("div",{class:"fw-bolder pt-3"},"Address ",-1)),vc={class:"row g-3 mt-1"},gc={class:"col-12"},bc=G(()=>e("label",{class:"form-label"},[r(" Flat／Floor／Block "),e("i",{class:"bi bi-lock-fill"})],-1)),$c={class:"col-12"},Sc=G(()=>e("label",{class:"form-label"},[r(" Building"),e("i",{class:"bi bi-lock-fill"})],-1)),wc={class:"col-12"},xc=G(()=>e("label",{class:"form-label"},[r(" Street／Estate／Lot／Village"),e("i",{class:"bi bi-lock-fill"})],-1)),kc={class:"col-12"},Cc=G(()=>e("label",{class:"form-label"},[r("District／City／ Province／State／ Postal Code "),e("i",{class:"bi bi-lock-fill"})],-1)),Ec={class:"col-md-12"},Ac=G(()=>e("label",{class:"form-label"},[r("Country／Region "),e("i",{class:"bi bi-lock-fill"})],-1)),Fc=G(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Pc=G(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Tc=X({__name:"Secretary",setup(l){const o=J(),s=je({name:"Square One Limited",company_reg_no:"68891673",country_registered:"Hong Kong",licence_no:"TC000012",flat:"Rooms 502-503, 5th Floor",building:"Wanchai Commercial Centre",street:"194-204 Johnston Road",postal_code:"",country:"Hong Kong",state:"Wanchai",city:"Wanchai"});function t(){o.switchStage("-")}async function v(){var i;const c=new FormData;c.append("company_id",(i=o.companyInProgress)==null?void 0:i.id),await Z.companySecretary(c),o.switchStage("+")}return(c,i)=>{const g=K("v-select");return y(),R(ce,null,{main:N(()=>[sc,e("section",oc,[ic,e("div",ac,[lc,x(e("input",{disabled:"","onUpdate:modelValue":i[0]||(i[0]=h=>s.name=h),type:"text",class:"form-control",placeholder:"Name in English"},null,512),[[A,s.name]])]),e("div",rc,[cc,x(e("input",{disabled:"","onUpdate:modelValue":i[1]||(i[1]=h=>s.company_reg_no=h),type:"text",class:"form-control",placeholder:"Company registration no"},null,512),[[A,s.company_reg_no]])]),e("div",dc,[uc,x(e("input",{disabled:"","onUpdate:modelValue":i[2]||(i[2]=h=>s.licence_no=h),type:"text",class:"form-control",placeholder:"Company registration no"},null,512),[[A,s.licence_no]])]),e("div",pc,[_c,x(e("select",{disabled:"",class:"form-select","onUpdate:modelValue":i[3]||(i[3]=h=>s.country_registered=h)},hc,512),[[ee,s.country_registered]])])]),e("section",fc,[yc,e("div",vc,[e("div",gc,[bc,x(e("input",{disabled:"","onUpdate:modelValue":i[4]||(i[4]=h=>s.flat=h),class:"form-control",type:"text",placeholder:"Flat／Floor／Block"},null,512),[[A,s.flat]])]),e("div",$c,[Sc,x(e("input",{disabled:"","onUpdate:modelValue":i[5]||(i[5]=h=>s.building=h),class:"form-control",type:"text",placeholder:"Street number"},null,512),[[A,s.building]])]),e("div",wc,[xc,x(e("input",{disabled:"","onUpdate:modelValue":i[6]||(i[6]=h=>s.street=h),class:"form-control",type:"text",placeholder:"City"},null,512),[[A,s.street]])]),e("div",kc,[Cc,x(e("input",{disabled:"","onUpdate:modelValue":i[7]||(i[7]=h=>s.state=h),class:"form-control",type:"text",placeholder:"State"},null,512),[[A,s.state]])]),e("div",Ec,[Ac,U(g,{disabled:!0,placeholder:"select country..",modelValue:s.country,"onUpdate:modelValue":i[8]||(i[8]=h=>s.country=h),clearable:!1,options:n(o).countries},null,8,["modelValue","options"])])])]),e("div",{class:"movement-buttons my-5"},[e("button",{onClick:t,class:"btn btn-outline-info me-3"},[Fc,r(" Back ")]),e("button",{onClick:v,class:"btn btn-primary"},[r(" Continue "),Pc])])]),info:N(()=>[]),_:1})}}}),Vc=ye(Tc,[["__scopeId","data-v-9a880257"]]),ae=l=>(he("data-v-9138b6a4"),l=l(),fe(),l),Ic=ae(()=>e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Source of funds"),e("span",null,"Source of funds")],-1)),Dc={class:"row g-2"},Lc={class:"col-md-12"},Oc=ae(()=>e("label",{class:"fw-bolder"},[r("Expected source of funds "),e("small",{class:"text-danger"},"*")],-1)),Uc={class:"text-danger"},Bc={class:"col-md-12"},Rc=ae(()=>e("label",{class:"fw-bolder"},[r("Origin source of funds "),e("small",{class:"text-danger"},"*")],-1)),qc={class:"text-danger"},jc=ae(()=>e("div",{class:"fw-bolder fs-5"},"Source of Wealth",-1)),Nc={class:"col-md-12"},zc=ae(()=>e("label",{class:"fw-bolder"},[r("Initial source of wealth "),e("small",{class:"text-danger"},"*")],-1)),Mc={class:"text-danger"},Hc={class:"col-md-12"},Yc=ae(()=>e("label",{class:"fw-bolder"},[r("Ongoing source of wealth "),e("small",{class:"text-danger"},"*")],-1)),Wc={class:"text-danger"},Gc={class:"movement-buttons my-5"},Kc=ae(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Zc=ae(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Jc={key:1,class:"btn btn-primary",type:"button",disabled:""},Xc=ae(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),Qc=ae(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Why do I need to disclose the source of funds and wealth? "),e("div",null," Disclosure of the source of funds and wealth is a regulatory requirement to comply with anti-money laundering laws. It helps maintain financial transparency and accountability. ")],-1)),ed=ae(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What qualifies as a source of funds? "),e("div",null," The source of funds refers to the origin of the capital you will invest in the company, such as personal savings, loan or credit, investment income, or any other legitimate source. ")],-1)),td=ae(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Can the source of wealth and source of funds be the same? "),e("div",null," Yes, they can be the same if your initial wealth, which is funding the company, comes from a consistent ongoing source, such as a business or employment income. ")],-1)),nd=X({__name:"Source",setup(l){const o=de.useToast(),s=J(),t=Qe();ie(()=>{t.updateFields(s.companyInProgress)}),ge(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});function v(){s.switchStage("-")}const c=t.handleSubmit(async g=>{var d;if(!((d=s.companyInProgress)!=null&&d.id)){o.error("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0)return o.error("Some fields still have errors",{position:"top-right"}),!0;const h=new FormData;h.append("company_id",s.companyInProgress.id),h.append("income_expected_source",g.income_expected_source),h.append("origin_funds",g.origin_funds),h.append("wealth_initial_source",g.wealth_initial_source),h.append("income_outgoing_source",g.income_outgoing_source),t.isSaving=!0,i(h)});async function i(g){try{await Z.companySource(g),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}return(g,h)=>{const d=K("v-select");return y(),R(ce,null,{main:N(()=>[Ic,e("section",Dc,[e("div",Lc,[Oc,U(d,{class:C({"error-field":n(t).errors.income_expected_source}),modelValue:n(t).income_expected_source,"onUpdate:modelValue":h[0]||(h[0]=u=>n(t).income_expected_source=u),clearable:!0,options:n(s).sourceOfFunds},null,8,["class","modelValue","options"]),e("small",Uc,p(n(t).errors.income_expected_source),1)]),e("div",Bc,[Rc,U(d,{class:C({"error-field":n(t).errors.origin_funds}),modelValue:n(t).origin_funds,"onUpdate:modelValue":h[1]||(h[1]=u=>n(t).origin_funds=u),clearable:!0,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",qc,p(n(t).errors.origin_funds),1)]),jc,e("div",Nc,[zc,U(d,{class:C({"error-field":n(t).errors.wealth_initial_source}),modelValue:n(t).wealth_initial_source,"onUpdate:modelValue":h[2]||(h[2]=u=>n(t).wealth_initial_source=u),clearable:!0,options:n(s).initialSourceOfWealth},null,8,["class","modelValue","options"]),e("small",Mc,p(n(t).errors.wealth_initial_source),1)]),e("div",Hc,[Yc,U(d,{class:C({"error-field":n(t).errors.income_outgoing_source}),modelValue:n(t).income_outgoing_source,"onUpdate:modelValue":h[3]||(h[3]=u=>n(t).income_outgoing_source=u),clearable:!0,options:n(s).ongoingSourceOfIncome},null,8,["class","modelValue","options"]),e("small",Wc,p(n(t).errors.income_outgoing_source),1)])]),e("div",Gc,[e("button",{onClick:v,class:"btn btn-outline-info me-3"},[Kc,r(" Back ")]),n(t).isSaving?(y(),w("button",Jc,[Xc,r(" Saving, Please wait ")])):(y(),w("button",{key:0,onClick:h[4]||(h[4]=(...u)=>n(c)&&n(c)(...u)),class:"btn btn-primary"},[r(" Save & Continue "),Zc]))])]),info:N(()=>[Qc,ed,td]),_:1})}}}),sd=ye(nd,[["__scopeId","data-v-9138b6a4"]]),od=e("section",{class:"section"},[e("div",{class:"fw-bolder fs-5"},"Activities"),e("span",null,"Detail your company's primary business operations below.")],-1),id={class:"section"},ad=e("div",{class:"fw-bold"},[r("Describe your expected business activities "),e("span",{class:"text-danger"}," * ")],-1),ld=e("div",null,"Provide a brief but clear description of your anticipated business activities. Be as specific as possible to ensure accurate representation in your business ",-1),rd={class:"row g-2 mt-1"},cd={class:"col-md-12"},dd={class:"text-danger"},ud={class:"float-end"},pd={class:"section"},_d=e("div",{class:"fw-bold"},[r("Level of activity "),e("span",{class:"text-danger"}," * ")],-1),md=e("div",null,"Select the volume and frequency of transactions your business expects to handle. ",-1),hd={class:"row g-2 mt-1"},fd={class:"col-md-12"},yd={class:"text-danger"},vd={class:"section"},gd=e("div",{class:"fw-bold"},[r("Nature of activity "),e("span",{class:"text-danger"}," * ")],-1),bd=e("div",null,"Choose the main industry or sector that best represents your business operations. ",-1),$d={class:"row g-2 mt-1"},Sd={class:"col-md-12"},wd={class:"text-danger"},xd={class:"section"},kd=e("div",{class:"fw-bold"},[r("Customer location and operation "),e("span",{class:"text-danger"}," * ")],-1),Cd=e("div",null,"Indicate the primary countries where your company will actively conduct business or serve customers. ",-1),Ed={class:"row g-2 mt-1"},Ad={class:"col-md-12"},Fd={class:"text-danger"},Pd={class:"section"},Td=e("div",{class:"fw-bold"},[r("List of countries "),e("span",{class:"text-danger"}," * ")],-1),Vd=e("div",null,"List all additional countries where your company will have business activities or customer interactions. ",-1),Id={class:"row g-2 mt-1"},Dd={class:"col-md-12"},Ld={class:"text-danger"},Od={class:"movement-buttons my-5"},Ud=e("i",{class:"bi bi-arrow-left"},null,-1),Bd=e("i",{class:"bi bi-arrow-right"},null,-1),Rd={key:1,class:"btn btn-primary",type:"button",disabled:""},qd=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),jd=150,Nd=X({__name:"Activities",setup(l){const o=de.useToast(),s=J(),t=et();ie(()=>{t.updateFields(s.companyInProgress)}),ge(()=>t,()=>{t.saveToLocalStorage()},{deep:!0});function v(){s.switchStage("-")}ie(()=>{Ie(()=>{t.customer_location_operation&&t.customer_location_operation.length<1&&(t.errors.customer_location_operation="Please select an option"),t.country&&t.country.length<1&&(t.errors.country="Please select an option")})});const c=t.handleSubmit(async h=>{var u;if(!((u=s.companyInProgress)!=null&&u.id)){o.default("You have not registered any company name",{position:"top-right"}),s.switchStage("-",2);return}if(Object.keys(t.errors).length>0)return o.default("Some fields still have errors",{position:"top-right"}),!0;const d=new FormData;d.append("company_id",s.companyInProgress.id),d.append("description",h.description),d.append("activity_level",h.activity_level),d.append("activity_nature",h.activity_nature),d.append("customer_location_operation",h.customer_location_operation.toString()),d.append("country",h.country.toString()),t.isSaving=!0,i(d)});async function i(h){try{await Z.companyActivity(h),o.success("Data Saved Successfully",{position:"top-right"}),t.isSaving=!1,s.switchStage("+"),s.getCompanyInProgress()}catch{o.error("Sorry, Something went wrong",{position:"top-right"}),t.isSaving=!1}}const g=me(()=>{var h;return((h=t==null?void 0:t.description)==null?void 0:h.length)??0});return(h,d)=>{const u=K("v-select");return y(),R(ce,null,{main:N(()=>[od,e("section",id,[ad,ld,e("div",rd,[e("div",cd,[x(e("textarea",{class:C([{"error-field":n(t).errors.description},"form-control"]),"onUpdate:modelValue":d[0]||(d[0]=a=>n(t).description=a),rows:"5"},null,2),[[A,n(t).description]]),e("small",dd,p(n(t).errors.description),1),e("small",ud,p(g.value)+"/"+p(jd),1)])])]),e("section",pd,[_d,md,e("div",hd,[e("div",fd,[U(u,{class:C({"error-field":n(t).errors.activity_level}),modelValue:n(t).activity_level,"onUpdate:modelValue":d[1]||(d[1]=a=>n(t).activity_level=a),clearable:!0,options:n(s).levelOfActivity},null,8,["class","modelValue","options"]),e("small",yd,p(n(t).errors.activity_level),1)])])]),e("section",vd,[gd,bd,e("div",$d,[e("div",Sd,[U(u,{class:C({"error-field":n(t).errors.activity_nature}),modelValue:n(t).activity_nature,"onUpdate:modelValue":d[2]||(d[2]=a=>n(t).activity_nature=a),clearable:!0,options:n(s).natureOfActivity},null,8,["class","modelValue","options"]),e("small",wd,p(n(t).errors.activity_nature),1)])])]),e("section",xd,[kd,Cd,e("div",Ed,[e("div",Ad,[U(u,{class:C({"error-field":n(t).errors.customer_location_operation}),multiple:!0,modelValue:n(t).customer_location_operation,"onUpdate:modelValue":d[3]||(d[3]=a=>n(t).customer_location_operation=a),clearable:!0,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",Fd,p(n(t).errors.customer_location_operation),1)])])]),e("section",Pd,[Td,Vd,e("div",Id,[e("div",Dd,[U(u,{class:C({"error-field":n(t).errors.country}),multiple:!0,modelValue:n(t).country,"onUpdate:modelValue":d[4]||(d[4]=a=>n(t).country=a),clearable:!0,options:n(s).countries},null,8,["class","modelValue","options"]),e("small",Ld,p(n(t).errors.country),1)])])]),e("div",Od,[e("button",{onClick:v,class:"btn btn-outline-info me-3"},[Ud,r(" Back ")]),n(t).isSaving?(y(),w("button",Rd,[qd,r(" Saving, Please wait ")])):(y(),w("button",{key:0,onClick:d[5]||(d[5]=(...a)=>n(c)&&n(c)(...a)),class:"btn btn-primary"},[r(" Save & Continue "),Bd]))])]),_:1})}}}),F=l=>(he("data-v-70a9b42e"),l=l(),fe(),l),zd=F(()=>e("section",{class:"section"},[e("h5",{class:"fw-bolder"},"Summary"),e("span",null,"Please make sure the following information is correct. We'll use it to generate your documents.")],-1)),Md={class:"section"},Hd=F(()=>e("div",{class:"fw-bold mb-2"},"Company",-1)),Yd={class:"card bg-light border-0"},Wd={class:"card-body"},Gd={class:"list-group list-group-flush"},Kd={class:"list-group-item"},Zd={class:"float-end"},Jd={key:0,class:"small text-mut text-capitalize"},Xd={key:1,class:"small text-mut text-capitalize"},Qd={key:2,class:"small text-mut text-capitalize"},eu={key:3,class:"small text-mut text-capitalize"},tu={key:4,class:"small text-mut text-capitalize"},nu={class:"list-group-item"},su={class:"float-end"},ou={class:"small text-mut"},iu={class:"list-group-item"},au=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),lu=[au],ru={class:"small text-mut"},cu={class:"list-group-item"},du=F(()=>e("span",{class:"float-end"},[e("i",{class:"bi bi-pencil-square"})],-1)),uu={class:"small text-mut"},pu={class:"section"},_u=F(()=>e("div",{class:"fw-bold mb-2"},"Registered Adrress",-1)),mu={class:"card bg-light border-0"},hu={class:"card-body"},fu={class:"list-group list-group-flush"},yu={class:"list-group-item"},vu={class:"float-end"},gu={class:"small text-mut text-capitalize"},bu={class:"list-group-item"},$u={class:"float-end"},Su={class:"small text-mut"},wu={class:"list-group-item"},xu=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),ku=[xu],Cu={class:"small text-mut"},Eu={class:"list-group-item"},Au=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Fu=[Au],Pu={class:"small text-mut"},Tu={class:"list-group-item"},Vu=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Iu=[Vu],Du={class:"small text-mut"},Lu={class:"section"},Ou=F(()=>e("div",{class:"fw-bold mb-2"},"Founders (Individual)",-1)),Uu={class:"card bg-light border-0 section"},Bu={class:"card-body"},Ru={class:"list-group list-group-flush"},qu={class:"list-group-item"},ju=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Nu=[ju],zu={class:"small text-mut text-capitalize"},Mu={class:"list-group-item"},Hu=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Yu=[Hu],Wu={class:"small text-mut"},Gu={class:"list-group-item"},Ku=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Zu=[Ku],Ju={class:"small text-mut"},Xu={class:"list-group-item"},Qu=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),ep=[Qu],tp={class:"small text-mut"},np={class:"list-group-item"},sp=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),op=[sp],ip={class:"small text-mut"},ap={class:"list-group-item"},lp=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),rp=[lp],cp={class:"small text-mut"},dp={class:"list-group-item"},up=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),pp=[up],_p={class:"small text-mut"},mp={class:"list-group-item"},hp=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),fp=[hp],yp={class:"small text-mut"},vp={class:"list-group-item"},gp=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),bp=[gp],$p={class:"small text-mut"},Sp={class:"list-group-item"},wp=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),xp=[wp],kp={class:"small text-mut"},Cp={class:"list-group-item"},Ep=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Ap=[Ep],Fp={class:"small text-mut"},Pp={key:0,class:"list-group-item"},Tp=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Vp=[Tp],Ip={class:"small text-mut"},Dp={class:"section"},Lp=F(()=>e("div",{class:"fw-bold mb-2"},"Founders (Corporate)",-1)),Op={class:"card bg-light border-0 section"},Up={class:"card-body"},Bp={class:"list-group list-group-flush"},Rp={class:"list-group-item"},qp=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),jp=[qp],Np={class:"small text-mut text-capitalize"},zp={class:"list-group-item"},Mp=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Hp=[Mp],Yp={class:"small text-mut"},Wp={class:"list-group-item"},Gp=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Kp=[Gp],Zp={class:"small text-mut"},Jp={class:"list-group-item"},Xp=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Qp=[Xp],e_={class:"small text-mut"},t_={class:"list-group-item"},n_=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),s_=[n_],o_={class:"small text-mut"},i_={class:"list-group-item"},a_=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),l_=[a_],r_={class:"small text-mut"},c_={class:"list-group-item"},d_=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),u_=[d_],p_={class:"small text-mut"},__={class:"list-group-item"},m_=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),h_=[m_],f_={class:"small text-mut"},y_={class:"list-group-item"},v_=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),g_=[v_],b_={class:"small text-mut"},$_={class:"list-group-item"},S_=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),w_=[S_],x_={class:"small text-mut"},k_={class:"list-group-item"},C_=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),E_=[C_],A_={class:"small text-mut"},F_={class:"section"},P_=F(()=>e("div",{class:"fw-bold mb-2"},"Ownership",-1)),T_={class:"card bg-light border-0"},V_={class:"card-body"},I_={class:"list-group list-group-flush"},D_={class:"list-group-item"},L_={class:"fw-bold"},O_={class:"float-end"},U_=F(()=>e("div",{class:"small text-mut"},"Ordinary",-1)),B_={class:"list-group-item"},R_={class:"fw-bold"},q_={class:"float-end"},j_={class:"small text-mut"},N_={class:"list-group-item"},z_={class:"fw-bold"},M_={class:"float-end"},H_={class:"small text-mut"},Y_={class:"list-group-item"},W_={class:"fw-bold"},G_={class:"float-end"},K_={class:"small text-mut"},Z_={class:"list-group-item"},J_={class:"fw-bold card border-0 shadow-sm"},X_={class:"card-body"},Q_=F(()=>e("div",{class:"fw-bold"},[r(" Shareholders "),e("span",{style:{float:"right"}}," No of Shares")],-1)),em={class:"list-group list-group-flush"},tm={class:"list-group-item"},nm={class:"float-end text-right"},sm={class:"small text-mut"},om={class:"section"},im=F(()=>e("div",{class:"fw-bold mb-2"},"Company Secretary",-1)),am={class:"card bg-light border-0"},lm={class:"card-body"},rm={class:"list-group list-group-flush"},cm={class:"list-group-item"},dm={class:"fw-bold"},um={class:"float-end"},pm={class:"small text-mut"},_m={class:"list-group-item"},mm={class:"fw-bold"},hm={class:"float-end"},fm={class:"small text-mut"},ym={class:"list-group-item"},vm={class:"fw-bold"},gm={class:"float-end"},bm={class:"small text-mut"},$m={class:"list-group-item"},Sm={class:"fw-bold"},wm={class:"float-end"},xm={class:"small text-mut"},km={class:"list-group-item"},Cm={class:"fw-bold"},Em={class:"float-end"},Am={class:"small text-mut"},Fm={class:"list-group-item"},Pm={class:"fw-bold"},Tm={class:"float-end"},Vm={class:"small text-mut"},Im={class:"list-group-item"},Dm={class:"fw-bold"},Lm={class:"float-end"},Om={class:"small text-mut"},Um={class:"list-group-item"},Bm={class:"fw-bold"},Rm={class:"float-end"},qm={class:"small text-mut"},jm={class:"section"},Nm=F(()=>e("div",{class:"fw-bold mb-2"},"Source of Funds",-1)),zm={class:"card bg-light border-0"},Mm={class:"card-body"},Hm={class:"list-group list-group-flush"},Ym={class:"list-group-item"},Wm={class:"float-end"},Gm={class:"small text-mut text-capitalize"},Km={class:"list-group-item"},Zm={class:"float-end"},Jm={class:"small text-mut"},Xm={class:"list-group-item"},Qm=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),eh=[Qm],th={class:"small text-mut"},nh={class:"list-group-item"},sh=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),oh=[sh],ih={class:"small text-mut"},ah={class:"section"},lh=F(()=>e("div",{class:"fw-bold mb-2"},"Activity",-1)),rh={class:"card bg-light border-0"},ch={class:"card-body"},dh={class:"list-group list-group-flush"},uh={class:"list-group-item"},ph={class:"float-end"},_h={class:"small text-mut text-capitalize"},mh={class:"list-group-item"},hh={class:"float-end"},fh={class:"small text-mut"},yh={class:"list-group-item"},vh=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),gh=[vh],bh={class:"small text-mut"},$h={class:"list-group-item"},Sh=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),wh=[Sh],xh={class:"small text-mut"},kh={class:"list-group-item"},Ch=F(()=>e("i",{class:"bi bi-pencil-square"},null,-1)),Eh=[Ch],Ah={class:"small text-mut"},Fh={class:"movement-buttons my-5"},Ph=F(()=>e("i",{class:"bi bi-arrow-left"},null,-1)),Th=F(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Vh=F(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," What are the basic requirements to be a founder? "),e("div",null," A founder must be at least 18 years old. There is no residency requirement to be a founder, and our form allows for up to 6 founders to be registered. ")],-1)),Ih=F(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Is it possible to change founder details after the company has been incorporated? "),e("div",null," Yes, amendments to founder details can be made post-incorporation. ")],-1)),Dh=F(()=>e("section",{class:"section"},[e("div",{class:"fw-bold"}," Is it possible to change founder details after the company has been incorporated? "),e("div",null," No, you must provide a physical residential address as it is mandatory. ")],-1)),Lh=X({__name:"Summary",setup(l){const o=J(),s=je({company_name:[],description:"",address:"",business_nature:"",website:"",phone_number:"",flat:"",building:"",street:"",state:"",country:"",income_expected_source:"",income_outgoing_source:"",origin_funds:"",wealth_initial_source:"",activity_nature:"",activity_level:"",activity_description:"",activity_country:"",activity_customer_location_operation:"",founders_individual:[],founders_corporate:[],secretary_name:"",secretary_chname:"",secretary_company_reg_no:"",secretary_country_registered:"",secretary_licence_no:"",secretary_email:"",secretary_flat:"",secretary_street:"",secretary_city:"",secretary_state:"",secretary_country:"",share_type_id:"",no_of_share:"",total_amount_paid:"",currency:"",ownerShares:[]});ie(()=>{var i,g,h,d,u,a,P,I,_,m,S,f,k,q,M,ne,be,ue,De,$e,Le,Re,Ce,Ee,Ae,Oe;const c=o.companyInProgress;if(c){const $=c.names;console.log($,"Name array"),$.find(T=>T.choice_level==1),s.company_name=$,s.description=c.description,s.business_nature=((i=c==null?void 0:c.business_nature)==null?void 0:i.name)??"",s.website=c.website,s.secretary_name=((g=c==null?void 0:c.secretary)==null?void 0:g.name)??"",s.secretary_chname=((h=c==null?void 0:c.secretary)==null?void 0:h.chn_name)??"",s.secretary_company_reg_no=((d=c==null?void 0:c.secretary)==null?void 0:d.company_reg_no)??"",s.secretary_country_registered=((u=c==null?void 0:c.secretary)==null?void 0:u.country_registered)??"",s.secretary_licence_no=((a=c==null?void 0:c.secretary)==null?void 0:a.licence_no)??"",s.secretary_email=((P=c==null?void 0:c.secretary)==null?void 0:P.email)??"",s.secretary_flat=((I=c==null?void 0:c.secretary)==null?void 0:I.flat)??"",s.secretary_street=((_=c==null?void 0:c.secretary)==null?void 0:_.street)??"",s.secretary_city=((m=c==null?void 0:c.secretary)==null?void 0:m.city)??"",s.secretary_state=((S=c==null?void 0:c.secretary)==null?void 0:S.state)??"",s.secretary_country=((f=c==null?void 0:c.secretary)==null?void 0:f.country)??"",s.flat=(c==null?void 0:c.flat)??"",s.building=(c==null?void 0:c.building)??"",s.street=(c==null?void 0:c.street)??"",s.state=(c==null?void 0:c.state)??"",s.country=(c==null?void 0:c.country)??"",s.share_type_id=((k=c==null?void 0:c.shares[0])==null?void 0:k.share_type_id)??"",s.no_of_share=((q=c==null?void 0:c.shares[0])==null?void 0:q.no_of_share)??"",s.total_amount_paid=((M=c==null?void 0:c.shares[0])==null?void 0:M.total_amount_paid)??"",s.currency=((ne=c==null?void 0:c.shares[0])==null?void 0:ne.currency)??"",s.income_expected_source=((be=c.fund_source)==null?void 0:be.income_expected_source)??"",s.income_outgoing_source=((ue=c.fund_source)==null?void 0:ue.income_outgoing_source)??"",s.origin_funds=((De=c.fund_source)==null?void 0:De.origin_funds)??"",s.wealth_initial_source=(($e=c.fund_source)==null?void 0:$e.wealth_initial_source)??"",s.activity_nature=((Le=c.activity)==null?void 0:Le.activity_nature)??"",s.activity_level=((Re=c.activity)==null?void 0:Re.activity_level)??"",s.activity_description=((Ce=c.activity)==null?void 0:Ce.description)??"",s.activity_customer_location_operation=((Ee=c.activity)==null?void 0:Ee.customer_location_operation)??"",s.activity_country=((Ae=c.activity)==null?void 0:Ae.country)??"";const b=((Oe=o.companyInProgress)==null?void 0:Oe.company_entity)??[];b.length&&(b.filter(E=>E.entity_type_id==1).forEach(E=>{var se;const O=E.individual;console.log(O,"get shareholder"),s.founders_individual.push(O),O.owner_shares&&s.ownerShares.push({name:O.first_name||O.chn_first_name+" "+O.last_name||O.chn_last_name,amount:((se=O.owner_shares)==null?void 0:se.total_amount)??0})}),b.filter(E=>E.entity_type_id==2).forEach(E=>{var se;const O=E.corporate;s.founders_corporate.push(O),O.owner_shares&&s.ownerShares.push({name:O.company_name||O.chn_company_name,amount:((se=O.owner_shares)==null?void 0:se.total_amount)??0})}))}console.log("shers:",s.ownerShares)});const t=c=>{const i=o.businessNatures.find(g=>g.id==c);return i?i.name:".."};function v(c){o.switchStage(c)}return(c,i)=>(y(),R(ce,null,{main:N(()=>{var g,h,d,u,a,P,I,_,m,S;return[zd,e("section",Md,[Hd,e("section",Yd,[e("div",Wd,[e("ul",Gd,[e("li",Kd,[e("span",null,[r(" Name "),e("span",Zd,[e("i",{onClick:i[0]||(i[0]=f=>n(o).currentStage=2),class:"bi bi-pencil-square"})]),s!=null&&s.company_name[0]?(y(),w("div",Jd," First Choice: "+p((g=s==null?void 0:s.company_name[0])==null?void 0:g.eng_name)+" "+p((h=s==null?void 0:s.company_name[0])==null?void 0:h.chn_name),1)):V("",!0),s!=null&&s.company_name[1]?(y(),w("div",Xd," Second Choice: "+p((d=s==null?void 0:s.company_name[1])==null?void 0:d.eng_name)+" "+p((u=s==null?void 0:s.company_name[1])==null?void 0:u.chn_name),1)):V("",!0),s!=null&&s.company_name[2]?(y(),w("div",Qd," Third Choice: "+p((a=s==null?void 0:s.company_name[2])==null?void 0:a.eng_name)+" "+p((P=s==null?void 0:s.company_name[2])==null?void 0:P.chn_name),1)):V("",!0),s!=null&&s.company_name[3]?(y(),w("div",eu,"Forth Choice: "+p((I=s==null?void 0:s.company_name[3])==null?void 0:I.eng_name)+" "+p((_=s==null?void 0:s.company_name[3])==null?void 0:_.chn_name),1)):V("",!0),s!=null&&s.company_name[4]?(y(),w("div",tu,"Fifth Choice: "+p((m=s==null?void 0:s.company_name[4])==null?void 0:m.eng_name)+" "+p((S=s==null?void 0:s.company_name[5])==null?void 0:S.chn_name),1)):V("",!0)])]),e("li",nu,[e("span",null,[r(" Description "),e("span",su,[e("i",{onClick:i[1]||(i[1]=f=>n(o).currentStage=3),class:"bi bi-pencil-square"})]),e("div",ou,p(s.description),1)])]),e("li",iu,[e("span",null,[r(" Nature of business "),e("span",{onClick:i[2]||(i[2]=f=>n(o).currentStage=3),class:"float-end"},lu),e("div",ru,p(s.business_nature),1)])]),e("li",cu,[e("span",null,[r(" Website, social media, or app "),du,e("div",uu,p(s==null?void 0:s.website),1)])])])])])]),e("section",pu,[_u,e("section",mu,[e("div",hu,[e("ul",fu,[e("li",yu,[e("span",null,[r(" Flat "),e("span",vu,[e("i",{onClick:i[3]||(i[3]=f=>n(o).currentStage=4),class:"bi bi-pencil-square"})]),e("div",gu,p(s.flat),1)])]),e("li",bu,[e("span",null,[r(" Building "),e("span",$u,[e("i",{onClick:i[4]||(i[4]=f=>n(o).currentStage=4),class:"bi bi-pencil-square"})]),e("div",Su,p(s.building),1)])]),e("li",wu,[e("span",null,[r(" Street "),e("span",{onClick:i[5]||(i[5]=f=>n(o).currentStage=4),class:"float-end"},ku),e("div",Cu,p(s.street),1)])]),e("li",Eu,[e("span",null,[r(" State "),e("span",{class:"float-end",onClick:i[6]||(i[6]=f=>n(o).currentStage=4)},Fu),e("div",Pu,p(s.state),1)])]),e("li",Tu,[e("span",null,[r(" Country "),e("span",{onClick:i[7]||(i[7]=f=>n(o).currentStage=4),class:"float-end"},Iu),e("div",Du,p(s.country),1)])])])])])]),e("section",Lu,[Ou,(y(!0),w(xe,null,Ve(s.founders_individual,f=>(y(),w("section",Uu,[e("div",Bu,[e("ul",Ru,[e("li",qu,[e("span",null,[r(" Name "),e("span",{onClick:i[8]||(i[8]=k=>n(o).currentStage=5),class:"float-end"},Nu),e("div",zu,p(f.first_name)+" "+p(f.last_name),1)])]),e("li",Mu,[e("span",null,[r(" Email "),e("span",{onClick:i[9]||(i[9]=k=>n(o).currentStage=5),class:"float-end"},Yu),e("div",Wu,p(f.email),1)])]),e("li",Gu,[e("span",null,[r(" Phone "),e("span",{onClick:i[10]||(i[10]=k=>n(o).currentStage=5),class:"float-end"},Zu),e("div",Ju,p(f.phone),1)])]),e("li",Xu,[e("span",null,[r(" Date of birth "),e("span",{onClick:i[11]||(i[11]=k=>n(o).currentStage=5),class:"float-end"},ep),e("div",tp,p(n(_e).dateDisplay(f.dob)),1)])]),e("li",np,[e("span",null,[r(" Occupation "),e("span",{onClick:i[12]||(i[12]=k=>n(o).currentStage=5),class:"float-end"},op),e("div",ip,p(f.occupation),1)])]),e("li",ap,[e("span",null,[r(" Flat "),e("span",{onClick:i[13]||(i[13]=k=>n(o).currentStage=5),class:"float-end"},rp),e("div",cp,p(f.res_address.flat),1)])]),e("li",dp,[e("span",null,[r(" Street "),e("span",{onClick:i[14]||(i[14]=k=>n(o).currentStage=5),class:"float-end"},pp),e("div",_p,p(f.res_address.street),1)])]),e("li",mp,[e("span",null,[r(" Building "),e("span",{onClick:i[15]||(i[15]=k=>n(o).currentStage=5),class:"float-end"},fp),e("div",yp,p(f.res_address.building),1)])]),e("li",vp,[e("span",null,[r(" State "),e("span",{onClick:i[16]||(i[16]=k=>n(o).currentStage=5),class:"float-end"},bp),e("div",$p,p(f.res_address.state),1)])]),e("li",Sp,[e("span",null,[r(" Country "),e("span",{onClick:i[17]||(i[17]=k=>n(o).currentStage=5),class:"float-end"},xp),e("div",kp,p(f.res_address.country),1)])]),e("li",Cp,[e("span",null,[r(" Passport /HKID "),e("span",{onClick:i[18]||(i[18]=k=>n(o).currentStage=5),class:"float-end"},Ap),e("div",Fp,p(f.get_identity.identity_no!=null?f.get_identity.identity_no+"-"+f.get_identity.identity_no_suffix:f.get_identity.passport_no),1)])]),f.get_identity.identity_no!=null?(y(),w("li",Pp,[e("span",null,[r(" Issueing country "),e("span",{onClick:i[19]||(i[19]=k=>n(o).currentStage=5),class:"float-end"},Vp),e("div",Ip,p(f.get_identity.issueing_country!="undefined"?f.get_identity.issueing_country:""),1)])])):V("",!0)])])]))),256))]),e("section",Dp,[Lp,(y(!0),w(xe,null,Ve(s.founders_corporate,f=>(y(),w("section",Op,[e("div",Up,[e("ul",Bp,[e("li",Rp,[e("span",null,[r(" Company Name "),e("span",{onClick:i[20]||(i[20]=k=>n(o).currentStage=5),class:"float-end"},jp),e("div",Np,p(f.company_name),1)])]),e("li",zp,[e("span",null,[r(" Business Nature "),e("span",{onClick:i[21]||(i[21]=k=>n(o).currentStage=5),class:"float-end"},Hp),e("div",Yp,p(t(f.business_nature_id)),1)])]),e("li",Wp,[e("span",null,[r(" Date incorporated "),e("span",{onClick:i[22]||(i[22]=k=>n(o).currentStage=5),class:"float-end"},Kp),e("div",Zp,p(n(_e).dateDisplay(f.date_incorporated)),1)])]),e("li",Jp,[e("span",null,[r(" Flat "),e("span",{onClick:i[23]||(i[23]=k=>n(o).currentStage=5),class:"float-end"},Qp),e("div",e_,p(f.flat),1)])]),e("li",t_,[e("span",null,[r(" Street "),e("span",{onClick:i[24]||(i[24]=k=>n(o).currentStage=5),class:"float-end"},s_),e("div",o_,p(f.street),1)])]),e("li",i_,[e("span",null,[r(" Building "),e("span",{onClick:i[25]||(i[25]=k=>n(o).currentStage=5),class:"float-end"},l_),e("div",r_,p(f.building),1)])]),e("li",c_,[e("span",null,[r(" State "),e("span",{onClick:i[26]||(i[26]=k=>n(o).currentStage=5),class:"float-end"},u_),e("div",p_,p(f.state),1)])]),e("li",__,[e("span",null,[r(" Country "),e("span",{onClick:i[27]||(i[27]=k=>n(o).currentStage=5),class:"float-end"},h_),e("div",f_,p(f.country),1)])]),e("li",y_,[e("span",null,[r(" Authorized Person's Name "),e("span",{onClick:i[28]||(i[28]=k=>n(o).currentStage=5),class:"float-end"},g_),e("div",b_,p(f.authorized_persons.first_name)+" "+p(f.authorized_persons.last_name),1)])]),e("li",$_,[e("span",null,[r(" Authorized Person's Email "),e("span",{onClick:i[29]||(i[29]=k=>n(o).currentStage=5),class:"float-end"},w_),e("div",x_,p(f.authorized_persons.email),1)])]),e("li",k_,[e("span",null,[r(" Authorized Person's Phone "),e("span",{onClick:i[30]||(i[30]=k=>n(o).currentStage=5),class:"float-end"},E_),e("div",A_,p(f.authorized_persons.phone),1)])])])])]))),256))]),e("section",F_,[P_,e("section",T_,[e("div",V_,[e("ul",I_,[e("li",D_,[e("span",L_,[r(" Share Type "),e("span",O_,[e("i",{onClick:i[31]||(i[31]=f=>n(o).currentStage=6),class:"bi bi-pencil-square"})]),U_])]),e("li",B_,[e("span",R_,[r(" No of Shares "),e("span",q_,[e("i",{onClick:i[32]||(i[32]=f=>n(o).currentStage=6),class:"bi bi-pencil-square"})]),e("div",j_,p(s.no_of_share),1)])]),e("li",N_,[e("span",z_,[r(" Total Amount Paid "),e("span",M_,[e("i",{onClick:i[33]||(i[33]=f=>n(o).currentStage=6),class:"bi bi-pencil-square"})]),e("div",H_,p(s.total_amount_paid),1)])]),e("li",Y_,[e("span",W_,[r(" Currency "),e("span",G_,[e("i",{onClick:i[34]||(i[34]=f=>n(o).currentStage=6),class:"bi bi-pencil-square"})]),e("div",K_,p(s.currency),1)])]),e("li",Z_,[e("span",J_,[e("div",X_,[Q_,e("ul",em,[(y(!0),w(xe,null,Ve(s.ownerShares,f=>(y(),w("li",tm,[e("span",nm,p(f.amount),1),e("div",sm,p(f.name),1)]))),256))])])])])])])])]),e("section",om,[im,e("section",am,[e("div",lm,[e("ul",rm,[e("li",cm,[e("span",dm,[r(" Name "),e("span",um,[e("i",{onClick:i[35]||(i[35]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",pm,p(s.secretary_name),1)])]),e("li",_m,[e("span",mm,[r(" company Reg No "),e("span",hm,[e("i",{onClick:i[36]||(i[36]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",fm,p(s.secretary_company_reg_no),1)])]),e("li",ym,[e("span",vm,[r(" Country Registered "),e("span",gm,[e("i",{onClick:i[37]||(i[37]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",bm,p(s.secretary_country_registered),1)])]),e("li",$m,[e("span",Sm,[r(" Licence No "),e("span",wm,[e("i",{onClick:i[38]||(i[38]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",xm,p(s.secretary_licence_no),1)])]),e("li",km,[e("span",Cm,[r(" Flat "),e("span",Em,[e("i",{onClick:i[39]||(i[39]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",Am,p(s.secretary_flat),1)])]),e("li",Fm,[e("span",Pm,[r(" Street "),e("span",Tm,[e("i",{onClick:i[40]||(i[40]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",Vm,p(s.secretary_street),1)])]),e("li",Im,[e("span",Dm,[r(" City/State "),e("span",Lm,[e("i",{onClick:i[41]||(i[41]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",Om,p(s.secretary_state),1)])]),e("li",Um,[e("span",Bm,[r(" Country "),e("span",Rm,[e("i",{onClick:i[42]||(i[42]=f=>n(o).currentStage=7),class:"bi bi-pencil-square"})]),e("div",qm,p(s.secretary_country),1)])])])])])]),e("section",jm,[Nm,e("section",zm,[e("div",Mm,[e("ul",Hm,[e("li",Ym,[e("span",null,[r(" Expected Source of Funds "),e("span",Wm,[e("i",{onClick:i[43]||(i[43]=f=>n(o).currentStage=8),class:"bi bi-pencil-square"})]),e("div",Gm,p(s.income_expected_source),1)])]),e("li",Km,[e("span",null,[r(" Origin Source of Funds "),e("span",Zm,[e("i",{onClick:i[44]||(i[44]=f=>n(o).currentStage=8),class:"bi bi-pencil-square"})]),e("div",Jm,p(s.origin_funds),1)])]),e("li",Xm,[e("span",null,[r(" Source of Wealth "),e("span",{onClick:i[45]||(i[45]=f=>n(o).currentStage=8),class:"float-end"},eh),e("div",th,p(s.wealth_initial_source),1)])]),e("li",nh,[e("span",null,[r(" Ongoing Source of Wealth "),e("span",{onClick:i[46]||(i[46]=f=>n(o).currentStage=8),class:"float-end"},oh),e("div",ih,p(s.income_outgoing_source),1)])])])])])]),e("section",ah,[lh,e("section",rh,[e("div",ch,[e("ul",dh,[e("li",uh,[e("span",null,[r(" Activity Level "),e("span",ph,[e("i",{onClick:i[47]||(i[47]=f=>n(o).currentStage=9),class:"bi bi-pencil-square"})]),e("div",_h,p(s.activity_level),1)])]),e("li",mh,[e("span",null,[r(" Activity Nature "),e("span",hh,[e("i",{onClick:i[48]||(i[48]=f=>n(o).currentStage=9),class:"bi bi-pencil-square"})]),e("div",fh,p(s.activity_nature),1)])]),e("li",yh,[e("span",null,[r(" Description "),e("span",{onClick:i[49]||(i[49]=f=>n(o).currentStage=9),class:"float-end"},gh),e("div",bh,p(s.activity_description),1)])]),e("li",$h,[e("span",null,[r(" Customer Location Operation "),e("span",{onClick:i[50]||(i[50]=f=>n(o).currentStage=9),class:"float-end"},wh),e("div",xh,p(s.activity_customer_location_operation),1)])]),e("li",kh,[e("span",null,[r(" Country "),e("span",{onClick:i[51]||(i[51]=f=>n(o).currentStage=9),class:"float-end"},Eh),e("div",Ah,p(s.activity_country),1)])])])])])]),e("div",Fh,[e("button",{onClick:i[52]||(i[52]=f=>v("-")),class:"btn btn-outline-info me-3"},[Ph,r(" Back ")]),e("button",{onClick:i[53]||(i[53]=f=>v("+")),class:"btn btn-primary"},[r(" Save & Continue "),Th])])]}),info:N(()=>[Vh,Ih,Dh]),_:1}))}}),Oh=ye(Lh,[["__scopeId","data-v-70a9b42e"]]),te=l=>(he("data-v-8c9e8942"),l=l(),fe(),l),Uh={class:"movement-buttons my-5"},Bh=te(()=>e("button",{class:"btn btn-outline-info me-3"},[e("i",{class:"bi bi-arrow-left"}),r(" Back ")],-1)),Rh=te(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),qh={key:1,class:"btn btn-primary",type:"button",disabled:""},jh=te(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),Nh={key:0,class:"modal show d-block modal-bg-transparent",tabindex:"-1",role:"dialog","aria-hidden":"true"},zh={class:"modal-dialog modal-dialog-centered",role:"document"},Mh={class:"modal-content"},Hh={class:"modal-header"},Yh=te(()=>e("h5",{class:"modal-title"}," Draw Mouse to Sign Document ",-1)),Wh={class:"modal-body"},Gh={class:"modal-footer bg-transparent"},Kh={key:1,class:"btn btn-primary",type:"button",disabled:""},Zh=te(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)),Jh=["disabled"],Xh=te(()=>e("span",{class:"float-end"},null,-1)),Qh=te(()=>e("br",null,null,-1)),ef=te(()=>e("p",{style:{"margin-top":"10px"}},[e("span",{style:{color:"red"}}," Please review and Sign Document")],-1)),tf=te(()=>e("br",null,null,-1)),nf=te(()=>e("p",{style:{"border-bottom":"1px solid #000"}},"Signature will be applied to the following pages",-1)),sf=te(()=>e("p",null,[e("span",{class:"mr-2"},"📄"),r(" Incorporation Form (NNC1) "),e("br"),e("span",null,"We file this with the Companies Registry.")],-1)),of=te(()=>e("p",null,[e("span",{class:"mr-2"},"📄"),r(" Articles of Association (AA) "),e("p",{class:"ml-6 text-gray-600"},"The Articles of Association is a document that outlines the regulations for a company's operations and the structure of its internal governance.")],-1)),af=te(()=>e("p",{class:"mb-1 flex items-center text-gray-700"},[e("span",{class:"mr-2"},"✔️"),r(" Notice to Business Registration Office (IRBR1) "),e("p",{class:"ml-6 text-gray-600"},"Notify the Inland Revenue for business registration."),e("ul",{class:"ml-10 list-inside list-disc text-gray-600"},[e("li",null,"This makes application for the purpose of business registration."),e("li",null,"Business registration is renewed on an annual basis if elected to obtain 1-year Business Registration Certificate."),e("li",null,"This shows your business address, and the nature of your business.")])],-1)),lf=X({__name:"Sign",setup(l){const o=J(),s=de.useToast(),t=H(!1),v=H(!1),c=H(null);function i(){c.value.undoSignature()}function g(){c.value.clearSignature()}const h=H(""),d=me(()=>{var m;const I=[],_=((m=o.companyInProgress)==null?void 0:m.company_entity)??[];return _.length&&_.forEach(S=>{const f=S.individual||S.corporate;f&&(f.label=S.entity_type_id==1?`${f.first_name??f.chn_first_name} ${f.last_name??f.chn_last_name}`:`${f.company_name??f.chn_company_name}`,f.company_entity_id=S.id,I.push(f))}),I});ie(async()=>{await Z.ProcessKyc()});function u(){const{isEmpty:I,data:_}=c.value.saveSignature();I||(o.signatureImage=_,o.signatureDateSigned=new Date,v.value=!0,a())}async function a(){const I=new FormData;I.append("company_id",o.companyInProgress.id),I.append("company_entity_id",h.value.company_entity_id),I.append("signature",o.signatureImage),I.append("date_signed",o.signatureDateSigned);try{const _=await Z.registerSignature(I);s.info("Signature added to founders  <br>  page successfully",{position:"top-right"}),t.value=!1,v.value=!1}catch{s.error("Something went wrong",{position:"top-right"}),t.value=!1,v.value=!1}}function P(){if(!o.signatureImage){s.error("Please add signature first!",{position:"top-right"});return}o.pdfIsSending=!0,setTimeout(()=>{o.pdfAction=!o.pdfAction},500)}return(I,_)=>{const m=K("VueSignaturePad"),S=K("v-select");return y(),R(ce,null,{main:N(()=>[e("div",null,[U(_t)]),e("div",Uh,[Bh,n(o).pdfIsSending?(y(),w("button",qh,[jh,r(" Processing, Please wait.... ")])):(y(),w("button",{key:0,onClick:P,class:"btn btn-primary"},[r(" Proceed to complete Payment "),Rh]))])]),info:N(()=>[t.value?(y(),w("div",Nh,[e("div",zh,[e("div",Mh,[e("div",Hh,[Yh,e("button",{onClick:_[0]||(_[0]=f=>t.value=!1),type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),e("div",Wh,[U(m,{class:"bg-transparent",height:"300px",width:"100%",ref_key:"signaturePad",ref:c},null,512)]),e("div",Gh,[v.value?(y(),w("button",Kh,[Zh,r(" Saving... ")])):(y(),w("button",{key:0,onClick:u,type:"button",class:"btn btn-primary"},"Save Signature")),e("button",{onClick:g,type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Clear "),e("button",{disabled:v.value,onClick:i,class:"btn btn-warning"},"Undo",8,Jh)])])])])):V("",!0),U(S,{placeholder:"select founder..",modelValue:h.value,"onUpdate:modelValue":_[1]||(_[1]=f=>h.value=f),clearable:!1,options:d.value},null,8,["modelValue","options"]),e("button",{class:"btn btn-primary mt-3",onClick:_[2]||(_[2]=f=>t.value=!0)},"Sign Document"),Xh,Qh,ef,tf,nf,sf,of,af]),_:1})}}}),rf=ye(lf,[["__scopeId","data-v-8c9e8942"]]);var Te={};const cf="@vue-stripe/vue-stripe",df="4.5.0",uf="Stripe Checkout & Elements for Vue.js",pf="jofftiquez@gmail.com",_f={build:"rollup -c",lint:"vue-cli-service lint --fix",prebuild:"rimraf dist",test:"jest"},mf="dist/index.js",hf="dist",ff={"@stripe/stripe-js":"^1.13.2","vue-coerce-props":"^1.0.0"},yf={"@babel/cli":"^7.7.5","@babel/core":"^7.7.5","@babel/plugin-proposal-export-default-from":"^7.7.4","@babel/plugin-proposal-optional-chaining":"^7.10.4","@babel/plugin-transform-runtime":"^7.7.5","@babel/preset-env":"^7.7.5","@babel/preset-es2015":"^7.0.0-beta.53","@babel/runtime":"^7.7.5","@rollup/plugin-node-resolve":"^6.0.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"^4.5.10","@vue/eslint-config-standard":"^5.1.2","babel-eslint":"^10.1.0","babel-minify":"^0.5.1","cross-env":"^6.0.3",eslint:"^6.8.0","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.2.2",jest:"^24.9.0","lint-staged":"^9.5.0",rimraf:"^3.0.0",rollup:"^1.27.9","rollup-plugin-babel":"^4.3.3","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-terser":"^5.1.3","rollup-plugin-uglify":"^6.0.3","rollup-plugin-vue":"^5.1.4","vue-template-compiler":"^2.6.11"},vf={url:"https://github.com/vue-stripe/vue-stripe/issues"},gf={"pre-commit":"lint-staged"},bf="https://github.com/vue-stripe/vue-stripe#readme",$f=["vue","vuejs","stripe","checkout","payment"],Sf="MIT",wf={type:"git",url:"git@github.com:vue-stripe/vue-stripe.git"},xf="typings/index.d.ts",kf={name:cf,version:df,description:uf,author:pf,scripts:_f,main:mf,module:hf,dependencies:ff,devDependencies:yf,bugs:vf,gitHooks:gf,homepage:bf,keywords:$f,license:Sf,"lint-staged":{"*.{js,jsx,vue}":["vue-cli-service lint","git add"]},repository:wf,typings:xf};Object.defineProperty(Te,"__esModule",{value:!0});var Ne="auto",Cf=["auto","bg","cs","da","de","el","en","en-GB","es","es-419","et","fi","fr","fr-CA","hu","id","it","ja","lt","lv","ms","mt","nb","nl","pl","pt","pt-BR","ro","ru","sk","sl","sv","tr","zh","zh-HK","zh-TW"],Ef=["auto","book","donate","pay"],Af=["required","auto"],Ff={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},Pf=kf.version,Be={name:"vue-stripe",version:Pf,url:"https://vuestripe.com",partner_id:"pp_partner_IqtOXpBSuz0IE2"},Tf={install:function(l,o){var s=o.pk,t=o.stripeAccount,v=o.apiVersion,c=o.locale,i=window.Stripe(s,{stripeAccount:t,apiVersion:v,locale:c});i.registerAppInfo(Be),l.prototype.$stripe=i}};function Vf(l,o){return l(o={exports:{}},o.exports),o.exports}var If=Vf(function(l){var o=function(s){var t,v=Object.prototype,c=v.hasOwnProperty,i=typeof Symbol=="function"?Symbol:{},g=i.iterator||"@@iterator",h=i.asyncIterator||"@@asyncIterator",d=i.toStringTag||"@@toStringTag";function u($,b,T,L){var E=b&&b.prototype instanceof f?b:f,O=Object.create(E.prototype),se=new Ee(L||[]);return O._invoke=function(ve,Ue,B){var oe=P;return function(Se,Fe){if(oe===_)throw new Error("Generator is already running");if(oe===m){if(Se==="throw")throw Fe;return Oe()}for(B.method=Se,B.arg=Fe;;){var Pe=B.delegate;if(Pe){var pe=Le(Pe,B);if(pe){if(pe===S)continue;return pe}}if(B.method==="next")B.sent=B._sent=B.arg;else if(B.method==="throw"){if(oe===P)throw oe=m,B.arg;B.dispatchException(B.arg)}else B.method==="return"&&B.abrupt("return",B.arg);oe=_;var Q=a(ve,Ue,B);if(Q.type==="normal"){if(oe=B.done?m:I,Q.arg===S)continue;return{value:Q.arg,done:B.done}}Q.type==="throw"&&(oe=m,B.method="throw",B.arg=Q.arg)}}}($,T,se),O}function a($,b,T){try{return{type:"normal",arg:$.call(b,T)}}catch(L){return{type:"throw",arg:L}}}s.wrap=u;var P="suspendedStart",I="suspendedYield",_="executing",m="completed",S={};function f(){}function k(){}function q(){}var M={};M[g]=function(){return this};var ne=Object.getPrototypeOf,be=ne&&ne(ne(Ae([])));be&&be!==v&&c.call(be,g)&&(M=be);var ue=q.prototype=f.prototype=Object.create(M);function De($){["next","throw","return"].forEach(function(b){$[b]=function(T){return this._invoke(b,T)}})}function $e($){var b;this._invoke=function(T,L){function E(){return new Promise(function(O,se){(function ve(Ue,B,oe,Se){var Fe=a($[Ue],$,B);if(Fe.type!=="throw"){var Pe=Fe.arg,pe=Pe.value;return pe&&typeof pe=="object"&&c.call(pe,"__await")?Promise.resolve(pe.__await).then(function(Q){ve("next",Q,oe,Se)},function(Q){ve("throw",Q,oe,Se)}):Promise.resolve(pe).then(function(Q){Pe.value=Q,oe(Pe)},function(Q){return ve("throw",Q,oe,Se)})}Se(Fe.arg)})(T,L,O,se)})}return b=b?b.then(E,E):E()}}function Le($,b){var T=$.iterator[b.method];if(T===t){if(b.delegate=null,b.method==="throw"){if($.iterator.return&&(b.method="return",b.arg=t,Le($,b),b.method==="throw"))return S;b.method="throw",b.arg=new TypeError("The iterator does not provide a 'throw' method")}return S}var L=a(T,$.iterator,b.arg);if(L.type==="throw")return b.method="throw",b.arg=L.arg,b.delegate=null,S;var E=L.arg;return E?E.done?(b[$.resultName]=E.value,b.next=$.nextLoc,b.method!=="return"&&(b.method="next",b.arg=t),b.delegate=null,S):E:(b.method="throw",b.arg=new TypeError("iterator result is not an object"),b.delegate=null,S)}function Re($){var b={tryLoc:$[0]};1 in $&&(b.catchLoc=$[1]),2 in $&&(b.finallyLoc=$[2],b.afterLoc=$[3]),this.tryEntries.push(b)}function Ce($){var b=$.completion||{};b.type="normal",delete b.arg,$.completion=b}function Ee($){this.tryEntries=[{tryLoc:"root"}],$.forEach(Re,this),this.reset(!0)}function Ae($){if($){var b=$[g];if(b)return b.call($);if(typeof $.next=="function")return $;if(!isNaN($.length)){var T=-1,L=function E(){for(;++T<$.length;)if(c.call($,T))return E.value=$[T],E.done=!1,E;return E.value=t,E.done=!0,E};return L.next=L}}return{next:Oe}}function Oe(){return{value:t,done:!0}}return k.prototype=ue.constructor=q,q.constructor=k,q[d]=k.displayName="GeneratorFunction",s.isGeneratorFunction=function($){var b=typeof $=="function"&&$.constructor;return!!b&&(b===k||(b.displayName||b.name)==="GeneratorFunction")},s.mark=function($){return Object.setPrototypeOf?Object.setPrototypeOf($,q):($.__proto__=q,d in $||($[d]="GeneratorFunction")),$.prototype=Object.create(ue),$},s.awrap=function($){return{__await:$}},De($e.prototype),$e.prototype[h]=function(){return this},s.AsyncIterator=$e,s.async=function($,b,T,L){var E=new $e(u($,b,T,L));return s.isGeneratorFunction(b)?E:E.next().then(function(O){return O.done?O.value:E.next()})},De(ue),ue[d]="Generator",ue[g]=function(){return this},ue.toString=function(){return"[object Generator]"},s.keys=function($){var b=[];for(var T in $)b.push(T);return b.reverse(),function L(){for(;b.length;){var E=b.pop();if(E in $)return L.value=E,L.done=!1,L}return L.done=!0,L}},s.values=Ae,Ee.prototype={constructor:Ee,reset:function($){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Ce),!$)for(var b in this)b.charAt(0)==="t"&&c.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=t)},stop:function(){this.done=!0;var $=this.tryEntries[0].completion;if($.type==="throw")throw $.arg;return this.rval},dispatchException:function($){if(this.done)throw $;var b=this;function T(Ue,B){return O.type="throw",O.arg=$,b.next=Ue,B&&(b.method="next",b.arg=t),!!B}for(var L=this.tryEntries.length-1;L>=0;--L){var E=this.tryEntries[L],O=E.completion;if(E.tryLoc==="root")return T("end");if(E.tryLoc<=this.prev){var se=c.call(E,"catchLoc"),ve=c.call(E,"finallyLoc");if(se&&ve){if(this.prev<E.catchLoc)return T(E.catchLoc,!0);if(this.prev<E.finallyLoc)return T(E.finallyLoc)}else if(se){if(this.prev<E.catchLoc)return T(E.catchLoc,!0)}else{if(!ve)throw new Error("try statement without catch or finally");if(this.prev<E.finallyLoc)return T(E.finallyLoc)}}}},abrupt:function($,b){for(var T=this.tryEntries.length-1;T>=0;--T){var L=this.tryEntries[T];if(L.tryLoc<=this.prev&&c.call(L,"finallyLoc")&&this.prev<L.finallyLoc){var E=L;break}}E&&($==="break"||$==="continue")&&E.tryLoc<=b&&b<=E.finallyLoc&&(E=null);var O=E?E.completion:{};return O.type=$,O.arg=b,E?(this.method="next",this.next=E.finallyLoc,S):this.complete(O)},complete:function($,b){if($.type==="throw")throw $.arg;return $.type==="break"||$.type==="continue"?this.next=$.arg:$.type==="return"?(this.rval=this.arg=$.arg,this.method="return",this.next="end"):$.type==="normal"&&b&&(this.next=b),S},finish:function($){for(var b=this.tryEntries.length-1;b>=0;--b){var T=this.tryEntries[b];if(T.finallyLoc===$)return this.complete(T.completion,T.afterLoc),Ce(T),S}},catch:function($){for(var b=this.tryEntries.length-1;b>=0;--b){var T=this.tryEntries[b];if(T.tryLoc===$){var L=T.completion;if(L.type==="throw"){var E=L.arg;Ce(T)}return E}}throw new Error("illegal catch attempt")},delegateYield:function($,b,T){return this.delegate={iterator:Ae($),resultName:b,nextLoc:T},this.method==="next"&&(this.arg=t),S}},s}(l.exports);try{regeneratorRuntime=o}catch{Function("r","regeneratorRuntime = r")(o)}}),re=If;function tt(l){return(tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(l)}var nt,st="https://js.stripe.com/v3",Df=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,He="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Lf=function(){for(var l=document.querySelectorAll('script[src^="'.concat(st,'"]')),o=0;o<l.length;o++){var s=l[o];if(Df.test(s.src))return s}return null},Of=function(l){var o=l&&!l.advancedFraudSignals?"?advancedFraudSignals=false":"",s=document.createElement("script");s.src="".concat(st).concat(o);var t=document.head||document.body;if(!t)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return t.appendChild(s),s},Uf=function(l,o){l&&l._registerWrapper&&l._registerWrapper({name:"stripe-js",version:"1.13.2",startTime:o})},ze=null,Bf=function(l){return ze!==null?ze:ze=new Promise(function(o,s){if(typeof window<"u")if(window.Stripe&&l&&console.warn(He),window.Stripe)o(window.Stripe);else try{var t=Lf();t&&l?console.warn(He):t||(t=Of(l)),t.addEventListener("load",function(){window.Stripe?o(window.Stripe):s(new Error("Stripe.js not available"))}),t.addEventListener("error",function(){s(new Error("Failed to load Stripe.js"))})}catch(v){return void s(v)}else o(null)})},Rf=function(l,o,s){if(l===null)return null;var t=l.apply(void 0,o);return Uf(t,s),t},qf=function(l){var o=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(l),`
`);if(l===null||tt(l)!=="object")throw new Error(o);if(Object.keys(l).length===1&&typeof l.advancedFraudSignals=="boolean")return l;throw new Error(o)},ot=!1,ke=function(){for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];ot=!0;var t=Date.now();return Bf(nt).then(function(v){return Rf(v,o,t)})};ke.setLoadParameters=function(l){if(ot)throw new Error("You cannot change load parameters after calling loadStripe");nt=qf(l)};/**
 * vue-coerce-props v1.0.0
 * (c) 2018 Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */var jf={beforeCreate:function(){var l=this.$options.props;l&&(this._$coertions=Object.keys(l).filter(function(o){return l[o].coerce}).map(function(o){return[o,l[o].coerce]}))},computed:{$coerced:function(){var l=this;return this._$coertions.reduce(function(o,s){var t=s[0],v=s[1];return o[t]=v.call(l,l.$props[t]),o},{})}}},Nf={pk:{type:String,required:!0},mode:{type:String,validator:function(l){return["payment","subscription"].includes(l)}},lineItems:{type:Array,default:void 0},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(l){return Ef.includes(l)}},billingAddressCollection:{type:String,default:"auto",validator:function(l){return Af.includes(l)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:Ne,coerce:function(l){return Cf.includes(l)?l:(console.warn("VueStripe Warning: '".concat(l,"' is not supported by Stripe yet. Falling back to default '").concat(Ne,"'.")),Ne)}},shippingAddressCollection:{type:Object,validator:function(l){return Object.prototype.hasOwnProperty.call(l,"allowedCountries")}},disableAdvancedFraudDetection:{type:Boolean},stripeOptions:{type:Object,default:null}},zf={props:Nf,mixins:[jf],render:function(l){return l},methods:{redirectToCheckout:function(){var l,o,s;return re.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.$emit("loading",!0),this.disableAdvancedFraudDetection&&ke.setLoadParameters({advancedFraudSignals:!1}),l={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},t.next=6,re.awrap(ke(this.pk,l));case 6:if((o=t.sent).registerAppInfo(Be),!this.sessionId){t.next=11;break}return o.redirectToCheckout({sessionId:this.sessionId}),t.abrupt("return");case 11:if(!this.lineItems||!this.lineItems.length||this.mode){t.next=14;break}return console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode"),t.abrupt("return");case 14:return s={billingAddressCollection:this.billingAddressCollection,cancelUrl:this.cancelUrl,clientReferenceId:this.clientReferenceId,customerEmail:this.customerEmail,items:this.items,lineItems:this.lineItems,locale:this.$coerced.locale,mode:this.mode,shippingAddressCollection:this.shippingAddressCollection,submitType:this.submitType,successUrl:this.successUrl},t.abrupt("return",o.redirectToCheckout(s));case 18:t.prev=18,t.t0=t.catch(0),console.error(t.t0),this.$emit("error",t.t0);case 22:case"end":return t.stop()}},null,this,[[0,18]])}}};function Mf(l,o,s){return o in l?Object.defineProperty(l,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[o]=s,l}var Hf=Mf;function Ye(l,o){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(l);o&&(t=t.filter(function(v){return Object.getOwnPropertyDescriptor(l,v).enumerable})),s.push.apply(s,t)}return s}function Yf(l){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?Ye(Object(s),!0).forEach(function(t){Hf(l,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):Ye(Object(s)).forEach(function(t){Object.defineProperty(l,t,Object.getOwnPropertyDescriptor(s,t))})}return l}var Wf="card",Gf={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},elementsOptions:{type:Object,default:function(){return{}}},tokenData:{type:Object,default:function(){return{}}},disableAdvancedFraudDetection:{type:Boolean},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return Ff}},value:{type:String,default:void 0},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(l){return["solid","default"].includes(l)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,element:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},mounted:function(){var l,o,s=this;return re.async(function(t){for(;;)switch(t.prev=t.next){case 0:return this.disableAdvancedFraudDetection&&ke.setLoadParameters({advancedFraudSignals:!1}),l={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},o={classes:this.classes,style:this.elementStyle,value:this.value,hidePostalCode:this.hidePostalCode,iconStyle:this.iconStyle,hideIcon:this.hideIcon,disabled:this.disabled},t.next=5,re.awrap(ke(this.pk,l));case 5:this.stripe=t.sent,this.stripe.registerAppInfo(Be),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(Wf,o),this.element.mount("#stripe-element-mount-point"),this.element.on("change",function(v){var c=document.getElementById("stripe-element-errors");v.error?c.textContent=v.error.message:c.textContent="",s.onChange(v)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(v){var c,i,g,h;return re.async(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,s.$emit("loading",!0),v.preventDefault(),c=Yf({},s.element),s.amount&&(c.amount=s.amount),d.next=7,re.awrap(s.stripe.createToken(c,s.tokenData));case 7:if(i=d.sent,g=i.token,!(h=i.error)){d.next=15;break}return document.getElementById("stripe-element-errors").textContent=h.message,s.$emit("error",h),d.abrupt("return");case 15:s.$emit("token",g),d.next=22;break;case 18:d.prev=18,d.t0=d.catch(0),console.error(d.t0),s.$emit("error",d.t0);case 22:return d.prev=22,s.$emit("loading",!1),d.finish(22);case 25:case"end":return d.stop()}},null,null,[[0,18,22,25]])});case 17:case"end":return t.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},unmount:function(){this.element.unmount()},update:function(l){this.element.update(l)},onChange:function(l){this.$emit("element-change",l)},onReady:function(l){this.$emit("element-ready",l)},onFocus:function(l){this.$emit("element-focus",l)},onBlur:function(l){this.$emit("element-blur",l)},onEscape:function(l){this.$emit("element-escape",l)},onClick:function(l){this.$emit("element-click",l)}}};function it(l,o,s,t,v,c,i,g,h,d){typeof i!="boolean"&&(h=g,g=i,i=!1);const u=typeof s=="function"?s.options:s;let a;if(l&&l.render&&(u.render=l.render,u.staticRenderFns=l.staticRenderFns,u._compiled=!0,v&&(u.functional=!0)),t&&(u._scopeId=t),c?(a=function(P){(P=P||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(P=__VUE_SSR_CONTEXT__),o&&o.call(this,h(P)),P&&P._registeredComponents&&P._registeredComponents.add(c)},u._ssrRegister=a):o&&(a=i?function(P){o.call(this,d(P,this.$root.$options.shadowRoot))}:function(P){o.call(this,g(P))}),a)if(u.functional){const P=u.render;u.render=function(I,_){return a.call(_),P(I,_)}}else{const P=u.beforeCreate;u.beforeCreate=P?[].concat(P,a):[a]}return s}const Kf=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function at(l){return(o,s)=>Zf(o,s)}let Me;const We={};function Zf(l,o){const s=Kf?o.media||"default":l,t=We[s]||(We[s]={ids:new Set,styles:[]});if(!t.ids.has(l)){t.ids.add(l);let v=o.source;if(o.map&&(v+=`
/*# sourceURL=`+o.map.sources[0]+" */",v+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(o.map))))+" */"),t.element||(t.element=document.createElement("style"),t.element.type="text/css",o.media&&t.element.setAttribute("media",o.media),Me===void 0&&(Me=document.head||document.getElementsByTagName("head")[0]),Me.appendChild(t.element)),"styleSheet"in t.element)t.styles.push(v),t.element.styleSheet.cssText=t.styles.filter(Boolean).join(`
`);else{const c=t.ids.size-1,i=document.createTextNode(v),g=t.element.childNodes;g[c]&&t.element.removeChild(g[c]),g.length?t.element.insertBefore(i,g[c]):t.element.appendChild(i)}}}const Jf=Gf;var lt=function(){var l=this.$createElement,o=this._self._c||l;return o("div",[o("form",{attrs:{id:"stripe-element-form"}},[o("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[o("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),o("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},Xf=[];lt._withStripped=!0;const Qf=function(l){l&&l("data-v-4dd8360e_0",{source:`





















































































































































































































































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
`]},media:void 0})},ey="data-v-4dd8360e",ty=it({render:lt,staticRenderFns:Xf},Qf,Jf,ey,!1,void 0,!1,at,void 0,void 0);var ny="payment",sy={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},elementsOptions:{type:Object,required:!0,default:function(){return{}}},confirmParams:{type:Object,required:!0,default:function(){return{}}},redirect:{type:String,default:"always"},createOptions:{type:Object,default:function(){return{}}},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},disableAdvancedFraudDetection:{type:Boolean}},data:function(){return{loading:!1,stripe:null,elements:null,element:null}},computed:{form:function(){return document.getElementById("stripe-payment-element-form")}},mounted:function(){var l,o=this;return re.async(function(s){for(;;)switch(s.prev=s.next){case 0:return this.disableAdvancedFraudDetection&&ke.setLoadParameters({advancedFraudSignals:!1}),l={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},s.next=4,re.awrap(ke(this.pk,l));case 4:this.stripe=s.sent,this.stripe.registerAppInfo(Be),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(ny,this.createOptions),this.element.mount("#stripe-payment-element-mount-point"),this.element.on("change",function(t){var v=document.getElementById("stripe-payment-element-errors");t.error?v.textContent=t.error.message:v.textContent="",o.onChange(t)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(t){var v,c,i;return re.async(function(g){for(;;)switch(g.prev=g.next){case 0:return g.prev=0,o.$emit("loading",!0),t.preventDefault(),g.next=5,re.awrap(o.stripe.confirmPayment({elements:o.elements,confirmParams:o.confirmParams,redirect:o.redirect}));case 5:if(v=g.sent,c=v.error,i=v.paymentIntent,!c){g.next=15;break}return document.getElementById("stripe-payment-element-errors").textContent=c.message,o.$emit("error",c),g.abrupt("return");case 15:i&&o.$emit("confirmed",i);case 16:g.next=22;break;case 18:g.prev=18,g.t0=g.catch(0),console.error(g.t0),o.$emit("error",g.t0);case 22:return g.prev=22,o.$emit("loading",!1),g.finish(22);case 25:case"end":return g.stop()}},null,null,[[0,18,22,25]])});case 16:case"end":return s.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},collapse:function(){this.element.collapse()},getElement:function(){this.element.getElement()},unmount:function(){this.element.unmount()},update:function(l){this.element.update(l)},onChange:function(l){this.$emit("element-change",l)},onReady:function(l){this.$emit("element-ready",l)},onFocus:function(l){this.$emit("element-focus",l)},onBlur:function(l){this.$emit("element-blur",l)},onEscape:function(l){this.$emit("element-escape",l)},onClick:function(l){this.$emit("element-click",l)}}};const oy=sy;var rt=function(){var l=this.$createElement,o=this._self._c||l;return o("div",[o("form",{attrs:{id:"stripe-payment-element-form"}},[o("div",{attrs:{id:"stripe-payment-element-mount-point"}}),this._v(" "),this._t("stripe-payment-element-errors",[o("div",{attrs:{id:"stripe-payment-element-errors",role:"alert"}})]),this._v(" "),o("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},iy=[];rt._withStripped=!0;const ay=function(l){l&&l("data-v-171d7aec_0",{source:`












































































































































































































































































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
`]},media:void 0})},ly=it({render:rt,staticRenderFns:iy},ay,oy,"data-v-171d7aec",!1,void 0,!1,at,void 0,void 0);var ry={install:function(l,o){var s,t,v,c,i,g,h;return re.async(function(d){for(;;)switch(d.prev=d.next){case 0:s=o.pk,t=o.stripeAccount,v=o.apiVersion,c=o.locale,i=o.elementsOptions,(g=window.Stripe(s,{stripeAccount:t,apiVersion:v,locale:c})).registerAppInfo(Be),h=g.elements(i),l.prototype.$stripe=g,l.prototype.$stripeElements=h;case 6:case"end":return d.stop()}})}};Te.StripeCheckout=zf,Te.StripeElementCard=ty,Te.StripeElementPayment=ly,Te.StripeElementsPlugin=ry,Te.StripePlugin=Tf;const le=l=>(he("data-v-0cc9bf69"),l=l(),fe(),l),cy={key:0,class:"row justify-content-center"},dy=le(()=>e("div",{id:"complycube-mount"},null,-1)),uy={class:"alert alert-success text-center",role:"alert"},py=le(()=>e("i",{style:{"font-size":"2.56rem"},class:"bi bi-check-circle"},null,-1)),_y=le(()=>e("h5",null," Payment Completed ",-1)),my=le(()=>e("p",null,"We have received your request, please exercise patience while we setup your company",-1)),hy=["href"],fy={key:1},yy={key:0,class:"text-center text-danger mt-5"},vy=le(()=>e("strong",null,"Error!",-1)),gy={key:1,class:"row justify-content-center"},by={id:"payment-form"},$y=le(()=>e("div",{class:"row my-2"},[e("div",{class:"col-12"},[e("label",{for:"",class:"form-label"},"Card holder's name"),e("input",{type:"text",class:"form-control",placeholder:"Full name on Card"})])],-1)),Sy=le(()=>e("div",{id:"payment-element"},null,-1)),wy={key:0,class:"form-check"},xy=le(()=>e("input",{class:"form-check-input exemption",type:"checkbox",value:"",id:"checker"},null,-1)),ky=le(()=>e("label",{class:"form-check-label",for:"checker"},[e("div",{class:"fw-bold"}," Securely save my information for 1-click checkout "),e("span",null," Pay faster on Stripe Atlas and everywhere Link is accepted ")],-1)),Cy=[xy,ky],Ey={key:1,class:"small my-3"},Ay={key:2,id:"submit"},Fy=le(()=>e("div",{class:"spinner hidden",id:"spinner"},null,-1)),Py=le(()=>e("span",{id:"button-text"},"Pay now",-1)),Ty=[Fy,Py],Vy={key:3,class:"small mt-3"},Iy=le(()=>e("div",{id:"payment-message",class:"hidden"},null,-1)),Dy="pk_test_51P7LhqRxBSKsFyqbPdmjZpG4tFsnyLZEV6Tn38aic7H4oeWOSub5gTRnjF4vgdRbBJutMM0G3d2x3c9VFz2g1dkX00bPRK5pYT",Ly=X({__name:"Pay",setup(l){const o=J(),s=me(()=>{var m,S;return(S=(m=o.companyInProgress)==null?void 0:m.billing)==null?void 0:S.status}),t=Stripe(Dy),v=H(!1),c=H(!1);let i="",g;const h=[{id:"xl-tshirt",plan_id:1}];ie(async()=>{a();try{c.value=!1;const{data:_}=await Z.paymentIntent(h);i=_.client_secret,_!=null&&_.client_secret&&(v.value=!0),g=t.elements({clientSecret:i});const m={layout:"tabs"};g.create("payment",m).mount("#payment-element"),document.querySelector("#payment-form"),document.addEventListener("submit",u)}catch{c.value=!0}});const d=me(()=>"https://squareone.portrec.ng/kcy/verifications");async function u(_){_.preventDefault(),I(!0);const{error:m}=await t.confirmPayment({elements:g,confirmParams:{return_url:"https://squareone.portrec.ng/kcy/verifications"}});m.type==="card_error"||m.type==="validation_error"?P(m.message):P("An unexpected error occurred."),I(!1)}async function a(){const _=new URLSearchParams(window.location.search).get("payment_intent_client_secret");if(!_)return;const{paymentIntent:m}=await t.retrievePaymentIntent(_);switch(m.status){case"succeeded":P("Payment succeeded!");break;case"processing":P("Your payment is processing.");break;case"requires_payment_method":P("Your payment was not successful, please try again.");break;default:P("Something went wrong.");break}}function P(_){const m=document.querySelector("#payment-message");m.classList.remove("hidden"),m.textContent=_,setTimeout(function(){m.classList.add("hidden"),m.textContent=""},4e3)}function I(_){_?(document.querySelector("#submit").disabled=!0,document.querySelector("#spinner").classList.remove("hidden"),document.querySelector("#button-text").classList.add("hidden")):(document.querySelector("#submit").disabled=!1,document.querySelector("#spinner").classList.add("hidden"),document.querySelector("#button-text").classList.remove("hidden"))}return(_,m)=>(y(),R(ce,null,{main:N(()=>[s.value?(y(),w("div",cy,[dy,e("div",uy,[py,_y,my,e("small",null,[r("If you have not completed your KYC, please "),e("a",{href:d.value}," click here ",8,hy)])])])):(y(),w("div",fy,[c.value?(y(),w("div",yy,[vy,r(" loading payment information, please reload page. ")])):V("",!0),v.value?(y(),w("div",gy,[e("form",by,[$y,Sy,v.value?(y(),w("div",wy,Cy)):V("",!0),v.value?(y(),w("div",Ey," To pay your company formation fee, make sure you're not using an anonymous IP address or a VPN. ")):V("",!0),v.value?(y(),w("button",Ay,Ty)):V("",!0),v.value?(y(),w("div",Vy," By confirming your payment, you allow Stripe Atlas to charge you for this payment and the future payments in accordance with their terms. ")):V("",!0),Iy])])):V("",!0)]))]),info:N(()=>[]),_:1}))}}),Oy=ye(Ly,[["__scopeId","data-v-0cc9bf69"]]),Uy={key:1},Zy=X({__name:"StartCompany_index",setup(l){Ze();const o=Ke();Qe(),et();const s=J(),t=H(!0);ie(async()=>{await s.getCompanyInProgress(),t.value=!1,s.getBusinessNatures(),s.getCountries(),v()});function v(){var i;const c=((i=s.companyInProgress)==null?void 0:i.names)??[];c.length&&(c.find(a=>a.choice_level==1),c.find(a=>a.choice_level==2)&&(o.isSecond=!0),c.find(a=>a.choice_level==3)&&(o.isThird=!0),c.find(a=>a.choice_level==4)&&(o.isForth=!0),c.find(a=>a.choice_level==5)&&(o.isFifth=!0))}return(c,i)=>t.value?(y(),R(ct,{key:0})):(y(),w("div",Uy,[n(s).currentStage==2?(y(),R(es,{key:0})):V("",!0),n(s).currentStage==3?(y(),R(Cs,{key:1})):V("",!0),n(s).currentStage==4?(y(),R(Qs,{key:2})):V("",!0),n(s).currentStage==5?(y(),R(er,{key:3})):V("",!0),n(s).currentStage==6?(y(),R(nc,{key:4})):V("",!0),n(s).currentStage==7?(y(),R(Vc,{key:5})):V("",!0),n(s).currentStage==8?(y(),R(sd,{key:6})):V("",!0),n(s).currentStage==9?(y(),R(Nd,{key:7})):V("",!0),n(s).currentStage==10?(y(),R(Oh,{key:8})):V("",!0),n(s).currentStage==11?(y(),R(rf,{key:9})):V("",!0),n(s).currentStage==12?(y(),R(Oy,{key:10})):V("",!0)]))}});export{Zy as default};
