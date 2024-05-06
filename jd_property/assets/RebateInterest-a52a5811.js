import{a as Z,_ as X,u as Y,k as D,r as d,o as ee,a$ as A,l as se,m as F,cu as ae,A as u,aH as h,j as e,E as le,bN as te,c6 as m,f as n,bB as ne,n as b}from"./index-259f1e14.js";const re=Z.lazy(()=>X(()=>import("./index-259f1e14.js").then(v=>v.dg),["assets/index-259f1e14.js","assets/index-680cccd3.css"])),ie=v=>{var S;const{get_MasterData:R,api_wardByUlb:H,searchRebatePenalty:k,yearList:M,api_getAllUlb:P}=ne(),p=Y();D("Rebate and Interest Report");const[j,L]=d.useState(),[de,E]=d.useState(),[a,q]=d.useState(null),[f,O]=d.useState([]),[N,U]=d.useState(!1),[g,B]=d.useState(null),[y,W]=d.useState({}),[$,Q]=d.useState(0),i="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",o=window.localStorage.getItem("ulbId"),t=ee({initialValues:{ulbId:o||"",fromDate:A(new Date).format("yy-MM-DD"),uptoDate:A(new Date).format("yy-MM-DD"),reportType:["property"],wardId:"",userId:"",paymentMode:"",propertyType:""},onSubmit:s=>{W({ulbId:t.values.ulbId,reportType:t.values.reportType,fromDate:t.values.fromDate,uptoDate:t.values.uptoDate,wardId:t.values.wardId,userId:t.values.userId,paymentMode:t.values.paymentMode,propertyType:t.values.propertyType}),Q(l=>l+1)},validationSchema:se({ulbId:F().required("Select ULB"),reportType:ae().min(1,"Check atleast one").of(F().required("Array items must be non-empty strings"))})}),V=["saf","gbsaf"],J=["property"],w=d.useMemo(()=>{var s;return a!=null&&((s=a==null?void 0:a.data)==null?void 0:s.length)>0&&Array.isArray(a==null?void 0:a.reportTypes)&&(a==null?void 0:a.reportTypes).some(l=>V.includes(l))},[a]),K=d.useMemo(()=>{var s;return a!=null&&((s=a==null?void 0:a.data)==null?void 0:s.length)>0&&Array.isArray(a==null?void 0:a.reportTypes)&&(a==null?void 0:a.reportTypes).some(l=>J.includes(l))},[a]);d.useEffect(()=>{o&&(_(),T()),u.get(P,h()).then(s=>{var l,r;((l=s==null?void 0:s.data)==null?void 0:l.status)==!0&&O((r=s==null?void 0:s.data)==null?void 0:r.data)}).catch(s=>{}),u.post(M,{},h()).then(s=>{var l,r;((l=s==null?void 0:s.data)==null?void 0:l.status)==!0&&E((r=s==null?void 0:s.data)==null?void 0:r.data)}).catch(s=>{})},[]);const _=s=>{u.post(R,{ulbId:s||o},h()).then(l=>{var r,c,x;((r=l==null?void 0:l.data)==null?void 0:r.status)==!0&&B((x=(c=l==null?void 0:l.data)==null?void 0:c.data)==null?void 0:x.property_type)}).catch(l=>{})},T=s=>{u.post(H,{ulbId:s||o},h()).then(l=>{var r,c;((r=l==null?void 0:l.data)==null?void 0:r.status)==!0&&L((c=l==null?void 0:l.data)==null?void 0:c.data)}).catch(l=>{})},z=s=>{var l,r,c,x,I,C;((l=a==null?void 0:a.data[s])==null?void 0:l.type)=="property"&&p("/holdingPropertyDetails/"+((r=a==null?void 0:a.data[s])==null?void 0:r.property_id)),((c=a==null?void 0:a.data[s])==null?void 0:c.type)=="saf"&&p("/propApplicationDetails/"+((x=a==null?void 0:a.data[s])==null?void 0:x.saf_id)),((I=a==null?void 0:a.data[s])==null?void 0:I.type)=="gbsaf"&&p("/gbsaf-details/"+((C=a==null?void 0:a.data[s])==null?void 0:C.saf_id))},G=[{Header:"S.No.",Cell:({row:s})=>e.jsx("div",{children:(s==null?void 0:s.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:s=>b(s==null?void 0:s.value)},{Header:"Holding No",accessor:"holding_no",Cell:s=>b(s==null?void 0:s.value)},{Header:"SAF No",accessor:"saf_no",Cell:s=>b(s==null?void 0:s.value)},{Header:"Demand",accessor:"demand_amt",Cell:s=>n(s==null?void 0:s.value)},{Header:"First Quarter Rebate (5%)",accessor:"first_qtr_rebate",Cell:s=>n(s==null?void 0:s.value)},{Header:"JSK Rebate (2.5%)",accessor:"jsk_rebate_amt",Cell:s=>n(s==null?void 0:s.value)},{Header:"Special Rebate (5%)",accessor:"special_rebate_amt",Cell:s=>n(s==null?void 0:s.value)},{Header:"Online Rebate (5%)",accessor:"online_rebate_amt",Cell:s=>n(s==null?void 0:s.value)},{Header:"Total Rebate",Cell:({cell:s})=>e.jsxs(e.Fragment,{children:[" ",n(m(s.row.original.first_qtr_rebate)+m(s.row.original.jsk_rebate_amt)+m(s.row.original.special_rebate_amt)+m(s.row.original.online_rebate_amt))," "]})},{Header:"1% Monthly Intrest",accessor:"penalty_amt",Cell:s=>n(s==null?void 0:s.value)},{Header:"Amount Paid",accessor:"paid_amount",Cell:s=>n(s==null?void 0:s.value)},{Header:"Action",Cell:({cell:s})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex items-center justify-center gap-2 w-full",children:e.jsx("button",{onClick:()=>{var l;return z((l=s==null?void 0:s.row)==null?void 0:l.index)},className:"px-2 py-1 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600",children:"View"})})})}];return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onChange:t.handleChange,onSubmit:t.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Report Type :"}),e.jsxs("div",{className:"col-span-6 flex items-center justify-between bg-green-100 shadow-md px-2 py-1.5 rounded-md border border-green-300 shadow-green-100",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"1",children:"Property"}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"reportType",id:"1",value:"property",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"2",children:"SAF"}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"reportType",id:"2",value:"saf"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"3",children:"Gov. SAF"}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"reportType",id:"3",value:"gbsaf"})]})]}),e.jsx("div",{className:"col-span-12 text-start",children:t.touched.reportType&&t.errors.reportType&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:t.errors.reportType})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",id:"",className:i,value:t.values.fromDate})}),e.jsx("div",{className:"col-span-12 text-end",children:t.touched.fromDate&&t.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:t.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",id:"",className:i,value:t.values.uptoDate})}),e.jsx("div",{className:"col-span-12 text-end",children:t.touched.uptoDate&&t.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:t.errors.uptoDate})})})]}),!o&&e.jsxs("div",{className:"flex flex-col w-full md:w-[15%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Select ULB :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"ulbId",id:"",className:i,disabled:N,onChange:s=>(_(s.target.value),T(s.target.value)),children:[e.jsx("option",{value:"",children:"Select"}),f==null?void 0:f.map(s=>e.jsx("option",{value:s.id,children:s.ulb_name}))]})}),e.jsx("div",{className:"col-span-12 text-start",children:t.touched.ulbId&&t.errors.ulbId&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:t.errors.ulbId})})})]}),t.values.ulbId!=""&&e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"wardId",id:"",className:i,children:[e.jsx("option",{value:"",children:"All"}),j==null?void 0:j.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.ward_name})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:i,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Property Type :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"propertyType",id:"",className:i,children:[e.jsx("option",{value:"",children:"All"}),g==null?void 0:g.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.property_type})}))]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:N?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(le,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(te,{})}),"Search"]})})]})]}),a!=null&&((S=a==null?void 0:a.data)==null?void 0:S.length)>0&&e.jsxs("div",{className:"bg-white p-2 rounded-md shadow-md mb-4 flex flex-wrap justify-evenly gap-y-2 gap-x-4",children:[K&&e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total Holding :"}),e.jsx("span",{className:"font-semibold col-span-5",children:m(a==null?void 0:a.total_holding_no)})]}),w&&e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total Application :"}),e.jsx("span",{className:"font-semibold col-span-5",children:m(a==null?void 0:a.total_saf_no)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total Demand :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_demand_amt)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total Amount Paid :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_paid_amount)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total First Quarter Rebate :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_first_qtr_rebate)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total JSK Rebate :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_jsk_rebate_amt)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total Special Rebate :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_special_rebate_amt)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total Online Rebate :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_online_rebate_amt)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total Rebate :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_total_rebate)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total 1% Monthly Interest :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_penalty_amt)})]}),w&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"sm:grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 hidden",children:[e.jsx("span",{className:"text-sm col-span-7"}),e.jsx("span",{className:"font-semibold col-span-5"})]}),e.jsxs("div",{className:"sm:grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 hidden",children:[e.jsx("span",{className:"text-sm col-span-7"}),e.jsx("span",{className:"font-semibold col-span-5"})]})]})]}),Object.keys(y).length!==0&&e.jsx(re,{getData:!0,allData:s=>q(s),api:k,columns:G,requestBody:y,changeData:$,loader:s=>U(s)}),e.jsx("div",{className:"h-[20vh]"})]})};export{ie as default};
