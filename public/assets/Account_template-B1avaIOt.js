import{d as v,K as C,k as V,o as a,c as i,b as s,B as l,s as h,e as t,g as d,R as b,f,G as g,H as T,t as M,L as $,C as w,D as y,_ as x,a as A,A as I,M as O,r as L,l as H,u as W,N as Z}from"./index-_hV3m8EQ.js";import{u as j}from"./paramsStore-BWprsx_J.js";import{_ as P}from"./squareone_main-2JuHQn5X.js";import{a as E}from"./index-RCXhkf4Y.js";import{u as G}from"./useFunctions-BM4ZfLX9.js";import"./sweetalert2.all-jPLlz7Iy.js";const k=e=>(w("data-v-32523ffb"),e=e(),y(),e),K={class:"list-group list-group-flush"},U={class:"list-group-item"},Y=k(()=>s("i",{class:"bi bi-grid me-2"},null,-1)),q={key:0},J={key:0,class:"list-group-item"},Q={class:"accordion",id:"accordionMenuCaompany"},X={class:"accordion-item"},ss={class:"accordion-header_",id:"menu1Heading"},ts={class:"accordion-button collapsed",type:"button",style:{padding:"0px"},"data-bs-toggle":"collapse","data-bs-target":"#accordionMenuCompanyCollapse","aria-expanded":"true","aria-controls":"accordionMenuCompanyCollapse"},es=k(()=>s("i",{class:"bi bi-building me-2"},null,-1)),os={key:0,class:"single-list-item"},as={id:"accordionMenuCompanyCollapse",class:"accordion-collapse collapse","aria-labelledby":"menu1Heading","data-bs-parent":"#accordionMenuCaompany"},is={class:"accordion-body"},ns={key:0,class:"nav flex-column mt-2"},ls={class:"list-group-item"},cs=k(()=>s("i",{class:"bi bi-people me-2"},null,-1)),ds={key:0},rs={class:"mt-5"},_s={class:"list-group list-group-flush"},ps={key:0,class:"list-group-item text-secondary"},us={class:"list-group-item"},hs=k(()=>s("i",{class:"bi bi-gear"},null,-1)),ms={key:0},bs={class:"list-group-item"},fs=k(()=>s("i",{class:"bi bi-cash-stack"},null,-1)),gs={key:0},vs=v({__name:"menuList",setup(e){$(r=>({"751f30ae":t(o).textColor}));const o=C(),n=j();return V(async()=>{await n.getCompanies()}),(r,c)=>(a(),i(g,null,[s("ul",K,[s("li",U,[l(t(b),{to:"/user/dashboard",class:"single-list-items"},{default:h(()=>[Y,t(o).sidebarIsCollapsed?d("",!0):(a(),i("span",q,"Dashboard"))]),_:1})]),t(o).sidebarIsCollapsed?d("",!0):(a(),i("li",J,[s("div",Q,[s("div",X,[s("span",ss,[s("a",ts,[es,t(o).sidebarIsCollapsed?d("",!0):(a(),i("span",os,"Company")),f("   ")])]),s("div",as,[s("div",is,[t(n).companies.list.length?(a(),i("ul",ns,[(a(!0),i(g,null,T(t(n).companies.list,p=>(a(),i("li",{key:p,class:"nav-item single-list-items"},[l(t(b),{onClick:N=>t(n).currentCompanyId=p.id,to:"/user/company"},{default:h(()=>[f(M(t(n).computedCoyName(p)),1)]),_:2},1032,["onClick"])]))),128))])):d("",!0)])])])])])),s("li",ls,[l(t(b),{to:"/user/users",class:"single-list-items"},{default:h(()=>[cs,t(o).sidebarIsCollapsed?d("",!0):(a(),i("span",ds,"My Team"))]),_:1})])]),s("div",rs,[s("ul",_s,[t(o).sidebarIsCollapsed?d("",!0):(a(),i("li",ps,"Preferences")),s("li",us,[l(t(b),{to:"/user/account",class:"single-list-items"},{default:h(()=>[hs,t(o).sidebarIsCollapsed?d("",!0):(a(),i("span",ms," Settings"))]),_:1})]),s("li",bs,[l(t(b),{to:"/user/billings",class:"single-list-items"},{default:h(()=>[fs,t(o).sidebarIsCollapsed?d("",!0):(a(),i("span",gs," Billings"))]),_:1})])])])],64))}}),F=x(vs,[["__scopeId","data-v-32523ffb"]]),B=e=>(w("data-v-b00e0aad"),e=e(),y(),e),Cs={class:"sidebar"},$s={key:0,class:"px-2 pt-3 pb-3"},ws=B(()=>s("svg",{width:"40",height:"33",viewBox:"0 0 1500 2153",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M750 1305.69V1666.84C750 1666.84 750 1722.4 680.556 1764.07C611.111 1805.74 111.111 2111.33 111.111 2111.33C111.111 2111.33 13.8889 2180.78 13.8889 2097.44C13.8889 2014.1 13.8889 1736.29 13.8889 1736.29C13.8889 1736.29 13.8889 1694.62 55.5556 1666.84C97.2222 1639.06 694.444 1277.91 694.444 1277.91L763.889 1291.8L750 1305.69Z",fill:"#006CFC"}),s("path",{d:"M750 847.31V486.161C750 486.161 750 430.6 819.444 388.929C888.889 347.258 1388.89 41.671 1388.89 41.671C1388.89 41.671 1486.11 -27.7806 1486.11 55.5614C1486.11 138.903 1486.11 416.71 1486.11 416.71C1486.11 416.71 1486.11 458.381 1444.44 486.161C1402.78 513.942 805.556 875.09 805.556 875.09L736.111 861.2L750 847.31Z",fill:"#006CFC"}),s("path",{d:"M13.8889 791.748C13.8889 791.748 13.8889 875.09 83.3333 916.761C152.778 958.432 1416.67 1722.4 1416.67 1722.4C1416.67 1722.4 1486.11 1764.07 1486.11 1694.62C1486.11 1625.17 1486.11 1361.25 1486.11 1361.25C1486.11 1361.25 1486.11 1277.91 1416.67 1236.24C1347.22 1194.57 97.2222 444.49 97.2222 444.49C97.2222 444.49 13.8889 388.929 13.8889 472.271C13.8889 555.613 13.8889 791.748 13.8889 791.748Z",fill:"#006CFC"})],-1)),ys={key:1,class:"px-2 pt-3 pb-3"},xs={width:"40",height:"33",version:"1.1",class:"logoClass",id:"Layer_3",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 108 155",style:{"enable-background":"new  155  108 155"},"xml:space":"preserve"},ks=B(()=>s("path",{class:"st0",d:"M54,94v26c0,0,0,4-5,7S8,152,8,152s-7,5-7-1s0-26,0-26s0-3,3-5s46-28,46-28l5,1L54,94z"},null,-1)),Ss=B(()=>s("path",{class:"st0",d:"M54,61V35c0,0,0-4,5-7s41-25,41-25s7-5,7,1s0,26,0,26s0,3-3,5S58,63,58,63l-5-1L54,61z"},null,-1)),Ms=B(()=>s("path",{class:"st0",d:"M1,57c0,0,0,6,5,9s96,58,96,58s5,3,5-2s0-24,0-24s0-6-5-9S7,32,7,32s-6-4-6,2S1,57,1,57z"},null,-1)),Bs=[ks,Ss,Ms],Is={class:"mt-2"},Ls=v({__name:"sideBar",setup(e){$(n=>({f8362e44:t(o).sidebarWidth,"79163c8a":t(o).bgColor}));const o=C();return A(),(n,r)=>{const c=I("router-link");return a(),i("div",Cs,[t(o).appMode=="light"?(a(),i("div",$s,[l(c,{to:"/"},{default:h(()=>[ws]),_:1})])):(a(),i("div",ys,[(a(),i("svg",xs,Bs))])),s("div",Is,[l(F)])])}}}),Ns=x(Ls,[["__scopeId","data-v-b00e0aad"]]),Vs=e=>(w("data-v-d2df3c35"),e=e(),y(),e),Ts={class:"offcanvas offcanvas-start",tabindex:"-1",id:"sideBarMobileOffcanvas","aria-labelledby":"sideBarMobileOffcanvasLabel"},As={class:"offcanvas-header"},Fs=Vs(()=>s("img",{class:"m-3",src:P,width:"100",alt:""},null,-1)),Rs={class:"offcanvas-body"},zs=v({__name:"sideBarMobile",setup(e){$(c=>({"5e73f302":t(o).bgColor}));const o=C(),n=O(),r=L(null);return H(()=>n.path,()=>{r.value.click()}),(c,p)=>(a(),i("div",Ts,[s("div",As,[Fs,s("button",{ref_key:"btnClose",ref:r,type:"button",class:"btn-close text-reset btn-close-white","data-bs-dismiss":"offcanvas","aria-label":"Close"},null,512)]),s("div",Rs,[l(F)])]))}}),Ds=x(zs,[["__scopeId","data-v-d2df3c35"]]),_=e=>(w("data-v-b6902699"),e=e(),y(),e),Os={class:"navbar navbar-expand-sm shadow-sm"},Hs={class:"container"},Ws={class:"navbar-brand"},Zs=_(()=>s("i",{class:"bi bi-justify"},null,-1)),js=[Zs],Ps=_(()=>s("button",{class:"btn btn-lg p-1 py-0 d-md-none","data-bs-toggle":"offcanvas","data-bs-target":"#sideBarMobileOffcanvas","aria-controls":"sideBarMobileOffcanvas"},[s("i",{class:"bi bi-justify fs-3"})],-1)),Es={class:"d-none d-md-block"},Gs={class:"mx-4 dropdown"},Ks=_(()=>s("i",{class:"bi bi-bell",style:{"font-size":"16px","font-weight":"700",color:"blue"}},null,-1)),Us={key:0,class:"position-absolute top-0 start-100 translate-middle p-1 mt-2 bg-danger border border-light rounded-circle"},Ys=_(()=>s("span",{class:"visually-hidden"},null,-1)),qs=[Ys],Js={class:"dropdown-menu dropdown-menu-end"},Qs={key:0,class:"dropdown-item"},Xs={key:1},st={class:"list-group list-group-flush"},tt={class:"small text-mut"},et={class:"text-danger-emphasis fst-italic"},ot=_(()=>s("span",{class:"line-right"},null,-1)),at={class:"mx-4 me-5 dropdown"},it={"data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",class:"dropdown-toggle"},nt=_(()=>s("i",{class:"bi bi-person-fill"},null,-1)),lt={style:{"font-weight":"450"}},ct=_(()=>s("i",{class:"bi bi-chevron-down"},null,-1)),dt={class:"dropdown-menu dropdown-menu-end"},rt=_(()=>s("div",{class:"dropdown-divider"},null,-1)),_t=v({__name:"headBar",setup(e){$(S=>({"87c9ced4":t(c).sidebarWidth,"43bf19d2":t(c).bgColor,"3143d62c":t(c).textColor})),V(()=>{N()});const o=L([]),n=W(),r=A(),c=C(),p=L(!1);async function N(){var S;try{const u=await E.userNotifications();o.value=((S=u.data)==null?void 0:S.data)??[]}catch{}}async function R(){await n.logout(),r.replace({name:"Login"})}return(S,u)=>{const z=I("router-link"),D=I("appModeToggler");return a(),i(g,null,[s("nav",Os,[s("div",Hs,[s("span",Ws,[s("span",{onClick:u[0]||(u[0]=m=>t(c).sideBarToggleCollapse()),class:"cursor-pointer"},js)]),Ps,s("div",Es,[s("span",Gs,[s("span",{onClick:u[1]||(u[1]=m=>p.value=!0),class:"position-relative cursor-pointer bell dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},[Ks,p.value?d("",!0):(a(),i("span",Us,qs)),s("div",Js,[o.value.length?(a(),i("div",Xs,[s("ul",st,[(a(!0),i(g,null,T(o.value,m=>(a(),i("li",{key:m,class:"dropdown-item list-group-ite small text-wrap",style:{"border-bottom":"1px solid #eee"}},[s("div",tt,[f(M(m.content)+" ",1),s("p",et,M(t(G).timeAgo(m.created_at)),1)])]))),128))])])):(a(),i("div",Qs," No Notificatons"))])])]),ot,s("span",at,[s("span",it,[nt,s("small",lt,"   "+M(t(n).profileDataName.toUpperCase()),1),ct]),s("div",dt,[l(z,{class:"dropdown-item",to:"/user/account"},{default:h(()=>[f("Settings")]),_:1}),s("span",{class:"dropdown-item",onClick:R},"Logout"),rt,l(D,{class:"dropdown-item"})])])])])]),l(Ds)],64)}}}),pt=x(_t,[["__scopeId","data-v-b6902699"]]),ut=e=>(w("data-v-1cc8ca21"),e=e(),y(),e),ht={class:"main-content"},mt={class:"container"},bt=ut(()=>s("div",{class:"col-12"},[s("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}),s("strong",null,"Information Alert!"),f(" You should check out this information details. ")])],-1)),ft={class:"card border-0 exemption"},gt={class:"card-body"},vt=v({__name:"Account_template",setup(e){$(n=>({"71e7e02a":t(o).accountTemplateBg,"1d743cb5":t(o).textColor,71569956:t(o).cardBg,"2e2ffc05":t(o).cardTextColor,"4f484e2a":t(o).sidebarWidth}));const o=C();return(n,r)=>(a(),i(g,null,[l(Ns),l(pt),s("div",ht,[s("div",mt,[bt,s("div",ft,[s("div",gt,[l(t(Z))])])])])],64))}}),St=x(vt,[["__scopeId","data-v-1cc8ca21"]]);export{St as default};
