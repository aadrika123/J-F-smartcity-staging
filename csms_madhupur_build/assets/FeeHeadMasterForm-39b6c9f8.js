import{r as m,u as L,O as q,c as A,a as x,b as M,j as t,B as P,A as h,e as b,K as $,y as D,g as O}from"./index-21aade66.js";import{B as R}from"./BottomErrorCard-c4e8289a.js";import{T as J}from"./Tabs-277b6e58.js";function z(){const[j,p]=m.useState(!1),[v,N]=m.useState(null),[H,r]=m.useState(!1),[u,F]=m.useState([]),{api_editHead:T,api_postHead:I,api_getHeadById:E,api_fetcHeadTypeList:S}=O(),f=L(),{id:o}=q(),_=A({feeHead:x().required("Enter fee head."),feeHeadTypeId:x().required("Select fee head type"),description:x().required("Enter description.")}),s=M({initialValues:{feeHead:"",feeHeadTypeId:"",description:""},onSubmit:(e,a)=>{console.log("at submit ",e),w(e)},validationSchema:_}),w=e=>{r(!0);let a,i,d={feeHeadTypeId:e.feeHeadTypeId,feeHead:e==null?void 0:e.feeHead,description:e==null?void 0:e.description};o!==void 0?(a=T,i=d,i.id=o,i.status="active"):(a=I,i=d),h.post(a,i,b()).then(function(l){var n,g,y;console.log("view fee master..",(n=l==null?void 0:l.data)==null?void 0:n.data),(g=l==null?void 0:l.data)!=null&&g.status?f("/feehead-master"):c(!0,`${(y=l==null?void 0:l.data)==null?void 0:y.message}`),r(!1)}).catch(function(l){console.log("==2 error list...",l),c(!0,"Error occured in submitting form."),r(!1)})},k=()=>{r(!0);let e={id:o};h.post(E,e,b()).then(function(a){var i,d,l,n;console.log("fetch edit data response..",(i=a==null?void 0:a.data)==null?void 0:i.data),(d=a==null?void 0:a.data)!=null&&d.status?B((l=a==null?void 0:a.data)==null?void 0:l.data):c(!0,`${(n=a==null?void 0:a.data)==null?void 0:n.message}`),r(!1)}).catch(function(a){console.log("= edit data error...",a),p(!0),r(!1)})},B=e=>{console.log("existing property details in prop address...",e),s.setFieldValue("id",e==null?void 0:e.id),s.setFieldValue("feeHead",e==null?void 0:e.fee_head),s.setFieldValue("feeHeadTypeId",e==null?void 0:e.fee_head_type_id),s.setFieldValue("feeHeadType",e==null?void 0:e.fee_head_type),s.setFieldValue("description",e==null?void 0:e.description)},C=()=>{h.post(S,{},b()).then(function(e){var a,i,d;(a=e==null?void 0:e.data)!=null&&a.status?F((i=e==null?void 0:e.data)==null?void 0:i.data):c(!0,`${(d=e==null?void 0:e.data)==null?void 0:d.message}`),r(!1)}).catch(function(e){console.log("==2 error list...",e),c(!0,"Error occured while fetching data.")})};m.useEffect(()=>{C(),o!==void 0&&k()},[]),console.log(u);const V=e=>{let a=e.target.name,i=e.target.value;a=="feeHead"&&s.setFieldValue("feeHead",$(i,s.values.feeHead,50)),a=="feeHeadTypeId"&&s.setFieldValue("feeHeadTypeId",D(i,s.values.feeHeadTypeId,200))},c=(e,a)=>{N(a),p(e)};return t.jsx(t.Fragment,{children:t.jsx("div",{className:"main-div",children:t.jsxs("div",{className:"main-inner-div",children:[H&&t.jsx(P,{}),j&&t.jsx(R,{activateBottomErrorCard:c,errorTitle:v}),t.jsxs("div",{className:"main-sub-div",children:[t.jsx("div",{className:"main-sub-inner-div",children:t.jsxs("div",{className:"text-div",children:[t.jsx("div",{className:"big-text",children:"Fee Head Master Form"}),t.jsx("div",{className:"small-text",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]})}),o===void 0?t.jsx("div",{className:"tab-div",children:t.jsx("div",{className:"add-button-master-div",children:t.jsx("button",{onClick:()=>f("/feehead-master-form"),type:"submit",className:" add-button-master",children:"Add "})})}):null]}),o!==void 0?"":t.jsx(J,{listRoute:"/feehead-master",formRoute:"/feehead-master-form"}),t.jsx("div",{className:"details-div",children:t.jsx("span",{className:"detailes",children:"Details of Fee Head Master"})}),t.jsx("div",{className:"form-div",children:t.jsx("form",{onSubmit:s.handleSubmit,onChange:V,children:t.jsxs("div",{className:"form",children:[t.jsxs("div",{className:"col-span-4 grid grid-cols-12",children:[t.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Fee Head Type",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsxs("select",{...s.getFieldProps("feeHeadTypeId"),type:"text",className:"form-control h-10 block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Select fee head type",children:[t.jsx("option",{value:"",children:"Select"}),u==null?void 0:u.map((e,a)=>t.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.fee_head_type}))]}),t.jsx("span",{className:"text-red-600  text-xs",children:s.touched.feeHeadTypeId&&s.errors.feeHeadTypeId?s.errors.feeHeadTypeId:null})]}),t.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Fee Head",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsx("input",{...s.getFieldProps("feeHead"),type:"text",className:"form-control h-10 block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter fee head"}),t.jsx("span",{className:"text-red-600 text-xs",children:s.touched.feeHead&&s.errors.feeHead?s.errors.feeHead:null})]}),t.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Description",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsx("input",{...s.getFieldProps("description"),type:"text",className:"form-control h-10 block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter description"}),t.jsx("span",{className:"text-red-600 text-xs",children:s.touched.description&&s.errors.description?s.errors.description:null})]})]}),t.jsxs("div",{className:"cancel-button-div",children:[t.jsx("div",{className:"    ",children:t.jsx("button",{onClick:()=>f("/feehead-master"),type:"button",className:"cancel-button",children:"Back to List"})}),t.jsx("div",{className:"submit-button-div",children:t.jsx("button",{type:"submit",className:" cypress_next2_button submit-button",children:o!==void 0?"Update":"Save"})})]})]})})})]})})})}export{z as default};
