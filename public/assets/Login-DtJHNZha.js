import{d as A,u as C,r as h,c as a,a as s,w as m,v as F,b as t,m as b,i as g,t as y,e as u,f as q,g as B,h as D,j as E,o as i}from"./index-BeIEILmY.js";import{d as G,u as U,c as $,a as w,b as j}from"./index.esm-QFCq8cdW.js";const M="/images/snap_shot.png",P={class:"bg-white min-vh-100"},R={class:"row g-0"},L={class:"col-lg-6 min-vh-100"},O={class:"container"},z={class:"everything-center overflow-hidden"},H={class:"col-12 col-md-7"},J={class:"card bg-transparent border-0"},K={class:"card-body"},Q=s("h4",{class:"fw-bold lh-1"},"Sign In",-1),W=s("div",null,"Access Squareone using your email and password",-1),X={class:"row mt-4 g-3"},Y={class:"col-12"},Z=s("label",{class:"form-label fw-bold"}," Email ",-1),ss={class:"small text-danger"},es={class:"col-12"},ts={class:"form-label fw-bold"},os={key:0,class:"bi bi-eye-slash cursor-pointer"},as={key:1,class:"bi bi-eye cursor-pointer"},is=["type"],ns={class:"small text-danger"},ls={class:"col-12 mt-4"},rs=["disabled"],ds=s("i",{class:"bi bi-chevron-right"},null,-1),cs={key:1,class:"btn btn-primary w-100",type:"button",disabled:""},us=s("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),_s=D('<div class="col-lg-6 d-none d-lg-block bg-body-tertiary min-vh-100"><div class="container"><div class="everything-center overflow-hidden"><div class="col-10"><div class="card border-0 shadow-sm bg-light"><div class="card-body"><img style="width:100%;" src="'+M+'" alt=""></div></div></div></div></div></div>',1),ms=A({__name:"Login",setup(ps){const f=G.useToast(),k=C(),S=E(),r=h(!1),n=h("password"),x=()=>{n.value=n.value=="password"?"text":"password"},{errors:d,handleSubmit:N,defineField:_,setFieldValue:p}=U({validationSchema:$({email:w().email().required(),password:w().min(6).required()})}),[c,I]=_("email"),[l,V]=_("password"),T=N(async v=>{r.value=!0;try{const o=(await j.login(v)).data.data;k.login(o.UserToken),p("email",""),p("password",""),S.push({name:"Start"})}catch(e){if(e.response&&e.response.status===401){f.error("Invalid credentials, try again",{position:"top-right"});return}}finally{r.value=!1}});return(v,e)=>(i(),a("div",P,[s("div",R,[s("div",L,[s("div",O,[s("div",z,[s("div",H,[s("div",J,[s("div",K,[Q,W,s("div",X,[s("div",Y,[Z,m(s("input",b({"onUpdate:modelValue":e[0]||(e[0]=o=>g(c)?c.value=o:null)},t(I),{type:"text",class:"form-control"}),null,16),[[F,t(c)]]),s("span",ss,y(t(d).email),1)]),s("div",es,[s("div",ts,[u(" Password "),t(l)?(i(),a("span",{key:0,onClick:x,class:"float-end"},[n.value=="password"?(i(),a("i",os)):(i(),a("i",as))])):q("",!0)]),m(s("input",b({"onUpdate:modelValue":e[1]||(e[1]=o=>g(l)?l.value=o:null)},t(V),{type:n.value,class:"form-control"}),null,16,is),[[B,t(l)]]),s("span",ns,y(t(d).password),1)]),s("div",ls,[r.value?(i(),a("button",cs,[us,u(" SIGNING IN... ")])):(i(),a("button",{key:0,disabled:Object.keys(t(d)).length>0,onClick:e[2]||(e[2]=o=>t(T)()),class:"btn btn-primary w-100"},[u(" SIGN IN "),ds],8,rs))])])])])])])])]),_s])]))}});export{ms as default};
