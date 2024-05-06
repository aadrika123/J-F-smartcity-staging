import{j as e}from"./mui-8e804a04.js";import{r as a,u as F}from"./router-87042356.js";import{c as A,d as C,u as H,X as L,Q as g,A as _}from"./index-2435513d.js";import{d as z}from"./index.esm-e3de3e5d.js";import{c as E}from"./index.esm-388271cc.js";import{C as $}from"./CitizenApplyApiList-b4f47007.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";function K(h){var i,d,c,x;const{api_getHoldingDetails:p}=$(),f=t=>{g.dismiss(t),g.info(t)},[u,q]=a.useState("col-span-12 md:col-span-4 py-6"),[b,y]=a.useState(!1),[s,N]=a.useState(),[n,B]=a.useState("both"),j=F(),w=A({holdingNo:C().required("Enter holding no.")}),o=H({initialValues:{holdingNo:""},onSubmit:(t,r)=>{alert(JSON.stringify(t,null,2)),console.log("propertyaddressdetails ",t),v(t)},validationSchema:w}),v=t=>{let r=window.localStorage.getItem("token");console.log("token at basic details is post method...",r);const S={headers:{Authorization:`Bearer ${r}`,Accept:"application/json"}},m={wardId:50,holdingNo:t.holdingNo};console.log("form request body....",m),_.post(`${p}`,m,S).then(function(l){console.log("verified holding no",l.data),N(l.data)}).catch(function(l){console.log("errorrr....holding ",l)})},k=()=>{h.fun(!1)};return console.log("data for mutation ....",s),e.jsx(e.Fragment,{children:e.jsx("div",{className:"",children:e.jsx("div",{className:" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center bg-gray-600 opacity-95 ",children:e.jsxs("section",{className:`${u=="col-span-12 md:col-span-12 py-0 block","block"} w-11/12 md:w-9/12 mx-auto mt-0 md:mt-32 text-gray-600 bg-white  body-font overflow-hidden p-3   `,children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-1",children:e.jsxs("h1",{className:"text-gray-900 text-xl title-font font-medium mb-4 flex items-center",children:[e.jsx(E,{className:"inline"}),e.jsx("p",{className:"ml-3 ",children:"Find Holding"})]})}),e.jsx("div",{className:"flex-1 ",children:e.jsx("button",{className:"float-right",onClick:k,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-8 h-8 text-red-500",children:e.jsx("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z","clip-rule":"evenodd"})})})})]}),e.jsx("form",{onSubmit:o.handleSubmit,children:e.jsxs("div",{className:"  grid grid-cols-6",children:[e.jsxs("div",{className:" flex-1 form-group mb-3 col-span-4 md:col-span-2",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold ",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline  ",children:"*"}),"Holding no."]}),e.jsx("input",{...o.getFieldProps("holdingNo"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter holding no."}),e.jsx("span",{classNameName:"text-red-600 absolute text-xs",children:o.touched.holdingNo&&o.errors.holdingNo?o.errors.holdingNo:null})]}),e.jsxs("div",{className:"flex-1 form-group mb-2 col-span-1 md:col-span-1 align-bottom",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold invisible ",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline  ",children:"*"}),"Enter Holding no."]}),e.jsx("div",{className:"md:px-10 text-right",children:e.jsxs("button",{onClick:()=>y(!0),type:"submit",className:" px-6 py-2 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:[e.jsx(z,{className:"inline text-sm font-bold"}),"Find"]})})]})]})}),e.jsx(L,{}),b&&e.jsx("div",{className:"py-2 overflow-x-auto bg-white",children:e.jsx("div",{className:"inline-block min-w-full rounded-lg overflow-hidden bg-white",children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-sky-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-900  text-left text-xs uppercase text-left",children:"Holding No"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-900  text-left text-xs uppercase text-left",children:"Owner Name"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-900  text-left text-xs uppercase text-left",children:"Guardian Name"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-900  text-left text-xs uppercase text-left",children:"Address"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-900  text-left text-xs uppercase text-left",children:"Action"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left text-gray-900 font-bold",children:(i=s==null?void 0:s.data)==null?void 0:i.holding_no}),(c=(d=s==null?void 0:s.data)==null?void 0:d.owners)==null?void 0:c.map(t=>e.jsxs(e.Fragment,{children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left text-gray-900 font-bold",children:t==null?void 0:t.owner_name}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-gray-900 font-bold",children:t==null?void 0:t.guardian_name})]})),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-gray-900 font-bold",children:(x=s==null?void 0:s.data)==null?void 0:x.prop_address}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",onClick:()=>f(),children:(n=="mu"||n=="both")&&e.jsx("button",{onClick:()=>{var t;return j(`/safform/mu/${(t=s==null?void 0:s.data)==null?void 0:t.property_id}`)},type:"button",className:"ml-2 px-2 py-1 bg-orange-300 text-black font-bold hover:text-white text-xs leading-tight  rounded  hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out",children:"Mutation"})})]})})]})})})]})})})})}export{K as default};
