import{j as e}from"./mui-8e804a04.js";import{r as t,u as k}from"./router-87042356.js";import{m as b,c as B,d as n,u as z,A as c,R as M}from"./index-19682a6e.js";import{G as Y}from"./GrievanceApiList-f1509de8.js";import{W as J}from"./WaterApiList-e42e9d41.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";function ce(p){const[f,y]=t.useState(null),[w,F]=t.useState(),[K,E]=t.useState(),[Q,S]=t.useState(),[X,H]=t.useState(),[j,m]=t.useState(!1),[N,h]=t.useState(!1),[u,q]=t.useState(),[o,I]=t.useState(),[Z,L]=t.useState(),{api_distList:G,api_getAllUlbList:R,api_wardListByUlb:P,api_grievanceApplyForm:A}=Y(),{api_getHoldingSafOfLogin:U,api_getSafHoldingDetails:_,header:x}=J(),{notify:g}=t.useContext(b);k();const{setBreadCrumbData:T}=t.useContext(b);t.useEffect(()=>{T(["Apply Grievance"])},[]);const V=B({applicantName:n().required("Require"),applyThrough:n().required("Require"),email:n().email("Invalid email address").required("Require"),grievanceHead:n().required("Require"),description:n().required("Require"),department:n().required("Require"),fileUpload:n().required("Require")}),C={mobileNo:p==null?void 0:p.mobileNo,applicantName:"",applyThrough:"",holdingNo:"",email:"",aadhar:"",gender:"",disability:"",department:"",grievanceHead:"",description:"",district:"",ulb:"",ward:"",address:"",otherInfo:"",fileUpload:""},a=z({initialValues:C,enableReinitialize:!0,onSubmit:(s,l)=>{console.log("Value.....",s),D(s)},validationSchema:V}),W=s=>{let l=s.target.name;if(s.target.value,l==="fileUpload"){const d=s.target.files[0],r=new FileReader;r.onload=()=>{y(r.result)},r.readAsDataURL(d),F(d)}};t.useRef(null),t.useRef(null),t.useRef(null),t.useRef(null),t.useEffect(()=>{c.post(G,{}).then(s=>{s.data.status?(console.log("List of district",s),E(s.data.data)):console.log("Error while fetching district list",s)}).catch(s=>{console.log("Error while fetching district list",s)})},[]),t.useEffect(()=>{c.get(R).then(s=>{s.data.status?(console.log("List of district",s),S(s.data.data)):console.log("Error while fetching district list",s)}).catch(s=>{console.log("Error while fetching district list",s)})},[]);const $=()=>{c.post(P,{ulbId:2}).then(s=>{s.data.status?(console.log("List of Wards against ulb",s),H(s.data.data)):console.log("Error while fetching ward list",s)}).catch(s=>{console.log("Error while fetching ward list",s)})};t.useEffect(()=>{$(),a.setFieldValue("mobileNo",O)},[a.values.ulb]);const D=s=>{var d;m();let l=new FormData;l.append("mobileNo",s.mobileNo),l.append("applicantName",s.applicantName),l.append("email",s.email),l.append("gender",s.gender),l.append("disability",s.disability),l.append("department",s.department),l.append("grievanceHead",s.grievanceHead),l.append("description",s.description),l.append("ulbId",2),l.append("address",s.address),l.append("otherInfo",s.otherInfo),l.append("document",w||""),l.append("docCode","GRIEVANCE_DOC"),l.append("docCategory","GRIEVANCE_DOC"),console.log("Payload",l),h(!0),(d=c)==null||d.post(A,l,x).then(r=>{var v;h(!1),r.data.status?(console.log("GrievanceApply Successfully..",r),g("Grievance Submitted Successfully","success"),L((v=r==null?void 0:r.data)==null?void 0:v.applicationNo),p.success(!0),p.data(r.data.data)):(console.log("Failed to submit Grievance",r),g("Grievance not submitted","error"),m(r.data.message||"Failed to apply grievance"))}).catch(r=>{h(!1),g("Error while Grievance submitting","error"),console.log("Error While applying grievance",r),m("Error While applying grievance")})},i={filed:"flex-1 w-full px-4 py-2 text-base text-gray-800 placeholder-gray-400 bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-800 focus:border-transparent",required:"text-red-700 font-semibold"};t.useEffect(()=>{c.post(U,{type:"holding",ulbId:2},x).then(s=>{s.data.status?(console.log("List of Holding List",s),q(s.data.data)):console.log("Error while fetching Holding List list",s)}).catch(s=>{console.log("Error while fetching Holding List list",s)})},[a.values.applyThrough]),t.useEffect(()=>{c.post(_,{connectionThrough:"1",id:a.values.holdingNo,ulbId:2},x).then(s=>{s.data.status?(console.log(" Holding Data",s),I(s.data.data)):console.log("Error while fetching Holding Data",s)}).catch(s=>{console.log("Error while fetching Holding Data",s)})},[a.values.holdingNo]),t.useEffect(()=>{var s,l,d;a.values.applyThrough=="holding"&&(a.setFieldValue("applicantName",(s=o==null?void 0:o.owners[0])==null?void 0:s.ownerName),a.setFieldValue("email",(l=o==null?void 0:o.owners[0])==null?void 0:l.email),a.setFieldValue("disability",(d=o==null?void 0:o.owners[0])==null?void 0:d.is_specially_abled),a.setFieldValue("address",o==null?void 0:o.prop_address)),a.values.applyThrough=="other"&&(a.setFieldValue("applicantName",""),a.setFieldValue("email",""),a.setFieldValue("address",""))},[o,a.values.applyThrough]),console.log("formik.values.applyThrough",a.values.applyThrough);const O=localStorage.getItem("citizenMobile");return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"p-5 py-6 rounded-lg border border-indigo-300 bg-white",children:[e.jsx("div",{className:"text-center text-lg",children:" Submit Your Grievance "}),e.jsx("div",{children:e.jsxs("form",{onSubmit:a.handleSubmit,onChange:W,children:[e.jsxs("div",{className:"md:grid md:grid-flow-col justify-stretch",children:[e.jsxs("div",{className:"m-3",children:[e.jsxs("label",{children:["Apply Through",e.jsx("span",{className:i.required,children:"*"})]}),e.jsxs("select",{name:"applyThrough",...a.getFieldProps("applyThrough"),className:`${i.filed} `,children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"holding",children:"Holding"}),e.jsx("option",{value:"other",children:"Other"})]}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.applicantName&&a.errors.applicantName?a.errors.applicantName:null})]}),a.values.applyThrough==="holding"&&e.jsxs("div",{className:"m-3",children:[e.jsxs("label",{children:["Select Holding",e.jsx("span",{className:i.required,children:"*"})]}),e.jsxs("select",{name:"holdingNo",...a.getFieldProps("holdingNo"),className:`${i.filed} `,children:[e.jsx("option",{value:"",children:"Select"}),u==null?void 0:u.map(s=>e.jsx("option",{value:s.new_holding_no,children:s.new_holding_no}))]}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.applicantName&&a.errors.applicantName?a.errors.applicantName:null})]}),e.jsxs("div",{className:"m-3",children:[e.jsxs("label",{children:["Applicant Name",e.jsx("span",{className:i.required,children:"*"})]}),e.jsx("input",{type:"text",...a.getFieldProps("applicantName"),name:"applicantName",className:`${i.filed}`}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.applicantName&&a.errors.applicantName?a.errors.applicantName:null})]})]}),e.jsxs("div",{className:"md:grid md:grid-flow-col justify-stretch",children:[e.jsxs("div",{className:"m-3",children:[e.jsxs("label",{children:["Mobile No",e.jsx("span",{className:i.required,children:"*"})]}),e.jsx("input",{type:"text",...a.getFieldProps("mobileNo"),name:"mobileNo",className:`${i.filed}`})]}),e.jsxs("div",{className:"m-3",children:[e.jsxs("label",{children:["Email",e.jsx("span",{className:i.required,children:"*"})]}),e.jsx("input",{type:"text",...a.getFieldProps("email"),name:"email",className:` ${i.filed}`}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.email&&a.errors.email?a.errors.email:null})]}),e.jsxs("div",{className:"m-3",children:[e.jsx("label",{children:"Aadhar"}),e.jsx("input",{type:"text",...a.getFieldProps("aadhar"),name:"aadhar",className:`${i.filed}`}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.aadhar&&a.errors.aadhar?a.errors.aadhar:null})]})]}),e.jsxs("div",{className:"md:grid md:grid-flow-col justify-stretch",children:[e.jsxs("div",{className:"m-3",children:[e.jsxs("label",{children:["Select Department ",e.jsx("span",{className:i.required,children:"*"})]}),e.jsxs("select",{...a.getFieldProps("department"),name:"department",className:`   ${i.filed}`,children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"1",children:"Property"}),e.jsx("option",{value:"2",children:"Water"}),e.jsx("option",{value:"3",children:"Trade"}),e.jsx("option",{value:"5",children:"Advertisement"})]}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.department&&a.errors.department?a.errors.department:null})]}),e.jsxs("div",{className:"m-3",children:[e.jsxs("label",{htmlFor:"grievanceHead",children:["Select Grievance Head ",e.jsx("span",{className:i.required,children:"*"})]}),e.jsxs("select",{...a.getFieldProps("grievanceHead"),name:"grievanceHead",className:i.filed,children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"1",children:"Grievance Head 1"}),e.jsx("option",{value:"2",children:"Grievance Head 2"}),e.jsx("option",{value:"3",children:"Grievance Head 3"})]}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.grievanceHead&&a.errors.grievanceHead?a.errors.grievanceHead:null})]})]}),e.jsxs("div",{className:"m-3",children:[e.jsxs("label",{htmlFor:"description",children:["Write Description ",e.jsx("span",{className:i.required,children:"*"})]}),e.jsx("textarea",{...a.getFieldProps("description"),name:"description",className:i.filed,placeholder:"Enter your grievance",rows:"5",cols:"40"}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.description&&a.errors.description?a.errors.description:null})]}),e.jsxs("div",{className:"m-3",children:[e.jsxs("label",{htmlFor:"address",children:["Your Address ",e.jsx("span",{className:i.required,children:"*"})]}),e.jsx("textarea",{...a.getFieldProps("address"),name:"address",className:i.filed,placeholder:"Enter your address",rows:"2"}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.address&&a.errors.address?a.errors.address:null})]}),e.jsxs("div",{className:"m-3",children:[e.jsxs("label",{htmlFor:"otherInfo",children:["Other Information ",e.jsx("span",{className:"text-xs italic",children:"(optional)"})]}),e.jsx("textarea",{...a.getFieldProps("otherInfo"),name:"otherInfo",className:i.filed,placeholder:"Other Information",rows:"2"}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.otherInfo&&a.errors.otherInfo?a.errors.otherInfo:null})]}),e.jsxs("div",{className:"m-3",children:[e.jsxs("label",{htmlFor:"fileUpload",children:["Upload File ",e.jsx("span",{className:"text-xs italic",children:"(optional)"})," "]}),e.jsx("input",{...a.getFieldProps("fileUpload"),type:"file",accept:"image/*",name:"fileUpload",className:i.filed}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.fileUpload&&a.errors.fileUpload?a.errors.fileUpload:null})]}),e.jsx("div",{className:"flex justify-center",children:f&&e.jsx("img",{src:f,alt:"Preview",className:"border border-gray-300 px-4 py-2 rounded-lg mt-4 h-32"})}),e.jsx("p",{className:"text-center text-red-500 font-semibold",children:j&&j}),e.jsx("div",{className:"m-3 flex justify-center",children:e.jsx("button",{disabled:N,type:"submit",className:"px-4 py-2 mt-5 bg-indigo-600 hover:bg-indigo-700 text-gray-50 text-base shadow-md rounded-md",children:N?e.jsx("div",{children:e.jsx(M,{strokeColor:"white",strokeWidth:"5",animationDuration:"0.75",width:"20",visible:!0})}):"Submit Grievances"})})]})})]})})}export{ce as default};
