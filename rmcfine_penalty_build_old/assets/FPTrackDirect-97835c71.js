import{a as S,r as n,j as r}from"./index-faef4408.js";import{c as _,a as h,u as k}from"./formik.esm-f68c633c.js";import{P as F}from"./ProjectApiList-919c817c.js";import{L as B}from"./ListTableConnect-bece3ab7.js";import{R as H}from"./Hourglass-36f1258b.js";import{R as P}from"./index.esm-f80cb93c.js";import{n as i,i as R,d as A}from"./PowerupFunctions-1c006beb.js";import{u as D}from"./useSetTitle-78d55b86.js";import{F as p}from"./index.esm-08d7bd9e.js";import{B as E}from"./index.esm-8f2eb3a3.js";import"./index-b7057102.js";import"./index-eab1d8e2.js";import"./index.esm-03dcecfa.js";import"./iconBase-74df04d3.js";import"./index.esm-f9efea8a.js";import"./ApiHeader-6d683756.js";import"./ShimmerEffectInline-e1eb703f.js";import"./AxiosInterceptors-06ddb7df.js";const ae=()=>{D("Search Challan");const{api_FPTrack:$,api_searchChallanDirect:x}=F(),l=S(),u=[{Header:"Sl.No.",Cell:({row:e})=>r.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Name",accessor:"full_name",Cell:({cell:e})=>{var a;return i((a=e.row.original)==null?void 0:a.full_name)}},{Header:"Mobile No.",accessor:"mobile",Cell:({cell:e})=>{var a;return i((a=e.row.original)==null?void 0:a.mobile)}},{Header:"Application No",accessor:"application_no",Cell:({cell:e})=>{var a;return i((a=e.row.original)==null?void 0:a.application_no)}},{Header:"Challan No",accessor:"challan_no",Cell:({cell:e})=>{var a;return i((a=e.row.original)==null?void 0:a.challan_no)}},{Header:"Challan Date",accessor:"challan_date",Cell:({cell:e})=>{var a;return R((a=e.row.original)==null?void 0:a.challan_date)},className:"w-[7%]"},{Header:"Penalty Amount",accessor:"total_amount",Cell:({cell:e})=>{var a;return A((a=e.row.original)==null?void 0:a.total_amount)}},{Header:"Has Expired",accessor:"hasExpired",Cell:({cell:e})=>{var a;return i((a=e.row.original)==null?void 0:a.has_expired)}},{Header:"Action",Cell:({cell:e})=>{var a,d,c,m;return r.jsxs("div",{className:"flex items-center flex-wrap md:flex-nowrap flex-row gap-2 ",children:[r.jsxs("button",{onClick:()=>{var s,t;l(`/challan-show/${(t=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:t.id}/direct`)},className:`border border-sky-700 text-sky-700 w-24 py-1 rounded-sm shadow-md hover:shadow-xl hover:bg-sky-700 \r
                    hover:text-white flex items-center justify-center gap-1 `,children:[r.jsx(p,{})," Challan"]}),!((d=(a=e==null?void 0:e.row)==null?void 0:a.original)!=null&&d.payment_status)&&r.jsxs("button",{onClick:()=>{var s,t;l(`/fp-pay/${(t=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:t.id}/direct`)},className:`border border-orange-600 text-orange-500 w-24 py-1 rounded-sm shadow-md hover:shadow-xl hover:bg-orange-600 \r
                            hover:text-white flex items-center justify-center gap-1 `,children:[r.jsx(E,{})," Pay"]}),((m=(c=e==null?void 0:e.row)==null?void 0:c.original)==null?void 0:m.payment_status)&&r.jsxs("button",{onClick:()=>{var s,t;l(`/payment-receipt/${(t=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:t.transaction_no}/direct`)},className:`border border-green-600 text-green-600 w-24 py-1 rounded-sm shadow-md hover:shadow-xl hover:bg-green-600 \r
                    hover:text-white flex items-center justify-center gap-1 `,children:[r.jsx(p,{})," Receipt"]})]})}}],[b,f]=n.useState({}),[g,w]=n.useState(0),[y,j]=n.useState(!1),[L,N]=n.useState(!1),v=_({searchBy:h().required("Select filter type"),entry:h().required("Enter the parameter")}),o=k({initialValues:{searchBy:"",entry:""},validationSchema:v,onSubmit:e=>{C(e)}}),C=e=>{N(!0),f({[e==null?void 0:e.searchBy]:e==null?void 0:e.entry}),w(a=>a+1)};return r.jsx(r.Fragment,{children:r.jsx("div",{className:"w-full bg- h-screen md:pt-10",children:r.jsxs("div",{className:"md:w-4/5 mx-auto shadow-xl bg-gray-50 md:py-10",children:[r.jsx("div",{className:"text-3xl font-bold text-center mt-10",children:"Fines & Penalties"}),r.jsx("div",{className:" text-center",children:"Ranchi Municipal Corporation, Ranchi"}),r.jsxs("div",{className:"w-full flex flex-col gap-5 justify-center items-center p-4 md:p-6 transition-all duration-200",children:[r.jsx("aside",{className:" w-full bg-slate-50 shadow-md h-max",children:r.jsxs("form",{onSubmit:o.handleSubmit,onChange:o.handleChange,className:"bg-white poppins p-4",children:[r.jsx("h1",{className:"text-xl font-semibold uppercase text-center text-gray-700 border-b border-gray-400 mb-4 pb-1",children:"Search Your Challan"}),r.jsxs("div",{className:"flex flex-row flex-wrap gap-x-4 items-center gap-y-2 pb-4 mb-2 border-b",children:[r.jsxs("div",{className:"w-full md:w-[25%]",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Search By",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{...o.getFieldProps("searchBy"),className:`${o.errors.searchBy?"text-red-400 font-semibold border border-solid border-red-400 placeholder-red-300 shadow-red-100 ":"text-gray-700 font-normal border border-solid border-gray-400 placeholder-gray-400 h-10"} cursor-pointer w-full px-3 py-1 text-sm  bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-sm`,children:[r.jsx("option",{value:"",children:"Select"}),r.jsx("option",{value:"applicationNo",children:"Application Number"}),r.jsx("option",{value:"mobile",children:"Mobile Number"}),r.jsx("option",{value:"challanNo",children:"Challan Number"})]})]}),r.jsxs("div",{className:"w-full md:w-[25%] ",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Parameter",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsx("input",{type:"text",...o.getFieldProps("entry"),placeholder:"Enter the parameter",className:"h-10  w-full px-3 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-400 shadow-md"})]}),r.jsx("div",{className:"mt-4 w-full  justify-center md:justify-start md:w-[30%] flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:mt-6",children:r.jsx("div",{className:" ",children:y?r.jsx(r.Fragment,{children:r.jsx("div",{className:"flex justify-center",children:r.jsx(H,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):r.jsxs("button",{type:"submit",className:"py-2 flex items-center border border-green-600 bg-green-500 hover:bg-green-600 text-white shadow-md rounded-md  text-sm px-5",children:[r.jsx("span",{className:"",children:r.jsx(P,{fontSize:""})}),r.jsx("span",{children:"Search Record"})]})})})]})]})}),r.jsx("aside",{className:"w-full overflow-clip transition-all duration-300 h-full",children:r.jsx(B,{api:x,columns:u,requestBody:b,changeData:g,search:!1,loader:e=>j(e),exportStatus:!1})})]})]})})})};export{ae as default};
