import{j as e,F as u,b as s,L as p,Q as m}from"./index-0e94f450.js";import{u as g,a as b}from"./useCustomQuery-b7ab1a67.js";import{s as h}from"./waterAndSepticTanker-049fa680.js";import{C as v}from"./CreateConfirmation-8845d417.js";import{T as x,F as w}from"./LoadingButton-41bf7b10.js";import{u as f}from"./formik.esm-3041fe88.js";import"./ApiHeader2-b363f7b8.js";import"./ThemeStyle-994f51bc.js";import"./index.esm-7ab12b54.js";const N=({data:t,refetch:i})=>{const n=g({}),d=async c=>{var r,o,a;if(await v("Are you sure you want to mark trip?"))try{const l=await n.mutateAsync({api:h.outOfDelivery,data:{applicationId:c}});(r=l==null?void 0:l.data)!=null&&r.status?(m.success((o=l==null?void 0:l.data)==null?void 0:o.message),i()):m.error((a=l==null?void 0:l.data)==null?void 0:a.message)}catch{m.error("Something went wrong")}};return e(u,{children:s("div",{className:"bg-white w-full relative rounded-lg pb-2 mb-4 cursor-pointer shadow-lg",children:[s("div",{className:"font-semibold bg-[#838FCE] px-4 py-2 text-white rounded-t-lg text-sm",children:["Water Tanker Details"," "]}),e("div",{className:"w-full rounded-lg p-4 space-b-2",children:s("div",{className:"flex flex-row flex-wrap gap-x-4 gap-y-2 w-full",children:[s("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Vehicle No."}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:t.vehicle_no})]}),s("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Booking No."}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:t.booking_no})]}),s("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Applicant Name"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:t.applicant_name})]}),s("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Address"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs w-44 truncate",children:t.address})]}),s("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Cleaning Date"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:t.cleaning_date})]}),s("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Contact Number"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:t.mobile})]}),s("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Booking Date"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:t.booking_date})]}),s("div",{className:"w-full md:w-[40%] grid grid-cols-12",children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Driver Assigned Date"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-xs",children:t.assign_date})]})]})}),(t==null?void 0:t.delivery_track_status)==0&&s("div",{className:"flex justify-between w-full py-1  text-sm",children:[e(p,{to:"/track-location-septic/1",className:"mb-2 mx-2 text-center relative text-white px-2 2xl:px-4 py-[0.3rem] text-xs 2xl:text-sm md:absolute md:bottom-3 2xl:bottom-2 md:right-2 rounded-md bg-green-500 border-green-400 hover:border-green-600 hover:bg-green-600 hover:text-white shadow-sm  cursor-pointer poppins md:mt-0 w-full",children:"View Location"}),(t==null?void 0:t.is_vehicle_sent)==0?e("button",{onClick:()=>d(t==null?void 0:t.id),className:"mb-2 mx-2 text-center relative text-white px-2 2xl:px-4 py-[0.3rem] text-xs 2xl:text-sm md:absolute md:bottom-3 2xl:bottom-2 md:right-2 rounded-md bg-yellow-500 border-yellow-400 hover:border-yellow-600 hover:bg-yellow-600 hover:text-white shadow-sm  cursor-pointer poppins md:mt-0 w-full",children:"Mark Trip"}):e(p,{to:`/septic-tanker-detail/${t==null?void 0:t.id}`,className:"mb-2 text-center mx-2 relative text-white px-2 2xl:px-4 py-[0.3rem] text-xs 2xl:text-sm md:absolute md:bottom-3 2xl:bottom-2 md:right-2 rounded-md bg-indigo-500 border-indigo-400 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white shadow-sm  cursor-pointer poppins md:mt-0 w-full",children:"Action"})]})]})})},y=N;function k({formik:t}){return s("div",{className:"bg-white rounded-2xl shadow-md p-4 mb-4",children:[e("h1",{className:"text-sm font-semibold mb-2",children:"Septic Tanker Inbox"}),e("hr",{className:"my-2"}),s("div",{className:"flex flex-wrap -mx-3 mb-2",children:[e("div",{className:"w-full md:w-1/3 px-3 mb-2 md:mb-0",children:e(x,{name:"Search...",formik:t,placeholder:"Search...",className:"w-full py-1"})}),s("div",{className:"w-full flex gap-4 px-3 mb-2 md:mb-0",children:[e("div",{className:"w-full",children:e(x,{type:"date",label:"From Date",name:"fromDate",formik:t,placeholder:"Enter from date",className:"w-full py-1"})}),e("div",{className:"w-full",children:e(x,{type:"date",label:"Upto Date",name:"uptoDate",formik:t,placeholder:"Enter upto date",className:"w-full py-1"})})]})]}),e("div",{className:"flex justify-end",children:e("button",{className:"bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded text-sm",children:"Search"})})]})}function V(){var d,c,r,o;const t=f({initialValues:{key:"",fromDate:"",uptoDate:""},onSubmit:a=>{n()}}),i=b({api:h.driverList,config:{key:t.values.key,fromDate:t.values.fromDate,uptoDate:t.values.uptoDate},options:{enabled:!0}}),n=a=>{i.refetch()};return s("div",{className:"p-4",children:[e(w,{formik:t,children:e(k,{formik:t})}),e("div",{className:"border-b-2 border-gray-200 my-4"}),i.isLoading&&e("div",{className:"text-center",children:"Loading..."}),i.isError&&e("div",{className:"text-center text-red-500",children:"Something went wrong"}),i.isSuccess&&((c=(d=i.data)==null?void 0:d.data)==null?void 0:c.map((a,l)=>e(y,{data:a,refetch:i.refetch},l))),i.isSuccess&&((o=(r=i.data)==null?void 0:r.data)==null?void 0:o.length)<=0&&e("div",{className:"text-center mt-32",children:"No data found"})]})}export{V as default};
