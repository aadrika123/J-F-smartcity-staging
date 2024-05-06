import{k as I,u as L,r as c,o as A,l as C,m as F,A as h,aH as g,j as t,E as k,bM as E,cv as R,bb as H,bA as W}from"./index-c73b3921.js";const U=()=>{const{levelWisePendingCollection:f,api_getAllUlb:b}=W();I("Level Wise Pending Report");const r=L(),[s,v]=c.useState(),[n,o]=c.useState(!1),[u,j]=c.useState([]),[w,x]=c.useState(!1),N="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",d=window.localStorage.getItem("ulbId"),i=A({initialValues:{ulbId:d||""},onSubmit:e=>{m(e)},validationSchema:C({ulbId:F().required("Select ULB")})});c.useEffect(()=>{x(!0),!d&&y(),d&&m()},[]);const y=()=>{h.get(b,g()).then(e=>{var a,l;((a=e==null?void 0:e.data)==null?void 0:a.status)==!0&&j((l=e==null?void 0:e.data)==null?void 0:l.data)}).catch(e=>{}).finally(()=>x(!1))},m=e=>{o(!0),h.post(f,{ulbId:(e==null?void 0:e.ulbId)||""},g()).then(a=>{var l;o(!1),v((l=a==null?void 0:a.data)==null?void 0:l.data)}).catch(a=>o(!1))},S=[{Header:"S.No.",Cell:({row:e})=>t.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Employee Name",accessor:"role_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return t.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total No of Form(s)",accessor:"total",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return t.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:t.jsx("div",{className:"w-full text-center",children:"Actions"}),accessor:"id",Cell:({cell:e})=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:"w-full flex justify-evenly",children:[t.jsx("button",{className:"w-max px-4 py-1 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",onClick:()=>{var a,l;return r(`/saf-wise-details/${(l=(a=e==null?void 0:e.row)==null?void 0:a.values)==null?void 0:l.id}/${i.values.ulbId}`)},children:"View SAF Wise Details"}),t.jsx("button",{className:"w-max px-4 py-1 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",onClick:()=>{var a,l;return r(`/employee-wise-details/${(l=(a=e==null?void 0:e.row)==null?void 0:a.values)==null?void 0:l.id}/${i.values.ulbId}`)},children:"View Employee Wise Details"})]})})}];return t.jsxs(t.Fragment,{children:[!d&&t.jsxs("form",{onChange:i.handleChange,onSubmit:i.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md",children:[t.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),t.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[t.jsxs("div",{className:"flex flex-col w-full md:w-[15%]",children:[t.jsx("div",{className:"col-span-6 font-semibold",children:"Select ULB :"}),t.jsx("div",{className:"col-span-6",children:t.jsxs("select",{name:"ulbId",id:"",className:N,disabled:n,children:[w?t.jsx("option",{disabled:!0,children:"Loading..."}):t.jsx("option",{value:"",children:"Select"}),u==null?void 0:u.map(e=>t.jsx("option",{value:e.id,children:e.ulb_name}))]})}),t.jsx("div",{className:"col-span-12 text-start",children:i.touched.ulbId&&i.errors.ulbId&&t.jsx(t.Fragment,{children:t.jsx("span",{className:"text-red-600 text-xs",children:i.errors.ulbId})})})]}),t.jsx("div",{className:"mt-4 w-full md:w-[20%] flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:mt-4",children:t.jsx("div",{className:" ",children:n?t.jsx(t.Fragment,{children:t.jsx("div",{className:"flex justify-center",children:t.jsx(k,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):t.jsxs("button",{type:"submit",className:" flex items-center border border-green-600 bg-green-500 hover:bg-green-600 text-white shadow-md rounded-sm  text-sm px-5 py-1",children:[t.jsx("span",{className:"",children:t.jsx(E,{fontSize:""})}),t.jsx("span",{children:"Search Record"})]})})})]})]}),t.jsx("div",{className:"mt-4"}),n&&t.jsx(R,{}),s!=null&&(s==null?void 0:s.length)!=0&&!n?t.jsxs(t.Fragment,{children:[t.jsx(H,{dataList:s,columns:S})," "]}):t.jsx(t.Fragment,{children:!n&&t.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),t.jsx("div",{className:"h-[20vh]"})]})};export{U as default};
