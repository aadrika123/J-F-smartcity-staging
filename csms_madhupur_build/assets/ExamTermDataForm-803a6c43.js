import{r as n,u as q,O as w,c as $,a as V,b as I,j as a,B as M,A as x,e as f,K as O,g as P}from"./index-21aade66.js";import{B as R}from"./BottomErrorCard-c4e8289a.js";import{T as J}from"./Tabs-65330aff.js";const z=()=>{const[g,h]=n.useState(!1),[N,j]=n.useState(null),[E,m]=n.useState(!1),[U,y]=n.useState([]),{api_getExamTermDataByID:T,api_postExamTermData:B,api_editExamTermData:C,api_getExamTermData:S}=P(),u=q(),{id:c}=w(),F=$({termName:V().required("Exam Term is required feild")}),l=I({initialValues:{termName:""},onSubmit:(t,e)=>{console.log("at submit ",t),D(t)},validationSchema:F}),D=t=>{m(!0);let e,r,s={termName:t.termName};c!==void 0?(e=C,r=s,r.id=c):(e=B,r=s),x.post(e,r,f()).then(function(i){var o,b,v;console.log("Exam Term master..",(o=i==null?void 0:i.data)==null?void 0:o.data),((b=i==null?void 0:i.data)==null?void 0:b.status)===!0?u("/exam-term"):d(!0,`${(v=i==null?void 0:i.data)==null?void 0:v.message}`),m(!1)}).catch(function(i){console.log("==2 error list...",i),d(!0,"Error occured in submitting form."),m(!1)})},k=()=>{m(!0);let t={id:c};x.post(T,t,f()).then(function(e){var r,s,i,o;console.log("fetch edit data response..",(r=e==null?void 0:e.data)==null?void 0:r.data),(s=e==null?void 0:e.data)!=null&&s.status?L((i=e==null?void 0:e.data)==null?void 0:i.data):d(!0,`${(o=e==null?void 0:e.data)==null?void 0:o.message}`),m(!1)}).catch(function(e){console.log("= edit data error...",e),h(!0),m(!1)})},L=t=>{console.log("existing property details in prop address...",t),l.setFieldValue("id",t==null?void 0:t.id),l.setFieldValue("termName",t==null?void 0:t.term_name)},A=()=>{x.post(S,{},f()).then(function(t){var e,r,s;(e=t==null?void 0:t.data)!=null&&e.status?y((r=t==null?void 0:t.data)==null?void 0:r.data):d(!0,`${(s=t==null?void 0:t.data)==null?void 0:s.message}`),m(!1)}).catch(function(t){console.log("==2 error list...",t),d(!0,"Error occured while fetching data.")})};n.useEffect(()=>{A(),c!==void 0&&k()},[]);const _=t=>{let e=t.target.name,r=t.target.value;e=="termName"&&l.setFieldValue("termName",O(r,l.values.termName,20))},d=(t,e)=>{j(e),h(t)};return a.jsx(a.Fragment,{children:a.jsx("div",{className:"main-div",children:a.jsxs("div",{className:"main-inner-div",children:[E&&a.jsx(M,{}),g&&a.jsx(R,{activateBottomErrorCard:d,errorTitle:N}),a.jsxs("div",{className:"main-sub-div",children:[a.jsx("div",{className:"main-sub-inner-div",children:a.jsxs("div",{className:"text-div",children:[a.jsx("div",{className:"big-text",children:"Exam Term Form"}),a.jsx("div",{className:"small-text",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]})}),c===void 0?a.jsx("div",{className:"tab-div",children:a.jsx("div",{className:"add-button-master-div'",children:a.jsxs("button",{onClick:()=>u("/exam-term-form"),type:"submit",className:" add-button-master",children:["Add"," "]})})}):null]}),c===void 0?a.jsx(J,{listRoute:"/exam-term",formRoute:"/exam-term-form"}):null,a.jsx("div",{className:"details-div",children:a.jsx("span",{className:"detailes",children:"Details of Extra Activities"})}),a.jsx("div",{className:"form-div",children:a.jsx("form",{onSubmit:l.handleSubmit,onChange:_,children:a.jsxs("div",{className:"form",children:[a.jsx("div",{className:"col-span-4 grid grid-cols-12",children:a.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[a.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Exam Term",a.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),a.jsx("input",{...l.getFieldProps("termName"),type:"text",className:"form-control h-10 block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter exam Term"}),a.jsx("span",{className:"text-red-600  text-xs",children:l.touched.termName&&l.errors.termName?l.errors.termName:null})]})}),a.jsxs("div",{className:"cancel-button-div",children:[a.jsx("div",{className:"    ",children:a.jsx("button",{onClick:()=>u("/exam-term"),type:"button",className:"cancel-button",children:"Back to List"})}),a.jsx("div",{className:"submit-button-div",children:a.jsx("button",{type:"submit",className:"cypress_next2_button submit-button",children:c===void 0?"Save":"Update"})})]})]})})})]})})})};export{z as default};
