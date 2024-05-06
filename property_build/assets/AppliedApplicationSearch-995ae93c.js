import{r as i,g as G,bv as z,k as J,aI as N,l as K,m as v,o as Q,a as X,j as r,S as Y,bN as Z,bO as ee,bS as _,n,P as re,bP as se,A as F}from"./index-a8a14e0c.js";function le(){const[x,P]=i.useState(null),[m,D]=i.useState(),{type:h,setType:k}=i.useContext(G);i.useState(),i.useState(!1);const[oe,g]=i.useState();i.useState();const[U,b]=i.useState(),[ae,w]=i.useState(!1);i.useState(),i.useState(!1);const[I,ne]=i.useState(!1),[u,R]=i.useState(null),[f,L]=i.useState(0),{filterParam:C,searchByParam:B,searchValueParam:y}=z();J("Search Applications");const S=[{Header:"Ward No.",accessor:"old_ward_no",Cell:({cell:e})=>{var s,o,t,l,c,p;return r.jsx("span",{children:((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.new_ward_no)==""?n((l=(t=e==null?void 0:e.row)==null?void 0:t.original)==null?void 0:l.old_ward_no):n((p=(c=e==null?void 0:e.row)==null?void 0:c.original)==null?void 0:p.new_ward_no)})}},{Header:"Application No",accessor:"saf_no",Cell:({cell:e})=>{var s,o;return r.jsx("span",{children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.saf_no)})}},{Header:"Assessment Type",accessor:"assessment_type",Cell:({cell:e})=>{var s,o;return r.jsx("span",{children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.assessment_type)})}},{Header:"First Owner",accessor:"owner_name",Cell:({cell:e})=>{var s,o;return r.jsx("span",{children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.owner_name)})}},{Header:"Mobile No",accessor:"mobile_no",Cell:({cell:e})=>{var s,o;return r.jsx("span",{children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.mobile_no)})}},{Header:"Applied By",accessor:"appliedby",Cell:({cell:e})=>{var s,o;return r.jsx("span",{children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.appliedby)})}},{Header:"Current Level",accessor:"current_role",Cell:({cell:e})=>{var s,o;return r.jsx("div",{className:"bg-red-200 text-black px-2 py-0.5 shadow-xl rounded-xl text-center",children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.current_role)})}},{Header:"Action",accessor:"id",Cell:({cell:e})=>{var s,o;return r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>d(`/propApplicationDetails/${e.row.values.id}`),className:"mr-4 text-white bg-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-600 hover:text-white",children:"View"}),((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.payment_status)==0&&r.jsx("button",{onClick:()=>d(`/viewDemand/${e.row.values.id}`),className:"ml-4 mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white",children:"Pay"})]})}}],A=[{Header:"Ward No.",accessor:"old_ward_no",Cell:({cell:e})=>{var s,o,t,l,c,p;return r.jsx("span",{children:((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.new_ward_no)==""?n((l=(t=e==null?void 0:e.row)==null?void 0:t.original)==null?void 0:l.old_ward_no):n((p=(c=e==null?void 0:e.row)==null?void 0:c.original)==null?void 0:p.new_ward_no)})}},{Header:"Application No",accessor:"saf_no",Cell:({cell:e})=>{var s,o;return r.jsx("span",{children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.saf_no)})}},{Header:"Officer's Name",accessor:"officer_name",Cell:({cell:e})=>{var s,o;return r.jsx("span",{children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.officer_name)})}},{Header:"Assessment Type",accessor:"assessment_type",Cell:({cell:e})=>{var s,o;return r.jsx("span",{children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.assessment_type)})}},{Header:"Mobile No",accessor:"mobile_no",Cell:({cell:e})=>{var s,o;return r.jsx("span",{children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.mobile_no)})}},{Header:"Apply Date",accessor:"updated_at",Cell:({cell:e})=>{var s,o;return r.jsx("span",{children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.updated_at)})}},{Header:"Current Level",accessor:"current_role",Cell:({cell:e})=>{var s,o;return r.jsx("span",{className:"bg-red-200 text-black px-2 py-0.5 shadow-xl rounded-xl",children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.currentRole)})}},{Header:"Action",accessor:"id",Cell:({cell:e})=>{var s,o;return r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>d(`/gbsaf-details/${e.row.values.id}`),className:"mr-4 text-white bg-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-600 hover:text-white",children:"View"}),((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.payment_status)==0&&r.jsx("button",{onClick:()=>{var t;return d(`/viewDemand/${(t=e==null?void 0:e.row)==null?void 0:t.values.id}`)},className:"ml-4 mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white",children:"Pay"})]})}}],H=[{Header:"Ward No.",accessor:"old_ward_no",Cell:({cell:e})=>{var s,o,t,l,c,p;return r.jsx("span",{children:((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.new_ward_no)==""?n((l=(t=e==null?void 0:e.row)==null?void 0:t.original)==null?void 0:l.old_ward_no):n((p=(c=e==null?void 0:e.row)==null?void 0:c.original)==null?void 0:p.new_ward_no)})}},{Header:"Application No",accessor:"application_no",Cell:({cell:e})=>{var s,o;return r.jsx("span",{children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.application_no)})}},{Header:"Holding No.",accessor:"new_holding_no",Cell:({cell:e})=>{var s,o;return r.jsx("span",{children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.new_holding_no)})}},{Header:"Applicant Name",accessor:"owner_name",Cell:({cell:e})=>{var s,o;return r.jsx("span",{children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.owner_name)})}},{Header:"Mobile No",accessor:"mobile_no",Cell:({cell:e})=>{var s,o;return r.jsx("span",{children:n((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.mobile_no)})}},{Header:"Action",accessor:"id",Cell:({cell:e})=>r.jsx("button",{onClick:()=>{a.values.filterBy=="concession"&&d(`/concession-details/${e.row.values.id}`),a.values.filterBy=="objection"&&d(`/objection-details/${e.row.values.id}`),a.values.filterBy=="harvesting"&&d(`/harvesting-details/${e.row.values.id}`),a.values.filterBy=="holdingDeactivation"&&d(`/holding-deactivatioin-details/${e.row.values.id}`)},className:"bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black",children:"View"})}],{api_getWardListByLogin:ie,api_filterPropertyDetails:te,api_filterPropertyAppliedApplications:j,api_newWardByOldWard:$,api_wardByUlb:O}=re();N();const T=K({filterBy:v().required("Select filter by !"),searchBy:v().required("Select search by !"),entry:v().required("select value !")}),a=Q({initialValues:{filterBy:"",searchBy:"",entry:"",wardNo:"",newWardNo:""},onSubmit:e=>{W(e),k(e==null?void 0:e.filterBy)},validationSchema:T}),d=X(),W=e=>{var s;(e==null?void 0:e.filterBy)=="saf"?g(S):e.filterBy=="gbsaf"?g(A):g(H),R({filteredBy:e==null?void 0:e.filterBy,searchBy:e==null?void 0:e.searchBy,value:e==null?void 0:e.entry,wardId:(s=a==null?void 0:a.values)==null?void 0:s.newWardNo}),L(o=>o+1),se(`/property/searchAppliedProperty/${encodeURIComponent(e==null?void 0:e.filterBy)}/${encodeURIComponent(e==null?void 0:e.searchBy)}/${encodeURIComponent(e==null?void 0:e.entry)}`)},V=e=>{a.values.filterBy=e.target.value,e.target.value=="holdingNo"&&(b("15 Digit Holding No"),w(!0)),e.target.value=="ownerDetails"&&(b("Owner Details"),w(!1)),e.target.value=="address"&&(b("Address"),w(!1))};i.useEffect(()=>{y!="direct"&&(a.setFieldValue("filterBy",decodeURIComponent(C)),a.setFieldValue("searchBy",decodeURIComponent(B)),a.setFieldValue("entry",decodeURIComponent(y)),W({filterBy:decodeURIComponent(C),searchBy:decodeURIComponent(B),entry:decodeURIComponent(y)}))},[]);const M=()=>{F.post(O,{},N()).then(function(e){var s;P((s=e==null?void 0:e.data)==null?void 0:s.data)}).catch(function(e){})},q=e=>{let s={oldWardMstrId:e};F.post($,s,N()).then(function(o){D(o.data.data)}).catch(function(o){})},E=e=>{let s=e.target.name,o=e.target.value;s=="filterBy"&&V(e),s=="wardNo"&&q(o)};return i.useEffect(()=>{M()},[]),I?r.jsx(Y,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):r.jsx(r.Fragment,{children:r.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[r.jsxs("div",{className:"hidden sm:flex ml-5 mt-2 ",children:[r.jsx("img",{src:Z,alt:"",className:"w-10 h-10"}),r.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:"Search Applied Applications"})]}),r.jsx("form",{onSubmit:a.handleSubmit,onChange:E,children:r.jsxs("div",{className:"flex-col sm:flex-row flex justify-between gap-4 my-5 m-10",children:[r.jsxs("div",{className:"w-full",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Application Type",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{...a.getFieldProps("filterBy"),className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[r.jsx("option",{value:"",children:"Select"}),r.jsx("option",{value:"saf",children:"SAF"}),r.jsx("option",{value:"gbsaf",children:"GBSAF"}),r.jsx("option",{value:"concession",children:"Concession"}),r.jsx("option",{value:"objection",children:"Objection"}),r.jsx("option",{value:"harvesting",children:"Rainwater Harvesting"}),r.jsx("option",{value:"holdingDeactivation",children:"Holding Deactivation"})]}),r.jsx("p",{className:"text-red-500 text-xs",children:a.touched.filterBy&&a.errors.filterBy?a.errors.filterBy:null})]}),r.jsxs("div",{className:"w-full",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Search By",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{...a.getFieldProps("searchBy"),className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[r.jsx("option",{value:"",children:"Select"}),r.jsx("option",{value:"applicationNo",children:"Application No."}),r.jsx("option",{value:"name",children:"Name"}),r.jsx("option",{value:"mobileNo",children:"Mobile No."}),r.jsx("option",{value:"holding",children:"Holding No."}),r.jsx("option",{value:"ptn",children:"PTN"})]}),r.jsx("p",{className:"text-red-500 text-xs",children:a.touched.searchBy&&a.errors.searchBy?a.errors.searchBy:null})]}),r.jsxs("div",{className:"w-full",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Old Ward No",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{name:"wardNo",...a.getFieldProps("wardNo"),className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[r.jsx("option",{value:"",children:"All Ward"}),x==null?void 0:x.map(e=>r.jsx("option",{value:e.id,children:e.ward_name}))]}),r.jsx("p",{className:"text-red-500 text-xs",children:a.touched.wardNo&&a.errors.wardNo?a.errors.wardNo:null})]}),r.jsxs("div",{className:"w-full",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["New Ward No",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{name:"newWardNo",...a.getFieldProps("newWardNo"),className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",required:a.values.wardNo,children:[a.values.wardNo?r.jsx("option",{value:"",children:"Select"}):r.jsx("option",{value:"",children:"All Ward"}),m==null?void 0:m.map(e=>r.jsx("option",{value:e.new_ward_mstr_id,children:e.ward_name}))]}),r.jsx("p",{className:"text-red-500 text-xs",children:a.touched.newWardNo&&a.errors.newWardNo?a.errors.newWardNo:null})]}),r.jsxs("div",{className:"w-full",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[" ","value ",U," ",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsx("input",{type:"text",...a.getFieldProps("entry"),className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:a.touched.entry&&a.errors.entry?a.errors.entry:null})]}),r.jsx("div",{className:"w-full flex justify-center items-end",children:r.jsx("button",{type:"submit",className:"w-full border rounded-md border-indigo-500 bg-indigo-500 hover:bg-indigo-700 text-white  shadow-lg  text-base font-semibold max-sm:px-5 md:px-2 py-2",children:r.jsxs("p",{className:"flex items-center justify-center",children:[r.jsxs("span",{className:"mt-1 mr-2",children:[r.jsx(ee,{})," "]})," ","Search record"]})})})]})}),r.jsx("div",{className:"sm:m-10",children:u!=null&&r.jsxs(r.Fragment,{children:[h=="saf"&&r.jsx(_,{api:j,columns:S,requestBody:u,changeData:f}),h=="gbsaf"&&r.jsx(_,{api:j,columns:A,requestBody:u,changeData:f}),h!="saf"&&h!="gbsaf"&&r.jsx(_,{api:j,columns:H,requestBody:u,changeData:f})]})})]})})}export{le as default};
