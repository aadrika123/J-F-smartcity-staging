import{j as e}from"./mui-8e804a04.js";import{r as o,u as E,f as F}from"./router-87042356.js";import{m as W,c as M,d as l,u as R}from"./index-2435513d.js";import{M as D}from"./index-4e794517.js";import{a as I}from"./axios-97164839.js";import{W as H}from"./WaterApiList-86cf1deb.js";import{A as L}from"./AccordiaonPagefordisconnection-2ea68626.js";import{C as O}from"./ChatBot-6a9bbbd7.js";import{B}from"./BarLoader-6486f53e.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";/* empty css                */const Y={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"",border:"none"}},ae=()=>{const[f,i]=o.useState(!1),[N,t]=o.useState(!1),[n,j]=o.useState(),{notify:m}=o.useContext(W),[c,x]=o.useState(""),[d,y]=o.useState(!1),v=()=>{y(!d)},k={feruleCleaning:!1,pipeShifting:!1,remarks:"",reason:"",address:"",mobileNo:""},h=E(),{consumerId:p}=F();console.log("param payment id ..",p);const{api_applywaterdisconnection:w,header:S}=H(),C=M().shape({remarks:l().required("Remarks is required"),address:l().required("Address is required"),reason:l().required("Address is required"),mobileNo:l().required("Mobile number is required")}),s=R({initialValues:k,validationSchema:C,onSubmit:r=>{t(!0),I.post(w,{consumerId:p,remarks:r.remarks,ulbId:"2",reason:r.reason,mobileNo:r.mobileNo,address:r.address},S).then(a=>{var u,b,g;a.data.status===!0?(j((u=a==null?void 0:a.data)==null?void 0:u.data),t(!1),console.log("Data Really Saved",a),i(!0)):(t(!1),console.log("False While Water Disconnection Apply",a),x(" "+((b=a==null?void 0:a.data)==null?void 0:b.message)),m((g=a==null?void 0:a.data)==null?void 0:g.message,"error"))}).catch(a=>{t(!1),x("Exception While Apply"),m("Something Went Wrong","error"),console.log("Exception while Submitting the form",a)}),console.log(r)}}),A=()=>{},q=()=>{i(!1)};return e.jsxs("div",{children:[N&&e.jsx(B,{}),e.jsxs("div",{className:"grid grid-cols-12 p-5 max-sm:flex max-sm:flex-col max-sm:p-0 ",children:[e.jsxs("div",{className:"col-span-7 ml-16 max-sm:ml-0 max-sm:p-2",children:[e.jsxs("p",{className:"border p-2 bg-indigo-500 text-gray-200 rounded shadow-md",children:["You are applying for"," ",e.jsx("span",{className:"font-semibold",children:" Water Disconnection "})," "]}),e.jsx("div",{className:"bg-white rounded-md my-2 shadow-lg  block",children:e.jsx("div",{className:"my-3 p-4",children:e.jsxs("form",{onSubmit:s.handleSubmit,children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{className:"block",htmlFor:"address",children:[" ",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Reason:"]}),e.jsx("input",{type:"text",id:"reason",name:"reason",className:"px-4 py-2 border rounded w-full",placeholder:"Enter your reason",value:s.values.reason,onChange:s.handleChange}),s.errors.reason&&s.touched.reason&&e.jsx("div",{className:"text-red-500 text-xs",children:s.errors.reason})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{className:"block",htmlFor:"address",children:[e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Address:"]}),e.jsx("input",{type:"text",id:"address",name:"address",className:"px-4 py-2 border rounded w-full",placeholder:"Enter your address",value:s.values.address,onChange:s.handleChange}),s.errors.address&&s.touched.address&&e.jsx("div",{className:"text-red-500 text-xs",children:s.errors.address})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{className:"block",htmlFor:"mobileNo",children:[" ",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Updated Mobile Number:"]}),e.jsx("input",{type:"text",id:"mobileNo",name:"mobileNo",className:"px-4 py-2 border rounded w-full",placeholder:"Enter your updated mobile number",value:s.values.mobileNo,onChange:s.handleChange}),s.errors.mobileNo&&s.touched.mobileNo&&e.jsx("div",{className:"text-red-500 text-xs",children:s.errors.mobileNo})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{className:"block",htmlFor:"remarks",children:[e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Remarks:"]}),e.jsx("textarea",{id:"remarks",name:"remarks",className:"px-4 py-2 border rounded w-full",placeholder:"Enter any additional remarks...",value:s.values.remarks,onChange:s.handleChange}),s.errors.remarks&&s.touched.remarks&&e.jsx("div",{className:"text-red-500  text-xs",children:s.errors.remarks})]}),e.jsx("div",{className:"col-span-4 mb-3",children:e.jsx("div",{className:"text-center text-red-600 font-semibold",children:c&&c})}),e.jsxs("div",{className:"text-center",children:[e.jsxs("label",{className:"text-red-500",children:[e.jsx("input",{type:"checkbox",checked:d,onChange:v}),"  I hereby declare that the above particulars of facts and information stated are true, correct and complete to the best of my belief and knowledge."]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:`bg-indigo-600 text-white font-medium text-sm leading-tight  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out px-12 py-2.5 rounded ${d?"bg-opacity-100 cursor-pointer":"bg-opacity-50 cursor-not-allowed"}`,disabled:!d,children:"Submit"})})]})]})})})]}),e.jsxs("div",{className:"col-span-5 ml-[40%] sm:hidden md:block lg:block max-sm:ml-0 max-sm:p-2",children:[e.jsxs("p",{className:"border-2 border-indigo-400 p-2 text-center bg-white text-1xl shadow-md",children:[" ","Frequently Asked Questions"," "]}),e.jsx(L,{})]})]}),e.jsx(D,{isOpen:f,onAfterOpen:A,onRequestClose:q,style:Y,contentLabel:"Example Modal",children:e.jsx("div",{className:"bg-white shadow-2xl border border-blue-200 rounded-md ",children:e.jsx("div",{className:"block p-4 md:py-6 shadow-lg bg-indigo-100 border border-indigo-300 rounded  mx-auto ",children:e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("p",{className:"font-semibold",children:"Your Application Has been Submitted Successfully."}),e.jsxs("p",{children:[e.jsx("span",{className:"text-sm",children:" Application No: "}),e.jsx("span",{className:"text-indigo-600 font-semibold",children:n==null?void 0:n.applicationNo})]}),e.jsx("button",{onClick:()=>h("/landingDashboard"),className:"bg-white hover:bg-indigo-600 hover:text-white text-indigo-700  border border-indigo-600 mx-2 rounded-sm text-sm px-4 py-2 shadow-xl",children:"Home"}),e.jsx("button",{onClick:()=>h(`/water-doc-upload/${id}`),className:"bg-indigo-600 hover:bg-indigo-700 text-white mx-2 rounded-sm text-sm px-4 py-2 shadow-xl",children:"Upload Document"})]})})})}),e.jsx(O,{topic:[{q:"How to apply ",a:"You can apply water connection against your property using Holding or SAF."},{q:"Which documents need to submit  ?",a:"Holding proff ,saf proff"}]})]})};export{ae as default};
