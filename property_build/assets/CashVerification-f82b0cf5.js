import{k as z,a as q,H as W,r as t,A as T,aI as _,j as e,aJ as F,p as Y,aZ as Z,f as J,cB as Q,n as l,e as c,b2 as X,bC as $,aX as G,b0 as U,l as K,m as ee,o as se,bd as re}from"./index-a8a14e0c.js";import{P as ae}from"./reactjs-popup.esm-96096cb7.js";const de={overlay:{background:"rgba(0, 0, 0, 0.5)",overflowY:"scroll"},content:{top:"60%",left:"55%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"transparent",border:"none",height:"maxHeight"}};function le(d){var f,v,w,C,S,n,j,y;z("Cash Verification");const k=q(),{api_verifiedTcCollection:P,api_notVerifiedTcCollection:p,api_verifyTcCollection:V}=$(),[h,N]=W.useState(!1),[r,A]=t.useState();t.useState(!1);const[M,g]=t.useState(!1),[E,u]=t.useState(!1),[D,H]=t.useState(null),[L,I]=t.useState([]);(f=d==null?void 0:d.data)==null||f.id,(v=d==null?void 0:d.data)==null||v.date,t.useEffect(()=>{var o,i;if(!d||!d.data)return;g(!0);const s={date:(o=d==null?void 0:d.data)==null?void 0:o.date,userId:(i=d==null?void 0:d.data)==null?void 0:i.id};let a;(d==null?void 0:d.reportType)=="1"&&(a=p),(d==null?void 0:d.reportType)=="2"&&(a=P),T.post(a,s,_()).then(x=>{var O;A((O=x==null?void 0:x.data)==null?void 0:O.data)}).catch(x=>{b(!0,"Some error occured. Please try again later.")}).finally(()=>g(!1))},[d==null?void 0:d.data]),t.useEffect(()=>{d.openAddPopUP>0&&N(!0)},[d==null?void 0:d.openAddPopUP]);function R(){}function m(){N(!1),I([])}const B=()=>{const s={property:r.property,water:r.water,trade:r.trade};T.post(V,s,_()).then(a=>{G.success("Verified Successfully !!!"),m()}).catch(a=>{b(!0,"Some error occured. Please try again later.")})},b=(s,a)=>{H(a),u(s)};return e.jsxs(e.Fragment,{children:[M&&e.jsx(F,{}),E&&e.jsx(Y,{activateBottomErrorCard:b,errorTitle:D}),e.jsx(Z,{autoClose:2e3}),e.jsx(J,{isOpen:h,onAfterOpen:R,onRequestClose:m,style:de,contentLabel:"Example Modal",children:e.jsx("div",{className:"overflow-auto",children:e.jsxs("div",{className:" bg-white rounded-lg shadow-xl border-2 border-gray-50 p-2",children:[e.jsxs("div",{className:"",children:[e.jsx("div",{className:"float-right",children:e.jsxs("div",{onClick:m,className:"hover:bg-gray-100 rounded-full w-5 cursor-pointer mr-3",children:["  ",e.jsx(Q,{size:20})]})}),e.jsx("div",{className:"float-left",children:e.jsx("h1",{className:"mb-3 text-2xl ml-5 font-semibold",children:"TC Collection Details"})})]}),e.jsx("p",{className:"border-b mt-10 mb-6 mx-5 border-gray-100"}),e.jsxs("div",{className:"grid grid-cols-12 gap-2",children:[e.jsx("div",{className:"col-span-4",children:e.jsxs("div",{className:"grid grid-cols-2 bg-gray-50 shadow-md rounded  p-4",children:[e.jsxs("div",{className:"col-span-1",children:[e.jsx("p",{children:" Collector Name"}),e.jsx("p",{children:" Transaction Date"}),e.jsx("p",{children:" Total Amount"}),e.jsx("p",{children:" Number of Transaction"})]}),e.jsxs("div",{className:"col-span-1 font-semibold",children:[e.jsxs("p",{className:"uppercase",children:[": ",l(r==null?void 0:r.collectorName)]}),e.jsxs("p",{children:[": ",l(r==null?void 0:r.date)]}),e.jsxs("p",{children:[": ",c(r==null?void 0:r.totalAmount)]}),e.jsxs("p",{children:[": ",X(r==null?void 0:r.numberOfTransaction)]})]})]})}),e.jsx("div",{className:"col-span-8",children:e.jsxs("div",{className:"flex flex-wrap-reverse m-0 gap-2",children:[e.jsxs("div",{className:"bg-gray-50 shadow-md  p-6 m-2 rounded",children:[e.jsx("p",{className:"font-semibold text-3xl",children:c(r==null?void 0:r.Cash)}),e.jsx("p",{className:"text-lg font-semibold",children:"Cash"})]}),e.jsxs("div",{className:"bg-gray-50 shadow-md  p-6 m-2 rounded",children:[e.jsx("p",{className:"font-semibold text-3xl",children:c(r==null?void 0:r.Cheque)}),e.jsx("p",{className:"text-lg font-semibold",children:"Cheque"})]}),e.jsxs("div",{className:"bg-gray-50 shadow-md  p-6 m-2 rounded",children:[e.jsx("p",{className:"font-semibold text-3xl",children:c(r==null?void 0:r.DD)}),e.jsx("p",{className:"text-lg font-semibold",children:"DD"})]})]})})]}),e.jsx("p",{className:"border-b mt-5 mb-6 mx-5 border-gray-100"}),((w=r==null?void 0:r.property)==null?void 0:w.length)>0&&e.jsxs("div",{children:[e.jsx("p",{className:"uppercase font-bold",children:"Property Payment"}),e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{className:"bg-gray-100 border-t border-l border-r text-left",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-2 border-r",children:"#"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Transaction No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Application No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Check/DD No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Bank Name"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Paid Amount"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Date"})]})}),e.jsx("tbody",{children:(C=r==null?void 0:r.property)==null?void 0:C.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:a+1}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.tran_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.payment_mode)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.application_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.cheque_dd_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.bank_name)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:c(s==null?void 0:s.amount)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.tran_date)})]},a))})]})]}),e.jsx("p",{className:"py-2"}),((S=r==null?void 0:r.water)==null?void 0:S.length)>0&&e.jsxs("div",{children:[e.jsx("p",{className:"uppercase font-bold",children:"Water Payment"}),e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{className:"bg-gray-100 border-t border-l border-r text-left",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-2 border-r",children:"#"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Transaction No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Application No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Check/DD No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Bank Name"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Paid Amount"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Date"})]})}),e.jsx("tbody",{children:(n=r==null?void 0:r.water)==null?void 0:n.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:a+1}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.tran_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.payment_mode)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.application_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.cheque_dd_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.bank_name)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:c(s==null?void 0:s.amount)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.tran_date)})]},a))})]})]}),e.jsx("p",{className:"py-2"}),((j=r==null?void 0:r.trade)==null?void 0:j.length)>0&&e.jsxs("div",{children:[e.jsx("p",{className:"uppercase font-bold",children:"Trade Payment"}),e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{className:"bg-gray-100 border-t border-l border-r text-left",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-2 border-r",children:"#"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Transaction No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Application No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Check/DD No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Bank Name"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Paid Amount"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Date"})]})}),e.jsx("tbody",{children:(y=r==null?void 0:r.trade)==null?void 0:y.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:a+1}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.tran_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.payment_mode)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.application_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.cheque_dd_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.bank_name)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:c(s==null?void 0:s.amount)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l(s==null?void 0:s.tran_date)})]},a))})]})]}),e.jsx("div",{className:"my-5",children:e.jsxs("div",{className:"flex justify-center pt-3 space-x-3",children:[(d==null?void 0:d.reportType)=="1"&&e.jsx(ae,{trigger:e.jsx("button",{className:"w-full px-10 rounded bg-indigo-600 py-2 text-white sm:w-auto",children:" Verify "}),modal:!0,nested:!0,children:s=>e.jsx("div",{className:"h-screen w-screen flex-row justify-center items-center backdrop-blur-sm",children:e.jsxs("div",{className:"flex flex-col justify-center h-max w-max absolute top-[40%] right-[40%] bg-indigo-50 px-4 py-2 rounde-md shadow-lg animate__animated animate__fadeInDown animate__faster",children:[e.jsx("button",{className:"close text-end text-lg",onClick:s,children:"×"}),e.jsx("div",{className:"text-md",children:"Are you sure ?"}),e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx("button",{className:"bg-green-500 hover:bg-green-600 text-white shadow-md text-xs px-4 py-1 m-4 rounded-md",onClick:()=>{s(),B()},children:"Yes"}),e.jsx("button",{className:"bg-red-500 hover:bg-red-600 text-white px-4 shadow-md text-xs py-1 m-4 rounded-md",onClick:s,children:"No"})]})]})})}),e.jsx("button",{onClick:m,className:"w-full px-10 rounded bg-red-600 py-2 text-white sm:w-auto",children:" Close "}),!M&&(r==null?void 0:r.verifyStatus)==!0&&e.jsx("button",{onClick:()=>k(`/cashVerificationReceipt/${encodeURIComponent(r==null?void 0:r.tranNo)}`),className:"w-full px-10 rounded bg-sky-600 py-2 text-white sm:w-auto",children:" Print "})]})})]})})})]})}const oe=d=>{const[k,P]=t.useState(0),[p,V]=t.useState(),[h,N]=t.useState(),[r,A]=t.useState(),[M,g]=t.useState(1),[E,u]=t.useState(!1),[D,H]=t.useState(!1),[L,I]=t.useState(null),R=q();let m=new Date().toLocaleDateString("in-IN"),B=U(m).format("YYYY-DD-MM");const{api_listofEmployees:b,api_listUnverifiedCashVerification:f,api_listVerifiedCashVerification:v}=$();t.useEffect(()=>{j()},[]);const w=(s,a,o)=>{A({id:s,date:a}),P(i=>i+1)};t.useEffect(()=>{T.post(b,{},_()).then(s=>{V(s.data.data)}).catch(s=>{})},[]);const C=[{Header:"Sl.",Cell:({row:s})=>e.jsxs("div",{className:"px-2 font-semibold",children:[s.index+1,"."]})},{Header:"EmployeeName",Cell:({cell:s})=>{var a;return e.jsxs("span",{children:["  ",l((a=s.row.original)==null?void 0:a.user_name)]})}},{Header:"Property",Cell:({cell:s})=>{var a;return e.jsxs("span",{children:[" ",c((a=s.row.original)==null?void 0:a.property)]})}},{Header:"Water",Cell:({cell:s})=>{var a;return e.jsxs("span",{children:[" ",c((a=s.row.original)==null?void 0:a.water)]})}},{Header:"Trade",Cell:({cell:s})=>{var a;return e.jsxs("span",{children:[" ",c((a=s.row.original)==null?void 0:a.trade)]})}},{Header:"Total Amount",Cell:({cell:s})=>{var a;return e.jsxs("span",{children:[" ",c((a=s.row.original)==null?void 0:a.total)]})}},{Header:"Paid Date",Cell:({cell:s})=>{var a;return e.jsxs("span",{children:["  ",l((a=s.row.original)==null?void 0:a.date)]})}},{Header:"Status",accessor:"verifyStatus",Cell:({cell:s})=>{var a,o,i,x;return e.jsxs("div",{children:[e.jsxs("div",{children:[" ",((o=(a=s==null?void 0:s.row)==null?void 0:a.values)==null?void 0:o.verifyStatus)==!0&&e.jsx("div",{className:"text-green-500 text-base font-semibold",children:"Verified"})," "]}),e.jsxs("div",{children:[" ",((x=(i=s==null?void 0:s.row)==null?void 0:i.values)==null?void 0:x.verifyStatus)==!1&&e.jsx("div",{className:"text-red-500 text-base font-semibold",children:"Not Verified"})," "]})]})},option:[{true:"Verified"},{false:"Not Verified"}]},{Header:"Action",Cell:({cell:s})=>{var a,o;return e.jsxs("div",{className:"flex gap-2 w-full flex-wrap",children:[e.jsx("button",{onClick:()=>w(s.row.original.id,s.row.original.date,s.row.original.user_name),className:"bg-blue-600 hover:bg-blue-400 py-1 px-3 text-white rounded-sm",children:"View"}),((o=(a=s==null?void 0:s.row)==null?void 0:a.original)==null?void 0:o.verifyStatus)==!0&&e.jsx("button",{onClick:()=>{var i,x;return R(`/cashVerificationReceipt/${encodeURIComponent((x=(i=s==null?void 0:s.row)==null?void 0:i.original)==null?void 0:x.tranNo)}`)},className:"bg-sky-600 hover:bg-sky-400 py-1 px-3 text-white rounded-sm",children:"Print"})]})}}],S=K({collectionDate:ee().required("Select Date")}),n=se({initialValues:{empName:"",collectionDate:U(new Date).format("yy-MM-DD"),reportType:"1"},enableReinitialize:!0,onSubmit:s=>{j()},validationSchema:S}),j=()=>{let s;n.values.reportType=="1"&&(s=f),n.values.reportType=="2"&&(s=v),u(!0);const a={date:n.values.collectionDate,id:n.values.empName};T.post(s,a,_()).then(o=>{u(!1),N(o.data.data)}).catch(o=>{u(!1),y(!0,"Error occured while fetching cash verification list. Please try again later.")})},y=(s,a)=>{I(a),H(s)};return e.jsxs(e.Fragment,{children:[E&&e.jsx(F,{}),D&&e.jsx(Y,{activateBottomErrorCard:y,errorTitle:L}),e.jsx(le,{openAddPopUP:k,data:r,reportType:n.values.reportType}),e.jsxs("div",{className:"m-2",children:[e.jsx("div",{className:"shadow-md  rounded bg-indigo-100 px-4",children:e.jsx("form",{onSubmit:n.handleSubmit,onChange:n.handleChange,children:e.jsxs("div",{className:"px-3 py-3",children:[e.jsx("div",{className:"text-left",children:e.jsx("h1",{className:"mb-3 text-2xl font-semibold",children:"Cash Verification"})}),e.jsxs("div",{className:"grid grid-cols-12 gap-4 items-end",children:[e.jsxs("div",{className:"col-span-10 md:col-span-2",children:[e.jsxs("p",{className:"py-1 text-base font-semibold",children:["Select Date ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsx("input",{onChange:n.handleChange,name:"collectionDate",className:"w-full rounded border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1",type:"date",defaultValue:B}),e.jsxs("p",{className:"text-red-500 text-xs font-semibold absolute",children:[" ",n.touched.collectionDate&&n.errors.collectionDate?n.errors.collectionDate:null]})]}),e.jsxs("div",{className:"col-span-10 md:col-span-2",children:[e.jsxs("p",{className:"py-1 text-base font-semibold",children:["Select Employee ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs("select",{onChange:n.handleChange,className:"w-full rounded border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1",placeholder:"Enter New Taluka",type:"text",name:"empName",children:[e.jsx("option",{value:"",children:"All"}),p==null?void 0:p.map((s,a)=>e.jsx("option",{value:s.id,children:s.user_name}))]}),e.jsxs("p",{className:"text-red-500 text-xs font-semibold absolute",children:[" ",n.touched.empName&&n.errors.empName?n.errors.empName:null]})]}),e.jsxs("div",{className:"col-span-10 md:col-span-2",children:[e.jsxs("p",{className:"py-1 text-base font-semibold",children:["Report Type ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs("select",{onChange:s=>g(s.target.value),value:n.values.reportType,className:"w-full rounded border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1",placeholder:"Enter New Taluka",type:"text",name:"reportType",children:[e.jsx("option",{value:"1",children:"Not Verified"}),e.jsx("option",{value:"2",children:"Verified"})]})]}),e.jsx("div",{className:"col-span-10 md:col-span-2 flex items-end justify-end md:mt-0 mt-6",children:e.jsx("button",{type:"submit",class:"w-full py-2 px-4 inline-block text-center rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:"Search"})})]})]})})}),e.jsx("p",{className:" mx-10 py-5"}),e.jsx("div",{className:"my-4",children:(h==null?void 0:h.length)==0?e.jsx("p",{className:"text-center font-semibold text-xl -mt-8 text-red-500",children:"No Data Found !"}):e.jsxs(e.Fragment,{children:[h?e.jsx("div",{className:"bg-white p-4",children:e.jsx(re,{columns:C,dataList:h})}):e.jsx("p",{className:"text-center font-semibold -mt-8",children:"Please Choose Date and User"})," "]})})]})]})};export{oe as default};
