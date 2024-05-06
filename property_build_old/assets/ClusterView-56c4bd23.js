import{aA as ye,r as a,k as Se,u as Ce,bt as Ae,A as R,aH as W,j as l,B as He,S as Fe,aI as q,p as _e,ck as k,bm as x,bb as K,g as ke,cl as Le,aJ as $e,cm as Me,bQ as Be,aW as Te}from"./index-c73b3921.js";const Pe=()=>{const d=ye;return{getCluster:`${d}/api/property/cluster/get-all-clusters`,addCluster:`${d}/api/property/cluster/save-cluster-details`,viewCluster:`${d}/api/property/cluster/get-cluster-by-id`,updateCluster:`${d}/api/property/cluster/edit-cluster-details`,deleteCluster:`${d}/api/property/cluster/delete-cluster-data`,viewHolding:`${d}/api/property/cluster/holding-by-cluster`,searchHolding:`${d}/api/property/cluster/details-by-holding`,searchSaf:`${d}/api/property/cluster/get-saf-by-safno`,mapHoldingApi:`${d}/api/property/cluster/save-holding-in-cluster`,mapSafApi:`${d}/api/property/cluster/save-saf-in-cluster`}};const Ee=d=>{const[L,$]=a.useState(!1),[c,Q]=a.useState(""),[u,M]=a.useState("SAF"),[b,G]=a.useState(""),[N,De]=a.useState(!1),[m,J]=a.useState(),[o,X]=a.useState([]),[h,B]=a.useState([]),[f,j]=a.useState([]),[t,Y]=a.useState(),[T,Z]=a.useState(0),[p,w]=a.useState(!1),[ee,y]=a.useState(!1),[le,te]=a.useState(!1),[ae,S]=a.useState(!1),[ie,ne]=a.useState(null),[se,C]=a.useState(""),[de,A]=a.useState(null),[P,E]=a.useState(0);Se("Cluster Details View");const H=Ce(),D=e=>{$(!0),Q(e),j([]),B([])},F=()=>{$(!1),C(""),A(null),E(0)},ce=()=>{},{id:v}=Ae(),I="bg-indigo-500  text-white border border-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm transition-all duration-100 ease-in-out cursor-pointer text-sm",_="text-indigo-500 bg-white border border-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm transition-all duration-100 ease-in-out cursor-pointer text-sm",{mapHoldingApi:re,mapSafApi:ue,searchHolding:xe,searchSaf:me,viewCluster:oe}=Pe();a.useEffect(()=>{fe()},[T]);const fe=()=>{S(!1),w(!0),R.post(oe,{clusterId:v},W()).then(e=>{var n,i,r,s,z,V,U;(n=e==null?void 0:e.data)!=null&&n.status?(Y((r=(i=e==null?void 0:e.data)==null?void 0:i.data)==null?void 0:r.cluster),X((z=(s=e==null?void 0:e.data)==null?void 0:s.data)==null?void 0:z.Property),J((U=(V=e==null?void 0:e.data)==null?void 0:V.data)==null?void 0:U.Saf)):S(!0),w(!1)}).catch(e=>{S(!0),w(!1)})},he=()=>{if(b.length<4){g(!0,"Enter atleast 5 digits");return}c=="Holding"?(C(xe),A({holdingNo:b})):(C(me),A({safNo:b})),E(e=>e+1)},ve=[{Header:"S.No.",Cell:({row:e})=>l.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No.",accessor:"wardId",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:`${c} No.`,accessor:c=="Holding"?"holding_no":"saf_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Name",accessor:"ownerName",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No.",accessor:"mobileNo",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Address",accessor:"address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property Type",accessor:"propertyType",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Action",Cell:({row:e})=>l.jsx(l.Fragment,{children:l.jsx("div",{className:"space-x-2",children:l.jsx("button",{className:"bg-indigo-500 hover:bg-indigo-600 text-white rounded-md text-xs font-semibold py-1 px-2",onClick:()=>ge(e==null?void 0:e.index),children:"Select"})})})}],O=[{Header:"S.No.",Cell:({row:e})=>l.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:`${u} No.`,accessor:u=="Holding"?"holdingNo":"saf_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Name",accessor:"ownername",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No.",accessor:"mobileno",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property Type",accessor:"propertyType",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Address",accessor:"address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}],ge=e=>{c=="Holding"?je(e):be(e)},je=e=>{var n,i;f.includes((n=h[e])==null?void 0:n.holding_no)==!1&&j(r=>{var s;return[...r,(s=h[e])==null?void 0:s.holding_no]}),f.includes((i=h[e])==null?void 0:i.holding_no)&&g(!0,"Duplicate not allowed !!!")},be=e=>{var n,i;f.includes((n=h[e])==null?void 0:n.saf_no)==!1&&j(r=>{var s;return[...r,(s=h[e])==null?void 0:s.saf_no]}),f.includes((i=h[e])==null?void 0:i.saf_no)&&g(!0,"Duplicate not allowed !!!")},Ne=(e,n)=>{j(i=>i.filter((r,s)=>r!==e))},we=()=>{y(!0);let e=c=="Holding"?re:ue,n=c=="Holding"?{clusterId:v,holdingNo:[...new Set(f)]}:{clusterId:v,safNo:[...new Set(f)]};R.post(e,n,W()).then(i=>{var r,s;((r=i==null?void 0:i.data)==null?void 0:r.status)==!0&&(Te.success("Mapping successfull !!!"),F(),Z(T+1)),((s=i==null?void 0:i.data)==null?void 0:s.status)==!1&&g(!0,`Check out some ${c} no. already mapped or selected !!!`),y(!1)}).catch(i=>{y(!1),g(!0,"Error occured while mapping. Please try again later")})},g=(e,n)=>{ne(n),te(e)};return p?l.jsx(l.Fragment,{children:l.jsx(He,{})}):ae?l.jsx(Fe,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):l.jsxs(l.Fragment,{children:[ee&&l.jsx(q,{}),le&&l.jsx(_e,{activateBottomErrorCard:g,errorTitle:ie}),l.jsxs("div",{className:"flex  flex-col w-full text-zinc-800 h-[100vh] overflow-y-auto",children:[l.jsxs("div",{children:[l.jsx("div",{className:"flex flex-wrap justify-between",children:l.jsxs("div",{className:"flex items-center space-x-2 ",children:[l.jsx("span",{className:"font-extrabold",children:l.jsx(k,{})}),l.jsx("span",{className:"font-bold",children:"Basic Details"})]})}),l.jsxs("div",{className:"bg-white rounded-md shadow-lg w-full px-4 py-2.5 pb-4 mt-4 flex flex-wrap items-start flex-row gap-y-4",children:[l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[10rem]",children:[l.jsx("div",{className:"text-xs",children:"Old Ward No."}),l.jsx("div",{className:"text-sm font-semibold",children:x(t==null?void 0:t.ward_no)})]}),l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[10rem]",children:[l.jsx("div",{className:"text-xs",children:"New Ward No."}),l.jsx("div",{className:"text-sm font-semibold",children:x(t==null?void 0:t.new_ward_no)})]}),l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[15rem]",children:[l.jsx("div",{className:"text-xs",children:"Name"}),l.jsx("div",{className:"text-sm font-semibold",children:x(t==null?void 0:t.cluster_name)})]}),l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[10rem]",children:[l.jsx("div",{className:"text-xs",children:"Type"}),l.jsx("div",{className:"text-sm font-semibold",children:x(t==null?void 0:t.cluster_type)})]}),l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[10rem]",children:[l.jsx("div",{className:"text-xs",children:"Mobile No."}),l.jsx("div",{className:"text-sm font-semibold",children:x(t==null?void 0:t.mobile_no)})]}),l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[15rem]",children:[l.jsx("div",{className:"text-xs",children:"Authorized Person Name"}),l.jsx("div",{className:"text-sm font-semibold",children:x(t==null?void 0:t.authorized_person_name)})]}),l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[10rem]",children:[l.jsx("div",{className:"text-xs",children:"Created At"}),l.jsx("div",{className:"text-sm font-semibold",children:x(new Date(t==null?void 0:t.created_at).toLocaleDateString("en-GB"))})]}),l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[35rem]",children:[l.jsx("div",{className:"text-xs",children:"Address"}),l.jsx("div",{className:"text-sm font-semibold",children:x(t==null?void 0:t.address)})]})]})]}),l.jsxs("div",{className:"relative bg-white p-4 mt-8",children:[l.jsxs("div",{className:"flex flex-row flex-wrap justify-between",children:[l.jsxs("div",{className:"flex items-center space-x-2 mb-2 sm:mb-0",children:[l.jsxs("div",{className:(u=="SAF"?"border-2 border-indigo-600 shadow-indigo-400":"border-none")+" shadow-md rounded-md flex items-center space-x-2 px-4 py-2 cursor-pointer text-sm",onClick:()=>M("SAF"),children:[l.jsx("span",{className:"font-extrabold",children:l.jsx(k,{})}),l.jsx("span",{className:"font-semibold",children:"Mapped SAF List"})]}),l.jsxs("div",{className:(u=="Holding"?"border-2 border-indigo-600 shadow-indigo-400":"border-none")+" shadow-md rounded-md flex items-center space-x-2 px-4 py-2 cursor-pointer text-sm",onClick:()=>M("Holding"),children:[l.jsx("span",{className:"font-extrabold",children:l.jsx(k,{})}),l.jsx("span",{className:"font-semibold",children:"Mapped Holding List"})]})]}),u=="SAF"&&l.jsxs("div",{className:"flex items-center space-x-2 ",children:[l.jsx("div",{className:I,onClick:()=>D("SAF"),children:"Add SAF"}),(m==null?void 0:m.length)>0&&l.jsx("div",{onClick:()=>H(`/viewDemandCluster/${v}`),className:_,children:"View SAF Demand"})]}),u=="Holding"&&l.jsxs("div",{className:"flex items-center space-x-2 ",children:[l.jsx("div",{className:I,onClick:()=>D("Holding"),children:"Add Holding"}),(o==null?void 0:o.length)>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{onClick:()=>H(`/cluster-holding-transactions/${v}`),className:_,children:"View Payment History"}),l.jsx("div",{onClick:()=>H(`/viewDemandHoldingPropertyCluster/${v}`),className:_,children:"View Property Demand"})]})]})]}),l.jsx("div",{className:"mt-4",children:!N&&l.jsxs(l.Fragment,{children:[u=="Holding"&&l.jsx(l.Fragment,{children:(o==null?void 0:o.length)>0?l.jsx(K,{columns:O,dataList:o}):l.jsx("div",{className:"text-red-500 poppins font-semibold text-lg w-full text-center py-4",children:"No mapped holding available"})}),u=="SAF"&&l.jsx(l.Fragment,{children:(m==null?void 0:m.length)>0?l.jsx(K,{columns:O,dataList:m}):l.jsx("div",{className:"text-red-500 poppins font-semibold text-lg w-full text-center py-4",children:"No mapped SAF available"})})]})})]})]}),l.jsx(ke,{isOpen:L,onAfterOpen:ce,onRequestClose:F,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center overflow-auto",contentLabel:"Example Modal",children:l.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] h-[80vh] w-full relative bg-gray-50 px-6 py-4  border-t-2 border-l-2 overflow-auto",children:[N&&l.jsx(q,{}),l.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:F,children:l.jsx(Le,{fontSize:10})}),l.jsxs("h1",{className:"mb-2 mx-6 font-serif font-semibold  text-gray-600 text-lg",children:[l.jsx($e,{className:"inline mr-2"}),"Add ",c]}),l.jsxs("div",{className:"bg-white w-full px-4 py-6 rounded-md shadow-md mt-4 flex flex-row flex-wrap gap-y-2 justify-start gap-x-6 items-center",children:[l.jsxs("label",{htmlFor:"search",className:"poppins 2xl:text-md text-sm",children:["Enter atleast last 5 digits of ",c," number : "]}),l.jsx("input",{type:"text",name:"search",id:"search",className:"px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",onChange:e=>G(e.target.value)}),l.jsx("button",{className:"md:mt-1.5 px-6 py-1.5 cursor-pointer w-max bg-green-500 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-060 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out tracking-wide",onClick:()=>he(),children:"Search"})]}),l.jsxs("div",{className:"bg-white w-[100%] p-4 rounded-md shadow-md mt-4 flex flex-row flex-wrap gap-y-2 justify-start gap-x-6 items-center poppins",children:[l.jsxs("div",{className:" w-full flex flex-col md:flex-row md:items-center gap-2 border-b-2 border-gray-500 pb-2 mb-2",children:[l.jsxs("div",{className:"full text-sm md:w-[20%] w-full",children:["Selected ",c,"   :     "]}),l.jsxs("div",{className:"w-full md:w-[80%]",children:[l.jsx("div",{className:"flex flex-row flex-wrap gap-x-2 gap-y-1 h-10 px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[...new Set(f)].map((e,n)=>l.jsx("div",{className:"w-max",children:l.jsxs("span",{className:"bg-indigo-100 text-gray-800 flex flex-row items-cente poppins text-xs px-2 py-1.5 rounded-md font-semibold",children:[e," ",l.jsx(Me,{className:"inline text-red-600 font-semibold text-sm cursor-pointer hover:text-red-700",onClick:()=>Ne(e)})]})}))}),!N&&l.jsxs("button",{className:"md:mt-1.5 px-6 py-1.5 cursor-pointer w-max bg-green-500 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-060 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",onClick:()=>we(),children:["Map ",c]})]})]}),l.jsx("div",{className:"w-full",children:P>0&&l.jsx(Be,{getData:!0,allData:e=>B(e==null?void 0:e.data),api:se,columns:ve,requestBody:de,changeData:P})})]})]})}),l.jsx("div",{className:"h-[20vh]"})]})},Oe=Object.freeze(Object.defineProperty({__proto__:null,default:Ee},Symbol.toStringTag,{value:"Module"}));export{Pe as C,Ee as a,Oe as b};
