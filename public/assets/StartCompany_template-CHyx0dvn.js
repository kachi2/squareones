import{d as nt,J as bt,a as mt,o as P,c as ee,G as xt,H as St,y as At,e as be,f as Ye,t as ut,g as it,K as pt,D as ct,E as _t,b as v,_ as st,B as Ge,C as He,Q as t,r as dt,u as Ft,L as kt,z as lt,s as rt,Z as ft,j as wt,A as ht}from"./index-BzgaEDPS.js";import{u as Ct}from"./StartCompany_store-Bo5GE3fS.js";import{d as Lt}from"./index-D9uLz4y5.js";import{u as Je}from"./vee-validate.esm-BdL-NeZw.js";import{a as i,c as Qe,d as qt}from"./index.esm-uzrwoxtF.js";const gt="/icons/sidebar/vector-10.png",$t=h=>(ct("data-v-20a577f0"),h=h(),_t(),h),Vt={class:"list-group list-group-flush mt-4"},Tt=["onClick"],Bt={key:0},Et={key:0,style:{"font-size":"10px"}},Nt=$t(()=>v("i",{class:"bi bi-check-circle text-primary"},null,-1)),Dt=[Nt],Mt=nt({__name:"StartCompany_menulist",setup(h){pt(_=>({bdc8f386:be(C).textColor}));const C=bt(),A=mt(),m=Lt.useToast(),x=Ct();function a(_){const d=x.companyInProgress;_==11||_==12?m.info("You cannot access this page <br> here from here,complete all forms",{position:"top-right"}):(_===10||_==11||_==12)&&(!d||!(d!=null&&d.description)||!(d!=null&&d.address)||!d.company_entity.length||!d.owner_share.length||!d.fund_source.length||!d.activity)?m.info("You cannot access this page <br> here from here,complete all forms",{position:"top-right"}):(A.push({name:"Start"}),x.currentStage=_)}function V(_,d){var l;if(d!=5)return _ instanceof Array?_==null?void 0:_.length:_!=null;{const q=((l=x.companyInProgress)==null?void 0:l.company_entity)??[],p=q.find(f=>f.entity_capacity_id.includes(2)&&f.entity_type_id==1);return!(!q.find(f=>f.entity_capacity_id.includes(1))||!p)}}return(_,d)=>(P(),ee("ul",Vt,[(P(!0),ee(xt,null,St(be(x).menus,l=>{var q;return P(),ee("li",{onClick:p=>a(l.stage),class:At(["list-group-item",{isActive:be(x).isActiveMenu(l.stage)}])},[Ye(ut(l==null?void 0:l.name)+" ",1),be(x).companyInProgress?(P(),ee("span",Bt,[V((q=be(x))==null?void 0:q.companyInProgress[l.dataSource],l.stage)?(P(),ee("small",Et,Dt)):it("",!0)])):it("",!0)],10,Tt)}),256))]))}}),Ot=st(Mt,[["__scopeId","data-v-20a577f0"]]),Rt=h=>(ct("data-v-6bdd83b5"),h=h(),_t(),h),zt={class:"offcanvas offcanvas-start",tabindex:"-1",id:"startMobileOffcanvas","aria-labelledby":"startMobileOffcanvasLabel"},jt=Rt(()=>v("div",{class:"offcanvas-header"},[v("h5",{class:"offcanvas-title",id:"startMobileOffcanvasLabel"}," Menu "),v("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),Kt={class:"offcanvas-body"},Yt=nt({__name:"StartCompany_mobilemenu",setup(h){return(C,A)=>(P(),ee("div",zt,[jt,v("div",Kt,[Ge(Ot,{"data-bs-dismiss":"offcanvas"})])]))}}),Gt=st(Yt,[["__scopeId","data-v-6bdd83b5"]]),Ht=He("description",()=>{const h={description:i().min(150,"Description must be at least 150 characters long").required(),website:i(),business_nature_id:i().required("Please select a nature of business")},{errors:C,handleSubmit:A,defineField:m,setFieldValue:x,resetForm:a,validateField:V}=Je({validationSchema:Qe(h)});function _(c){V(c)}const[d,l]=m("description"),[q,p]=m("website"),[F,f]=m("business_nature_id"),k=!1,s=t("squareOne-desc-desc",""),b=t("squareOne-desc-website",""),o=t("squareOne-desc-bNature","");function O(){s.value=d.value,b.value=q.value,o.value=F.value}function r(c){s.value.length>1?d.value=s.value:c!=null&&c.description&&(d.value=c.description),o.value?F.value=parseInt(o.value):c!=null&&c.business_nature_id&&(F.value=parseInt(c.business_nature_id)),b.value.length>1?q.value=b.value:c!=null&&c.website&&(q.value=c.website)}function u(){s.value="",b.value="",o.value=""}return{description:d,descriptiontAttr:l,business_nature_id:F,business_nature_idAttr:f,website:q,websiteAttr:p,isSaving:k,errors:C,handleSubmit:A,setFieldValue:x,updateFields:r,saveToLocalStorage:O,clearLocalStorage:u,resetForm:a,validateVueSelectOnBlur:_}}),Jt=He("name",()=>{const h=t("name_isSecond",!1),C=t("name_isThird",!1),A=t("name_isForth",!1),m=t("name_isFifth",!1),x=e=>{var ce=/^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;return ce.test(e)},a=e=>{var ce=/[\u4e00-\u9fa5]/;return!ce.test(e)},V={choice_level1_eng_name:i().test("chineseChecks","Please input only English characters",a),choice_level2_eng_name:i().test("chineseChecks","Please input only English characters",a),choice_level3_eng_name:i().test("chineseChecks","Please input only English characters",a),choice_level4_eng_name:i().test("chineseChecks","Please input only English characters",a),choice_level5_eng_name:i().test("chineseChecks","Please input only English characters",a),choice_level1_chn_name:i().test("chineseCheck","Please input only Chinese characters",x),choice_level2_chn_name:i().test("chineseCheck","Please input only Chinese characters",x),choice_level3_chn_name:i().test("chineseCheck","Please input only Chinese characters",x),choice_level4_chn_name:i().test("chineseCheck","Please input only Chinese characters",x),choice_level5_chn_name:i().test("chineseCheck","Please input only Chinese characters",x)},{errors:_,handleSubmit:d,defineField:l,setFieldValue:q,resetForm:p,resetField:F,validateField:f}=Je({validationSchema:Qe(V),initialValues:{choice_level1_prefix:"Limited",choice_level1_chn_prefix:"有限公司",choice_level2_prefix:"Limited",choice_level2_chn_prefix:"有限公司",choice_level3_prefix:"Limited",choice_level3_chn_prefix:"有限公司",choice_level4_prefix:"Limited",choice_level4_chn_prefix:"有限公司",choice_level5_prefix:"Limited",choice_level5_chn_prefix:"有限公司"}});function k(e){f(e)}const[s,b]=l("choice_level1_eng_name"),[o]=l("choice_level1_chn_name"),[O]=l("choice_level1_prefix"),[r]=l("choice_level1_chn_prefix"),[u]=l("choice_level2_eng_name"),[c]=l("choice_level2_chn_name"),[w]=l("choice_level2_prefix"),[L]=l("choice_level2_chn_prefix"),[E]=l("choice_level3_eng_name"),[g]=l("choice_level3_chn_name"),[n]=l("choice_level3_prefix"),[S]=l("choice_level3_chn_prefix"),[B]=l("choice_level4_eng_name"),[N]=l("choice_level4_chn_name"),[J]=l("choice_level4_prefix"),[T]=l("choice_level4_chn_prefix"),[Q]=l("choice_level5_eng_name"),[D]=l("choice_level5_chn_name"),[$]=l("choice_level5_prefix"),[Y]=l("choice_level5_chn_prefix"),Ze=!1,G=t("squareOne-name-choice_level1_eng_name",""),ve=t("squareOne-name-choice_level1_chn_name",""),te=t("squareOne-name-choice_level1_prefix",""),ae=t("squareOne-name-choice_level1_chn_prefix",""),ie=t("squareOne-name-choice_level2_eng_name",""),le=t("squareOne-name-choice_level2_chn_name",""),ue=t("squareOne-name-choice_level2_prefix",""),ne=t("squareOne-name-choice_level2_chn_prefix",""),oe=t("squareOne-name-choice_level3_eng_name",""),M=t("squareOne-name-choice_level3_chn_name",""),Z=t("squareOne-name-choice_level3_prefix",""),R=t("squareOne-name-choice_level3_chn_prefix",""),U=t("squareOne-name-choice_level4_eng_name",""),z=t("squareOne-name-choice_level4_chn_name",""),W=t("squareOne-name-choice_level4_prefix",""),H=t("squareOne-name-choice_level4_chn_prefix",""),X=t("squareOne-name-choice_level5_eng_name",""),j=t("squareOne-name-choice_level5_chn_name",""),y=t("squareOne-name-choice_level5_prefix",""),K=t("squareOne-name-choice_level5_chn_prefix","");function de(){G.value=s.value,ve.value=o.value,te.value=O.value,ae.value=r.value,ie.value=u.value,le.value=c.value,ue.value=w.value,ne.value=L.value,oe.value=E.value,M.value=g.value,Z.value=n.value,R.value=S.value,U.value=B.value,z.value=N.value,W.value=J.value,H.value=T.value,X.value=Q.value,j.value=D.value,y.value=$.value,K.value=Y.value}function re(e){var ce,he,I,qe,ye,Ie,Ue,We,me,xe,pe,Ce,Oe,Se,Ae,Fe,ke,we,Le,ge,$e,Ve,Te,Be,Ee,Ne,De,Me,Re,ze,je,Xe,Ke,Pe,et,tt,_e,at,vt,ot;G.value.length>1?s.value=G.value:(ce=e==null?void 0:e.names[0])!=null&&ce.eng_name&&(s.value=(he=e==null?void 0:e.names[0])==null?void 0:he.eng_name),ve.value.length>1?o.value=ve.value:(I=e==null?void 0:e.names[0])!=null&&I.chn_eng_name&&(o.value=(qe=e==null?void 0:e.names[0])==null?void 0:qe.chn_eng_name),te.value.length>1?O.value=te.value:(ye=e==null?void 0:e.names[0])!=null&&ye.eng_prefix&&(O.value=(Ie=e==null?void 0:e.names[0])==null?void 0:Ie.eng_prefix),ae.value.length>1?r.value=ae.value:(Ue=e==null?void 0:e.names[0])!=null&&Ue.chn_prefix&&(r.value=(We=e==null?void 0:e.names[0])==null?void 0:We.chn_prefix),ie.value.length>1?u.value=ie.value:(me=e==null?void 0:e.names[1])!=null&&me.eng_name&&(u.value=(xe=e==null?void 0:e.names[1])==null?void 0:xe.eng_name),le.value.length>1?c.value=le.value:(pe=e==null?void 0:e.names[1])!=null&&pe.hn_name&&(c.value=(Ce=e==null?void 0:e.names[1])==null?void 0:Ce.chn_name),ue.value.length>1?w.value=ue.value:(Oe=e==null?void 0:e.names[1])!=null&&Oe.eng_prefix&&(w.value=(Se=e==null?void 0:e.names[1])==null?void 0:Se.eng_prefix),ne.value.length>1?L.value=ne.value:(Ae=e==null?void 0:e.names[1])!=null&&Ae.chn_prefix&&(L.value=(Fe=e==null?void 0:e.names[1])==null?void 0:Fe.chn_prefix),oe.value.length>1?E.value=oe.value:(ke=e==null?void 0:e.names[2])!=null&&ke.eng_name&&(E.value=(we=e==null?void 0:e.names[2])==null?void 0:we.eng_name),M.value.length>1?g.value=M.value:(Le=e==null?void 0:e.names[2])!=null&&Le.chn_name&&(g.value=(ge=e==null?void 0:e.names[2])==null?void 0:ge.chn_name),Z.value.length>1?n.value=Z.value:($e=e==null?void 0:e.names[2])!=null&&$e.eng_prefix&&(n.value=(Ve=e==null?void 0:e.names[2])==null?void 0:Ve.eng_prefix),R.value.length>1?S.value=R.value:(Te=e==null?void 0:e.names[2])!=null&&Te.chn_prefix&&(S.value=(Be=e==null?void 0:e.names[2])==null?void 0:Be.chn_prefix),U.value.length>1?B.value=U.value:(Ee=e==null?void 0:e.names[3])!=null&&Ee.eng_name&&(B.value=(Ne=e==null?void 0:e.names[3])==null?void 0:Ne.eng_name),z.value.length>1?N.value=z.value:(De=e==null?void 0:e.names[3])!=null&&De.chn_name&&(N.value=(Me=e==null?void 0:e.names[3])==null?void 0:Me.chn_name),W.value.length>1?J.value=W.value:(Re=e==null?void 0:e.names[3])!=null&&Re.eng_prefix&&(J.value=(ze=e==null?void 0:e.names[3])==null?void 0:ze.eng_prefix),H.value.length>1?T.value=H.value:(je=e==null?void 0:e.names[3])!=null&&je.chn_prefix&&(T.value=(Xe=e==null?void 0:e.names[3])==null?void 0:Xe.chn_prefix),X.value.length>1?Q.value=X.value:(Ke=e==null?void 0:e.names[3])!=null&&Ke.eng_name&&(Q.value=(Pe=e==null?void 0:e.names[3])==null?void 0:Pe.eng_name),j.value.length>1?D.value=j.value:(et=e==null?void 0:e.names[3])!=null&&et.chn_name&&(D.value=(tt=e==null?void 0:e.names[3])==null?void 0:tt.chn_name),y.value.length>1?$.value=y.value:(_e=e==null?void 0:e.names[3])!=null&&_e.eng_prefix&&($.value=(at=e==null?void 0:e.names[3])==null?void 0:at.eng_prefix),K.value.length>1?Y.value=K.value:(vt=e==null?void 0:e.names[3])!=null&&vt.chn_prefix&&(Y.value=(ot=e==null?void 0:e.names[3])==null?void 0:ot.chn_prefix)}function fe(){G.value="",ve.value="",te.value="",ae.value="",ie.value="",le.value="",ue.value="",ne.value="",oe.value="",M.value="",Z.value="",R.value="",U.value="",z.value="",W.value="",H.value="",X.value="",j.value="",y.value="",K.value="",h.value=!1,C.value=!1,A.value=!1,m.value=!1}return{choice_level1_eng_name:s,choice_level1_eng_nameAttr:b,choice_level1_chn_name:o,choice_level1_prefix:O,choice_level1_chn_prefix:r,choice_level2_eng_name:u,choice_level2_chn_name:c,choice_level2_prefix:w,choice_level2_chn_prefix:L,choice_level3_eng_name:E,choice_level3_chn_name:g,choice_level3_prefix:n,choice_level3_chn_prefix:S,choice_level4_eng_name:B,choice_level4_chn_name:N,choice_level4_prefix:J,choice_level4_chn_prefix:T,choice_level5_eng_name:Q,choice_level5_chn_name:D,choice_level5_prefix:$,choice_level5_chn_prefix:Y,isSecond:h,isThird:C,isForth:A,isFifth:m,isSaving:Ze,errors:_,handleSubmit:d,setFieldValue:q,updateFields:re,saveToLocalStorage:de,resetForm:p,resetField:F,chineseCheck:x,clearLocalStorage:fe,validateVueSelectOnBlur:k}}),Qt=He("source",()=>{const h={income_expected_source:i().required("Required field"),origin_funds:i().required("Required field"),wealth_initial_source:i().required("Required field"),income_outgoing_source:i().required("Required field")},{errors:C,handleSubmit:A,defineField:m,setFieldValue:x,validateField:a}=Je({validationSchema:Qe(h)});function V(u){a(u)}const[_,d]=m("income_expected_source"),[l]=m("origin_funds"),[q]=m("wealth_initial_source"),[p]=m("income_outgoing_source"),F=!1,f=t("squareOne-source-income_expected_source",""),k=t("squareOne-source-origin_funds",""),s=t("squareOne-source-wealth_initial_source",""),b=t("squareOne-source-income_outgoing_source","");function o(){f.value=_.value,k.value=l.value,s.value=q.value,b.value=p.value}function O(u){var c,w,L,E,g,n,S,B;f.value?_.value=f.value:(c=u==null?void 0:u.fund_source)!=null&&c.income_expected_source&&(_.value=(w=u==null?void 0:u.fund_source)==null?void 0:w.income_expected_source),k.value?l.value=k.value:(L=u==null?void 0:u.fund_source)!=null&&L.origin_funds&&(l.value=(E=u==null?void 0:u.fund_source)==null?void 0:E.origin_funds),s.value?q.value=s.value:(g=u==null?void 0:u.fund_source)!=null&&g.wealth_initial_source&&(q.value=(n=u==null?void 0:u.fund_source)==null?void 0:n.wealth_initial_source),b.value?p.value=b.value:(S=u==null?void 0:u.fund_source)!=null&&S.income_outgoing_source&&(p.value=(B=u==null?void 0:u.fund_source)==null?void 0:B.income_outgoing_source)}function r(){f.value="",k.value="",s.value="",b.value=""}return{income_expected_source:_,income_expected_sourceAttr:d,origin_funds:l,wealth_initial_source:q,income_outgoing_source:p,isSaving:F,errors:C,handleSubmit:A,setFieldValue:x,updateFields:O,saveToLocalStorage:o,clearLocalStorage:r,validateVueSelectOnBlur:V}}),Zt=He("activities",()=>{const h={description:i().min(150,"Description must be at least 150 characters long").required(),activity_level:i().required("Please select an option").required(),activity_nature:i().required("Please select an option").required(),customer_location_operation:qt().required("Please select an option").required(),country:qt().required("Required field").required()},{errors:C,handleSubmit:A,defineField:m,setFieldValue:x,validateField:a}=Je({validationSchema:Qe(h)});function V(n){a(n)}const[_,d]=m("description"),[l,q]=m("activity_level"),[p,F]=m("activity_nature"),[f,k]=m("customer_location_operation"),[s,b]=m("country"),o=!1,O=t("squareOne-activity-description",""),r=t("squareOne-activity-activity_level",""),u=t("squareOne-activity-activity_nature",""),c=t("squareOne-activity-activity-location",""),w=t("squareOne-activity-activity_nature-country","");function L(){O.value=_.value,r.value=l.value,u.value=p.value,c.value=f.value,w.value=s.value}function E(n){var S,B,N,J,T,Q,D;if(O.value?_.value=O.value:(S=n==null?void 0:n.activity)!=null&&S.description&&(_.value=n.activity.description),r.value?l.value=r.value:(B=n==null?void 0:n.activity)!=null&&B.activity_level&&(l.value=n.activity.activity_level),u.value?p.value=u.value:(N=n==null?void 0:n.activity)!=null&&N.activity_nature&&(p.value=n.activity.activity_nature),c.value)try{f.value=c.value.split(",")}catch{}else if((J=n==null?void 0:n.activity)!=null&&J.customer_location_operation){const $=((T=n==null?void 0:n.activity)==null?void 0:T.customer_location_operation)??"";f.value=$!==""?$.split(","):""}if(w.value)try{s.value=w.value.split(",")}catch{}else if((Q=n==null?void 0:n.activity)!=null&&Q.country){const $=((D=n==null?void 0:n.activity)==null?void 0:D.country)??"";s.value=$!==""?$.split(","):""}}function g(){O.value="",r.value="",u.value="",c.value="",w.value=""}return{description:_,descriptionAttr:d,activity_level:l,activity_levelAttr:q,activity_nature:p,activity_natureAttr:F,customer_location_operation:f,customer_location_operationAttr:k,country:s,countryAttr:b,isSaving:o,errors:C,handleSubmit:A,setFieldValue:x,updateFields:E,saveToLocalStorage:L,clearLocalStorage:g,validateVueSelectOnBlur:V}}),Ut=He("foundersCorporate",()=>{const h=I=>{var qe=/^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;return f.value?qe.test(I):!0},C=I=>{var qe=/[\u4e00-\u9fa5]/;return!qe.test(I)},A={company_name:i().test("chineseChecks","Please input only English characters",C),chn_company_name:i().test("chineseCheck","Please input only Chinese characters",h),date_incorporated:i().required("Date incorporated is required"),registeration_no:i().required("Company registration number is required"),country_registered:i().required("Company date of registration is required"),business_nature_id:i().required("Business nature Id is required"),flat:i().required(" Flat is required"),building:i().required(" building is required "),street:i().required(" Street is required"),state:i().required("State/City is required"),country:i().required("country is required"),first_name:i().required("First name is required"),last_name:i().required("Last name is requied"),phone:i().required("phone number is required"),email:i().email().required("Email is required"),confirm_email:i().email()},{errors:m,handleSubmit:x,defineField:a,setFieldValue:V,resetForm:_,validateField:d}=Je({validationSchema:Qe(A)});function l(I){d(I)}const[q]=a("entity_type_id"),[p,F]=a("company_name"),[f,k]=a("chn_company_name"),[s,b]=a("date_incorporated"),[o,O]=a("flat"),[r,u]=a("building"),[c,w]=a("street"),[L,E]=a("state"),[g,n]=a("country"),[S,B]=a("registeration_no"),[N,J]=a("is_founder"),[T,Q]=a("country_registered"),[D,$]=a("business_nature_id"),[Y,Ze]=a("phone"),[G,ve]=a("email"),[te,ae]=a("confirm_email"),[ie,le]=a("first_name"),[ue,ne]=a("last_name"),oe=!1,M=t("squareOne-fCop-company_name",""),Z=t("squareOne-fCop-chn_company_name",""),R=t("squareOne-fCop-flat",""),U=t("squareOne-fCop-building",""),z=t("squareOne-fCop-street",""),W=t("squareOne-fCop-state",""),H=t("squareOne-fCop-country",""),X=t("squareOne-fCop-registeration_no",""),j=t("squareOne-fCop-country_registered",""),y=t("squareOne-fCop-phone",""),K=t("squareOne-fCop-email",""),de=t("squareOne-fCop-confirm_email",""),re=t("squareOne-fCop-first_name",""),fe=t("squareOne-fCop-last_name","");function e(){M.value=p.value,Z.value=f.value,X.value=S.value,j.value=T.value,R.value=o.value,U.value=r.value,z.value=c.value,W.value=L.value,y.value=Y.value,K.value=G.value,de.value=te.value,re.value=ie.value,fe.value=ue.value}function ce(I){R.value&&(o.value=R.value),U.value&&(r.value=U.value),z.value&&(c.value=z.value),W.value&&(L.value=W.value),H.value&&(g.value=H.value),y.value&&(Y.value=y.value),K.value&&(G.value=K.value),de.value&&(te.value=de.value),re.value&&(ie.value=re.value),fe.value&&(ue.value=fe.value),M.value&&(p.value=M.value),Z.value&&(f.value=Z.value),X.value&&(S.value=X.value),j.value&&(T.value=j.value)}function he(){M.value="",Z.value="",R.value="",U.value="",z.value="",W.value="",H.value="",X.value="",j.value="",y.value="",K.value="",de.value="",re.value="",fe.value=""}return{entity_type_id:q,company_name:p,company_nameAttr:F,chn_company_name:f,chn_company_nameAttr:k,date_incorporated:s,date_incorporatedAttr:b,street:c,streetAttr:w,building:r,buildingAttr:u,flat:o,flatAttr:O,state:L,stateAttr:E,country:g,countryAttr:n,registeration_no:S,registeration_noAttr:B,is_founder:N,is_founderAttr:J,country_registered:T,country_registeredAttr:Q,business_nature_id:D,business_nature_idAttr:$,phone:Y,phoneAttr:Ze,email:G,emailAttr:ve,confirm_email:te,confirm_emailAttr:ae,first_name:ie,first_nameAttr:le,last_name:ue,last_nameAttr:ne,isSaving:oe,errors:m,handleSubmit:x,setFieldValue:V,updateFields:ce,saveToLocalStorage:e,resetForm:_,clearLocalStorage:he,validateVueSelectOnBlur:l}}),Wt=He("foundersIdividual",()=>{const h=_e=>{var at=/^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;return We.value?at.test(_e):!0},C=_e=>Ue.value?!0:_e!==void 0&&_e!="",A={chn_first_name:i().test("chineseCheck","Please input only Chinese characters",h),chn_last_name:i().test("chineseCheck","Please input only Chinese characters",h),flat:i().required("Flat is required"),building:i().required("Building is required"),street:i().required("Street is required"),state:i().required("State is required"),country:i().required("Country is required"),flat2:i().test("correspondingAddressCheck","This field is required",C),building2:i().test("correspondingAddressCheck","This field is required",C),street2:i().test("correspondingAddressCheck","This field is required",C),state2:i().test("correspondingAddressCheck","This field is required",C),country2:i().test("correspondingAddressCheck","This field is required",C),phone:i().required("Phone is required"),email:i().email().required("Email is required"),confirm_email:i().required("Email is required"),first_name:i().required("First Name is required"),last_name:i().required("Last Name is required"),nationality:i().required(),occupation:i().required("Occupation is required"),identity_type_id:i().required("ID type is required"),identity_no:i(),identity_no_suffix:i(),passport_no:i(),dob:i().required("Date of birth is required")},{errors:m,handleSubmit:x,defineField:a,setFieldValue:V,resetForm:_,validateField:d}=Je({validationSchema:Qe(A)});function l(_e){d(_e)}const[q]=a("entity_type_id"),[p,F]=a("flat"),[f,k]=a("building"),[s,b]=a("street"),[o,O]=a("state"),[r,u]=a("country"),[c,w]=a("postal_code"),[L,E]=a("identity_no_suffix"),[g,n]=a("flat2"),[S,B]=a("building2"),[N,J]=a("street2"),[T,Q]=a("state2"),[D,$]=a("country2"),[Y,Ze]=a("postal_code2"),[G,ve]=a("registeration_no"),[te]=a("is_founder"),[ae,ie]=a("phone"),[le,ue]=a("email"),[ne,oe]=a("confirm_email"),[M,Z]=a("first_name"),[R,U]=a("last_name"),[z,W]=a("chn_first_name"),[H,X]=a("chn_last_name"),[j,y]=a("nationality"),[K,de]=a("occupation"),[re,fe]=a("identity_type_id"),[e,ce]=a("identity_no"),[he,I]=a("passport_no"),[qe,ye]=a("dob"),Ie=!1,Ue=dt(!1),We=dt(!1),me=t("squareOne-fInd-flat",""),xe=t("squareOne-fInd-building",""),pe=t("squareOne-fInd-street",""),Ce=t("squareOne-fInd-state",""),Oe=t("squareOne-fInd-country",""),Se=t("squareOne-fInd-postal_code",""),Ae=t("squareOne-fInd-flat2",""),Fe=t("squareOne-fInd-building2",""),ke=t("squareOne-fInd-street2",""),we=t("squareOne-fInd-state2",""),Le=t("squareOne-fInd-country2",""),ge=t("squareOne-fInd-postal_code2",""),$e=t("squareOne-fInd-issuing_country",""),Ve=t("squareOne-fInd-phone",""),Te=t("squareOne-fInd-email",""),Be=t("squareOne-fInd-confirm_email",""),Ee=t("squareOne-fInd-first_name",""),Ne=t("squareOne-fInd-last_name",""),De=t("squareOne-fInd-chn_first_name"," "),Me=t("squareOne-fInd-chn_last_name"," "),Re=t("squareOne-fInd-nationality",""),ze=t("squareOne-fInd-occupation",""),je=t("squareOne-fInd-identity_no",""),Xe=t("squareOne-fInd-identity_no_suffix",""),Ke=t("squareOne-fInd-passport_no","");function Pe(){me.value=p.value,xe.value=f.value,pe.value=s.value,Ce.value=o.value,Oe.value=r.value,Se.value=c.value,Ae.value=g.value,Fe.value=S.value,ke.value=N.value,we.value=T.value,Le.value=D.value,ge.value=Y.value,Xe.value=L.value,$e.value=G.value,Ve.value=ae.value,Te.value=le.value,Be.value=ne.value,Ee.value=M.value,Ne.value=R.value,De.value=z.value,Me.value=H.value,Re.value=j.value,ze.value=K.value,je.value=e.value,Ke.value=he.value}function et(_e){me.value&&(p.value=me.value),xe.value&&(f.value=xe.value),pe.value&&(s.value=pe.value),Ce.value&&(o.value=Ce.value),Oe.value&&(r.value=Oe.value),Se.value&&(c.value=Se.value),Ae.value&&(g.value=Ae.value),Fe.value&&(S.value=Fe.value),ke.value&&(N.value=ke.value),we.value&&(T.value=we.value),Le.value&&(D.value=Le.value),ge.value&&(Y.value=ge.value),$e.value&&(G.value=$e.value),Ve.value&&(ae.value=Ve.value),Te.value&&(le.value=Te.value),Be.value&&(ne.value=Be.value),Ee.value&&(M.value=Ee.value),Ne.value&&(R.value=Ne.value),De.value&&(z.value=De.value),Me.value&&(H.value=Me.value),Re.value&&(j.value=Re.value),ze.value&&(K.value=ze.value),je.value&&(e.value=je.value),Ke.value&&(he.value=Ke.value)}function tt(){me.value="",xe.value="",pe.value="",Ce.value="",Oe.value="",Se.value="",Xe.value="",Ae.value="",Fe.value="",ke.value="",we.value="",Le.value="",ge.value="",$e.value="",Ve.value="",Te.value="",Be.value="",Ee.value="",Ne.value="",De.value="",Me.value="",Re.value="",ze.value="",je.value="",Ke.value=""}return{entity_type_id:q,flat:p,flatAttr:F,building:f,buildingAttr:k,street:s,streetAttr:b,state:o,stateAttr:O,postal_code:c,postal_codeAttr:w,country:r,countryAttr:u,flat2:g,flat2Attr:n,building2:S,building2Attr:B,street2:N,street2Attr:J,state2:T,state2Attr:Q,postal_code2:Y,postal_code2Attr:Ze,country2:D,country2Attr:$,first_name:M,first_nameAttr:Z,last_name:R,last_nameAttr:U,chn_first_name:z,chn_first_nameAttr:W,chn_last_name:H,chn_last_nameAttr:X,dob:qe,dobAttr:ye,nationality:j,nationalityAttr:y,phone:ae,phoneAttr:ie,email:le,emailAttr:ue,confirm_email:ne,confirm_emailAttr:oe,occupation:K,occupationAttr:de,identity_no:e,identity_noAttr:ce,identity_no_suffix:L,identity_no_suffixAttr:E,passport_no:he,passport_noAttr:I,issuing_country:G,issuing_countryAttr:ve,is_founder:te,identity_type_id:re,identity_type_idAttr:fe,isSaving:Ie,correspondingAddressIsSame:Ue,hasChineseName:We,errors:m,handleSubmit:x,setFieldValue:V,updateFields:et,clearLocalStorage:tt,saveToLocalStorage:Pe,resetForm:_,validateVueSelectOnBlur:l}}),se=h=>(ct("data-v-7944d902"),h=h(),_t(),h),Xt={class:"side-panel"},yt={class:"list-group list-group-flush mt-4"},It={class:"list-group-item border-0 bg-transparent"},Pt=se(()=>v("img",{src:gt,alt:""},null,-1)),ea={class:"list-group-item border-0 bg-transparent"},ta=se(()=>v("i",{class:"bi bi-grid me-2 mode"},null,-1)),aa=wt('<ul class="list-group list-group-flush" style="margin-top:120px;" data-v-7944d902><li class="list-group-item border-0 bg-transparent" data-v-7944d902><i class="bi bi-gear mode" data-v-7944d902></i></li><li class="list-group-item border-0 bg-transparent" data-v-7944d902><i class="bi bi-cash-stack mode" data-v-7944d902></i></li><li class="list-group-item border-0 bg-transparent" data-v-7944d902><i class="bi bi-question-circle-fill" data-v-7944d902></i></li></ul>',1),ia={class:"main-panel shadow-sm"},la={class:"container-fluid"},ua={class:"row"},na={class:"col-12 p-lg-3 p-2 shadow-sm head-panel"},ca=se(()=>v("button",{class:"btn btn-lg p-1 py-0 d-md-none border-0","data-bs-toggle":"offcanvas","data-bs-target":"#startMobileOffcanvas","aria-controls":"startMobileOffcanvas"},[v("i",{class:"bi bi-justify fs-3"})],-1)),_a={key:0,class:"small fw-bold d-none d-md-inline"},sa={key:1,class:"badge bg-success-subtle text-success small"},va=se(()=>v("i",{class:"bi bi-check-circle"},null,-1)),oa={class:"float-end"},da=se(()=>v("span",{class:"me-3"},null,-1)),ra={key:0,class:"badge bg-success-subtle text-success small"},fa=se(()=>v("i",{class:"bi bi-check-circle"},null,-1)),ha={key:1,class:"badge bg-success-subtle text-danger small"},qa=se(()=>v("i",{class:"bi bi-check-circle"},null,-1)),ba={class:"mx-2 me-5 dropdown"},ma={"data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",class:"dropdown-toggle"},xa=se(()=>v("i",{class:"bi bi-person-circle"},null,-1)),pa=se(()=>v("i",{class:"bi bi-chevron-down"},null,-1)),Ca={class:"dropdown-menu dropdown-menu-start"},Oa=se(()=>v("i",{class:"bi bi-power"},null,-1)),Sa={class:"col-2 d-none d-md-block min-vh-100 sub-menu-panel"},Aa={class:"col-md-7 min-vh-100 sub-form-panel pt-4"},Fa={class:"car border-"},ka={class:"card-body pt-0 p-0 px-md-3"},wa={class:"col-3 d-none d-md-block min-vh-100 sub-info-panel p-3 pt-4 small"},La=nt({__name:"StartCompany_template",setup(h){pt(s=>({eab7ffb0:be(C).bgColor,"08a2bdc0":be(C).textColor}));const C=bt(),A=Ht(),m=Jt(),x=Qt(),a=Zt(),V=Ut(),_=Wt(),d=Ft(),l=mt();kt();const q=Ct(),p=lt(()=>{var b,o;return(o=(b=q.companyInProgress)==null?void 0:b.billing)==null?void 0:o.status}),F=lt(()=>{var b,o;return(o=(b=q.companyInProgress)==null?void 0:b.users)==null?void 0:o.kyc_status}),f=lt(()=>{var O;let s="",b="";const o=((O=q.companyInProgress)==null?void 0:O.names)??[];if(o){const r=o.find(u=>u.choice_level==1);r&&(s=r!=null&&r.eng_name?r.eng_name+" "+r.eng_prefix:"",b=r.chn_name?r.chn_name+""+r.chn_prefix:"")}return s+" "+b});async function k(){await A.clearLocalStorage(),await m.clearLocalStorage(),await x.clearLocalStorage(),await a.clearLocalStorage(),await V.clearLocalStorage(),await _.clearLocalStorage(),await q.clearLocalStorage(),await d.logout(),l.replace({name:"Login"})}return(s,b)=>{const o=ht("router-link"),O=ht("appModeToggler");return P(),ee(xt,null,[v("div",Xt,[v("ul",yt,[v("li",It,[Ge(o,{to:"/"},{default:rt(()=>[Pt]),_:1})]),v("li",ea,[Ge(o,{to:"/user/dashboard"},{default:rt(()=>[ta]),_:1})])]),aa]),v("div",ia,[v("div",la,[v("div",ua,[v("div",na,[ca,Ye(" Start your Company "),f.value?(P(),ee("span",_a," ("+ut(f.value)+") ",1)):it("",!0),p.value?(P(),ee("span",sa,[va,Ye(" Paid ")])):it("",!0),v("span",oa,[da,F.value?(P(),ee("span",ra,[fa,Ye(" Verified ")])):(P(),ee("span",ha,[qa,Ye(" Not-Verified ")])),v("span",ba,[v("span",ma,[xa,Ye(" "+ut(be(d).profileDataName)+" ",1),pa]),v("div",Ca,[v("span",{onClick:k,class:"dropdown-item text-danger"},[Oa,Ye(" Logout ")]),Ge(O,{class:"dropdown-item"})])])])]),v("div",Sa,[Ge(Ot)]),v("div",Aa,[v("div",Fa,[v("div",ka,[ft(s.$slots,"main",{},void 0,!0)])])]),v("div",wa,[ft(s.$slots,"info",{},void 0,!0)])])])]),Ge(Gt)],64)}}}),Ea=st(La,[["__scopeId","data-v-7944d902"]]);export{Ea as S,Wt as a,Zt as b,Ht as d,Ut as f,Jt as n,Qt as s};
