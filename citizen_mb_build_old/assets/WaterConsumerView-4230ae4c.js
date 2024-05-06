import{M as L,R as W,r as c,j as r,b as s,a as C,c as B,u as U,F as A,l as j}from"./index-0e94f450.js";import{h as P}from"./moment-db06c914.js";import{W as q}from"./WaterApiList-dfcbb003.js";import{C as G}from"./ConsumerButtons-843a123c.js";import z from"./CommonLoader-bddb49c4.js";import"./Hourglass-60182635.js";import{u as V}from"./formik.esm-3041fe88.js";import{c as $,a as m}from"./index.esm-53d0ef34.js";import"./BeatLoader-10dd928d.js";const H={overlay:{background:"#e6e6fc"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"transparent",border:"none",height:"600px"}};function J(a){L.setAppElement("#root");const[u,i]=W.useState(!1),[e,T]=c.useState(),[v,x]=c.useState(!0),[N,g]=c.useState(!1),[w,y]=c.useState(!1),{api_saveConnectionMeter:f,header:M}=q(),h=d=>{let o=new FormData;o.append("connectionType",d==null?void 0:d.connectionType),o.append("consumerId",a==null?void 0:a.id),o.append("connectionDate",d==null?void 0:d.connectionDate),o.append("oldMeterFinalReading",d==null?void 0:d.oldMeterReading),o.append("meterNo",d==null?void 0:d.meterNo),o.append("newMeterInitialReading",d==null?void 0:d.meterReading),o.append("document",e),C.post(f,o,M).then(l=>{l.status?(a.refetch(),b()):g(l.data.message)}).catch(l=>{g("Error : Something Went Wrong "+l.message)})};$({meterImage:m().when("connectionType",{is:d=>d!="3",then:m().required("Field is required")}),meterNo:m().when("connectionType",{is:d=>d!="3",then:m().required("Field is required")}),meterReading:m().when("connectionType",{is:d=>d!="4",then:m().required("Field is required")}),oldMeterReading:m().required("Enter Old Meter Reading"),connectionDate:m().required("Select Connection Date"),connectionType:m().required("Select Connection Type")});const n=V({enableReinitialize:!0,initialValues:{meterNo:"",meterReading:"",oldMeterReading:"",connectionDate:"",connectionType:""},onSubmit:(d,{resetForm:o})=>{h(d)}}),_=d=>{let o=d.target.name,l=d.target.value;g(!1),o=="connectionType"&&y(!1),o=="connectionType"&&l=="1"&&x(!1),o=="connectionType"&&l=="2"&&x(!1),o=="connectionType"&&l=="3"&&x(!0),o=="connectionType"&&l=="4"&&x(!1),o=="connectionType"&&l=="4"&&y(!0),o=="connectionType"&&l==""&&x(!0)};c.useEffect(()=>{a.openMeterModal>0&&i(!0)},[a.openMeterModal]);function p(){}function b(){i(!1)}return r("div",{className:"",children:r(L,{isOpen:u,onAfterOpen:p,onRequestClose:b,style:H,contentLabel:"Example Modal",shouldCloseOnOverlayClick:!1,children:r("div",{children:r("div",{className:"relative w-full h-full max-w-3xl md:h-auto border-indigo-600 shadow-indigo-200 shadow-sm rounded",children:s("div",{className:"relative bg-white rounded-lg shadow ",children:[s("div",{className:"flex items-start justify-between p-4 border-b rounded-t",children:[r("h3",{className:"text-xl font-semibold text-gray-900 ",children:"Update Connection Details"}),s("button",{onClick:b,className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"defaultModal",children:[r("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:r("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})}),r("span",{className:"sr-only",children:"Close modal"})]})]}),r("div",{className:"bg-white rounded-lg shadow-xl",children:s("form",{onSubmit:n.handleSubmit,onChange:_,className:"p-4 relative",children:[s("div",{className:"pl-4",children:[r("div",{className:"flex-1",children:s("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[s("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:["Connection Type ",r("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),s("select",{...n.getFieldProps("connectionType"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[r("option",{value:"",children:"Select"}),r("option",{value:"1",children:"Meter"}),r("option",{value:"2",children:"Gallon"}),r("option",{value:"3",children:"Fixed"}),(a==null?void 0:a.isConnectionFixed)&&r("option",{value:"4",children:"Meter/Fixed"})]}),r("span",{className:"text-red-600 absolute text-xs",children:n.touched.connectionType&&n.errors.connectionType?n.errors.connectionType:null})]})}),r("div",{className:"flex-1",children:s("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[s("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:["Connection Date ",r("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),r("input",{...n.getFieldProps("connectionDate"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),r("span",{className:"text-red-600 absolute text-xs",children:n.touched.connectionDate&&n.errors.connectionDate?n.errors.connectionDate:null})]})}),r("div",{className:"flex-1",children:s("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[s("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:["New Meter's Initial Reading ",r("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),r("input",{...n.getFieldProps("meterReading"),disabled:w,type:"text",className:"disabled:bg-gray-200 disabled:cursor-not-allowed form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Meter Reading"}),r("span",{className:"text-red-600 absolute text-xs",children:n.touched.meterReading&&n.errors.meterReading?n.errors.meterReading:null})]})}),r("div",{className:"flex-1",children:s("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[s("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:["Old Meter Final Reading ",r("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),r("input",{...n.getFieldProps("oldMeterReading"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Meter Reading"}),r("span",{className:"text-red-600 absolute text-xs",children:n.touched.oldMeterReading&&n.errors.oldMeterReading?n.errors.oldMeterReading:null})]})})]}),!v&&s("div",{className:" pl-4 ",children:[r("div",{className:"flex-1",children:s("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[s("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:["Meter Document ",r("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),r("input",{...n.getFieldProps("meterImage"),name:"meterImage",type:"file",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Meter Reading"}),r("span",{className:"text-red-600 absolute text-xs",children:n.touched.meterImage&&n.errors.meterImage?n.errors.meterImage:null})]})}),r("div",{className:"flex-1",children:s("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[s("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:["Meter Number.",r("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),r("input",{...n.getFieldProps("meterNo"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),r("span",{className:"text-red-600 absolute text-xs",children:n.touched.meterNo&&n.errors.meterNo?n.errors.meterNo:null})]})})]}),r("div",{className:" text-center text-red-600 font-semibold",children:N&&N}),s("div",{className:"flex flex-row-reverse items-center p-6 border-t border-gray-200 rounded-b pl-8",children:[r("button",{type:"submit",className:"mx-2 text-white disabled:bg-gray-500 disabled:scale-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Submit"}),r("button",{onClick:b,className:"mx-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg border border-red-200 text-sm font-medium px-5 py-2.5 focus:z-10 ",children:"Cancel"})]})]})})]})})})})})}function se(a){var l,R,k,S,I,E,O;const[u,i]=c.useState(!1),[e,T]=c.useState(),[v,x]=c.useState(0),[N,g]=c.useState(!0),[w,y]=c.useState(0),[f,M]=c.useState(),{id:h}=B();U();const{api_waterApprovedApplicationDetails:n,api_consumerGetMeterList:_,header:p}=q(),b=()=>{i(!0),C.post(n,{id:h},p).then(function(t){T(t.data.data),i(!1)}).catch(function(t){i(!1)})},d=()=>{i(!0),C.post(_,{consumerId:h},p).then(function(t){M(t.data.data),i(!1)}).catch(function(t){i(!1)})};c.useEffect(()=>{b(),d(),(e==null?void 0:e.connectionName)=="Fixed"&&g(!1)},[h,w]);const o=()=>{x(t=>t+1)};return s(A,{children:[u&&r(z,{}),r(J,{refetch:()=>y(t=>t+1),id:h,isConnectionFixed:N,openMeterModal:v}),r("div",{className:"mx-auto w-full",children:s("div",{className:"",children:[r(G,{active:"consumer"}),s("div",{className:"",children:[r("h1",{className:"px-1 mt-3 text-center font-semibold text-gray-700",children:" Basic Details"}),r("p",{className:"border-b border-gray-700 mx-5"}),s("div",{className:" mt-2 border bg-white rounded-lg shadow-xl",children:[s("div",{className:"space-y-4 pl-4 border border-gray-300 rounded m-2 p-2",children:[s("div",{className:"flex space-x-4 ",children:[s("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-sm",children:e!=null&&e.ulb_name?e==null?void 0:e.ulb_name:"N/A"}),r("div",{className:"text-gray-600 text-xs",children:"ULB Name"})]}),s("div",{className:"flex-1",children:[r("div",{className:"font-bold text-sm",children:e!=null&&e.consumer_no?e==null?void 0:e.consumer_no:"N/A"}),r("div",{className:"text-gray-600 text-xs",children:"Consumer No."})]})]}),s("div",{className:"flex space-x-4 ",children:[s("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-sm",children:e!=null&&e.connection_type?e==null?void 0:e.connection_type:"N/A"}),r("div",{className:"text-gray-600 text-xs",children:"Connection Type"})]}),s("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-sm",children:e!=null&&e.pipeline_type?e==null?void 0:e.pipeline_type:"N/A"}),r("div",{className:"text-gray-600 text-xs",children:"Pipeline Type"})]})]}),s("div",{className:"flex space-x-4 ",children:[s("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-sm",children:e!=null&&e.apply_from?e==null?void 0:e.apply_from:"N/A"}),r("div",{className:"text-gray-600 text-xs",children:"Apply From"})]}),s("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-sm",children:e!=null&&e.application_apply_date?P(e==null?void 0:e.application_apply_date,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),r("div",{className:"text-gray-600 text-xs",children:"Apply Date"})]})]})]}),r("h1",{className:"px-1 mt-3 text-center font-semibold text-gray-700",children:" Property Address & Details"}),r("p",{className:"border-b border-gray-700 mx-5"}),s("div",{className:"border shadow-md p-2 space-x-2 flex",children:[r("div",{className:"text-gray-600 text-xs",children:"Ward No."}),r("div",{className:"font-bold text-sm",children:e!=null&&e.ward_name?e==null?void 0:e.ward_name:"N/A"})]}),s("div",{className:"border shadow-md p-2 space-x-2 flex",children:[r("div",{className:"text-gray-600 text-xs",children:"Connection Through"}),r("div",{className:"font-bold text-sm",children:e!=null&&e.connection_through?e==null?void 0:e.connection_through:"N/A"})]}),(e==null?void 0:e.connection_through)=="SAF"?s("div",{className:"border shadow-md p-2 space-x-2 flex",children:[r("div",{className:"text-gray-600 text-xs",children:"SAF No"}),r("div",{className:"font-semibold text-sm",children:e!=null&&e.saf_no?e==null?void 0:e.saf_no:"N/A"})]}):s("div",{className:"border shadow-md p-2 space-x-2 flex",children:[r("div",{className:"text-gray-600 text-xs",children:"Holding No"}),r("div",{className:"font-semibold text-sm",children:e!=null&&e.holding_no?e==null?void 0:e.holding_no:"N/A"})]}),s("div",{className:"border shadow-md p-2 space-x-2 flex",children:[r("div",{className:"text-gray-600 text-xs",children:"Area (Sqft.)"}),r("div",{className:"font-bold text-sm",children:e!=null&&e.area_sqft?e==null?void 0:e.area_sqft:"N/A"})]}),s("div",{className:"border shadow-md p-2 space-x-2 flex",children:[r("div",{className:"text-gray-600 text-xs",children:"Ownership Type"}),r("div",{className:"font-semibold text-md",children:e!=null&&e.owner_char_type?e==null?void 0:e.owner_char_type:"N/A"})]}),s("div",{className:"border shadow-md p-2 space-x-2 flex",children:[r("div",{className:"text-gray-600 text-xs",children:"Category"}),r("div",{className:"font-bold text-sm",children:e!=null&&e.category?e==null?void 0:e.category:"N/A"})]}),s("div",{className:"border shadow-md p-2 space-x-2 flex",children:[r("div",{className:"text-gray-600 text-xs",children:"Property Type"}),r("div",{className:"font-bold text-sm",children:e!=null&&e.property_type?e==null?void 0:e.property_type:"N/A"})]}),s("div",{className:"border shadow-md p-2 space-x-2 flex",children:[r("div",{className:"text-gray-600 text-xs",children:"Property Address"}),s("div",{className:"font-bold text-sm",children:[e!=null&&e.address?e==null?void 0:e.address:"N/A"," , ",e==null?void 0:e.prop_state]})]})]}),r("h1",{className:"px-1 mt-3 text-center font-semibold text-gray-700",children:" Owner Details"}),r("p",{className:"border-b border-gray-700 mx-5"}),r("div",{className:"mt-10",children:s("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[r("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:s("tr",{children:[r("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),r("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Owner Name"}),r("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Guardian Name"}),r("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Mobile No."}),r("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"email "})]})}),r("tbody",{className:"text-sm",children:r(A,{children:(l=e==null?void 0:e.ownerDetails)==null?void 0:l.map(t=>s("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[r("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:"#"}),r("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.applicant_name?t==null?void 0:t.applicant_name:"N/A"}),r("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.guardian_name?t==null?void 0:t.guardian_name:"N/A"}),r("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.mobile_no?t==null?void 0:t.mobile_no:"N/A"}),r("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.email?t==null?void 0:t.email:"N/A"})]}))})})]})}),s("div",{className:"mt-10",children:[s("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[r(j,{className:"inline"}),"Consumer Meter List"]}),s("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[r("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:s("tr",{children:[r("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),r("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"CONNECTION TYPE"}),r("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Meter No"}),r("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"INITIAL METER READING"}),r("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"METER CONNECTION DATE"}),r("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Document"})]})}),r("tbody",{className:"text-sm",children:r(A,{children:f==null?void 0:f.map((t,Y)=>s("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[r("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:Y+1}),r("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.meter_connection_type?t==null?void 0:t.meter_connection_type:"N/A"}),r("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.meter_no?t==null?void 0:t.meter_no:"N/A"}),r("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.initial_reading?t==null?void 0:t.initial_reading:"N/A"}),r("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.connection_date?P(t==null?void 0:t.connection_date,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),r("td",{className:"",children:r("p",{className:"h-10 w-14 m-3 border border-gray-600 rounded"})})]}))})})]})]}),s("div",{className:"shadow-xl bg-white border m-2",children:[r("h1",{className:"px-1 mt-3 text-center font-semibold text-gray-700",children:" Meter Details"}),r("p",{className:"border-b border-gray-700 mx-5"}),s("div",{className:"grid grid-cols-12",children:[s("div",{className:"col-span-6",children:[r("p",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Connection Type"}),r("p",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Meter No."}),r("p",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Initial Meter Reading"}),r("p",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Meter Connection Date"}),r("p",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Action"})]}),s("div",{className:"col-span-6",children:[r("p",{className:"px-2 py-3 border-b text-left text-gray-500 text-xs",children:e!=null&&e.connectionName?e==null?void 0:e.connectionName:"N/A"}),r("p",{className:"px-2 py-3 border-b text-left text-gray-500 text-xs",children:(R=e==null?void 0:e.meterDetails)!=null&&R.meter_no?(k=e==null?void 0:e.meterDetails)==null?void 0:k.meter_no:"N/A"}),r("p",{className:"px-2 py-3 border-b text-left text-gray-500 text-xs",children:(S=e==null?void 0:e.meterDetails)!=null&&S.initial_reading?(I=e==null?void 0:e.meterDetails)==null?void 0:I.initial_reading:"N/A"}),r("p",{className:"px-2 py-3 border-b text-left text-gray-500 text-xs",children:(E=e==null?void 0:e.meterDetails)!=null&&E.connection_date?(O=e==null?void 0:e.meterDetails)==null?void 0:O.connection_date:"N/A"}),r("p",{className:"px-2 py-2 border-b text-left text-gray-500 text-xs",children:r("button",{onClick:o,className:"border px-4 py-1 text-white rounded shadow-lg bg-indigo-600 hover:bg-indigo-800",children:"Update"})})]})]})]})]}),r("div",{className:"mt-6"})]})}),r("div",{className:"w-full h-60"})]})}export{se as default};
