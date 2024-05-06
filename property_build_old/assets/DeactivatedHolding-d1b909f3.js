import{k as _,r as n,o as k,l as D,m as F,A as g,aH as j,j as a,E as U,bM as B,bQ as R,bA as E}from"./index-c73b3921.js";const q=()=>{const{api_wardByUlb:N,api_getAllUlb:w,searchDeactivatedHolding:S}=E();_("Deactivated Holding");const[c,y]=n.useState();n.useState();const[u,r]=n.useState([]),[x,s]=n.useState(!1),[m,I]=n.useState(!1),[h,A]=n.useState({}),[C,H]=n.useState(0),v="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",d=window.localStorage.getItem("ulbId"),t=k({initialValues:{ulbId:d||"",wardId:""},onSubmit:e=>{A({ulbId:t.values.ulbId,wardId:t.values.wardId}),H(l=>l+1)},validationSchema:D({ulbId:F().required("Select ULB")})});n.useEffect(()=>{s(!0),d&&f(),!d&&L()},[]);const L=()=>{g.get(w,j()).then(e=>{var l,i;((l=e==null?void 0:e.data)==null?void 0:l.status)==!0&&r((i=e==null?void 0:e.data)==null?void 0:i.data)}).catch(e=>{}).finally(()=>s(!1))},f=e=>{g.post(N,{ulbId:e||d},j()).then(l=>{var i,b;((i=l==null?void 0:l.data)==null?void 0:i.status)==!0&&y((b=l==null?void 0:l.data)==null?void 0:b.data)}).catch(l=>{})},o=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Holding No",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property Tax No",accessor:"pt_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Applicant Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Address",accessor:"address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}];return a.jsxs(a.Fragment,{children:[a.jsxs("form",{onChange:t.handleChange,onSubmit:t.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[!d&&a.jsxs("div",{className:"flex flex-col w-full md:w-[15%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Select ULB :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"ulbId",id:"",className:v,disabled:m,onChange:e=>f(e.target.value),children:[x?a.jsx("option",{disabled:!0,children:"Loading..."}):a.jsx("option",{value:"",children:"Select"}),u==null?void 0:u.map(e=>a.jsx("option",{value:e.id,children:e.ulb_name}))]})}),a.jsx("div",{className:"col-span-12 text-start",children:t.touched.ulbId&&t.errors.ulbId&&a.jsx(a.Fragment,{children:a.jsx("span",{className:"text-red-600 text-xs",children:t.errors.ulbId})})})]}),t.values.ulbId!=""&&a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardId",id:"",className:v,children:[x?a.jsx("option",{disabled:!0,children:"Loading..."}):a.jsx("option",{value:"",children:"Select"}),c==null?void 0:c.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsx("div",{className:"mt-4 w-full md:w-[20%] flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:mt-4",children:a.jsx("div",{className:" ",children:m?a.jsx(a.Fragment,{children:a.jsx("div",{className:"flex justify-center",children:a.jsx(U,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):a.jsxs("button",{type:"submit",className:" flex items-center border border-green-600 bg-green-500 hover:bg-green-600 text-white shadow-md rounded-sm  text-sm px-5 py-1",children:[a.jsx("span",{className:"",children:a.jsx(B,{fontSize:""})}),a.jsx("span",{children:"Search Record"})]})})})]})]}),Object.keys(h).length!==0&&a.jsx(R,{type:"old",api:S,columns:o,requestBody:h,changeData:C,loader:e=>I(e)}),a.jsx("div",{className:"h-[20vh]"})]})};export{q as default};
