import{d as T,u as A,r as m,c as a,a as s,w as v,v as C,b as t,m as h,i as b,t as g,e as p,f as F,g as q,h as B,j as D,o as i}from"./index-CGgInkWs.js";import{a as E}from"./index-C3JiOZTc.js";import{d as G}from"./index-DRJeMT7I.js";import{u as $,c as j,a as y}from"./index.esm-Dt2_sUa1.js";const M="/images/snap_shot.png",P={class:"bg-white min-vh-100"},R={class:"row g-0"},U={class:"col-lg-6 min-vh-100"},L={class:"container"},O={class:"everything-center overflow-hidden"},z={class:"col-12 col-md-7"},H={class:"card bg-transparent border-0"},J={class:"card-body"},K=s("h4",{class:"fw-bold lh-1"},"Sign In",-1),Q=s("div",null,"Access Squareone using your email and password",-1),W={class:"row mt-4 g-3"},X={class:"col-12"},Y=s("label",{class:"form-label fw-bold"}," Email ",-1),Z={class:"small text-danger"},ss={class:"col-12"},es={class:"form-label fw-bold"},ts={key:0,class:"bi bi-eye-slash cursor-pointer"},os={key:1,class:"bi bi-eye cursor-pointer"},as=["type"],is={class:"small text-danger"},ns={class:"col-12 mt-4"},rs=["disabled"],ls=s("i",{class:"bi bi-chevron-right"},null,-1),ds={key:1,class:"btn btn-primary w-100",type:"button",disabled:""},cs=s("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),ps=B('<div class="col-lg-6 d-none d-lg-block bg-body-tertiary min-vh-100"><div class="container"><div class="everything-center overflow-hidden"><div class="col-10"><div class="card border-0 shadow-sm bg-light"><div class="card-body"><img style="width:100%;" src="'+M+'" alt=""></div></div></div></div></div></div>',1),gs=T({__name:"Login",setup(us){const f=G.useToast(),w=A(),S=D(),l=m(!1),n=m("password"),k=()=>{n.value=n.value=="password"?"text":"password"},{errors:d,handleSubmit:x,defineField:u,setFieldValue:_s}=$({validationSchema:j({email:y().email().required(),password:y().min(6).required()})}),[c,N]=u("email"),[r,I]=u("password"),V=x(async _=>{l.value=!0;try{const o=(await E.login(_)).data.data;w.login(o),S.push({name:"Start"})}catch(e){if(e.response&&e.response.status===401){f.error("Invalid credentials, try again",{position:"top-right"});return}}finally{l.value=!1}});return(_,e)=>(i(),a("div",P,[s("div",R,[s("div",U,[s("div",L,[s("div",O,[s("div",z,[s("div",H,[s("div",J,[K,Q,s("div",W,[s("div",X,[Y,v(s("input",h({"onUpdate:modelValue":e[0]||(e[0]=o=>b(c)?c.value=o:null)},t(N),{type:"text",class:"form-control"}),null,16),[[C,t(c)]]),s("span",Z,g(t(d).email),1)]),s("div",ss,[s("div",es,[p(" Password "),t(r)?(i(),a("span",{key:0,onClick:k,class:"float-end"},[n.value=="password"?(i(),a("i",ts)):(i(),a("i",os))])):F("",!0)]),v(s("input",h({"onUpdate:modelValue":e[1]||(e[1]=o=>b(r)?r.value=o:null)},t(I),{type:n.value,class:"form-control"}),null,16,as),[[q,t(r)]]),s("span",is,g(t(d).password),1)]),s("div",ns,[l.value?(i(),a("button",ds,[cs,p(" SIGNING IN... ")])):(i(),a("button",{key:0,disabled:Object.keys(t(d)).length>0,onClick:e[2]||(e[2]=o=>t(V)()),class:"btn btn-primary w-100"},[p(" SIGN IN "),ls],8,rs))])])])])])])])]),ps])]))}});export{gs as default};
