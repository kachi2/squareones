import{d as E,u as C,a as D,r as f,o as a,c as r,b as s,w,v as q,e as t,m as y,i as S,t as k,f as _,g as B,h as G,j as P}from"./index-Cx72Huz2.js";import{a as v}from"./index-DONKfzbq.js";import{d as U}from"./index-B5ITiLTV.js";import{u as $}from"./vee-validate.esm-QW81bm_-.js";import{c as j,a as x}from"./index.esm-B33d4YFk.js";import"./StartCompany_store-DR-pGTYS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./StartCompany_jsonData-D7IJQ8VJ.js";import"./country-Dh2q9MdB.js";const M="/images/snap_shot.png",R={class:"bg-white min-vh-100"},L={class:"row g-0"},O={class:"col-lg-6 min-vh-100"},z={class:"container"},H={class:"everything-center overflow-hidden"},J={class:"col-12 col-md-7"},K={class:"car p-3 rounded-3 bg-whit border-0"},Q={class:"card-body"},W=s("h4",{class:"fw-bold lh-1"},"Sign In",-1),X=s("div",null,"Access Squareone using your email and password",-1),Y={class:"row mt-4 g-3"},Z={class:"col-12"},ss=s("label",{class:"form-label fw-bold"}," Email ",-1),es={class:"small text-danger"},ts={class:"col-12"},os={class:"form-label fw-bold"},as={key:0,class:"bi bi-eye-slash cursor-pointer"},rs={key:1,class:"bi bi-eye cursor-pointer"},is=["type"],ns={class:"small text-danger"},ls={class:"col-12 mt-4"},ds=["disabled"],cs=s("i",{class:"bi bi-chevron-right"},null,-1),ps={key:1,class:"btn btn-primary w-100",type:"button",disabled:""},us=s("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),ms=P('<div class="col-lg-6 d-none d-lg-block bg-body-tertiary min-vh-100"><div class="container"><div class="everything-center overflow-hidden"><div class="col-10"><div class="card border-0 shadow-sm bg-light exemption"><div class="card-body"><img style="width:100%;" src="'+M+'" alt=""></div></div></div></div></div></div>',1),Is=E({__name:"Login",setup(hs){const u=U.useToast(),l=C(),m=D(),i=f(!1),d=f("password"),N=()=>{d.value=d.value=="password"?"text":"password"},{errors:n,handleSubmit:I,defineField:b,setFieldValue:_s}=$({validationSchema:j({email:x().email().required(),password:x().min(6).required()}),initialValues:{email:"",password:""}}),[h,T]=b("email"),[c,V]=b("password"),A=I(async p=>{i.value=!0;try{const o=(await v.login(p)).data.data;l.login(o),F()}catch(e){if(console.log(e,"error"),e.response&&e.response.status===401){u.error("Invalid credentials, try again",{position:"top-right"}),i.value=!1;return}if(e.response&&e.response.status===403){u.error(e.response.data.error,{position:"top-right"}),i.value=!1;return}u.error("Sorry Something went wrong, try again",{position:"top-right"}),i.value=!1}});async function F(){var e,o;const p=await v.companyProgress();try{(await v.checkAccountStatus()).data.data.enable_2fa_at?(l.twofactorEnabled="1",l.twofactorAttendedTo=null,m.push({name:"TwoFactorAuthentication"})):(l.twofactorEnabled=null,(o=(e=p.data)==null?void 0:e.company)!=null&&o.names?m.push({name:"User-Dashboard"}):m.push({name:"Start"}))}catch(g){console.log(g)}}return(p,e)=>(a(),r("div",R,[s("div",L,[s("div",O,[s("div",z,[s("div",H,[s("div",J,[s("div",K,[s("div",Q,[W,X,s("div",Y,[s("div",Z,[ss,w(s("input",y({"onUpdate:modelValue":e[0]||(e[0]=o=>S(h)?h.value=o:null)},t(T),{type:"text",class:[{"error-field":t(n).email},"form-control exemption"]}),null,16),[[q,t(h)]]),s("span",es,k(t(n).email),1)]),s("div",ts,[s("div",os,[_(" Password "),t(c)?(a(),r("span",{key:0,onClick:N,class:"float-end"},[d.value=="password"?(a(),r("i",as)):(a(),r("i",rs))])):B("",!0)]),w(s("input",y({"onUpdate:modelValue":e[1]||(e[1]=o=>S(c)?c.value=o:null)},t(V),{type:d.value,class:[{"error-field":t(n).password},"form-control exemption"]}),null,16,is),[[G,t(c)]]),s("span",ns,k(t(n).password),1)]),s("div",ls,[i.value?(a(),r("button",ps,[us,_(" SIGNING IN... ")])):(a(),r("button",{key:0,disabled:Object.keys(t(n)).length>0,onClick:e[2]||(e[2]=o=>t(A)()),class:"btn btn-primary w-100"},[_(" SIGN IN "),cs],8,ds))])])])])])])])]),ms])]))}});export{Is as default};
