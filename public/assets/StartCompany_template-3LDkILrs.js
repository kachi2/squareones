import{d as st,K as mt,a as qt,z as it,o as I,c as P,G as xt,H as St,y as At,e as qe,f as Xe,t as ct,g as ut,L as pt,C as _t,D as vt,b as _,_ as ot,B as Ye,E as Je,I as t,r as rt,u as Ft,M as kt,s as nt,a0 as ft,j as wt,A as ht}from"./index-bJf0D_xI.js";import{u as Ct}from"./StartCompany_store-CCx21j_z.js";import{d as Lt}from"./index-CeG8Vrn-.js";import{u as Qe}from"./vee-validate.esm-CMb7uq2s.js";import{a as l,c as Ue,d as bt}from"./index.esm-DGkxqnDq.js";const gt="/icons/sidebar/vector-10.png",$t=f=>(_t("data-v-950ed8ab"),f=f(),vt(),f),Vt={class:"list-group list-group-flush mt-4"},Tt=["onClick"],Et={key:0},Nt={key:0,style:{"font-size":"10px"}},Bt=$t(()=>_("i",{class:"bi bi-check-circle text-primary"},null,-1)),Dt=[Bt],Mt=st({__name:"StartCompany_menulist",setup(f){pt(s=>({"2e34aad3":qe(A).textColor}));const A=mt(),L=qt(),x=Lt.useToast(),h=Ct();function a(s){const i=h.companyInProgress;if(console.log(i,"companies data"),s==10||s==11||s==12){x.info("You cannot access this page <br> here from here,complete all forms",{position:"top-right"});return}(s==10||s==11||s==12)&&(!i||!(i!=null&&i.description)||!i.company_entity.length||S.value||!i.fund_source||!i.activity)?x.info("You cannot access this page <br> here from here,complete all forms",{position:"top-right"}):(L.push({name:"Start"}),h.currentStage=s)}function $(s,i){var b;const v=h.companyInProgress;if(i!=5&&i!=6)return s instanceof Array?s==null?void 0:s.length:s!=null;if(i==6){if(v.company_entity.length)return!S.value}else{const C=((b=h.companyInProgress)==null?void 0:b.company_entity)??[],m=C.find(c=>c.entity_capacity_id.includes(2)&&c.entity_type_id==1);return!(!C.find(c=>c.entity_capacity_id.includes(1))||!m)}}const S=it(()=>{var b;const s=[];let i=!1;const v=((b=h.companyInProgress)==null?void 0:b.company_entity)??[];return v.length&&(v.forEach(m=>{const O=m.individual||m.corporate;m.entity_capacity_id.includes(1)&&s.push(O)}),i=!!s.find(m=>m.owner_shares==null)),i});return(s,i)=>(I(),P("ul",Vt,[(I(!0),P(xt,null,St(qe(h).menus,v=>{var b;return I(),P("li",{onClick:C=>a(v.stage),class:At(["list-group-item",{isActive:qe(h).isActiveMenu(v.stage)}])},[Xe(ct(v==null?void 0:v.name)+" ",1),qe(h).companyInProgress?(I(),P("span",Et,[$((b=qe(h))==null?void 0:b.companyInProgress[v.dataSource],v.stage)?(I(),P("small",Nt,Dt)):ut("",!0)])):ut("",!0)],10,Tt)}),256))]))}}),Ot=ot(Mt,[["__scopeId","data-v-950ed8ab"]]),Rt=f=>(_t("data-v-6bdd83b5"),f=f(),vt(),f),zt={class:"offcanvas offcanvas-start",tabindex:"-1",id:"startMobileOffcanvas","aria-labelledby":"startMobileOffcanvasLabel"},jt=Rt(()=>_("div",{class:"offcanvas-header"},[_("h5",{class:"offcanvas-title",id:"startMobileOffcanvasLabel"}," Menu "),_("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),Ht={class:"offcanvas-body"},Kt=st({__name:"StartCompany_mobilemenu",setup(f){return(A,L)=>(I(),P("div",zt,[jt,_("div",Ht,[Ye(Ot,{"data-bs-dismiss":"offcanvas"})])]))}}),Xt=ot(Kt,[["__scopeId","data-v-6bdd83b5"]]),Yt=Je("description",()=>{const f={description:l().min(150,"Description must be at least 150 characters long").required(),website:l(),business_nature_id:l().required("Please select a nature of business")},{errors:A,handleSubmit:L,defineField:x,setFieldValue:h,resetForm:a,validateField:$}=Qe({validationSchema:Ue(f)});function S(o){$(o)}const[s,i]=x("description"),[v,b]=x("website"),[C,m]=x("business_nature_id"),O=!1,c=t("squareOne-desc-desc",""),r=t("squareOne-desc-website",""),d=t("squareOne-desc-bNature","");function p(){c.value=s.value,r.value=v.value,d.value=C.value}function q(o){c.value.length>1?s.value=c.value:o!=null&&o.description&&(s.value=o.description),d.value?C.value=parseInt(d.value):o!=null&&o.business_nature_id&&(C.value=parseInt(o.business_nature_id)),r.value.length>1?v.value=r.value:o!=null&&o.website&&(v.value=o.website)}function u(){c.value="",r.value="",d.value=""}return{description:s,descriptiontAttr:i,business_nature_id:C,business_nature_idAttr:m,website:v,websiteAttr:b,isSaving:O,errors:A,handleSubmit:L,setFieldValue:h,updateFields:q,saveToLocalStorage:p,clearLocalStorage:u,resetForm:a,validateVueSelectOnBlur:S}}),Gt=Je("name",()=>{const f=t("name_isSecond",!1),A=t("name_isThird",!1),L=t("name_isForth",!1),x=t("name_isFifth",!1),h=e=>{var K=/^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;return K.test(e)},a=e=>{var K=/[\u4e00-\u9fa5]/;return!K.test(e)},$={choice_level1_eng_name:l().test("chineseChecks","Please input only English characters",a),choice_level2_eng_name:l().test("chineseChecks","Please input only English characters",a),choice_level3_eng_name:l().test("chineseChecks","Please input only English characters",a),choice_level4_eng_name:l().test("chineseChecks","Please input only English characters",a),choice_level5_eng_name:l().test("chineseChecks","Please input only English characters",a),choice_level1_chn_name:l().test("chineseCheck","Please input only Chinese characters",h),choice_level2_chn_name:l().test("chineseCheck","Please input only Chinese characters",h),choice_level3_chn_name:l().test("chineseCheck","Please input only Chinese characters",h),choice_level4_chn_name:l().test("chineseCheck","Please input only Chinese characters",h),choice_level5_chn_name:l().test("chineseCheck","Please input only Chinese characters",h)},{errors:S,handleSubmit:s,defineField:i,setFieldValue:v,resetForm:b,resetField:C,validateField:m}=Qe({validationSchema:Ue($),initialValues:{choice_level1_prefix:"Limited",choice_level1_chn_prefix:"有限公司",choice_level2_prefix:"Limited",choice_level2_chn_prefix:"有限公司",choice_level3_prefix:"Limited",choice_level3_chn_prefix:"有限公司",choice_level4_prefix:"Limited",choice_level4_chn_prefix:"有限公司",choice_level5_prefix:"Limited",choice_level5_chn_prefix:"有限公司"}});function O(e){m(e)}const[c,r]=i("choice_level1_eng_name"),[d]=i("choice_level1_chn_name"),[p]=i("choice_level1_prefix"),[q]=i("choice_level1_chn_prefix"),[u]=i("choice_level2_eng_name"),[o]=i("choice_level2_chn_name"),[F]=i("choice_level2_prefix"),[E]=i("choice_level2_chn_prefix"),[g]=i("choice_level3_eng_name"),[N]=i("choice_level3_chn_name"),[n]=i("choice_level3_prefix"),[T]=i("choice_level3_chn_prefix"),[k]=i("choice_level4_eng_name"),[X]=i("choice_level4_chn_name"),[B]=i("choice_level4_prefix"),[Y]=i("choice_level4_chn_prefix"),[V]=i("choice_level5_eng_name"),[G]=i("choice_level5_chn_name"),[w]=i("choice_level5_prefix"),[ve]=i("choice_level5_chn_prefix"),_e=!1,oe=t("squareOne-name-choice_level1_eng_name",""),j=t("squareOne-name-choice_level1_chn_name",""),de=t("squareOne-name-choice_level1_prefix",""),te=t("squareOne-name-choice_level1_chn_prefix",""),ae=t("squareOne-name-choice_level2_eng_name",""),le=t("squareOne-name-choice_level2_chn_name",""),ie=t("squareOne-name-choice_level2_prefix",""),ue=t("squareOne-name-choice_level2_chn_prefix",""),ne=t("squareOne-name-choice_level3_eng_name",""),re=t("squareOne-name-choice_level3_chn_name",""),D=t("squareOne-name-choice_level3_prefix",""),J=t("squareOne-name-choice_level3_chn_prefix",""),M=t("squareOne-name-choice_level4_eng_name",""),Q=t("squareOne-name-choice_level4_chn_name",""),R=t("squareOne-name-choice_level4_prefix",""),U=t("squareOne-name-choice_level4_chn_prefix",""),H=t("squareOne-name-choice_level5_eng_name",""),W=t("squareOne-name-choice_level5_chn_name",""),z=t("squareOne-name-choice_level5_prefix",""),Z=t("squareOne-name-choice_level5_chn_prefix","");function ce(){oe.value=c.value,j.value=d.value,de.value=p.value,te.value=q.value,ae.value=u.value,le.value=o.value,ie.value=F.value,ue.value=E.value,ne.value=g.value,re.value=N.value,D.value=n.value,J.value=T.value,M.value=k.value,Q.value=X.value,R.value=B.value,U.value=Y.value,H.value=V.value,W.value=G.value,z.value=w.value,Z.value=ve.value}function fe(e){var K,Ge,be,y,me,Ie,Pe,We,Ze,xe,pe,Ce,Oe,Se,Ae,Fe,ke,we,Le,ge,$e,Ve,Te,Ee,Ne,Be,De,Me,Re,ze,je,He,ye,Ke,et,tt,at,se,lt,dt;oe.value.length>1?c.value=oe.value:(K=e==null?void 0:e.names[0])!=null&&K.eng_name&&(c.value=(Ge=e==null?void 0:e.names[0])==null?void 0:Ge.eng_name),j.value.length>1?d.value=j.value:(be=e==null?void 0:e.names[0])!=null&&be.chn_eng_name&&(d.value=(y=e==null?void 0:e.names[0])==null?void 0:y.chn_eng_name),de.value.length>1?p.value=de.value:(me=e==null?void 0:e.names[0])!=null&&me.eng_prefix&&(p.value=(Ie=e==null?void 0:e.names[0])==null?void 0:Ie.eng_prefix),te.value.length>1?q.value=te.value:(Pe=e==null?void 0:e.names[0])!=null&&Pe.chn_prefix&&(q.value=(We=e==null?void 0:e.names[0])==null?void 0:We.chn_prefix),ae.value.length>1?u.value=ae.value:(Ze=e==null?void 0:e.names[1])!=null&&Ze.eng_name&&(u.value=(xe=e==null?void 0:e.names[1])==null?void 0:xe.eng_name),le.value.length>1?o.value=le.value:(pe=e==null?void 0:e.names[1])!=null&&pe.hn_name&&(o.value=(Ce=e==null?void 0:e.names[1])==null?void 0:Ce.chn_name),ie.value.length>1?F.value=ie.value:(Oe=e==null?void 0:e.names[1])!=null&&Oe.eng_prefix&&(F.value=(Se=e==null?void 0:e.names[1])==null?void 0:Se.eng_prefix),ue.value.length>1?E.value=ue.value:(Ae=e==null?void 0:e.names[1])!=null&&Ae.chn_prefix&&(E.value=(Fe=e==null?void 0:e.names[1])==null?void 0:Fe.chn_prefix),ne.value.length>1?g.value=ne.value:(ke=e==null?void 0:e.names[2])!=null&&ke.eng_name&&(g.value=(we=e==null?void 0:e.names[2])==null?void 0:we.eng_name),re.value.length>1?N.value=re.value:(Le=e==null?void 0:e.names[2])!=null&&Le.chn_name&&(N.value=(ge=e==null?void 0:e.names[2])==null?void 0:ge.chn_name),D.value.length>1?n.value=D.value:($e=e==null?void 0:e.names[2])!=null&&$e.eng_prefix&&(n.value=(Ve=e==null?void 0:e.names[2])==null?void 0:Ve.eng_prefix),J.value.length>1?T.value=J.value:(Te=e==null?void 0:e.names[2])!=null&&Te.chn_prefix&&(T.value=(Ee=e==null?void 0:e.names[2])==null?void 0:Ee.chn_prefix),M.value.length>1?k.value=M.value:(Ne=e==null?void 0:e.names[3])!=null&&Ne.eng_name&&(k.value=(Be=e==null?void 0:e.names[3])==null?void 0:Be.eng_name),Q.value.length>1?X.value=Q.value:(De=e==null?void 0:e.names[3])!=null&&De.chn_name&&(X.value=(Me=e==null?void 0:e.names[3])==null?void 0:Me.chn_name),R.value.length>1?B.value=R.value:(Re=e==null?void 0:e.names[3])!=null&&Re.eng_prefix&&(B.value=(ze=e==null?void 0:e.names[3])==null?void 0:ze.eng_prefix),U.value.length>1?Y.value=U.value:(je=e==null?void 0:e.names[3])!=null&&je.chn_prefix&&(Y.value=(He=e==null?void 0:e.names[3])==null?void 0:He.chn_prefix),H.value.length>1?V.value=H.value:(ye=e==null?void 0:e.names[3])!=null&&ye.eng_name&&(V.value=(Ke=e==null?void 0:e.names[3])==null?void 0:Ke.eng_name),W.value.length>1?G.value=W.value:(et=e==null?void 0:e.names[3])!=null&&et.chn_name&&(G.value=(tt=e==null?void 0:e.names[3])==null?void 0:tt.chn_name),z.value.length>1?w.value=z.value:(at=e==null?void 0:e.names[3])!=null&&at.eng_prefix&&(w.value=(se=e==null?void 0:e.names[3])==null?void 0:se.eng_prefix),Z.value.length>1?ve.value=Z.value:(lt=e==null?void 0:e.names[3])!=null&&lt.chn_prefix&&(ve.value=(dt=e==null?void 0:e.names[3])==null?void 0:dt.chn_prefix)}function he(){oe.value="",j.value="",de.value="",te.value="",ae.value="",le.value="",ie.value="",ue.value="",ne.value="",re.value="",D.value="",J.value="",M.value="",Q.value="",R.value="",U.value="",H.value="",W.value="",z.value="",Z.value="",f.value=!1,A.value=!1,L.value=!1,x.value=!1}return{choice_level1_eng_name:c,choice_level1_eng_nameAttr:r,choice_level1_chn_name:d,choice_level1_prefix:p,choice_level1_chn_prefix:q,choice_level2_eng_name:u,choice_level2_chn_name:o,choice_level2_prefix:F,choice_level2_chn_prefix:E,choice_level3_eng_name:g,choice_level3_chn_name:N,choice_level3_prefix:n,choice_level3_chn_prefix:T,choice_level4_eng_name:k,choice_level4_chn_name:X,choice_level4_prefix:B,choice_level4_chn_prefix:Y,choice_level5_eng_name:V,choice_level5_chn_name:G,choice_level5_prefix:w,choice_level5_chn_prefix:ve,isSecond:f,isThird:A,isForth:L,isFifth:x,isSaving:_e,errors:S,handleSubmit:s,setFieldValue:v,updateFields:fe,saveToLocalStorage:ce,resetForm:b,resetField:C,chineseCheck:h,clearLocalStorage:he,validateVueSelectOnBlur:O}}),Jt=Je("source",()=>{const f={income_expected_source:l().required("Required field"),origin_funds:l().required("Required field"),wealth_initial_source:l().required("Required field"),income_outgoing_source:l().required("Required field")},{errors:A,handleSubmit:L,defineField:x,setFieldValue:h,validateField:a}=Qe({validationSchema:Ue(f)});function $(u){a(u)}const[S,s]=x("income_expected_source"),[i]=x("origin_funds"),[v]=x("wealth_initial_source"),[b]=x("income_outgoing_source"),C=!1,m=t("squareOne-source-income_expected_source",""),O=t("squareOne-source-origin_funds",""),c=t("squareOne-source-wealth_initial_source",""),r=t("squareOne-source-income_outgoing_source","");function d(){m.value=S.value,O.value=i.value,c.value=v.value,r.value=b.value}function p(u){var o,F,E,g,N,n,T,k;m.value?S.value=m.value:(o=u==null?void 0:u.fund_source)!=null&&o.income_expected_source&&(S.value=(F=u==null?void 0:u.fund_source)==null?void 0:F.income_expected_source),O.value?i.value=O.value:(E=u==null?void 0:u.fund_source)!=null&&E.origin_funds&&(i.value=(g=u==null?void 0:u.fund_source)==null?void 0:g.origin_funds),c.value?v.value=c.value:(N=u==null?void 0:u.fund_source)!=null&&N.wealth_initial_source&&(v.value=(n=u==null?void 0:u.fund_source)==null?void 0:n.wealth_initial_source),r.value?b.value=r.value:(T=u==null?void 0:u.fund_source)!=null&&T.income_outgoing_source&&(b.value=(k=u==null?void 0:u.fund_source)==null?void 0:k.income_outgoing_source)}function q(){m.value="",O.value="",c.value="",r.value=""}return{income_expected_source:S,income_expected_sourceAttr:s,origin_funds:i,wealth_initial_source:v,income_outgoing_source:b,isSaving:C,errors:A,handleSubmit:L,setFieldValue:h,updateFields:p,saveToLocalStorage:d,clearLocalStorage:q,validateVueSelectOnBlur:$}}),Qt=Je("activities",()=>{const f={description:l().min(150,"Description must be at least 150 characters long").required(),activity_level:l().required("Please select an option"),activity_nature:l().required("Please select an option"),customer_location_operation:bt().required("Please select an option"),country:bt().required("Required field")},{errors:A,handleSubmit:L,defineField:x,setFieldValue:h,validateField:a}=Qe({validationSchema:Ue(f)});function $(n){a(n)}const[S,s]=x("description"),[i,v]=x("activity_level"),[b,C]=x("activity_nature"),[m,O]=x("customer_location_operation"),[c,r]=x("country"),d=!1,p=t("squareOne-activity-description",""),q=t("squareOne-activity-activity_level",""),u=t("squareOne-activity-activity_nature",""),o=t("squareOne-activity-activity-location",""),F=t("squareOne-activity-activity_nature-country","");function E(){p.value=S.value,q.value=i.value,u.value=b.value,o.value=m.value,F.value=c.value}function g(n){var T,k,X,B,Y,V,G;if(p.value?S.value=p.value:(T=n==null?void 0:n.activity)!=null&&T.description&&(S.value=n.activity.description),q.value?i.value=q.value:(k=n==null?void 0:n.activity)!=null&&k.activity_level&&(i.value=n.activity.activity_level),u.value?b.value=u.value:(X=n==null?void 0:n.activity)!=null&&X.activity_nature&&(b.value=n.activity.activity_nature),o.value)try{m.value=o.value.split(",")}catch{}else if((B=n==null?void 0:n.activity)!=null&&B.customer_location_operation){const w=((Y=n==null?void 0:n.activity)==null?void 0:Y.customer_location_operation)??"";m.value=w!==""?w.split(","):""}if(F.value)try{c.value=F.value.split(",")}catch{}else if((V=n==null?void 0:n.activity)!=null&&V.country){const w=((G=n==null?void 0:n.activity)==null?void 0:G.country)??"";c.value=w!==""?w.split(","):""}}function N(){p.value="",q.value="",u.value="",o.value="",F.value=""}return{description:S,descriptionAttr:s,activity_level:i,activity_levelAttr:v,activity_nature:b,activity_natureAttr:C,customer_location_operation:m,customer_location_operationAttr:O,country:c,countryAttr:r,isSaving:d,errors:A,handleSubmit:L,setFieldValue:h,updateFields:g,saveToLocalStorage:E,clearLocalStorage:N,validateVueSelectOnBlur:$}}),Ut=Je("foundersCorporate",()=>{const f=y=>{var me=/^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;return O.value?me.test(y):!0},A=y=>{var me=/[\u4e00-\u9fa5]/;return!me.test(y)},L={company_name:l().test("chineseChecks","Please input only English characters",A),chn_company_name:l().test("chineseCheck","Please input only Chinese characters",f),date_incorporated:l().required("Date incorporated is required"),registeration_no:l().required("Company registration number is required"),country_registered:l().required("Company date of registration is required"),business_nature_id:l().required("Business nature Id is required"),flat:l().required(" Flat is required"),building:l().nullable(),street:l().required(" Street is required"),state:l().required("State/City is required"),country:l().required("country is required"),first_name:l().required("First name is required"),last_name:l().required("Last name is requied"),phone:l().required("phone number is required"),email:l().email().required("Email is required"),confirm_email:l().email()},{errors:x,handleSubmit:h,defineField:a,setFieldValue:$,resetForm:S,validateField:s,resetField:i}=Qe({validationSchema:Ue(L)});function v(y){s(y)}const[b]=a("entity_type_id"),[C,m]=a("company_name"),[O,c]=a("chn_company_name"),[r,d]=a("date_incorporated"),[p,q]=a("flat"),[u,o]=a("building"),[F,E]=a("street"),[g,N]=a("state"),[n,T]=a("country"),[k,X]=a("registeration_no"),[B,Y]=a("is_founder"),[V,G]=a("country_registered"),[w,ve]=a("business_nature_id"),[_e,oe]=a("phone"),[j,de]=a("email"),[te,ae]=a("confirm_email"),[le,ie]=a("first_name"),[ue,ne]=a("last_name"),re=!1,D=t("squareOne-fCop-company_name",""),J=t("squareOne-fCop-chn_company_name",""),M=t("squareOne-fCop-flat",""),Q=t("squareOne-fCop-building",""),R=t("squareOne-fCop-street",""),U=t("squareOne-fCop-state",""),H=t("squareOne-fCop-country",""),W=t("squareOne-fCop-registeration_no",""),z=t("squareOne-fCop-country_registered",""),Z=t("squareOne-fCop-phone",""),ce=t("squareOne-fCop-email",""),fe=t("squareOne-fCop-confirm_email",""),he=t("squareOne-fCop-first_name",""),e=t("squareOne-fCop-last_name","");function K(){D.value=C.value,J.value=O.value,W.value=k.value,z.value=V.value,M.value=p.value,Q.value=u.value,R.value=F.value,U.value=g.value,Z.value=_e.value,ce.value=j.value,fe.value=te.value,he.value=le.value,e.value=ue.value}function Ge(y){M.value&&(p.value=M.value),Q.value&&(u.value=Q.value),R.value&&(F.value=R.value),U.value&&(g.value=U.value),H.value&&(n.value=H.value),Z.value&&(_e.value=Z.value),ce.value&&(j.value=ce.value),fe.value&&(te.value=fe.value),he.value&&(le.value=he.value),e.value&&(ue.value=e.value),D.value&&(C.value=D.value),J.value&&(O.value=J.value),W.value&&(k.value=W.value),z.value&&(V.value=z.value)}function be(){D.value="",J.value="",M.value="",Q.value="",R.value="",U.value="",H.value="",W.value="",z.value="",Z.value="",ce.value="",fe.value="",he.value="",e.value=""}return{entity_type_id:b,company_name:C,company_nameAttr:m,chn_company_name:O,chn_company_nameAttr:c,date_incorporated:r,date_incorporatedAttr:d,street:F,streetAttr:E,building:u,buildingAttr:o,flat:p,flatAttr:q,state:g,stateAttr:N,country:n,countryAttr:T,registeration_no:k,registeration_noAttr:X,is_founder:B,is_founderAttr:Y,country_registered:V,country_registeredAttr:G,business_nature_id:w,business_nature_idAttr:ve,phone:_e,phoneAttr:oe,email:j,emailAttr:de,confirm_email:te,confirm_emailAttr:ae,first_name:le,first_nameAttr:ie,last_name:ue,last_nameAttr:ne,isSaving:re,errors:x,handleSubmit:h,setFieldValue:$,updateFields:Ge,saveToLocalStorage:K,resetForm:S,clearLocalStorage:be,validateVueSelectOnBlur:v,resetField:i}}),Wt=Je("foundersIdividual",()=>{const f=se=>{var lt=/^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;return Ze.value?lt.test(se):!0},A=se=>We.value?!0:se!==void 0&&se!="",L={chn_first_name:l().test("chineseCheck","Please input only Chinese characters",f),chn_last_name:l().test("chineseCheck","Please input only Chinese characters",f),flat:l().required("Flat is required"),building:l().nullable(),street:l().required("Street is required"),state:l().required("State is required"),country:l().required("Country is required"),flat2:l().test("correspondingAddressCheck","This field is required",A),building2:l().nullable(),street2:l().test("correspondingAddressCheck","This field is required",A),state2:l().test("correspondingAddressCheck","This field is required",A),country2:l().test("correspondingAddressCheck","This field is required",A),phone:l().required("Phone is required"),email:l().email().required("Email is required"),confirm_email:l().required("Email is required"),first_name:l().required("First Name is required"),last_name:l().required("Last Name is required"),nationality:l().required(),occupation:l().required("Occupation is required"),identity_type_id:l().required("ID type is required"),identity_no:l(),identity_no_suffix:l(),passport_no:l(),dob:l().required("Date of birth is required")},{errors:x,handleSubmit:h,defineField:a,setFieldValue:$,resetForm:S,validateField:s,resetField:i}=Qe({validationSchema:Ue(L)});function v(se){s(se)}const[b]=a("entity_type_id"),[C,m]=a("flat"),[O,c]=a("building"),[r,d]=a("street"),[p,q]=a("state"),[u,o]=a("country"),[F,E]=a("postal_code"),[g,N]=a("identity_no_suffix"),[n,T]=a("flat2"),[k,X]=a("building2"),[B,Y]=a("street2"),[V,G]=a("state2"),[w,ve]=a("country2"),[_e,oe]=a("postal_code2"),[j,de]=a("registeration_no"),[te]=a("is_founder"),[ae,le]=a("phone"),[ie,ue]=a("email"),[ne,re]=a("confirm_email"),[D,J]=a("first_name"),[M,Q]=a("last_name"),[R,U]=a("chn_first_name"),[H,W]=a("chn_last_name"),[z,Z]=a("nationality"),[ce,fe]=a("occupation"),[he,e]=a("identity_type_id"),[K,Ge]=a("identity_no"),[be,y]=a("passport_no"),[me,Ie]=a("dob"),Pe=!1,We=rt(!1),Ze=rt(!1),xe=t("squareOne-fInd-flat",""),pe=t("squareOne-fInd-building",""),Ce=t("squareOne-fInd-street",""),Oe=t("squareOne-fInd-state",""),Se=t("squareOne-fInd-country",""),Ae=t("squareOne-fInd-postal_code",""),Fe=t("squareOne-fInd-flat2",""),ke=t("squareOne-fInd-building2",""),we=t("squareOne-fInd-street2",""),Le=t("squareOne-fInd-state2",""),ge=t("squareOne-fInd-country2",""),$e=t("squareOne-fInd-postal_code2",""),Ve=t("squareOne-fInd-issuing_country",""),Te=t("squareOne-fInd-phone",""),Ee=t("squareOne-fInd-email",""),Ne=t("squareOne-fInd-confirm_email",""),Be=t("squareOne-fInd-first_name",""),De=t("squareOne-fInd-last_name",""),Me=t("squareOne-fInd-chn_first_name"," "),Re=t("squareOne-fInd-chn_last_name"," "),ze=t("squareOne-fInd-nationality",""),je=t("squareOne-fInd-occupation",""),He=t("squareOne-fInd-identity_no",""),ye=t("squareOne-fInd-identity_no_suffix",""),Ke=t("squareOne-fInd-passport_no","");function et(){xe.value=C.value,pe.value=O.value,Ce.value=r.value,Oe.value=p.value,Se.value=u.value,Ae.value=F.value,Fe.value=n.value,ke.value=k.value,we.value=B.value,Le.value=V.value,ge.value=w.value,$e.value=_e.value,ye.value=g.value,Ve.value=j.value,Te.value=ae.value,Ee.value=ie.value,Ne.value=ne.value,Be.value=D.value,De.value=M.value,Me.value=R.value,Re.value=H.value,ze.value=z.value,je.value=ce.value,He.value=K.value,Ke.value=be.value}function tt(se){xe.value&&(C.value=xe.value),pe.value&&(O.value=pe.value),Ce.value&&(r.value=Ce.value),Oe.value&&(p.value=Oe.value),Se.value&&(u.value=Se.value),Ae.value&&(F.value=Ae.value),Fe.value&&(n.value=Fe.value),ke.value&&(k.value=ke.value),we.value&&(B.value=we.value),Le.value&&(V.value=Le.value),ge.value&&(w.value=ge.value),$e.value&&(_e.value=$e.value),Ve.value&&(j.value=Ve.value),Te.value&&(ae.value=Te.value),Ee.value&&(ie.value=Ee.value),Ne.value&&(ne.value=Ne.value),Be.value&&(D.value=Be.value),De.value&&(M.value=De.value),Me.value&&(R.value=Me.value),Re.value&&(H.value=Re.value),ze.value&&(z.value=ze.value),je.value&&(ce.value=je.value),He.value&&(K.value=He.value),Ke.value&&(be.value=Ke.value)}function at(){xe.value="",pe.value="",Ce.value="",Oe.value="",Se.value="",Ae.value="",ye.value="",Fe.value="",ke.value="",we.value="",Le.value="",ge.value="",$e.value="",Ve.value="",Te.value="",Ee.value="",Ne.value="",Be.value="",De.value="",Me.value="",Re.value="",ze.value="",je.value="",He.value="",Ke.value=""}return{entity_type_id:b,flat:C,flatAttr:m,building:O,buildingAttr:c,street:r,streetAttr:d,state:p,stateAttr:q,postal_code:F,postal_codeAttr:E,country:u,countryAttr:o,flat2:n,flat2Attr:T,building2:k,building2Attr:X,street2:B,street2Attr:Y,state2:V,state2Attr:G,postal_code2:_e,postal_code2Attr:oe,country2:w,country2Attr:ve,first_name:D,first_nameAttr:J,last_name:M,last_nameAttr:Q,chn_first_name:R,chn_first_nameAttr:U,chn_last_name:H,chn_last_nameAttr:W,dob:me,dobAttr:Ie,nationality:z,nationalityAttr:Z,phone:ae,phoneAttr:le,email:ie,emailAttr:ue,confirm_email:ne,confirm_emailAttr:re,occupation:ce,occupationAttr:fe,identity_no:K,identity_noAttr:Ge,identity_no_suffix:g,identity_no_suffixAttr:N,passport_no:be,passport_noAttr:y,issuing_country:j,issuing_countryAttr:de,is_founder:te,identity_type_id:he,identity_type_idAttr:e,isSaving:Pe,correspondingAddressIsSame:We,hasChineseName:Ze,errors:x,handleSubmit:h,setFieldValue:$,updateFields:tt,clearLocalStorage:at,saveToLocalStorage:et,resetForm:S,validateVueSelectOnBlur:v,resetField:i}}),ee=f=>(_t("data-v-35233b48"),f=f(),vt(),f),Zt={class:"side-panel"},yt={class:"list-group list-group-flush mt-4"},It={class:"list-group-item border-0 bg-transparent"},Pt=ee(()=>_("img",{src:gt,alt:""},null,-1)),ea={class:"list-group-item border-0 bg-transparent"},ta=ee(()=>_("i",{class:"bi bi-grid me-2 mode"},null,-1)),aa=wt('<ul class="list-group list-group-flush" style="margin-top:120px;" data-v-35233b48><li class="list-group-item border-0 bg-transparent" data-v-35233b48><i class="bi bi-gear mode" data-v-35233b48></i></li><li class="list-group-item border-0 bg-transparent" data-v-35233b48><i class="bi bi-cash-stack mode" data-v-35233b48></i></li><li class="list-group-item border-0 bg-transparent" data-v-35233b48><i class="bi bi-question-circle-fill" data-v-35233b48></i></li></ul>',1),la={class:"main-panel shadow-sm"},ia={class:"container-fluid"},ua={class:"row"},na={class:"col-12 p-lg-3 p-2 shadow-sm head-panel"},ca=ee(()=>_("button",{class:"btn btn-lg p-1 py-0 d-md-none border-0","data-bs-toggle":"offcanvas","data-bs-target":"#startMobileOffcanvas","aria-controls":"startMobileOffcanvas"},[_("i",{class:"bi bi-justify fs-3"})],-1)),sa=ee(()=>_("button",{style:{padding:"0px 8px",margin:"5px",border:"0px solid #eee",color:"#888",background:"#fff"}},[_("span",{style:{"font-size":"20px"}},"X ")],-1)),_a={key:0,class:"small fw-bold d-none d-md-inline"},va={key:1,class:"badge bg-success-subtle text-success small"},oa=ee(()=>_("i",{class:"bi bi-check-circle"},null,-1)),da={class:"float-end"},ra=ee(()=>_("span",{class:"me-3"},null,-1)),fa={key:0,class:"badge bg-success-subtle text-success small"},ha=ee(()=>_("i",{class:"bi bi-check-circle"},null,-1)),ba={key:1,class:"badge bg-success-subtle text-danger small"},ma=ee(()=>_("i",{class:"bi bi-check-circle"},null,-1)),qa={class:"mx-2 me-5 dropdown"},xa={"data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",class:"dropdown-toggle"},pa=ee(()=>_("i",{class:"bi bi-person-circle"},null,-1)),Ca=ee(()=>_("i",{class:"bi bi-chevron-down"},null,-1)),Oa={class:"dropdown-menu dropdown-menu-start"},Sa=ee(()=>_("i",{class:"bi bi-power"},null,-1)),Aa={class:"col-2 d-none d-md-block min-vh-100 sub-menu-panel"},Fa={class:"col-md-7 min-vh-100 sub-form-panel pt-2 d-flex justify-content-center"},ka={class:"car border- middle-panel-fixed-size"},wa={class:"card-bod pt-0 p-0 px-md-3"},La={class:"col-3 d-none d-md-block min-vh-100 sub-info-panel p-3 pt-4 small",style:{"max-width":"400px"}},ga=st({__name:"StartCompany_template",setup(f){pt(c=>({"0c8ec54b":qe(A).bgColor,"8a1e73ba":qe(A).textColor}));const A=mt(),L=Yt(),x=Gt(),h=Jt(),a=Qt(),$=Ut(),S=Wt(),s=Ft(),i=qt();kt();const v=Ct(),b=it(()=>{var r,d;return(d=(r=v.companyInProgress)==null?void 0:r.billing)==null?void 0:d.status}),C=it(()=>{var r,d;return(d=(r=v.companyInProgress)==null?void 0:r.users)==null?void 0:d.kyc_status}),m=it(()=>{var p;let c="",r="";const d=((p=v.companyInProgress)==null?void 0:p.names)??[];if(d){const q=d.find(u=>u.choice_level==1);q&&(c=q!=null&&q.eng_name?q.eng_name+" "+q.eng_prefix:"",r=q.chn_name?q.chn_name+""+q.chn_prefix:"")}return c+" "+r});async function O(){await L.clearLocalStorage(),await x.clearLocalStorage(),await h.clearLocalStorage(),await a.clearLocalStorage(),await $.clearLocalStorage(),await S.clearLocalStorage(),await v.clearLocalStorage(),await s.logout(),i.replace({name:"Login"})}return(c,r)=>{const d=ht("router-link"),p=ht("appModeToggler");return I(),P(xt,null,[_("div",Zt,[_("ul",yt,[_("li",It,[Ye(d,{to:"/"},{default:nt(()=>[Pt]),_:1})]),_("li",ea,[Ye(d,{to:"/user/dashboard"},{default:nt(()=>[ta]),_:1})])]),aa]),_("div",la,[_("div",ia,[_("div",ua,[_("div",na,[ca,Ye(d,{to:"/user/dashboard"},{default:nt(()=>[sa]),_:1}),Xe(" Start your Company "),m.value?(I(),P("span",_a," ("+ct(m.value)+") ",1)):ut("",!0),b.value?(I(),P("span",va,[oa,Xe(" Paid ")])):ut("",!0),_("span",da,[ra,C.value?(I(),P("span",fa,[ha,Xe(" Verified ")])):(I(),P("span",ba,[ma,Xe(" Not-Verified ")])),_("span",qa,[_("span",xa,[pa,Xe(" "+ct(qe(s).profileDataName)+" ",1),Ca]),_("div",Oa,[_("span",{onClick:O,class:"dropdown-item text-danger"},[Sa,Xe(" Logout ")]),Ye(p,{class:"dropdown-item"})])])])]),_("div",Aa,[Ye(Ot)]),_("div",Fa,[_("div",ka,[_("div",wa,[ft(c.$slots,"main",{},void 0,!0)])])]),_("div",La,[ft(c.$slots,"info",{},void 0,!0)])])])]),Ye(Xt)],64)}}}),Ba=ot(ga,[["__scopeId","data-v-35233b48"]]);export{Ba as S,Wt as a,Qt as b,Yt as d,Ut as f,Gt as n,Jt as s};
