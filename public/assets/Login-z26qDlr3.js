import{d as D,u as q,a as B,r as y,o as a,c as r,b as s,w as S,v as G,e as t,m as k,i as x,t as N,f as _,g as P,h as U,j as $}from"./index-CLFDDnkM.js";import{a as v}from"./index-Vpg-Z8mj.js";import{d as j}from"./index-Cx-2CM6P.js";import{u as M}from"./vee-validate.esm-Qcwsv4Y6.js";import{c as R,a as I}from"./index.esm-0t3I11WX.js";import"./StartCompany_store-DtfeQIOk.js";import"./StartCompany_jsonData-D7IJQ8VJ.js";import"./country-Dh2q9MdB.js";const L="/images/snap_shot.png",O={class:"bg-white min-vh-100"},z={class:"row g-0"},H={class:"col-lg-6 min-vh-100"},J={class:"container"},K={class:"everything-center overflow-hidden"},Q={class:"col-12 col-md-7"},W={class:"car p-3 rounded-3 bg-whit border-0"},X={class:"card-body"},Y=s("h4",{class:"fw-bold lh-1"},"Sign In",-1),Z=s("div",null,"Access Squareone using your email and password",-1),ss={class:"row mt-4 g-3"},es={class:"col-12"},ts=s("label",{class:"form-label fw-bold"}," Email ",-1),os={class:"small text-danger"},as={class:"col-12"},rs={class:"form-label fw-bold"},ns={key:0,class:"bi bi-eye-slash cursor-pointer"},is={key:1,class:"bi bi-eye cursor-pointer"},ls=["type"],ds={class:"small text-danger"},cs={class:"col-12 mt-4"},ps=["disabled"],ms=s("i",{class:"bi bi-chevron-right"},null,-1),us={key:1,class:"btn btn-primary w-100",type:"button",disabled:""},hs=s("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),_s=$('<div class="col-lg-6 d-none d-lg-block bg-body-tertiary min-vh-100"><div class="container"><div class="everything-center overflow-hidden"><div class="col-10"><div class="card border-0 shadow-sm bg-light exemption"><div class="card-body"><img style="width:100%;" src="'+L+'" alt=""></div></div></div></div></div></div>',1),Ts=D({__name:"Login",setup(vs){const m=j.useToast(),d=q(),u=B(),n=y(!1),c=y("password"),T=()=>{c.value=c.value=="password"?"text":"password"},{errors:i,handleSubmit:V,defineField:b,setFieldValue:bs}=M({validationSchema:R({email:I().email().required(),password:I().min(6).required()}),initialValues:{email:"",password:""}}),[h,A]=b("email"),[p,F]=b("password"),E=V(async l=>{n.value=!0;try{const o=(await v.login(l)).data.data;d.login(o),C()}catch(e){if(console.log(e,"error"),e.response&&e.response.status===401){m.error("Invalid credentials, try again",{position:"top-right"}),n.value=!1;return}if(e.response&&e.response.status===403){m.error(e.response.data.error,{position:"top-right"}),n.value=!1;return}m.error("Sorry Something went wrong, try again",{position:"top-right"}),n.value=!1}});async function C(){var e,o,g,f;const l=await v.companyProgress();try{(await v.checkAccountStatus()).data.data.enable_2fa_at?(d.twofactorEnabled="1",d.twofactorAttendedTo=null,u.push({name:"TwoFactorAuthentication"})):(d.twofactorEnabled=null,(o=(e=l.data)==null?void 0:e.company)!=null&&o.names?(console.log((f=(g=l.data)==null?void 0:g.company)==null?void 0:f.names,"res.data?.company?.names"),u.push({name:"User-Dashboard"})):u.push({name:"Start"}))}catch(w){console.log(w)}}return(l,e)=>(a(),r("div",O,[s("div",z,[s("div",H,[s("div",J,[s("div",K,[s("div",Q,[s("div",W,[s("div",X,[Y,Z,s("div",ss,[s("div",es,[ts,S(s("input",k({"onUpdate:modelValue":e[0]||(e[0]=o=>x(h)?h.value=o:null)},t(A),{type:"text",class:[{"error-field":t(i).email},"form-control exemption"]}),null,16),[[G,t(h)]]),s("span",os,N(t(i).email),1)]),s("div",as,[s("div",rs,[_(" Password "),t(p)?(a(),r("span",{key:0,onClick:T,class:"float-end"},[c.value=="password"?(a(),r("i",ns)):(a(),r("i",is))])):P("",!0)]),S(s("input",k({"onUpdate:modelValue":e[1]||(e[1]=o=>x(p)?p.value=o:null)},t(F),{type:c.value,class:[{"error-field":t(i).password},"form-control exemption"]}),null,16,ls),[[U,t(p)]]),s("span",ds,N(t(i).password),1)]),s("div",cs,[n.value?(a(),r("button",us,[hs,_(" SIGNING IN... ")])):(a(),r("button",{key:0,disabled:Object.keys(t(i)).length>0,onClick:e[2]||(e[2]=o=>t(E)()),class:"btn btn-primary w-100"},[_(" SIGN IN "),ms],8,ps))])])])])])])])]),_s])]))}});export{Ts as default};