import{j as p}from"./index-f77fadf7.js";import{b as a}from"./router-b87f8164.js";import{A as l}from"./ApiList-69c725a3.js";import{T as A}from"./index-1d6b8347.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-4ed27c1c.js";import"./tailwind-64fa9e48.js";import"./axios-096c69c8.js";function E(){var i,r;const[e,o]=a.useState({}),[t,s]=a.useState([]),{api_getForgeryTypeApiList:y,api_PostForgeryTypeApi:d,api_getForgeryTypeApiById:m,api_updateForgeryTypeApi:n,api_deleteForgeryTypeApi:u}=l();return p.jsx("div",{children:p.jsx(A,{getIdByKey:"id",title:"Forgery Type Master",setEditData:o,getById:m,createApi:d,editApi:n,deleteApi:u,formData:[{value:((i=e==null?void 0:e.data)==null?void 0:i.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((r=e==null?void 0:e.data)==null?void 0:r.type)||"",isRequired:!0,type:"text",label:"Penalty Type",name:"Forgerytype",isLabel:!0}],listApi:y,setListData:s,HEAD:["Forgery Type ","Status","Edit","Action"],fields:["type"],data:t==null?void 0:t.data})})}export{E as default};
