import{j as r}from"./mui-8e804a04.js";import{a as M,r as c,f as I,u as C}from"./router-87042356.js";import{m as k,b as z,c as D,d as l,u as $,A as Z,D as H}from"./index-2435513d.js";import{M as v}from"./index-4e794517.js";import{P as U}from"./PetRegAPIList-50db0381.js";import{W}from"./WaterApiList-86cf1deb.js";import{a as J}from"./axios-97164839.js";const Q="/assets/pet-house-eb86d7fa.png",X={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",background:"transparent"}},e={required:"text-red-700 font-semibold",label:"text-sm",textFiled:"block w-full h-9 border px-2 border-gray-300 rounded shadow text-gray-700",textArea:"block w-full border px-2 border-gray-300 rounded shadow"};v.setAppElement("#root");function ne(d){var f,j;const o=d==null?void 0:d.applicationData,[O,b]=M.useState(!1);c.useState(),c.useState();const[n,R]=c.useState();c.useState(!1);const[S,m]=c.useState(!1),[V,N]=c.useState(!1),{notify:g}=c.useContext(k);c.useState(),c.useState();const{id:q,appId:Y}=I();console.log("pet data in Edit pet details"),C();const{api_PetRegistrationApplyForm:y,api_PetRegistrationMaster:w,api_peteditdetails:P,api_ListOfSafHolding:ee,api_getUserDetailsByHoldingSaf:re,header1:L}=U();W();const _=z();function T(){b(!0)}c.useEffect(()=>{T()},[]);function A(){}function u(){b(!1),d.clear()}c.useEffect(()=>{s.setFieldValue("petType",o==null?void 0:o.pet_type),s.setFieldValue("petName",o==null?void 0:o.pet_name),s.setFieldValue("petGender",o==null?void 0:o.sex),s.setFieldValue("petBirthDate",o==null?void 0:o.dob),s.setFieldValue("breed",o==null?void 0:o.breed),s.setFieldValue("color",o==null?void 0:o.color),s.setFieldValue("doctorName",o==null?void 0:o.vet_doctor_name),s.setFieldValue("doctorRegNo",o==null?void 0:o.doctor_registration_no),s.setFieldValue("dateOfRabies",o==null?void 0:o.rabies_vac_date),s.setFieldValue("dateOfLepVaccine",o==null?void 0:o.leptospirosis_vac_date),s.setFieldValue("petFrom",o==null?void 0:o.occurrence_type_id)},[o]);const B=D({petType:l().required("Kindly enter a value."),petName:l().matches(/^[a-zA-Z0-9\s,.:-]+$/,"Special characters are not allowed").required("Kindly enter a value."),petGender:l().required("Kindly enter a value."),petBirthDate:l().required("Kindly enter a value."),breed:l().matches(/^[a-zA-Z0-9\s,.:-]+$/,"Special characters are not allowed").required("Kindly enter a value."),color:l().matches(/^[a-zA-Z0-9\s,.:-]+$/,"Special characters are not allowed").required("Kindly enter a value."),doctorName:l().matches(/^[a-zA-Z0-9\s,.:-]+$/,"Special characters are not allowed").required("Kindly enter a value."),doctorRegNo:l().matches(/^[a-zA-Z0-9\s,.:-]+$/,"Special characters are not allowed").required("Kindly enter a value."),dateOfRabies:l().required("Kindly enter a value."),dateOfLepVaccine:l().required("Kindly enter a value."),petFrom:l().required("Kindly enter a value.")}),s=$({initialValues:{petType:"",petName:"",petGender:"",petBirthDate:"",breed:"",color:"",doctorName:"",doctorRegNo:"",dateOfRabies:"",dateOfLepVaccine:"",petFrom:""},enableReinitialize:!0,onSubmit:(t,i)=>{K(t),E(t)},validationSchema:B}),G=t=>{t.target.name,t.target.value,N(!1)},E=t=>{m(!0);const i={id:q,petType:t.petType,petName:t.petName,petGender:t.petGender,petBirthDate:t.petBirthDate,breed:t.breed,color:t.color,doctorName:t.doctorName,doctorRegNo:t.doctorRegNo,dateOfRabies:t.dateOfRabies,dateOfLepVaccine:t.dateOfLepVaccine,petFrom:t.petFrom};J.post(P,i,_).then(a=>{var p,x,h;m(!1),a.data.status?(console.log("Form updated successfully"),u(),g((p=a==null?void 0:a.data)==null?void 0:p.message,"success"),window.location.reload(),d.data(a.data.data),console.log("Updated data:",a.data.data),d.screen(2),u()):(g((x=a==null?void 0:a.data)==null?void 0:x.message,"error"),N((h=a==null?void 0:a.data)==null?void 0:h.message),console.log("Failed to update pet details"))}).catch(a=>{var p,x,h,F;N((x=(p=a==null?void 0:a.response)==null?void 0:p.data)==null?void 0:x.error),m(!1),console.log("Error while updating pet details:",(F=(h=a==null?void 0:a.response)==null?void 0:h.data)==null?void 0:F.error)})},K=t=>{m(!0);const i={petType:t==null?void 0:t.petType,petName:t==null?void 0:t.petName,petGender:t==null?void 0:t.petGender,petBirthDate:t==null?void 0:t.petBirthDate,breed:t==null?void 0:t.breed,color:t==null?void 0:t.color,doctorName:t==null?void 0:t.doctorName,doctorRegNo:t==null?void 0:t.doctorRegNo,dateOfRabies:t==null?void 0:t.dateOfRabies,dateOfLepVaccine:t==null?void 0:t.dateOfLepVaccine,petFrom:t==null?void 0:t.petFrom};return console.log("complete upload payload",i),m(!1)};return c.useEffect(()=>{Z.post(w,{},L).then(t=>{t.data.status?(R(t.data.data),console.log("pet master data",t.data)):console.log("Error fetching pet master list")}).catch(t=>{console.log("Error while getting pet master list")})},[]),r.jsx("div",{className:"overflow-auto",children:r.jsx(v,{isOpen:O,onAfterOpen:A,onRequestClose:u,style:X,contentLabel:"Example Modal",children:r.jsxs("div",{className:"bg-white shadow-xl max-sm:h-[35rem] p-4 border border-gray-200 my-3 relative rounded-md overflow-auto",children:[r.jsx("div",{onClick:()=>u(),className:"absolute top-2 right-3 cursor-pointer hover:underline",children:r.jsx(H,{className:"text-2xl hover:bg-slate-300 shadow-lg"})}),r.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs mt-2 text-[#37517e]",children:[r.jsx("img",{src:Q,alt:"Pet Detail",className:"w-5 inline text-[#37517e]"})," Pet Details"]}),r.jsxs("form",{onSubmit:s.handleSubmit,onChange:G,children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 py-2",children:[r.jsxs("div",{className:"m-3",children:[r.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"petType",children:["Pet Type",r.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),r.jsxs("select",{...s.getFieldProps("petType"),type:"text",name:"petType",className:e==null?void 0:e.textFiled,children:[r.jsx("option",{value:"",children:"Select"}),r.jsx("option",{value:"1",children:"Dog"})]}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.petType&&s.errors.petType?s.errors.petType:null})]}),r.jsxs("div",{className:"m-3",children:[r.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"petName",children:["Name of Pet",r.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),r.jsx("input",{...s.getFieldProps("petName"),maxLength:"50",type:"text",name:"petName",className:e==null?void 0:e.textFiled}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.petName&&s.errors.petName?s.errors.petName:null})]}),r.jsxs("div",{className:"m-3",children:[r.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"petGender",children:["Gender",r.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),r.jsxs("select",{...s.getFieldProps("petGender"),type:"text",name:"petGender",className:e==null?void 0:e.textFiled,children:[r.jsx("option",{value:"",children:"Select"}),(f=n==null?void 0:n.petGender)==null?void 0:f.map((t,i)=>r.jsx("option",{value:t.id,children:t.pet_gender},i))]}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.petGender&&s.errors.petGender?s.errors.petGender:null})]}),r.jsxs("div",{className:"m-3",children:[r.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"petBirthDate",children:["Date of Birth",r.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),r.jsx("input",{...s.getFieldProps("petBirthDate"),type:"date",name:"petBirthDate",max:new Date().toISOString().split("T")[0],className:e==null?void 0:e.textFiled}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.petBirthDate&&s.errors.petBirthDate?s.errors.petBirthDate:null})]}),r.jsxs("div",{className:"m-3",children:[r.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"breed",children:["Breed",r.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),r.jsx("input",{...s.getFieldProps("breed"),type:"text",maxLength:"20",name:"breed",className:e==null?void 0:e.textFiled}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.breed&&s.errors.breed?s.errors.breed:null})]}),r.jsxs("div",{className:"m-3",children:[r.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"color",children:["Color",r.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),r.jsx("input",{...s.getFieldProps("color"),type:"text",maxLength:"20",name:"color",className:e==null?void 0:e.textFiled}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.color&&s.errors.color?s.errors.color:null})]}),r.jsxs("div",{className:"m-3",children:[r.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"doctorName",children:["Veterinary Doctor Name",r.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),r.jsx("input",{...s.getFieldProps("doctorName"),type:"text",maxLength:"70",name:"doctorName",className:e==null?void 0:e.textFiled}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.doctorName&&s.errors.doctorName?s.errors.doctorName:null})]}),r.jsxs("div",{className:"m-3",children:[r.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"doctorRegNo",children:["Doctor’s MSVC/VCI number ",r.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),r.jsx("input",{...s.getFieldProps("doctorRegNo"),type:"text",maxLength:"70",name:"doctorRegNo",className:e==null?void 0:e.textFiled}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.doctorRegNo&&s.errors.doctorRegNo?s.errors.doctorRegNo:null})]}),r.jsxs("div",{className:"m-3",children:[r.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"dateOfRabies",children:["Date of Rabies",r.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),r.jsx("input",{...s.getFieldProps("dateOfRabies"),type:"date",name:"dateOfRabies",className:e==null?void 0:e.textFiled,max:new Date().toISOString().split("T")[0]}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.dateOfRabies&&s.errors.dateOfRabies?s.errors.dateOfRabies:null})]}),r.jsxs("div",{className:"m-3",children:[r.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"dateOfLepVaccine",children:["Leptospirosis Vaccination Date",r.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),r.jsx("input",{...s.getFieldProps("dateOfLepVaccine"),type:"date",name:"dateOfLepVaccine",className:e==null?void 0:e.textFiled,max:new Date().toISOString().split("T")[0]}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.dateOfLepVaccine&&s.errors.dateOfLepVaccine?s.errors.dateOfLepVaccine:null})]}),r.jsxs("div",{className:"m-3",children:[r.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"petFrom",children:["Pet From",r.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),r.jsxs("select",{...s.getFieldProps("petFrom"),name:"petFrom",className:e==null?void 0:e.textFiled,children:[r.jsx("option",{value:"",children:"Select"}),(j=n==null?void 0:n.occurenceType)==null?void 0:j.map((t,i)=>r.jsx("option",{value:t.id,children:t.occurrence_types},i))]}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.petFrom&&s.errors.petFrom?s.errors.petFrom:null})]})]}),r.jsx("p",{className:"text-red-500 font-semibold text-center mt-3",children:V}),r.jsx("div",{className:"flex justify-center my-5",children:S?r.jsx("p",{children:"Form Submitting.."}):r.jsx("button",{type:"submit",className:"disabled:opacity-40 bg-indigo-600 hover:bg-indigo-700 px-8 py-2 text-white rounded shadow",children:"Submit Application"})})]})]})})})}export{ne as E,Q as p};
