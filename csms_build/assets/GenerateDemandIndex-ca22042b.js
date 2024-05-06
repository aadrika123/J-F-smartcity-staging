import{j as e,r as i,u as q,s as T,A as p,e as g,c as I,a as w,b as O,aq as V,g as J,Q as N,n as o}from"./index-de640f8f.js";import{L as Y}from"./ListTableRedesign-981859ac.js";const K=n=>{const x=[{id:1,month:"January",fee:["School Fee","Bus Fee","Renewal Fee"],amount:[2500,3e3,4e3],totalFee:7800,isPaid:!0},{id:2,month:"February",fee:["School Fee","Bus Fee","Renewal Fee"],amount:[2100,3200,4e3],totalFee:6800,isPaid:!1},{id:3,month:"March",fee:["School Fee","Bus Fee","Renewal Fee"],amount:[2100,3200,4e3],totalFee:6800,isPaid:!1},{id:3,month:"April",fee:["School Fee","Bus Fee","Renewal Fee"],amount:[2100,3200,4e3],totalFee:6800,isPaid:!1},{id:3,month:"May",fee:["School Fee","Bus Fee","Renewal Fee"],amount:[2100,3200,4e3],totalFee:6800,isPaid:!1},{id:3,month:"June",fee:["School Fee","Bus Fee","Renewal Fee"],amount:[2100,3200,4e3],totalFee:6800,isPaid:!1},{id:3,month:"July",fee:["School Fee","Bus Fee","Renewal Fee"],amount:[2100,3200,4e3],totalFee:6800,isPaid:!1},{id:3,month:"August",fee:["School Fee","Bus Fee","Renewal Fee"],amount:[2100,3200,4e3],totalFee:6800,isPaid:!1},{id:3,month:"September",fee:["School Fee","Bus Fee","Renewal Fee"],amount:[2100,3200,4e3],totalFee:6800,isPaid:!1},{id:3,month:"October",fee:["School Fee","Bus Fee","Renewal Fee"],amount:[2100,3200,4e3],totalFee:6800,isPaid:!1},{id:3,month:"November",fee:["School Fee","Bus Fee","Renewal Fee"],amount:[2100,3200,4e3],totalFee:6800,isPaid:!1},{id:3,month:"December",fee:["School Fee","Bus Fee","Renewal Fee"],amount:[2100,3200,4e3],totalFee:6800,isPaid:!1}];return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"border-b-2 border-gray-200 mx-5 my-5"}),e.jsxs("div",{className:"m-auto w-[80%]",children:[e.jsxs("div",{className:"flex justify-between text-gray-500 my-10",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Roll No."}),e.jsx("p",{className:"mt-3",children:"1"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Registration No."}),e.jsx("p",{className:"mt-3",children:"REG12342356"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Student Name"}),e.jsx("p",{className:"mt-3",children:"Amit Kumar"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Father Name"}),e.jsx("p",{className:"mt-3",children:"Amit Kumar"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Class"}),e.jsx("p",{className:"mt-3",children:"X"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Sec"}),e.jsx("p",{className:"mt-3",children:"A"})]})]}),e.jsxs("div",{className:"m-auto mt-5",children:[e.jsxs("div",{className:"grid grid-cols-12 font-semibold text-lg text-gray-700",children:[e.jsx("div",{className:"col-span-4 ml-5",children:"Months"}),e.jsx("div",{className:"col-span-4 ml-3",children:"Fees"}),e.jsx("div",{className:"col-span-4",children:"Amount"})]}),e.jsxs("div",{className:" rounded-xl shadow-md border border-gray-200 px-5 overflow-auto h-80",children:[x.map((c,h)=>e.jsxs("div",{className:"grid grid-cols-12 text-gray-600 border-b py-2",children:[e.jsx("div",{className:"col-span-4 ",children:c.month}),e.jsx("div",{className:"col-span-4",children:c.fee.map(d=>e.jsx("p",{children:d}))}),e.jsxs("div",{className:"col-span-4",children:[c.amount.map(d=>e.jsxs("p",{children:["₹ ",d]})),e.jsx("div",{className:"bg-gray-200 pr-10 pl-4 inline-block -ml-4 border border-gray-300",children:e.jsx("p",{className:"inline   w-[30%]",children:"₹ 7800"})})]})]},h)),e.jsxs("div",{className:"grid grid-cols-12  my-2",children:[e.jsx("p",{className:"col-span-4"}),e.jsx("p",{className:"col-span-4 font-bold text-lg text-gray-700",children:" Total Amount "}),e.jsx("p",{className:"col-span-4 border border-gray-300 bg-gray-200 w-[30%] font-medium text-gray-600",children:"Rs. 4000/-"})]})]})]})]})]})},ae=()=>{const[n,x]=i.useState(0),[c,h]=i.useState([]);i.useState(!0);const[d,S]=i.useState(null),[Q,D]=i.useState(!1),[U,R]=i.useState(null),[X,r]=i.useState(!1),[f,A]=i.useState([]);i.useState([]);const{api_finance_year:B,api_getDemandGenerate:E,api_postDemandGenerate:P,api_editDemandGenerate:z,api_searchDemandGenerate:W}=J();q(),T("Generate Demand"),i.useEffect(()=>{L(),b(),m.setFieldValue("dateValue")},[]);const L=()=>{r(!0),p.post(B,{},g()).then(function(a){a!=null&&a.data?(console.log(a==null?void 0:a.data),A(a==null?void 0:a.data)):u(!0,"Error occured while fetching data."),r(!1)}).catch(function(a){console.log("==2 error list...",a),u(!0,"Error occured while fetching data."),r(!1)})},b=()=>{r(!0),p.post(E,{},g()).then(function(a){var s,t;(s=a==null?void 0:a.data)!=null&&s.status?h((t=a==null?void 0:a.data)==null?void 0:t.data):u(!0,"Error occured while fetching data."),r(!1)}).catch(function(a){console.log("==2 error list...",a),u(!0,"Error occured while fetching data."),r(!1)})},C=I({fy:w().required("Select financial year."),admissionNo:w().required("Enter admission number.")}),m=O({initialValues:{fy:"",admissionNo:""},onSubmit:(a,s)=>{console.log("at submit ",a),_(a)},validationSchema:C});console.log(d);const _=a=>{r(!0);let s,t={fy:a.fy,admissionNo:a.admissionNo};d!==null?(s=t,s.id=d):s=t,p.post(P,s,g()).then(function(l){var F,y,v;console.log("view fee master..",(F=l==null?void 0:l.data)==null?void 0:F.data),(y=l==null?void 0:l.data)!=null&&y.status?(b(),N.success("Demad Generated Successfully")):N.error(`${(v=l==null?void 0:l.data)==null?void 0:v.message}`),r(!1)}).catch(function(l){console.log("==2 error list...",l),N.warning("Error occured in submitting form"),r(!1)})},j=new Date;let G=String(j.getDate()).padStart(2,"0"),M=String(j.getMonth()+1).padStart(2,"0"),k=j.getFullYear(),H=`${G}-${M}-${k}`;const $=[{Header:"Admission No.",accessor:"admission_no"},{Header:"Student Name",accessor:"student_name        ",Cell:({cell:a})=>e.jsx("span",{children:o(a.row.original.student_name)})},{Header:"Month Name",accessor:"month_name"},{Header:"Fee Head",accessor:"fee_head",Cell:({cell:a})=>e.jsx("span",{children:o(a.row.original.fee_head)})},{Header:"Amount",accessor:"amount",Cell:({cell:a})=>e.jsx("span",{children:o(a.row.original.amount)})},{Header:"Created Date & Time",Cell:({cell:a})=>{var s,t;return e.jsxs("span",{children:[o((s=a.row.original)==null?void 0:s.date)," |"," ",o((t=a.row.original)==null?void 0:t.time)]})}},{Header:"Status",Cell:({cell:a})=>{var s,t;return e.jsx("span",{className:((s=a.row.original)==null?void 0:s.status)==="Active"?"text-[green]":"text-[red]",children:o((t=a.row.original)==null?void 0:t.status)})}}],u=(a,s)=>{R(s),D(a)};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full col-span-10 2xl:py-3 2xl:px-4 px-4 py-2",children:e.jsx("div",{className:"border-[2px] border-gray-200 rounded-md h-[82vh] 2xl:p-6 p-4 overflow-y-auto",children:e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex w-full justify-between items-center max-[870px]:block",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-3xl font-semibold text-gray-600 flex flex-start",children:"Generate Demand"}),e.jsx("span",{className:"text-sm font-medium text-teal-600",children:"Empowering Education: Discover Transparent and Affordable Class Fees"})]}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"search",name:"",id:"",className:"border-2 border-gray-300 w-[20vw] h-[4.5vh] relative rounded-sm pl-[2.2vw] focus:outline-none focus:border-2 focus:border-gray-500",placeholder:"Search..."}),e.jsx("span",{className:"absolute top-[1vh] left-[0.6vw] text-[2.4vh] text-gray-500",children:e.jsx(V,{})})]})})]}),e.jsx("form",{onSubmit:m.handleSubmit,children:e.jsxs("div",{className:"w-full grid grid-cols-10 text-teal-900 mt-5 max-[1120px]:block ",children:[e.jsxs("div",{className:"col-span-3 flex w-full justify-center gap-3  max-[1120px]:mt-2 max-[1120px]:justify-start",children:[e.jsx("p",{children:"Demand Date"}),e.jsx("input",{type:"text",...m.getFieldProps("dateValue"),disabled:!0,placeholder:H,className:"border rounded-lg h-8 shadow w-[50%] px-3"})]}),e.jsxs("div",{className:"col-span-3 flex w-full gap-3  max-[1120px]:mt-2 max-[1120px]:justify-start",children:[e.jsxs("p",{children:["Financial Year"," ",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600  ",children:"*"})]}),e.jsxs("select",{required:!0,...m.getFieldProps("fy"),id:"",className:"border rounded-lg h-8 shadow w-[50%] px-3",children:[e.jsx("option",{value:"",children:"Select"}),f==null?void 0:f.map((a,s)=>e.jsx("option",{value:a==null?void 0:a.fy,children:a==null?void 0:a.fy}))]})]}),e.jsxs("div",{className:"col-span-3 flex w-full justify-end gap-3  max-[1120px]:mt-2 max-[1120px]:justify-start",children:[e.jsxs("p",{children:["Admission no."," ",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600  ",children:"*"})]}),e.jsx("input",{required:!0,type:"text",...m.getFieldProps("admissionNo"),className:"border rounded-lg h-8 shadow w-[50%] px-3"})]}),e.jsx("div",{className:"col-span-1 flex w-full justify-end gap-3  max-[1120px]:mt-2 max-[1120px]:justify-start",children:e.jsx("button",{type:"submit",className:"bg-[#0F766E] px-3 rounded-md text-white",children:"Generate"})})]})}),e.jsxs("div",{className:"text-gray-600 flex gap-4 mt-8 mb-4",children:[e.jsx("div",{className:n==0&&"border-b-[2px] border-blue-500 w-max pb-2",children:e.jsx("button",{className:`${n==0?"bg-blue-200":"bg-gray-300"}  px-2 py-1.5 w-[4rem] rounded-[4px] text-sm transition-all duration-200`,onClick:()=>x(0),children:"List"})}),e.jsx("div",{className:n==1&&"border-b-[2px] border-blue-500 w-max pb-2",children:e.jsx("button",{className:`${n==1?"bg-blue-200":"bg-gray-200"}  px-2 py-1.5 w-[4rem] rounded-[4px] text-sm transition-all duration-200`,onClick:()=>(x(1),S(null)),children:"Details"})})]}),e.jsx("div",{className:"max-[768px]:block ",children:e.jsxs("div",{className:"max-[768px]:justify-start max-[768px]:mt-2",children:[n==0&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-6",children:[e.jsx("h1",{className:"text-teal-600 text-xl",children:"List Of Students"}),e.jsx(Y,{columns:$,dataList:c})]})}),n==1&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-6",children:[e.jsx("h1",{className:"text-[#0F766E] text-xl",children:"Details Of Students"}),e.jsx(K,{id:d})]})})]})})]})})})})};export{ae as default};
