import{d as nt,K as qt,a as mt,z as it,o as P,c as ee,G as xt,H as St,y as At,e as qe,f as Ke,t as ut,g as lt,L as pt,D as ct,E as _t,b as v,_ as st,B as Ge,C as Xe,I as t,r as dt,u as Ft,M as kt,s as rt,Z as ft,j as wt,A as ht}from"./index-C7Koc73a.js";import{u as Ct}from"./StartCompany_store-CCrZCyJq.js";import{d as Lt}from"./index-BaNV3xWx.js";import{u as Ye}from"./vee-validate.esm-BzN80Eb0.js";import{a as i,c as Ze,d as bt}from"./index.esm-sMUFz6u1.js";const gt="/icons/sidebar/vector-10.png",$t=b=>(ct("data-v-e6abc6b2"),b=b(),_t(),b),Vt={class:"list-group list-group-flush mt-4"},Tt=["onClick"],Et={key:0},Nt={key:0,style:{"font-size":"10px"}},Bt=$t(()=>v("i",{class:"bi bi-check-circle text-primary"},null,-1)),Dt=[Bt],Mt=nt({__name:"StartCompany_menulist",setup(b){pt(o=>({"38c59738":qe(p).textColor}));const p=qt(),k=mt(),x=Lt.useToast(),q=Ct();function a(o){const l=q.companyInProgress;console.log(l,"companies data"),(o==10||o==11||o==12)&&(!l||!(l!=null&&l.description)||!l.company_entity.length||C.value||!l.fund_source||!l.activity)?x.info("You cannot access this page <br> here from here,complete all forms",{position:"top-right"}):(k.push({name:"Start"}),q.currentStage=o)}function V(o,l){var f;const _=q.companyInProgress;if(l!=5&&l!=6)return o instanceof Array?o==null?void 0:o.length:o!=null;if(l==6){if(_.company_entity.length)return!C.value}else{const S=((f=q.companyInProgress)==null?void 0:f.company_entity)??[],d=S.find(n=>n.entity_capacity_id.includes(2)&&n.entity_type_id==1);return!(!S.find(n=>n.entity_capacity_id.includes(1))||!d)}}const C=it(()=>{var f;const o=[];let l=!1;const _=((f=q.companyInProgress)==null?void 0:f.company_entity)??[];return _.length&&(_.forEach(d=>{const A=d.individual||d.corporate;d.entity_capacity_id.includes(1)&&o.push(A)}),l=!!o.find(d=>d.owner_shares==null)),l});return(o,l)=>(P(),ee("ul",Vt,[(P(!0),ee(xt,null,St(qe(q).menus,_=>{var f;return P(),ee("li",{onClick:S=>a(_.stage),class:At(["list-group-item",{isActive:qe(q).isActiveMenu(_.stage)}])},[Ke(ut(_==null?void 0:_.name)+" ",1),qe(q).companyInProgress?(P(),ee("span",Et,[V((f=qe(q))==null?void 0:f.companyInProgress[_.dataSource],_.stage)?(P(),ee("small",Nt,Dt)):lt("",!0)])):lt("",!0)],10,Tt)}),256))]))}}),Ot=st(Mt,[["__scopeId","data-v-e6abc6b2"]]),Rt=b=>(ct("data-v-6bdd83b5"),b=b(),_t(),b),jt={class:"offcanvas offcanvas-start",tabindex:"-1",id:"startMobileOffcanvas","aria-labelledby":"startMobileOffcanvasLabel"},zt=Rt(()=>v("div",{class:"offcanvas-header"},[v("h5",{class:"offcanvas-title",id:"startMobileOffcanvasLabel"}," Menu "),v("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),Ht={class:"offcanvas-body"},Kt=nt({__name:"StartCompany_mobilemenu",setup(b){return(p,k)=>(P(),ee("div",jt,[zt,v("div",Ht,[Ge(Ot,{"data-bs-dismiss":"offcanvas"})])]))}}),Gt=st(Kt,[["__scopeId","data-v-6bdd83b5"]]),Xt=Xe("description",()=>{const b={description:i().min(150,"Description must be at least 150 characters long").required(),website:i(),business_nature_id:i().required("Please select a nature of business")},{errors:p,handleSubmit:k,defineField:x,setFieldValue:q,resetForm:a,validateField:V}=Ye({validationSchema:Ze(b)});function C(s){V(s)}const[o,l]=x("description"),[_,f]=x("website"),[S,d]=x("business_nature_id"),A=!1,n=t("squareOne-desc-desc",""),m=t("squareOne-desc-website",""),r=t("squareOne-desc-bNature","");function O(){n.value=o.value,m.value=_.value,r.value=S.value}function h(s){n.value.length>1?o.value=n.value:s!=null&&s.description&&(o.value=s.description),r.value?S.value=parseInt(r.value):s!=null&&s.business_nature_id&&(S.value=parseInt(s.business_nature_id)),m.value.length>1?_.value=m.value:s!=null&&s.website&&(_.value=s.website)}function u(){n.value="",m.value="",r.value=""}return{description:o,descriptiontAttr:l,business_nature_id:S,business_nature_idAttr:d,website:_,websiteAttr:f,isSaving:A,errors:p,handleSubmit:k,setFieldValue:q,updateFields:h,saveToLocalStorage:O,clearLocalStorage:u,resetForm:a,validateVueSelectOnBlur:C}}),Yt=Xe("name",()=>{const b=t("name_isSecond",!1),p=t("name_isThird",!1),k=t("name_isForth",!1),x=t("name_isFifth",!1),q=e=>{var ce=/^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;return ce.test(e)},a=e=>{var ce=/[\u4e00-\u9fa5]/;return!ce.test(e)},V={choice_level1_eng_name:i().test("chineseChecks","Please input only English characters",a),choice_level2_eng_name:i().test("chineseChecks","Please input only English characters",a),choice_level3_eng_name:i().test("chineseChecks","Please input only English characters",a),choice_level4_eng_name:i().test("chineseChecks","Please input only English characters",a),choice_level5_eng_name:i().test("chineseChecks","Please input only English characters",a),choice_level1_chn_name:i().test("chineseCheck","Please input only Chinese characters",q),choice_level2_chn_name:i().test("chineseCheck","Please input only Chinese characters",q),choice_level3_chn_name:i().test("chineseCheck","Please input only Chinese characters",q),choice_level4_chn_name:i().test("chineseCheck","Please input only Chinese characters",q),choice_level5_chn_name:i().test("chineseCheck","Please input only Chinese characters",q)},{errors:C,handleSubmit:o,defineField:l,setFieldValue:_,resetForm:f,resetField:S,validateField:d}=Ye({validationSchema:Ze(V),initialValues:{choice_level1_prefix:"Limited",choice_level1_chn_prefix:"有限公司",choice_level2_prefix:"Limited",choice_level2_chn_prefix:"有限公司",choice_level3_prefix:"Limited",choice_level3_chn_prefix:"有限公司",choice_level4_prefix:"Limited",choice_level4_chn_prefix:"有限公司",choice_level5_prefix:"Limited",choice_level5_chn_prefix:"有限公司"}});function A(e){d(e)}const[n,m]=l("choice_level1_eng_name"),[r]=l("choice_level1_chn_name"),[O]=l("choice_level1_prefix"),[h]=l("choice_level1_chn_prefix"),[u]=l("choice_level2_eng_name"),[s]=l("choice_level2_chn_name"),[w]=l("choice_level2_prefix"),[L]=l("choice_level2_chn_prefix"),[N]=l("choice_level3_eng_name"),[g]=l("choice_level3_chn_name"),[c]=l("choice_level3_prefix"),[F]=l("choice_level3_chn_prefix"),[E]=l("choice_level4_eng_name"),[B]=l("choice_level4_chn_name"),[Y]=l("choice_level4_prefix"),[T]=l("choice_level4_chn_prefix"),[Z]=l("choice_level5_eng_name"),[D]=l("choice_level5_chn_name"),[$]=l("choice_level5_prefix"),[K]=l("choice_level5_chn_prefix"),Je=!1,G=t("squareOne-name-choice_level1_eng_name",""),ve=t("squareOne-name-choice_level1_chn_name",""),te=t("squareOne-name-choice_level1_prefix",""),ae=t("squareOne-name-choice_level1_chn_prefix",""),ie=t("squareOne-name-choice_level2_eng_name",""),le=t("squareOne-name-choice_level2_chn_name",""),ue=t("squareOne-name-choice_level2_prefix",""),ne=t("squareOne-name-choice_level2_chn_prefix",""),oe=t("squareOne-name-choice_level3_eng_name",""),M=t("squareOne-name-choice_level3_chn_name",""),J=t("squareOne-name-choice_level3_prefix",""),R=t("squareOne-name-choice_level3_chn_prefix",""),Q=t("squareOne-name-choice_level4_eng_name",""),j=t("squareOne-name-choice_level4_chn_name",""),U=t("squareOne-name-choice_level4_prefix",""),X=t("squareOne-name-choice_level4_chn_prefix",""),W=t("squareOne-name-choice_level5_eng_name",""),z=t("squareOne-name-choice_level5_chn_name",""),y=t("squareOne-name-choice_level5_prefix",""),H=t("squareOne-name-choice_level5_chn_prefix","");function de(){G.value=n.value,ve.value=r.value,te.value=O.value,ae.value=h.value,ie.value=u.value,le.value=s.value,ue.value=w.value,ne.value=L.value,oe.value=N.value,M.value=g.value,J.value=c.value,R.value=F.value,Q.value=E.value,j.value=B.value,U.value=Y.value,X.value=T.value,W.value=Z.value,z.value=D.value,y.value=$.value,H.value=K.value}function re(e){var ce,he,I,be,ye,Ie,Qe,Ue,me,xe,pe,Ce,Oe,Se,Ae,Fe,ke,we,Le,ge,$e,Ve,Te,Ee,Ne,Be,De,Me,Re,je,ze,We,He,Pe,et,tt,_e,at,vt,ot;G.value.length>1?n.value=G.value:(ce=e==null?void 0:e.names[0])!=null&&ce.eng_name&&(n.value=(he=e==null?void 0:e.names[0])==null?void 0:he.eng_name),ve.value.length>1?r.value=ve.value:(I=e==null?void 0:e.names[0])!=null&&I.chn_eng_name&&(r.value=(be=e==null?void 0:e.names[0])==null?void 0:be.chn_eng_name),te.value.length>1?O.value=te.value:(ye=e==null?void 0:e.names[0])!=null&&ye.eng_prefix&&(O.value=(Ie=e==null?void 0:e.names[0])==null?void 0:Ie.eng_prefix),ae.value.length>1?h.value=ae.value:(Qe=e==null?void 0:e.names[0])!=null&&Qe.chn_prefix&&(h.value=(Ue=e==null?void 0:e.names[0])==null?void 0:Ue.chn_prefix),ie.value.length>1?u.value=ie.value:(me=e==null?void 0:e.names[1])!=null&&me.eng_name&&(u.value=(xe=e==null?void 0:e.names[1])==null?void 0:xe.eng_name),le.value.length>1?s.value=le.value:(pe=e==null?void 0:e.names[1])!=null&&pe.hn_name&&(s.value=(Ce=e==null?void 0:e.names[1])==null?void 0:Ce.chn_name),ue.value.length>1?w.value=ue.value:(Oe=e==null?void 0:e.names[1])!=null&&Oe.eng_prefix&&(w.value=(Se=e==null?void 0:e.names[1])==null?void 0:Se.eng_prefix),ne.value.length>1?L.value=ne.value:(Ae=e==null?void 0:e.names[1])!=null&&Ae.chn_prefix&&(L.value=(Fe=e==null?void 0:e.names[1])==null?void 0:Fe.chn_prefix),oe.value.length>1?N.value=oe.value:(ke=e==null?void 0:e.names[2])!=null&&ke.eng_name&&(N.value=(we=e==null?void 0:e.names[2])==null?void 0:we.eng_name),M.value.length>1?g.value=M.value:(Le=e==null?void 0:e.names[2])!=null&&Le.chn_name&&(g.value=(ge=e==null?void 0:e.names[2])==null?void 0:ge.chn_name),J.value.length>1?c.value=J.value:($e=e==null?void 0:e.names[2])!=null&&$e.eng_prefix&&(c.value=(Ve=e==null?void 0:e.names[2])==null?void 0:Ve.eng_prefix),R.value.length>1?F.value=R.value:(Te=e==null?void 0:e.names[2])!=null&&Te.chn_prefix&&(F.value=(Ee=e==null?void 0:e.names[2])==null?void 0:Ee.chn_prefix),Q.value.length>1?E.value=Q.value:(Ne=e==null?void 0:e.names[3])!=null&&Ne.eng_name&&(E.value=(Be=e==null?void 0:e.names[3])==null?void 0:Be.eng_name),j.value.length>1?B.value=j.value:(De=e==null?void 0:e.names[3])!=null&&De.chn_name&&(B.value=(Me=e==null?void 0:e.names[3])==null?void 0:Me.chn_name),U.value.length>1?Y.value=U.value:(Re=e==null?void 0:e.names[3])!=null&&Re.eng_prefix&&(Y.value=(je=e==null?void 0:e.names[3])==null?void 0:je.eng_prefix),X.value.length>1?T.value=X.value:(ze=e==null?void 0:e.names[3])!=null&&ze.chn_prefix&&(T.value=(We=e==null?void 0:e.names[3])==null?void 0:We.chn_prefix),W.value.length>1?Z.value=W.value:(He=e==null?void 0:e.names[3])!=null&&He.eng_name&&(Z.value=(Pe=e==null?void 0:e.names[3])==null?void 0:Pe.eng_name),z.value.length>1?D.value=z.value:(et=e==null?void 0:e.names[3])!=null&&et.chn_name&&(D.value=(tt=e==null?void 0:e.names[3])==null?void 0:tt.chn_name),y.value.length>1?$.value=y.value:(_e=e==null?void 0:e.names[3])!=null&&_e.eng_prefix&&($.value=(at=e==null?void 0:e.names[3])==null?void 0:at.eng_prefix),H.value.length>1?K.value=H.value:(vt=e==null?void 0:e.names[3])!=null&&vt.chn_prefix&&(K.value=(ot=e==null?void 0:e.names[3])==null?void 0:ot.chn_prefix)}function fe(){G.value="",ve.value="",te.value="",ae.value="",ie.value="",le.value="",ue.value="",ne.value="",oe.value="",M.value="",J.value="",R.value="",Q.value="",j.value="",U.value="",X.value="",W.value="",z.value="",y.value="",H.value="",b.value=!1,p.value=!1,k.value=!1,x.value=!1}return{choice_level1_eng_name:n,choice_level1_eng_nameAttr:m,choice_level1_chn_name:r,choice_level1_prefix:O,choice_level1_chn_prefix:h,choice_level2_eng_name:u,choice_level2_chn_name:s,choice_level2_prefix:w,choice_level2_chn_prefix:L,choice_level3_eng_name:N,choice_level3_chn_name:g,choice_level3_prefix:c,choice_level3_chn_prefix:F,choice_level4_eng_name:E,choice_level4_chn_name:B,choice_level4_prefix:Y,choice_level4_chn_prefix:T,choice_level5_eng_name:Z,choice_level5_chn_name:D,choice_level5_prefix:$,choice_level5_chn_prefix:K,isSecond:b,isThird:p,isForth:k,isFifth:x,isSaving:Je,errors:C,handleSubmit:o,setFieldValue:_,updateFields:re,saveToLocalStorage:de,resetForm:f,resetField:S,chineseCheck:q,clearLocalStorage:fe,validateVueSelectOnBlur:A}}),Zt=Xe("source",()=>{const b={income_expected_source:i().required("Required field"),origin_funds:i().required("Required field"),wealth_initial_source:i().required("Required field"),income_outgoing_source:i().required("Required field")},{errors:p,handleSubmit:k,defineField:x,setFieldValue:q,validateField:a}=Ye({validationSchema:Ze(b)});function V(u){a(u)}const[C,o]=x("income_expected_source"),[l]=x("origin_funds"),[_]=x("wealth_initial_source"),[f]=x("income_outgoing_source"),S=!1,d=t("squareOne-source-income_expected_source",""),A=t("squareOne-source-origin_funds",""),n=t("squareOne-source-wealth_initial_source",""),m=t("squareOne-source-income_outgoing_source","");function r(){d.value=C.value,A.value=l.value,n.value=_.value,m.value=f.value}function O(u){var s,w,L,N,g,c,F,E;d.value?C.value=d.value:(s=u==null?void 0:u.fund_source)!=null&&s.income_expected_source&&(C.value=(w=u==null?void 0:u.fund_source)==null?void 0:w.income_expected_source),A.value?l.value=A.value:(L=u==null?void 0:u.fund_source)!=null&&L.origin_funds&&(l.value=(N=u==null?void 0:u.fund_source)==null?void 0:N.origin_funds),n.value?_.value=n.value:(g=u==null?void 0:u.fund_source)!=null&&g.wealth_initial_source&&(_.value=(c=u==null?void 0:u.fund_source)==null?void 0:c.wealth_initial_source),m.value?f.value=m.value:(F=u==null?void 0:u.fund_source)!=null&&F.income_outgoing_source&&(f.value=(E=u==null?void 0:u.fund_source)==null?void 0:E.income_outgoing_source)}function h(){d.value="",A.value="",n.value="",m.value=""}return{income_expected_source:C,income_expected_sourceAttr:o,origin_funds:l,wealth_initial_source:_,income_outgoing_source:f,isSaving:S,errors:p,handleSubmit:k,setFieldValue:q,updateFields:O,saveToLocalStorage:r,clearLocalStorage:h,validateVueSelectOnBlur:V}}),Jt=Xe("activities",()=>{const b={description:i().min(150,"Description must be at least 150 characters long").required(),activity_level:i().required("Please select an option").required(),activity_nature:i().required("Please select an option").required(),customer_location_operation:bt().required("Please select an option").required(),country:bt().required("Required field").required()},{errors:p,handleSubmit:k,defineField:x,setFieldValue:q,validateField:a}=Ye({validationSchema:Ze(b)});function V(c){a(c)}const[C,o]=x("description"),[l,_]=x("activity_level"),[f,S]=x("activity_nature"),[d,A]=x("customer_location_operation"),[n,m]=x("country"),r=!1,O=t("squareOne-activity-description",""),h=t("squareOne-activity-activity_level",""),u=t("squareOne-activity-activity_nature",""),s=t("squareOne-activity-activity-location",""),w=t("squareOne-activity-activity_nature-country","");function L(){O.value=C.value,h.value=l.value,u.value=f.value,s.value=d.value,w.value=n.value}function N(c){var F,E,B,Y,T,Z,D;if(O.value?C.value=O.value:(F=c==null?void 0:c.activity)!=null&&F.description&&(C.value=c.activity.description),h.value?l.value=h.value:(E=c==null?void 0:c.activity)!=null&&E.activity_level&&(l.value=c.activity.activity_level),u.value?f.value=u.value:(B=c==null?void 0:c.activity)!=null&&B.activity_nature&&(f.value=c.activity.activity_nature),s.value)try{d.value=s.value.split(",")}catch{}else if((Y=c==null?void 0:c.activity)!=null&&Y.customer_location_operation){const $=((T=c==null?void 0:c.activity)==null?void 0:T.customer_location_operation)??"";d.value=$!==""?$.split(","):""}if(w.value)try{n.value=w.value.split(",")}catch{}else if((Z=c==null?void 0:c.activity)!=null&&Z.country){const $=((D=c==null?void 0:c.activity)==null?void 0:D.country)??"";n.value=$!==""?$.split(","):""}}function g(){O.value="",h.value="",u.value="",s.value="",w.value=""}return{description:C,descriptionAttr:o,activity_level:l,activity_levelAttr:_,activity_nature:f,activity_natureAttr:S,customer_location_operation:d,customer_location_operationAttr:A,country:n,countryAttr:m,isSaving:r,errors:p,handleSubmit:k,setFieldValue:q,updateFields:N,saveToLocalStorage:L,clearLocalStorage:g,validateVueSelectOnBlur:V}}),Qt=Xe("foundersCorporate",()=>{const b=I=>{var be=/^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;return d.value?be.test(I):!0},p=I=>{var be=/[\u4e00-\u9fa5]/;return!be.test(I)},k={company_name:i().test("chineseChecks","Please input only English characters",p),chn_company_name:i().test("chineseCheck","Please input only Chinese characters",b),date_incorporated:i().required("Date incorporated is required"),registeration_no:i().required("Company registration number is required"),country_registered:i().required("Company date of registration is required"),business_nature_id:i().required("Business nature Id is required"),flat:i().required(" Flat is required"),building:i().required(" building is required "),street:i().required(" Street is required"),state:i().required("State/City is required"),country:i().required("country is required"),first_name:i().required("First name is required"),last_name:i().required("Last name is requied"),phone:i().required("phone number is required"),email:i().email().required("Email is required"),confirm_email:i().email()},{errors:x,handleSubmit:q,defineField:a,setFieldValue:V,resetForm:C,validateField:o}=Ye({validationSchema:Ze(k)});function l(I){o(I)}const[_]=a("entity_type_id"),[f,S]=a("company_name"),[d,A]=a("chn_company_name"),[n,m]=a("date_incorporated"),[r,O]=a("flat"),[h,u]=a("building"),[s,w]=a("street"),[L,N]=a("state"),[g,c]=a("country"),[F,E]=a("registeration_no"),[B,Y]=a("is_founder"),[T,Z]=a("country_registered"),[D,$]=a("business_nature_id"),[K,Je]=a("phone"),[G,ve]=a("email"),[te,ae]=a("confirm_email"),[ie,le]=a("first_name"),[ue,ne]=a("last_name"),oe=!1,M=t("squareOne-fCop-company_name",""),J=t("squareOne-fCop-chn_company_name",""),R=t("squareOne-fCop-flat",""),Q=t("squareOne-fCop-building",""),j=t("squareOne-fCop-street",""),U=t("squareOne-fCop-state",""),X=t("squareOne-fCop-country",""),W=t("squareOne-fCop-registeration_no",""),z=t("squareOne-fCop-country_registered",""),y=t("squareOne-fCop-phone",""),H=t("squareOne-fCop-email",""),de=t("squareOne-fCop-confirm_email",""),re=t("squareOne-fCop-first_name",""),fe=t("squareOne-fCop-last_name","");function e(){M.value=f.value,J.value=d.value,W.value=F.value,z.value=T.value,R.value=r.value,Q.value=h.value,j.value=s.value,U.value=L.value,y.value=K.value,H.value=G.value,de.value=te.value,re.value=ie.value,fe.value=ue.value}function ce(I){R.value&&(r.value=R.value),Q.value&&(h.value=Q.value),j.value&&(s.value=j.value),U.value&&(L.value=U.value),X.value&&(g.value=X.value),y.value&&(K.value=y.value),H.value&&(G.value=H.value),de.value&&(te.value=de.value),re.value&&(ie.value=re.value),fe.value&&(ue.value=fe.value),M.value&&(f.value=M.value),J.value&&(d.value=J.value),W.value&&(F.value=W.value),z.value&&(T.value=z.value)}function he(){M.value="",J.value="",R.value="",Q.value="",j.value="",U.value="",X.value="",W.value="",z.value="",y.value="",H.value="",de.value="",re.value="",fe.value=""}return{entity_type_id:_,company_name:f,company_nameAttr:S,chn_company_name:d,chn_company_nameAttr:A,date_incorporated:n,date_incorporatedAttr:m,street:s,streetAttr:w,building:h,buildingAttr:u,flat:r,flatAttr:O,state:L,stateAttr:N,country:g,countryAttr:c,registeration_no:F,registeration_noAttr:E,is_founder:B,is_founderAttr:Y,country_registered:T,country_registeredAttr:Z,business_nature_id:D,business_nature_idAttr:$,phone:K,phoneAttr:Je,email:G,emailAttr:ve,confirm_email:te,confirm_emailAttr:ae,first_name:ie,first_nameAttr:le,last_name:ue,last_nameAttr:ne,isSaving:oe,errors:x,handleSubmit:q,setFieldValue:V,updateFields:ce,saveToLocalStorage:e,resetForm:C,clearLocalStorage:he,validateVueSelectOnBlur:l}}),Ut=Xe("foundersIdividual",()=>{const b=_e=>{var at=/^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;return Ue.value?at.test(_e):!0},p=_e=>Qe.value?!0:_e!==void 0&&_e!="",k={chn_first_name:i().test("chineseCheck","Please input only Chinese characters",b),chn_last_name:i().test("chineseCheck","Please input only Chinese characters",b),flat:i().required("Flat is required"),building:i().required("Building is required"),street:i().required("Street is required"),state:i().required("State is required"),country:i().required("Country is required"),flat2:i().test("correspondingAddressCheck","This field is required",p),building2:i().test("correspondingAddressCheck","This field is required",p),street2:i().test("correspondingAddressCheck","This field is required",p),state2:i().test("correspondingAddressCheck","This field is required",p),country2:i().test("correspondingAddressCheck","This field is required",p),phone:i().required("Phone is required"),email:i().email().required("Email is required"),confirm_email:i().required("Email is required"),first_name:i().required("First Name is required"),last_name:i().required("Last Name is required"),nationality:i().required(),occupation:i().required("Occupation is required"),identity_type_id:i().required("ID type is required"),identity_no:i(),identity_no_suffix:i(),passport_no:i(),dob:i().required("Date of birth is required")},{errors:x,handleSubmit:q,defineField:a,setFieldValue:V,resetForm:C,validateField:o}=Ye({validationSchema:Ze(k)});function l(_e){o(_e)}const[_]=a("entity_type_id"),[f,S]=a("flat"),[d,A]=a("building"),[n,m]=a("street"),[r,O]=a("state"),[h,u]=a("country"),[s,w]=a("postal_code"),[L,N]=a("identity_no_suffix"),[g,c]=a("flat2"),[F,E]=a("building2"),[B,Y]=a("street2"),[T,Z]=a("state2"),[D,$]=a("country2"),[K,Je]=a("postal_code2"),[G,ve]=a("registeration_no"),[te]=a("is_founder"),[ae,ie]=a("phone"),[le,ue]=a("email"),[ne,oe]=a("confirm_email"),[M,J]=a("first_name"),[R,Q]=a("last_name"),[j,U]=a("chn_first_name"),[X,W]=a("chn_last_name"),[z,y]=a("nationality"),[H,de]=a("occupation"),[re,fe]=a("identity_type_id"),[e,ce]=a("identity_no"),[he,I]=a("passport_no"),[be,ye]=a("dob"),Ie=!1,Qe=dt(!1),Ue=dt(!1),me=t("squareOne-fInd-flat",""),xe=t("squareOne-fInd-building",""),pe=t("squareOne-fInd-street",""),Ce=t("squareOne-fInd-state",""),Oe=t("squareOne-fInd-country",""),Se=t("squareOne-fInd-postal_code",""),Ae=t("squareOne-fInd-flat2",""),Fe=t("squareOne-fInd-building2",""),ke=t("squareOne-fInd-street2",""),we=t("squareOne-fInd-state2",""),Le=t("squareOne-fInd-country2",""),ge=t("squareOne-fInd-postal_code2",""),$e=t("squareOne-fInd-issuing_country",""),Ve=t("squareOne-fInd-phone",""),Te=t("squareOne-fInd-email",""),Ee=t("squareOne-fInd-confirm_email",""),Ne=t("squareOne-fInd-first_name",""),Be=t("squareOne-fInd-last_name",""),De=t("squareOne-fInd-chn_first_name"," "),Me=t("squareOne-fInd-chn_last_name"," "),Re=t("squareOne-fInd-nationality",""),je=t("squareOne-fInd-occupation",""),ze=t("squareOne-fInd-identity_no",""),We=t("squareOne-fInd-identity_no_suffix",""),He=t("squareOne-fInd-passport_no","");function Pe(){me.value=f.value,xe.value=d.value,pe.value=n.value,Ce.value=r.value,Oe.value=h.value,Se.value=s.value,Ae.value=g.value,Fe.value=F.value,ke.value=B.value,we.value=T.value,Le.value=D.value,ge.value=K.value,We.value=L.value,$e.value=G.value,Ve.value=ae.value,Te.value=le.value,Ee.value=ne.value,Ne.value=M.value,Be.value=R.value,De.value=j.value,Me.value=X.value,Re.value=z.value,je.value=H.value,ze.value=e.value,He.value=he.value}function et(_e){me.value&&(f.value=me.value),xe.value&&(d.value=xe.value),pe.value&&(n.value=pe.value),Ce.value&&(r.value=Ce.value),Oe.value&&(h.value=Oe.value),Se.value&&(s.value=Se.value),Ae.value&&(g.value=Ae.value),Fe.value&&(F.value=Fe.value),ke.value&&(B.value=ke.value),we.value&&(T.value=we.value),Le.value&&(D.value=Le.value),ge.value&&(K.value=ge.value),$e.value&&(G.value=$e.value),Ve.value&&(ae.value=Ve.value),Te.value&&(le.value=Te.value),Ee.value&&(ne.value=Ee.value),Ne.value&&(M.value=Ne.value),Be.value&&(R.value=Be.value),De.value&&(j.value=De.value),Me.value&&(X.value=Me.value),Re.value&&(z.value=Re.value),je.value&&(H.value=je.value),ze.value&&(e.value=ze.value),He.value&&(he.value=He.value)}function tt(){me.value="",xe.value="",pe.value="",Ce.value="",Oe.value="",Se.value="",We.value="",Ae.value="",Fe.value="",ke.value="",we.value="",Le.value="",ge.value="",$e.value="",Ve.value="",Te.value="",Ee.value="",Ne.value="",Be.value="",De.value="",Me.value="",Re.value="",je.value="",ze.value="",He.value=""}return{entity_type_id:_,flat:f,flatAttr:S,building:d,buildingAttr:A,street:n,streetAttr:m,state:r,stateAttr:O,postal_code:s,postal_codeAttr:w,country:h,countryAttr:u,flat2:g,flat2Attr:c,building2:F,building2Attr:E,street2:B,street2Attr:Y,state2:T,state2Attr:Z,postal_code2:K,postal_code2Attr:Je,country2:D,country2Attr:$,first_name:M,first_nameAttr:J,last_name:R,last_nameAttr:Q,chn_first_name:j,chn_first_nameAttr:U,chn_last_name:X,chn_last_nameAttr:W,dob:be,dobAttr:ye,nationality:z,nationalityAttr:y,phone:ae,phoneAttr:ie,email:le,emailAttr:ue,confirm_email:ne,confirm_emailAttr:oe,occupation:H,occupationAttr:de,identity_no:e,identity_noAttr:ce,identity_no_suffix:L,identity_no_suffixAttr:N,passport_no:he,passport_noAttr:I,issuing_country:G,issuing_countryAttr:ve,is_founder:te,identity_type_id:re,identity_type_idAttr:fe,isSaving:Ie,correspondingAddressIsSame:Qe,hasChineseName:Ue,errors:x,handleSubmit:q,setFieldValue:V,updateFields:et,clearLocalStorage:tt,saveToLocalStorage:Pe,resetForm:C,validateVueSelectOnBlur:l}}),se=b=>(ct("data-v-7944d902"),b=b(),_t(),b),Wt={class:"side-panel"},yt={class:"list-group list-group-flush mt-4"},It={class:"list-group-item border-0 bg-transparent"},Pt=se(()=>v("img",{src:gt,alt:""},null,-1)),ea={class:"list-group-item border-0 bg-transparent"},ta=se(()=>v("i",{class:"bi bi-grid me-2 mode"},null,-1)),aa=wt('<ul class="list-group list-group-flush" style="margin-top:120px;" data-v-7944d902><li class="list-group-item border-0 bg-transparent" data-v-7944d902><i class="bi bi-gear mode" data-v-7944d902></i></li><li class="list-group-item border-0 bg-transparent" data-v-7944d902><i class="bi bi-cash-stack mode" data-v-7944d902></i></li><li class="list-group-item border-0 bg-transparent" data-v-7944d902><i class="bi bi-question-circle-fill" data-v-7944d902></i></li></ul>',1),ia={class:"main-panel shadow-sm"},la={class:"container-fluid"},ua={class:"row"},na={class:"col-12 p-lg-3 p-2 shadow-sm head-panel"},ca=se(()=>v("button",{class:"btn btn-lg p-1 py-0 d-md-none border-0","data-bs-toggle":"offcanvas","data-bs-target":"#startMobileOffcanvas","aria-controls":"startMobileOffcanvas"},[v("i",{class:"bi bi-justify fs-3"})],-1)),_a={key:0,class:"small fw-bold d-none d-md-inline"},sa={key:1,class:"badge bg-success-subtle text-success small"},va=se(()=>v("i",{class:"bi bi-check-circle"},null,-1)),oa={class:"float-end"},da=se(()=>v("span",{class:"me-3"},null,-1)),ra={key:0,class:"badge bg-success-subtle text-success small"},fa=se(()=>v("i",{class:"bi bi-check-circle"},null,-1)),ha={key:1,class:"badge bg-success-subtle text-danger small"},ba=se(()=>v("i",{class:"bi bi-check-circle"},null,-1)),qa={class:"mx-2 me-5 dropdown"},ma={"data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",class:"dropdown-toggle"},xa=se(()=>v("i",{class:"bi bi-person-circle"},null,-1)),pa=se(()=>v("i",{class:"bi bi-chevron-down"},null,-1)),Ca={class:"dropdown-menu dropdown-menu-start"},Oa=se(()=>v("i",{class:"bi bi-power"},null,-1)),Sa={class:"col-2 d-none d-md-block min-vh-100 sub-menu-panel"},Aa={class:"col-md-7 min-vh-100 sub-form-panel pt-4"},Fa={class:"car border-"},ka={class:"card-body pt-0 p-0 px-md-3"},wa={class:"col-3 d-none d-md-block min-vh-100 sub-info-panel p-3 pt-4 small"},La=nt({__name:"StartCompany_template",setup(b){pt(n=>({eab7ffb0:qe(p).bgColor,"08a2bdc0":qe(p).textColor}));const p=qt(),k=Xt(),x=Yt(),q=Zt(),a=Jt(),V=Qt(),C=Ut(),o=Ft(),l=mt();kt();const _=Ct(),f=it(()=>{var m,r;return(r=(m=_.companyInProgress)==null?void 0:m.billing)==null?void 0:r.status}),S=it(()=>{var m,r;return(r=(m=_.companyInProgress)==null?void 0:m.users)==null?void 0:r.kyc_status}),d=it(()=>{var O;let n="",m="";const r=((O=_.companyInProgress)==null?void 0:O.names)??[];if(r){const h=r.find(u=>u.choice_level==1);h&&(n=h!=null&&h.eng_name?h.eng_name+" "+h.eng_prefix:"",m=h.chn_name?h.chn_name+""+h.chn_prefix:"")}return n+" "+m});async function A(){await k.clearLocalStorage(),await x.clearLocalStorage(),await q.clearLocalStorage(),await a.clearLocalStorage(),await V.clearLocalStorage(),await C.clearLocalStorage(),await _.clearLocalStorage(),await o.logout(),l.replace({name:"Login"})}return(n,m)=>{const r=ht("router-link"),O=ht("appModeToggler");return P(),ee(xt,null,[v("div",Wt,[v("ul",yt,[v("li",It,[Ge(r,{to:"/"},{default:rt(()=>[Pt]),_:1})]),v("li",ea,[Ge(r,{to:"/user/dashboard"},{default:rt(()=>[ta]),_:1})])]),aa]),v("div",ia,[v("div",la,[v("div",ua,[v("div",na,[ca,Ke(" Start your Company "),d.value?(P(),ee("span",_a," ("+ut(d.value)+") ",1)):lt("",!0),f.value?(P(),ee("span",sa,[va,Ke(" Paid ")])):lt("",!0),v("span",oa,[da,S.value?(P(),ee("span",ra,[fa,Ke(" Verified ")])):(P(),ee("span",ha,[ba,Ke(" Not-Verified ")])),v("span",qa,[v("span",ma,[xa,Ke(" "+ut(qe(o).profileDataName)+" ",1),pa]),v("div",Ca,[v("span",{onClick:A,class:"dropdown-item text-danger"},[Oa,Ke(" Logout ")]),Ge(O,{class:"dropdown-item"})])])])]),v("div",Sa,[Ge(Ot)]),v("div",Aa,[v("div",Fa,[v("div",ka,[ft(n.$slots,"main",{},void 0,!0)])])]),v("div",wa,[ft(n.$slots,"info",{},void 0,!0)])])])]),Ge(Gt)],64)}}}),Na=st(La,[["__scopeId","data-v-7944d902"]]);export{Na as S,Ut as a,Jt as b,Xt as d,Qt as f,Yt as n,Zt as s};