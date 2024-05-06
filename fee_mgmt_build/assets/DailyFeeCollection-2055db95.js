import{r as n,j as e,R as T,b as F,A as K}from"./index-dd1288ad.js";import{u as W,F as M,a as z,b as Y}from"./formik.esm-5fbe598e.js";import{c as j,a as h,b as L}from"./index.esm-e655e2bf.js";import{T as r}from"./TextField-b2648471.js";import{C as U,a as H}from"./index.esm-ad87d3fc.js";import{P as G}from"./Page-c37fa378.js";import{B as J}from"./Breadcrumb-5eaf1e4d.js";import{F as b,I as N,S as C,a as g}from"./Select-35bb0e77.js";import{M as y}from"./MenuItem-f9d456ce.js";import{T as O}from"./TextField-4875ffa0.js";const ne=()=>{const[I,v]=n.useState(!1),{api_class:w,api_fy:A,api_daily_fee_search:$}=K,[d,D]=n.useState(),[m,R]=n.useState(),[t,S]=n.useState(null),k=async()=>{try{const s=await F.post(`${w}`,{});s.status==200&&(console.log(s.data),D(s.data.data))}catch(s){console.log(s)}},q=async()=>{try{const s=await F.post(`${A}`,{});s.status==200&&(console.log(s.data),R(s.data.data))}catch(s){console.log(s)}};n.useEffect(()=>{k(),q()},[]);const p=new Date;let _=p.getDate(),E=p.getMonth()+1,P=p.getFullYear(),f=`${_}-${E}-${P}`;j({fyId:h().required("Required"),classId:h().required("Required"),admissionNo:h().required("Required"),dailyFeeCollection:L().of(j().shape({feesName:h().required("Required")}))});const l=W({initialValues:{fyId:"",classId:"",admissionNo:"",searchId:"admission",dailyFeeCollection:[{date:f,feesName:"",amount:0,receivedAmount:0,isReceived:0,dueAmount:0}]},onSubmit:async s=>{console.log("at submit",s);const a=s.dailyFeeCollection.map(c=>({...c,fyId:s.fyId,classId:s.classId,admissionNo:s.admissionNo}));console.log(a),v(!1),l.resetForm()}});n.useEffect(()=>{}),console.log(l.values.admissionNo,l.values.classId,l.values.fyId,l.values.dailyFeeCollection);const V=()=>{B()},B=async()=>{var s;try{const a=await F.post(`${$}`,{fyId:l.values.fyId,classId:l.values.classId,admissionNo:l.values.admissionNo,searchId:l.values.searchId});console.log(a.data),((s=a==null?void 0:a.data)==null?void 0:s.status)==!0&&(S(a.data.data),v(!0))}catch(a){console.log(a)}};n.useEffect(()=>{v(!1)},[]);const x=(s,a)=>{let c=s?parseInt(s.target.value):s.target.value===""?0:s.target.value;console.log(a);let u=s.target.name;u==`dailyFeeCollection.${a}.amount`&&l.setFieldValue(`dailyFeeCollection.${a}.amount`,c),u==`dailyFeeCollection.${a}.receivedAmount`&&l.setFieldValue(`dailyFeeCollection.${a}.receivedAmount`,s?parseInt(s.target.value):0),l.values.dailyFeeCollection[a].amount&&l.values.dailyFeeCollection[a].receivedAmount?l.setFieldValue(`dailyFeeCollection.${a}.dueAmount`,l.values.dailyFeeCollection[a].amount-l.values.dailyFeeCollection[a].receivedAmount):l.values.dailyFeeCollection[a].amount&&(l.values.dailyFeeCollection[a].receivedAmount===0||l.values.dailyFeeCollection[a].receivedAmount==="")?l.setFieldValue(`dailyFeeCollection.${a}.dueAmount`,l.values.dailyFeeCollection[a].amount-0):l.values.dailyFeeCollection[a].receivedAmount&&(l.values.dailyFeeCollection[a].amount===0||l.values.dailyFeeCollection[a].amount==="")?l.setFieldValue(`dailyFeeCollection.${a}.dueAmount`,0-l.values.dailyFeeCollection[a].receivedAmount):l.setFieldValue(`dailyFeeCollection.${a}.dueAmount`,0)};return e.jsxs(G,{title:"Daily fee collection",pageName:"Daily Fee Collection",children:[e.jsx(J,{list:[{title:"Home",path:"/home"},{title:"Daily Fee Collection",path:"#"}]}),e.jsx("h1",{className:"text-center text-4xl font-semibold mt-[2vh]",children:"Daily Fee Collection"}),e.jsx("div",{children:e.jsx(M,{value:l,children:e.jsxs(z,{autoComplete:"off",onChange:x,onSubmit:l.handleSubmit,children:[e.jsxs("div",{className:"px-10 mt-8 grid grid-cols-12  gap-x-4  ",children:[e.jsx("div",{className:"mt-4 col-span-12 lg:col-span-3 ",children:e.jsxs(b,{fullWidth:!0,error:l.touched.fyId&&!!l.errors.fyId,children:[e.jsx(N,{id:"demo-simple-select-label",sx:{m:-1},children:"Select Financial Year"}),e.jsxs(C,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Financial Year",...l.getFieldProps("fyId"),fullWidth:!0,size:"small",children:[e.jsx(y,{value:"",children:"Select"}),m&&(m==null?void 0:m.map(s=>e.jsx(y,{value:s==null?void 0:s.id,children:s==null?void 0:s.financial_year})))]}),e.jsx(g,{children:l.touched.fyId&&l.errors.fyId})]})}),e.jsx("div",{className:"mt-4 col-span-12 lg:col-span-3 ",children:e.jsxs(b,{fullWidth:!0,error:l.touched.classId&&!!l.errors.classId,children:[e.jsx(N,{id:"demo-simple-select-label",sx:{m:-1},children:"Select Class"}),e.jsxs(C,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Class",...l.getFieldProps("classId"),fullWidth:!0,size:"small",children:[e.jsx(y,{value:"",children:"Select"}),d&&(d==null?void 0:d.map(s=>e.jsx(y,{value:s==null?void 0:s.id,children:s==null?void 0:s.class_name})))]}),e.jsx(g,{children:l.touched.classId&&l.errors.classId})]})}),e.jsx("div",{className:"mt-4 col-span-12 lg:col-span-3 ",children:e.jsx(O,{type:"text",...l.getFieldProps("admissionNo"),label:"Admission No",fullWidth:!0,size:"small",error:l.touched.admissionNo&&!!l.errors.admissionNo,helperText:l.touched.admissionNo&&l.errors.admissionNo})})]}),e.jsx("div",{className:"mt-7 flex justify-center items-center  max-[1016px]:py-2",children:e.jsx("button",{onClick:V,type:"button",className:"px-11 py-3 bg-[#0F766E] text-white font-medium text-sm leading-tight  rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out",children:"Search"})}),I&&t!==null&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"border h-[10vh] mb-[5vh] mt-[3vh] ml-[2vh] mr-[2vh]   ",children:[e.jsx("h1",{className:"px-2 font-semibold py-2 text-xl absolute bg-white ml-[2vh] -mt-[2vh] h-[2vh]",children:"Basic Details"}),e.jsxs("div",{className:"flex text-lg px-10 font-bold justify-between mt-[3vh] flex-wrap",children:[e.jsxs("label",{htmlFor:"",children:["Name:"," ",e.jsx("span",{className:"font-semibold",children:t==null?void 0:t.full_name})," "]}),e.jsxs("label",{htmlFor:"",children:["Class:"," ",e.jsx("span",{className:"font-semibold",children:t==null?void 0:t.class_name})," "]}),e.jsxs("label",{htmlFor:"",children:["Section:"," ",e.jsx("span",{className:"font-semibold",children:t==null?void 0:t.section})," "]}),e.jsxs("label",{htmlFor:"",children:["Roll no:"," ",e.jsx("span",{className:"font-semibold",children:t==null?void 0:t.roll_no})]}),e.jsxs("label",{htmlFor:"",children:["Status:"," ",e.jsx("span",{className:"font-semibold",children:t==null?void 0:t.status})]})]})]}),e.jsx("div",{className:"border h-auto mt-[3vh] ml-[2vh] mr-[2vh]   ",children:e.jsx(Y,{name:"dailyFeeCollection",children:s=>{var a,c;return e.jsx(e.Fragment,{children:((a=l==null?void 0:l.values.dailyFeeCollection)==null?void 0:a.length)>0&&((c=l==null?void 0:l.values)==null?void 0:c.dailyFeeCollection.map((u,o)=>e.jsx(T.Fragment,{children:e.jsxs("div",{className:"px-10 flex flex-wrap gap-x-1 ",children:[e.jsx("div",{className:"mt-4 ",children:e.jsx(r,{className:"w-[8vw]",type:"text",disabled:!0,value:f,formik:l,label:"Date",name:`dailyFeeCollection.${o}.date`,isDynamic:!0})}),e.jsx("div",{className:"mt-4 ",children:e.jsx(r,{className:"w-[8vw]",type:"text",formik:l,label:"Fees Name",name:`dailyFeeCollection.${o}.feesName`,isDynamic:!0})}),e.jsx("div",{className:"mt-4 ",children:e.jsx(r,{min:0,className:"w-[8vw]",type:"number",formik:l,label:"Amount",name:`dailyFeeCollection.${o}.amount`,onKeyUp:i=>x(i,o),isDynamic:!0,onKeyDown:i=>["e","E","+","-"," "].includes(i.key)&&i.preventDefault()})}),e.jsx("div",{className:"mt-4 ",children:e.jsx(r,{className:"w-[8vw]",type:"number",min:0,formik:l,label:"Received Amount",name:`dailyFeeCollection.${o}.receivedAmount`,onKeyUp:i=>x(i,o),isDynamic:!0,onKeyDown:i=>["e","E","+","-"," "].includes(i.key)&&i.preventDefault()})}),e.jsx("div",{className:"mt-4 ",children:e.jsx(r,{disabled:!0,min:0,className:"w-[8vw]",type:"number",formik:l,value:l.values.dailyFeeCollection[o].dueAmount,label:"Due Amount",name:`dailyFeeCollection.${o}.dueAmount`,isDynamic:!0,onKeyDown:i=>["e","E","+","-"," "].includes(i.key)&&i.preventDefault()})}),e.jsx("div",{className:"mt-4 ",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-gray-700",htmlFor:"",children:"Received"}),e.jsx("input",{formik:l,name:`dailyFeeCollection.${o}.isReceived`,className:"h-6 mt-2",type:"checkbox",checked:l.values.dailyFeeCollection[o].isReceived===1,onChange:i=>{l.setFieldValue(`dailyFeeCollection.${o}.isReceived`,i.target.checked?1:0)}})]})}),e.jsxs("div",{className:"mt-10",children:["|",e.jsx("button",{type:"button",className:"mt-1",onClick:()=>{if(u.feesName==="")return alert("Please fill all fields");s.push({date:f,feesName:"",amount:0,isReceived:0,dueAmount:0,receivedAmount:0})},children:e.jsx(U,{className:"inline-block w-9 h-9 text-blue-600"})}),o>0&&e.jsx("button",{className:"mt-1",type:"button",onClick:()=>s.remove(o),children:e.jsx(H,{className:"inline-block w-9 h-9 text-red-600"})})]})]})},o)))})}})}),e.jsx("div",{className:"mt-7 flex justify-center items-center  max-[1016px]:py-2",children:e.jsx("button",{type:"submit",className:"px-11 py-3 bg-[#6366f1] text-white font-medium text-sm leading-tight  rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out",children:"Submit"})})]})]})})})]})};export{ne as default};
