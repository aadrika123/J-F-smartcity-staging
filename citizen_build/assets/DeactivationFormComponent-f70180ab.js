import{j as e}from"./mui-8e804a04.js";import{a as K}from"./axios-97164839.js";import{m as Q,c as X,d as P,u as Y,B as F,n as d,b as A,A as ee}from"./index-19682a6e.js";import{r as a,f as se,u as te}from"./router-87042356.js";import{P as re}from"./PropertyApiList-37c20837.js";import{B as ae}from"./BottomErrorCard-b31e4e97.js";import{B as oe}from"./BarLoader-0ac4cd94.js";import{p as de,e as L}from"./Styles-a2fa8249.js";import"./CommonModal-340f9ebb.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./index-4e794517.js";function Se(ie){var f,g,u,p,v,j,b,N,y,w,S,_;const[B,E]=a.useState(),[le,H]=a.useState(),[C,n]=a.useState(!1),[T,c]=a.useState(!1),[s,R]=a.useState(),[U,ne]=a.useState(!1),{id:x}=se(),{api_getHoldingDeactivationDetails:q,api_postHoldingDeactivationApply:I}=re(),{notify:i}=a.useContext(Q),[M,l]=a.useState(!1),[O,V]=a.useState(null),[h,W]=a.useState(!1),z=te(),Z=X({holdingDoc:P().required("Upload proof of deactivation"),remark:P().required("write comment for deactivation")}),o=Y({initialValues:{holdingDoc:"",remark:""},onSubmit:(t,r)=>{if(console.log("onsumbt deactivation ",t),t.remark.length<10){i("Please write atleast 10 character comment","error");return}D()},validationSchema:Z}),$=t=>{t.target.files[0],H(URL.createObjectURL(t.target.files[0])),E(t.target.files[0])},D=()=>{c(!0),l(!1);let t=new FormData;t.append("propertyId",x),t.append("document",B),t.append("comments",o.values.remark),console.log("before apply holding deactivation ",t),K.post(I,t,A()).then(r=>{var k;console.log("submit deactivation response....",r==null?void 0:r.data),r.data.status?(i("Holding deactivation applied successfully !!","success"),W(!0)):(i((k=r==null?void 0:r.data)==null?void 0:k.message,"error"),m(!0,"Error occured. Please try again later.")),c(!1)}).catch(r=>{console.log("error at submit deactivation ",r),i("something went wrong !!","error"),m(!0,"Error occured. Please try again later."),c(!1)})},G=t=>{t.target.name=="holdingDoc"&&$(t)},J=()=>{l(!1),n(!0),console.log("before fetch property details in deactivation"),ee.post(q,{propertyId:x},A()).then(function(t){console.log("view prop prop full details...",t.data),R(t.data),n(!1)}).catch(function(t){console.log("==2 details by id error...",t),l(!0),n(!1)})};a.useEffect(()=>{J()},[]);const m=(t,r)=>{V(r),l(t)};return C?e.jsxs(e.Fragment,{children:[e.jsx(F,{}),e.jsx("div",{className:"min-h-screen"})]}):e.jsxs(e.Fragment,{children:[T&&e.jsx(oe,{}),M&&e.jsx(ae,{activateBottomErrorCard:m,errorTitle:O}),e.jsx("div",{className:de,children:"Holding Deactivation"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((f=s==null?void 0:s.data)==null?void 0:f.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((g=s==null?void 0:s.data)==null?void 0:g.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:d((u=s==null?void 0:s.data)==null?void 0:u.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"New Ward No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:d((p=s==null?void 0:s.data)==null?void 0:p.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((v=s==null?void 0:s.data)==null?void 0:v.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((j=s==null?void 0:s.data)==null?void 0:j.zone_mstr_id)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Zone"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((b=s==null?void 0:s.data)==null?void 0:b.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[d((N=s==null?void 0:s.data)==null?void 0:N.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:d((y=s==null?void 0:s.data)==null?void 0:y.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((w=s==null?void 0:s.data)==null?void 0:w.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]})}),e.jsxs("div",{children:[((S=s==null?void 0:s.data)==null?void 0:S.deactivationStatus)!=1&&!h&&e.jsx("form",{onSubmit:o.handleSubmit,onChange:G,encType:"multipart/form",className:"w-full bg-white shadow-xl py-5",children:e.jsxs("div",{className:"w-full flex flex-col md:flex-row md:items-center md:justify-center pl-6 py-2",children:[e.jsx("label",{className:"",children:"Upload Document"}),e.jsxs("div",{className:"text-xs text-gray-700 md:ml-4",children:[e.jsx("input",{...o.getFieldProps("holdingDoc"),accept:".pdf,.png,.jpg,.jpeg",type:"file",className:"mt-2 form-control block w-full px-3 py-2 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 foc}us:outline-none cursor-pointer shadow-md w-40"}),e.jsx("div",{children:"Only pdf, jpg, jpeg or png allowed."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.holdingDoc&&o.errors.holdingDoc?o.errors.holdingDoc:null})]}),e.jsx("div",{className:"mt-10 md:mt-0",children:e.jsx("label",{className:"",children:"Add Remarks"})}),e.jsxs("div",{className:"md:ml-4",children:[e.jsx("textarea",{...o.getFieldProps("remark"),className:"form-control block w-full px-3 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 foc}us:outline-none shadow-md w-60 ",placeholder:"Enter your remark"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.remark&&o.errors.remark?o.errors.remark:null})]}),e.jsx("div",{className:"md:ml-4",children:e.jsx("button",{type:"submit",className:L,children:"Submit Deactivation Request"})})]})}),h&&e.jsx("div",{className:"w-full h-full bg-white p-20",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"Deactivation for this property has been applied."}),e.jsx("div",{className:"text-center mt-6",children:e.jsx("button",{type:"button",className:L,onClick:()=>z("/propertyDashboard"),children:"View Dashboard"})})]})}),(((_=s==null?void 0:s.data)==null?void 0:_.deactivationStatus)==1||U)&&e.jsx("div",{children:e.jsx("h1",{className:"w-full text-center text-red-500 text-2xl font-semibold",children:"Deactivation request already submitted !"})})]}),e.jsx("div",{className:"w-full h-40 md:none"})]})}export{Se as default};
