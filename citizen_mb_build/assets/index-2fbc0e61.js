import{R as G,u as W,c as Q,Q as n,j as e,b as a,F as H}from"./index-92e4a43a.js";import{u as J}from"./formik.esm-b2c00c7f.js";import{c as K,a as m,b as X}from"./index.esm-2caeedd9.js";import{F as Y,a as Z,T as u}from"./LoadingButton-74721fbe.js";import{u as k}from"./useCustomGeoLocation-084ad635.js";import{r as D}from"./resizeImage-f1558408.js";import{w as I}from"./waterAndSepticTanker-c2379b04.js";import{b as ee,a as te}from"./useCustomQuery-fde80825.js";import{O as ae}from"./OverLayLoader-63fdc757.js";import{R as le}from"./RotatingLoader-59c80683.js";import{C as se}from"./CreateConfirmation-05a4de9a.js";import"./hoist-non-react-statics.cjs-decfaac5.js";import"./ThemeStyle-994f51bc.js";import"./index.esm-663f2081.js";import"./ApiHeader2-b363f7b8.js";import"./Hourglass-5d3d7e52.js";function we(){var h,g,f,v,N,y,w,b,F,C,L,V,R,S,T,q,A,j,_,E;const[x,U]=G.useState(null),$=W(),p=ee({}),{coords:i,isGeolocationEnabled:M}=k(),{id:o}=Q(),t=te({api:I.bookingDetails,config:{applicationId:o},options:{enabled:!!o}}),l=J({enableReinitialize:!0,initialValues:{applicationId:o,status:1,comments:"",latitude:"",longitude:"",document:null},validationSchema:K({comments:m().required("Required").min(10,"Minimum 10 characters").max(100,"Maximum 100 characters"),latitude:m().required("Required"),longitude:m().required("Required"),document:X().required("Required").test("fileSize","File Size is too large",s=>s&&s.size<=2e6)}),onSubmit:async(s,{resetForm:c})=>{await se(l.values.status===1?"Are you sure you want to cancel trip?":"Are you sure you want to successful trip?")?await O(s,c):console.log("cancelled")}}),O=async(s,c)=>{var r,P,z;console.log(s);try{const d=await p.mutateAsync({api:I.submitDriverAction,data:s});(r=d==null?void 0:d.data)!=null&&r.status?(n.success((P=d==null?void 0:d.data)==null?void 0:P.message),$("/dashboard",{replace:!0}),c()):n.error((z=d==null?void 0:d.data)==null?void 0:z.message)}catch{n.error("Something went wrong")}},B=async s=>{if(!M){n.error("Please enable location"),s.target.value=null;return}let c=s.target.files[0];const r=await D(c);r?(U(URL.createObjectURL(r)),l.setFieldValue("document",r),l.setFieldValue("latitude",i==null?void 0:i.latitude),l.setFieldValue("longitude",i==null?void 0:i.longitude)):(l.setFieldValue("document",null),l.setFieldValue("latitude",""),l.setFieldValue("longitude",""))};return t!=null&&t.isFetching?e("div",{className:"flex justify-center items-center h-screen",children:e(le,{})}):a(H,{children:[p.isLoading&&e(ae,{}),a("div",{className:"p-4",children:[a("div",{className:" bg-white w-full relative rounded-lg pb-2 mb-4 cursor-pointer shadow-lg",children:[e("div",{className:"font-semibold bg-[#838FCE] px-4 py-2 text-white rounded-t-lg text-sm",children:"Water Tanker Details"}),e("div",{className:"w-full rounded-lg p-4 space-b-2",children:a("div",{className:"flex flex-row flex-wrap gap-x-4 gap-y-2 w-full",children:[a("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Booking No."}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:(g=(h=t==null?void 0:t.data)==null?void 0:h.data)==null?void 0:g.booking_no})]}),a("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Applicant Name"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:(v=(f=t==null?void 0:t.data)==null?void 0:f.data)==null?void 0:v.applicant_name})]}),a("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Delivery Address"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:(y=(N=t==null?void 0:t.data)==null?void 0:N.data)==null?void 0:y.address})]}),a("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Contact Number"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:(b=(w=t==null?void 0:t.data)==null?void 0:w.data)==null?void 0:b.mobile})]}),a("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6 text-xs text-gray-600 no-underline",children:"Water Tanker Capacity"}),a("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:[(C=(F=t==null?void 0:t.data)==null?void 0:F.data)==null?void 0:C.capacity," Ltr"]})]}),a("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Booking Date"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:(V=(L=t==null?void 0:t.data)==null?void 0:L.data)==null?void 0:V.booking_date})]}),e("hr",{className:"w-full border-b-1 border-gray-200"}),a("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6  text-xs text-gray-600",children:"Assigned Date"}),e("div",{className:"col-span-6 font-semibold  text-gray-700 2xl:text-base text-xs",children:(S=(R=t==null?void 0:t.data)==null?void 0:R.data)==null?void 0:S.assign_date})]}),a("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6  text-xs text-gray-600",children:"Vehicle No."}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:(q=(T=t==null?void 0:t.data)==null?void 0:T.data)==null?void 0:q.vehicle_no})]}),a("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6  text-xs text-gray-600",children:"Delivery Date"}),a("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:[(j=(A=t==null?void 0:t.data)==null?void 0:A.data)==null?void 0:j.delivery_date," ",(E=(_=t==null?void 0:t.data)==null?void 0:_.data)==null?void 0:E.delivery_time]})]})]})})]}),e("p",{className:"border-b"}),e("div",{className:"bg-white py-8  rounded-lg shadow-xl p-4 mt-3",children:e(Y,{formik:l,children:a("div",{className:"space-y-5 ",children:[e("div",{className:"flex-1",children:e(Z,{label:"comments",name:"comments",placeholder:"Enter comments",formik:l})}),a("div",{className:"flex w-full gap-4",children:[e(u,{disabled:!0,label:"Latitude",name:"latitude",placeholder:"Enter Latitude",formik:l}),e(u,{disabled:!0,label:"Longitude",name:"longitude",placeholder:"Enter Longitude",formik:l})]}),e("div",{className:"flex-1"}),a("div",{className:"flex-1",children:[e(u,{label:"Upload document",name:"document",onChange:B,type:"file",placeholder:"Upload document"}),e("span",{className:"text-red-600 absolute text-xs",children:l.touched.document&&l.errors.document?l.errors.document:null})]}),x&&e("div",{className:"flex justify-center",children:e("img",{src:x,alt:"image",className:""})}),a("div",{className:"flex py-2 justify-between mt-8",children:[e("button",{type:"button",onClick:()=>{l.setFieldValue("status",1),l.handleSubmit()},className:"bg-red-500 text-white rounded-lg px-4 py-1.5 text-sm",children:"Cancel Trip"}),e("button",{type:"button",onClick:()=>{l.setFieldValue("status",2),l.handleSubmit()},className:"bg-[#838FCE] text-white rounded-lg px-4 py-1.5 text-sm",children:"Successful Trip"})]})]})})})]})]})}export{we as default};
