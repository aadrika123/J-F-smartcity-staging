import{r as n,u as v,c as E,a,E as F,N as L,m as S,b as k,j as e,B as C,o as M,A,e as R,S as q,g as B}from"./index-21aade66.js";import{B as V}from"./BottomErrorCard-c4e8289a.js";function I(){const[h,u]=n.useState(!1),[p,f]=n.useState(null),[j,c]=n.useState(!1),{api_registrationData:b}=B(),N=v(),w=E({schoolName:a().required("Enter School Name"),contactPersonName:a().required("Enter Name"),contactPersonEmail:a().required("Enter Email").matches(F,"Please Enter Valid E-mail"),contactPersonMobile:a().required("Enter Mobile No."),password:a().required("Enter Password").matches(L,"Please Enter Valid E-mail"),confirmPassword:a().required("Enter Confirm Password").oneOf([S("password"),null],"Password and confirm password did not match")}),s=k({initialValues:{schoolName:"",schoolCode:"",schoolLogo:"",schoolAddress:"",schoolPincode:"",schoolFax:"",contactPersonName:"",contactPersonEmail:"",contactPersonMobile:"",password:"",confirmPassword:""},onSubmit:t=>{const l=new FormData;l.append("schoolName",t.schoolName),l.append("schoolCode",t.schoolCode),l.append("schoolLogo",t.schoolLogo),l.append("schoolAddress",t.schoolAddress),l.append("schoolPincode",t.schoolPincode),l.append("schoolFax",t.schoolFax),l.append("contactPersonName",t.contactPersonName),l.append("contactPersonEmail",t.contactPersonEmail),l.append("contactPersonMobile",t.contactPersonMobile),l.append("password",t.password),l.append("confirmPassword",t.confirmPassword),g(l)},validationSchema:w}),g=t=>{c(!0);let l,o;l=b,o=t,A.post(l,o,R()).then(function(r){var d,x,m;console.log("Registration.....",r==null?void 0:r.data),((d=r==null?void 0:r.data)==null?void 0:d.status)===!0?(JSON.stringify((x=r==null?void 0:r.data)==null?void 0:x.data),N("/login"),q.fire({icon:"success",title:"Registered",text:"Registration Successfully.",showConfirmButton:!1,timer:1500})):i(!0,`${(m=r==null?void 0:r.data)==null?void 0:m.message}`),c(!1)}).catch(function(r){console.log("==2 error list...",r),i(!0,"Error occured in submitting form."),c(!1)})},i=(t,l)=>{f(l),u(t)},y=t=>{s.setFieldValue("schoolLogo",t)},P=t=>{let l=t.target.name,o=t.target.value;if(l=="contactPersonMobile"&&s.setFieldValue("contactPersonMobile",M(o,s.values.contactPersonMobile,10)),l=="schoolLogo"){let r=t.target.files[0];y(r);return}};return e.jsxs(e.Fragment,{children:[j&&e.jsx(C,{}),h&&e.jsx(V,{activateBottomErrorCard:i,errorTitle:p}),e.jsx("div",{className:"h-fullmax-[917px]:overflow-auto",children:e.jsx("div",{className:"h-full lg:w-full max-[425px]:w-full max-[425px]:px-4  flex flex-row items-center justify-center  py-[10%] image",children:e.jsx("div",{className:"h-auto w-[60%] px-2 bg-[#FFFFFF] border-2  flex items-center justify-center py-1  rounded-[10px] pb-[20px] max-[917px]:w-[90%]",children:e.jsx("div",{className:"w-full",children:e.jsx("form",{onSubmit:s.handleSubmit,onChange:P,children:e.jsxs("div",{className:"pt-4 w-full",children:[e.jsx("h1",{className:"flex items-center justify-center text-3xl font-bold text-[cornflowerblue] gill",children:"School Registration"}),e.jsxs("div",{className:"relative border border-gray-300 bg-transparent mt-[2vh]",children:[e.jsx("h1",{className:"absolute bg-white mt-[-12px] ml-4",children:"School Details"}),e.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px]  max-[1200px]:block max-[917px]:w-[100%] max-[917px]:items-start max-[917px]:justify-start",children:[e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex items-center justify-center  w-full",children:[e.jsxs("label",{className:"flex items-start justify-start  text-black  ml-4 arial w-[150px]",children:["School Name",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{type:"text",...s.getFieldProps("schoolName"),className:"border border-[gainsboro] pl-4 rounded-[10px] h-10 w-full flex items-center justify-center max-[917px]:mb-2"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:s.touched.schoolName&&s.errors.schoolName?s.errors.schoolName:null})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:" flex items-center justify-center  w-full",children:[e.jsx("label",{className:"flex items-start justify-start  text-black  ml-4 arial w-[150px]",children:"School Code"}),e.jsx("input",{type:"text",...s.getFieldProps("schoolCode"),className:"border border-[gainsboro] pl-4 ml-4 rounded-[10px] h-10 w-full flex items-center justify-center max-[917px]:mb-2"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:s.touched.schoolCode&&s.errors.schoolCode?s.errors.schoolCode:null})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:" flex items-center justify-center  w-full",children:[e.jsx("label",{className:"flex items-start justify-start  text-black  ml-4 arial w-[150px]",children:"Logo"}),e.jsx("input",{name:"schoolLogo",type:"file",accept:".jpg,.jpeg,.png",value:s.values.schoolLogo[0],className:" pl-4 ml-4 rounded-[10px] h-10 w-full flex items-center justify-center max-[917px]:mb-2"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:s.touched.schoolLogo&&s.errors.schoolLogo?s.errors.schoolLogo:null})]})]}),e.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[10px] max-[1200px]:block max-[917px]:w-[100%] max-[917px]:items-start max-[917px]:justify-start",children:[e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex items-center justify-center  w-full",children:[e.jsx("label",{className:"flex items-start justify-start  text-black  ml-4 arial w-[150px]",children:"Address"}),e.jsx("textarea",{type:"text",...s.getFieldProps("schoolAddress"),className:"border border-[gainsboro] pl-4 rounded-[10px]  w-full ml-[-20px] h-10 flex items-center justify-center max-[917px]:mb-2 max-[917px]:ml-0"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:s.touched.schoolAddress&&s.errors.schoolAddress?s.errors.schoolAddress:null})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:" flex items-center justify-center  w-full",children:[e.jsx("label",{className:"flex items-start ml-4 justify-start  text-black arial w-[150px]",children:"Pincode"}),e.jsx("input",{type:"text",...s.getFieldProps("schoolPincode"),className:"border border-[gainsboro] pl-4 ml-4 rounded-[10px] h-10 w-full flex items-center justify-center max-[917px]:mb-2"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:s.touched.schoolPincode&&s.errors.schoolPincode?s.errors.schoolPincode:null})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:" flex items-center justify-center  w-full",children:[e.jsx("label",{className:"flex items-start ml-4 justify-start  text-black arial w-[150px]",children:"Fax No."}),e.jsx("input",{type:"text",...s.getFieldProps("schoolFax"),className:"border border-[gainsboro] pl-4 ml-4 rounded-[10px] h-10 w-full flex items-center justify-center max-[917px]:mb-2"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:s.touched.schoolFax&&s.errors.schoolFax?s.errors.schoolFax:null})]})]})]}),e.jsxs("div",{className:"relative border border-gray-300 bg-transparent mt-[4vh]",children:[e.jsx("h1",{className:"absolute bg-white mt-[-12px] ml-4",children:"Contact Person Details"}),e.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[10px] max-[1200px]:block max-[1200px]:w-[100%] max-[917px]:items-start max-[917px]:justify-start",children:[e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex items-center justify-center  w-full",children:[e.jsxs("label",{className:"flex items-start justify-start  text-black  ml-4 arial w-[150px]",children:["Name",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{type:"text",...s.getFieldProps("contactPersonName"),className:"border border-[gainsboro] pl-4 rounded-[10px] h-10 w-full flex items-center justify-center max-[917px]:mb-2"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:s.touched.contactPersonName&&s.errors.contactPersonName?s.errors.contactPersonName:null})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:" flex items-center justify-center  w-full",children:[e.jsxs("label",{className:"flex items-start justify-start  text-black  ml-4 arial w-[150px]",children:["Mobile",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{type:"text",...s.getFieldProps("contactPersonMobile"),className:"border border-[gainsboro] pl-4 ml-4 rounded-[10px] h-10 w-full flex items-center justify-center max-[917px]:mb-2"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:s.touched.contactPersonMobile&&s.errors.contactPersonMobile?s.errors.contactPersonMobile:null})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:" flex items-center justify-center  w-full",children:[e.jsxs("label",{className:"flex items-start justify-start  text-black  ml-4 arial w-[150px]",children:["Email",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{type:"text",...s.getFieldProps("contactPersonEmail"),className:"border border-[gainsboro] pl-4 ml-4 rounded-[10px] h-10 w-full flex items-center justify-center max-[917px]:mb-2"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:s.touched.contactPersonEmail&&s.errors.contactPersonEmail?s.errors.contactPersonEmail:null})]})]})]}),e.jsxs("div",{className:"relative border border-gray-300 bg-transparent mt-[4vh]",children:[e.jsx("h1",{className:"absolute bg-white mt-[-12px] ml-4",children:"Password"}),e.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[10px] max-[917px]:block max-[917px]:w-[100%] max-[917px]:items-start max-[917px]:justify-start",children:[e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex items-center justify-center  w-full",children:[e.jsxs("label",{className:"flex items-start justify-start  text-black  ml-4 arial w-[150px]",children:["Password",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{type:"password",...s.getFieldProps("password"),className:"border border-[gainsboro] pl-4 rounded-[10px] h-10 w-full flex items-center justify-center max-[917px]:mb-2"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:s.touched.password&&s.errors.password?s.errors.password:null})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:" flex items-center justify-center  w-full",children:[e.jsxs("label",{className:"flex items-start justify-start  text-black  ml-4 arial w-[150px]",children:["Confirm Password",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{type:"password",...s.getFieldProps("confirmPassword"),className:"border border-[gainsboro] pl-4 ml-4 rounded-[10px] h-10 w-full flex items-center justify-center max-[917px]:mb-2"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:s.touched.confirmPassword&&s.errors.confirmPassword?s.errors.confirmPassword:null})]})]})]}),e.jsxs("div",{className:"flex items-center justify-end text-[cornflowerblue] mr-[5vh] underline arial mt-[2%]",children:[e.jsx("a",{href:"/csms/login-aadrika",className:"mr-4",children:"Aadrika Login"}),e.jsx("a",{href:"/csms/login-school",className:"mr-4",children:"School Login"}),e.jsx("a",{href:"/csms/login",children:"User Login"})]}),e.jsx("div",{className:"mt-[3%] flex items-center justify-center",children:e.jsx("button",{type:"submit",className:"border border-[cornflowerblue] text-white bg-[cornflowerblue] py-4 px-6 rounded-[5px] h-10 w-auto flex items-center justify-center",children:"Register"})})]})})})})})})]})}export{I as default};
