import{r as c,u as se,O as re,c as te,a as f,b as oe,j as s,B as de,A as b,e as p,Q as v,o as n,g as ce}from"./index-21aade66.js";import{B as ie}from"./BottomErrorCard-c4e8289a.js";import{T as ne}from"./Tabs-277b6e58.js";function he(){const[k,y]=c.useState(!1),[V,E]=c.useState(null),[D,d]=c.useState(!1),[x,S]=c.useState([]),[ue,I]=c.useState([]),[g,P]=c.useState([]),[F,A]=c.useState([]),[C,me]=c.useState([]),[be,H]=c.useState([]),[a,L]=c.useState({}),[K,pe]=c.useState(""),{api_getClassFeeById:M,api_getadmissionMonthtypeData:B,api_editClassFee:q,api_finance_year:O,api_postClassFee:J,api_fetcActiveHeadList:R,api_fetchDiscoutGroupList:T,api_getactiveClassData:U,api_section_group_map:xe}=ce(),h=se(),{id:m}=re(),Y=te({classId:f().required("Select class."),feeHeadId:f().required("Select fee head."),discount:f().required("Enter discount %."),feeHeadId:f().required("Select Fee head head type")}),l=oe({initialValues:{classId:0,sectionId:0,feeHeadId:0,feeAmount:0,discount:0,janFee:0,febFee:0,marFee:0,aprFee:0,mayFee:0,junFee:0,julFee:0,augFee:0,sepFee:0,octFee:0,novFee:0,decFee:0},onSubmit:(e,r)=>{console.log("at submit ",e),$(e)},validationSchema:Y,enableReinitialize:!0}),$=e=>{d(!0);let r,t,u={classId:parseFloat(e==null?void 0:e.classId),sectionId:parseFloat(e==null?void 0:e.sectionId),feeHeadId:parseFloat(e==null?void 0:e.feeHeadId),feeAmount:parseFloat(e==null?void 0:e.feeAmount),discount:parseFloat(e==null?void 0:e.discount),janFee:parseFloat(e==null?void 0:e.janFee),febFee:parseFloat(e==null?void 0:e.febFee),marFee:parseFloat(e==null?void 0:e.marFee),aprFee:parseFloat(e==null?void 0:e.aprFee),mayFee:parseFloat(e==null?void 0:e.mayFee),junFee:parseFloat(e==null?void 0:e.junFee),julFee:parseFloat(e==null?void 0:e.julFee),augFee:parseFloat(e==null?void 0:e.augFee),sepFee:parseFloat(e==null?void 0:e.sepFee),octFee:parseFloat(e==null?void 0:e.octFee),novFee:parseFloat(e==null?void 0:e.novFee),decFee:parseFloat(e==null?void 0:e.decFee)};m!==void 0?(r=q,t=u,t.id=m):(r=J,t=u),b.post(r,t,p()).then(function(o){var _,N,w;console.log("view fee master..",(_=o==null?void 0:o.data)==null?void 0:_.data),(N=o==null?void 0:o.data)!=null&&N.status?h("/classfee-master"):v.error((w=o==null?void 0:o.data)==null?void 0:w.message),d(!1)}).catch(function(o){console.log("==2 error list...",o),v.error(o==null?void 0:o.message),d(!1)})},z=()=>{d(!0);let e={id:m};b.post(M,e,p()).then(function(r){var t,u,o;console.log("fetch edit data response..",(t=r==null?void 0:r.data)==null?void 0:t.data),(u=r==null?void 0:r.data)!=null&&u.status?G((o=r==null?void 0:r.data)==null?void 0:o.data):i(!0,"Error occured in submitting deactivation application. Please try again later."),d(!1)}).catch(function(r){console.log("= edit data error...",r),y(!0),d(!1)})},G=e=>{console.log("existing property details in prop address...",e),l.setFieldValue("classId",e==null?void 0:e.class_id),l.setFieldValue("sectionId",e==null?void 0:e.section_id),l.setFieldValue("feeHeadId",e==null?void 0:e.fee_head_id),l.setFieldValue("feeAmount",e==null?void 0:e.fee_amount),l.setFieldValue("discount",e==null?void 0:e.discount),l.setFieldValue("janFee",e==null?void 0:e.jan_fee),l.setFieldValue("febFee",e==null?void 0:e.feb_fee),l.setFieldValue("marFee",e==null?void 0:e.mar_fee),l.setFieldValue("aprFee",e==null?void 0:e.apr_fee),l.setFieldValue("mayFee",e==null?void 0:e.may_fee),l.setFieldValue("junFee",e==null?void 0:e.jun_fee),l.setFieldValue("julFee",e==null?void 0:e.jul_fee),l.setFieldValue("augFee",e==null?void 0:e.aug_fee),l.setFieldValue("sepFee",e==null?void 0:e.sep_fee),l.setFieldValue("octFee",e==null?void 0:e.oct_fee),l.setFieldValue("novFee",e==null?void 0:e.nov_fee),l.setFieldValue("decFee",e==null?void 0:e.dec_fee)},Q=()=>{b.post(R,{},p()).then(function(e){var r,t;(r=e==null?void 0:e.data)!=null&&r.status?S((t=e==null?void 0:e.data)==null?void 0:t.data):i(!0,"Error occured while fetching data."),d(!1)}).catch(function(e){console.log("==2 error list...",e),i(!0,"Error occured while fetching data.")})},W=()=>{b.post(T,{},p()).then(function(e){var r,t;(r=e==null?void 0:e.data)!=null&&r.status?I((t=e==null?void 0:e.data)==null?void 0:t.data):i(!0,"Error occured while fetching data."),d(!1)}).catch(function(e){console.log("==2 error list...",e),i(!0,"Error occured while fetching data.")})},X=()=>{b.post(U,{},p()).then(function(e){var r,t;(r=e==null?void 0:e.data)!=null&&r.status?A((t=e==null?void 0:e.data)==null?void 0:t.data):i(!0,"Error occured while fetching data."),d(!1)}).catch(function(e){console.log("==2 error list...",e),i(!0,"Error occured while fetching data.")})};console.log(C);const Z=()=>{d(!0),b.post(O,{},p()).then(function(e){e!=null&&e.data?(console.log(e==null?void 0:e.data),P(e==null?void 0:e.data)):i(!0,"Error occured while fetching data."),d(!1)}).catch(function(e){console.log("==2 error list...",e),i(!0,"Error occured while fetching data."),d(!1)})},ee=()=>{d(!0),b.post(B,{},p()).then(function(e){e!=null&&e.data?(console.log(e==null?void 0:e.data),H(e==null?void 0:e.data)):i(!0,"Error occured while fetching data."),d(!1)}).catch(function(e){console.log("==2 error list...",e),i(!0,"Error occured while fetching data."),d(!1)})};c.useEffect(()=>{ee(),Q(),W(),Z(),X(),m!==void 0&&z()},[]);let j;c.useEffect(()=>{let e=(parseFloat(l.values.janFee?l.values.janFee:0)+parseFloat(l.values.febFee?l.values.febFee:0)+parseFloat(l.values.marFee?l.values.marFee:0)+parseFloat(l.values.aprFee?l.values.aprFee:0)+parseFloat(l.values.mayFee?l.values.mayFee:0)+parseFloat(l.values.junFee?l.values.junFee:0)+parseFloat(l.values.julFee?l.values.julFee:0)+parseFloat(l.values.augFee?l.values.augFee:0)+parseFloat(l.values.sepFee?l.values.sepFee:0)+parseFloat(l.values.octFee?l.values.octFee:0)+parseFloat(l.values.novFee?l.values.novFee:0)+parseFloat(l.values.decFee?l.values.decFee:0))*(parseFloat(l.values.discount?l.values.discount:0)/100);j=parseFloat(l.values.janFee?l.values.janFee:0)+parseFloat(l.values.febFee?l.values.febFee:0)+parseFloat(l.values.marFee?l.values.marFee:0)+parseFloat(l.values.aprFee?l.values.aprFee:0)+parseFloat(l.values.mayFee?l.values.mayFee:0)+parseFloat(l.values.junFee?l.values.junFee:0)+parseFloat(l.values.julFee?l.values.julFee:0)+parseFloat(l.values.augFee?l.values.augFee:0)+parseFloat(l.values.sepFee?l.values.sepFee:0)+parseFloat(l.values.octFee?l.values.octFee:0)+parseFloat(l.values.novFee?l.values.novFee:0)+parseFloat(l.values.decFee?l.values.decFee:0)-e,l.setFieldValue("feeAmount",j)},[l.values.janFee,l.values.febFee,l.values.marFee,l.values.aprFee,l.values.mayFee,l.values.junFee,l.values.julFee,l.values.augFee,l.values.sepFee,l.values.octFee,l.values.novFee,l.values.decFee,l.values.discount]);const le=e=>{let r=e.target.name,t=e.target.value;if(r=="feeHeadId"){let u=e.target.selectedOptions[0].text,o=e.target.selectedOptions[0].value;ae(u,o);return}r=="janFee"&&l.setFieldValue("janFee",n(t,l.values.janFee,5)),r=="febFee"&&l.setFieldValue("febFee",n(t,l.values.febFee,5)),r=="marFee"&&l.setFieldValue("marFee",n(t,l.values.marFee,5)),r=="aprFee"&&l.setFieldValue("aprFee",n(t,l.values.aprFee,5)),r=="mayFee"&&l.setFieldValue("mayFee",n(t,l.values.mayFee,5)),r=="junFee"&&l.setFieldValue("junFee",n(t,l.values.junFee,5)),r=="julFee"&&l.setFieldValue("julFee",n(t,l.values.julFee,5)),r=="augFee"&&l.setFieldValue("augFee",n(t,l.values.augFee,5)),r=="sepFee"&&l.setFieldValue("sepFee",n(t,l.values.sepFee,5)),r=="octFee"&&l.setFieldValue("octFee",n(t,l.values.octFee,5)),r=="novFee"&&l.setFieldValue("novFee",n(t,l.values.novFee,5)),r=="decFee"&&l.setFieldValue("decFee",n(t,l.values.decFee,5))},ae=(e,r)=>{const t=x.find(u=>u.id==r);L(t)};console.log(a,K);const i=(e,r)=>{E(r),y(e)};return s.jsx(s.Fragment,{children:s.jsx("div",{className:"main-div",children:s.jsxs("div",{className:"main-inner-div",children:[D&&s.jsx(de,{}),k&&s.jsx(ie,{activateBottomErrorCard:i,errorTitle:V}),s.jsxs("div",{className:"main-sub-div",children:[s.jsx("div",{className:"main-sub-inner-div",children:s.jsxs("div",{className:"text-div",children:[s.jsx("div",{className:"big-text",children:"Class Fee Master Form"}),s.jsx("div",{className:"small-text text-teal-300",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]})}),m===void 0?s.jsx("div",{className:"tab-div",children:s.jsx("div",{className:"add-button-master-div",children:s.jsxs("button",{onClick:()=>h("/classfee-master-form"),type:"submit",className:" add-button-master bg-[#0F766E] hover:bg-[#0F766E]",children:["Add"," "]})})}):null]}),m!==void 0?"":s.jsx(ne,{listRoute:"/classfee-master",formRoute:"/classfee-master-form"}),s.jsx("div",{className:"details-div",children:s.jsx("span",{className:"detailes text-[#0F766E]",children:"Details of Class Fee Master"})}),s.jsx("div",{className:"form-div",children:s.jsx("form",{onSubmit:l.handleSubmit,onChange:le,children:s.jsxs("div",{className:"form",children:[s.jsxs("div",{className:"col-span-4 grid grid-cols-12",children:[s.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4 relative",children:[s.jsxs("label",{className:"form-label inline-block mb-1 text-teal-900 text-sm font-semibold",children:["Session Start",s.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),s.jsx("input",{...l.getFieldProps("monthName"),disabled:!0,type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 placeholder:text-gray-500 focus:text-gray-700 h-10 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"April"})]}),s.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4 relative",children:[s.jsxs("label",{className:"form-label inline-block mb-1 text-teal-900 text-sm font-semibold",children:["Financial Year",s.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),s.jsx("select",{...l.getFieldProps("fy"),type:"number",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 h-10 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Select class",children:g==null?void 0:g.map((e,r)=>s.jsx("option",{value:e==null?void 0:e.fy,children:e==null?void 0:e.fy}))}),s.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.fy&&l.errors.fy?l.errors.fy:null})]}),s.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4 relative",children:[s.jsxs("label",{className:"form-label inline-block mb-1 text-teal-900 text-sm font-semibold",children:["Class",s.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),s.jsxs("select",{...l.getFieldProps("classId"),type:"number",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 h-10 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Select class",children:[s.jsx("option",{value:"",children:"Select"}),F==null?void 0:F.map((e,r)=>s.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.class_name}))]}),s.jsx("span",{className:"text-red-600  text-xs",children:l.touched.classId&&l.errors.classId?l.errors.classId:null})]}),s.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4 relative",children:[s.jsxs("label",{className:"form-label inline-block mb-1 text-teal-900 text-sm font-semibold",children:["Select Fee Head",s.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),s.jsxs("select",{...l.getFieldProps("feeHeadId"),type:"number",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 h-10 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Select fee head",children:[s.jsx("option",{value:"",children:"Select"}),x==null?void 0:x.map((e,r)=>s.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.fee_head}))]}),s.jsx("span",{className:"text-red-600  text-xs",children:l.touched.feeHeadId&&l.errors.feeHeadId?l.errors.feeHeadId:null})]}),s.jsx("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4 relative",children:s.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[s.jsxs("label",{className:"form-label inline-block mb-1 text-teal-900 text-sm font-semibold",children:["Classwise Discount",s.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),s.jsx("input",{...l.getFieldProps("discount"),type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),className:"form-control block w-full px-3 h-10 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter discount"}),s.jsx("span",{className:"text-red-600  text-xs",children:l.touched.discount&&l.errors.discount?l.errors.discount:null})]})})]}),s.jsxs("div",{className:" w-full grid-cols-12 col-span-12 grid mt-1   max-[683px]:grid-cols-6",children:[s.jsxs("div",{className:"form-group mb-6 flex col-span-6  md:pr-4   max-[683px]:col-span-6 max-[683px]:block ",children:[s.jsxs("label",{className:"form-check-label text-gray-800 ml-2 w-full",children:[" ",s.jsx("span",{className:"inline text-gray-700",children:"April Fee"})]}),s.jsx("input",{...l.getFieldProps("aprFee"),onInput:e=>{l.setFieldValue("mayFee",e.target.value),l.setFieldValue("junFee",e.target.value),l.setFieldValue("julFee",e.target.value),l.setFieldValue("augFee",e.target.value),l.setFieldValue("sepFee",e.target.value),l.setFieldValue("octFee",e.target.value),l.setFieldValue("novFee",e.target.value),l.setFieldValue("decFee",e.target.value),l.setFieldValue("janFee",e.target.value),l.setFieldValue("febFee",e.target.value),l.setFieldValue("marFee",e.target.value)},type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),disabled:(a==null?void 0:a.fee_head_type_id)===4||(a==null?void 0:a.fee_head_type_id)===5,className:"disabled:border disabled:border-[#64748b] disabled:bg-[#e5e7eb] form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]}),s.jsxs("div",{className:"form-group mb-6 col-span-4  flex  md:pr-4  max-[683px]:col-span-6 max-[683px]:block ",children:[s.jsxs("label",{className:"form-check-label text-gray-800 ml-2 w-full",children:[" ",s.jsx("span",{className:"inline text-gray-700",children:"May Fee"})]}),s.jsx("input",{...l.getFieldProps("mayFee"),type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),disabled:(a==null?void 0:a.fee_head_type_id)===1||(a==null?void 0:a.fee_head_type_id)===3||(a==null?void 0:a.fee_head_type_id)===4||(a==null?void 0:a.fee_head_type_id)===5,className:"disabled:border disabled:border-[#64748b] disabled:bg-[#e5e7eb] form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]})]}),s.jsxs("div",{className:"w-full grid-cols-12 col-span-12 grid mt-1   max-[683px]:grid-cols-6",children:[s.jsxs("div",{className:"form-group mb-6 col-span-6  flex  md:pr-4  max-[683px]:col-span-6 max-[683px]:block ",children:[s.jsxs("label",{className:"form-check-label text-gray-800 ml-2 w-full",children:[" ",s.jsx("span",{className:"inline text-gray-700",children:"June Fee"})]}),s.jsx("input",{...l.getFieldProps("junFee"),type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),disabled:(a==null?void 0:a.fee_head_type_id)===1||(a==null?void 0:a.fee_head_type_id)===3||(a==null?void 0:a.fee_head_type_id)===5,className:"disabled:border disabled:border-[#64748b] disabled:bg-[#e5e7eb] form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]}),s.jsxs("div",{className:"form-group mb-6 col-span-4 md:pr-4 flex  max-[683px]:col-span-6 max-[683px]:block ",children:[s.jsxs("label",{className:"form-check-label text-gray-800 ml-2 w-full",children:[" ",s.jsx("span",{className:"inline text-gray-700",children:"July Fee"})]}),s.jsx("input",{...l.getFieldProps("julFee"),type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),disabled:(a==null?void 0:a.fee_head_type_id)===1||(a==null?void 0:a.fee_head_type_id)===3||(a==null?void 0:a.fee_head_type_id)===4||(a==null?void 0:a.fee_head_type_id)===5,className:"disabled:border disabled:border-[#64748b] disabled:bg-[#e5e7eb] form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]})]}),s.jsxs("div",{className:"w-full grid-cols-12 col-span-12 grid mt-1   max-[683px]:grid-cols-6",children:[s.jsxs("div",{className:"form-group mb-6 col-span-6 md:pr-4 flex  max-[683px]:col-span-6 max-[683px]:block ",children:[s.jsxs("label",{className:"form-check-label text-gray-800 ml-2 w-full",children:[" ",s.jsx("span",{className:"inline text-gray-700",children:"August Fee"})]}),s.jsx("input",{...l.getFieldProps("augFee"),type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),disabled:(a==null?void 0:a.fee_head_type_id)===1||(a==null?void 0:a.fee_head_type_id)===3||(a==null?void 0:a.fee_head_type_id)===4||(a==null?void 0:a.fee_head_type_id)===5,className:"disabled:border disabled:border-[#64748b] disabled:bg-[#e5e7eb] form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]}),s.jsxs("div",{className:"form-group mb-6 col-span-4 md:pr-4 flex  max-[683px]:col-span-6 max-[683px]:block ",children:[s.jsxs("label",{className:"form-check-label text-gray-800 ml-2 w-full",children:[" ",s.jsx("span",{className:"inline text-gray-700",children:"September Fee"})]}),s.jsx("input",{...l.getFieldProps("sepFee"),type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),disabled:(a==null?void 0:a.fee_head_type_id)===1||(a==null?void 0:a.fee_head_type_id)===3,className:"disabled:border disabled:border-[#64748b] disabled:bg-[#e5e7eb] form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]})]}),s.jsxs("div",{className:"w-full grid-cols-12 col-span-12 grid mt-1   max-[683px]:grid-cols-6",children:[s.jsxs("div",{className:"form-group mb-6 col-span-6 md:pr-4 flex  max-[683px]:col-span-6 max-[683px]:block ",children:[s.jsxs("label",{className:"form-check-label text-gray-800 ml-2 w-full",children:[" ",s.jsx("span",{className:"inline text-gray-700",children:"October Fee"})]}),s.jsx("input",{...l.getFieldProps("octFee"),type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),disabled:(a==null?void 0:a.fee_head_type_id)===1||(a==null?void 0:a.fee_head_type_id)===3||(a==null?void 0:a.fee_head_type_id)===4||(a==null?void 0:a.fee_head_type_id)===5,className:"disabled:border disabled:border-[#64748b] disabled:bg-[#e5e7eb] form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]}),s.jsxs("div",{className:"form-group mb-6 col-span-4 md:pr-4 flex  max-[683px]:col-span-6 max-[683px]:block ",children:[s.jsxs("label",{className:"form-check-label text-gray-800 w-full ml-2",children:[" ",s.jsx("span",{className:"inline text-gray-700",children:"November Fee"})]}),s.jsx("input",{...l.getFieldProps("novFee"),type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),disabled:(a==null?void 0:a.fee_head_type_id)===1||(a==null?void 0:a.fee_head_type_id)===3||(a==null?void 0:a.fee_head_type_id)===4||(a==null?void 0:a.fee_head_type_id)===5,className:"disabled:border disabled:border-[#64748b] disabled:bg-[#e5e7eb] form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]})]}),s.jsxs("div",{className:"w-full grid-cols-12 col-span-12 grid mt-1   max-[683px]:grid-cols-6",children:[s.jsxs("div",{className:"form-group mb-6 col-span-6 md:pr-4 flex  max-[683px]:col-span-6 max-[683px]:block ",children:[s.jsxs("label",{className:"form-check-label text-gray-800 ml-2 w-full",children:[" ",s.jsx("span",{className:"inline text-gray-700",children:"December Fee"})]}),s.jsx("input",{...l.getFieldProps("decFee"),type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),disabled:(a==null?void 0:a.fee_head_type_id)===1||(a==null?void 0:a.fee_head_type_id)===3||(a==null?void 0:a.fee_head_type_id)===5,className:"disabled:border disabled:border-[#64748b] disabled:bg-[#e5e7eb] form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]}),s.jsxs("div",{className:"form-group mb-6 col-span-4  flex  md:pr-4 max-[683px]:col-span-6 max-[683px]:block ",children:[s.jsxs("label",{className:"form-check-label text-gray-800 ml-2 w-full",children:[" ",s.jsx("span",{className:"inline text-gray-700",children:"January Fee"})]}),s.jsx("input",{...l.getFieldProps("janFee"),type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),disabled:(a==null?void 0:a.fee_head_type_id)===1||(a==null?void 0:a.fee_head_type_id)===3||(a==null?void 0:a.fee_head_type_id)===4||(a==null?void 0:a.fee_head_type_id)===5,className:"disabled:border disabled:border-[#64748b] disabled:bg-[#e5e7eb] form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]})]}),s.jsxs("div",{className:"  w-full grid-cols-12 col-span-12 grid mt-1  max-[683px]:grid-cols-6",children:[s.jsxs("div",{className:"form-group mb-6 col-span-6 flex  md:pr-4 max-[683px]:col-span-6 max-[683px]:block",children:[s.jsxs("label",{className:"form-check-label text-gray-800 ml-2 w-full",children:[" ",s.jsx("span",{className:"inline text-gray-700",children:"February Fee"})]}),s.jsx("input",{...l.getFieldProps("febFee"),type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),disabled:(a==null?void 0:a.fee_head_type_id)===1||(a==null?void 0:a.fee_head_type_id)===3||(a==null?void 0:a.fee_head_type_id)===4||(a==null?void 0:a.fee_head_type_id)===5,className:"disabled:border disabled:border-[#64748b] disabled:bg-[#e5e7eb] form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]}),s.jsxs("div",{className:"form-group mb-6 col-span-4  flex  md:pr-4  max-[683px]:col-span-6 max-[683px]:block ",children:[s.jsxs("label",{className:"form-check-label text-gray-800 ml-2 w-full",children:[" ",s.jsx("span",{className:"inline text-gray-700",children:"March Fee"})]}),s.jsx("input",{...l.getFieldProps("marFee"),type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),disabled:(a==null?void 0:a.fee_head_type_id)===1||(a==null?void 0:a.fee_head_type_id)===3,className:"disabled:border disabled:border-[#64748b] disabled:bg-[#e5e7eb] form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]})]}),s.jsxs("div",{className:"w-full grid-cols-12 col-span-12 grid mt-1 max-[464px]:grid-cols-6",children:[s.jsx("div",{className:"form-group mb-6 col-span-5 md:pr-4 flex justify-start max-[464px]:col-span-6",children:s.jsxs("label",{className:"form-check-label text-gray-800 ml-2 w-full",children:[" ",s.jsxs("span",{className:"inline text-gray-700",children:["Net Fee Amount",s.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]})]})})," ",s.jsxs("div",{className:"form-group mb-6 col-span-2 md:pr-4 flex max-[464px]:col-span-6",children:[s.jsx("input",{...l.getFieldProps("feeAmount"),type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),disabled:!0,className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md "}),s.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.feeAmount&&l.errors.feeAmount?l.errors.feeAmount:null})]})]}),s.jsxs("div",{className:"w-full grid-cols-12 col-span-12 grid mt-1 max-[464px]:grid-cols-6",children:[s.jsx("div",{className:" form-group mb-6 col-span-6 md:pr-4 flex  max-[464px]:justify-center ",children:s.jsx("button",{onClick:()=>h("/classfee-master"),type:"button",className:"deactivate-button-master bg-red-500 text-white py-2",children:"Back to List"})}),s.jsx("div",{className:"form-group mb-6 col-span-6 md:pr-4 flex justify-end max-[464px]:justify-center",children:s.jsx("button",{type:"submit",className:"cypress_next2_button submit-button bg-[#0F766E]",children:m!==void 0?"Update":"Save"})})]})]})})})]})})})}export{he as default};
