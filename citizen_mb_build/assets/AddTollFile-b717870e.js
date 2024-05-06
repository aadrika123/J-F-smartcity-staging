import{u as $,r as w,j as r,F as P,b as o,Q as m}from"./index-ace27d6f.js";import{u as M}from"./formik.esm-70d5e597.js";import{T as z}from"./ThemeStyle-994f51bc.js";import{c as B,a as W}from"./index.esm-70f5a44d.js";import{R as E}from"./RentalApiList-cad21e89.js";import{u as G}from"./useCustomGeoLocation-295d1e12.js";import{r as q}from"./resizeImage-f1558408.js";import{b as Q,a as h}from"./useCustomQuery-48e25bd8.js";import{F as H,S as b,a as J,T as L}from"./LoadingButton-c50b942f.js";import{O as K}from"./OverLayLoader-67ca2fbe.js";import{R as X}from"./RotatingLoader-a4115d74.js";import"./ApiHeader2-b363f7b8.js";import"./index.esm-2d99ca62.js";import"./Hourglass-eaf35b74.js";const g=[{isRequired:!0,isVisible:!0,label:"Circle",name:"circle",type:"select"},{isRequired:!0,isVisible:!0,label:"Market",name:"market",type:"select"},{isRequired:!0,isVisible:!0,label:"Vendor Name",name:"vendorName",type:"text",inputValidation:["string","removeDoubleSpace"]},{isRequired:!0,isVisible:!0,label:"Mobile",name:"mobile",type:"text",inputValidation:["mobile","number"]},{isRequired:!0,isVisible:!0,label:"Address",name:"address",type:"text",inputValidation:["string","removeDoubleSpace"]},{isRequired:!0,isVisible:!0,label:"Rate",name:"rate",type:"select"},{isRequired:!0,isVisible:!0,label:o("span",{children:["Longitude ",r("br",{}),r("small",{className:"text-blue-700",children:"(When you choose the photo1, it will be auto filled)"})]}),placeholder:"Longitude",name:"longitude",type:"text"},{isRequired:!0,isVisible:!0,label:o("span",{children:["Latitude ",r("br",{}),r("small",{className:"text-blue-700",children:"(When you choose the photo1, it will be auto filled)"})]}),placeholder:"Latitude",name:"latitude",type:"text"},{isRequired:!0,isVisible:!0,label:"Photo1 Path",name:"photo1Path",type:"file"},{isRequired:!0,isVisible:!0,label:"Photo2 Path",name:"photo2Path",type:"file"},{isRequired:!0,isVisible:!0,label:"Remarks",name:"remarks",type:"textarea",inputValidation:["string","removeDoubleSpace"]}];function pe(){const v=Q({}),{titleColor:k}=z(),{coords:t}=G(),{api_UlbCircleList:T,api_locationByCircleList:S,api_addToll:C,api_getTollRateList:_}=E(),j=$(),[f,A]=w.useState(""),[y,O]=w.useState(""),x=(e,l)=>{m.dismiss(),l=="success"&&m.success(e),l=="error"&&m.error(e)},s=M({initialValues:g.reduce((e,l)=>(e[l.name]="",e),{}),enableReinitialize:!0,onSubmit:async e=>{await U(e)},validationSchema:B().shape(g.reduce((e,l)=>(l.isRequired&&(e[l.name]=W().required("This field is required")),e),{}))}),I=async(e,l)=>{if(e=="photo1Path"){const n=await q(l),c=new File([n],l==null?void 0:l.name,{type:l==null?void 0:l.type});s.setFieldValue("latitude",t==null?void 0:t.latitude),s.setFieldValue("longitude",t==null?void 0:t.longitude),s.setFieldValue("photo1Path",c),A(URL.createObjectURL(l))}else{const n=await q(l),c=new File([n],l==null?void 0:l.name,{type:l==null?void 0:l.type});s.setFieldValue("photo2Path",c),O(URL.createObjectURL(l))}},U=async e=>{let l={circleId:e==null?void 0:e.circle,marketId:e==null?void 0:e.market,vendorName:e==null?void 0:e.vendorName,address:e==null?void 0:e.address,rate:e==null?void 0:e.rate,mobile:e==null?void 0:e.mobile,photograph1:e==null?void 0:e.photo1Path,photograph2:e==null?void 0:e.photo2Path,longitude:e==null?void 0:e.longitude,latitude:e==null?void 0:e.latitude,remarks:e==null?void 0:e.remarks};const n=await v.mutateAsync({api:C,data:l});n.data.status?(x(n.data.message,"success"),j("/municipal-rental")):x(n.data.message,"error")},a=h({api:T,options:{enabled:!0}}),p=h({api:S,config:{circleId:s.values.circle},value:[s.values.circle],options:{enabled:!!s.values.circle}}),d=h({api:_,options:{enabled:!0}});return a!=null&&a.isLoading?r(P,{children:r(X,{})}):o(P,{children:[v.isLoading&&r(K,{}),r("div",{className:" bg-[#eff2f0]",children:o("div",{className:"container mx-auto p-4",children:[o("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 p-4 border-b",children:[o("div",{className:"col-span-6 flex space-x-3",children:[r("img",{src:"https://cdn-icons-png.flaticon.com/128/2981/2981313.png",className:"h-10 -mt-2"}),r("h1",{className:`font-semibold ${k} text-xl px-4 py-2 text-gray-600 -mt-2`,children:"Add Toll"})]}),r("div",{className:"col-span-6 flex space-x-3 justify-end"})]}),r("div",{className:"bg-[#fdfdfd]  rounded-2xl shadow-md p-2",children:o(H,{formik:s,children:[r("div",{className:"p-2",children:r("div",{className:"valid-form flex flex-wrap flex-row -mx-4",children:r("div",{className:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4 gap-5",children:g.map((e,l)=>{var n,c,N,R,V,F;if(e.name==="circle")return r("div",{className:"mt-4",children:o(b,{name:e.name,label:e.label,formik:s,children:[r("option",{selected:!0,children:"select"}),(c=(n=a==null?void 0:a.data)==null?void 0:n.data)==null?void 0:c.map((i,u)=>r("option",{value:i==null?void 0:i.id,children:i==null?void 0:i.circle_name},u))]},l)});if(e.name==="market")return r("div",{className:"mt-4",children:o(b,{name:e.name,label:e.label,formik:s,children:[r("option",{selected:!0,children:"select"}),(R=(N=p==null?void 0:p.data)==null?void 0:N.data)==null?void 0:R.map((i,u)=>r("option",{value:i==null?void 0:i.id,children:i==null?void 0:i.market_name},u))]},l)});if(e.name==="rate")return r("div",{className:"mt-4",children:o(b,{name:e.name,label:e.label,formik:s,children:[r("option",{selected:!0,children:"select"}),(F=(V=d==null?void 0:d.data)==null?void 0:V.data)==null?void 0:F.map((i,u)=>o("option",{value:i==null?void 0:i.id,children:[i==null?void 0:i.toll_type," (Rs.",i==null?void 0:i.rate,")"]},u))]},l)});if(e.type==="textarea")return r("div",{className:"mt-4",children:r(J,{name:e.name,label:e.label,formik:s,inputValidation:e.inputValidation},l)});if(e.type=="text")return r("div",{className:"mt-4",children:r(L,{name:e.name,label:e.label,formik:s,inputValidation:e.inputValidation,placeholder:e.placeholder,disabled:e.name==="latitude"||e.name==="longitude"},l)});if(e.type=="file")return o("div",{className:"mt-4",children:[r(L,{name:e.name,label:e.label,type:"file",onChange:i=>I(e.name,i.target.files[0])},l),r("p",{className:"text-red-500 text-xs",children:s.touched[e.name]&&s.errors[e.name]?s.errors[e.name]:null}),e.name==="photo1Path"&&f&&r("img",{src:f,className:"h-14"}),e.name==="photo2Path"&&y&&r("img",{src:y,className:"h-14"})]})})})})}),r("div",{className:"pb-8",children:r("button",{type:"submit",className:"bg-green-500 px-7 py-2 text-white font-semibold rounded leading-5 shadow-lg w-full",children:"Save"})})]})})]})})]})}export{pe as default};
