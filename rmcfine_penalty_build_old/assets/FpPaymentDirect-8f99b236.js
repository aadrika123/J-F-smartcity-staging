import{u as L,a as B,r,j as e}from"./index-faef4408.js";import{P as O}from"./ProjectApiList-919c817c.js";import{A as R}from"./ApiHeader-6d683756.js";import{B as z}from"./BarLoader-56cc2b49.js";import{B as T}from"./BottomErrorCard-6b93cab8.js";import{d as F,n as N,i as Q}from"./PowerupFunctions-1c006beb.js";import{A as M}from"./AxiosInterceptors-06ddb7df.js";import{M as W}from"./index-cc999471.js";import{c as G,a as f,u as J}from"./formik.esm-f68c633c.js";import"./index-d3bfc818.js";import{u as K}from"./useSetTitle-78d55b86.js";import{F as X}from"./index.esm-13201a46.js";import"./index-eab1d8e2.js";import"./iconBase-74df04d3.js";const ee="/logo1.png";async function te(a,i){var m={description:"Test payment updated",image:ee,currency:"INR",key_id:"rzp_live_WkeN2d0mSH4ztR",key_secret:"0A55ZisFpioDw3so0Cox1dSj",amount:2e3,name:"Fines",order_id:a,prefill:{email:"",contact:"",name:""},theme:{color:"#3399cc"},handler:async u=>{await i(u)}};const o=new Razorpay(m);o.on("payment.failed",function(u){}),o.open()}const ae={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};function ne(a){var E,D;const{id:i}=L(),{api_challanOfflinePayment:m,api_generateOrderId:o,api_getTransactionNo:u,api_sendOnlineResponse:t}=O(),_=B(),[C,g]=r.useState(!1),[P,x]=r.useState(!1),[b,A]=r.useState(!1),[s,d]=r.useState(!1),[S,k]=r.useState(null),[V,$]=r.useState(null);r.useState(!1),r.useState();let H=G({paymentMode:f().required("select payment mode"),remarks:f(),bankName:f(),branchName:f(),cheque_dd_no:f(),cheque_dd_date:f()});J({initialValues:{paymentMode:"CASH",remarks:"",bankName:"",branchName:"",cheque_dd_no:"",cheque_dd_date:"",payAdvance:"",advanceAmount:""},validationSchema:H,onSubmit:n=>{U(n)&&I()}});const c=(n,h)=>{$(h),A(n)},q=()=>d(!1),U=n=>{if(n.paymentMode=="CHEQUE"||n.paymentMode=="DD"){if(n.bankName==""||n.bankName==null)return c(!0,"Please enter bank name"),!1;if(n.branchName==""||n.branchName==null)return c(!0,"Please enter branch name"),!1;if(n.cheque_dd_no==""||n.cheque_dd_no==null)return c(!0,"Please enter cheque/dd no."),!1;if(n.cheque_dd_date==""||n.cheque_dd_date==null)return c(!0,"Please enter cheque/dd date"),!1}return!0},I=async n=>{var p,j;x(!0);let h={amount:(p=a==null?void 0:a.demand)==null?void 0:p.amount,challanId:i,applicationId:(j=a==null?void 0:a.demand)==null?void 0:j.application_id};M.post(o,h,R()).then(l=>{var y,w,v;((y=l==null?void 0:l.data)==null?void 0:y.status)===!0?te((v=(w=l==null?void 0:l.data)==null?void 0:w.data)==null?void 0:v.order_id,Y):c(!0,"Error occured. Please try again later.")}).catch(l=>{c(!0,"Error occured. Please try again later.")}).finally(()=>{x(!1)})},Y=async n=>{var p,j;x(!0);let h={applicationId:(p=a==null?void 0:a.demand)==null?void 0:p.application_id,challanId:i,amount:(j=a==null?void 0:a.demand)==null?void 0:j.amount,date:new Date,transactionId:"",status:"",cardNo:"",authCode:"",tid:"",mid:"gghg",status:"AUTHORIZED",rrNo:"",batchNo:"",orderId:n==null?void 0:n.razorpay_order_id};M.post(t,h,R()).then(l=>{var y,w,v;((y=l==null?void 0:l.data)==null?void 0:y.status)===!0?(g(!0),k((v=(w=l==null?void 0:l.data)==null?void 0:w.data)==null?void 0:v.tran_no)):g()}).catch(l=>{g()}).finally(()=>{x(!1)})},Z=()=>{d(!1),I()};return P?e.jsx(e.Fragment,{children:e.jsx(z,{})}):C==!0?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full h-full bg-white sm:p-20 p-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"Your payment has been successfully done !"}),e.jsxs("div",{className:"text-center mt-6",children:[e.jsx("button",{className:"mr-4 bg-indigo-500  text-white px-6 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>_(`/fp-receipt/${encodeURIComponent(S)}/direct`),children:"View Receipt"}),e.jsx("button",{className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>_(`/challan/${i}/direct`),children:"View Challan"})]})]}),void 0]})}):e.jsxs(e.Fragment,{children:[b&&e.jsx(T,{activateBottomErrorCard:c,errorTitle:V}),e.jsx("div",{className:" block sm:p-4 mt-4 w-full md:py-4 md:px-40 md:pb-0 md:pt-0 rounded-lg  bg-white md:w-full mx-auto  overflow-x-auto mb-20 ",children:e.jsxs("div",{className:"p-4 w-full md:py-6 rounded-lg bg-white mx-auto flex justify-center items-center flex-col",children:[e.jsxs("div",{className:"md:px-4",children:[e.jsx("span",{children:"Total Payable Amount :"})," ",e.jsx("span",{className:"font-mono font-bold text-xl",children:F((E=a==null?void 0:a.demand)==null?void 0:E.amount)})]}),e.jsx("div",{className:"mt-4",children:e.jsxs("button",{onClick:I,type:"button",className:"sm:ml-4 font-bold px-6 py-3 md:py-2 bg-indigo-500 text-white text-xs sm:text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out shadow-xl border border-white",children:[e.jsx("span",{className:"sm:mr-2 mr-1",children:"Pay "}),F((D=a==null?void 0:a.demand)==null?void 0:D.amount)]})})]})}),e.jsx(W,{isOpen:s,onRequestClose:q,style:ae,contentLabel:"Example Modal",children:e.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50",children:[e.jsx("button",{onClick:q,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center",children:[e.jsxs("div",{className:"w-full flex h-10",children:[" ",e.jsx("span",{className:"mx-auto",children:e.jsx(X,{size:30})})]}),e.jsx("h3",{class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",children:"Confirm Payment"}),e.jsx("button",{type:"button",class:"text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:Z,children:"Yes, I'm sure"})]})]})})]})}const pe=()=>{K("Fines & Penalties Payment");const{api_getChallanById:a}=O(),{id:i}=L(),m=B(),[o,u]=r.useState(!1),[t,_]=r.useState(null),[C,g]=r.useState(!1),[P,x]=r.useState(""),b=(s,d)=>{x(d),g(s),s||window.history.back()},A=()=>{u(!0),M.post(a,{challanId:i},R()).then(s=>{var d,S,k;(d=s==null?void 0:s.data)!=null&&d.status?_((S=s==null?void 0:s.data)==null?void 0:S.data):b(!0,(k=s==null?void 0:s.data)==null?void 0:k.message)}).catch(s=>{b(!0,"Error getting user details, please try again later !")}).finally(()=>{u(!1)})};return r.useEffect(()=>{A()},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-screen md:pt-10",children:e.jsxs("div",{className:"md:w-4/5 mx-auto shadow-xl bg-gray-50 md:py-10",children:[o&&e.jsx(z,{}),C&&e.jsx(T,{activateBottomErrorCard:b,errorTitle:P}),!o&&e.jsxs("div",{className:"animate__animated animate__fadeIn animate__faster overflow-x-hidden overflow-y-scroll w-[99%] mx-auto rounded-md gap-6 h-full p-[1vw]",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("h1",{className:"bg-white shadow-lg shadow-indigo-300 text-indigo-400 w-max font-semibold text-2xl px-6 py-2 border border-indigo-400",children:"Fines & Penalties Payment"})}),e.jsxs("div",{className:"flex items-center flex-wrap w-full text-sm bg-white p-4  gap-2 mt-4",children:[e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[27%]",children:[e.jsx("div",{children:"Name"}),e.jsx("div",{className:"font-semibold text-base",children:N(t==null?void 0:t.full_name)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Mobile No."}),e.jsx("div",{className:"font-semibold text-base",children:N(t==null?void 0:t.mobile)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Challan No. "}),e.jsx("div",{className:"font-semibold text-base",children:N(t==null?void 0:t.challan_no)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Challan Date "}),e.jsx("div",{className:"font-semibold text-base",children:Q(t==null?void 0:t.challan_date)})]}),e.jsxs("div",{className:"hidden md:flex flex-col flex-wrap justify-center w-full",children:[e.jsx("div",{children:"Violation Made "}),e.jsx("div",{className:"font-semibold text-base",children:N(t==null?void 0:t.violation_name)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Violation Section "}),e.jsx("div",{className:"font-semibold text-base",children:N(t==null?void 0:t.violation_section)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Penalty Amount "}),e.jsx("div",{className:"font-bold text-base",children:F(t==null?void 0:t.amount)})]})]}),e.jsx("div",{children:t!=null&&t.is_bpl?e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-full bg-white sm:p-20 p-2",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"As you belongs to BPL category, so you don't need to pay. And your application is sent for verification."}),e.jsx("div",{className:"text-center mt-6",children:e.jsx("button",{className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>m(`/fp-details/${i}`),children:"View Application"})})]})})}):e.jsx(e.Fragment,{children:t!=null&&t.payment_status?e.jsx("div",{className:"w-full h-full bg-white sm:p-20 p-2",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"Payment Already Done. You can view your receipt or challan."}),e.jsxs("div",{className:"text-center mt-6",children:[e.jsx("button",{className:"mr-4 bg-indigo-500  text-white px-6 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>m(`/fp-receipt/${encodeURIComponent(t==null?void 0:t.tran_no)}/direct`),children:"View Receipt"}),e.jsx("button",{className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>m(`/challan/${i}/direct`),children:"View Challan"})]})]})}):e.jsx(ne,{demand:t})})})]})]})})})};export{pe as default};
