import{C as p,r as a,I as n}from"./index-cYwMucy6.js";import{a as u}from"./index-DSG1T6XT.js";const M=p("useAdminParamsStore",()=>{const s={coyInfoModal:a(!1),incopModal:a(!1),regOfficeModal:a(!1),complianceReportingModal:a(!1),regOfDirectorsModal:a(!1),regOfShareholdersModal:a(!1),regOfSecretaryModal:a(!1),regOfNameChangeModal:a(!1),regOfChargeModal:a(!1),sigControllerModal:a(!1),designatedRepModal:a(!1),documentUploadModal:a(!1)},l=n("squre1-coyId",""),d=n("squre1-coyUserId",""),t=a(""),r=a(""),c=a(!1);async function f(){try{const o=(await u.getCompanyDetails(l.value)).data.data;t.value=o,r.value="",console.log(o)}catch{}}function i(e,o){r.value=o??"",s[e].value=!s[e].value}return{currentCompanyId:l,currentCompanyData:t,idToEdit:r,hasUpdatedProgress:c,isCompaniesByUser:d,getCompanyDetails:f,openModalForm:i,...s}});export{M as u};