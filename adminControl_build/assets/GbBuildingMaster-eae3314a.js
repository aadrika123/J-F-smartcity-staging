import{j as a}from"./index-bd8b5d4a.js";import{b as d}from"./router-b87f8164.js";import{A as g}from"./ApiList-69c725a3.js";import{T as b}from"./index-e78e88a5.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-4ed27c1c.js";import"./tailwind-64fa9e48.js";import"./axios-096c69c8.js";function v(){var e,p;const[i,s]=d.useState({}),[t,u]=d.useState([]),{api_getGbBuildingApiList:l,api_PostGbBuildingApi:r,api_getGbBuildingApiById:n,api_updateGbBuildingApi:o,api_deleteGbBuildingApi:m}=g();return a.jsx("div",{children:a.jsx(b,{getIdByKey:"id",title:"Gb Building Master  ",setEditData:s,getById:n,createApi:r,deleteApi:m,editApi:o,formData:[{value:((e=i==null?void 0:i.data)==null?void 0:e.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((p=i==null?void 0:i.data)==null?void 0:p.building_type)||"",isRequired:!0,type:"text",label:"Building Type",name:"buildingType",isLabel:!0}],listApi:l,setListData:u,HEAD:["Building Type ","Status","Edit","Delete"],fields:["building_type"],data:t==null?void 0:t.data})})}export{v as default};
