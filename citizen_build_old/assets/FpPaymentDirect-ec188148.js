import{j as e}from"./mui-8e804a04.js";import{f as z,u as T,r as s}from"./router-87042356.js";import{a as U,B as $}from"./BottomErrorCard-e0c6421c.js";import{c as W,d as f,u as K,A as M,b as O,V as q,P as H,n as S,y as X}from"./index-2435513d.js";import{M as ee}from"./index-4e794517.js";import{a as te}from"./index.esm-f717eb21.js";import"./index-05fe6e4f.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";const ae="/assets/logo-3109eaef.png";async function ne(n,d){console.log("==2==the order id is....",n),console.log(d());var h={description:"Test payment updated",image:ae,currency:"INR",key_id:"rzp_live_WkeN2d0mSH4ztR",key_secret:"0A55ZisFpioDw3so0Cox1dSj",amount:2e3,name:"Fines",order_id:n,prefill:{email:"",contact:"",name:""},theme:{color:"#3399cc"},handler:async i=>{console.log("==3==Payment success:",i),console.log("payment response...."),await d(i)}};const c=new Razorpay(h);c.on("payment.failed",function(i){console.log("payment failed....",i)}),c.open()}const le={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};function oe(n){var L,D;const{id:d}=z(),{api_challanOfflinePayment:h,api_generateOrderId:c,api_getTransactionNo:i,api_sendOnlineResponse:a}=H(),k=T(),[I,g]=s.useState(!1),[R,x]=s.useState(!1),[p,A]=s.useState(!1),[o,m]=s.useState(!1),[y,C]=s.useState(null),[P,Y]=s.useState(null);s.useState(!1),s.useState();let G=W({paymentMode:f().required("select payment mode"),remarks:f(),bankName:f(),branchName:f(),cheque_dd_no:f(),cheque_dd_date:f()});K({initialValues:{paymentMode:"CASH",remarks:"",bankName:"",branchName:"",cheque_dd_no:"",cheque_dd_date:"",payAdvance:"",advanceAmount:""},validationSchema:G,onSubmit:l=>{console.log("values at submit payment",l),Z(l)&&E()}});const u=(l,r)=>{Y(r),A(l)},F=()=>m(!1),Z=l=>{if(console.log("vlaues at ruleset..",l),l.paymentMode=="CHEQUE"||l.paymentMode=="DD"){if(l.bankName==""||l.bankName==null)return u(!0,"Please enter bank name"),!1;if(l.branchName==""||l.branchName==null)return u(!0,"Please enter branch name"),!1;if(l.cheque_dd_no==""||l.cheque_dd_no==null)return u(!0,"Please enter cheque/dd no."),!1;if(l.cheque_dd_date==""||l.cheque_dd_date==null)return u(!0,"Please enter cheque/dd date"),!1}return!0},E=async l=>{var b,j;x(!0);let r={amount:(b=n==null?void 0:n.demand)==null?void 0:b.amount,challanId:d,applicationId:(j=n==null?void 0:n.demand)==null?void 0:j.application_id};console.log("orderidpayload at payment before...",r),M.post(c,r,O()).then(t=>{var w,v,N,_;console.log("Order Id Response ",t==null?void 0:t.data),((w=t==null?void 0:t.data)==null?void 0:w.status)===!0?(console.log("==1==OrderId Generated True",(v=t==null?void 0:t.data)==null?void 0:v.data),ne((_=(N=t==null?void 0:t.data)==null?void 0:N.data)==null?void 0:_.order_id,J)):u(!0,"Error occured. Please try again later.")}).catch(t=>{u(!0,"Error occured. Please try again later."),console.log("ERROR :-  Unable to Generate Order Id ",t)}).finally(()=>{x(!1)})},J=async l=>{var b,j;console.log("payment responsedsdasdasdasdasd....",l),x(!0);let r={applicationId:(b=n==null?void 0:n.demand)==null?void 0:b.application_id,challanId:d,amount:(j=n==null?void 0:n.demand)==null?void 0:j.amount,date:new Date,transactionId:"",status:"",cardNo:"",authCode:"",tid:"",mid:"gghg",status:"AUTHORIZED",rrNo:"",batchNo:"",orderId:l==null?void 0:l.razorpay_order_id};console.log("==inside payment reesponse of online payment...",r),M.post(a,r,O()).then(t=>{var w,v,N,_,B,V;console.log("===== 3 response after onlin payment api....",JSON.stringify(t==null?void 0:t.data,null,2)),console.log("===== 45354353 response after onlin payment api....",t==null?void 0:t.data),((w=t==null?void 0:t.data)==null?void 0:w.status)===!0?(console.log("payment success Chandan dev"),g(!0),C((N=(v=t==null?void 0:t.data)==null?void 0:v.data)==null?void 0:N.tran_no),console.log("chandan5",(B=(_=t==null?void 0:t.data)==null?void 0:_.data)==null?void 0:B.tran_no)):(console.log("Login Failed",(V=t==null?void 0:t.data)==null?void 0:V.message),g())}).catch(t=>{console.log("-Exception--",t),g()}).finally(()=>{x(!1)})},Q=()=>{m(!1),E()};return R?e.jsx(e.Fragment,{children:e.jsx(U,{})}):I==!0?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full h-full bg-white sm:p-20 p-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"Your payment has been successfully done !"}),e.jsxs("div",{className:"text-center mt-6",children:[e.jsx("button",{className:"mr-4 bg-indigo-500  text-white px-6 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>k(`/fp-receipt/${encodeURIComponent(y)}/direct`),children:"View Receipt"}),e.jsx("button",{className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>k(`/challan/${d}/direct`),children:"View Challan"})]})]}),console.log("dghhjhdj",y)]})}):e.jsxs(e.Fragment,{children:[p&&e.jsx($,{activateBottomErrorCard:u,errorTitle:P}),e.jsx("div",{className:" block sm:p-4 mt-4 w-full md:py-4 md:px-40 md:pb-0 md:pt-0 rounded-lg  bg-white md:w-full mx-auto  overflow-x-auto mb-20 ",children:e.jsxs("div",{className:"p-4 w-full md:py-6 rounded-lg bg-white mx-auto flex justify-center items-center flex-col",children:[e.jsxs("div",{className:"md:px-4",children:[e.jsx("span",{children:"Total Payable Amount :"})," ",e.jsx("span",{className:"font-mono font-bold text-xl",children:q((L=n==null?void 0:n.demand)==null?void 0:L.amount)})]}),e.jsx("div",{className:"mt-4",children:e.jsxs("button",{onClick:E,type:"button",className:"sm:ml-4 font-bold px-6 py-3 md:py-2 bg-indigo-500 text-white text-xs sm:text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out shadow-xl border border-white",children:[e.jsx("span",{className:"sm:mr-2 mr-1",children:"Pay "}),q((D=n==null?void 0:n.demand)==null?void 0:D.amount)]})})]})}),e.jsx(ee,{isOpen:o,onRequestClose:F,style:le,contentLabel:"Example Modal",children:e.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50",children:[e.jsx("button",{onClick:F,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center",children:[e.jsxs("div",{className:"w-full flex h-10",children:[" ",e.jsx("span",{className:"mx-auto",children:e.jsx(te,{size:30})})]}),e.jsx("h3",{class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",children:"Confirm Payment"}),e.jsx("button",{type:"button",class:"text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:Q,children:"Yes, I'm sure"})]})]})})]})}const ye=()=>{const{api_getChallanById:n}=H(),{id:d}=z(),h=T(),[c,i]=s.useState(!1),[a,k]=s.useState(null),[I,g]=s.useState(!1),[R,x]=s.useState(""),p=(o,m)=>{x(m),g(o),o||window.history.back()},A=()=>{i(!0),M.post(n,{challanId:d},O()).then(o=>{var m,y,C,P;console.log("getting response of user data => ",o),(m=o==null?void 0:o.data)!=null&&m.status?(console.log("user data => ",(y=o==null?void 0:o.data)==null?void 0:y.data),k((C=o==null?void 0:o.data)==null?void 0:C.data)):p(!0,(P=o==null?void 0:o.data)==null?void 0:P.message)}).catch(o=>{console.log("getting error user details marriage => ",o),p(!0,"Error getting user details, please try again later !")}).finally(()=>{i(!1)})};return s.useEffect(()=>{A()},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-screen md:pt-10",children:e.jsxs("div",{className:"md:w-4/5 mx-auto shadow-xl bg-gray-50 md:py-10",children:[c&&e.jsx(U,{}),I&&e.jsx($,{activateBottomErrorCard:p,errorTitle:R}),!c&&e.jsxs("div",{className:"animate__animated animate__fadeIn animate__faster overflow-x-hidden overflow-y-scroll w-[99%] mx-auto rounded-md gap-6 h-full p-[1vw]",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("h1",{className:"bg-white shadow-lg shadow-indigo-300 text-indigo-400 w-max font-semibold text-2xl px-6 py-2 border border-indigo-400",children:"Fines & Penalties Payment"})}),e.jsxs("div",{className:"flex items-center flex-wrap w-full text-sm bg-white p-4  gap-2 mt-4",children:[e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[27%]",children:[e.jsx("div",{children:"Name"}),e.jsx("div",{className:"font-semibold text-base",children:S(a==null?void 0:a.full_name)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Mobile No."}),e.jsx("div",{className:"font-semibold text-base",children:S(a==null?void 0:a.mobile)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Challan No. "}),e.jsx("div",{className:"font-semibold text-base",children:S(a==null?void 0:a.challan_no)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Challan Date "}),e.jsx("div",{className:"font-semibold text-base",children:X(a==null?void 0:a.challan_date)})]}),e.jsxs("div",{className:"hidden md:flex flex-col flex-wrap justify-center w-full",children:[e.jsx("div",{children:"Violation Made "}),e.jsx("div",{className:"font-semibold text-base",children:S(a==null?void 0:a.violation_name)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Violation Section "}),e.jsx("div",{className:"font-semibold text-base",children:S(a==null?void 0:a.violation_section)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Penalty Amount "}),e.jsx("div",{className:"font-bold text-base",children:q(a==null?void 0:a.amount)})]})]}),e.jsx("div",{children:a!=null&&a.is_bpl?e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-full bg-white sm:p-20 p-2",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"As you belongs to BPL category, so you don't need to pay. And your application is sent for verification."}),e.jsx("div",{className:"text-center mt-6",children:e.jsx("button",{className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>h(`/fp-details/${d}`),children:"View Application"})})]})})}):e.jsx(e.Fragment,{children:a!=null&&a.payment_status?e.jsx("div",{className:"w-full h-full bg-white sm:p-20 p-2",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"Payment Already Done. You can view your receipt or challan."}),e.jsxs("div",{className:"text-center mt-6",children:[e.jsx("button",{className:"mr-4 bg-indigo-500  text-white px-6 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>h(`/fp-receipt/${encodeURIComponent(a==null?void 0:a.tran_no)}/direct`),children:"View Receipt"}),e.jsx("button",{className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>h(`/challan/${d}/direct`),children:"View Challan"})]})]})}):e.jsx(oe,{demand:a})})})]})]})})})};export{ye as default};
