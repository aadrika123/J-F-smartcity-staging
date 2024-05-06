import{f as _,k as K,r as c,aI as D,A as j,o as S,b0 as k,l as I,m as v,cA as Y,j as e,aZ as ee,aJ as ae,p as se,bd as oe,n,bC as le,aX as ne,b2 as re}from"./index-a8a14e0c.js";const te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};_.setAppElement("#root");function ue(){K("Bank Reconciliation");const[q,N]=c.useState(!1);c.useState("");const[ce,F]=c.useState(),[T,h]=c.useState(!1),[x,M]=c.useState(!1),[t,B]=c.useState(),[H,P]=c.useState(0),[A,R]=c.useState("1"),[E,L]=c.useState(!1),[O,z]=c.useState(null),[de,U]=c.useState(!1),{getReconcillationDetails:V,apiUpdateReconcillationDetails:$,getReconcileById:Q}=le(),y=D();function Z(a){N(!0),F(a)}function f(){N(!1)}const J=()=>{f()};c.useEffect(()=>{p()},[]);const p=a=>{var m,l,d,i,u,w;h(!0);const r={fromDate:(m=s==null?void 0:s.values)==null?void 0:m.fromDate,toDate:(l=s==null?void 0:s.values)==null?void 0:l.toDate,moduleId:(d=s==null?void 0:s.values)==null?void 0:d.moduleId,paymentMode:(i=s==null?void 0:s.values)==null?void 0:i.paymentMode,verificationType:(u=s==null?void 0:s.values)==null?void 0:u.verificationType,chequeNo:(w=s==null?void 0:s.values)==null?void 0:w.cheque_dd_no};j.post(V,r,y).then(g=>{var C;return M((C=g==null?void 0:g.data)==null?void 0:C.data),h(!1)}).catch(g=>{b(!0,"Error occured while fetching bank reconciliation list. Please try again later."),h(!1)})},s=S({initialValues:{fromDate:k(new Date).format("yy-MM-DD"),toDate:k(new Date).format("yy-MM-DD"),moduleId:"1",paymentMode:"",verificationType:"",cheque_dd_no:""},enableReinitialize:!0,onSubmit:a=>{p(),R(a==null?void 0:a.moduleId)},validationSchema:I({fromDate:v().required("Select from date"),toDate:v().required("Select to date")})}),W=a=>{U(!0),j.post($,{chequeId:H,moduleId:A,status:a==null?void 0:a.clearStatus,clearanceDate:a==null?void 0:a.clearanceDate,remarks:o.values.clearStatus=="bounce"?a==null?void 0:a.reason:"",cancellationCharge:o.values.clearStatus=="bounce"?a==null?void 0:a.charge:""},y).then(r=>(J(),h(!1),p(),ne.success("Action Taken Successfully !!!"))).catch(r=>(h(!1),b(!0,"Error occured while bank reconile. Please try again later.")))},o=S({initialValues:{clearanceDate:"",clearStatus:"",reason:"",charge:""},onSubmit:a=>{W(a)},validationSchema:I({clearanceDate:Y().required("Select from Date"),clearStatus:v().required("Select Status")})}),X=(a,r)=>{h(!0),P(a);let m={chequeId:a,moduleId:r};j.post(Q,m,D()).then(l=>{var d,i,u;((d=l==null?void 0:l.data)==null?void 0:d.status)==!0&&(h(!1),B((i=l==null?void 0:l.data)==null?void 0:i.data),Z()),((u=l==null?void 0:l.data)==null?void 0:u.status)==!1&&(b(!0,"Error occured while fetching bank reconcile details. Please try again later."),h(!1))}).catch(l=>{b(!0,"Error occured while fetching bank reconcile details. Please try again later."),h(!1)})},G=[{Header:"S.No.",Cell:({row:a})=>e.jsx("div",{children:(a==null?void 0:a.index)+1})},{Header:"Tran. No.",accessor:"tran_no",Cell:a=>n(a==null?void 0:a.value)},{Header:"Tran. Date",accessor:"tran_date",Cell:a=>n(a==null?void 0:a.value)},{Header:"Payment Mode",accessor:"payment_mode",Cell:a=>n(a==null?void 0:a.value)},{Header:"Tran. Type",accessor:"tran_type",Cell:a=>n(a==null?void 0:a.value)},{Header:"Cheque Date",accessor:"cheque_date",Cell:a=>n(a==null?void 0:a.value)},{Header:"Cheque No.",accessor:"cheque_no",Cell:a=>n(a==null?void 0:a.value)},{Header:"Bank Name",accessor:"bank_name",Cell:a=>n(a==null?void 0:a.value)},{Header:"Branch Name",accessor:"branch_name",Cell:a=>n(a==null?void 0:a.value)},{Header:"Tran. Amount",accessor:"amount",Cell:a=>e.jsx(e.Fragment,{children:re(parseFloat(a==null?void 0:a.value)).toLocaleString("en-IN",{style:"currency",currency:"INR"})})},{Header:"Clearance Date",accessor:"clear_bounce_date",Cell:a=>n(a==null?void 0:a.value)},{Header:"Remarks",accessor:"remarks",Cell:a=>n(a==null?void 0:a.value)},{Header:"TC Name",accessor:"user_name",Cell:a=>n(a==null?void 0:a.value)},{Header:"Status",Cell:({cell:a})=>{var r,m,l,d,i,u;return e.jsxs(e.Fragment,{children:[((m=(r=a==null?void 0:a.row)==null?void 0:r.original)==null?void 0:m.status)=="1"&&e.jsx("span",{className:"text-green-500 font-semibold",children:"Clear"}),((d=(l=a==null?void 0:a.row)==null?void 0:l.original)==null?void 0:d.status)=="2"&&e.jsx("span",{className:"text-blue-500 font-semibold",children:"Pending"}),((u=(i=a==null?void 0:a.row)==null?void 0:i.original)==null?void 0:u.status)=="3"&&e.jsx("span",{className:"text-red-500 font-semibold",children:"Bounce"})]})},option:[{1:"Clear"},{2:"Pending"},{3:"Bounce"}]},{Header:"Action",Cell:({cell:a})=>{var r,m;return((m=(r=a.row)==null?void 0:r.original)==null?void 0:m.status)=="2"&&e.jsxs("span",{onClick:()=>{var l,d,i,u;X((d=(l=a.row)==null?void 0:l.original)==null?void 0:d.id,(u=(i=a==null?void 0:a.row)==null?void 0:i.original)==null?void 0:u.module_id)},className:" px-2 py-1 rounded-lg shadow-lg border border-gray-300 bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer",children:[e.jsx("span",{className:"font-semibold",children:"Action"})," "]})}}],b=(a,r)=>{z(r),L(a)};return e.jsxs(e.Fragment,{children:[e.jsx(ee,{autoClose:2e3}),T&&e.jsx(ae,{}),E&&e.jsx(se,{activateBottomErrorCard:b,errorTitle:O}),e.jsx("form",{onSubmit:s.handleSubmit,children:e.jsxs("div",{className:"grid grid-cols-12 space-x-2 bg-indigo-100 p-2 rounded-md",children:[e.jsx("div",{className:"col-span-12",children:e.jsxs("h1",{className:" text-xl font-semibold",children:[e.jsx("img",{src:"",className:"inline w-10"})," Bank Reconciliation"]})}),e.jsxs("div",{className:"form-group mb-1 md:mb-2 col-span-4 md:col-span-3 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1  text-sm font-semibold",children:["From Date",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{...s.getFieldProps("fromDate"),type:"date",className:"form-control block w-full px-1 py-1.5 text-sm md:text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.fromDate&&s.errors.fromDate?s.errors.fromDate:null})]}),e.jsxs("div",{className:"form-group mb-1 md:mb-2 col-span-4 md:col-span-3 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1  text-sm font-semibold",children:["To Date",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{...s.getFieldProps("toDate"),type:"date",className:"form-control block w-full px-1 py-1.5 text-sm md:text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.toDate&&s.errors.toDate?s.errors.toDate:null})]}),e.jsxs("div",{className:"form-group mb-1 md:mb-2 col-span-4 md:col-span-3 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1  text-sm font-semibold",children:["Module",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...s.getFieldProps("moduleId"),value:s.values.moduleId,onChange:s.handleChange,className:"form-control block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{value:"1",children:"Property"}),e.jsx("option",{value:"2",children:"Water"}),e.jsx("option",{value:"3",children:"Trade"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.moduleId&&s.errors.moduleId?s.errors.moduleId:null})]}),e.jsxs("div",{className:"form-group mb-1 md:mb-2 col-span-4 md:col-span-3 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1  text-sm font-semibold",children:["Payment Mode",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...s.getFieldProps("paymentMode"),className:"form-control block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"})]})]}),e.jsxs("div",{className:"form-group mb-1 md:mb-2 col-span-4 md:col-span-3 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1  text-sm font-semibold",children:"Verfication Type"}),e.jsxs("select",{...s.getFieldProps("verificationType"),className:"form-control block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{children:"All"}),e.jsx("option",{value:"clear",children:"Clear"}),e.jsx("option",{value:"bounce",children:"Bounce"}),e.jsx("option",{value:"pending",children:"Pending"})]})]}),e.jsxs("div",{className:"form-group mb-1 md:mb-2 col-span-4 md:col-span-3 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1  text-sm font-semibold",children:"Cheque/DD no."}),e.jsx("input",{...s.getFieldProps("cheque_dd_no"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.cheque_dd_no&&s.errors.cheque_dd_no?s.errors.cheque_dd_no:null})]}),e.jsx("div",{className:"form-group mb-1 md:mb-2 col-span-4 md:col-span-3 md:px-4",children:e.jsx("button",{type:"submit",className:"px-10 text-base py-1.5 mt-7 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 rounded-md hover:shadow-lg",children:"Search"})})]})}),e.jsx("div",{className:"border-b mx-10 my-5"}),e.jsx("div",{className:"p-5",children:(x==null?void 0:x.length)>0?e.jsx("div",{className:"bg-white p-4",children:e.jsx(oe,{columns:G,dataList:x})}):e.jsx("p",{className:"text-center font-semibold",children:" No Filter data Found!"})}),e.jsx(_,{isOpen:q,onRequestClose:f,style:te,contentLabel:"Example Modal",children:e.jsxs("div",{className:"bg-sky-200 rounded-lg shadow-xl border-2 border-gray-50 sm:w-[50vw] w-[100vw] p-4 text-sm",children:[e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center mb-1",children:[e.jsx("div",{className:"col-span-6",children:"Cheque No."}),e.jsx("div",{className:"col-span-6 font-semibold",children:n(t==null?void 0:t.cheque_no)})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center mb-1",children:[e.jsx("div",{className:"col-span-6",children:"Cheque Date"}),e.jsx("div",{className:"col-span-6 font-semibold",children:n(t==null?void 0:t.cheque_date)})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center mb-1",children:[e.jsx("div",{className:"col-span-6",children:"Bank Name"}),e.jsx("div",{className:"col-span-6 font-semibold",children:n(t==null?void 0:t.bank_name)})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center mb-1",children:[e.jsx("div",{className:"col-span-6",children:"Branch Name"}),e.jsx("div",{className:"col-span-6 font-semibold",children:n(t==null?void 0:t.branch_name)})]})]}),e.jsxs("form",{onSubmit:o.handleSubmit,onChange:o.handleChange,className:"grid-cols-12 grid gap-y-2 sm:gap-x-10 mt-4",children:[e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center",children:[e.jsx("label",{className:"col-span-6 inline-block mb-1  text-sm font-semibold",children:"Status"}),e.jsxs("span",{className:"col-span-6",children:[e.jsxs("select",{name:"clearStatus",onChange:o.handleChange,value:o.values.clearStatus,className:"form-control block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{value:"",children:"--select--"}),e.jsx("option",{value:"bounce",children:"Bounce"}),e.jsx("option",{value:"clear",children:"Clear"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.clearStatus&&o.errors.clearStatus?o.errors.clearStatus:null})]})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center",children:[e.jsx("label",{className:"col-span-6 inline-block mb-1  text-sm font-semibold",children:"Clearance Date"}),e.jsxs("span",{className:"col-span-6",children:[e.jsx("input",{onChange:o.handleChange,value:o.values.clearanceDate,name:"clearanceDate",type:"date",className:"w-full form-control block w-fullpx-1 py-1.5 px-2 text-sm md:text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.clearanceDate&&o.errors.clearanceDate?o.errors.clearanceDate:null})]})]}),o.values.clearStatus=="bounce"&&e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center",children:[e.jsx("label",{className:"col-span-6 inline-block mb-1  text-sm font-semibold",children:"Reason"}),e.jsxs("span",{className:"col-span-6",children:[e.jsxs("select",{onChange:o.handleChange,value:o.values.reason,name:"reason",className:"form-control block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{value:"",children:"--select--"}),e.jsx("option",{value:"Insufficient funds",children:"Insufficient funds"}),e.jsx("option",{value:"Irregular signature",children:"Irregular signature"}),e.jsx("option",{value:"Stale and post dated cheque",children:"Stale and post dated cheque"}),e.jsx("option",{value:"Alterations",children:"Alterations"}),e.jsx("option",{value:"Frozen account",children:"Frozen account"}),e.jsx("option",{value:"other",children:"Other"})]}),e.jsx("span",{className:"text-red-600  text-xs",children:o.touched.reason&&o.errors.reason?o.errors.reason:null})]})]}),o.values.clearStatus=="bounce"&&e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center",children:[e.jsx("label",{className:"col-span-6 inline-block mb-1  text-sm font-semibold",children:"Cancelation Charge"}),e.jsxs("span",{className:"col-span-6",children:[e.jsx("input",{onChange:o.handleChange,value:o.values.charge,name:"charge",type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),e.jsx("span",{className:"text-red-600  text-xs",children:o.touched.charge&&o.errors.charge?o.errors.charge:null})]})]}),e.jsxs("div",{className:"col-span-12 w-full flex justify-between mt-4",children:[e.jsx("div",{onClick:f,className:"w-max cursor-pointer text-center bg-red-500 text-white px-4 py-1 rounded-md shadow-lg transition ease-in-out hover:bg-red-700",children:"Close"}),e.jsx("button",{type:"submit",className:"text-center bg-blue-500 text-white px-4 py-1 rounded-md shadow-lg transition ease-in-out hover:bg-blue-700",children:"Submit"})]})]})]})}),e.jsx("div",{className:"h-[20vh]"})]})}export{ue as default};
