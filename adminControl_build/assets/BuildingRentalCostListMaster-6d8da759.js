import{j as r}from"./index-bd8b5d4a.js";import{b as u}from"./router-b87f8164.js";import{A as m}from"./ApiList-69c725a3.js";import{T as f}from"./index-e78e88a5.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-4ed27c1c.js";import"./tailwind-64fa9e48.js";import"./axios-096c69c8.js";function j(){var i,a,s,l;const[e,o]=u.useState({}),[t,d]=u.useState([]),{api_getBuildingRentalCostApiList:n,api_getBuildingRentalCostById:p}=m();return r.jsx("div",{children:r.jsx(f,{isCreate:!1,action:!1,getIdByKey:"id",title:"Building Rental Cost Master",setEditData:o,getById:p,formData:[{value:((i=e==null?void 0:e.data)==null?void 0:i.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((a=e==null?void 0:e.data)==null?void 0:a.type)||"",isRequired:!0,type:"text",label:"Objection Type",name:"x",isLabel:!0},{value:((s=e==null?void 0:e.data)==null?void 0:s.ulb_id)||"",isRequired:!0,type:"text",label:"ulb_id",name:"x",isLabel:!0},{value:((l=e==null?void 0:e.data)==null?void 0:l.effective_date)||"",isRequired:!0,type:"text",label:"effective_date",name:"x",isLabel:!0}],listApi:n,setListData:d,HEAD:["X","Ulb Id","Effective Date","Status"],fields:["x","ulb_id","effective_date"],data:t==null?void 0:t.data})})}export{j as default};
