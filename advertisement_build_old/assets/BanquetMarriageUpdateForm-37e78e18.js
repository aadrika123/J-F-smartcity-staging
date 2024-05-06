import{h as M,r as o,u as j,d as g,e as t,f as s,F as H,j as e,i as I,p as V,O as R,A as U,Q as h}from"./index-16131624.js";function J(){var y,N,v,x,b,f,_,T,w,$,C,k;const{api_BanquetMarriageApplicationDetailToEdit:E,api_getAdvertMasterData:F,api_BanquetMarriageEditedApplication:A}=U(),{id:p}=M(),[P,m]=o.useState(!1),[r,S]=o.useState(),[d,W]=o.useState();o.useState(!0);let a="mt-6 -ml-6 text-xs text-gray-600",n="text-xs rounded leading-5 shadow-md px-1.5 py-1 w-full h-6 md:h-8  mt-5 ";const u=(l,i)=>{h.dismiss(),i=="escalated"&&h.success(l),i=="de-escalated"&&h.warn(l),i=="error"&&h.error(l)},G={remarks:"",hallType:r==null?void 0:r.hall_type_id,organizationType:r==null?void 0:r.organization_type_id,floorArea:r==null?void 0:r.floor_area,landDeedType:r==null?void 0:r.land_deed_type_id,waterSupplyType:r==null?void 0:r.water_supply_type_id,electricityType:r==null?void 0:r.electricity_type_id,securityType:r==null?void 0:r.security_type_id,noOfCctv:r==null?void 0:r.cctv_camera,noFireExtinguishers:r==null?void 0:r.fire_extinguisher,noEntryGates:r==null?void 0:r.entry_gate,noExitGate:r==null?void 0:r.exit_gate,noTwoWheelerParking:r==null?void 0:r.two_wheelers_parking,noFourWheelerParking:r==null?void 0:r.four_wheelers_parking},c=j({initialValues:G,enableReinitialize:!0,onSubmit:l=>{L(l)}}),z=l=>{l.target.name,l.target.value};o.useEffect(()=>{O()},[]);const O=()=>{m(!0);const l={applicationId:p};g.post(`${E}`,l,t()).then(function(i){S(i.data.data),m(!1)}).catch(function(i){m(!1)})};o.useEffect(()=>{B()},[]);const B=l=>{g.post(`${F}`,{},t()).then(function(i){W(i.data.data)}).catch(function(i){})},L=l=>{const i={applicationId:p,remarks:l==null?void 0:l.remarks,floorArea:l==null?void 0:l.floorArea,hallType:l==null?void 0:l.hallType,organizationType:l==null?void 0:l.organizationType,landDeedType:l==null?void 0:l.landDeedType,waterSupplyType:l==null?void 0:l.waterSupplyType,electricityType:l==null?void 0:l.electricityType,securityType:l==null?void 0:l.securityType,cctvCamera:l==null?void 0:l.noOfCctv,fireExtinguisher:l==null?void 0:l.noFireExtinguishers,entryGate:l==null?void 0:l.noEntryGates,exitGate:l==null?void 0:l.noExitGate,twoWheelersParking:l==null?void 0:l.noTwoWheelerParking,fourWheelersParking:l==null?void 0:l.noFourWheelerParking};g.post(`${A}`,i,t()).then(function(q){u("Application Updated Successfully ","escalated")}).catch(function(q){u("Failed to update ","escalated")})};return s(H,{children:[P&&e(I,{}),e(V,{position:"top-right",autoClose:5e3}),e("div",{className:"  ml-4 w-full",children:e("form",{onSubmit:c.handleSubmit,onChange:z,children:s("div",{children:[e("div",{className:"bg-white",children:s("div",{className:"container mx-auto my-5 p-5",children:[s("div",{className:"md:flex no-wrap md:-mx-2 ",children:[e("div",{className:"w-full md:w-3/12 md:mx-2 shadow-xl flex justify-center items-center ",children:s("div",{className:"bg-white items-center my-auto ",children:[s("div",{className:"image overflow-hidden text-center",children:[e("div",{className:"text-indigo-600 font-bold text-2xl leading-8",children:r==null?void 0:r.application_no}),e("div",{className:"text-sm text-gray-600",children:"Application No."})]}),s("div",{className:"image overflow-hidden text-center mt-10",children:[e("div",{className:"text-gray-900 font-bold text-lg leading-8",children:r==null?void 0:r.application_date}),e("div",{className:"text-sm text-gray-600",children:"Apply Date"})]})]})}),e("div",{className:"w-full md:w-9/12 mx-2 h-auto",children:s("div",{className:"bg-white p-3 shadow-xl rounded-sm",children:[s("div",{className:"flex items-center pl-4 space-x-2 font-semibold text-gray-900 leading-8",children:[e("span",{clas:"text-green-500",children:e(R,{})}),e("span",{className:"tracking-wide text-3xl",children:r==null?void 0:r.headertitle})]}),e("div",{className:"text-gray-700 py-6",children:s("div",{className:"grid md:grid-cols-2 text-sm",children:[s("div",{className:"grid grid-cols-2",children:[e("div",{className:"px-4 py-2 font-semibold",children:"Applicant Name  : "}),e("div",{className:"px-4 py-2",children:r==null?void 0:r.applicant})]}),s("div",{className:"grid grid-cols-2",children:[e("div",{className:"px-4 py-2 font-semibold",children:"Appication No   : "}),e("div",{className:"px-4 py-2",children:r==null?void 0:r.application_no})]}),s("div",{className:"grid grid-cols-2",children:[e("div",{className:"px-4 py-2 font-semibold",children:"Entity Address   : "}),e("div",{className:"px-4 py-2",children:r==null?void 0:r.entity_address})]}),s("div",{className:"grid grid-cols-2",children:[e("div",{className:"px-4 py-2 font-semibold",children:"Entity Name  : "}),e("div",{className:"px-4 py-2",children:r==null?void 0:r.entity_name})]})]})})]})})]}),e("div",{})]})}),e("h1",{className:"font-semibold text-gray-600 text-xl text-center",children:"Verify Data"}),s("div",{className:" grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 container mx-auto pb-8 gap-4 mt-3 p-4 ",children:[e("div",{className:"col-span-7",children:s("div",{className:"col-span-6 p-2 bg-white shadow-lg",children:[s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5  bg-violet-100 p-2",children:[e("div",{className:"col-span-1",children:e("p",{className:"text-center font-semibold",children:"Fields"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{className:"text-center font-semibold",children:"Filled Data"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{className:"text-center font-semibold",children:"Edit"})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"Hall Type"})}),s("div",{className:"col-span-2 mr-2 ",children:[s("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.hall_type_name," "]}),e("p",{className:"text-red-500 text-xs absolute",children:c.touched.hallType&&c.errors.hallType?c.errors.hallType:null})]}),s("div",{className:"col-span-2 mr-2 ",children:[s("select",{className:`${n} bg-white `,...c.getFieldProps("hallType"),children:[e("option",{children:"select "}),(N=(y=d==null?void 0:d.paramCategories)==null?void 0:y.HallType)==null?void 0:N.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]}),e("p",{className:"text-red-500 text-xs absolute",children:c.touched.hallType&&c.errors.hallType?c.errors.hallType:null})]})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"Organization Type"})}),e("div",{className:"col-span-2 mr-2 ",children:s("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.organization_type_name," "]})}),e("div",{className:"col-span-2 mr-2 ",children:s("select",{className:`${n} bg-white`,...c.getFieldProps("organizationType"),children:[e("option",{children:"select "}),(x=(v=d==null?void 0:d.paramCategories)==null?void 0:v.OrganizationType)==null?void 0:x.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"Floor Area"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"text",name:"floorArea",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.floor_area})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"text",name:"floorArea",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.floorArea})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"Land Deed Type"})}),e("div",{className:"col-span-2 mr-2 ",children:s("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.land_deed_type_name," "]})}),e("div",{className:"col-span-2 mr-2 ",children:s("select",{className:`${n} bg-white`,...c.getFieldProps("landDeedType"),children:[e("option",{children:"select "}),(f=(b=d==null?void 0:d.paramCategories)==null?void 0:b.LandDeedType)==null?void 0:f.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"Water Supply Type"})}),e("div",{className:"col-span-2 mr-2 ",children:s("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.water_supply_type_name,"  "]})}),e("div",{className:"col-span-2 mr-2 ",children:s("select",{className:`${n} bg-white`,...c.getFieldProps("waterSupplyType"),children:[e("option",{children:"select "}),(T=(_=d==null?void 0:d.paramCategories)==null?void 0:_.WaterSupplyType)==null?void 0:T.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"Electricity Type"})}),e("div",{className:"col-span-2 mr-2 ",children:s("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.electricity_type_name,"  "]})}),e("div",{className:"col-span-2 mr-2 ",children:s("select",{className:`${n} bg-white`,...c.getFieldProps("electricityType"),children:[e("option",{children:"select "}),($=(w=d==null?void 0:d.paramCategories)==null?void 0:w.ElectricityType)==null?void 0:$.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"Security Type"})}),e("div",{className:"col-span-2 mr-2 ",children:s("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.security_type_name," "]})}),e("div",{className:"col-span-2 mr-2 ",children:s("select",{className:`${n} bg-white`,...c.getFieldProps("securityType"),children:[e("option",{children:"select "}),(k=(C=d==null?void 0:d.paramCategories)==null?void 0:C.SecutityType)==null?void 0:k.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"No of CCTV Camera"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noOfCctv",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.cctv_camera})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noOfCctv",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.noOfCctv})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"No. of Fire Extinguishers"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noFireExtinguishers",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.fire_extinguisher})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noFireExtinguishers",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.noFireExtinguishers})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"No. of Entry Gates"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noEntryGates",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.entry_gate})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noEntryGates",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.noEntryGates})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"No. of Exit Gates"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noExitGate",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.exit_gate})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noExitGate",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.noExitGate})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"No. of TWo Wheelers Parking Space"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noTwoWheelerParking",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.two_wheelers_parking})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noTwoWheelerParking",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.noTwoWheelerParking})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"No. of Four Wheelers Parking Space"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noFourWheelerParking",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.four_wheelers_parking})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noFourWheelerParking",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.noFourWheelerParking})})]})]})}),s("div",{className:"col-span-5",children:[s("div",{className:"flex flex-col space-y-2 mb-2",children:[e("label",{htmlFor:"remarks",className:"text-zinc-500 capitalize text-lg font-semibold",children:"Remarks"}),e("textarea",{name:"remarks",onChange:c.handleChange,value:c.values.remarks,className:"bg-gray-100 text-xs border-2 border-gray-400 rounded-md px-4 py-2 h-32 shadow-md",placeholder:"Write your remarks here..."})]}),e("div",{className:"text-center",children:e("button",{type:"submit",className:"text-md mt-4 py-2 px-16 inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-green-500 border border-green-500 hover:text-white hover:bg-green-600 hover:ring-0 hover:border-green-600 focus:bg-green-600 focus:border-green-600 focus:outline-none focus:ring-0",children:"submit"})})]})]})]})})})]})}export{J as default};
