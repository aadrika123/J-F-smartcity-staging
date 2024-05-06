import{r as c,u as L,O as C,c as q,a as h,b as M,j as t,B as V,A as u,e as p,K as T,y as H,g as I}from"./index-21aade66.js";import{B as O}from"./BottomErrorCard-c4e8289a.js";import{T as R}from"./Tabs-65330aff.js";function Y(){const[g,x]=c.useState(!1),[N,v]=c.useState(null),[j,s]=c.useState(!1),[J,P]=c.useState([]),{api_drop_point_store:y,api_drop_point_edit:A,api_getPickupPointData:E,api_drop_point_show:_}=I(),m=L(),{id:d}=C(),k=q({dropPointName:h().required("Drop point name is required field"),dropPointAddress:h().required("Drop point address is required feild")}),a=M({initialValues:{dropPointName:"",dropPointAddress:""},onSubmit:(e,o)=>{console.log("at submit ",e),S(e)},validationSchema:k}),S=e=>{s(!0);let o,r,n={dropPointName:e.dropPointName,dropPointAddress:e.dropPointAddress};d!==void 0?(o=A,r=n,r.id=d):(o=y,r=n),u.post(o,r,p()).then(function(i){var f,b;console.log("bank master..",(f=i==null?void 0:i.data)==null?void 0:f.data),((b=i==null?void 0:i.data)==null?void 0:b.status)===!0?m("/drop-point-list"):l(!0,"Error occured in submitting form."),s(!1)}).catch(function(i){console.log("==2 error list...",i),l(!0,"Error occured in submitting form."),s(!1)})},w=()=>{s(!0);let e={id:d};u.post(_,e,p()).then(function(o){var r,n,i;console.log("fetch edit data response..",(r=o==null?void 0:o.data)==null?void 0:r.data),(n=o==null?void 0:o.data)!=null&&n.status?F((i=o==null?void 0:o.data)==null?void 0:i.data):l(!0,"Error occured in submitting deactivation application. Please try again later."),s(!1)}).catch(function(o){console.log("= edit data error...",o),x(!0),s(!1)})},F=e=>{console.log("existing property details in prop address...",e),a.setFieldValue("dropPointName",e==null?void 0:e.drop_point_name),a.setFieldValue("dropPointAddress",e==null?void 0:e.drop_point_address)},B=()=>{u.post(E,{},p()).then(function(e){var o,r;(o=e==null?void 0:e.data)!=null&&o.status?P((r=e==null?void 0:e.data)==null?void 0:r.data):l(!0,"Error occured while fetching data."),s(!1)}).catch(function(e){console.log("==2 error list...",e),l(!0,"Error occured while fetching data.")})};c.useEffect(()=>{B(),d!=null&&w()},[]);const D=e=>{let o=e.target.name,r=e.target.value;o=="dropPointName"&&a.setFieldValue("dropPointName",T(r,a.values.dropPointName,50)),o=="bankName"&&a.setFieldValue("feeHead",H(r,a.values.feeHead,50))},l=(e,o)=>{v(o),x(e)};return t.jsx(t.Fragment,{children:t.jsx("div",{className:"main-div",children:t.jsxs("div",{className:"main-inner-div",children:[j&&t.jsx(V,{}),g&&t.jsx(O,{activateBottomErrorCard:l,errorTitle:N}),t.jsxs("div",{className:"main-sub-div",children:[t.jsx("div",{className:"main-sub-inner-div",children:t.jsxs("div",{className:"text-div",children:[t.jsx("div",{className:"big-text",children:"Drop Point Master List"}),t.jsx("div",{className:"small-text",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]})}),d===void 0?t.jsx("div",{className:"tab-div",children:t.jsx("div",{className:"add-button-master-div",children:t.jsxs("button",{onClick:()=>m("/drop-point-form"),type:"submit",className:" add-button-master",children:["Add"," "]})})}):null]}),d!==void 0?"":t.jsx(R,{listRoute:"/drop-point-list",formRoute:"/drop-point-form"}),t.jsx("div",{className:"mt-6 border-b",children:t.jsx("span",{className:"text-lg font-noarml text-gray-500",children:"Details of Drop Point"})}),t.jsx("div",{className:"form-div",children:t.jsx("form",{onSubmit:a.handleSubmit,onChange:D,children:t.jsxs("div",{className:"form",children:[t.jsxs("div",{className:"col-span-4 grid grid-cols-12",children:[t.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Drop Point Name",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsx("input",{...a.getFieldProps("dropPointName"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter drop point name"}),t.jsx("span",{className:"text-red-600 text-xs",children:a.touched.dropPointName&&a.errors.dropPointName?a.errors.dropPointName:null})]}),t.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Drop Point Address",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsx("input",{...a.getFieldProps("dropPointAddress"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter drop point address"}),t.jsx("span",{className:"text-red-600 text-xs",children:a.touched.dropPointAddress&&a.errors.dropPointAddress?a.errors.dropPointAddress:null})]})]}),t.jsxs("div",{className:"cancel-button-div",children:[t.jsx("div",{className:" ",children:t.jsx("button",{onClick:()=>m("/drop-point-list"),type:"button",className:"cancel-button",children:"Back to List"})}),t.jsx("div",{className:"submit-button-div",children:t.jsx("button",{type:"submit",className:"cypress_next2_button submit-button",children:d!==void 0?"Update":"Save"})})]})]})})})]})})})}export{Y as default};
