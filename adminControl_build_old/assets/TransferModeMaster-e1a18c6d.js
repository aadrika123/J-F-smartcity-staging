import{j as i}from"./index-f77fadf7.js";import{b as s}from"./router-b87f8164.js";import{A as l}from"./ApiList-69c725a3.js";import{T as A}from"./index-1d6b8347.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-4ed27c1c.js";import"./tailwind-64fa9e48.js";import"./axios-096c69c8.js";function E(){var r,a;const[e,o]=s.useState({}),[t,d]=s.useState([]),{api_getTransferModeApiList:p,api_PostTransferModeApi:n,api_getTransferModeApiById:m,api_updateTransferModeApi:f,api_deleteTransferModeApi:u}=l();return i.jsx("div",{children:i.jsx(A,{isCreate:!0,action:!0,getIdByKey:"id",title:"Transfer Mode Master ",setEditData:o,getById:m,createApi:n,editApi:f,deleteApi:u,formData:[{value:((r=e==null?void 0:e.data)==null?void 0:r.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((a=e==null?void 0:e.data)==null?void 0:a.transfer_mode)||"",isRequired:!0,type:"text",label:"Transfer Mode",name:"transferMode",isLabel:!0}],listApi:p,setListData:d,HEAD:["Transfer Mode","Status","Edit","Action"],fields:["transfer_mode"],data:t==null?void 0:t.data})})}export{E as default};
