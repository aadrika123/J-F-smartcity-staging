import{j as i}from"./index-bd8b5d4a.js";import{b as r}from"./router-b87f8164.js";import{A as n}from"./ApiList-69c725a3.js";import{T as A}from"./index-e78e88a5.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-4ed27c1c.js";import"./tailwind-64fa9e48.js";import"./axios-096c69c8.js";function E(){var a,s,p;const[e,o]=r.useState({}),[t,d]=r.useState([]),{api_getUsageTypeApiList:u,api_PostUsageTypeApi:g,api_getUsageTypeApiById:m,api_updateUsageTypeApi:l,api_deleteUsageTypeApi:y}=n();return i.jsx("div",{children:i.jsx(A,{getIdByKey:"id",title:"Usage Type Master ",setEditData:o,getById:m,createApi:g,editApi:l,deleteApi:y,formData:[{value:((a=e==null?void 0:e.data)==null?void 0:a.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((s=e==null?void 0:e.data)==null?void 0:s.usage_type)||"",isRequired:!0,type:"text",label:"Usage Type",name:"usageType",isLabel:!0},{value:((p=e==null?void 0:e.data)==null?void 0:p.usage_code)||"",isRequired:!0,type:"text",label:"Usage Code",name:"usageCode",isLabel:!0}],listApi:u,setListData:d,HEAD:["Usage Type","Usage Code","Status","Edit","Delete",""],fields:["usage_type","usage_code"],data:t==null?void 0:t.data})})}export{E as default};
