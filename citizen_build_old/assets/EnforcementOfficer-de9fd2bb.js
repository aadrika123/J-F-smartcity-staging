import{j as a}from"./mui-8e804a04.js";import{r as s}from"./router-87042356.js";import{L as I}from"./ListTable-ccf44b95.js";import{c as E,d as A,u as _,A as H,b as m,aj as F,P as k,n as u}from"./index-2435513d.js";import{a as B}from"./axios-97164839.js";import{B as D}from"./BarLoader-6486f53e.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";const z=()=>{const[f,l]=s.useState([]),[i,x]=s.useState([]),[U,p]=s.useState(0),[n,h]=s.useState(null),[g,b]=s.useState(!1),{api_enf_officer:j,api_ulbList:w}=k(),N="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",[S,d]=s.useState(!1),[v,c]=s.useState(!1),y=E({ulbId:A().required("Select Your Ulb")}),r=_({initialValues:{ulbId:""},onSubmit:e=>{h({ulbId:e.ulbId}),p(t=>t+1),b(!0)},validationSchema:y}),C=()=>{c(!0),B.get(w,{},m()).then(e=>{var t,o;c(!1),((t=e==null?void 0:e.data)==null?void 0:t.status)==!0&&x((o=e==null?void 0:e.data)==null?void 0:o.data)}).catch(e=>{c(!1),console.log("Error fetching collector list:",e)})};s.useEffect(()=>{C()},[]),s.useEffect(()=>{n&&(d(!0),H.post(j,{userType:"EO",...n},m()).then(e=>{var t,o;(t=e==null?void 0:e.data)!=null&&t.status?(l((o=e==null?void 0:e.data)==null?void 0:o.data),d(!1)):l([])}).catch(e=>{console.log("Error fetching data:",e),l([]),d(!1)}))},[n]);const L=[{Header:"#",Cell:({row:e})=>a.jsx("div",{className:"pr-2",children:(e==null?void 0:e.index)+1})},{Header:"Profile",accessor:"profile",Cell:({cell:e})=>{var t,o;return a.jsx(a.Fragment,{children:(t=e.row.original)!=null&&t.profile_image?a.jsx("img",{className:"border drop-shadow-lg h-8 rounded-sm",src:(o=e.row.original)==null?void 0:o.profile_image,alt:"profile",srcset:""}):"N/A"})}},{Header:"Name",accessor:"user_name",Cell:({cell:e})=>{var t;return u((t=e.row.original)==null?void 0:t.user_name)}},{Header:"Mobile No.",accessor:"mobile",Cell:({cell:e})=>{var t;return u((t=e.row.original)==null?void 0:t.mobile)}},{Header:"E-mail",accessor:"email",Cell:({cell:e})=>{var t;return(t=e.row.original)!=null&&t.email?e.row.original.email.replace("@","[at]").replace(".","[dot]"):"N/A"}},{Header:"Address",accessor:"address",Cell:({cell:e})=>{var t;return u((t=e.row.original)==null?void 0:t.address)}}];return a.jsxs(a.Fragment,{children:[S&&a.jsx(D,{}),a.jsxs("div",{className:"w-full  md:pt-10 bg-white shadow-lg rounded-md",children:[a.jsx("form",{onChange:r.handleChange,onSubmit:r.handleSubmit,className:"mb-4 ml-[30%]",children:a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Select Ulb"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"ulbId",id:"ulbId",className:N,value:r.values.ulbId,onChange:r.handleChange,children:[a.jsx("option",{value:"",children:"Select Your ULB"}),v?a.jsx("option",{value:"",disabled:!0,children:"Loading..."}):i==null?void 0:i.map(e=>a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ulb_name},e==null?void 0:e.id))]})}),a.jsx("div",{className:"col-span-12 text-center",children:r.touched.ulbId&&r.errors.ulbId&&a.jsx(a.Fragment,{children:a.jsx("span",{className:"text-red-600 text-xs",children:r.errors.ulbId})})})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-center mt-4",children:a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-400 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(F,{})}),"Search "]})})]})}),g&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"uppercase font-semibold text-gray-700 text-2xl py-2 text-center tracking-[0.5rem]",children:"Know Your Enforcement Officer"}),a.jsx(I,{columns:L,dataList:f,exportStatus:!1})]})]})]})};export{z as default};
