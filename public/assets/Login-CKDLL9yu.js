import{d as T,u as A,r as m,c as a,a as s,w as v,v as C,b as t,m as h,i as b,t as g,e as u,f as F,g as q,h as B,j as D,o as i}from"./index-BZEjTmh0.js";import{d as E,a as G}from"./index-BbY1i6TT.js";import{u as U,c as $,a as y}from"./index.esm-BZFGEp7U.js";const j="/images/snap_shot.png",M={class:"bg-white min-vh-100"},P={class:"row g-0"},R={class:"col-lg-6 min-vh-100"},L={class:"container"},O={class:"everything-center overflow-hidden"},z={class:"col-12 col-md-7"},H={class:"card bg-transparent border-0"},J={class:"card-body"},K=s("h4",{class:"fw-bold lh-1"},"Sign In",-1),Q=s("div",null,"Access Squareone using your email and password",-1),W={class:"row mt-4 g-3"},X={class:"col-12"},Y=s("label",{class:"form-label fw-bold"}," Email ",-1),Z={class:"small text-danger"},ss={class:"col-12"},es={class:"form-label fw-bold"},ts={key:0,class:"bi bi-eye-slash cursor-pointer"},os={key:1,class:"bi bi-eye cursor-pointer"},as=["type"],is={class:"small text-danger"},ns={class:"col-12 mt-4"},ls=["disabled"],rs=s("i",{class:"bi bi-chevron-right"},null,-1),ds={key:1,class:"btn btn-primary w-100",type:"button",disabled:""},cs=s("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),us=B('<div class="col-lg-6 d-none d-lg-block bg-body-tertiary min-vh-100"><div class="container"><div class="everything-center overflow-hidden"><div class="col-10"><div class="card border-0 shadow-sm bg-light"><div class="card-body"><img style="width:100%;" src="'+j+'" alt=""></div></div></div></div></div></div>',1),bs=T({__name:"Login",setup(_s){const w=E.useToast(),f=A(),k=D(),r=m(!1),n=m("password"),S=()=>{n.value=n.value=="password"?"text":"password"},{errors:d,handleSubmit:x,defineField:_,setFieldValue:ps}=U({validationSchema:$({email:y().email().required(),password:y().min(6).required()})}),[c,N]=_("email"),[l,I]=_("password"),V=x(async p=>{r.value=!0;try{const o=(await G.login(p)).data.data;f.login(o.UserToken),k.push({name:"Start"})}catch(e){if(e.response&&e.response.status===401){w.error("Invalid credentials, try again",{position:"top-right"});return}}finally{r.value=!1}});return(p,e)=>(i(),a("div",M,[s("div",P,[s("div",R,[s("div",L,[s("div",O,[s("div",z,[s("div",H,[s("div",J,[K,Q,s("div",W,[s("div",X,[Y,v(s("input",h({"onUpdate:modelValue":e[0]||(e[0]=o=>b(c)?c.value=o:null)},t(N),{type:"text",class:"form-control"}),null,16),[[C,t(c)]]),s("span",Z,g(t(d).email),1)]),s("div",ss,[s("div",es,[u(" Password "),t(l)?(i(),a("span",{key:0,onClick:S,class:"float-end"},[n.value=="password"?(i(),a("i",ts)):(i(),a("i",os))])):F("",!0)]),v(s("input",h({"onUpdate:modelValue":e[1]||(e[1]=o=>b(l)?l.value=o:null)},t(I),{type:n.value,class:"form-control"}),null,16,as),[[q,t(l)]]),s("span",is,g(t(d).password),1)]),s("div",ns,[r.value?(i(),a("button",ds,[cs,u(" SIGNING IN... ")])):(i(),a("button",{key:0,disabled:Object.keys(t(d)).length>0,onClick:e[2]||(e[2]=o=>t(V)()),class:"btn btn-primary w-100"},[u(" SIGN IN "),rs],8,ls))])])])])])])])]),us])]))}});export{bs as default};
