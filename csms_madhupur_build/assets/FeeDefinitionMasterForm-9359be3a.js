import{r as x,u as I,O as C,c as D,a as o,b as M,j as r,B as A,A as p,e as b,o as i,g as J}from"./index-21aade66.js";import{B as R}from"./BottomErrorCard-c4e8289a.js";import{T}from"./Tabs-277b6e58.js";function Y(){const[y,F]=x.useState(!1),[j,B]=x.useState(null),[N,d]=x.useState(!1),[m,w]=x.useState([]),{api_getClassFeeDefById:v,api_editClassFeeDef:V,api_postClassFeeDef:_,api_getClassData:E}=J(),f=I(),{id:c}=C(),k=D({classId:o().required("Enter fee head type."),janFee:o().required("Enter fee."),febFee:o().required("Enter fee."),marchFee:o().required("Enter fee."),aprilFee:o().required("Enter fee."),mayFee:o().required("Enter fee."),juneFee:o().required("Enter fee."),julyFee:o().required("Enter fee."),augFee:o().required("Enter fee."),septFee:o().required("Enter fee."),OctFee:o().required("Enter fee."),novFee:o().required("Enter fee."),decFee:o().required("Enter fee."),janBusFee:o().required("Enter bus fee."),febBusFee:o().required("Enter bus fee."),marchBusFee:o().required("Enter bus fee."),aprilBusFee:o().required("Enter bus fee."),mayBusFee:o().required("Enter bus fee."),juneBusFee:o().required("Enter bus fee."),julyBusFee:o().required("Enter bus fee."),augBusFee:o().required("Enter bus fee."),septBusFee:o().required("Enter bus fee."),octBusFee:o().required("Enter bus fee."),novBusFee:o().required("Enter bus fee."),decBusFee:o().required("Enter bus fee.")}),s=M({initialValues:{classId:"",janFee:"",febFee:"",marchFee:"",aprilFee:"",mayFee:"",juneFee:"",julyFee:"",augFee:"",septFee:"",OctFee:"",novFee:"",decFee:"",janBusFee:"",febBusFee:"",marchBusFee:"",aprilBusFee:"",mayBusFee:"",juneBusFee:"",julyBusFee:"",augBusFee:"",septBusFee:"",octBusFee:"",novBusFee:"",decBusFee:""},onSubmit:(e,l)=>{console.log("at submit ",e),q(e)},validationSchema:k}),q=e=>{d(!0);let l,t,u={classId:e==null?void 0:e.classId,janFee:e==null?void 0:e.janFee,febFee:e==null?void 0:e.febFee,marFee:e==null?void 0:e.marchFee,aprFee:e==null?void 0:e.aprilFee,mayFee:e==null?void 0:e.mayFee,junFee:e==null?void 0:e.juneFee,julFee:e==null?void 0:e.julyFee,augFee:e==null?void 0:e.augFee,sepFee:e==null?void 0:e.septFee,octFee:e==null?void 0:e.OctFee,novFee:e==null?void 0:e.novFee,decFee:e==null?void 0:e.decFee,janBusFee:e==null?void 0:e.janBusFee,febBusFee:e==null?void 0:e.febBusFee,marBusFee:e==null?void 0:e.marchBusFee,aprBusFee:e==null?void 0:e.aprilBusFee,mayBusFee:e==null?void 0:e.mayBusFee,junBusFee:e==null?void 0:e.juneBusFee,julBusFee:e==null?void 0:e.julyBusFee,augBusFee:e==null?void 0:e.augBusFee,sepBusFee:e==null?void 0:e.septBusFee,octBusFee:e==null?void 0:e.octBusFee,novBusFee:e==null?void 0:e.novBusFee,decBusFee:e==null?void 0:e.decBusFee};c!==void 0?(l=V,t=u,t.id=c):(l=_,t=u),console.log("before submit definition",t),p.post(l,t,b()).then(function(n){var g,h;console.log("view fee master..",(g=n==null?void 0:n.data)==null?void 0:g.data),(h=n==null?void 0:n.data)!=null&&h.status?f("/feedefinition-master"):a(!0,"Error occured in submitting form."),d(!1)}).catch(function(n){console.log("==2 error list...",n),a(!0,"Error occured in submitting form."),d(!1)})},P=()=>{d(!0);let e={id:c};p.post(v,e,b()).then(function(l){var t,u,n;console.log("fetch edit data response..",(t=l==null?void 0:l.data)==null?void 0:t.data),(u=l==null?void 0:l.data)!=null&&u.status?L((n=l==null?void 0:l.data)==null?void 0:n.data):a(!0,"Error occured in submitting deactivation application. Please try again later."),d(!1)}).catch(function(l){console.log("= edit data error...",l),F(!0),d(!1)})},L=e=>{console.log("existing property details in prop address...",e),s.setFieldValue("classId",e==null?void 0:e.class_id),s.setFieldValue("janFee",e==null?void 0:e.feb_fee),s.setFieldValue("febFee",e==null?void 0:e.mar_fee),s.setFieldValue("marchFee",e==null?void 0:e.mar_fee),s.setFieldValue("aprilFee",e==null?void 0:e.apr_fee),s.setFieldValue("mayFee",e==null?void 0:e.may_fee),s.setFieldValue("juneFee",e==null?void 0:e.jun_fee),s.setFieldValue("julyFee",e==null?void 0:e.jul_fee),s.setFieldValue("augFee",e==null?void 0:e.aug_fee),s.setFieldValue("septFee",e==null?void 0:e.sep_fee),s.setFieldValue("OctFee",e==null?void 0:e.oct_fee),s.setFieldValue("novFee",e==null?void 0:e.nov_fee),s.setFieldValue("decFee",e==null?void 0:e.dec_fee),s.setFieldValue("janBusFee",e==null?void 0:e.jan_bus_fee),s.setFieldValue("febBusFee",e==null?void 0:e.feb_bus_fee),s.setFieldValue("marchBusFee",e==null?void 0:e.mar_bus_fee),s.setFieldValue("aprilBusFee",e==null?void 0:e.apr_bus_fee),s.setFieldValue("mayBusFee",e==null?void 0:e.may_bus_fee),s.setFieldValue("juneBusFee",e==null?void 0:e.jun_bus_fee),s.setFieldValue("julyBusFee",e==null?void 0:e.jul_bus_fee),s.setFieldValue("augBusFee",e==null?void 0:e.aug_bus_fee),s.setFieldValue("septBusFee",e==null?void 0:e.sep_bus_fee),s.setFieldValue("octBusFee",e==null?void 0:e.oct_bus_fee),s.setFieldValue("novBusFee",e==null?void 0:e.nov_bus_fee),s.setFieldValue("decBusFee",e==null?void 0:e.dec_bus_fee)},O=()=>{p.post(E,{},b()).then(function(e){var l,t;(l=e==null?void 0:e.data)!=null&&l.status?w((t=e==null?void 0:e.data)==null?void 0:t.data):a(!0,"Error occured while fetching data."),d(!1)}).catch(function(e){console.log("==2 error list...",e),a(!0,"Error occured while fetching data.")})};x.useEffect(()=>{O(),c!==void 0&&P()},[]);const S=e=>{let l=e.target.name,t=e.target.value;l=="classId"&&s.setFieldValue("classId",i(t,s.values.classId,8)),l=="janFee"&&s.setFieldValue("janFee",i(t,s.values.janFee,8)),l=="febFee"&&s.setFieldValue("febFee",i(t,s.values.febFee,8)),l=="marchFee"&&s.setFieldValue("marchFee",i(t,s.values.marchFee,8)),l=="aprilFee"&&s.setFieldValue("aprilFee",i(t,s.values.aprilFee,8)),l=="mayFee"&&s.setFieldValue("mayFee",i(t,s.values.mayFee,8)),l=="juneFee"&&s.setFieldValue("juneFee",i(t,s.values.juneFee,8)),l=="julyFee"&&s.setFieldValue("julyFee",i(t,s.values.julyFee,8)),l=="augFee"&&s.setFieldValue("augFee",i(t,s.values.augFee,8)),l=="septFee"&&s.setFieldValue("septFee",i(t,s.values.septFee,8)),l=="OctFee"&&s.setFieldValue("OctFee",i(t,s.values.OctFee,8)),l=="novFee"&&s.setFieldValue("novFee",i(t,s.values.novFee,8)),l=="decFee"&&s.setFieldValue("decFee",i(t,s.values.decFee,8)),l=="janBusFee"&&s.setFieldValue("janBusFee",i(t,s.values.janBusFee,8)),l=="febBusFee"&&s.setFieldValue("febBusFee",i(t,s.values.febBusFee,8)),l=="marchBusFee"&&s.setFieldValue("marchBusFee",i(t,s.values.marchBusFee,8)),l=="aprilBusFee"&&s.setFieldValue("aprilBusFee",i(t,s.values.aprilBusFee,8)),l=="mayBusFee"&&s.setFieldValue("mayBusFee",i(t,s.values.mayBusFee,8)),l=="juneBusFee"&&s.setFieldValue("juneBusFee",i(t,s.values.juneBusFee,8)),l=="julyBusFee"&&s.setFieldValue("julyBusFee",i(t,s.values.julyBusFee,8)),l=="augBusFee"&&s.setFieldValue("augBusFee",i(t,s.values.augBusFee,8)),l=="septBusFee"&&s.setFieldValue("septBusFee",i(t,s.values.septBusFee,8)),l=="octBusFee"&&s.setFieldValue("octBusFee",i(t,s.values.octBusFee,8)),l=="novBusFee"&&s.setFieldValue("novBusFee",i(t,s.values.novBusFee,8)),l=="decBusFee"&&s.setFieldValue("decBusFee",i(t,s.values.decBusFee,8))},a=(e,l)=>{B(l),F(e)};return r.jsx(r.Fragment,{children:r.jsx("div",{className:"main-div",children:r.jsxs("div",{className:"main-inner-div",children:[N&&r.jsx(A,{}),y&&r.jsx(R,{activateBottomErrorCard:a,errorTitle:j}),r.jsxs("div",{className:"main-sub-div",children:[r.jsx("div",{className:"main-sub-inner-div",children:r.jsxs("div",{className:"text-div",children:[r.jsx("div",{className:"big-text",children:"Fee Definition Master Form"}),r.jsx("div",{className:"small-text",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]})}),c===void 0?r.jsx("div",{className:"tab-div",children:r.jsx("div",{className:"add-button-master-div",children:r.jsx("button",{onClick:()=>f("/feedefinition-master-form"),type:"submit",className:" add-button-master",children:"Add "})})}):null]}),c!==void 0?"":r.jsx(T,{listRoute:"/feedefinition-master",formRoute:"/feedefinition-master-form"}),r.jsx("div",{className:"details-div",children:r.jsx("span",{className:"detailes",children:"Details of Fee Difinition Master"})}),r.jsx("div",{className:"form-div",children:r.jsx("form",{onSubmit:s.handleSubmit,onChange:S,children:r.jsxs("div",{className:"form",children:[r.jsx("div",{className:"col-span-4 grid grid-cols-12",children:r.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4 relative",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Class",r.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),r.jsxs("select",{...s.getFieldProps("classId"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Select class",children:[r.jsx("option",{value:"",children:"Select"}),m==null?void 0:m.map((e,l)=>r.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.class_name}))]}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.classId&&s.errors.classId?s.errors.classId:null})]})}),r.jsx("div",{className:"border-b border-gray-200 col-span-12 mb-2"}),r.jsx("div",{className:"col-span-8 grid grid-cols-12 mt-1",children:r.jsxs("div",{className:"form-group mb-6 col-span-10 md:pr-4 flex",children:[r.jsx("div",{className:"flex-1",children:"Month"}),r.jsx("div",{className:"flex-1",children:"School Fee"}),r.jsx("div",{className:"flex-1",children:"Bus Fee"})]})}),r.jsx("div",{className:"col-span-8 grid grid-cols-12 mt-1",children:r.jsxs("div",{className:"form-group mb-6 col-span-10 md:pr-4 flex",children:[r.jsxs("div",{className:"flex-1",children:["  ",r.jsx("div",{className:"w-10 h-10 bg-cyan-50 rounded-full inline-flex justify-center items-center shadow-xl font-semibold text-[#08625d] mr-2",children:"J"}),"January Levied"]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("janFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.janFee&&s.errors.janFee?s.errors.janFee:null})]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("janBusFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.janBusFee&&s.errors.janBusFee?s.errors.janBusFee:null})]})]})}),r.jsx("div",{className:"col-span-8 grid grid-cols-12 mt-1",children:r.jsxs("div",{className:"form-group mb-6 col-span-10 md:pr-4 flex",children:[r.jsxs("div",{className:"flex-1",children:["  ",r.jsx("div",{className:"w-10 h-10 bg-cyan-50 rounded-full inline-flex justify-center items-center shadow-xl font-semibold text-[#08625d] mr-2",children:"F"}),"February Levied"]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("febFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.febFee&&s.errors.febFee?s.errors.febFee:null})]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("febBusFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.febBusFee&&s.errors.febBusFee?s.errors.febBusFee:null})]})]})}),r.jsx("div",{className:"col-span-8 grid grid-cols-12 mt-1",children:r.jsxs("div",{className:"form-group mb-6 col-span-10 md:pr-4 flex",children:[r.jsxs("div",{className:"flex-1",children:["  ",r.jsx("div",{className:"w-10 h-10 bg-cyan-50 rounded-full inline-flex justify-center items-center shadow-xl font-semibold text-[#08625d] mr-2",children:"M"}),"March Levied"]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("marchFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.marchFee&&s.errors.marchFee?s.errors.marchFee:null})]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("marchBusFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.marchBusFee&&s.errors.marchBusFee?s.errors.marchBusFee:null})]})]})}),r.jsx("div",{className:"col-span-8 grid grid-cols-12 mt-1",children:r.jsxs("div",{className:"form-group mb-6 col-span-10 md:pr-4 flex",children:[r.jsxs("div",{className:"flex-1",children:["  ",r.jsx("div",{className:"w-10 h-10 bg-cyan-50 rounded-full inline-flex justify-center items-center shadow-xl font-semibold text-[#08625d] mr-2",children:"A"}),"April Levied"]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("aprilFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.aprilFee&&s.errors.aprilFee?s.errors.aprilFee:null})]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("aprilBusFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.aprilBusFee&&s.errors.aprilBusFee?s.errors.aprilBusFee:null})]})]})}),r.jsx("div",{className:"col-span-8 grid grid-cols-12 mt-1",children:r.jsxs("div",{className:"form-group mb-6 col-span-10 md:pr-4 flex",children:[r.jsxs("div",{className:"flex-1",children:["  ",r.jsx("div",{className:"w-10 h-10 bg-cyan-50 rounded-full inline-flex justify-center items-center shadow-xl font-semibold text-[#08625d] mr-2",children:"M"}),"May Levied"]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("mayFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.mayFee&&s.errors.mayFee?s.errors.mayFee:null})]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("mayBusFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.mayBusFee&&s.errors.mayBusFee?s.errors.mayBusFee:null})]})]})}),r.jsx("div",{className:"col-span-8 grid grid-cols-12 mt-1",children:r.jsxs("div",{className:"form-group mb-6 col-span-10 md:pr-4 flex",children:[r.jsxs("div",{className:"flex-1",children:["  ",r.jsx("div",{className:"w-10 h-10 bg-cyan-50 rounded-full inline-flex justify-center items-center shadow-xl font-semibold text-[#08625d] mr-2",children:"J"}),"June Levied"]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("juneFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.juneFee&&s.errors.juneFee?s.errors.juneFee:null})]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("juneBusFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.juneBusFee&&s.errors.juneBusFee?s.errors.juneBusFee:null})]})]})}),r.jsx("div",{className:"col-span-8 grid grid-cols-12 mt-1",children:r.jsxs("div",{className:"form-group mb-6 col-span-10 md:pr-4 flex",children:[r.jsxs("div",{className:"flex-1",children:["  ",r.jsx("div",{className:"w-10 h-10 bg-cyan-50 rounded-full inline-flex justify-center items-center shadow-xl font-semibold text-[#08625d] mr-2",children:"J"}),"July Levied"]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("julyFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.julyFee&&s.errors.julyFee?s.errors.julyFee:null})]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("julyBusFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.julyBusFee&&s.errors.julyBusFee?s.errors.julyBusFee:null})]})]})}),r.jsx("div",{className:"col-span-8 grid grid-cols-12 mt-1",children:r.jsxs("div",{className:"form-group mb-6 col-span-10 md:pr-4 flex",children:[r.jsxs("div",{className:"flex-1",children:["  ",r.jsx("div",{className:"w-10 h-10 bg-cyan-50 rounded-full inline-flex justify-center items-center shadow-xl font-semibold text-[#08625d] mr-2",children:"A"}),"August Levied"]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("augFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.augFee&&s.errors.augFee?s.errors.augFee:null})]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("augBusFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.augBusFee&&s.errors.augBusFee?s.errors.augBusFee:null})]})]})}),r.jsx("div",{className:"col-span-8 grid grid-cols-12 mt-1",children:r.jsxs("div",{className:"form-group mb-6 col-span-10 md:pr-4 flex",children:[r.jsxs("div",{className:"flex-1",children:["  ",r.jsx("div",{className:"w-10 h-10 bg-cyan-50 rounded-full inline-flex justify-center items-center shadow-xl font-semibold text-[#08625d] mr-2",children:"S"}),"September Levied"]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("septFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.septFee&&s.errors.septFee?s.errors.septFee:null})]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("septBusFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.septBusFee&&s.errors.septBusFee?s.errors.septBusFee:null})]})]})}),r.jsx("div",{className:"col-span-8 grid grid-cols-12 mt-1",children:r.jsxs("div",{className:"form-group mb-6 col-span-10 md:pr-4 flex",children:[r.jsxs("div",{className:"flex-1",children:["  ",r.jsx("div",{className:"w-10 h-10 bg-cyan-50 rounded-full inline-flex justify-center items-center shadow-xl font-semibold text-[#08625d] mr-2",children:"O"}),"October Levied"]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("OctFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.OctFee&&s.errors.OctFee?s.errors.OctFee:null})]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("octBusFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.octBusFee&&s.errors.octBusFee?s.errors.octBusFee:null})]})]})}),r.jsx("div",{className:"col-span-8 grid grid-cols-12 mt-1",children:r.jsxs("div",{className:"form-group mb-6 col-span-10 md:pr-4 flex",children:[r.jsxs("div",{className:"flex-1",children:["  ",r.jsx("div",{className:"w-10 h-10 bg-cyan-50 rounded-full inline-flex justify-center items-center shadow-xl font-semibold text-[#08625d] mr-2",children:"N"}),"November Levied"]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("novFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.novFee&&s.errors.novFee?s.errors.novFee:null})]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("novBusFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.novBusFee&&s.errors.novBusFee?s.errors.novBusFee:null})]})]})}),r.jsx("div",{className:"col-span-8 grid grid-cols-12 mt-1",children:r.jsxs("div",{className:"form-group mb-6 col-span-10 md:pr-4 flex",children:[r.jsxs("div",{className:"flex-1",children:["  ",r.jsx("div",{className:"w-10 h-10 bg-cyan-50 rounded-full inline-flex justify-center items-center shadow-xl font-semibold text-[#08625d] mr-2",children:"D"}),"December Levied"]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("decFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.decFee&&s.errors.decFee?s.errors.decFee:null})]}),r.jsxs("div",{className:"flex-1 relative px-10",children:[r.jsx("input",{...s.getFieldProps("decBusFee"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.decBusFee&&s.errors.decBusFee?s.errors.decBusFee:null})]})]})}),r.jsxs("div",{className:"secondcancel-button-div",children:[r.jsx("div",{className:"    ",children:r.jsx("button",{onClick:()=>f("/feedefinition-master"),type:"button",className:"cancel-button",children:"Back to List"})}),r.jsx("div",{className:"submit-button-div",children:r.jsx("button",{type:"submit",className:"cypress_next2_button submit-button",children:"Save"})})]})]})})})]})})})}export{Y as default};
