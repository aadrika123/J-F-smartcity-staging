import{r as c,u as B,b as r,F as t,j as e,a as C}from"./index-ace27d6f.js";import{u as _}from"./formik.esm-70d5e597.js";import{c as F,a as u}from"./index.esm-70f5a44d.js";import{R as k}from"./index.esm-51a9e10c.js";import{W as A}from"./WaterApiList-1274c4b1.js";import D from"./CommonLoader-b1db4592.js";import"./BeatLoader-dab182db.js";function R(){const[p,o]=c.useState(),[g,n]=c.useState(!1),[d,b]=c.useState([]),{api_waterSearchConsumer:f,header:N}=A(),v=B(),y=a=>{n(!0);const i={filterBy:l.values.filterBy,parameter:l.values.parameter};C.post(f,i,N).then(s=>{var h,m,x;(h=s==null?void 0:s.data)!=null&&h.status&&b((x=(m=s==null?void 0:s.data)==null?void 0:m.data)==null?void 0:x.data),n(!1)}).catch(s=>{n(!1)})},w=F({filterBy:u().required("This is a required field !"),parameter:u().required("This is a required field !")}),l=_({initialValues:{filterBy:"",parameter:""},onSubmit:a=>{y()},validationSchema:w}),S=a=>{l.values.filterBy=a.target.value,a.target.value=="holdingNo"&&o("Holding No"),a.target.value=="ownerDetails"&&o("Owner Details"),a.target.value=="address"&&o("Address")};return r(t,{children:[g&&e(D,{}),e("div",{className:"text-center font-bold text-gray-700 text-lg border-b-2 border-gray-700 mx-4 mb-4",children:e("p",{children:" Search Water Consumer "})}),r("div",{className:"mt-6",children:[e("div",{className:"flex ml-5 mt-2 "}),e("form",{onSubmit:l.handleSubmit,children:r("div",{className:"justify-center my-5 m-10",children:[r("div",{children:[r("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Filter By",e("span",{className:"text-red-500",children:"*"})]}),r("select",{name:"filterBy",onChange:S,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e("option",{value:"",children:"Select"}),e("option",{value:"consumerNo",children:"Consumer No"}),e("option",{value:"holdingNo",children:"Holding No"}),e("option",{value:"safNo",children:"SAF No"}),e("option",{value:"applicantName",children:"Applicant Name"}),e("option",{value:"mobileNo",children:"Mobile No"})]}),e("p",{className:"text-red-500 text-xs",children:l.touched.filterBy&&l.errors.filterBy?l.errors.filterBy:null})]}),r("div",{children:[r("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Search By ",p," ",e("span",{className:"text-red-500",children:"*"})]}),e("input",{type:"text",name:"parameter",onChange:l.handleChange,className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("p",{className:"text-red-500 text-xs",children:l.touched.parameter&&l.errors.parameter?l.errors.parameter:null})]}),e("div",{className:"mt-4",children:e("button",{type:"submit",className:"w-full border border-indigo-600 bg-indigo-600 hover:bg-indigo-700 text-gray-200 hover:text-white shadow-lg rounded-sm text-base font-semibold  py-1",children:r("p",{className:"flex justify-center",children:[" ",r("span",{className:"mt-1 mx-2",children:[" ",e(k,{})," "]})," ","Search record"," "]})})})]})}),e("div",{className:"mt-10 mx-4",children:d?r("div",{className:"w-full relative bg-indigo-50 shadow-md  rounded-sm pb-2 border-2 border-indigo-600 mb-4 select-none cursor-pointer",children:[e("div",{className:"font-semibold bg-indigo-600 px-4 text-white",children:"Consumer Details"}),e("div",{className:"w-full rounded-lg space-b-2",children:e("div",{className:"",children:d&&d.map((a,i)=>r("div",{children:[r("div",{className:"w-full md:w-[40%] grid grid-cols-12 p-4",children:[r(t,{children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Consumer No"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-sm",children:a==null?void 0:a.consumer_no})]}),(a==null?void 0:a.holding_no)&&r(t,{children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Holding No"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-sm",children:a==null?void 0:a.holding_no})]}),(a==null?void 0:a.saf_no)&&r(t,{children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Saf No"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-sm",children:a==null?void 0:a.saf_no})]}),r(t,{children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Applicant Name"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-sm",children:a==null?void 0:a.applicant_name})]}),r(t,{children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Guardian Name"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-sm",children:a==null?void 0:a.guardian_name})]}),r(t,{children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Mobile No"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-sm",children:a==null?void 0:a.mobile_no})]}),r(t,{children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Address"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-sm",children:a==null?void 0:a.address})]})]},i),e("div",{className:"float-right -mt-4 -pl-1",children:e("button",{onClick:()=>v(`/water-consumer-view/${a==null?void 0:a.id}`),className:"px-3 mt-1 rounded-l-sm -mr-0.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm",children:"Click to View"})})]}))})})]}):e("div",{})})]})]})}export{R as default};
