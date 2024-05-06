import{j as e}from"./mui-8e804a04.js";import{r as o,f as a,u as C}from"./router-87042356.js";import{W as P}from"./WaterApiList-86cf1deb.js";import{B as S}from"./BarLoader-6486f53e.js";import{h as g}from"./moment-fbc5633a.js";import{W as T}from"./WaterTopButtons-eb21f982.js";import{A as p}from"./index-2435513d.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";const U=()=>{var i,l;const[s,j]=o.useState(),[r,b]=o.useState(""),[v,x]=o.useState(!1);o.useState();const{id:n}=a(),c=C(),{api_waterConsumerPaymentHistory:_,api_waterApprovedApplicationDetails:w,header:m}=P(),A=()=>{x(!0),p.post(w,{id:n},m).then(function(t){console.log("water Approved Application Details",t.data.data),j(t.data.data),x(!1)}).catch(function(t){console.log("Error : water Approved Application Details",t),x(!1)})},u=()=>{x(!0),p.post(_,{consumerId:n},m).then(function(t){console.log("water payment history",t.data.data),b(t.data.data),x(!1)}).catch(function(t){console.log("Error : water payment history",t),x(!1)})};return o.useEffect(()=>{A(),u()},[n]),e.jsxs(e.Fragment,{children:[e.jsx(T,{active:"payment",consumerNo:s==null?void 0:s.consumer_no}),e.jsx("div",{className:" grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full p-2",children:e.jsxs("div",{className:"col-span-12 rounded-lg",children:[e.jsx("div",{className:"",children:e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-lg p-1 md:p-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-5 pl-4 max-sm:flex-col max-sm:gap-2",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[s!=null&&s.connection_type?s==null?void 0:s.connection_type:"N/A"," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Connection Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.ward_name?s==null?void 0:s.ward_name:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:s!=null&&s.owner_char_type?s==null?void 0:s.owner_char_type:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.property_type?s==null?void 0:s.property_type:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.rule_set?s==null?void 0:s.rule_set:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Rule Set"})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-10  pl-4 mt-4 max-sm:flex-col max-sm:gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.pipeline_type?s==null?void 0:s.pipeline_type:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Pipeline Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.connection_through?s==null?void 0:s.connection_through:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Connection Through"})]}),(s==null?void 0:s.connection_through)=="SAF"?e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:s!=null&&s.saf_no?s==null?void 0:s.saf_no:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"SAF No"})]}):e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:s!=null&&s.holding_no?s==null?void 0:s.holding_no:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:s!=null&&s.area_sqft?s==null?void 0:s.area_sqft:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Area (Sqft.)"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.category?s==null?void 0:s.category:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Category"})]})]})]})}),v?e.jsx(S,{}):r&&(r==null?void 0:r.length)!=0?e.jsx("div",{className:"mt-10 bg-white shadow-xl  rounded-lg overflow-auto",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-900",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Transaction No"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Date"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Paid For"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Action"})]})}),e.jsxs("tbody",{className:"text-sm",children:[(i=r==null?void 0:r.Consumer)==null?void 0:i.map((t,d)=>{var h,N,y,f;return e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t==null?void 0:t.tran_no}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t==null?void 0:t.payment_mode}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t==null?void 0:t.tran_date}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t==null?void 0:t.tran_type}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[(N=g((h=t==null?void 0:t.demand)==null?void 0:h.demand_from))==null?void 0:N.format("MMM/yy")," - ",(f=g((y=t==null?void 0:t.demand)==null?void 0:y.demand_upto))==null?void 0:f.format("MMM/yy")]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t==null?void 0:t.amount}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("button",{onClick:()=>c(`/waterUserReceipt/${t==null?void 0:t.tran_no}`),type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]})}),(l=r==null?void 0:r.connection)==null?void 0:l.map((t,d)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d+1}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[t==null?void 0:t.tran_no,e.jsx("span",{className:"bg-indigo-500 text-white text-xs px-2 rounded-sm ml-2",children:"Application"})]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t==null?void 0:t.payment_mode}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t==null?void 0:t.tran_date}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t==null?void 0:t.tran_type}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"Application"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t==null?void 0:t.amount}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("button",{onClick:()=>c(`/waterConnReceipt/${t==null?void 0:t.tran_no}`),type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]}))]})]})}):e.jsx("div",{className:"text-center mt-10",children:e.jsx("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:" No Payments Found Yet"})}),e.jsx("div",{className:"w-full h-40"})]})})]})};export{U as default};
