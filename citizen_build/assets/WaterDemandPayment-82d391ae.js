import{j as e}from"./mui-8e804a04.js";import{a as $,u as P,r as d,f as H}from"./router-87042356.js";import{f as M}from"./index.esm-df462c79.js";import{h as x}from"./moment-fbc5633a.js";import{m as J,A as u,c as K,d as k,u as Q}from"./index-19682a6e.js";import{W as X}from"./WaterApiList-e42e9d41.js";import{R as Z}from"./RazorpayPaymentScreen-7e667066.js";import{B as ee}from"./BarLoader-0ac4cd94.js";import{M as se}from"./index-4e794517.js";import{a as te}from"./index.esm-2e3a7c1f.js";import{i as oe}from"./success-39308b33.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./axios-97164839.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./CitizenApplyApiList-70acccc5.js";const re={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none"}};function ae(t){const[f,b]=$.useState(!1),o=t==null?void 0:t.transData,l=P(),y=t.paymentData;console.log("paymentData======",y),d.useEffect(()=>{b(!0)},[]);function r(){}function m(){b(!1),l("/water-dashboard")}return e.jsx("div",{className:"",children:e.jsx(se,{isOpen:f,onAfterOpen:r,onRequestClose:m,style:re,contentLabel:"Example Modal",children:e.jsx("div",{children:e.jsxs("div",{className:"bg-green-200 shadow-2xl border border-sky-200 p-5 m-5 rounded-md",children:[e.jsxs("div",{onClick:m,className:"absolute cursor-pointer bg-green-100 hover:bg-gray-300 p-1 rounded-md",children:[e.jsx(te,{})," "]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:oe,className:"h-20",alt:"",srcset:""})}),e.jsx("div",{className:"py-1 pl-3 font-semibold text-center text-2xl text-gray-800",children:" Payment Completed Successfully "}),e.jsxs("p",{className:"text-center",children:[e.jsx("span",{className:"text-base",children:" Payment Transaction No"})," ",e.jsx("span",{className:"font-bold text-blue-700 text-xl",children:o==null?void 0:o.transectionNo})]}),e.jsx("p",{className:"border-b border-gray-300 mx-10 py-1"}),e.jsxs("div",{className:"grid grid-cols-12 px-8 py-3 leading-8 space-x-8 text-sm",children:[e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[e.jsx("p",{children:"Application No"}),e.jsx("p",{children:"Transaction Type"})]}),e.jsxs("div",{className:"col-span-6 ml-3",children:[e.jsx("p",{children:(o==null?void 0:o.applicationNo)||"NA"}),e.jsx("p",{children:(o==null?void 0:o.tranType)||"NA"})]})]})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[e.jsx("p",{children:"Amount"}),e.jsx("p",{children:"Payment Date"})]}),e.jsxs("div",{className:"col-span-6",children:[e.jsx("p",{children:o==null?void 0:o.amount}),e.jsx("p",{children:o==null?void 0:o.transectionDate})]})]})}),e.jsx("div",{className:"col-span-12 md:mt-4 mt-10",children:e.jsxs("div",{className:"flex justify-center",children:[e.jsx("button",{onClick:m,className:"mx-2 bg-sky-600 hover:bg-sky-700 transition duration-200 hover:scale-105 font-normal text-white px-6 py-1 text-sm rounded-sm shadow-xl",children:"Close"}),o&&e.jsx("button",{onClick:()=>l(`/waterUserReceipt/${o==null?void 0:o.transectionNo}`),className:"mx-2 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-4 py-2 text-sm  rounded-sm shadow-xl",children:"View Receipt"})]})})]})]})})})})}const we=()=>{var w,A,_;const[t,f]=d.useState(),[b,o]=d.useState(!1),[l,y]=d.useState(),[r,m]=d.useState(),[i,S]=d.useState(),[g,Y]=d.useState(),[I,R]=d.useState(!1),[U,E]=d.useState(),{id:p}=H(),T=P(),{notify:j}=d.useContext(J),{api_getTranNo:O,api_waterApprovedApplicationDetails:L,api_waterListDemand:W,api_waterDemandCalculation:q,api_waterDemandPayment:z,header:h}=X();d.useEffect(()=>{C(),v()},[p]),d.useEffect(()=>{B()},[g,i]);const B=()=>{if(g==""||i=="")return m();o(!0);const s={consumerId:p,demandFrom:i,demandUpto:g};u.post(q,s,h).then(function(n){console.log("water demand calculation Details",n.data.data),m(n.data.data),o(!1)}).catch(function(n){console.log("Error : water calculating demand",n),o(!1)})},C=()=>{o(!0),u.post(L,{id:p},h).then(function(s){console.log("water Approved Application Details",s.data.data),f(s.data.data),o(!1)}).catch(function(s){console.log("Error : water Approved Application Details",s),o(!1)})},v=()=>{u.post(W,{ConsumerId:p},h).then(s=>{console.log("Fetched Water Demand List",s.data.data),y(s.data.data)}).catch(s=>{console.log("Exception while fetching Water Demand",s)})},D=s=>{if(console.log("Payment Status =>",s),s.status==!0){j("Payment Done successfully","success"),R(!0);const n={orderId:s.data.razorpay_order_id,paymentId:s.data.razorpay_payment_id};u.post(O,n,h).then(c=>{console.log("Data after payment success by OrderId and PaymentID",c),c.data.status==!0&&E(c.data.data)}).catch(c=>console.log("Exception/Error while fetching by OrderID and Payment ID",c))}v()},G=()=>{o(!0);const s={consumerId:p,demandFrom:i,demandUpto:g,amount:r==null?void 0:r.totalPayAmount,paymentMode:"online",remarks:"citizen payment"};console.log("final submit",s),u.post(z,s,h).then(n=>{n.data.status?(o(!1),console.log("Order Id Generated Successfully",n),n.data.status==!0?Z(n.data.data,D):j(n.data.message,"error")):(console.log("Failed Generate Order ID.",n),o(!1))}).catch(n=>{console.log("Exception while generating order id",n),o(!1)})},V=K({monthFrom:k().required("Require Field"),monthUpto:k().required("Require Field")}),a=Q({enableReinitialize:!0,initialValues:{monthFrom:"",monthUpto:"",penalty:"",rebate:"",advanced:""},onSubmit:(s,n)=>{G()},validationSchema:V}),F=s=>{let n=s.target.name,c=s.target.value;n=="monthFrom"&&S(c),n=="monthUpto"&&Y(c)},N=(w=l==null?void 0:l.consumerDemands)==null?void 0:w.filter(s=>x(s.demand_upto,"YYYY-MM-DD").format("yy-MM").toString()>=x(i,"YYYY-MM-DD").format("yy-MM"));return e.jsxs(e.Fragment,{children:[b&&e.jsx(ee,{}),I&&e.jsx(ae,{transData:U}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:e.jsxs("div",{className:"col-span-12 rounded-lg p-4 max-sm:p-0",children:[e.jsx("div",{className:"p-4 max-sm:p-2",children:e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e.jsx(M,{className:"inline"})," Basic Details"]}),e.jsx("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:e.jsxs("div",{className:"flex space-x-5 pl-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:t!=null&&t.ulb_name?t==null?void 0:t.ulb_name:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"ULB Name"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:t!=null&&t.ward_name?t==null?void 0:t.ward_name:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:t!=null&&t.consumer_no?t==null?void 0:t.consumer_no:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Consumer No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:t!=null&&t.connection_through?t==null?void 0:t.connection_through:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Connection Through"})]}),(t==null?void 0:t.connection_through)=="SAF"?e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:t!=null&&t.saf_no?t==null?void 0:t.saf_no:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"SAF No"})]}):e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:t!=null&&t.holding_no?t==null?void 0:t.holding_no:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:t!=null&&t.owner_char_type?t==null?void 0:t.owner_char_type:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]})]})})]})}),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-5 p-4",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e.jsx(M,{className:"inline"}),"Due Demand Details"]}),e.jsx("div",{className:"overflow-auto",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand From"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Upto"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Penalty"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Connection Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payable Amount "})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(A=l==null?void 0:l.consumerDemands)==null?void 0:A.map((s,n)=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:n+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:s!=null&&s.demand_from?x(s==null?void 0:s.demand_from,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:s!=null&&s.demand_upto?x(s==null?void 0:s.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:s!=null&&s.balance_amount?s==null?void 0:s.balance_amount:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:s!=null&&s.penalty?s==null?void 0:s.penalty:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:s!=null&&s.connection_type?s==null?void 0:s.connection_type:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:s!=null&&s.amount?"₹ "+(s==null?void 0:s.amount):"N/A"})]}))})})]})})]})}),e.jsx("div",{className:"col-span-12 rounded-lg p-4",children:e.jsx("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl border border-y-gray-200 p-4",children:e.jsx("form",{onSubmit:a.handleSubmit,onChange:F,className:"p-4 relative",children:e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Select Month From"]}),e.jsxs("select",{...a.getFieldProps("monthFrom"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"",children:"Select"}),(_=l==null?void 0:l.consumerDemands)==null?void 0:_.map((s,n)=>e.jsx("option",{value:s.demand_from,children:x(s.demand_from,"YYYY-MM-DD").format("MMM-yy")},n))]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.monthFrom&&a.errors.monthFrom?a.errors.monthFrom:null})]}),e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Select Month Upto"]}),e.jsxs("select",{...a.getFieldProps("monthUpto"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"",children:"Select"}),N==null?void 0:N.map((s,n)=>e.jsx("option",{value:s.demand_upto,children:x(s.demand_upto,"YYYY-MM-DD").format("MMM-yy")},n))]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.monthUpto&&a.errors.monthUpto?a.errors.monthUpto:null})]}),e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:"Total Demand"}),e.jsx("input",{...a.getFieldProps("amount"),value:(r==null?void 0:r.totalDemand)||0,disabled:!0,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md bg-slate-200"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.amount&&a.errors.amount?a.errors.amount:null})]}),e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:"Penalty"}),e.jsx("input",{...a.getFieldProps("penalty"),value:(r==null?void 0:r.totalPenalty)||0,disabled:!0,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md bg-slate-200"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.penalty&&a.errors.penalty?a.errors.penalty:null})]}),e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:"Rebate"}),e.jsx("input",{...a.getFieldProps("rebate"),value:(r==null?void 0:r.totalRebate)||0,disabled:!0,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md bg-slate-200"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.rebate&&a.errors.rebate?a.errors.rebate:null})]}),e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:"Advanced"}),e.jsx("input",{...a.getFieldProps("advanced"),value:(r==null?void 0:r.totalAdvance)||0,disabled:!0,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md bg-slate-200"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.advanced&&a.errors.advanced?a.errors.advanced:null})]}),e.jsx("div",{className:"form-group mb-4 col-span-12 md:col-span-6 md:px-4",children:e.jsxs("p",{children:["Remain Advance : ",e.jsx("span",{className:"text-orange-700 font-semibold",children:(r==null?void 0:r.remaningAdvanceAmount)||0})]})}),e.jsx("div",{className:"form-group mb-4 col-span-12 md:col-span-6 md:px-4",children:e.jsxs("p",{children:[" Payable Amount : ",e.jsx("span",{className:"text-green-700 font-semibold",children:r!=null&&r.totalPayAmount?"₹"+(r==null?void 0:r.totalPayAmount):0})]})}),e.jsxs("div",{className:"col-span-12 grid grid-cols-2 mt-10",children:[e.jsx("div",{className:""}),e.jsxs("div",{className:"md:pl-10 text-right space-x-5 max-sm:space-x-0 max-sm:pl-0 max-sm:space-y-2",children:[e.jsx("button",{type:"button",onClick:()=>T(-1),className:" px-6 py-2.5 max-sm:px-8 bg-sky-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"Back"}),e.jsx("button",{type:"submit",className:" px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-indigo-600 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"Pay Now"})]})]})]})})})})]})})]})};export{we as default};
