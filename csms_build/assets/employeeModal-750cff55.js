import{r as c,u as I,c as q,a as M,b as $,j as e,B as D,C as V,A as _,e as H,g as O}from"./index-de640f8f.js";import{B as R}from"./BottomErrorCard-511fba4a.js";function G(l){const{isOpen:v,toggle:o}=l,[y,p]=c.useState(!1),[E,w]=c.useState(null),[k,x]=c.useState(!1),{api_searchEmployeeByIdList:S}=O(),d=I(),C={empNo:""},F=q({empNo:M().required("Employee Number is required feild")}),r=$({initialValues:C,onSubmit:a=>{console.log(a),B(a)},validationSchema:F}),B=a=>{x(!0);let i,m,A={empNo:a.empNo};i=S,m=A,_.post(i,m,H()).then(function(t){var n,h,u,f,b,g,N,j;console.log("category master..",(n=t==null?void 0:t.data)==null?void 0:n.data),((h=t==null?void 0:t.data)==null?void 0:h.status)===!0?((u=t==null?void 0:t.data)==null?void 0:u.message)==="Employee Not Found"?(localStorage.setItem("employee number",(b=(f=t==null?void 0:t.data)==null?void 0:f.data)==null?void 0:b.emp_no),d("/step-form")):((g=t==null?void 0:t.data)==null?void 0:g.message)==="Employee ID Already Existing"&&(d(`/editstep-form/${(j=(N=t==null?void 0:t.data)==null?void 0:N.data)==null?void 0:j.id}`),s(!0,"Employee ID already existing.")):s(!0,"Error occured while fetching data."),x(!1)}).catch(function(t){console.log("==2 error list...",t),s(!0,"Error occured while fetching data."),x(!1)})},s=(a,i)=>{w(i),p(a)},L=a=>{let i=a.target.name,m=a.target.value;i=="empNo"&&r.setFieldValue("empNo",m.trim())};return e.jsxs(e.Fragment,{children:[k&&e.jsx(D,{}),y&&e.jsx(R,{activateBottomErrorCard:s,errorTitle:E}),e.jsxs(V,{isOpen:v,children:[e.jsx("div",{toggle:o,className:"flex justify-between w-full px-[20px] py-[20px] text-[2.5vh] font-bold bg-[#0F766E] text-white rounded-t-[15px]",close:e.jsx("button",{onClick:()=>o(),children:"×"}),children:e.jsx("h1",{children:"Search Employee No"})}),e.jsx("div",{className:"flex items-center  justify-center overflow-hidden bg-white rounded-b-[15px] h-auto max-[606px]:h-[35vh]",children:e.jsx("div",{className:"block w-full   m-[20px] max[784px]:m-[10]",children:e.jsxs("form",{onSubmit:r.handleSubmit,onChange:L,children:[e.jsx("div",{className:"w-full h-auto bg-white px-[20px] py-[20px] max[784px]:px-[0px]",children:e.jsx("div",{className:"m-3 block ",children:e.jsxs("div",{className:"flex max-[425px]:block",children:[e.jsxs("label",{className:"w-[25vh] mr-2 text-[2vh] text-teal-900 flex items-center justify-center max-[625px]:w-full",children:["Employee No.",e.jsx("span",{className:"text-red-600 ml-1 mr-1",children:"*"})]}),e.jsxs("div",{className:"block",children:[e.jsx("input",{name:"empNo",type:"text",onChange:r.handleChange,value:r.values.empNo,className:"w-[40vh] h-11  p-3 flex text-[2vh]  items-start justify-start  border border-[#E5E7E9] bg-white rounded-[5px] max-[825px]:w-full max-[825px]:h-full"}),e.jsx("br",{}),e.jsx("span",{className:"text-red-600 text-xs",children:r.touched.empNo&&r.errors.empNo?r.errors.empNo:null})]})]})})}),e.jsxs("div",{className:" w-full h-[8vh] flex items-center justify-center max-[768px]:block mb-5 max-[768px]:ml-5",children:[e.jsx("button",{type:"submit",className:"text-[2vh] bg-[#0F766E] text-white border border-[#0F766E]  py-[7px] px-[20px] rounded-[5px] m-[20px] hover:text-[#0F766E] hover:border-[#0F766E] hover:bg-white",children:"Search"}),e.jsx("button",{onClick:()=>{o(),l!=null&&l.Link&&d(`${l==null?void 0:l.Link}`)},type:"cancel",className:"text-[2vh] border-red-600 border text-white bg-red-600 px-[20px] py-[7px]  rounded-[5px] hover:border-red-600 hover:bg-white hover:text-red-600",children:"Cancel"})]}),e.jsx("div",{className:"mb-5 w-full flex justify-center items-center max-[350px]:items-end max-[350px]:mt-12",children:e.jsxs("h1",{className:"text-gray-500",children:["Note : (",e.jsx("span",{className:"text-red-600",children:"*"}),") marks is mandatory."]})})]})})})]})]})}export{G as s};
