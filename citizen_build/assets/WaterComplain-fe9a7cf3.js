import{j as e}from"./mui-8e804a04.js";import{r,u as A,f as E}from"./router-87042356.js";import{m as F,c as T,d as i,u as I}from"./index-19682a6e.js";import{M as R}from"./index-4e794517.js";import{a as L}from"./axios-97164839.js";import{A as M}from"./AccordiaonPagefordisconnection-2ea68626.js";import{W as H}from"./WaterApiList-e42e9d41.js";import{C as O}from"./ChatBot-6a9bbbd7.js";import{B as P}from"./BarLoader-0ac4cd94.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";/* empty css                */const W={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"",border:"none"}},se=()=>{const[b,c]=r.useState(!1),[l,g]=r.useState(),{notify:m}=r.useContext(F),[d,f]=r.useState(!1),N=()=>{f(!d)},y={requestType:"",remarks:"",address:"",mobileNo:""};A();const{consumerId:p}=E();console.log("param payment id ..",p);const{api_watercomplain:j,header:v}=H(),[h,k]=r.useState(""),[w,n]=r.useState(!1),C=T().shape({remarks:i().required("Remarks is required"),address:i().required("Address is required"),mobileNo:i().required("Mobile number is required"),requestType:i().required("Request type is required")}),s=I({initialValues:y,validationSchema:C,onSubmit:o=>{n(!0),L.post(j,{consumerId:p,remarks:o.remarks,reason:"ok",mobileNo:o.mobileNo,address:o.address,requestType:o.requestType},v).then(a=>{var t,u,x;a.data.status===!0?(g((t=a==null?void 0:a.data)==null?void 0:t.data),console.log("Data Really Saved",a),c(!0)):(n(!1),console.log("False While Apply water complain",a),k(" "+((u=a==null?void 0:a.data)==null?void 0:u.message)),m((x=a==null?void 0:a.data)==null?void 0:x.message,"error"))}).catch(a=>{var t;n(!1),m((t=res==null?void 0:res.data)==null?void 0:t.message,"error"),console.log("Exception while Submitting the form",a)}),console.log(o)}}),q=()=>{},S=()=>{c(!1)};return e.jsxs("div",{children:[w&&e.jsx(P,{}),e.jsxs("div",{className:"grid grid-cols-12 p-5",children:[e.jsxs("div",{className:"col-span-7 ml-16",children:[e.jsxs("p",{className:"border p-2 bg-indigo-500 text-gray-200 rounded shadow-md",children:["You are applying for  ",e.jsx("span",{className:"font-semibold",children:" Water Complain "})," "]}),e.jsx("div",{className:"bg-white rounded-md my-2 shadow-lg  block",children:e.jsx("div",{className:"my-3 p-4",children:e.jsxs("form",{onSubmit:s.handleSubmit,children:[e.jsxs("div",{className:"flex items-start mb-4 flex-wrap",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Choose your requestType :"}),e.jsxs("div",{className:"ml-6 flex space-x-3",children:[e.jsx("input",{type:"radio",id:"PIPE_SHIFTING_ALTERATION",name:"requestType",value:"5",checked:s.values.requestType==="5",onChange:s.handleChange}),e.jsx("label",{htmlFor:"pipeShifting",children:"Pipe shifting"}),e.jsx("br",{}),e.jsx("input",{type:"radio",id:"FERRULE_CLEANING_CHECKING",name:"requestType",value:"4",checked:s.values.requestType==="4",onChange:s.handleChange}),e.jsx("label",{htmlFor:"feruleCleaning",children:"Ferule Cleaning"})]})]}),s.touched.requestType&&s.errors.requestType?e.jsx("div",{className:"text-red-500 text-xs",children:s.errors.requestType}):null,e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block",htmlFor:"remarks",children:"Remarks:"}),e.jsx("textarea",{id:"remarks",name:"remarks",className:"px-4 py-2 border rounded w-full",placeholder:"Enter any additional remarks...",value:s.values.remarks,onChange:s.handleChange}),s.errors.remarks&&s.touched.remarks&&e.jsx("div",{className:"text-red-500 text-xs",children:s.errors.remarks})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block",htmlFor:"address",children:"Address:"}),e.jsx("input",{type:"text",id:"address",name:"address",className:"px-4 py-2 border rounded w-full",placeholder:"Enter your address",value:s.values.address,onChange:s.handleChange}),s.errors.address&&s.touched.address&&e.jsx("div",{className:"text-red-500 text-xs",children:s.errors.address})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block",htmlFor:"mobileNo",children:"Updated Mobile Number:"}),e.jsx("input",{type:"text",id:"mobileNo",name:"mobileNo",className:"px-4 py-2 border rounded w-full",placeholder:"Enter your updated mobile number",value:s.values.mobileNo,onChange:s.handleChange}),s.errors.mobileNo&&s.touched.mobileNo&&e.jsx("div",{className:"text-red-500 text-xs",children:s.errors.mobileNo})]}),e.jsx("div",{className:"col-span-4 mb-3",children:e.jsx("div",{className:"text-center text-red-600 font-semibold",children:h&&"Error : "+h})}),e.jsxs("div",{className:"text-center",children:[e.jsxs("label",{className:"text-red-500",children:[e.jsx("input",{type:"checkbox",checked:d,onChange:N}),"I hereby declare that the above particulars of facts and information stated are true, correct and complete to the best of my belief and knowledge."]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:`bg-indigo-600 text-white font-medium text-sm leading-tight  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out px-12 py-2.5 rounded ${d?"bg-opacity-100 cursor-pointer":"bg-opacity-50 cursor-not-allowed"}`,disabled:!d,children:"Submit"})})]})]})})})]}),e.jsxs("div",{className:"col-span-5 ml-[40%] sm:hidden md:block lg:block",children:[e.jsx("p",{className:"border-2 border-indigo-400 p-2 text-center bg-white text-1xl shadow-md",children:" Frequently Asked Questions "}),e.jsx(M,{})]})]}),e.jsx(R,{isOpen:b,onAfterOpen:q,onRequestClose:S,style:W,contentLabel:"Example Modal",children:e.jsx("div",{className:"bg-white shadow-2xl border border-blue-200 rounded-md ",children:e.jsx("div",{className:"block p-4 md:py-6 shadow-lg bg-indigo-100 border border-indigo-300 rounded  mx-auto ",children:e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("p",{className:"font-semibold",children:"Your Application Has been Submitted Successfully."}),e.jsxs("p",{children:[e.jsx("span",{className:"text-sm",children:" Application No: "}),e.jsx("span",{className:"text-indigo-600 font-semibold",children:l==null?void 0:l.applicationNo})]}),e.jsx("button",{className:"bg-white hover:bg-indigo-600 hover:text-white text-indigo-700  border border-indigo-600 mx-2 rounded-sm text-sm px-4 py-2 shadow-xl",children:"Home"}),e.jsx("button",{className:"bg-indigo-600 hover:bg-indigo-700 text-white mx-2 rounded-sm text-sm px-4 py-2 shadow-xl",children:"Make Payment"})]})})})}),e.jsx(O,{topic:[{q:"How to apply ",a:"You can apply water connection against your property using Holding or SAF."},{q:"Which documents need to submit  ?",a:"Holding proff ,saf proff"}]})]})};export{se as default};
