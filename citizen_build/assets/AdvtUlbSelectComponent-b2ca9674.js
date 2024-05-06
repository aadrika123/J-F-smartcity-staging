import{j as e}from"./mui-8e804a04.js";import{r as n,u as f}from"./router-87042356.js";import{b as v}from"./index-19682a6e.js";import{M as o}from"./index-4e794517.js";import{a as p}from"./axios-97164839.js";import{S as j}from"./react-select.esm-782f188d.js";import{a as y}from"./ReuploadDocumentModal-3b2da93d.js";const w={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none"}};o.setAppElement("#root");function _(a){const[d,l]=n.useState(a==null?void 0:a.open),[c,m]=n.useState(),[t,i]=n.useState(null),{api_getUlbList:u}=y(),x=f();n.useEffect(()=>{g(),a.openUlbModal==0&&l(!0)},[a.openUlbModal]);const g=()=>{p.get(u,{},v()).then(s=>{console.log("ULB LIsts...",s.data),m(s.data.data)}).catch(s=>{console.log("Error while fetching ulblist",s)})};function h(){}function r(){l(!1),x(-1)}const b=()=>{if(t.id)console.log("Start Button Clicked.."),a==null||a.setUlbValues(t.id,t.ulb_name),l(!1);else return i(null)};return e.jsx("div",{className:"",children:e.jsx(o,{isOpen:d,onAfterOpen:h,onRequestClose:r,style:w,contentLabel:"Example Modal",children:e.jsx("div",{className:"container",children:e.jsx("div",{class:"relative w-full h-full max-w-3xl md:h-auto border-indigo-600 shadow-indigo-200 shadow-sm rounded",children:e.jsxs("div",{class:"relative bg-white rounded-lg shadow ",children:[e.jsxs("div",{class:"flex items-start justify-between p-4 border-b rounded-t darks:border-gray-600",children:[e.jsxs("h3",{class:"text-base md:text-xl font-semibold text-gray-900 darks:text-white",children:["Select ULB"," "]}),e.jsxs("button",{onClick:r,class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-600 darks:hover:text-white","data-modal-hide":"defaultModal",children:[e.jsx("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})}),e.jsx("span",{class:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{class:"p-6 space-y-6",children:e.jsx("p",{class:"md:text-base leading-relaxed text-gray-500 text-xs",children:"Before applying for a advertisement, you may need to select ulb in which you want to register for advertisement."})}),e.jsxs("div",{className:"block md:flex justify-center space-x-4",children:[e.jsx("div",{className:"font-semibold text-center max-sm:mb-2",children:"Please Select Your ULB"}),e.jsx("div",{className:"md:w-1/2 w-auto mr-5",children:e.jsx(j,{defaultValue:t,onChange:i,getOptionLabel:s=>s.ulb_name,getOptionValue:s=>s.id,options:[{id:2,ulb_name:"Ranchi Municipal Corporation"},{id:5,ulb_name:"Bundu Nagar Panchayat"},{id:27,ulb_name:"Khunti Nagar Panchayat"},{id:20,ulb_name:"Gumla Nagar Parishad"},{id:44,ulb_name:"Simdega Nagar Parishad"},{id:30,ulb_name:"Lohardaga Nagar Parishad"}],isClearable:!0,isLoading:!c})})]}),e.jsx("div",{className:"text-center max-sm:text-sm",children:t&&(t==null?void 0:t.id)!=""?e.jsxs("p",{children:["You are applying for",e.jsx("span",{className:"text-indigo-500 mx-2",children:t==null?void 0:t.ulb_name})," "]}):e.jsxs("p",{className:"text-red-500 py-2 mx-2 max-sm:text-sm",children:[" ","Please Select Your ULB"]})}),e.jsxs("div",{class:"flex flex-row-reverse items-center p-6 border-t border-gray-200 rounded-b",children:[e.jsx("button",{onClick:b,disabled:!(t!=null&&t.id),class:"mx-2 text-white  bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded leading-5 text-sm px-6 py-1 text-center darks:bg-indigo-600 darks:hover:bg-indigo-700 darks:focus:ring-indigo-800",children:"START"}),e.jsx("button",{onClick:r,class:"mx-2 text-red-400 hover:text-white  hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 rounded leading-5 border border-red-200 text-sm font-medium px-4 py-1 focus:z-10 ",children:"CANCEL"})]})]})})})})})}export{_ as A};
