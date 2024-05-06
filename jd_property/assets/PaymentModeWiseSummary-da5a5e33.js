import{a as B,_ as H,w as V,bu as Y,a$ as $,r as d,k as z,l as O,m as v,o as Q,A as b,aH as g,j as e,E as G,bN as J,bB as K}from"./index-259f1e14.js";const i=B.lazy(()=>H(()=>import("./PaymentModeWiseSummaryTable-6dc6a9f7.js"),["assets/PaymentModeWiseSummaryTable-6dc6a9f7.js","assets/index-259f1e14.js","assets/index-680cccd3.css"])),ae=()=>{const{api_wardByUlb:F,api_getAllUlb:_,propPaymentModeWiseSummary:M,safPaymentModeWiseSummary:P,get_collectorList:X}=K(),N=V(),{type:m,fDate:C,uDate:k,ulb:x}=Y();let A=new Date().toLocaleDateString("in-IN"),y=$(A).format("YYYY-DD-MM");const[p,E]=d.useState(),[h,Z]=d.useState(),[s,R]=d.useState(),[c,f]=d.useState(!1),[U,w]=d.useState(!0),[j,q]=d.useState([]),[D,L]=d.useState(!1),n="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md";z(`Payment mode wise ${m} summary`);const W=O({fromDate:v().required("Field Required"),uptoDate:v().required("Field Required"),ulbId:v().required("Select ULB")}),u=window.localStorage.getItem("ulbId"),t=Q({initialValues:{ulbId:x,fromDate:C,uptoDate:k,wardId:"",userId:"",paymentMode:""},onSubmit:a=>{I()},validationSchema:W}),I=()=>{f(!0);let a;m=="saf"?a={ulbId:t.values.ulbId,fromDate:t.values.fromDate,uptoDate:t.values.uptoDate,wardId:t.values.wardId,userId:t.values.userId,paymentMode:t.values.paymentMode}:a={ulbId:t.values.ulbId,fromDate:t.values.fromDate,uptoDate:t.values.uptoDate,wardId:t.values.wardId},b.post(U?M:P,a,g()).then(l=>{var o,r;((o=l==null?void 0:l.data)==null?void 0:o.status)==!0&&R((r=l==null?void 0:l.data)==null?void 0:r.data),f(!1)}).catch(l=>f(!1))};d.useEffect(()=>{u&&S(),!u&&T(),N.pathname=="/property-report"&&w(!0),N.pathname=="/saf-report"&&w(!1),x&&I()},[x]);const T=()=>{b.get(_,g()).then(a=>{var l,o;((l=a==null?void 0:a.data)==null?void 0:l.status)==!0&&q((o=a==null?void 0:a.data)==null?void 0:o.data)}).catch(a=>{}).finally(()=>L(!1))},S=a=>{b.post(F,{ulbId:a||u},g()).then(l=>{var o,r;((o=l==null?void 0:l.data)==null?void 0:o.status)==!0&&E((r=l==null?void 0:l.data)==null?void 0:r.data)}).catch(l=>{})};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onChange:t.handleChange,onSubmit:t.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Summary"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:t.values.fromDate,id:"",className:n,defaultValue:y})}),e.jsx("div",{className:"col-span-12 text-end",children:t.touched.fromDate&&t.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:t.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:t.values.uptoDate,id:"",className:n,defaultValue:y})}),e.jsx("div",{className:"col-span-12 text-end",children:t.touched.uptoDate&&t.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:t.errors.uptoDate})})})]}),!u&&e.jsxs("div",{className:"flex flex-col w-full md:w-[15%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Select ULB :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"ulbId",id:"",className:n,disabled:c,onChange:a=>S(a.target.value),children:[D?e.jsx("option",{disabled:!0,children:"Loading..."}):e.jsx("option",{value:"",children:"Select"}),j==null?void 0:j.map(a=>e.jsx("option",{value:a.id,children:a.ulb_name}))]})}),e.jsx("div",{className:"col-span-12 text-start",children:t.touched.ulbId&&t.errors.ulbId&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:t.errors.ulbId})})})]}),t.values.ulbId!=""&&e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"wardId",id:"",className:n,children:[D?e.jsx("option",{disabled:!0,children:"Loading..."}):e.jsx("option",{value:"",children:"Select"}),p==null?void 0:p.map(a=>e.jsx(e.Fragment,{children:e.jsx("option",{value:a==null?void 0:a.id,children:a==null?void 0:a.ward_name})}))]})})]}),m=="saf"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector Name :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:n,children:[e.jsx("option",{value:"",children:"All"}),h==null?void 0:h.map(a=>e.jsx(e.Fragment,{children:e.jsx("option",{value:a==null?void 0:a.id,children:e.jsx("span",{className:"capitalize",children:a==null?void 0:a.user_name})})}))]})}),e.jsx("div",{className:"col-span-12 text-end text-xs text-zinc-700 font-semibold",children:"select ward no to get collector name list"})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:n,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:c?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(G,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(J,{})}),"Search"]})})]})]}),!c&&s!=null&&(s==null?void 0:s.length)!=0?e.jsxs(e.Fragment,{children:[e.jsx(i,{data:s==null?void 0:s.collection,type:"collection"}),e.jsx(i,{data:s==null?void 0:s.doorToDoor,type:"doorToDoor"}),e.jsx(i,{data:s==null?void 0:s.jsk,type:"jsk"}),e.jsx(i,{data:s==null?void 0:s.netCollection,type:"netCollection"}),e.jsx(i,{data:s==null?void 0:s.refund,type:"refund"})]}):e.jsx(e.Fragment,{children:!c&&e.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),e.jsx("div",{className:"h-[20vh]"})]})};export{ae as default};
