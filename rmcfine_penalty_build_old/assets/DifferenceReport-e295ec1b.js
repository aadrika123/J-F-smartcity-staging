import{a as N,r as t,j as e}from"./index-faef4408.js";import{c as v,a as m,u as C}from"./formik.esm-f68c633c.js";import{P as S}from"./ProjectApiList-919c817c.js";import{L as _}from"./ListTableConnect-bece3ab7.js";import{R as k}from"./Hourglass-36f1258b.js";import{R as A}from"./index.esm-f80cb93c.js";import{n as s,i as V,d as F}from"./PowerupFunctions-1c006beb.js";import{u as B}from"./useSetTitle-78d55b86.js";import{F as H}from"./index.esm-08d7bd9e.js";import"./index-b7057102.js";import"./index-eab1d8e2.js";import"./index.esm-03dcecfa.js";import"./iconBase-74df04d3.js";import"./index.esm-f9efea8a.js";import"./ApiHeader-6d683756.js";import"./ShimmerEffectInline-e1eb703f.js";import"./AxiosInterceptors-06ddb7df.js";const U=()=>{B("Search Challan");const{api_FPTrack:p}=S(),h=N(),x=[{Header:"Sl.No.",Cell:({row:r})=>e.jsx("div",{children:(r==null?void 0:r.index)+1})},{Header:"Name",accessor:"full_name",Cell:({cell:r})=>{var a;return s((a=r.row.original)==null?void 0:a.full_name)}},{Header:"Mobile No.",accessor:"mobile",Cell:({cell:r})=>{var a;return s((a=r.row.original)==null?void 0:a.mobile)}},{Header:"Application No",accessor:"application_no",Cell:({cell:r})=>{var a;return s((a=r.row.original)==null?void 0:a.application_no)}},{Header:"Challan No",accessor:"challan_no",Cell:({cell:r})=>{var a;return s((a=r.row.original)==null?void 0:a.challan_no)}},{Header:"Challan Date",accessor:"challan_date",Cell:({cell:r})=>{var a;return V((a=r.row.original)==null?void 0:a.challan_date)}},{Header:"Violation Name",accessor:"violation_name",Cell:({cell:r})=>{var a;return s((a=r.row.original)==null?void 0:a.violation_name)}},{Header:"Penalty Amount",accessor:"total_amount",Cell:({cell:r})=>{var a;return F((a=r.row.original)==null?void 0:a.total_amount)}},{Header:"Action",Cell:({cell:r})=>e.jsx("div",{className:"flex items-center flex-wrap md:flex-nowrap flex-row gap-2 ",children:e.jsxs("button",{onClick:()=>{var a,d;h(`/comparision-report/${(d=(a=r==null?void 0:r.row)==null?void 0:a.original)==null?void 0:d.application_id}`)},className:`border border-sky-700 text-sky-700 w-max px-4 py-1 rounded-sm shadow-md hover:shadow-xl hover:bg-sky-700 \r
                    hover:text-white flex items-center justify-center gap-1 `,children:[e.jsx(H,{})," View"]})})}],[u,o]=t.useState({challanType:"Via Verification"}),[f,i]=t.useState(0),[n,b]=t.useState(!1),[g,c]=t.useState(!1),y=v({searchBy:m().required("Select filter type"),entry:m().required("Enter the parameter")}),l=C({initialValues:{searchBy:"",entry:""},validationSchema:y,onSubmit:r=>{j(r)}}),w=()=>{l.setFieldValue("searchBy",""),l.setFieldValue("entry",""),o({challanType:"Via Verification"}),c(!1),i(r=>r+1)},j=r=>{c(!0),o({[r==null?void 0:r.searchBy]:r==null?void 0:r.entry,challanType:"Via Verification"}),i(a=>a+1)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full flex flex-col gap-5 justify-center items-center p-4 md:p-6 transition-all duration-200",children:[e.jsx("aside",{className:" w-full bg-slate-50 shadow-md h-max",children:e.jsxs("form",{onSubmit:l.handleSubmit,onChange:l.handleChange,className:"bg-white poppins p-4",children:[e.jsx("h1",{className:"text-xl font-semibold uppercase text-center text-gray-700 border-b border-gray-400 mb-4 pb-1",children:"Difference Report"}),e.jsxs("div",{className:"flex flex-row flex-wrap gap-x-4 items-center gap-y-2 pb-4 mb-2 border-b",children:[e.jsxs("div",{className:"w-full md:w-[25%]",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Search By",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...l.getFieldProps("searchBy"),className:`${l.errors.searchBy?"text-red-400 font-semibold border border-solid border-red-400 placeholder-red-300 shadow-red-100 ":"text-gray-700 font-normal border border-solid border-gray-400 placeholder-gray-400 "} cursor-pointer w-full px-3 py-1 text-sm  bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-sm`,children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"applicationNo",children:"Application Number"}),e.jsx("option",{value:"mobile",children:"Mobile Number"}),e.jsx("option",{value:"challanNo",children:"Challan Number"})]})]}),e.jsxs("div",{className:"w-full md:w-[25%] ",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Parameter",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",...l.getFieldProps("entry"),placeholder:"Enter the parameter",className:" w-full px-3 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-400 shadow-md"})]}),e.jsxs("div",{className:"mt-4 w-full md:w-[30%] flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:mt-6",children:[e.jsx("div",{className:" ",children:n?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-center",children:e.jsx(k,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:" flex items-center border border-green-600 bg-green-500 hover:bg-green-600 text-white shadow-md rounded-sm  text-sm px-5 py-1",children:[e.jsx("span",{className:"",children:e.jsx(A,{fontSize:""})}),e.jsx("span",{children:"Search Record"})]})}),g&&e.jsx("div",{className:"",onClick:()=>w(),children:!n&&e.jsx("div",{className:"cursor-pointer text-center w-full border border-indigo-600 bg-indigo-500 hover:bg-indigo-600 text-white shadow-md rounded-sm text-sm font-semibold px-5 py-1",children:"View All Applications"})})]})]})]})}),e.jsx("aside",{className:"w-full overflow-clip transition-all duration-300 h-full",children:e.jsx(_,{api:p,columns:x,requestBody:u,changeData:f,search:!1,loader:r=>b(r)})})]})})};export{U as default};
