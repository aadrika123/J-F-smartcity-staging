import{j as i}from"./index-bd8b5d4a.js";import{b as o}from"./router-b87f8164.js";import{A as d}from"./ApiList-69c725a3.js";import{T as l}from"./index-e78e88a5.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-4ed27c1c.js";import"./tailwind-64fa9e48.js";import"./axios-096c69c8.js";function L(){var s,a;const[t,r]=o.useState({}),[e,n]=o.useState([]),{api_getRentalValuesApiList:p,api_getRentalValuesById:u}=d();return i.jsx("div",{children:i.jsx(l,{isCreate:!1,action:!1,getIdByKey:"id",title:"Rental Values Master",setEditData:r,getById:u,formData:[{value:((s=t==null?void 0:t.data)==null?void 0:s.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((a=t==null?void 0:t.data)==null?void 0:a.construction_types_id)||"",isRequired:!0,type:"text",label:"Construction Type",name:"construction_types_id",isLabel:!0}],listApi:p,setListData:n,HEAD:["Usage Type ID","Zone ID","Construction Type Id","Status"],fields:["usage_types_id","zone_id","construction_types_id"],data:e==null?void 0:e.data})})}export{L as default};
