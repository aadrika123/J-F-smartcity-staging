import{k,a as P,r as d,o as T,A as o,aI as F,j as e,bO as L,bS as M,bC as R}from"./index-a8a14e0c.js";const r=()=>{const{get_MasterData:C,searchPropIndividualDemandCollection:_}=R();k("Property Individual Demand And Collection");const w=P(),[N,y]=d.useState();d.useState(),d.useState(!1);const[j,A]=d.useState(null),[S,H]=d.useState(0),I="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",b=T({initialValues:{wardId:""},onSubmit:a=>{A({wardMstrId:b.values.wardId}),H(n=>n+1)}});d.useEffect(()=>{o.get(C,F()).then(a=>{var n,i,t;((n=a==null?void 0:a.data)==null?void 0:n.status)==!0&&y((t=(i=a==null?void 0:a.data)==null?void 0:i.data)==null?void 0:t.ward_master)}).catch(a=>{})},[]);const D=[{Header:"S.No.",Cell:({row:a})=>e.jsx("div",{children:(a==null?void 0:a.index)+1})},{Header:"Ward No",accessor:"ward_name",Cell:a=>{if((a==null?void 0:a.value)==null||(a==null?void 0:a.value)==""||(a==null?void 0:a.value)==null)return e.jsx("i",{className:"font-semibold ",children:"N/A"});if((a==null?void 0:a.value)!=null)return a==null?void 0:a.value}},{Header:"Property Tax No",Cell:({cell:a})=>{var n,i,t,l,u,m,v,f,x,h;if(((i=(n=a==null?void 0:a.row)==null?void 0:n.original)==null?void 0:i.pt_no)==null||((l=(t=a==null?void 0:a.row)==null?void 0:t.original)==null?void 0:l.pt_no)==""||((m=(u=a==null?void 0:a.row)==null?void 0:u.original)==null?void 0:m.pt_no)==null)return e.jsx("i",{className:"font-semibold ",children:"N/A"});if(((f=(v=a==null?void 0:a.row)==null?void 0:v.original)==null?void 0:f.pt_no)!=null)return e.jsx("div",{className:"cursor-pointer underline",onClick:()=>{var c,g;return w("/holdingPropertyDetails/"+((g=(c=a==null?void 0:a.row)==null?void 0:c.original)==null?void 0:g.id))},children:(h=(x=a==null?void 0:a.row)==null?void 0:x.original)==null?void 0:h.pt_no})}},{Header:"Holding No",Cell:({cell:a})=>{var n,i,t,l,u,m,v,f,x,h;if(((i=(n=a==null?void 0:a.row)==null?void 0:n.original)==null?void 0:i.holding_no)==null||((l=(t=a==null?void 0:a.row)==null?void 0:t.original)==null?void 0:l.holding_no)==""||((m=(u=a==null?void 0:a.row)==null?void 0:u.original)==null?void 0:m.holding_no)==null)return e.jsx("i",{className:"font-semibold ",children:"N/A"});if(((f=(v=a==null?void 0:a.row)==null?void 0:v.original)==null?void 0:f.holding_no)!=null)return e.jsx("div",{className:"cursor-pointer underline",onClick:()=>{var c,g;return w("/holdingPropertyDetails/"+((g=(c=a==null?void 0:a.row)==null?void 0:c.original)==null?void 0:g.id))},children:(h=(x=a==null?void 0:a.row)==null?void 0:x.original)==null?void 0:h.holding_no})}},{Header:"Unique House No",accessor:"new_holding_no",Cell:a=>{if((a==null?void 0:a.value)==null||(a==null?void 0:a.value)==""||(a==null?void 0:a.value)==null)return e.jsx("i",{className:"font-semibold ",children:"N/A"});if((a==null?void 0:a.value)!=null)return a==null?void 0:a.value}},{Header:"Applicant Name",accessor:"owner_name",Cell:a=>{if((a==null?void 0:a.value)==null||(a==null?void 0:a.value)==""||(a==null?void 0:a.value)==null)return e.jsx("i",{className:"font-semibold ",children:"N/A"});if((a==null?void 0:a.value)!=null)return a==null?void 0:a.value}},{Header:"Mobile No",accessor:"mobile_no",Cell:a=>{if((a==null?void 0:a.value)==null||(a==null?void 0:a.value)==""||(a==null?void 0:a.value)==null)return e.jsx("i",{className:"font-semibold ",children:"N/A"});if((a==null?void 0:a.value)!=null)return a==null?void 0:a.value}},{Header:"Address",accessor:"prop_address",Cell:a=>{if((a==null?void 0:a.value)==null||(a==null?void 0:a.value)==""||(a==null?void 0:a.value)==null)return e.jsx("i",{className:"font-semibold ",children:"N/A"});if((a==null?void 0:a.value)!=null)return a==null?void 0:a.value}},{Header:"Total Demand (in ₹)",accessor:"total_demand",Cell:a=>{if((a==null?void 0:a.value)==null||(a==null?void 0:a.value)==""||(a==null?void 0:a.value)==null)return e.jsx("i",{className:"font-semibold ",children:"N/A"});if((a==null?void 0:a.value)!=null)return a==null?void 0:a.value}},{Header:"Total Collection (in ₹)",accessor:"collection_amount",Cell:a=>{if((a==null?void 0:a.value)==null||(a==null?void 0:a.value)==""||(a==null?void 0:a.value)==null)return e.jsx("i",{className:"font-semibold ",children:"N/A"});if((a==null?void 0:a.value)!=null)return a==null?void 0:a.value}},{Header:"Total Remaining (in ₹)",accessor:"balance_amount",Cell:a=>{if((a==null?void 0:a.value)==null||(a==null?void 0:a.value)==""||(a==null?void 0:a.value)==null)return e.jsx("i",{className:"font-semibold ",children:"N/A"});if((a==null?void 0:a.value)!=null)return a==null?void 0:a.value}}];return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onChange:b.handleChange,onSubmit:b.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"wardId",id:"",className:I,children:[e.jsx("option",{value:"",children:"All"}),N==null?void 0:N.map(a=>e.jsx(e.Fragment,{children:e.jsx("option",{value:a==null?void 0:a.id,children:a==null?void 0:a.ward_name})}))]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(L,{})}),"Search"]})})]})]}),j!=null&&e.jsx(M,{type:"old",api:_,columns:D,requestBody:j,changeData:S}),e.jsx("div",{className:"h-[20vh]"})]})};export{r as default};
