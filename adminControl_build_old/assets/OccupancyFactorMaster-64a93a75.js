import{j as r}from"./index-f77fadf7.js";import{b as o}from"./router-b87f8164.js";import{A as y}from"./ApiList-69c725a3.js";import{T as A}from"./index-1d6b8347.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-4ed27c1c.js";import"./tailwind-64fa9e48.js";import"./axios-096c69c8.js";function j(){var e,c,p;const[t,i]=o.useState({}),[a,u]=o.useState([]),{api_getPropOccupancyFactorApiList:s,api_PostPropOccupancyFactorApi:n,api_getPropOccupancyFactorApiById:m,api_updatePropOccupancyFactorApi:l,api_deletePropOccupancyFactorApi:d}=y();return r.jsx("div",{children:r.jsx(A,{getIdByKey:"id",title:"Occupancy Factor Master ",setEditData:i,getById:m,createApi:n,editApi:l,deleteApi:d,formData:[{value:((e=t==null?void 0:t.data)==null?void 0:e.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((c=t==null?void 0:t.data)==null?void 0:c.occupancy_name)||"",isRequired:!0,type:"text",label:"Occupancy Type",name:"occupancyName",isLabel:!0},{value:((p=t==null?void 0:t.data)==null?void 0:p.mult_factor)||"",isRequired:!0,type:"text",label:"Mult Factor",name:"multFactor",isLabel:!0}],listApi:s,setListData:u,HEAD:["Occupancy Factor Type","Mult Factor","Status","Edit","Action"],fields:["occupancy_name","mult_factor"],data:a==null?void 0:a.data})})}export{j as default};
