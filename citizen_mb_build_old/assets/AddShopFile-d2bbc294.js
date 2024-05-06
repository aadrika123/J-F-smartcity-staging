import{u as H,r as k,R as _,j as l,F as d,b as s,Q as v}from"./index-0e94f450.js";import{u as j}from"./formik.esm-3041fe88.js";import{c as E,a as h}from"./index.esm-53d0ef34.js";import{T as U}from"./ThemeStyle-994f51bc.js";import{R as I}from"./RentalApiList-8b960fdc.js";import{F as W,S as m,T as b,a as $}from"./LoadingButton-41bf7b10.js";import{b as z,a as w}from"./useCustomQuery-b7ab1a67.js";import{u as M}from"./useCustomGeoLocation-12657b0e.js";import{r as Y}from"./resizeImage-f1558408.js";import{O as G}from"./OverLayLoader-ee91cbb3.js";import{R as Q}from"./RotatingLoader-1527129a.js";import"./index.esm-7ab12b54.js";import"./ApiHeader2-b363f7b8.js";import"./Hourglass-60182635.js";const V=[{isRequired:!0,isVisible:!0,name:"circle",label:"Circle",type:"select"},{isRequired:!0,isVisible:!0,name:"market",label:"Market",type:"select"},{isRequired:!0,isVisible:!0,name:"allottee",label:"Allottee",type:"text",inputValidation:["removeDoubleSpace","string"]},{isRequired:!0,isVisible:!0,name:"address",label:"Address",type:"text",inputValidation:["removeDoubleSpace"]},{isRequired:!0,isVisible:!0,name:"rate",label:"Rate",type:"text",inputValidation:["rupee"]},{isRequired:!0,isVisible:!0,name:"arrear",label:"Arrear",type:"text",inputValidation:["rupee"]},{isRequired:!0,isVisible:!0,name:"lastPayDt",label:"Last payment date",type:"date"},{isRequired:!0,isVisible:!0,name:"lastPayAmt",label:"Last payment amount",type:"text",inputValidation:["rupee"]},{isRequired:!0,isVisible:!0,name:"allottedLength",label:"Allotted Length",type:"text",inputValidation:["rupee"]},{isRequired:!0,isVisible:!0,name:"allottedBreadth",label:"Allotted Breadth",type:"text",inputValidation:["rupee"]},{isRequired:!0,isVisible:!0,name:"allottedHeight",label:"Allotted Height",type:"text",inputValidation:["rupee"]},{isRequired:!0,isVisible:!0,name:"area",label:"Area",type:"text",inputValidation:["rupee"]},{isRequired:!0,isVisible:!0,name:"presentLength",label:"Present Length",type:"text",inputValidation:["rupee"]},{isRequired:!0,isVisible:!0,name:"presentBreadth",label:"Present Breadth",type:"text",inputValidation:["rupee"]},{isRequired:!0,isVisible:!0,name:"presentHeight",label:"Present Height",type:"text",inputValidation:["rupee"]},{isRequired:!0,isVisible:!0,name:"noOfFloors",label:"No. Of Floors",type:"text",inputValidation:["number"]},{isRequired:!0,isVisible:!0,name:"presentOccupier",label:"Present Occupier",type:"text",inputValidation:["removeDoubleSpace","string"]},{isRequired:!0,isVisible:!0,name:"tradeLicense",label:"Trade license no.",type:"text",inputValidation:["removeDoubleSpace"]},{isRequired:!0,isVisible:!0,name:"construction",label:"Construction",type:"select",options:f=>f.map(u=>l("option",{value:u==null?void 0:u.id,children:u==null?void 0:u.construction_type},u.id))},{isRequired:!0,isVisible:!0,name:"electricity",label:"Electricity",type:"select",options:[{value:1,label:"Yes"},{value:0,label:"No"}]},{isRequired:!1,isVisible:!1,name:"electricityNo",label:"Electricity no.",type:"text",inputValidation:["removeDoubleSpace"]},{isRequired:!0,isVisible:!0,name:"water",label:"Water",type:"select",options:[{value:1,label:"Yes"},{value:0,label:"No"}]},{isRequired:!1,isVisible:!1,name:"waterConsumerNo",label:"Water consumer no.",type:"text",inputValidation:["removeDoubleSpace"]},{isRequired:!0,isVisible:!0,name:"contactNo",label:"Contact no.",type:"text",inputValidation:["mobile","number"]},{isRequired:!0,isVisible:!0,name:"longitude",label:s("span",{children:["Longitude ",l("br",{}),l("small",{className:"text-blue-700",children:"(When you choose the photo1, it will be auto filled)"})]}),type:"text",placeholder:"Longitude"},{isRequired:!0,isVisible:!0,name:"latitude",label:s("span",{children:["Latitude ",l("br",{}),l("small",{className:"text-blue-700",children:"(When you choose the photo1, it will be auto filled)"})]}),type:"text",placeholder:"Latitude"},{isRequired:!0,isVisible:!0,name:"photo1Path",label:"Photo 1",type:"file"},{isRequired:!0,isVisible:!0,name:"photo2Path",label:"Photo 2",type:"file"},{isRequired:!0,isVisible:!0,name:"remarks",label:"Remarks",type:"textarea",inputValidation:["removeDoubleSpace"]}];function ae(){const{titleStyle:f}=U(),{api_UlbCircleList:u,api_locationByCircleList:S,api_addShops:A,api_getConstructionType:C}=I();H();const{coords:a}=M(),[N,O]=k.useState(""),[R,B]=k.useState(""),q=z({}),y=(e,t)=>{v.dismiss(),t=="success"&&v.success(e),t=="error"&&v.error(e)},r=j({initialValues:V.reduce((e,t)=>(e[t.name]="",e),{}),enableReinitialize:!0,onSubmit:async e=>{await T(e)},validationSchema:E().shape({electricityNo:h().when("electricity",{is:e=>e==1,then:()=>h().required("This field is required")}),waterConsumerNo:h().when("water",{is:e=>e==1,then:()=>h().required("This field is required")}),...V.reduce((e,t)=>(t.isRequired&&(e[t.name]=h().required("This field is required")),e),{})})}),p=w({api:u,options:{enabled:!0}}),x=w({api:S,config:{circleId:r.values.circle},value:[r.values.circle],options:{enabled:!!r.values.circle}}),g=w({api:C,options:{enabled:!0}}),T=async e=>{var c;let t,n;t=A,n={circleId:e==null?void 0:e.circle,marketId:e==null?void 0:e.market,allottee:e==null?void 0:e.allottee,address:e==null?void 0:e.address,rate:e==null?void 0:e.rate,arrear:e==null?void 0:e.arrear,lastPayDt:e==null?void 0:e.lastPayDt,lastPayAmt:e==null?void 0:e.lastPayAmt,allottedLength:e==null?void 0:e.allottedLength,allottedBreadth:e==null?void 0:e.allottedBreadth,allottedHeight:e==null?void 0:e.allottedHeight,area:e==null?void 0:e.area,presentLength:e==null?void 0:e.presentLength,presentBreadth:e==null?void 0:e.presentBreadth,presentHeight:e==null?void 0:e.presentHeight,noOfFloors:e==null?void 0:e.noOfFloors,presentOccupier:e==null?void 0:e.presentOccupier,tradeLicense:e==null?void 0:e.tradeLicense,construction:e==null?void 0:e.construction,electricity:e==null?void 0:e.electricity,electricityNo:e==null?void 0:e.electricityNo,water:e==null?void 0:e.water,waterConsumerNo:e==null?void 0:e.waterConsumerNo,contactNo:e==null?void 0:e.contactNo,longitude:e==null?void 0:e.longitude,latitude:e==null?void 0:e.latitude,photo1Path:e==null?void 0:e.photo1Path,photo2Path:e==null?void 0:e.photo2Path,remarks:e==null?void 0:e.remarks};try{const o=await q.mutateAsync({api:t,data:n});(c=o==null?void 0:o.data)!=null&&c.status?(y("Data saved successfully","success"),r.resetForm()):y("Data not saved","error")}catch{y("Data not saved","error")}},D=async(e,t)=>{const n=e.target.files[0],c=await Y(n),o=new File([c],n==null?void 0:n.name,{type:n==null?void 0:n.type});t==="photo1Path"?(r.setFieldValue("photo1Path",o),r.setFieldValue("latitude",a==null?void 0:a.latitude),r.setFieldValue("longitude",a==null?void 0:a.longitude),O(URL.createObjectURL(o))):(r.setFieldValue("photo2Path",o),B(URL.createObjectURL(o)))};return _.useEffect(()=>{r.values.electricity==0&&r.setFieldValue("electricityNo",""),r.values.water==0&&r.setFieldValue("waterConsumerNo","")},[r.values.electricity,r.values.water]),p!=null&&p.isLoading?l(d,{children:l(Q,{})}):s(d,{children:[q.isLoading&&l(G,{}),l("div",{className:"bg-[#eff2f0] ",children:s("div",{className:" container mx-auto p-4",children:[s("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 p-4 border-b",children:[s("div",{className:"col-span-6 flex space-x-3",children:[l("img",{src:"https://cdn-icons-png.flaticon.com/128/2981/2981313.png",className:"h-10 -mt-2"}),l("h1",{className:`${f}`,children:"Add Shops"})]}),l("div",{className:"col-span-6 flex space-x-3 justify-end"})]}),l(W,{formik:r,children:s("div",{className:"bg-[#fdfdfd]  rounded-2xl shadow-md p-2",children:[l("div",{className:"p-2",children:V.map((e,t)=>{var n,c,o,F,P,L;if(e.name==="circle")return l("div",{className:"form-group flex-shrink max-w-full px-0 w-full md:w-1/4 mb-4",children:s(m,{name:e.name,formik:r,label:e.label,children:[l("option",{selected:!0,children:"select"}),(c=(n=p==null?void 0:p.data)==null?void 0:n.data)==null?void 0:c.map(i=>l("option",{value:i==null?void 0:i.id,children:i==null?void 0:i.circle_name},i.id))]})},t);if(e.name==="market")return l("div",{className:"form-group flex-shrink max-w-full px-0 w-full md:w-1/4 mb-4",children:s(m,{name:e.name,formik:r,label:e.label,children:[l("option",{selected:!0,children:"select"}),(F=(o=x==null?void 0:x.data)==null?void 0:o.data)==null?void 0:F.map(i=>l("option",{value:i==null?void 0:i.id,children:i==null?void 0:i.market_name},i.id))]})},t);if(e.name==="electricity")return s(d,{children:[l("div",{className:"form-group flex-shrink max-w-full px-0 w-full md:w-1/4 mb-4",children:s(m,{name:e.name,formik:r,label:e.label,children:[l("option",{selected:!0,children:"select"}),e.options.map(i=>l("option",{value:i.value,children:i.label},i.value))]})},t),r.values.electricity==1&&l("div",{className:"form-group flex-shrink max-w-full px-0 w-full md:w-1/4 mb-4",children:l(b,{name:"electricityNo",formik:r,label:" Electricity No"})},t)]});if(e.name==="water")return s(d,{children:[l("div",{className:"form-group flex-shrink max-w-full px-0 w-full md:w-1/4 mb-4",children:s(m,{name:e.name,formik:r,label:e.label,children:[l("option",{selected:!0,children:"select"}),e.options.map(i=>l("option",{value:i.value,children:i.label},i.value))]})},t),r.values.water==1&&l("div",{className:"form-group flex-shrink max-w-full px-0 w-full md:w-1/4 mb-4",children:l(b,{name:"waterConsumerNo",formik:r,label:" Consumer No"})},t)]});if(e.name==="construction")return l("div",{className:"form-group flex-shrink max-w-full px-0 w-full md:w-1/4 mb-4",children:s(m,{name:e.name,formik:r,label:e.label,children:[l("option",{selected:!0,children:"select"}),(L=(P=g==null?void 0:g.data)==null?void 0:P.data)==null?void 0:L.map(i=>l("option",{value:i==null?void 0:i.id,children:i==null?void 0:i.construction_type},i.id))]})},t);if(e.type==="text"&&e.isVisible)return l("div",{className:"form-group flex-shrink max-w-full px-0 w-full md:w-1/4 mb-4",children:l(b,{name:e.name,formik:r,label:e.label,inputValidation:e.inputValidation,placeholder:e.placeholder,disabled:e.name==="latitude"||e.name==="longitude"})},t);if(e.type==="date")return l("div",{className:"form-group flex-shrink max-w-full px-0 w-full md:w-1/4 mb-4",children:l(b,{name:e.name,formik:r,label:e.label,type:"date"})},t);if(e.type==="file")return s("div",{className:"form-group flex-shrink max-w-full px-0 w-full md:w-1/4 mb-4",children:[l(b,{name:e.name,label:e.label,type:"file",onChange:i=>D(i,e.name)}),l("p",{className:"text-red-600 text-xs",children:(r==null?void 0:r.touched[e.name])&&(r==null?void 0:r.errors[e.name])}),e.name==="photo1Path"&&N&&l("img",{src:N,className:"h-20"}),e.name==="photo2Path"&&R&&l("img",{src:R,className:"h-20"})]},t);if(e.type==="textarea")return l("div",{className:"form-group flex-shrink max-w-full px-0 w-full md:w-1/4 mb-4",children:l($,{name:e.name,formik:r,label:e.label,inputValidation:e.inputValidation})},t)})}),l("div",{className:"pb-8",children:l("button",{type:"submit",className:"bg-[#6AB783] px-7 py-2 text-white font-semibold rounded leading-5 shadow-lg w-full",children:"Save"})})]})})]})})]})}export{ae as default};
