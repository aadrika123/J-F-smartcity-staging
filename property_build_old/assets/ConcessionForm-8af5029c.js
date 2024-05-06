import{aA as ye,bt as Ne,u as we,r as n,A as I,aH as X,o as je,j as e,p as Ce,aY as ve,aI as Se,aJ as Fe,bF as ke,by as C,bR as Z,b as De,aW as Ae}from"./index-c73b3921.js";const _e=()=>{const N=ye;return{getConcessionOwners:`${N}/api/property/concession/owner-details`,getDocMaster:`${N}/api/property/concession/get-doc-type`,postConcessionForm:`${N}/api/property/concession/apply-concession`}};function Ie(N){var J;const{getConcessionOwners:$,postConcessionForm:ee,getDocMaster:se}=_e(),{id:w}=Ne(),ae=we();let m="form-control w-full px-3 text-sm py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md w-max";const[v,z]=n.useState(null),[S,U]=n.useState(null),[F,V]=n.useState(null),[k,B]=n.useState(null),[D,te]=n.useState(null),[A,oe]=n.useState(null),[_,le]=n.useState(null),[P,ne]=n.useState(null),[c,re]=n.useState(),[E,p]=n.useState(!1),[de,ie]=n.useState(""),[x,O]=n.useState(!1),[u,R]=n.useState(!1),[f,M]=n.useState(!1),[g,Y]=n.useState(!1),[G,H]=n.useState(!1),[ce,T]=n.useState(),[pe,me]=n.useState(),[xe,ue]=n.useState(!1),[fe,ge]=n.useState(""),q=()=>{ae(`/holdingPropertyDetails/${w}`)};n.useEffect(()=>{T(!1),p(!0),I.post($,{propId:w},X()).then(s=>{var t,r;p(!1),re(s.data),me((r=(t=s==null?void 0:s.data)==null?void 0:t.data)==null?void 0:r.ulbId)}).catch(s=>{p(!1)})},[w]);const a=je({initialValues:{genders:"",dob:"",speciallyAbled:!0,speciallyAbledPercentage:"",armedForce:!0,genderDoc:"",dobDoc:"",speciallyAbledDoc:"",armedForceDoc:"",genderCode:"",dobCode:"",speciallyAbledCode:"",armedForceCode:""},enableReinitialize:!0,onSubmit:s=>{be(s)&&he(s)}}),i=(s,t)=>{ge(t),ue(s)},be=s=>{if(x){if(s.genders=="")return i(!0,"Please select gender"),!1;if(v!=null&&!C(v))return a.setFieldValue("genderDoc","").then(()=>{i(!0,"Check your gender proof file size"),z(null)}),!1}if(u){if(s.dob=="")return i(!0,"Please enter dob"),!1;if(!(Z().diff(Z(s.dob),"years")>=60))return i(!0,"You must be atleast 60 years of age"),!1;if(S!=null&&!C(S))return a.setFieldValue("dobDoc","").then(()=>{i(!0,"Check your dob proof file size"),U(null)}),!1}if(g){if(s.speciallyAbledPercentage=="")return i(!0,"Please enter Specially-Abled percentage"),!1;if(s.speciallyAbledPercentage<40)return i(!0,"Specially-Abled Percentage should be atleast 40%"),!1;if(F!=null&&!C(F))return a.setFieldValue("speciallyAbledDoc","").then(()=>{i(!0,"Check your specially abled proof file size"),V(null)}),!1}return f&&k!=null&&!C(k)?(a.setFieldValue("armedForceDoc","").then(()=>{i(!0,"Check your armed force proof file size"),B(null)}),!1):!0},he=s=>{var d,h;let t=new FormData;t.append("propId",w),t.append("ulbId",pe),t.append("applicantName",(d=c==null?void 0:c.data)==null?void 0:d.ownerName),t.append("ownerId",(h=c==null?void 0:c.data)==null?void 0:h.ownerId);let r=[{key:"genderStatus",value:x,code:s.genderCode},{key:"seniorStatus",value:u,code:s.dobCode},{key:"speciallyStatus",value:g,code:s.speciallyAbledCode},{key:"armedStatus",value:f,code:s.armedForceCode}];r==null||r.map((o,l)=>{(o==null?void 0:o.key)=="genderStatus"&&(o==null?void 0:o.value)==!0&&(t.append(`concessionData[${l}][value]`,s.genders),t.append(`concessionData[${l}][doc]`,v),t.append(`concessionData[${l}][code]`,s.genderCode),t.append(`concessionData[${l}][appliedFor]`,"Gender")),(o==null?void 0:o.key)=="seniorStatus"&&(o==null?void 0:o.value)==!0&&(t.append(`concessionData[${l}][value]`,s.dob),t.append(`concessionData[${l}][doc]`,S),t.append(`concessionData[${l}][code]`,s.dobCode),t.append(`concessionData[${l}][appliedFor]`,"Senior Citizen")),(o==null?void 0:o.key)=="speciallyStatus"&&(o==null?void 0:o.value)==!0&&(t.append(`concessionData[${l}][value]`,!0),t.append(`concessionData[${l}][percentage]`,s.speciallyAbledPercentage),t.append(`concessionData[${l}][doc]`,F),t.append(`concessionData[${l}][code]`,s.speciallyAbledCode),t.append(`concessionData[${l}][appliedFor]`,"Specially Abled")),(o==null?void 0:o.key)=="armedStatus"&&(o==null?void 0:o.value)==!0&&(t.append(`concessionData[${l}][value]`,!0),t.append(`concessionData[${l}][doc]`,k),t.append(`concessionData[${l}][code]`,s.armedForceCode),t.append(`concessionData[${l}][appliedFor]`,"Armed Force"))}),p(!0),I.post(ee,t,De()).then(o=>{var l,y;((l=o==null?void 0:o.data)==null?void 0:l.status)==!0?(Ae.success("Concession Applied Successfully!!"),ie((y=o==null?void 0:o.data)==null?void 0:y.data),T(!0)):i(!0,"Error occured in submitting Concession application. Please try again later."),p(!1)}).catch(o=>{p(!1),i(!0,"Error occured in submitting Concession application. Please try again later.")})},j=s=>{switch(s.target.name){case"genderDoc":s.target.files[0],z(s.target.files[0]);break;case"dobDoc":s.target.files[0],U(s.target.files[0]);break;case"speciallyAbledDoc":s.target.files[0],V(s.target.files[0]);break;case"armedForceDoc":s.target.files[0],B(s.target.files[0]);break}},b=s=>{const t=s.target.name,r=s.target.checked;t=="gender"&&r==!0&&O(!0),t=="seniorCitizen"&&r==!0&&R(!0),t=="armedForce"&&r==!0&&M(!0),t=="speciallyAbled"&&r==!0&&Y(!0),t!="declaration"&&r&&(p(!0),I.post(se,{doc:s.target.name},X()).then(d=>{var h,o,l,y,L,Q,W,K;s.target.name=="gender"&&te((o=(h=d==null?void 0:d.data)==null?void 0:h.data)==null?void 0:o.masters),s.target.name=="seniorCitizen"&&oe((y=(l=d==null?void 0:d.data)==null?void 0:l.data)==null?void 0:y.masters),s.target.name=="armedForce"&&le((Q=(L=d==null?void 0:d.data)==null?void 0:L.data)==null?void 0:Q.masters),s.target.name=="speciallyAbled"&&ne((K=(W=d==null?void 0:d.data)==null?void 0:W.data)==null?void 0:K.masters)}).finally(()=>p(!1))),t=="gender"&&r==!1&&O(!1),t=="seniorCitizen"&&r==!1&&R(!1),t=="armedForce"&&r==!1&&M(!1),t=="speciallyAbled"&&r==!1&&Y(!1),t=="declaration"&&r==!0&&H(!0),t=="declaration"&&r==!1&&H(!1)};return e.jsxs(e.Fragment,{children:[xe&&e.jsx(Ce,{activateBottomErrorCard:i,errorTitle:fe}),e.jsx(ve,{position:"top-right",autoClose:2e3}),E&&e.jsx(Se,{}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-500 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-extrabold text-[30px]",children:e.jsx(Fe,{})}),e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-lg",children:"Apply For Concession"})]})}),e.jsx("div",{className:"poppins my-2 2xl:font-base text-sm",children:"If a property owner falls under any of the following categories, they are eligible for an additional 5 percent concession on their property tax demand from the current financial year until the financial year of their ownership, if they requested for the concession."}),e.jsxs("div",{className:"bg-white py-4 shadow-sm rounded-md transition-all duration-300 px-6",children:[e.jsx("div",{className:"flex flex-col gap-2 w-full",children:e.jsxs("div",{className:"w-full flex flex-row flex-wrap gap-4",children:[e.jsx("div",{className:"text-sm poppins",children:"Owner's Name :"}),e.jsx("div",{className:"font-semibold poppins",children:(J=c==null?void 0:c.data)==null?void 0:J.ownerName})]})}),c==null&&e.jsx("div",{className:"animate__animated animate__fadeInUp w-full flex justify-center items-center",children:!E&&e.jsx("div",{className:"bg-red-200 text-red-600 rounded-md shadow-lg px-6 py-4 poppins",children:"! No Data Found !"})}),e.jsxs("form",{onSubmit:a.handleSubmit,onChange:a.handleChange,className:"animate__animated animate__fadeInUp",children:[e.jsxs("div",{className:"w-full mb-4 mt-2",children:[e.jsx("div",{className:"poppins text-sm font-semibold",children:"Check the below option by which you want to apply ?"}),e.jsxs("div",{className:"flex flex-row flex-wrap gap-x-16",children:[e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("input",{type:"checkbox",name:"gender",id:"gender",onChange:b,className:m+" shadow-sm"})," "," ",e.jsx("label",{className:"poppins 2xl:text-base text-xs",htmlFor:"gender",children:"Gender"})]}),e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("input",{type:"checkbox",name:"seniorCitizen",id:"seniorCitizen",onChange:b,className:m+" shadow-sm"})," "," ",e.jsx("label",{className:"poppins 2xl:text-base text-xs",htmlFor:"seniorCitizen",children:"Senior Citizen"})]}),e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("input",{type:"checkbox",name:"speciallyAbled",id:"speciallyAbled",onChange:b,className:m+" shadow-sm"})," "," ",e.jsx("label",{className:"poppins 2xl:text-base text-xs",htmlFor:"speciallyAbled",children:"Specially Abled"})]}),e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("input",{type:"checkbox",name:"armedForce",id:"armedForce",onChange:b,className:m+" shadow-sm"})," "," ",e.jsx("label",{className:"poppins 2xl:text-base text-xs",htmlFor:"armedForce",children:"Armed Force"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3",children:[x&&e.jsxs("div",{className:`col-span-3 grid grid-cols-1 md:grid-cols-3  animate__animated animate__fadeIn animate__faster\r
px-6 py-2 mt-2 shadow-sm font-base poppins bg-zinc-50 rounded-sm mb-2 gap-x-6`,children:[e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Gender"]}),e.jsxs("select",{onChange:a.handleChange,...a.getFieldProps("genders"),value:a.values.genders,className:"form-control block poppins w-full px-3 py-1.5 2xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{value:"",children:"--Select--"}),e.jsx("option",{value:"Female",children:"Female"}),e.jsx("option",{value:"Transgender",children:"Transgender"})]}),e.jsx("span",{className:"text-red-600  text-xs",children:a.touched.genders&&a.errors.genders?a.errors.genders:null})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Select document to upload :"]}),e.jsxs("select",{...a.getFieldProps("genderCode"),onChange:a.handleChange,value:a.values.genderCode,className:"form-control w-full poppins px-3 py-1.5 2xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{value:"",selected:!0,children:"Select"}),D==null?void 0:D.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.documentCode,className:"poppins",children:s==null?void 0:s.docVal})}))]}),e.jsx("span",{className:"text-red-600  text-xs",children:a.touched.genderCode&&a.errors.genderCode?a.errors.genderCode:null})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Upload gender proof"]}),e.jsx("input",{...a.getFieldProps("genderDoc"),type:"file",accept:".jpg,.jpeg,.pdf",onChange:j,className:"form-control block w-full poppins px-3 py-1.5 md:py-1 2xl:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 cursor-pointer shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.genderDoc&&a.errors.genderDoc?a.errors.genderDoc:null})]})]}),u&&e.jsxs("div",{className:`col-span-3 grid grid-cols-1 md:grid-cols-3  animate__animated animate__fadeIn animate__faster\r
px-6 py-2 mt-2 shadow-sm font-base poppins bg-zinc-50 rounded-sm mb-2 gap-x-6`,children:[e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"DOB"]}),e.jsx("input",{...a.getFieldProps("dob"),type:"date",onChange:a.handleChange,className:"form-control block w-full  px-3 py-1.5 md:py-1 2xl:text-base text-xs poppins md:text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.dob&&a.errors.dob?a.errors.dob:null})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Select document to upload :"]}),e.jsxs("select",{name:"dobCode",onChange:a.handleChange,value:a.values.dobCode,className:"form-control w-full poppins px-3 py-1.5 2xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{value:"",selected:!0,children:"Select"}),A==null?void 0:A.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.documentCode,className:"poppins",children:s==null?void 0:s.docVal})}))]}),e.jsx("span",{className:"text-red-600 text-xs",children:a.touched.dobCode&&a.errors.dobCode?a.errors.dobCode:null})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Upload DOB proof"]}),e.jsx("input",{...a.getFieldProps("dobDoc"),type:"file",accept:".jpg,.jpeg,.pdf",onChange:j,className:"form-control block w-full  px-3 py-1.5 md:py-1 poppins 2xl:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 cursor-pointer shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.dobDoc&&a.errors.dobDoc?a.errors.dobDoc:null})]})]}),g&&e.jsxs("div",{className:`col-span-3 grid grid-cols-1 md:grid-cols-3  animate__animated animate__fadeIn animate__faster\r
px-6 py-2 mt-2 shadow-sm font-base poppins bg-zinc-50 rounded-sm mb-2 gap-x-6`,children:[e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Specially-Abled"]}),e.jsx("div",{className:"font-semibold poppins text-sm text-gray-800",children:"Yes"})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Specially-Abled Percentage (%)"]}),e.jsx("input",{onChange:a.handleChange,type:"number",...a.getFieldProps("speciallyAbledPercentage"),className:"form-control block w-full px-3 py-1.5 2xl:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.speciallyAbledPercentage&&a.errors.speciallyAbledPercentage?a.errors.speciallyAbledPercentage:null})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Select document to upload :"]}),e.jsxs("select",{name:"speciallyAbledCode",onChange:a.handleChange,value:a.values.speciallyAbledCode,className:"form-control w-full poppins px-3 py-1.5 2xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{value:"",selected:!0,children:"Select"}),P==null?void 0:P.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.documentCode,className:"poppins",children:s==null?void 0:s.docVal})}))]}),e.jsx("span",{className:"text-red-600 text-xs",children:a.touched.speciallyAbledCode&&a.errors.speciallyAbledCode?a.errors.speciallyAbledCode:null})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Upload specially-abled proof"]}),e.jsx("input",{...a.getFieldProps("speciallyAbledDoc"),type:"file",accept:".jpg,.jpeg,.pdf",onChange:j,className:"form-control block w-full  px-3 py-1.5 md:py-1 poppins 2xl:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 cursor-pointer shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.speciallyAbledDoc&&a.errors.speciallyAbledDoc?a.errors.speciallyAbledDoc:null})]})]}),f&&e.jsxs("div",{className:`col-span-3 grid grid-cols-1 md:grid-cols-3  animate__animated animate__fadeIn animate__faster\r
px-6 py-2 mt-2 shadow-sm font-base poppins bg-zinc-50 rounded-sm mb-2 gap-x-6`,children:[e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Armed-Force"]}),e.jsx("div",{className:"font-semibold poppins text-sm text-gray-800",children:"Yes"})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Select document to upload :"]}),e.jsxs("select",{name:"armedForceCode",onChange:a.handleChange,value:a.values.armedForceCode,className:"form-control w-full poppins px-3 py-1.5 2xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{value:"",selected:!0,children:"Select"}),_==null?void 0:_.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.documentCode,className:"poppins",children:s==null?void 0:s.docVal})}))]}),e.jsx("span",{className:"text-red-600 text-xs",children:a.touched.armedForceCode&&a.errors.armedForceCode?a.errors.armedForceCode:null})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Upload armed force proof"]}),e.jsx("input",{...a.getFieldProps("armedForceDoc"),type:"file",accept:".jpg,.jpeg,.pdf",onChange:j,className:"form-control block w-full  px-3 py-1.5 md:py-1 poppins 2xl:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 cursor-pointer shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.armedForceDoc&&a.errors.armedForceDoc?a.errors.armedForceDoc:null})]})]}),(x||u||g||f)&&e.jsx("div",{className:"flex flex-row flex-wrap gap-16 my-2 w-full col-span-3",children:e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("input",{type:"checkbox",name:"declaration",id:"declaration",onChange:b,className:m+" shadow-sm text-indigo-700 bg-indigo-800"})," ","   ",e.jsxs("label",{className:"poppins 2xl:text-sm text-xs italic",htmlFor:"declaration",children:[e.jsx("span",{className:"font-semibold poppins",children:"I accept "})," that the above declaration are true."]})]})}),e.jsxs("div",{className:"col-span-3 w-full flex flex-row flex-wrap justify-between",children:[e.jsx("div",{className:"",children:e.jsx("button",{onClick:q,type:"button",className:" px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-blue-600 text-white font-medium text-xs  poppins rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",children:"Back"})}),e.jsx("div",{className:"",children:(x||u||g||f)&&e.jsx("button",{type:"submit",disabled:!G,className:(G?"bg-green-600 hover:bg-green-700":"bg-zinc-600 hover:bg-zinc-700 cursor-not-allowed")+" px-3 py-1.5 2xl:px-6 2xl:py-2.5 text-white font-medium text-xs  poppins  rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out",children:"Submit"})})]})]})]})]}),e.jsx(ke,{heading:"Apply For Concession",appNo:de,openSubmit:ce,navigation:q})]})}export{Ie as default};
