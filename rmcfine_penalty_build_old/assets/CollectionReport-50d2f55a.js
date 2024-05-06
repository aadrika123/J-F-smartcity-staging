import{a as F,r as p,j as e}from"./index-faef4408.js";import{L as M}from"./ListTableConnect-bece3ab7.js";import{c as P,a as q,u as $}from"./formik.esm-f68c633c.js";import{R as z}from"./index.esm-f80cb93c.js";import{R as A}from"./Hourglass-36f1258b.js";import{P as T}from"./ProjectApiList-919c817c.js";import{g as f,n as i,i as L,d as V}from"./PowerupFunctions-1c006beb.js";import{u as B}from"./useSetTitle-78d55b86.js";import"./index-b7057102.js";import"./index-eab1d8e2.js";import"./index.esm-03dcecfa.js";import"./iconBase-74df04d3.js";import"./index.esm-f9efea8a.js";import"./ApiHeader-6d683756.js";import"./ShimmerEffectInline-e1eb703f.js";import"./AxiosInterceptors-06ddb7df.js";const ao=()=>{B("Collection Report");const{api_CollectionReport:g}=T(),u=F(),b=[{Header:"Sl.No.",Cell:({row:o})=>e.jsx("div",{children:(o==null?void 0:o.index)+1})},{Header:"Name",accessor:"full_name",Cell:({cell:o})=>{var r;return i((r=o.row.original)==null?void 0:r.full_name)}},{Header:"Mobile No.",accessor:"mobile",Cell:({cell:o})=>{var r;return i((r=o.row.original)==null?void 0:r.mobile)}},{Header:"Challan No",accessor:"challan_no",Cell:({cell:o})=>{var r;return e.jsx("div",{className:"underline cursor-pointer",onClick:()=>{var t,n,c,l;return((n=(t=o==null?void 0:o.row)==null?void 0:t.original)==null?void 0:n.challan_id)&&u(`/challan/${(l=(c=o==null?void 0:o.row)==null?void 0:c.original)==null?void 0:l.challan_id}`)},children:i((r=o.row.original)==null?void 0:r.challan_no)})}},{Header:"Violation Made",accessor:"violation_name",Cell:({cell:o})=>{var r;return i((r=o.row.original)==null?void 0:r.violation_name)}},{Header:"Violation Section",accessor:"violation_section",Cell:({cell:o})=>{var r;return i((r=o.row.original)==null?void 0:r.violation_section)}},{Header:"Violation Place",accessor:"violation_place",Cell:({cell:o})=>{var r;return i((r=o.row.original)==null?void 0:r.violation_place)}},{Header:"Transaction No",accessor:"tran_no",Cell:({cell:o})=>{var r;return e.jsx("div",{className:"underline cursor-pointer",onClick:()=>{var t,n;return((t=o.row.original)==null?void 0:t.tran_no)&&u(`/fp-receipt/${(n=o.row.original)==null?void 0:n.tran_no}`)},children:i((r=o.row.original)==null?void 0:r.tran_no)})}},{Header:"Transaction Date",accessor:"tran_date",Cell:({cell:o})=>{var r;return L((r=o.row.original)==null?void 0:r.tran_date)}},{Header:"Payment Mode",accessor:"payment_mode",Cell:({cell:o})=>{var r;return i((r=o.row.original)==null?void 0:r.payment_mode)}},{Header:"Penalty Amount",accessor:"total_amount",Cell:({cell:o})=>{var r;return V((r=o.row.original)==null?void 0:r.total_amount)}}],[h,w]=p.useState({}),[j,y]=p.useState(0),[v,C]=p.useState(!1),N="text-gray-800 text-sm",x="border focus:outline-none drop-shadow-sm focus:drop-shadow-md px-4 py-1 text-gray-700 shadow-black placeholder:text-sm",s=[{title:"From Date",key:"fromDate",width:"md:w-[20%] w-full",type:"date",hint:"",required:!0,options:"",okey:"",ovalue:""},{title:"Upto Date",key:"uptoDate",width:"md:w-[20%] w-full",type:"date",hint:"",required:!0,options:"",okey:"",ovalue:""},{title:"Payment Mode",key:"paymentMode",width:"md:w-[20%] w-full",type:"select",hint:"Enter your name",options:[{id:"CASH",value:"Cash"}],okey:"id",ovalue:"value"}],_=(o,r="",t,n="",c="",l=!1,d=[],R="",k="")=>e.jsxs("div",{className:`flex flex-col ${n} `,children:[r!=""&&e.jsxs("label",{htmlFor:o,className:N,children:[r," ",l&&e.jsx("span",{className:"text-red-500 text-xs font-bold",children:"*"})," : "]}),t!="select"&&t!="file"&&e.jsx("input",{...a.getFieldProps(o),type:t,className:x+` ${a.touched[o]&&a.errors[o]?" border-red-200 placeholder:text-red-400 ":" focus:border-zinc-300 border-zinc-200"}`,name:o,id:"",placeholder:c}),t=="select"&&e.jsxs("select",{...a.getFieldProps(o),className:x+` ${a.touched[o]&&a.errors[o]?" border-red-200 placeholder:text-red-400 text-red-400":" focus:border-zinc-300 border-zinc-200 "}`,children:[e.jsx("option",{value:"",children:"All"}),d==null?void 0:d.map(m=>e.jsx("option",{className:"",value:m[R],children:m[k]}))]})]}),D=P().shape([...s].reduce((o,r)=>(r!=null&&r.required&&(o[r.key]=q().required(r==null?void 0:r.hint)),o),{})),S={fromDate:f(),uptoDate:f(),paymentMode:""},a=$({initialValues:S,enableReinitialize:!0,validationSchema:D,onSubmit:o=>{H(o)}}),H=o=>{w({fromDate:o==null?void 0:o.fromDate,uptoDate:o==null?void 0:o.uptoDate,paymentMode:o==null?void 0:o.paymentMode}),y(r=>r+1)};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:a.handleSubmit,onChange:a.handleChange,className:"bg-white poppins p-4 mb-8",children:[e.jsx("h1",{className:"text-xl font-semibold uppercase text-center text-gray-700 border-b border-gray-400 mb-4 pb-1",children:"Collection Report"}),e.jsxs("section",{className:"flex gap-4 flex-wrap my-6",children:[s==null?void 0:s.map(o=>_(o==null?void 0:o.key,o==null?void 0:o.title,o==null?void 0:o.type,o==null?void 0:o.width,o==null?void 0:o.hint,o==null?void 0:o.required,o==null?void 0:o.options,o==null?void 0:o.okey,o==null?void 0:o.ovalue)),e.jsx("div",{className:"mt-4 w-full md:w-[30%] flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:mt-4",children:e.jsx("div",{className:" ",children:v?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-center",children:e.jsx(A,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:" flex items-center border border-green-600 bg-green-500 hover:bg-green-600 text-white shadow-md rounded-sm  text-sm px-5 py-1",children:[e.jsx("span",{className:"",children:e.jsx(z,{fontSize:""})}),e.jsx("span",{children:"Search Record"})]})})})]})]}),Object.keys(h).length!==0&&e.jsx(M,{api:g,columns:b,requestBody:h,changeData:j,search:!1,loader:o=>C(o)})]})};export{ao as default};
