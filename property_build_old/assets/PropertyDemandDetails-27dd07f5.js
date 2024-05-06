import{bt as A,u as I,r as l,j as e,bP as S,b0 as _,b2 as D,aH as f,O as y,P as k}from"./index-c73b3921.js";import{p as E,r as L,R as O}from"./RazorpayPaymentMaster-a3b9776c.js";import{B as C}from"./BackComponent-c9869cdf.js";function G(F){var d,c,i,n,o,p,m,h;const{safId:a}=A(),j=I(),{propertyGenerateOrderId:N,api_DemandDetailById:g}=k(),[u,H]=l.useState(!1),[t,v]=l.useState(),[R,w]=l.useState(""),z=()=>{const s=f();y.post(`${g}`,{id:a},s).then(function(r){v(r.data.data)}).catch(function(r){})};l.useEffect(()=>{z()},[a]);const T=s=>{w(s.status)},P=async()=>{var b;const s={id:a,amount:(b=t==null?void 0:t.demand)==null?void 0:b.payableAmount,departmentId:1,workflowId:4},r=f();y.post(N,s,r).then(x=>{x.data.status===!0&&(O(x.data.data,T),setTimeout(()=>{},500))}).catch(x=>{alert("Backend Server error. Unable to Generate Order Id")})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"p-2 ",children:e.jsx(S,{to:"/propFullDetails/:safId",children:e.jsx(C,{})})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-2 lg:grid-cols-12 container mx-auto ",children:e.jsxs("div",{className:"col-span-12 w-full bg-gray-50 rounded-lg p-4",children:[e.jsxs("h1",{className:"px-2 font-semibold mt-0 text-center text-gray-600 font-serif py-2 xl md:text-3xl",onClick:()=>j(`/propertyDemandDetails/${a}`),children:[" ","DEMAND DETAILS"]}),e.jsx("div",{children:!u&&e.jsx("div",{className:"md:px-10 text-right flex-1",children:e.jsxs("button",{onClick:P,type:"submit",className:" px-6 py-1 bg-green-500 text-white font-medium text-xs leading-tight capitalize rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:["Pay Now"," ",e.jsx("img",{src:E,alt:"pay image",className:"inline w-5"})]})})}),e.jsxs("div",{className:"mt-10",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl",children:[e.jsx("img",{src:_,alt:"pin",className:"w-5 inline"})," Tax Details"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-green-50 text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Rebate"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["1% Penalty"," "]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Late Assessment Penalty"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Payable Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Total Demand"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Total Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Adjust Amount"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"1"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:(d=t==null?void 0:t.demand)==null?void 0:d.rebatePerc}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:(c=t==null?void 0:t.demand)==null?void 0:c.totalOnePercPenalty}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:(i=t==null?void 0:t.demand)==null?void 0:i.lateAssessmentPenalty}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:(n=t==null?void 0:t.demand)==null?void 0:n.payableAmount}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:(o=t==null?void 0:t.demand)==null?void 0:o.totalDemand}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:(p=t==null?void 0:t.demand)==null?void 0:p.totalTax}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:(m=t==null?void 0:t.demand)==null?void 0:m.adjustAmount})]})})})]})]}),e.jsxs("div",{className:"mt-10",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl",children:[e.jsx("img",{src:L,alt:"pin",className:"w-6 inline"})," Due Detail"]}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"flex space-x-10 bg-green-50 rounded-lg pl-4 py-6 shadow-lg",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"font-bold text-sm",children:"2000"}),e.jsx("div",{children:"Total Dues"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"font-semibold text-sm",children:"Quarter 4 / Year 2010-2011"}),e.jsx("div",{children:"Dues From"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"font-semibold text-sm",children:"Quarter 4 / Year 2022-2023"}),e.jsx("div",{children:"Dues Upto"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"font-bold text-sm",children:"49"}),e.jsx("div",{children:"Total Dues"})]})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl mt-10",children:[e.jsx("img",{src:D,alt:"pin",className:"w-5 inline"})," Demand Overview"]}),e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-green-50 text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs capitalize text-left",children:"Arv"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs capitalize text-left",children:"Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs capitalize text-left",children:"Quarter / Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs capitalize text-left",children:"Water Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs capitalize text-left",children:"Water Harvesting Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs capitalize text-left",children:"Education Cess"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs capitalize text-left",children:"Health Cess"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs capitalize text-left",children:"Holding Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs capitalize text-left",children:"Latrine Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs capitalize text-left",children:"Additional Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs capitalize text-left",children:"Total Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs capitalize text-left",children:"Due Date"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(h=t==null?void 0:t.details)==null?void 0:h.map(s=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"1"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.arv}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.qtr}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.fyear}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.water_tax}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.rwh_penalty}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.education_cess}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.health_cess}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.holding_tax}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.latrine_tax}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.additional_tax}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.totalTax}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.due_date})]}))})})]})]})]})})]})}export{G as default};
