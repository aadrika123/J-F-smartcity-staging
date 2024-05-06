import{a as W,r as l,b as o,Q as v,j as s,L as X,A as Z}from"./index-dd1288ad.js";import{P as k}from"./Page-c37fa378.js";import{B as ee}from"./Breadcrumb-5eaf1e4d.js";import{u as se,F as te,a as ie}from"./formik.esm-5fbe598e.js";import{S as ae}from"./StudentAdd-c128c818.js";import{c as le,a as n,d as ne}from"./index.esm-e655e2bf.js";import{g as A}from"./index-c9d77209.js";import{S as u,a as r,L as re}from"./LoadingButton-8b46375a.js";import"./TextField-b2648471.js";import"./index-20c391bc.js";function ve(){var N,S,f,q,I,L,R,w;const F=W(),[M,a]=l.useState(!1),{api_category:C,api_class:D,api_financialYear:z,api_section:B,api_add_student:_,api_fetchmonth:$}=Z,[j,V]=l.useState(),[m,Y]=l.useState(),[h,E]=l.useState(),[p,O]=l.useState(),[g,P]=l.useState([]),[b,T]=l.useState(!1),y=()=>T(!b),G=le({fullName:n().required("Required"),fatherName:n().required("Required"),admissionNo:n().required("Required"),admissionDate:n().required("Required"),specialAbility:n().required("Required"),quotaId:n().required("Required"),rollNo:n().required("Required").min(1).max(4),dob:ne().required("Required").test("dob","Age must be greater than 1 year",e=>{const d=new Date,c=new Date(e),x=d.getFullYear()-c.getFullYear(),i=d.getMonth()-c.getMonth();return i<0||i===0&&d.getDate()<c.getDate()?x-1:x}),mobile:n().required("Required").min(10).max(10)}),t=se({initialValues:{monthId:"1",fullName:"",rollNo:"",dob:"",fatherName:"",email:"",mobile:"",admissionNo:"",fyId:"1",admissionDate:new Date().toISOString().slice(0,10),classId:"1",sectionId:"1",status:"1",gender:"1",specialAbility:"0",quotaId:"0",categoryId:"4",isMidSession:0},onSubmit:async e=>{var d,c,x;console.log(e);try{const i=await o.post(`${_}`,e);(d=i==null?void 0:i.data)!=null&&d.status?(F("/student/view"),v.success((c=i==null?void 0:i.data)==null?void 0:c.message)):v.error((x=i==null?void 0:i.data)==null?void 0:x.message)}catch(i){v.error(i==null?void 0:i.message)}},validationSchema:G}),H=async()=>{try{a(!0);const e=await o.post(`${$}`,{});e.status==200&&P(e.data.data),a(!1)}catch(e){console.log(e),a(!1)}},Q=async()=>{try{a(!0);const e=await o.post(`${D}`,{});e.status==200&&(console.log(e.data),Y(e.data.data)),a(!1)}catch(e){console.log(e),a(!1)}},U=async()=>{try{a(!0);const e=await o.post(`${z}`,{});e.status==200&&(console.log(e.data),V(e.data.data)),a(!1)}catch(e){console.log(e),a(!1)}},J=async()=>{try{const e=await o.post(`${B}`,{});e.status==200&&(console.log(e.data),E(e.data.data))}catch(e){console.log(e)}},K=async()=>{try{const e=await o.post(`${C}`,{});e.status==200&&(console.log(e.data),O(e.data.data))}catch(e){console.log(e)}};return l.useEffect(()=>{Q(),U(),J(),K(),H()},[]),s.jsxs(s.Fragment,{children:[s.jsx(ae,{isOpen:b,toggle:y,Link:"/student/view"}),s.jsxs(k,{title:"Student",pageName:"Add Student",children:[s.jsx(ee,{list:[{title:"Home",path:"/home"},{title:"Student List",path:"/student/view"},{title:"Student Entry",path:"/add-new-student"}]}),s.jsx("div",{className:"mt-5 mx-auto px-4",children:M?s.jsx(X,{}):s.jsx("div",{className:" w-full",children:s.jsxs("div",{className:"  rounded-lg shadow ",children:[s.jsxs("div",{className:"flex items-center justify-between py-0 px-4 border-b rounded-t bg-[#115e59]",children:[s.jsx("h3",{className:"text-xl font-semibold text-gray-100 ",children:"Add Student"}),s.jsx("button",{onClick:()=>{y()},type:"button",className:'text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 mt-2 py-2 mr-2 mb-2  focus:outline-none "',children:"Add Bulk"})]}),s.jsx("div",{className:"p-6 space-y-6",children:s.jsx(te,{value:t,children:s.jsxs(ie,{children:[s.jsxs("div",{className:"grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4",children:[s.jsx("div",{children:s.jsx(u,{label:"Financial Year",name:"fyId",formik:t,size:"xs",isRequiredLabel:!0,isBlankSelect:!0,children:j==null?void 0:j.map(e=>s.jsx("option",{value:e.id,children:e==null?void 0:e.financial_year},e.id))})}),s.jsx("div",{children:s.jsx(r,{label:"Admission Date",name:"admissionDate",type:"date",max:new Date().toISOString().split("T")[0],formik:t,size:"xs",isRequiredLabel:!0})}),s.jsx("div",{children:s.jsx(r,{label:"Admission No",name:"admissionNo",formik:t,size:"xs",isRequiredLabel:!0})}),s.jsx("div",{children:s.jsx(r,{label:"Full Name",name:"fullName",formik:t,size:"xs",isRequiredLabel:!0})}),s.jsx("div",{children:s.jsx(r,{label:"DOB",type:"date",name:"dob",max:new Date().toISOString().split("T")[0],formik:t,size:"xs",isRequiredLabel:!0})}),s.jsx("div",{children:s.jsx(r,{label:"Roll No",name:"rollNo",formik:t,size:"xs",isRequiredLabel:!0})}),s.jsx("div",{children:s.jsx(r,{label:"Father Name",name:"fatherName",formik:t,size:"xs",isRequiredLabel:!0})}),s.jsx("div",{children:s.jsx(r,{label:"Email",type:"email",name:"email",formik:t,size:"xs"})}),s.jsx("div",{children:s.jsx(r,{type:"number",label:"Mobile No",name:"mobile",formik:t,size:"xs",isRequiredLabel:!0})}),s.jsx("div",{children:s.jsx(u,{label:"Class",name:"classId",formik:t,size:"xs",isRequiredLabel:!0,isBlankSelect:!0,children:m&&(m==null?void 0:m.map(e=>s.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.class_name})))})}),s.jsx("div",{children:s.jsx(u,{label:"Section",name:"sectionId",formik:t,size:"xs",isRequiredLabel:!0,isBlankSelect:!0,children:h&&(h==null?void 0:h.map(e=>s.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.section})))})}),s.jsx("div",{children:s.jsx(u,{label:"Select Gender",name:"gender",formik:t,size:"xs",isRequiredLabel:!0,isBlankSelect:!0,children:A&&((N=A)==null?void 0:N.map(e=>s.jsx("option",{value:e==null?void 0:e.value,children:e==null?void 0:e.name})))})}),s.jsx("div",{children:s.jsx(u,{label:"Select Category",name:"categoryId",formik:t,size:"xs",isRequiredLabel:!0,isBlankSelect:!0,children:p&&(p==null?void 0:p.map(e=>s.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.category_name})))})}),s.jsxs("div",{children:[s.jsx("h1",{className:"text ",children:"Special Ability"}),s.jsxs("div",{className:"flex mr-2",children:[s.jsxs("div",{className:"flex items-center justify-center mt-2 text-[22px]",children:[s.jsx("input",{type:"radio",name:"specialAbility",value:"1",onChange:e=>t==null?void 0:t.setFieldValue("specialAbility",e.target.value),checked:((S=t==null?void 0:t.values)==null?void 0:S.specialAbility)==="1"}),s.jsx("span",{className:"ml-1 text-sm",children:"Yes"})]}),"    ",s.jsxs("div",{className:"flex items-center justify-center mt-2 text-[22px]",children:[s.jsx("input",{type:"radio",name:"specialAbility",value:"0",onChange:e=>t==null?void 0:t.setFieldValue("specialAbility",e.target.value),checked:((f=t==null?void 0:t.values)==null?void 0:f.specialAbility)==="0"}),s.jsx("span",{className:"ml-1 text-sm",children:"No"})]})]})]}),s.jsxs("div",{children:[s.jsx("h1",{className:"text ",children:"Is your parent staff of this school"}),s.jsxs("div",{className:"flex mr-2",children:[s.jsxs("div",{className:"flex items-center justify-center mt-2 text-[22px]",children:[s.jsx("input",{type:"radio",name:"quotaId",value:"1",onChange:e=>t==null?void 0:t.setFieldValue("quotaId",e.target.value),checked:((q=t==null?void 0:t.values)==null?void 0:q.quotaId)==="1"}),s.jsx("span",{className:"ml-1 text-sm",children:"Yes"})]}),"    ",s.jsxs("div",{className:"flex items-center justify-center mt-2 text-[22px]",children:[s.jsx("input",{type:"radio",name:"quotaId",value:"0",onChange:e=>t==null?void 0:t.setFieldValue("quotaId",e.target.value),checked:((I=t==null?void 0:t.values)==null?void 0:I.quotaId)==="0"}),s.jsx("span",{className:"ml-1 text-sm",children:"No"})]})]})]}),s.jsxs("div",{children:[s.jsx("h1",{className:"text ",children:"Is Mid-Session Admission"}),s.jsxs("div",{className:"flex mr-2",children:[s.jsxs("div",{className:"flex items-center justify-center mt-2 text-[22px]",children:[s.jsx("input",{type:"radio",name:"isMidSession",value:"1",onChange:e=>t==null?void 0:t.setFieldValue("isMidSession",e.target.value),checked:((L=t==null?void 0:t.values)==null?void 0:L.isMidSession)=="1"}),s.jsx("span",{className:"ml-1 text-sm",children:"Yes"})]}),"    ",s.jsxs("div",{className:"flex items-center justify-center mt-2 text-[22px]",children:[s.jsx("input",{type:"radio",name:"isMidSession",value:"0",onChange:e=>{t==null||t.setFieldValue("isMidSession",e.target.value),t==null||t.setFieldValue("monthId","1")},checked:((R=t==null?void 0:t.values)==null?void 0:R.isMidSession)=="0"}),s.jsx("span",{className:"ml-1 text-sm",children:"No"})]})]}),((w=t==null?void 0:t.values)==null?void 0:w.isMidSession)=="1"&&s.jsx("div",{className:"mt-3",children:s.jsx(u,{label:"Admission Month",name:"monthId",formik:t,size:"xs",isRequiredLabel:!0,isBlankSelect:!0,children:g==null?void 0:g.map(e=>s.jsx("option",{value:e.id,children:e==null?void 0:e.month_name},e.id))})})]})]}),s.jsx("hr",{className:"mt-5"}),s.jsx("div",{className:"flex justify-center mt-6",children:s.jsxs(re,{color:"primary",type:"submit",isLoading:t.isSubmitting,children:[" ","SUBMIT"," "]})})]})})})]})})})]})]})}export{ve as default};
