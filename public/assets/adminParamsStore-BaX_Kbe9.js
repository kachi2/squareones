import{E as M,r as a,I as c}from"./index-bJf0D_xI.js";import{a as y}from"./index-DNXFy-b_.js";const v=M("useAdminParamsStore",()=>{const s={coyInfoModal:a(!1),incopModal:a(!1),regOfficeModal:a(!1),complianceReportingModal:a(!1),regOfDirectorsModal:a(!1),regOfShareholdersModal:a(!1),regOfSecretaryModal:a(!1),regOfNameChangeModal:a(!1),regOfChargeModal:a(!1),sigControllerModal:a(!1),designatedRepModal:a(!1),documentUploadModal:a(!1),regOfAllotmentsModal:a(!1),regOfTransferModal:a(!1)},r=c("squre1-coyId",""),d=c("squre1-coyUserId",""),l=a(""),t=a(""),n=a([]),f=a(!1);async function i(){try{const o=(await y.getCompanyDetails(r.value)).data.data;l.value=o,t.value=""}catch{}}const m=async()=>{const e=await fetch("https://restcountries.com/v3.1/all");if(e.ok){let p=(await e.json()).map(g=>g.name.common);n.value=p.sort()}else console.error("",e.statusText)};function u(e,o){t.value=o??"",s[e].value=!s[e].value}return{currentCompanyId:r,currentCompanyData:l,idToEdit:t,hasUpdatedProgress:f,isCompaniesByUser:d,countries:n,getCompanyDetails:i,openModalForm:u,getCountries:m,...s}});export{v as u};