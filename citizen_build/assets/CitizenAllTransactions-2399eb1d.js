import{j as e}from"./mui-8e804a04.js";import{r as l,u as w}from"./router-87042356.js";import{C}from"./CitizenApplyApiList-70acccc5.js";import{C as _}from"./CustomErrorBoundary-a255d819.js";import{b as N,B as S,x as A,n as s,V as L}from"./index-19682a6e.js";import{T as P}from"./TitleBar-ad3969e1.js";import{a as R}from"./axios-97164839.js";import{L as F}from"./ListTable-cfee9506.js";import{S as B}from"./ServerErrorCard-d469daf8.js";import"./CommonModal-340f9ebb.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./index.esm-c151f2f7.js";import"./index-4e794517.js";function E(r){var u;const[o,c]=l.useState(),[a,t]=l.useState(!1),[n,d]=l.useState(!1),[v,m]=l.useState(!1);let H=[...(u=r==null?void 0:r.transactionRules)==null?void 0:u.tableColumns];l.useEffect(()=>{T()},[]);const T=()=>{var x,y,g,p,f,h;m(!0),d(!1),t(!1),R[(g=(y=(x=r==null?void 0:r.transactionRules)==null?void 0:x.api)==null?void 0:y.api_getTranscationHistory)==null?void 0:g.method]((h=(f=(p=r==null?void 0:r.transactionRules)==null?void 0:p.api)==null?void 0:f.api_getTranscationHistory)==null?void 0:h.url,N()).then(function(i){var b,j;(b=i==null?void 0:i.data)!=null&&b.status?(c((j=i==null?void 0:i.data)==null?void 0:j.data),t(!0)):d(!0),m(!1)}).catch(function(i){console.log("Server is too busy to respond, Please try again later",i),d(!0),t(!1),m(!1)})};if(n)return e.jsx(B,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"});if(!n)return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-ful md:px-10 md:pt-5 mx-auto bg-white max-sm:mb-10",children:[e.jsx("h1",{className:"uppercase font-semibold text-center tracking-wider text-xl border-b pb-2 mb-4",children:"Property Payment History"}),v&&e.jsx(S,{}),a&&e.jsx(_,{errorMsg:"Some bug found",children:e.jsx("div",{className:"max-sm:px-2",children:e.jsx(F,{assessmentType:!1,columns:H,dataList:o,export:!1})})}),Array.isArray(o)&&(o==null?void 0:o.length)===0&&e.jsx("div",{className:"text-center mt-5 rounded py-2 font-semibold text-red-600",children:"No Transaction Found"})]})})}function Y(){A("Property Payment History");const r=w(),{api_getTranscationHistory:o}=C(),c={api:{api_getTranscationHistory:{method:"get",url:o}},transactionInfo:{title:"Citizen Payment History"},tableColumns:[{Header:"#",Cell:({row:a})=>e.jsx("div",{className:"pr-2",children:a.index+1})},{Header:"Type",accessor:"application_type",Cell:({cell:a})=>{var t;return e.jsx("div",{className:"pr-2",children:s((t=a.row.original)==null?void 0:t.application_type)})}},{Header:"SAF No.",accessor:"saf_no",Cell:({cell:a})=>{var t;return e.jsx("div",{className:"pr-2",children:s((t=a.row.original)==null?void 0:t.saf_no)})}},{Header:"Holding No.",accessor:"holding_no",Cell:({cell:a})=>{var t;return e.jsx("div",{className:"pr-2",children:s((t=a.row.original)==null?void 0:t.holding_no)})}},{Header:"Transaction No.",accessor:"tran_no",Cell:({cell:a})=>{var t;return e.jsx("div",{className:"pr-2",children:s((t=a.row.original)==null?void 0:t.tran_no)})}},{Header:"Payment Mode",accessor:"payment_mode",Cell:({cell:a})=>{var t;return e.jsx("div",{className:"pr-2",children:s((t=a.row.original)==null?void 0:t.payment_mode)})}},{Header:"Transaction Date",accessor:"tran_date",Cell:({cell:a})=>{var t;return e.jsx("div",{className:"pr-2",children:s((t=a.row.original)==null?void 0:t.tran_date)})}},{Header:"Amount",accessor:"amount",Cell:({cell:a})=>{var t;return e.jsx("div",{className:"pr-2",children:L((t=a.row.original)==null?void 0:t.amount)})}},{Header:"Receipt",Cell:({cell:a})=>e.jsx("button",{onClick:()=>{var t,n;a.row.original.application_type=="SAF"?r(`/paymentReceipt/${(t=a.row.original)==null?void 0:t.tran_no}/saf`):r(`/paymentReceipt/${(n=a.row.original)==null?void 0:n.tran_no}/holding`)},type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})}]};return e.jsxs(e.Fragment,{children:[e.jsx(P,{titleText:"Property Transaction History"}),e.jsx(_,{errorMsg:"Bug in TransactionHistoryFactory",children:e.jsx(E,{transactionRules:c})})]})}export{Y as default};
