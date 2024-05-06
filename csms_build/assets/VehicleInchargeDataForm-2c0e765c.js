import{r as c,u as oe,K as ce,c as de,a as m,Y as ne,$ as me,E as ue,a0 as he,a1 as xe,b as be,A as x,e as b,j as t,B as fe,Z as ge,_ as ye,g as pe,J as Ne}from"./index-de640f8f.js";import{B as ve}from"./BottomErrorCard-511fba4a.js";import{T as je}from"./Tabs-018c5deb.js";function Fe(){var E,D,F,S,k,_,A,V,$,P,q;c.useState();const[f,C]=c.useState(""),[L,j]=c.useState(!1),[B,O]=c.useState(null),[R,i]=c.useState(!1),[g,T]=c.useState([]),[y,M]=c.useState([]),[p,G]=c.useState([]),[Ie,H]=c.useState([]),{api_getVehicle_inchargeData:U,api_editVehicle_inchargeData:J,api_postVehicle_inchargeData:X,api_getVehicle_inchargeDataById:Y,api_getStateDataActiveall:z,api_getactiveCountryData:K,api_getDistrictDataActiveAll:Z}=pe(),N=oe(),{id:n}=ce(),Q=de({countryId:m().required("Select Country."),stateId:m().required("Select State."),cityId:m().required("Select city."),inchargeName:m().matches(ne,"Please Enter value between A-Z to a-z").required("Vehical incharge name is required feild"),mobile:m().matches(me,"Please Enter valid mobile no").required("mobile no is required feild"),email:m().matches(ue,"Please Enter Valid Email").required("Email is required feild"),address:m().matches(he,"Please Enter Valid Address").required("Address is required feild"),aadharNo:m().matches(xe,"Please Enter Valid Aadhar no").required("Aadhar is required feild")}),a=be({initialValues:{countryId:"",stateId:"",cityId:"",inchargeName:"",mobile:"",email:"",address:"",aadharNo:"",aadharDoc:""},onSubmit:async(e,l)=>{console.log("at submit ",e);const r=new FormData;r.append("aadharDoc",e.aadharDoc),r.append("inchargeName",e.inchargeName),r.append("mobile",e.mobile),r.append("email",e.email),r.append("address",e.address),r.append("aadharNo",e.aadharNo),r.append("countryId",e.countryId),r.append("stateId",e.stateId),r.append("cityId",e.cityId),W(r)},validationSchema:Q}),W=e=>{i(!0);let l,r;n!==void 0?(l=J,r=e,r.id=e.append("id",n)):(l=X,r=e),console.log(r),x.post(l,r,b()).then(function(s){var d,u,h;console.log("vehicle incharge master..",(d=s==null?void 0:s.data)==null?void 0:d.data),((u=s==null?void 0:s.data)==null?void 0:u.status)===!0?N("/vehicleincharge"):o(!0,`${(h=s==null?void 0:s.data)==null?void 0:h.message}`),i(!1)}).catch(function(s){console.log("==2 error list...",s),o(!0,"Error occured in submitting form."),i(!1)})},ee=()=>{i(!0);let e={id:n};x.post(Y,e,b()).then(function(l){var r,s,d,u;console.log("fetch edit data response..",(r=l==null?void 0:l.data)==null?void 0:r.data),(s=l==null?void 0:l.data)!=null&&s.status?te((d=l==null?void 0:l.data)==null?void 0:d.data):o(!0,`${(u=l==null?void 0:l.data)==null?void 0:u.message}`),i(!1)}).catch(function(l){console.log("= edit data error...",l),j(!0),i(!1)})},te=e=>{console.log("existing property details in prop address...",e),a.setFieldValue("id",e==null?void 0:e.id),a.setFieldValue("countryId",e==null?void 0:e.country_id),a.setFieldValue("stateId",e==null?void 0:e.state_id),a.setFieldValue("cityId",e==null?void 0:e.city_id),a.setFieldValue("inchargeName",e==null?void 0:e.incharge_name),a.setFieldValue("mobile",e==null?void 0:e.mobile),a.setFieldValue("email",e==null?void 0:e.email),a.setFieldValue("address",e==null?void 0:e.address),a.setFieldValue("aadharNo",e==null?void 0:e.aadhar_no),C(e==null?void 0:e.aadhar_doc)},ae=()=>{x.post(U,{},b()).then(function(e){var l,r,s;(l=e==null?void 0:e.data)!=null&&l.status?H((r=e==null?void 0:e.data)==null?void 0:r.data):o(!0,`${(s=e==null?void 0:e.data)==null?void 0:s.message}`),i(!1)}).catch(function(e){console.log("==2 error list...",e),o(!0,"Error occured while fetching data.")})};c.useEffect(()=>{ae(),le(),I(),w(),n!==void 0&&ee()},[]);const le=()=>{x.post(K,{},b()).then(function(e){var l,r,s;(l=e==null?void 0:e.data)!=null&&l.status?T((r=e==null?void 0:e.data)==null?void 0:r.data):o(!0,`${(s=e==null?void 0:e.data)==null?void 0:s.message}`),i(!1)}).catch(function(e){console.log("==2 error list...",e),o(!0,"Error occured while fetching data.")})},I=e=>{i(!0),x.post(z,{},b()).then(function(l){var r,s,d;if((r=l==null?void 0:l.data)!=null&&r.status){const h=((s=l==null?void 0:l.data)==null?void 0:s.data).filter(v=>v.country_id===parseInt(e));M(h)}else o(!0,`${(d=l==null?void 0:l.data)==null?void 0:d.message}`);i(!1)}).catch(function(l){console.log("==2 error list...",l),o(!0,"Error occured while fetching data.")})},w=e=>{i(!0),x.post(Z,{},b()).then(function(l){var r,s,d;if(((r=l==null?void 0:l.data)==null?void 0:r.status)===!0){const h=((s=l==null?void 0:l.data)==null?void 0:s.data).filter(v=>v.state_id===parseInt(e));G(h)}else o(!0,`${(d=l==null?void 0:l.data)==null?void 0:d.message}`);i(!1)}).catch(function(l){console.log("==2 error list...",l),o(!0,"Error occured while fetching data.")})};c.useEffect(()=>{I(a.values.countryId)},[a.values.countryId]),c.useEffect(()=>{w(a.values.stateId)},[a.values.stateId]);const re=e=>{let l=e.target.name,r=e.target.value;if(l=="inchargeName"&&a.setFieldValue("inchargeName",Ne(r,a.values.inchargeName,50)),l=="mobile"){let s=e.target.value;ie(s)}if(l=="aadharNo"){let s=e.target.value;se(s)}},o=(e,l)=>{O(l),j(e)},se=e=>{e>12&&a.setFieldValue("aadharNo",e.slice(0,12))},ie=e=>{e.length>10&&a.setFieldValue("mobile",e.slice(0,10))};return t.jsx(t.Fragment,{children:t.jsx("div",{className:"main-div",children:t.jsxs("div",{className:"main-inner-div",children:[R&&t.jsx(fe,{}),L&&t.jsx(ve,{activateBottomErrorCard:o,errorTitle:B}),t.jsxs("div",{className:"main-sub-div",children:[t.jsx("div",{className:"main-sub-inner-div",children:t.jsxs("div",{className:"text-div",children:[t.jsx("div",{className:"big-text",children:"Vehicle Incharge Master Form"}),t.jsx("div",{className:"small-text",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]})}),t.jsx("div",{className:"tab-div",children:t.jsx("div",{className:"add-button-master-div",children:t.jsxs("button",{onClick:()=>N("/vehicleincharge-form"),type:"submit",className:" add-button-master",children:["Add"," "]})})})]}),n!==void 0?"":t.jsx(je,{listRoute:"/vehicleincharge",formRoute:"/vehicleincharge-form"}),t.jsx("div",{className:"mt-6 border-b",children:t.jsx("span",{className:"text-lg font-noarml text-gray-500",children:"Details of Vehicle Incharge"})}),t.jsx("div",{className:"form-div",children:t.jsx("form",{onSubmit:a.handleSubmit,onChange:re,children:t.jsxs("div",{className:"form",children:[t.jsxs("div",{className:"col-span-4 grid grid-cols-12",children:[t.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Incharge Name",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsx("input",{...a.getFieldProps("inchargeName"),type:"text",className:"form-control h-10 block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter incharge name"}),t.jsx("span",{className:"text-red-600 text-xs",children:a.touched.inchargeName&&a.errors.inchargeName?a.errors.inchargeName:null})]}),t.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Email",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsx("input",{...a.getFieldProps("email"),type:"email",className:"form-control h-10 block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter  email"}),t.jsx("span",{className:"text-red-600 text-xs",children:a.touched.email&&a.errors.email?a.errors.email:null})]}),t.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Mobile No.",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsx("input",{...a.getFieldProps("mobile"),type:"number",className:"form-control h-10 block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter mobile no"}),t.jsx("span",{className:"text-red-600 text-xs",children:a.touched.mobile&&a.errors.mobile?a.errors.mobile:null})]}),t.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Address",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsx("input",{...a.getFieldProps("address"),type:"text",className:"form-control h-10 block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter address"}),t.jsx("span",{className:"text-red-600 text-xs",children:a.touched.address&&a.errors.address?a.errors.address:null})]}),t.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Aadhar No.",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsx("input",{...a.getFieldProps("aadharNo"),type:"number",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),className:"form-control h-10 block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter aadhar no."}),t.jsx("span",{className:"text-red-600 text-xs",children:a.touched.aadharNo&&a.errors.aadharNo?a.errors.aadharNo:null})]}),t.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Country",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsxs("select",{...a.getFieldProps("countryId"),type:"text",className:"form-control h-10 block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Select country",children:[t.jsx("option",{value:"",children:"Select"}),g==null?void 0:g.map((e,l)=>t.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.country_name}))]}),t.jsx("span",{className:"text-red-600 text-xs",children:a.touched.countryId&&a.errors.countryId?a.errors.countryId:null})]}),t.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["State",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsxs("select",{...a.getFieldProps("stateId"),type:"text",className:"form-control h-10 block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Select state",children:[t.jsx("option",{value:"",children:"Select"}),y==null?void 0:y.map((e,l)=>t.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.state_name}))]}),t.jsx("span",{className:"text-red-600  text-xs",children:a.touched.stateId&&a.errors.stateId?a.errors.stateId:null})]}),t.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["City",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsxs("select",{...a.getFieldProps("cityId"),type:"text",className:"form-control h-10 block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Select city",children:[t.jsx("option",{value:"",children:"Select"}),p==null?void 0:p.map((e,l)=>t.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.city_name}))]}),t.jsx("span",{className:"text-red-600 text-xs",children:a.touched.cityId&&a.errors.cityId?a.errors.cityId:null})]}),t.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-2 md:pr-4",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Upload Aadhar",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsxs("div",{className:"block justify-start",children:[t.jsx("label",{htmlFor:"aadharDoc",className:"form-control h-10 block w-full border border-gray-200 px-3 2xl:py-1.5 py-2 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:"Choose File"}),t.jsx("input",{className:"sr-only form-control h-10 block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",name:"aadharDoc",id:"aadharDoc",type:"file",accept:".pdf",size:2*1024*1024,onChange:e=>{a.setFieldValue("aadharDoc",e.target.files[0])}}),a.values.aadharDoc&&n!==void 0?`${(E=a.values.aadharDoc)==null?void 0:E.name}`.slice(`${(D=a.values.aadharDoc)==null?void 0:D.name}`.lastIndexOf("-")+1||`${(F=a.values.aadharDoc)==null?void 0:F.name}`.lastIndexOf("/")+1||`${(S=a.values.aadharDoc)==null?void 0:S.name}`.lastIndexOf("\\")+1||`${(k=a.values.aadharDoc)==null?void 0:k.name}`.lastIndexOf(".")+1||`${(_=a.values.aadharDoc)==null?void 0:_.name}`.lastIndexOf(" ")+1||`${(A=a.values.aadharDoc)==null?void 0:A.name}`.lastIndexOf(",")+1||`${(V=a.values.aadharDoc)==null?void 0:V.name}`.lastIndexOf("?")+1,`${($=a.values.aadharDoc)==null?void 0:$.name}`.length):a.values.aadharDoc&&n===void 0?((P=a.values.aadharDoc)==null?void 0:P.name)??((q=a.values.aadharDoc)==null?void 0:q.name):f?t.jsx("a",{href:`${ge}/api/${f}`,target:"_blank",className:"text-xl text-red-700 flex items-center justify-center",children:f?t.jsx(ye,{className:"text-red bg-red w-8 h-8 mt-4"}):""}):"No file selected"]})]})]}),t.jsxs("div",{className:"cancel-button-div",children:[t.jsx("div",{className:"",children:t.jsx("button",{onClick:()=>N("/vehicleincharge"),type:"button",className:" deactivate-button-master bg-red-500 text-white py-2",children:"Back to List"})}),t.jsx("div",{className:"submit-button-div",children:t.jsx("button",{type:"submit",className:"save-button",children:n!==void 0?"Update":"Save"})})]})]})})})]})})})}export{Fe as default};
