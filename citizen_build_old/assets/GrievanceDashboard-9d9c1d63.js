import{j as e}from"./mui-8e804a04.js";import{r as l,a as C,u as j}from"./router-87042356.js";import{C as G}from"./index.esm-61f3eeba.js";import{C as v}from"./CustomErrorBoundary-a255d819.js";import{m as w,A as N}from"./index-2435513d.js";import{h as k}from"./moment-fbc5633a.js";import{N as A}from"./NoDataFoundStyle1-7c7ae943.js";import{P as M}from"./PetRegAPIList-50db0381.js";import{M as E}from"./index-4e794517.js";import{G as y}from"./GrievanceApiList-f1509de8.js";import{G as _}from"./index.esm-2e3a7c1f.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./axios-97164839.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";const R={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none"}};function D(o){const{notify:r}=l.useContext(w),[a,i]=l.useState(),[x,c]=C.useState(!1),{api_grievanceGetApplicationDetails:t}=y(),m=o.viewModalId;l.useEffect(()=>{c(!0)},[]);function h(){}function n(){c(!1),o.setOpenViewModal(!1)}const p={headers:{Authorization:`Bearer ${window.localStorage.getItem("citizen_token")}`,Accept:"application/json"}},g=()=>{N.post(t,{status:1,applicationId:m},p).then(d=>{d.data.status?i(d.data.data):(r("Something Went wrong","error"),console.log("Error while application details"),n())}).catch(d=>{n(),r("Error While Fetching application data","error"),console.log("ERROR : Application Deletion",d)})};return l.useEffect(()=>{g()},[]),console.log("header",p),e.jsx("div",{className:"",children:e.jsx(E,{isOpen:x,onAfterOpen:h,onRequestClose:n,style:R,contentLabel:"Example Modal",children:e.jsxs("div",{className:"rounded-lg bg-sky-200 border shadow-xl text-gray-800 z-20  mx-auto",style:{width:"50vw",height:"70vh"},children:[e.jsx("p",{onClick:n,className:"absolute right-5 top-7 cursor-pointer rounded-md bg-sky-300 hover:bg-gray-200 mx-3",children:e.jsx(_,{size:25})}),e.jsx("div",{className:"flow-root",children:e.jsx("p",{className:"float-left text-center text-xl font-semibold mx-5 my-5 text-gray-700",children:" Grievance Application Details "})}),e.jsx("p",{className:"border-b "}),e.jsxs("div",{className:"flex justify-between bg-white m-5 rounded-md shadow-md p-5 border",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs",children:"Grievance No"}),e.jsx("p",{className:"text-sm font-semibold",children:a==null?void 0:a.application_no})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs",children:"Name"}),e.jsx("p",{className:"text-sm font-semibold",children:a==null?void 0:a.applicant_name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs",children:"Mobile No."}),e.jsx("p",{className:"text-sm font-semibold",children:a==null?void 0:a.mobile_no})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs",children:"Email"}),e.jsx("p",{className:"text-sm font-semibold",children:a==null?void 0:a.email})]})]}),e.jsxs("div",{className:" bg-white m-5 rounded-md shadow-md p-5 border space-y-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs",children:"Address"}),e.jsx("p",{className:"text-sm font-semibold",children:a==null?void 0:a.address})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs",children:"Grievance Description"}),e.jsx("p",{className:"text-sm font-semibold",children:a==null?void 0:a.description})]})]}),e.jsx("div",{className:"bg-white flex justify-center m-5 rounded-md shadow-md p-5 border",children:e.jsx("img",{className:"h-40 min-w-fit border",src:a==null?void 0:a.full_url,alt:"Uploaded Image",srcset:""})})]})})})}const S=()=>{const[o,r]=l.useState(null),[a,i]=l.useState(!1),[x,c]=l.useState(),[t,m]=l.useState(!1),[h,n]=l.useState(!1),{header:u}=M(),{api_grievanceGetActiveRejectApplication:p}=y();j();const g=s=>{r(o===s?null:s)},d=s=>{i(!0),c(s)},b=()=>{n(!0),N.post(p,{status:1},u).then(s=>{n(!1),s.data.status?(m(s.data.data),console.log("list of applied list",s.data.data)):console.log("Failed to get application list",s.data.data)}).catch(s=>{console.log("Error while getting applied list",s),n(!1)})};return l.useEffect(()=>{b()},[]),h?"Loading..":(t==null?void 0:t.length)===0?e.jsx(A,{message:"No Previous Grievance Found."}):e.jsxs(e.Fragment,{children:[a&&e.jsx(D,{setOpenViewModal:i,viewModalId:x}),e.jsxs("div",{className:"w-full ml-2 md:ml-0 mb-10",children:[e.jsxs("p",{className:"font-manrope md:my-4 ",children:["Total Applications ",e.jsx("span",{className:"font-semibold",children:t==null?void 0:t.length})]}),e.jsx("div",{className:"hidden md:block bg-gray-200 text-gray-700 py-3 font-semibold rounded-md",children:e.jsxs("div",{className:"grid grid-cols-12 items-center",children:[e.jsx("p",{className:"px-2 col-span-3 whitespace-nowrap",children:"Registration No"}),e.jsx("p",{className:"px-2 col-span-3",children:"Applicant Name"}),e.jsx("p",{className:"px-1 col-span-2",children:"Apply Through"}),e.jsx("p",{className:"px-2 col-span-2 whitespace-nowrap",children:"Apply Date"}),e.jsx("p",{className:"px-2 col-span-2"})]})}),e.jsx("div",{className:"overflow-y-auto h-screen mb-40 md:mr-0 mr-5 ",children:t&&(t==null?void 0:t.map((s,f)=>e.jsx("div",{className:"w-full border border-gray-300 rounded-md my-2 bg-white cursor-pointer",onClick:()=>g(f),children:e.jsxs("div",{className:" flex md:grid grid-cols-12 items-center justify-between border-b border-gray-100",children:[e.jsx("p",{className:"px-4 py-2 break-all font-manrope font-semibold col-span-3 text-xs md:text-base",children:s==null?void 0:s.application_no}),e.jsx("p",{className:"hidden md:block px-4 py-2 break-all col-span-3",children:s==null?void 0:s.applicant_name}),e.jsx("p",{className:"px-4 py-1 break-words flex col-span-2 text-xs md:text-base",children:s==null?void 0:s.apply_through_name}),e.jsx("p",{className:"hidden md:block px-4 py-2 col-span-2",children:k(s==null?void 0:s.apply_date,"YYYY-MM-DD").format("DD-MMM-yy")}),e.jsx("p",{className:"px-4 py-2 whitespace-nowrap text-right text-sm font-medium col-span-2",children:e.jsx("button",{type:"button",onClick:()=>d(s.id),className:"bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded shadow",children:"View Application"})})]})},s.index)))})]})]})},I=()=>{const[o,r]=l.useState(null),[a,i]=l.useState(!1),[x,c]=l.useState(),[t,m]=l.useState(!1),[h,n]=l.useState(!1),{header:u}=M(),{api_grievanceGetActiveRejectApplication:p}=y();j();const g=s=>{r(o===s?null:s)},d=s=>{i(!0),c(s)},b=()=>{n(!0),N.post(p,{status:0},u).then(s=>{n(!1),s.data.status?(m(s.data.data),console.log("list of applied list",s.data.data)):console.log("Failed to get application list",s.data.data)}).catch(s=>{console.log("Error while getting applied list",s),n(!1)})};return l.useEffect(()=>{b()},[]),h?"Loading..":(t==null?void 0:t.length)===0?e.jsx(A,{message:"No Previous Grievance Found."}):e.jsxs(e.Fragment,{children:[a&&e.jsx(D,{setOpenViewModal:i,viewModalId:x}),e.jsxs("div",{className:"w-full ml-2 md:ml-0 mb-10",children:[e.jsxs("p",{className:"font-manrope md:my-4 ",children:["Total Applications ",e.jsx("span",{className:"font-semibold",children:t==null?void 0:t.length})]}),e.jsx("div",{className:"hidden md:block bg-gray-200 text-gray-700 py-3 font-semibold rounded-md",children:e.jsxs("div",{className:"grid grid-cols-12 items-center",children:[e.jsx("p",{className:"px-2 col-span-3 whitespace-nowrap",children:"Registration No"}),e.jsx("p",{className:"px-2 col-span-3",children:"Applicant Name"}),e.jsx("p",{className:"px-1 col-span-2",children:"Apply Through"}),e.jsx("p",{className:"px-2 col-span-2 whitespace-nowrap",children:"Apply Date"}),e.jsx("p",{className:"px-2 col-span-2"})]})}),e.jsx("div",{className:"overflow-y-auto h-screen mb-40 md:mr-0 mr-5 ",children:t&&(t==null?void 0:t.map((s,f)=>e.jsx("div",{className:"w-full border border-gray-300 rounded-md my-2 bg-white cursor-pointer",onClick:()=>g(f),children:e.jsxs("div",{className:" flex md:grid grid-cols-12 items-center justify-between border-b border-gray-100",children:[e.jsx("p",{className:"px-4 py-2 break-all font-manrope font-semibold col-span-3 text-xs md:text-base",children:s==null?void 0:s.application_no}),e.jsx("p",{className:"hidden md:block px-4 py-2 break-all col-span-3",children:s==null?void 0:s.applicant_name}),e.jsx("p",{className:"px-4 py-1 break-words flex col-span-2 text-xs md:text-base",children:s==null?void 0:s.apply_through_name}),e.jsx("p",{className:"hidden md:block px-4 py-2 col-span-2",children:k(s==null?void 0:s.apply_date,"YYYY-MM-DD").format("DD-MMM-yy")}),e.jsx("p",{className:"px-4 py-2 whitespace-nowrap text-right text-sm font-medium col-span-2",children:e.jsx("button",{type:"button",onClick:()=>d(s.id),className:"bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded shadow",children:"View Application"})})]})},s.index)))})]})]})},Q=()=>{const[o,r]=l.useState(1),a=j(),{setBreadCrumbData:i}=l.useContext(w);return l.useEffect(()=>{i(["Grievance Dashboard"])},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex-1 md:flex items-center md:justify-between",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"md:text-3xl text-2xl text-gray-800 font-semibold ",children:" Grievance Dashboard"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500 ",children:"Here is list of all your registered grievances."})]}),e.jsx("div",{className:"space-x-1 ",children:e.jsx("button",{onClick:()=>a("/grievances/apply"),className:"rounded md:rounded-md bg-colorBase px-1 md:px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-colorBaseLight ",children:e.jsxs("span",{className:"flex text-sm md:text-base",children:[e.jsx("span",{className:"md:mt-1 mr-1",children:e.jsx(G,{size:17})}),"Register Grievance"]})})})]}),e.jsx("div",{className:"",children:e.jsxs("ul",{className:"max-w-screen-xl border-b  flex items-center gap-1 md:gap-x-6 text-xs md:text-sm",children:[e.jsx("li",{className:`whitespace-nowrap py-2 border-b-2 ${o==1?"text-indigo-500 border-indigo-500":"border-white text-gray-500"}  `,children:e.jsx("button",{onClick:()=>r(1),role:"tab",className:`flex  ${o==1?"":"bg-indigo-400 text-white"} items-center gap-x-2 py-2 px-2 rounded duration-150 hover:text-indigo-500 hover:bg-gray-50 active:bg-gray-100 font-medium`,children:"Current Grievances"})}),e.jsx("li",{className:`whitespace-nowrap py-2 border-b-2 ${o==2?"text-indigo-500 border-indigo-500":"border-white text-gray-500"}  `,children:e.jsx("button",{onClick:()=>r(2),role:"tab",className:`flex  ${o==2?"":"bg-indigo-400 text-white"} items-center gap-x-2 py-2 px-2 rounded duration-150 hover:text-indigo-500 hover:bg-gray-50 active:bg-gray-100 font-medium`,children:"Resolved Grievances"})})]})}),e.jsx("div",{children:e.jsx("section",{className:"container mx-auto py-4",children:e.jsxs("div",{children:[o==1&&e.jsx(v,{errorMsg:"Error Data Loading..",children:e.jsx(S,{})}),o==2&&e.jsx(v,{errorMsg:"Error Data Loading..",children:e.jsx(I,{})})]})})})]})})};export{Q as default};
