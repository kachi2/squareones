import{d as m,u as v,r as b,a as f,c as a,b as s,w as d,v as g,e as c,f as w,g as y,h as k,o as i}from"./index-BmrTFftG.js";import{d as S,u as x,a as I}from"./useFunctions-DpQbuiB6.js";const N={class:"bg-white"},T={class:"container"},V={class:"everything-center overflow-hidden"},C={class:"col-12 col-md-6 col-lg-4"},E={class:"card bg-transparent border-0"},B={class:"card-body"},G=s("h4",{class:"fw-bold lh-1"},"Sign In",-1),U=s("div",{class:"lh-1"},"Access Squareone using your email and password",-1),A={class:"row mt-4 g-3"},D={class:"col-12"},F=s("label",{class:"form-label fw-bold"}," Email ",-1),M={class:"col-12"},P={class:"form-label fw-bold"},q={key:0,class:"bi bi-eye-slash cursor-pointer"},L={key:1,class:"bi bi-eye cursor-pointer"},R=["type"],j={class:"col-12 mt-4"},z=s("i",{class:"bi bi-chevron-right"},null,-1),H={key:1,class:"btn btn-primary w-100",type:"button",disabled:""},J=s("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),W=m({__name:"Login",setup(K){const r=S.useToast(),p=v(),u=k(),o=b({email:"",password:"",isSaving:!1}),n=f("password"),_=()=>{n.value=n.value=="password"?"text":"password"};async function h(){if(!o.email||!o.password){r.default("Please complete fields!",{position:"top-right"});return}if(!x.isEmail(o.email)){r.warning("This email looks invalid",{position:"top-right"});return}o.isSaving=!0;try{const t=await I.login(o),e=t.data.data;console.log(t.data.data),p.login(e.UserToken),u.push({name:"Start"})}catch(t){if(console.log(t),t.response&&t.response.status===401){r.error("Invalid credentials, try again",{position:"top-right"});return}}finally{o.isSaving=!1}}return(t,e)=>(i(),a("div",N,[s("div",T,[s("div",V,[s("div",C,[s("div",E,[s("div",B,[G,U,s("div",A,[s("div",D,[F,d(s("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>o.email=l),type:"text",class:"form-control"},null,512),[[g,o.email]])]),s("div",M,[s("div",P,[c(" Password "),o.password?(i(),a("span",{key:0,onClick:_,class:"float-end"},[n.value=="password"?(i(),a("i",q)):(i(),a("i",L))])):w("",!0)]),d(s("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>o.password=l),type:n.value,class:"form-control"},null,8,R),[[y,o.password]])]),s("div",j,[o.isSaving?(i(),a("button",H,[J,c(" SIGNING IN... ")])):(i(),a("button",{key:0,onClick:h,class:"btn btn-primary w-100"},[c(" SIGN IN "),z]))])])])])])])])]))}});export{W as default};