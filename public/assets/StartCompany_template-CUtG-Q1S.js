import{_ as qt,a as mt,b as xt,c as pt}from"./message-question-CA_-JqIH.js";import{u as dt}from"./StartCompany_store-BH1WbpVw.js";import{d as gt}from"./index-BgZcLyqP.js";import{d as De,j as ft,o as Q,c as G,L as rt,M as Ot,x as Ct,b as Se,e as be,t as Ae,f as Te,I as Ne,J as Me,a as o,_ as Be,B as Fe,C as pe,Q as t,r as _t,u as St,z as Ve,s as vt,S as st,h as ht,O as Ft,A as wt}from"./index-C4Vmq7nK.js";import{a as l,u as ge,c as Oe,b as ot}from"./index.esm-DoI1gxW3.js";const kt="/icons/sidebar/vector-10.png",Lt="/icons/sidebar/grid-four.png",$t="/icons/sidebar/main-component.png",Tt="/icons/sidebar/document-upload.png",Vt="/icons/sidebar/people.png",At=b=>(Ne("data-v-44b10799"),b=b(),Me(),b),Dt={class:"list-group list-group-flush mt-4"},Nt=["onClick"],Mt={key:0},Bt={key:0,style:{"font-size":"10px"}},Et=At(()=>o("i",{class:"bi bi-check-circle text-primary"},null,-1)),Kt=[Et],Rt=De({__name:"StartCompany_menulist",setup(b){const g=ft(),k=gt.useToast(),u=dt();function F(a){const v=u.companyInProgress;a==11||a==12?k.info("You cannot access this page <br> here from here,complete all forms",{position:"top-right"}):(a===10||a==11||a==12)&&(!v||!(v!=null&&v.description)||!(v!=null&&v.address)||!v.company_entity.length||!v.owner_share.length||!v.fund_source.length||!v.activity)?k.info("You cannot access this page <br> here from here,complete all forms",{position:"top-right"}):(g.push({name:"Start"}),u.currentStage=a)}function m(a,v){var i;if(v!=5)return a instanceof Array?a==null?void 0:a.length:a!=null;{const f=((i=u.companyInProgress)==null?void 0:i.company_entity)??[],q=f.find(s=>s.entity_capacity_id.includes(2)&&s.entity_type_id==1);return!(!f.find(s=>s.entity_capacity_id.includes(1))||!q)}}return(a,v)=>(Q(),G("ul",Dt,[(Q(!0),G(rt,null,Ot(Se(u).menus,i=>{var f;return Q(),G("li",{onClick:q=>F(i.stage),class:Ct(["list-group-item",{isActive:Se(u).isActiveMenu(i.stage)}])},[be(Ae(i==null?void 0:i.name)+" ",1),Se(u).companyInProgress?(Q(),G("span",Mt,[m((f=Se(u))==null?void 0:f.companyInProgress[i.dataSource],i.stage)?(Q(),G("small",Bt,Kt)):Te("",!0)])):Te("",!0)],10,Nt)}),256))]))}}),bt=Be(Rt,[["__scopeId","data-v-44b10799"]]),Ht=b=>(Ne("data-v-6bdd83b5"),b=b(),Me(),b),zt={class:"offcanvas offcanvas-start",tabindex:"-1",id:"startMobileOffcanvas","aria-labelledby":"startMobileOffcanvasLabel"},Yt=Ht(()=>o("div",{class:"offcanvas-header"},[o("h5",{class:"offcanvas-title",id:"startMobileOffcanvasLabel"}," Menu "),o("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),jt={class:"offcanvas-body"},Jt=De({__name:"StartCompany_mobilemenu",setup(b){return(g,k)=>(Q(),G("div",zt,[Yt,o("div",jt,[Fe(bt,{"data-bs-dismiss":"offcanvas"})])]))}}),Qt=Be(Jt,[["__scopeId","data-v-6bdd83b5"]]),Gt=pe("description",()=>{const b={description:l().min(150,"Description must be at least 150 characters long").required(),website:l(),business_nature_id:l().required("Please select a nature of business")},{errors:g,handleSubmit:k,defineField:u,setFieldValue:F}=ge({validationSchema:Oe(b)}),[m]=u("description"),[a]=u("website"),[v]=u("business_nature_id"),i=!1,f=t("squareOne-desc-desc",""),q=t("squareOne-desc-website",""),r=t("squareOne-desc-bNature","");function s(){m.value&&(f.value=m.value),a.value&&(q.value=a.value),v.value&&(r.value=v.value)}function h(n){f.value.length>1?m.value=f.value:n!=null&&n.description&&(m.value=n.description),r.value?v.value=parseInt(r.value):n!=null&&n.business_nature_id&&(v.value=parseInt(n.business_nature_id)),q.value.length>1?a.value=q.value:n!=null&&n.website&&(a.value=n.website)}function d(){f.value="",q.value="",r.value=""}return{description:m,business_nature_id:v,website:a,isSaving:i,errors:g,handleSubmit:k,setFieldValue:F,updateFields:h,saveToLocalStorage:s,clearLocalStorage:d}}),Ut=pe("name",()=>{const b=t("name_isSecond",!1),g=t("name_isThird",!1),k=t("name_isForth",!1),u=t("name_isFifth",!1),F=e=>{var ue=/^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;return ue.test(e)},m={choice_level1_chn_name:l().test("chineseCheck","Please input only Chinese characters",F),choice_level2_chn_name:l().test("chineseCheck","Please input only Chinese characters",F),choice_level3_chn_name:l().test("chineseCheck","Please input only Chinese characters",F),choice_level4_chn_name:l().test("chineseCheck","Please input only Chinese characters",F),choice_level5_chn_name:l().test("chineseCheck","Please input only Chinese characters",F),choice_level1_eng_name:l(),choice_level2_eng_name:l(),choice_level3_eng_name:l(),choice_level4_eng_name:l(),choice_level5_eng_name:l()},{errors:a,handleSubmit:v,defineField:i,setFieldValue:f,resetForm:q,resetField:r}=ge({validationSchema:Oe(m),initialValues:{choice_level1_prefix:"Limited",choice_level1_chn_prefix:"有限公司",choice_level2_prefix:"Limited",choice_level2_chn_prefix:"有限公司",choice_level3_prefix:"Limited",choice_level3_chn_prefix:"有限公司",choice_level4_prefix:"Limited",choice_level4_chn_prefix:"有限公司",choice_level5_prefix:"Limited",choice_level5_chn_prefix:"有限公司"}}),[s]=i("choice_level1_eng_name"),[h]=i("choice_level1_chn_name"),[d]=i("choice_level1_prefix"),[n]=i("choice_level1_chn_prefix"),[x]=i("choice_level2_eng_name"),[c]=i("choice_level2_chn_name"),[p]=i("choice_level2_prefix"),[_]=i("choice_level2_chn_prefix"),[O]=i("choice_level3_eng_name"),[L]=i("choice_level3_chn_name"),[C]=i("choice_level3_prefix"),[S]=i("choice_level3_chn_prefix"),[$]=i("choice_level4_eng_name"),[T]=i("choice_level4_chn_name"),[V]=i("choice_level4_prefix"),[w]=i("choice_level4_chn_prefix"),[A]=i("choice_level5_eng_name"),[D]=i("choice_level5_chn_name"),[N]=i("choice_level5_prefix"),[M]=i("choice_level5_chn_prefix"),H=!1,B=t("squareOne-name-choice_level1_eng_name",""),E=t("squareOne-name-choice_level1_chn_name",""),z=t("squareOne-name-choice_level1_prefix",""),K=t("squareOne-name-choice_level1_chn_prefix",""),R=t("squareOne-name-choice_level2_eng_name",""),Y=t("squareOne-name-choice_level2_chn_name",""),j=t("squareOne-name-choice_level2_prefix",""),W=t("squareOne-name-choice_level2_chn_prefix",""),X=t("squareOne-name-choice_level3_eng_name",""),J=t("squareOne-name-choice_level3_chn_name",""),U=t("squareOne-name-choice_level3_prefix",""),Z=t("squareOne-name-choice_level3_chn_prefix",""),y=t("squareOne-name-choice_level4_eng_name",""),I=t("squareOne-name-choice_level4_chn_name",""),P=t("squareOne-name-choice_level4_prefix",""),ee=t("squareOne-name-choice_level4_chn_prefix",""),te=t("squareOne-name-choice_level5_eng_name",""),ae=t("squareOne-name-choice_level5_chn_name",""),le=t("squareOne-name-choice_level5_prefix",""),ie=t("squareOne-name-choice_level5_chn_prefix","");function qe(){s.value&&(B.value=s.value),h.value&&(E.value=h.value),d.value&&(z.value=d.value),n.value&&(K.value=n.value),x.value&&(R.value=x.value),c.value&&(Y.value=c.value),p.value&&(j.value=p.value),_.value&&(W.value=_.value),O.value&&(X.value=O.value),L.value&&(J.value=L.value),C.value&&(U.value=C.value),S.value&&(Z.value=S.value),$.value&&(y.value=$.value),T.value&&(I.value=T.value),V.value&&(P.value=V.value),w.value&&(ee.value=w.value),A.value&&(te.value=A.value),D.value&&(ae.value=D.value),N.value&&(le.value=N.value),M.value&&(ie.value=M.value)}function me(e){var ue,_e,ve,se,oe,de,fe,re,Ce,he,we,ke,Le,ce,$e,Ee,Ke,Re,He,ze,Ye,je,Je,Qe,Ge,Ue,We,Xe,Ze,ye,Ie,Pe,et,tt,at,lt,it,ut,nt,ct;B.value.length>1?s.value=B.value:(ue=e==null?void 0:e.names[0])!=null&&ue.eng_name&&(s.value=(_e=e==null?void 0:e.names[0])==null?void 0:_e.eng_name),E.value.length>1?h.value=E.value:(ve=e==null?void 0:e.names[0])!=null&&ve.chn_eng_name&&(h.value=(se=e==null?void 0:e.names[0])==null?void 0:se.chn_eng_name),z.value.length>1?d.value=z.value:(oe=e==null?void 0:e.names[0])!=null&&oe.eng_prefix&&(d.value=(de=e==null?void 0:e.names[0])==null?void 0:de.eng_prefix),K.value.length>1?n.value=K.value:(fe=e==null?void 0:e.names[0])!=null&&fe.chn_prefix&&(n.value=(re=e==null?void 0:e.names[0])==null?void 0:re.chn_prefix),R.value.length>1?x.value=R.value:(Ce=e==null?void 0:e.names[1])!=null&&Ce.eng_name&&(x.value=(he=e==null?void 0:e.names[1])==null?void 0:he.eng_name),Y.value.length>1?c.value=Y.value:(we=e==null?void 0:e.names[1])!=null&&we.hn_name&&(c.value=(ke=e==null?void 0:e.names[1])==null?void 0:ke.chn_name),j.value.length>1?p.value=j.value:(Le=e==null?void 0:e.names[1])!=null&&Le.eng_prefix&&(p.value=(ce=e==null?void 0:e.names[1])==null?void 0:ce.eng_prefix),W.value.length>1?_.value=W.value:($e=e==null?void 0:e.names[1])!=null&&$e.chn_prefix&&(_.value=(Ee=e==null?void 0:e.names[1])==null?void 0:Ee.chn_prefix),X.value.length>1?O.value=X.value:(Ke=e==null?void 0:e.names[2])!=null&&Ke.eng_name&&(O.value=(Re=e==null?void 0:e.names[2])==null?void 0:Re.eng_name),J.value.length>1?L.value=J.value:(He=e==null?void 0:e.names[2])!=null&&He.chn_name&&(L.value=(ze=e==null?void 0:e.names[2])==null?void 0:ze.chn_name),U.value.length>1?C.value=U.value:(Ye=e==null?void 0:e.names[2])!=null&&Ye.eng_prefix&&(C.value=(je=e==null?void 0:e.names[2])==null?void 0:je.eng_prefix),Z.value.length>1?S.value=Z.value:(Je=e==null?void 0:e.names[2])!=null&&Je.chn_prefix&&(S.value=(Qe=e==null?void 0:e.names[2])==null?void 0:Qe.chn_prefix),y.value.length>1?$.value=y.value:(Ge=e==null?void 0:e.names[3])!=null&&Ge.eng_name&&($.value=(Ue=e==null?void 0:e.names[3])==null?void 0:Ue.eng_name),I.value.length>1?T.value=I.value:(We=e==null?void 0:e.names[3])!=null&&We.chn_name&&(T.value=(Xe=e==null?void 0:e.names[3])==null?void 0:Xe.chn_name),P.value.length>1?V.value=P.value:(Ze=e==null?void 0:e.names[3])!=null&&Ze.eng_prefix&&(V.value=(ye=e==null?void 0:e.names[3])==null?void 0:ye.eng_prefix),ee.value.length>1?w.value=ee.value:(Ie=e==null?void 0:e.names[3])!=null&&Ie.chn_prefix&&(w.value=(Pe=e==null?void 0:e.names[3])==null?void 0:Pe.chn_prefix),te.value.length>1?A.value=te.value:(et=e==null?void 0:e.names[3])!=null&&et.eng_name&&(A.value=(tt=e==null?void 0:e.names[3])==null?void 0:tt.eng_name),ae.value.length>1?D.value=ae.value:(at=e==null?void 0:e.names[3])!=null&&at.chn_name&&(D.value=(lt=e==null?void 0:e.names[3])==null?void 0:lt.chn_name),le.value.length>1?N.value=le.value:(it=e==null?void 0:e.names[3])!=null&&it.eng_prefix&&(N.value=(ut=e==null?void 0:e.names[3])==null?void 0:ut.eng_prefix),ie.value.length>1?M.value=ie.value:(nt=e==null?void 0:e.names[3])!=null&&nt.chn_prefix&&(M.value=(ct=e==null?void 0:e.names[3])==null?void 0:ct.chn_prefix)}function xe(){B.value="",E.value="",z.value="",K.value="",R.value="",Y.value="",j.value="",W.value="",X.value="",J.value="",U.value="",Z.value="",y.value="",I.value="",P.value="",ee.value="",te.value="",ae.value="",le.value="",ie.value="",b.value=!1,g.value=!1,k.value=!1,u.value=!1}return{choice_level1_eng_name:s,choice_level1_chn_name:h,choice_level1_prefix:d,choice_level1_chn_prefix:n,choice_level2_eng_name:x,choice_level2_chn_name:c,choice_level2_prefix:p,choice_level2_chn_prefix:_,choice_level3_eng_name:O,choice_level3_chn_name:L,choice_level3_prefix:C,choice_level3_chn_prefix:S,choice_level4_eng_name:$,choice_level4_chn_name:T,choice_level4_prefix:V,choice_level4_chn_prefix:w,choice_level5_eng_name:A,choice_level5_chn_name:D,choice_level5_prefix:N,choice_level5_chn_prefix:M,isSecond:b,isThird:g,isForth:k,isFifth:u,isSaving:H,errors:a,handleSubmit:v,setFieldValue:f,updateFields:me,saveToLocalStorage:qe,resetForm:q,resetField:r,chineseCheck:F,clearLocalStorage:xe}}),Wt=pe("source",()=>{const b={income_expected_source:l().required("Required field"),origin_funds:l().required("Required field"),wealth_initial_source:l().required("Required field"),income_outgoing_source:l().required("Required field")},{errors:g,handleSubmit:k,defineField:u,setFieldValue:F}=ge({validationSchema:Oe(b)}),[m]=u("income_expected_source"),[a]=u("origin_funds"),[v]=u("wealth_initial_source"),[i]=u("income_outgoing_source"),f=!1,q=t("squareOne-source-income_expected_source",""),r=t("squareOne-source-origin_funds",""),s=t("squareOne-source-wealth_initial_source",""),h=t("squareOne-source-income_outgoing_source","");function d(){m.value&&(q.value=m.value),a.value&&(r.value=a.value),v.value&&(s.value=v.value),i.value&&(h.value=i.value)}function n(c){var p,_,O,L,C,S,$,T;q.value?m.value=q.value:(p=c==null?void 0:c.fund_source)!=null&&p.income_expected_source&&(m.value=(_=c==null?void 0:c.fund_source)==null?void 0:_.income_expected_source),r.value?a.value=r.value:(O=c==null?void 0:c.fund_source)!=null&&O.origin_funds&&(a.value=(L=c==null?void 0:c.fund_source)==null?void 0:L.origin_funds),s.value?v.value=s.value:(C=c==null?void 0:c.fund_source)!=null&&C.wealth_initial_source&&(v.value=(S=c==null?void 0:c.fund_source)==null?void 0:S.wealth_initial_source),h.value?i.value=h.value:($=c==null?void 0:c.fund_source)!=null&&$.income_outgoing_source&&(i.value=(T=c==null?void 0:c.fund_source)==null?void 0:T.income_outgoing_source)}function x(){q.value="",r.value="",s.value="",h.value=""}return{income_expected_source:m,origin_funds:a,wealth_initial_source:v,income_outgoing_source:i,isSaving:f,errors:g,handleSubmit:k,setFieldValue:F,updateFields:n,saveToLocalStorage:d,clearLocalStorage:x}}),Xt=pe("activities",()=>{const b={description:l().min(150,"Description must be at least 150 characters long").required(),activity_level:l().required("Please select an option"),activity_nature:l().required("Please select an option"),customer_location_operation:ot().required("Please select an option"),country:ot().required("Required field")},{errors:g,handleSubmit:k,defineField:u,setFieldValue:F}=ge({validationSchema:Oe(b)}),[m]=u("description"),[a]=u("activity_level"),[v]=u("activity_nature"),[i]=u("customer_location_operation"),[f]=u("country"),q=!1,r=t("squareOne-activity-description",""),s=t("squareOne-activity-activity_level",""),h=t("squareOne-activity-activity_nature",""),d=t("squareOne-activity-activity-location",""),n=t("squareOne-activity-activity_nature-country","");function x(){m.value&&(r.value=m.value),a.value&&(s.value=a.value),v.value&&(h.value=v.value),i.value&&(d.value=i.value),f.value&&(n.value=f.value)}function c(_){var O,L,C,S,$,T,V;if(r.value.length>1?m.value=r.value:(O=_==null?void 0:_.activity)!=null&&O.description&&(m.value=_.activity.description),s.value?a.value=s.value:(L=_==null?void 0:_.activity)!=null&&L.activity_level&&(a.value=_.activity.activity_level),h.value?v.value=h.value:(C=_==null?void 0:_.activity)!=null&&C.activity_nature&&(v.value=_.activity.activity_nature),d.value)try{i.value=d.value.split(",")}catch{}else if((S=_==null?void 0:_.activity)!=null&&S.customer_location_operation){const w=(($=_==null?void 0:_.activity)==null?void 0:$.customer_location_operation)??"";i.value=w!==""?w.split(","):""}if(n.value)try{f.value=n.value.split(",")}catch{}else if((T=_==null?void 0:_.activity)!=null&&T.country){const w=((V=_==null?void 0:_.activity)==null?void 0:V.country)??"";f.value=w!==""?w.split(","):""}}function p(){r.value="",s.value="",h.value="",d.value="",n.value=""}return{description:m,activity_level:a,activity_nature:v,customer_location_operation:i,country:f,isSaving:q,errors:g,handleSubmit:k,setFieldValue:F,updateFields:c,saveToLocalStorage:x,clearLocalStorage:p}}),Zt=pe("foundersCorporate",()=>{const b={company_name:l(),date_incorporated:l().required("Date incorporated is required"),registeration_no:l().required("Company registration number is required"),country_registered:l().required("Company date of registration is required"),business_nature_id:l().required("Business nature Id is required"),flat:l().required(" Flat is required"),building:l().required(" building is required "),street:l().required(" Street is required"),state:l().required("State/City is required"),country:l().required("country is required"),first_name:l().required("First name is required"),last_name:l().required("Last name is requied"),phone:l().required("phone number is required"),email:l().email().required("Email is required"),confirm_email:l().email()},{errors:g,handleSubmit:k,defineField:u,setFieldValue:F,resetForm:m}=ge({validationSchema:Oe(b),initialValues:{date_incorporated:new Date("2006-5-4"),entity_type_id:"2",country:"Hong Kong",country_registered:"Hong Kong",is_founder:!1,chn_company_name:""}}),[a]=u("entity_type_id"),[v]=u("company_name"),[i]=u("chn_company_name"),[f]=u("date_incorporated"),[q]=u("flat"),[r]=u("building"),[s]=u("street"),[h]=u("state"),[d]=u("country"),[n]=u("registeration_no"),[x]=u("is_founder"),[c]=u("country_registered"),[p]=u("business_nature_id"),[_]=u("phone"),[O,L]=u("email"),[C]=u("confirm_email"),[S]=u("first_name"),[$]=u("last_name"),T=!1,V=t("squareOne-fCop-company_name",""),w=t("squareOne-fCop-chn_company_name",""),A=t("squareOne-fCop-flat",""),D=t("squareOne-fCop-building",""),N=t("squareOne-fCop-street",""),M=t("squareOne-fCop-state",""),H=t("squareOne-fCop-country",""),B=t("squareOne-fCop-registeration_no",""),E=t("squareOne-fCop-country_registered",""),z=t("squareOne-fCop-phone",""),K=t("squareOne-fCop-email",""),R=t("squareOne-fCop-confirm_email",""),Y=t("squareOne-fCop-first_name",""),j=t("squareOne-fCop-last_name","");function W(){v.value&&(V.value=v.value),i.value&&(w.value=i.value),n.value&&(B.value=n.value),c.value&&(E.value=c.value),q.value&&(A.value=q.value),r.value&&(D.value=r.value),s.value&&(N.value=s.value),h.value&&(M.value=h.value),d.value&&(H.value=d.value),_.value&&(z.value=_.value),O.value&&(K.value=O.value),C.value&&(R.value=C.value),S.value&&(Y.value=S.value),$.value&&(j.value=$.value)}function X(U){A.value.length>1&&(q.value=A.value),D.value.length>1&&(r.value=D.value),N.value.length>1&&(s.value=N.value),M.value.length>1&&(h.value=M.value),H.value.length>1&&(d.value=H.value),z.value.length>1&&(_.value=z.value),K.value.length>1&&(O.value=K.value),R.value.length>1&&(C.value=R.value),Y.value.length>1&&(S.value=Y.value),j.value.length>1&&($.value=j.value),V.value.length>1&&(v.value=V.value),w.value.length>1&&(i.value=w.value),B.value.length>1&&(n.value=B.value),E.value.length>1&&(c.value=E.value)}function J(){V.value="",w.value="",A.value="",D.value="",N.value="",M.value="",H.value="",B.value="",E.value="",z.value="",K.value="",R.value="",Y.value="",j.value=""}return{entity_type_id:a,company_name:v,chn_company_name:i,date_incorporated:f,street:s,building:r,flat:q,state:h,country:d,registeration_no:n,is_founder:x,country_registered:c,business_nature_id:p,phone:_,email:O,confirm_email:C,first_name:S,last_name:$,isSaving:T,errors:g,handleSubmit:k,setFieldValue:F,emailAttrs:L,updateFields:X,saveToLocalStorage:W,resetForm:m,clearLocalStorage:J}}),yt=pe("foundersIdividual",()=>{const b=ce=>{var $e=/^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;return X.value?$e.test(ce):!0},g=ce=>W.value?!0:ce!==void 0&&ce!="",k={chn_first_name:l().test("chineseCheck","Please input only Chinese characters",b),chn_last_name:l().test("chineseCheck","Please input only Chinese characters",b),flat:l().required("Flat is required"),building:l().required("Building is required"),street:l().required("Street is required"),state:l().required("State is required"),city:l(),country:l().required("Country is required"),flat2:l().test("correspondingAddressCheck","This field is required",g),building2:l().test("correspondingAddressCheck","This field is required",g),street2:l().test("correspondingAddressCheck","This field is required",g),state2:l().test("correspondingAddressCheck","This field is required",g),city2:l().test("correspondingAddressCheck","This field is required",g),country2:l().test("correspondingAddressCheck","This field is required",g),phone:l().required("Phone Number is not complete"),email:l().email().required("Email is required"),confirm_email:l().required("Email is required"),first_name:l().required("First Name is required"),last_name:l().required("Last Name is required"),nationality:l(),occupation:l().required("Occupation is required"),identity_type_id:l().required("ID type is required"),identity_no:l(),identity_no_suffix:l(),passport_no:l(),dob:l().required("Date of birth is required")},u=new Date;new Date(u.getFullYear()-18,u.getMonth(),u.getDate());const{errors:F,handleSubmit:m,defineField:a,setFieldValue:v,resetForm:i}=ge({validationSchema:Oe(k),initialValues:{date_incorporated:new Date,entity_type_id:"1",country:"Hong Kong",country2:"Hong Kong",issuing_country:"Hong Kong",nationality:"Hong Kong",identity_type_id:"",is_founder:!1}}),[f]=a("entity_type_id"),[q]=a("flat"),[r]=a("building"),[s]=a("street"),[h]=a("state"),[d]=a("country"),[n]=a("postal_code"),[x]=a("identity_no_suffix"),[c]=a("flat2"),[p]=a("building2"),[_]=a("street2"),[O]=a("state2"),[L]=a("country2"),[C]=a("postal_code2"),[S]=a("registeration_no"),[$]=a("is_founder"),[T]=a("phone"),[V,w]=a("email"),[A]=a("confirm_email"),[D]=a("first_name"),[N]=a("last_name"),[M]=a("chn_first_name"),[H]=a("chn_last_name"),[B]=a("nationality"),[E]=a("occupation"),[z]=a("identity_type_id"),[K]=a("identity_no"),[R]=a("passport_no"),[Y]=a("dob"),j=!1,W=_t(!1),X=_t(!1),J=t("squareOne-fInd-flat",""),U=t("squareOne-fInd-building",""),Z=t("squareOne-fInd-street",""),y=t("squareOne-fInd-state",""),I=t("squareOne-fInd-country",""),P=t("squareOne-fInd-postal_code",""),ee=t("squareOne-fInd-flat2",""),te=t("squareOne-fInd-building2",""),ae=t("squareOne-fInd-street2",""),le=t("squareOne-fInd-state2",""),ie=t("squareOne-fInd-country2",""),qe=t("squareOne-fInd-postal_code2",""),me=t("squareOne-fInd-issuing_country",""),xe=t("squareOne-fInd-phone",""),e=t("squareOne-fInd-email",""),ue=t("squareOne-fInd-confirm_email",""),_e=t("squareOne-fInd-first_name",""),ve=t("squareOne-fInd-last_name",""),se=t("squareOne-fInd-chn_first_name"," "),oe=t("squareOne-fInd-chn_last_name"," "),de=t("squareOne-fInd-nationality",""),fe=t("squareOne-fInd-occupation",""),re=t("squareOne-fInd-identity_no",""),Ce=t("squareOne-fInd-identity_no_suffix",""),he=t("squareOne-fInd-passport_no","");function we(){q.value&&(J.value=q.value),r.value&&(U.value=r.value),s.value&&(Z.value=s.value),h.value&&(y.value=h.value),d.value&&(I.value=d.value),n.value&&(P.value=n.value),c.value&&(ee.value=c.value),p.value&&(te.value=p.value),_.value&&(ae.value=_.value),O.value&&(le.value=O.value),L.value&&(ie.value=L.value),C.value&&(qe.value=C.value),x.value&&(Ce.value=x.value),S.value&&(me.value=S.value),T.value&&(xe.value=T.value),V.value&&(e.value=V.value),A.value&&(ue.value=A.value),D.value&&(_e.value=D.value),N.value&&(ve.value=N.value),M.value&&(se.value=M.value),H.value&&(oe.value=H.value),B.value&&(de.value=B.value),E.value&&(fe.value=E.value),K.value&&(re.value=K.value),R.value&&(he.value=R.value)}function ke(ce){J.value.length>1&&(q.value=J.value),U.value.length>1&&(r.value=U.value),Z.value.length>1&&(s.value=Z.value),y.value.length>1&&(h.value=y.value),I.value.length>1&&(d.value=I.value),P.value.length>1&&(n.value=P.value),ee.value.length>1&&(c.value=ee.value),te.value.length>1&&(p.value=te.value),ae.value.length>1&&(_.value=ae.value),le.value.length>1&&(O.value=le.value),ie.value.length>1&&(L.value=ie.value),qe.value.length>1&&(C.value=qe.value),me.value&&(S.value=me.value),xe.value.length>1&&(T.value=xe.value),e.value.length>1&&(V.value=e.value),ue.value.length>1&&(A.value=ue.value),_e.value.length>1&&(D.value=_e.value),ve.value.length>1&&(N.value=ve.value),se.value.length>1&&(M.value=se.value),oe.value.length>1&&(H.value=oe.value),de.value.length>1&&(B.value=de.value),fe.value.length>1&&(E.value=fe.value),re.value.length>1&&(K.value=re.value),he.value.length>1&&(R.value=he.value)}function Le(){J.value="",U.value="",Z.value="",y.value="",I.value="",P.value="",Ce.value="",ee.value="",te.value="",ae.value="",le.value="",ie.value="",qe.value="",me.value="",xe.value="",e.value="",ue.value="",_e.value="",ve.value="",se.value="",oe.value="",de.value="",fe.value="",re.value="",he.value=""}return{entity_type_id:f,flat:q,building:r,street:s,state:h,postal_code:n,country:d,flat2:c,building2:p,street2:_,state2:O,postal_code2:C,country2:L,first_name:D,last_name:N,chn_first_name:M,chn_last_name:H,dob:Y,nationality:B,phone:T,email:V,confirm_email:A,occupation:E,is_founder:$,identity_type_id:z,identity_no:K,identity_no_suffix:x,passport_no:R,issuing_country:S,isSaving:j,correspondingAddressIsSame:W,hasChineseName:X,errors:F,handleSubmit:m,setFieldValue:v,emailAttrs:w,updateFields:ke,clearLocalStorage:Le,saveToLocalStorage:we,resetForm:i}}),ne=b=>(Ne("data-v-becc2bb1"),b=b(),Me(),b),It={class:"side-panel"},Pt={class:"list-group list-group-flush mt-4"},ea={class:"list-group-item border-0 bg-transparent"},ta=ne(()=>o("img",{src:kt,alt:""},null,-1)),aa={class:"list-group-item border-0 bg-transparent"},la=ne(()=>o("img",{src:Lt,alt:""},null,-1)),ia=ht('<li class="list-group-item border-0 bg-transparent" data-v-becc2bb1><img src="'+$t+'" alt="" data-v-becc2bb1></li><li class="list-group-item border-0 bg-transparent" data-v-becc2bb1><img src="'+Tt+'" alt="" data-v-becc2bb1></li><li class="list-group-item border-0 bg-transparent" data-v-becc2bb1><img src="'+Vt+'" alt="" data-v-becc2bb1></li>',3),ua=ht('<ul class="list-group list-group-flush" style="margin-top:120px;" data-v-becc2bb1><li class="list-group-item border-0 bg-transparent" data-v-becc2bb1><img src="'+qt+'" alt="" data-v-becc2bb1></li><li class="list-group-item border-0 bg-transparent" data-v-becc2bb1><img src="'+mt+'" alt="" data-v-becc2bb1></li><li class="list-group-item border-0 bg-transparent" data-v-becc2bb1><img src="'+xt+'" alt="" data-v-becc2bb1></li><li class="list-group-item border-0 bg-transparent" data-v-becc2bb1><img src="'+pt+'" alt="" data-v-becc2bb1></li></ul>',1),na={class:"main-panel shadow-sm"},ca={class:"container-fluid"},_a={class:"row"},va={class:"col-12 p-lg-3 p-2 shadow-sm head-panel"},sa=ne(()=>o("button",{class:"btn btn-lg p-1 py-0 d-md-none border-0","data-bs-toggle":"offcanvas","data-bs-target":"#startMobileOffcanvas","aria-controls":"startMobileOffcanvas"},[o("i",{class:"bi bi-justify fs-3"})],-1)),oa={key:0,class:"small fw-bold d-none d-md-inline"},da={key:1,class:"badge bg-success-subtle text-success small"},fa=ne(()=>o("i",{class:"bi bi-check-circle"},null,-1)),ra={class:"float-end"},ha={key:0,class:"badge bg-success-subtle text-success small"},ba=ne(()=>o("i",{class:"bi bi-check-circle"},null,-1)),qa={key:1,class:"badge bg-success-subtle text-danger small"},ma=ne(()=>o("i",{class:"bi bi-check-circle"},null,-1)),xa={class:"mx-2 me-5 dropdown"},pa={"data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",class:"dropdown-toggle"},ga=ne(()=>o("i",{class:"bi bi-person-circle"},null,-1)),Oa=ne(()=>o("i",{class:"bi bi-chevron-down"},null,-1)),Ca=ne(()=>o("i",{class:"bi bi-power"},null,-1)),Sa={class:"col-2 d-none d-md-block min-vh-100 sub-menu-panel"},Fa={class:"col-md-7 bg-white min-vh-100 sub-form-panel pt-4"},wa={class:"card border-0"},ka={class:"card-body pt-0 p-0 px-md-3"},La={class:"col-3 d-none d-md-block min-vh-100 sub-info-panel p-3 pt-4 small"},$a=De({__name:"StartCompany_template",setup(b){const g=Gt(),k=Ut(),u=Wt(),F=Xt(),m=Zt(),a=yt(),v=St(),i=ft();Ft();const f=dt(),q=Ve(()=>{var n,x;return(x=(n=f.companyInProgress)==null?void 0:n.billing)==null?void 0:x.status}),r=Ve(()=>{var n,x;return(x=(n=f.companyInProgress)==null?void 0:n.users)==null?void 0:x.kyc_status}),s=Ve(()=>{var c;let d="",n="";const x=((c=f.companyInProgress)==null?void 0:c.names)??[];if(x){const p=x.find(_=>_.choice_level==1);p&&(d=p!=null&&p.eng_name?p.eng_name+" "+p.eng_prefix:"",n=p.chn_name?p.chn_name+" "+p.chn_prefix:"")}return d+" "+n});async function h(){await g.clearLocalStorage(),await k.clearLocalStorage(),await u.clearLocalStorage(),await F.clearLocalStorage(),await m.clearLocalStorage(),await a.clearLocalStorage(),await f.clearLocalStorage(),await v.logout(),i.replace({name:"Login"})}return(d,n)=>{const x=wt("router-link");return Q(),G(rt,null,[o("div",It,[o("ul",Pt,[o("li",ea,[Fe(x,{to:"/"},{default:vt(()=>[ta]),_:1})]),o("li",aa,[Fe(x,{to:"/dashboard"},{default:vt(()=>[la]),_:1})]),ia]),ua]),o("div",na,[o("div",ca,[o("div",_a,[o("div",va,[sa,be(" Start your Company "),s.value?(Q(),G("span",oa," ("+Ae(s.value)+") ",1)):Te("",!0),q.value?(Q(),G("span",da,[fa,be(" Paid ")])):Te("",!0),o("span",ra,[r.value?(Q(),G("span",ha,[ba,be(" Verified ")])):(Q(),G("span",qa,[ma,be(" Not-Verified ")])),o("span",xa,[o("span",pa,[ga,be(" "+Ae(Se(v).profileDataName)+" ",1),Oa]),o("div",{class:"dropdown-menu dropdown-menu-start"},[o("span",{onClick:h,class:"dropdown-item text-danger"},[Ca,be(" Logout ")])])])])]),o("div",Sa,[Fe(bt)]),o("div",Fa,[o("div",wa,[o("div",ka,[st(d.$slots,"main",{},void 0,!0)])])]),o("div",La,[st(d.$slots,"info",{},void 0,!0)])])])]),Fe(Qt)],64)}}}),Ma=Be($a,[["__scopeId","data-v-becc2bb1"]]);export{Ma as S,yt as a,Xt as b,Gt as d,Zt as f,Ut as n,Wt as s};
