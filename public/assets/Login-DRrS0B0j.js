import{d as F,u as E,a as C,r as v,o as a,c as n,b as s,w as b,v as q,e,m as w,i as g,t as f,f as _,g as B,h as D,j as G}from"./index-d_WrL_zj.js";import{a as y}from"./index-D_5T071w.js";import{d as $}from"./index-Bds7A4M-.js";import{u as j}from"./vee-validate.esm-DkCODyNc.js";import{c as M,a as S}from"./index.esm-DVUOn8d9.js";const P="/images/snap_shot.png",R={class:"bg-white min-vh-100"},U={class:"row g-0"},L={class:"col-lg-6 min-vh-100"},O={class:"container"},z={class:"everything-center overflow-hidden"},H={class:"col-12 col-md-7"},J={class:"car p-3 rounded-3 bg-whit border-0"},K={class:"card-body"},Q=s("h4",{class:"fw-bold lh-1"},"Sign In",-1),W=s("div",null,"Access Squareone using your email and password",-1),X={class:"row mt-4 g-3"},Y={class:"col-12"},Z=s("label",{class:"form-label fw-bold"}," Email ",-1),ss={class:"small text-danger"},ts={class:"col-12"},es={class:"form-label fw-bold"},os={key:0,class:"bi bi-eye-slash cursor-pointer"},as={key:1,class:"bi bi-eye cursor-pointer"},ns=["type"],is={class:"small text-danger"},rs={class:"col-12 mt-4"},ls=["disabled"],ds=s("i",{class:"bi bi-chevron-right"},null,-1),cs={key:1,class:"btn btn-primary w-100",type:"button",disabled:""},us=s("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),ps=G('<div class="col-lg-6 d-none d-lg-block bg-body-tertiary min-vh-100"><div class="container"><div class="everything-center overflow-hidden"><div class="col-10"><div class="card border-0 shadow-sm bg-light"><div class="card-body"><img style="width:100%;" src="'+P+'" alt=""></div></div></div></div></div></div>',1),fs=F({__name:"Login",setup(_s){const k=$.useToast(),r=E(),m=C(),c=v(!1),l=v("password"),x=()=>{l.value=l.value=="password"?"text":"password"},{errors:u,handleSubmit:N,defineField:h,setFieldValue:ms}=j({validationSchema:M({email:S().email().required(),password:S().min(6).required()})}),[p,I]=h("email"),[d,T]=h("password"),A=N(async i=>{c.value=!0;try{const o=(await y.login(i)).data.data;r.login(o),V()}catch(t){if(console.log(t,"error"),t.response&&t.response.status===401){k.error("Invalid credentials, try again",{position:"top-right"}),c.value=!1;return}}});async function V(){try{(await y.checkAccountStatus()).data.data.enable_2fa_at?(r.twofactorEnabled="1",r.twofactorAttendedTo=null,m.push({name:"TwoFactorAuthentication"})):(r.twofactorEnabled=null,m.push({name:"Start"})),window.location.reload()}catch(i){console.log(i)}}return(i,t)=>(a(),n("div",R,[s("div",U,[s("div",L,[s("div",O,[s("div",z,[s("div",H,[s("div",J,[s("div",K,[Q,W,s("div",X,[s("div",Y,[Z,b(s("input",w({"onUpdate:modelValue":t[0]||(t[0]=o=>g(p)?p.value=o:null)},e(I),{type:"text",class:"form-control exemption"}),null,16),[[q,e(p)]]),s("span",ss,f(e(u).email),1)]),s("div",ts,[s("div",es,[_(" Password "),e(d)?(a(),n("span",{key:0,onClick:x,class:"float-end"},[l.value=="password"?(a(),n("i",os)):(a(),n("i",as))])):B("",!0)]),b(s("input",w({"onUpdate:modelValue":t[1]||(t[1]=o=>g(d)?d.value=o:null)},e(T),{type:l.value,class:"form-control exemption"}),null,16,ns),[[D,e(d)]]),s("span",is,f(e(u).password),1)]),s("div",rs,[c.value?(a(),n("button",cs,[us,_(" SIGNING IN... ")])):(a(),n("button",{key:0,disabled:Object.keys(e(u)).length>0,onClick:t[2]||(t[2]=o=>e(A)()),class:"btn btn-primary w-100"},[_(" SIGN IN "),ds],8,ls))])])])])])])])]),ps])]))}});export{fs as default};
