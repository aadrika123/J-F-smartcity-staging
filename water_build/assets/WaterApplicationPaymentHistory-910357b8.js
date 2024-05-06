import{l,v as S,m as H,H as T,W as C,j as e,o as y,k as s,D as W,q as N}from"./index-db77734d.js";const k=()=>{var m,a,h,g;const[t,b]=l.useState(),[d,p]=l.useState(""),[f,o]=l.useState(!1);l.useState();const[c,v]=l.useState(),{id:n}=S(),x=H();T("Water Application Payment History");const{api_waterApplicationPaymentHistory:w,api_WaterGetDetailsById:u,header:i}=C(),_=()=>{o(!0),N.post(u,{applicationId:n},i).then(function(r){console.log("water application Details",r.data.data),b(r.data.data.applicationDetails),v(r.data.data.calculation),o(!1)}).catch(function(r){console.log("Error : water Approved Application Details",r),o(!1)})},A=()=>{o(!0),N.post(w,{id:n},i).then(function(r){console.log("water payment history",r.data.data),p(r.data.data),o(!1)}).catch(function(r){console.log("Error : water payment history",r),o(!1)})};return l.useEffect(()=>{_(),A()},[n]),e(y,{children:e("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:s("div",{className:"col-span-12 rounded-lg max-sm:pt-2",children:[s("div",{className:"flex max-sm:flex-col py-2 justify-center items-center",children:[s("div",{className:"flex-1 flex p-2 font-bold text-2xl text-gray-700",children:[" Application No - ",t==null?void 0:t.application_no]}),s("div",{className:"flex justify-right items-center",children:[e("button",{onClick:()=>x(`/waterViewApplication/${n}`),className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",children:"Application Details"}),e("button",{className:"mr-4 bg-indigo-500  text-white px-4 py-1 shadow-lg hover:scale-105 rounded-sm",children:"Payment History"})]})]}),e("div",{className:"",children:s("div",{className:"max-sm:flex py-6 mt-2 bg-white rounded-lg shadow-lg p-4",children:[s("div",{className:"flex space-x-5 max-sm:space-x-0 max-sm:space-y-3 pl-4 max-sm:flex-col mt-4",children:[s("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:[t!=null&&t.connection_type?t==null?void 0:t.connection_type:"N/A"," "]}),e("div",{className:"text-gray-500 text-xs",children:"Connection Type"})]}),s("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:t!=null&&t.ward_name?t==null?void 0:t.ward_name:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),s("div",{className:"flex-1",children:[e("div",{className:"font-semibold text-md",children:t!=null&&t.owner_char_type?t==null?void 0:t.owner_char_type:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),s("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:t!=null&&t.property_type?t==null?void 0:t.property_type:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Property Type"})]}),s("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:t!=null&&t.rule_set?t==null?void 0:t.rule_set:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Rule Set"})]})]}),s("div",{className:"flex space-x-5 max-sm:space-x-0 max-sm:space-y-3 pl-4 max-sm:flex-col max-sm:ml-6 mt-4",children:[s("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:t!=null&&t.pipeline_type?t==null?void 0:t.pipeline_type:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Pipeline Type"})]}),s("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:t!=null&&t.connection_through?t==null?void 0:t.connection_through:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Connection Through"})]}),(t==null?void 0:t.connection_through)=="SAF"?s("div",{className:"flex-1",children:[e("div",{className:"font-semibold text-md",children:t!=null&&t.saf_no?t==null?void 0:t.saf_no:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"SAF No"})]}):s("div",{className:"flex-1",children:[e("div",{className:"font-semibold text-md",children:t!=null&&t.holding_no?t==null?void 0:t.holding_no:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Holding No"})]}),s("div",{className:"flex-1",children:[e("div",{className:"font-semibold text-md",children:t!=null&&t.area_sqft?t==null?void 0:t.area_sqft:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Area (Sqft.)"})]}),s("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:t!=null&&t.category?t==null?void 0:t.category:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Category"})]})]})]})}),f&&e(W,{}),d&&(d==null?void 0:d.length)==0&&e("div",{className:"text-center mt-10",children:e("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:" No Payments Found Yet"})}),d!=null&&d.transactionHistory?e("div",{className:"mt-10 bg-white shadow-xl  rounded-lg",children:e("div",{className:"overflow-auto",children:e("div",{className:"overflow-auto",children:s("table",{className:"min-w-full leading-normal mt-2",children:[e("thead",{className:"font-bold text-left text-sm bg-white text-gray-900",children:s("tr",{children:[e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Transaction No."}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payment Mode"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Date"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Type"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Action"})]})}),e("tbody",{className:"text-sm",children:(m=d==null?void 0:d.transactionHistory)==null?void 0:m.map((r,P)=>s("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e("td",{className:"px-2 py-2 text-sm text-left",children:P+1}),e("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.tran_no}),e("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.payment_mode}),e("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.tran_date}),e("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.tran_type}),e("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.amount}),e("td",{className:"px-2 py-2 text-sm text-left",children:e("button",{onClick:()=>x(`/water-payment-receipt/${r==null?void 0:r.tran_no}/consumer`),type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]}))})]})})})}):e("div",{className:"mt-10",children:e("div",{className:"overflow-auto",children:s("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:s("tr",{children:[e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Charge Category"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Connection Fee"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Penalty"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Total Amount"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Action"})]})}),e("tbody",{className:"text-sm",children:e(y,{children:s("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:1}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:c==null?void 0:c.chargeCatagory}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:c==null?void 0:c.connectionFee}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:c==null?void 0:c.penalty}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:c==null?void 0:c.totalAmount}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:e("button",{onClick:()=>x(`/water-application-payment/${n}`),type:"button",className:" px-5 py-2.5 border border-indigo-500 hover:text-indigo-100 font-medium text-xs leading-tight uppercase rounded shadow-xl bg-indigo-700 hover:bg-indigo-800 text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"Pay Now"})})]})})})]})})}),((a=d==null?void 0:d.paymentList)==null?void 0:a.penaltyPaymentStatus)==!1&&e("div",{className:"mt-10 h-20 bg-white shadow-xl rounded-lg",children:s("div",{className:"mt-10 bg-white shadow-xl  rounded-lg",children:[e("p",{className:"text-red-600 font-semibold text-center border bg-blue-50",children:"Payment Due against this water connection"}),e("div",{className:"overflow-auto",children:s("table",{className:"min-w-full leading-normal mt-2",children:[e("thead",{className:"font-bold text-left text-sm bg-white text-gray-900",children:s("tr",{children:[e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payment For"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Action"})]})}),e("tbody",{className:"text-sm",children:s("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e("td",{className:"px-2 py-2 text-sm text-left",children:1}),e("td",{className:"px-2 py-2 text-sm text-left",children:(h=d==null?void 0:d.paymentList)==null?void 0:h.chargeCatagory}),s("td",{className:"px-2 py-2 text-sm text-left font-semibold",children:["₹",(g=d==null?void 0:d.paymentList)==null?void 0:g.penaltyAmount]}),e("td",{className:"px-2 py-2 text-sm text-left",children:e("button",{onClick:()=>x(`/water-application-payment/${n}`),type:"button",className:" px-5 py-2.5 border border-indigo-500 hover:text-indigo-100 font-medium text-xs leading-tight uppercase rounded shadow-xl bg-indigo-700 hover:bg-indigo-800 text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"Pay Now"})})]})})]})})]})}),e("div",{className:"w-full h-40"})]})})})};export{k as default};
