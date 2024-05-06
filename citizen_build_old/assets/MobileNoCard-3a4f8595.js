import{j as e}from"./mui-8e804a04.js";import{r as i,u as M}from"./router-87042356.js";import{m as F,c as L,d as k,u as z,g as O,o as g}from"./index-2435513d.js";import{C as P}from"./CitizenApplyApiList-b4f47007.js";import{B as R}from"./BarLoader-6486f53e.js";import{a as T}from"./axios-97164839.js";import{C as V}from"./CommonModal-340f9ebb.js";import{B as q}from"./BottomErrorCard-b31e4e97.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./index-4e794517.js";function Y(t){const[f,r]=i.useState(!1),[c,n]=i.useState(!1),[h,b]=i.useState(""),[v,j]=i.useState(!1),[w,y]=i.useState(null),{api_sendMobileOtp:N}=P(),{notify:m}=i.useContext(F),C=M();console.log("entered in mobile card...");const S=L({mobileNo:k().required("Enter 10 digit mobile no.").min(10,"Enter 10 digit mobile no.")}),o=z({initialValues:{mobileNo:""},onSubmit:a=>{console.log("at submit form.....",a),t==null||t.setverifedMobileNo(a.mobileNo),B()},validationSchema:S}),E=a=>{b("");let l=a.target.name,s=a.target.value;l=="mobileNo"&&o.setFieldValue("mobileNo",O(s,o.values.mobileNo,10)),l=="mobileNo"&&s.length>=10?n(!0):n(!1)},B=()=>{console.log("otp send..."),r(!0),n(!1);let a;(t==null?void 0:t.cardFor)=="Register"?a={mobileNo:o.values.mobileNo,type:"Register"}:a={mobileNo:o.values.mobileNo,type:"Forgot"},console.log("before send otp into...",a),T.post(N,a,{timeout:1e3}).then(l=>{var s,u,x;console.log("otp send response",l==null?void 0:l.data),(s=l==null?void 0:l.data)!=null&&s.status?(m("OTP is send to your mobile no.","success"),t==null||t.setmobileCardStatus(!1),t==null||t.setotpCardStatus(!0)):(m(g((u=l==null?void 0:l.data)==null?void 0:u.message),"error"),d(!0,g((x=l==null?void 0:l.data)==null?void 0:x.message))),r(!1)}).catch(l=>{console.log("error otp send",l),d(!0,"Error occured. Please try again later."),r(!1),n(!0)})},d=(a,l)=>{y(l),j(a)};return e.jsxs(e.Fragment,{children:[f&&e.jsx(R,{}),v&&e.jsx(q,{activateBottomErrorCard:d,errorTitle:w}),e.jsx(V,{children:e.jsx("div",{class:"",children:e.jsx("div",{class:"",children:e.jsx("div",{class:"container mx-auto",children:e.jsx("div",{class:"max-w-sm mx-auto md:max-w-lg",children:e.jsxs("div",{class:"w-full",children:[e.jsxs("div",{className:"w-full text-center py-2 bg-gray-200 text-black relative",children:[t==null?void 0:t.headTitle,e.jsx("button",{onClick:t==null?void 0:t.closeMobileModal,type:"button",class:"absolute z-50 top-1 right-6 bg-transparent bg-gray-200 text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center shadow-sm  hover:bg-red-200 hover:border-none",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})})]}),e.jsxs("div",{class:"bg-white py-20 px-6 md:py-20 md:px-20 w-full md:w-auto rounded text-center shadow-xl relative",children:[e.jsx("div",{class:"flex flex-col mt-4 text-center",children:e.jsx("span",{className:"text-center text-red-400",children:h})}),e.jsx("div",{class:"text-2xl font-bold",children:t==null?void 0:t.title}),e.jsx("div",{class:"flex flex-col mt-4 text-center",children:e.jsx("span",{className:"text-center",children:t==null?void 0:t.desc})}),e.jsx("div",{class:"flex flex-row justify-center text-center mt-5 w-full",children:e.jsxs("form",{onSubmit:o.handleSubmit,onChange:E,children:[e.jsx("div",{className:"w-full",children:e.jsx("input",{type:"text",min:0,...o.getFieldProps("mobileNo"),className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})}),e.jsxs("div",{class:"w-full text-center mt-5",children:[c&&e.jsx("button",{type:"submit",className:"w-full  py-2.5 bg-[#F59E0B] text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-[#F59E0B] hover:shadow-lg focus:bg-[#F59E0B] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#F59E0B] active:shadow-lg transition duration-150 ease-in-out",children:"Submit"}),!c&&e.jsx("button",{type:"button",className:"w-full  py-2.5 bg-gray-300 text-white font-medium text-xs leading-tight  rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out cursor-default ",children:"Submit"})]}),e.jsx("div",{className:"text-center w-full mt-10 flex justify-center items-center",children:e.jsx("div",{className:"",children:e.jsx("span",{onClick:()=>C("/login"),className:"text-gray-600 font-semibold px-4 bg-green-100 rounded-md drop-shadow-sm hover:bg-green-200 px-3 py-1 cursor-pointer float-right hover:underline",children:" Login "})})})]})})]})]})})})})})})]})}export{Y as default};
