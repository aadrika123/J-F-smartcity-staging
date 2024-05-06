import{r as i,j as e}from"./index-b42da1a9.js";import{L as O}from"./ListTable-1680aad8.js";import{A as U}from"./ApiHeader-6d683756.js";import{u as G}from"./useSetTitle-bc705181.js";import{A as J}from"./AxiosInterceptors-6b3b5d6a.js";import{P as K}from"./ProjectApiList-919c817c.js";import{n as x,d as Q,c as W}from"./PowerupFunctions-06f97d99.js";import{S as X}from"./ShimmerEffectInline-b1a1ff5d.js";import{B as Y}from"./BarLoader-9b37f4dc.js";import{B as Z}from"./BottomErrorCard-205cd99b.js";import{R as tt}from"./index.esm-c2437a46.js";import{c as et,a as at,u as ot}from"./formik.esm-75140eb0.js";import"./index-2dd46ca4.js";import"./index-6360e0e1.js";import"./index.esm-fb304c24.js";import"./iconBase-b3245ee2.js";import"./index-d3a1814a.js";const Bt=()=>{var S,j;G("Violation Master");const{api_updateViolation:it,api_deleteViolation:nt,api_addViolation:st,api_listDepartment:y,api_addDepartment:rt,api_updateDepartment:lt,api_deleteDepartment:dt,api_listSection:_,api_addSection:ct,api_updateSection:pt,api_deleteSection:ut,api_getSectionList:mt,api_getDepartmentList:xt,api_violation_list:N}=K(),h=i.useRef(),[l,f]=i.useState([]),[v,g]=i.useState(!1),[L,ht]=i.useState(!1),[V,k]=i.useState(""),[C,E]=i.useState(!1),[s,ft]=i.useState("");i.useState(null),i.useState(null);const[A,vt]=i.useState([]),[$,gt]=i.useState([]),[F,bt]=i.useState([]),[M,St]=i.useState(!1),[o,jt]=i.useState("violation"),D="text-gray-800 text-sm",b="border focus:outline-none drop-shadow-sm focus:drop-shadow-md px-4 py-1 text-gray-700 shadow-black placeholder:text-sm",z=t=>`px-4 py-1 text-sm bg-${t}-500 hover:bg-${t}-600 select-none rounded-sm hover:drop-shadow-md text-white`,m=(t,a)=>{E(t),k(a)},T=[{Header:"#",Cell:({row:t})=>e.jsx("div",{className:"pr-2",children:(t==null?void 0:t.index)+1})},{Header:"Violation Name",accessor:"violation_name",Cell:({cell:t})=>{var a;return x((a=t.row.original)==null?void 0:a.violation_name)}},{Header:"Violation Section",accessor:"violation_section",Cell:({cell:t})=>{var a;return x((a=t.row.original)==null?void 0:a.violation_section)}},{Header:"Department",accessor:"department_name",Cell:({cell:t})=>{var a;return x((a=t.row.original)==null?void 0:a.department_name)}},{Header:"Penalty Amount",accessor:"penalty_amount",Cell:({cell:t})=>{var a;return Q((a=t.row.original)==null?void 0:a.penalty_amount)}}],d=[{title:"Department",key:"department",width:`${o=="department"?" md:w-full ":o=="section"?" md:w-[45%] ":" md:w-[20%] "} w-full `,type:o=="department"?"text":"select",hint:"Enter department",required:!0,options:$,okey:"id",ovalue:"department_name"},{title:"Violation Section",key:"violationSection",width:`${o=="section"?" md:w-[45%] ":" md:w-[20%] "} w-full ${o!="department"?"block ":"hidden "}`,type:o=="section"?"number":"select",hint:"Enter violation section",required:o!="department"&&!0,options:A,okey:"id",ovalue:"violation_section"},{title:"Violation Name",key:"violationMade",width:`md:w-[20%] w-full ${o!="department"&&o!="section"?"block ":"hidden "}`,type:"text",hint:"Enter violation name",required:o!="department"&&o!="section"&&!0,options:F,okey:"id",ovalue:"violation_name"},{title:"Penalty Amount",key:"penaltyAmount",width:`md:w-[20%] w-full ${o=="violation"?"block ":"hidden "}`,type:"number",hint:"Enter penalty Amount",required:o=="violation"&&!0}],q=et().shape([...d].reduce((t,a)=>(a!=null&&a.required&&(t[a.key]=at().required(a==null?void 0:a.hint)),t),{})),n=ot({initialValues:{department:"",violationMade:"",violationSection:"",penaltyAmount:""},enableReinitialize:!0,validationSchema:q,onSubmit:t=>{submitFun(t)}}),P=()=>{f([]),g(!0);let t;o=="department"&&(t=y),o=="section"&&(t=_),o=="violation"&&(t=N),J.post(t,{},U()).then(a=>{var r,c,p;(r=a==null?void 0:a.data)!=null&&r.status?f((c=a==null?void 0:a.data)==null?void 0:c.data):m(!0,W((p=a==null?void 0:a.data)==null?void 0:p.message))}).catch(a=>{m(!0,"Server Error! Please try again later.")}).finally(()=>{g(!1)})},B=(t,a="",r,c="",p="",H=!1,u=[],R="",I="")=>e.jsxs("div",{className:`flex flex-col ${c} `,children:[a!=""&&e.jsxs("label",{htmlFor:t,className:D,children:[a," ",H&&e.jsx("span",{className:"text-red-500 text-xs font-bold",children:"*"})," : "]}),r!="select"&&r!="file"&&e.jsx("input",{...n.getFieldProps(t),type:r,className:b+` ${n.touched[t]&&n.errors[t]?" border-red-200 placeholder:text-red-400 ":" focus:border-zinc-300 border-zinc-200"}`,name:t,id:"",placeholder:p}),r=="select"&&e.jsx("select",{...n.getFieldProps(t),className:b+` ${n.touched[t]&&n.errors[t]?" border-red-200 placeholder:text-red-400 text-red-400":" focus:border-zinc-300 border-zinc-200 "}`,children:M?e.jsx("option",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsx("option",{value:null,children:"Select"}),typeof u=="object"&&(u==null?void 0:u.map(w=>e.jsx("option",{className:"",value:w[R],children:w[I]})))]})})]});return i.useEffect(()=>{P()},[o]),e.jsxs(e.Fragment,{children:[L&&e.jsx(Y,{}),C&&e.jsx(Z,{activateBottomErrorCard:m,errorTitle:V}),e.jsxs("div",{className:"poppins p-4 px-6",children:[e.jsx("div",{className:"uppercase font-semibold text-gray-700 text-2xl py-2 text-center tracking-[0.7rem]",children:"Violation   List"}),e.jsx("div",{className:"w-full h-[0.15rem] bg-gray-400 mb-6"}),v&&e.jsx(X,{}),!v&&e.jsx(e.Fragment,{children:(l==null?void 0:l.length)>0?e.jsx(e.Fragment,{children:o=="violation"&&e.jsx(O,{columns:T,dataList:l,exportStatus:!1})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"bg-red-100 text-red-500 py-2 text-lg font-semibold text-center border border-red-500 drop-shadow-sm",children:"Oops! No Data Found."})})})]}),e.jsxs("dialog",{ref:h,className:`relative overflow-clip animate__animated animate__zoomIn animate__faster ${s!="delete"&&o=="violation"&&" w-[90vw] md:max-w-[1080px]"}`,children:[s!="assign"&&s!="delete"&&e.jsx("span",{onClick:()=>(h.current.close(),n.resetForm()),className:"block p-1 bg-red-100 hover:bg-red-500 rounded-full hover:text-white cursor-pointer transition-all duration-200 absolute top-2 right-2",children:e.jsx(tt,{})}),s!="assign"&&s!="delete"&&e.jsxs("form",{onChange:t=>(n.handleChange(t),handleChange(t)),onSubmit:n.handleSubmit,className:"p-4 px-8 py-6 shadow-lg",children:[e.jsxs("section",{className:"flex gap-4 flex-wrap",children:[e.jsxs("header",{className:"w-full font-semibold text-xl capitalize text-sky-700 border-b pb-1 text-center",children:[s," ",o]}),d==null?void 0:d.map(t=>B(t==null?void 0:t.key,t==null?void 0:t.title,t==null?void 0:t.type,t==null?void 0:t.width,t==null?void 0:t.hint,t==null?void 0:t.required,t==null?void 0:t.options,t==null?void 0:t.okey,t==null?void 0:t.ovalue)),((S=n.values)==null?void 0:S.violationMade)!=""&&e.jsxs("div",{className:"flex flex-wrap gap-2 text-sm w-full",children:[e.jsx("span",{className:"block w-full md:w-[15%]",children:"Violation Name :"}),(j=n.values)==null?void 0:j.violationMade,e.jsx("span",{className:"animate-ping",children:"|"})]})]}),e.jsx("footer",{className:"mt-4 flex justify-center",children:e.jsxs("button",{type:"submit",className:z("green"),children:[s=="add"&&"Add",s=="edit"&&"Update"]})})]})]})]})};export{Bt as default};
