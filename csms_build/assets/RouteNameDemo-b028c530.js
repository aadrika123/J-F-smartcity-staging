import{r as d,s as At,c as Et,a as Rt,b as Ct,j as a,O as Lt,B as Tt,D as Ft,L as Pt,P as Bt,A as S,e as w,Q as r,n as D,S as kt,w as Ht,l as $t,g as It}from"./index-de640f8f.js";const Ut=()=>{const[f,_]=d.useState([]),[j,b]=d.useState(!1),[A,qt]=d.useState(!0),[K,Q]=d.useState(null),[G,W]=d.useState(!1),[X,Z]=d.useState([]),[p,c]=d.useState(!1),[Ot,tt]=d.useState(!1);d.useState(null);const[h,E]=d.useState(null),[at,y]=d.useState(!1),[R,et]=d.useState(),[n,C]=d.useState(1),[x,lt]=d.useState(10),[it,L]=d.useState(),[T,F]=d.useState(),[st,dt]=d.useState(),{api_getRouteDataById:ct,api_getRouteData:ot,api_searchRouteData:rt,api_postRouteData:ut,api_editRouteData:nt,api_deleteRouteData:mt}=It();At("Route Name Master");const g=[{id:1,fee_head:10,fee_head_type:10,desc:"hello"},{id:2,fee_head:10,fee_head_type:10,desc:"hello"},{id:3,fee_head:10,fee_head_type:10,desc:"hello"},{id:4,fee_head:10,fee_head_type:10,desc:"hello"},{id:5,fee_head:10,fee_head_type:10,desc:"hello"}],ft=Et({routeName:Rt().required("Route name is a required field")}),m=Ct({initialValues:{routeName:""},onSubmit:(t,i)=>{console.log("at submit ",t),St(t),m.resetForm()},validationSchema:ft}),N=t=>{console.log(t);let i,l;t===void 0?(l={perPage:x,page:n},i=ot):(l={search:t,perPage:x,page:n},i=rt),c(!0),S.post(i,l,w()).then(function(e){var s,o,u,v,P,B,k,H,$,I,q,O,M,U,V,Y,J,z;((s=e==null?void 0:e.data)==null?void 0:s.status)===!0?((u=(o=e==null?void 0:e.data)==null?void 0:o.data)==null?void 0:u.total)===0?(r.error("Data not Found"),_((P=(v=e==null?void 0:e.data)==null?void 0:v.data)==null?void 0:P.data),L((k=(B=e==null?void 0:e.data)==null?void 0:B.data)==null?void 0:k.last_page),F(($=(H=e==null?void 0:e.data)==null?void 0:H.data)==null?void 0:$.total),b(!1)):(console.log("route name data",(q=(I=e==null?void 0:e.data)==null?void 0:I.data)==null?void 0:q.data),_((M=(O=e==null?void 0:e.data)==null?void 0:O.data)==null?void 0:M.data),L((V=(U=e==null?void 0:e.data)==null?void 0:U.data)==null?void 0:V.last_page),F((J=(Y=e==null?void 0:e.data)==null?void 0:Y.data)==null?void 0:J.total),b(!1)):r.error(`${(z=e==null?void 0:e.data)==null?void 0:z.message}`),c(!1)}).catch(function(e){r.warning("Error occured while fetching data."),c(!1)})};console.log(T);const ht=f;console.log(f);const xt=t=>{lt(parseInt(t)),b(!0)},gt=t=>{C(t-1)},Nt=t=>{C(t+1)};d.useEffect(()=>{n&&j&&N()},[n,j]),d.useEffect(()=>{x&&j&&N()},[x,j]);const jt=[{Header:"Sl No.",Cell:({cell:t})=>a.jsxs("span",{children:[" ",(n-1)*x+t.row.index+1," "]})},{Header:"Route Name",accessor:"route_name"},{Header:"Created Date & Time",Cell:({cell:t})=>{var i,l;return a.jsxs("span",{children:[D((i=t.row.original)==null?void 0:i.date)," |"," ",D((l=t.row.original)==null?void 0:l.time)]})}},{Header:"Status",Cell:({cell:t})=>{var i,l;return a.jsx("span",{className:((i=t.row.original)==null?void 0:i.status)==="Active"?"text-[green]":"text-[red]",children:D((l=t.row.original)==null?void 0:l.status)})}},{Header:"Action",Cell:({cell:t})=>{var i,l;return a.jsxs("div",{className:"flex",children:[a.jsx("button",{onClick:()=>{kt.fire({icon:"warning",title:"Are you sure?",text:"You want to update it!",showCancelButton:!0,confirmButtonText:"Yes, update it!",cancelButtonText:"No, cancel!"}).then(e=>{var s,o;e.value&&(E((s=t.row.original)==null?void 0:s.id),vt((o=t.row.original)==null?void 0:o.id))})},className:"edit-button-master",children:a.jsx("a",{title:"edit",children:a.jsx(Ht,{size:23})})}),a.jsx("button",{onClick:()=>{var e,s;Q((e=t.row.original)==null?void 0:e.id),et(((s=t.row.original)==null?void 0:s.status)==="Active"?"deactive":"active"),y(!0)},className:`${((i=t.row.original)==null?void 0:i.status)=="Active"?"deactivate-button-master":"deactivate-second-button-master"}`,children:((l=t.row.original)==null?void 0:l.status)==="Active"?"Deactivate":"Activate"})]})}}];console.log(n);const vt=t=>{c(!0);let i={id:t};S.post(ct,i,w()).then(function(l){var e,s,o,u;console.log("fetch edit data response..",(e=l==null?void 0:l.data)==null?void 0:e.data),(s=l==null?void 0:l.data)!=null&&s.status?bt((o=l==null?void 0:l.data)==null?void 0:o.data):r.error(`${(u=l==null?void 0:l.data)==null?void 0:u.message}`),c(!1)}).catch(function(l){console.log("= edit data error...",l),tt(!0),c(!1)})},bt=t=>{console.log("existing property details in prop address...",t),m.setFieldValue("routeName",t==null?void 0:t.route_name)};console.log(h);const St=t=>{console.log(t),c(!0);let i,l,e={routeName:t.routeName};h!==null?(i=nt,l=e,l.id=h):(t==null?void 0:t.routeName)!==""&&h==null&&(i=ut,l=e),S.post(i,l,w()).then(function(s){var o,u,v;console.log("bank master..",(o=s==null?void 0:s.data)==null?void 0:o.data),((u=s==null?void 0:s.data)==null?void 0:u.status)===!0?(r.success(h!==null?"Data Updated Successfully!":"Data Added Successfully"),N(),E(null)):r.error(`${(v=s==null?void 0:s.data)==null?void 0:v.message}`),c(!1)}).catch(function(s){console.log("==2 error list...",s),r.warning("Error occured in submitting form."),c(!1)})},wt=()=>{c(!0),y(!1);let t={id:K,status:R};S.post(mt,t,w()).then(function(i){var l,e;((l=i==null?void 0:i.data)==null?void 0:l.status)===!0?(N(),(t==null?void 0:t.status)=="active"?r.success("Activated Successfully"):r.error("Deactivated Successfully")):r.error(`${(e=i==null?void 0:i.data)==null?void 0:e.message}`),c(!1)}).catch(function(i){r.warning("Error occured in deletion."),c(!1)})};d.useEffect(()=>{N()},[]);const yt=t=>{t.target.name,t.target.value},Dt=[{title:"Route Name",feild:"route_name"},{title:"Created Date  ",feild:"date"},{title:"Created Time ",feild:"time"},{title:"Status",feild:"status"}],_t=()=>{const t=new $t;t.text("Route Name Details",10,10),t.autoTable({theme:"grid",columns:Dt.map(i=>({...i,dataKey:i.feild})),body:f}),t.save("RouteNameDetails.pdf")};return d.useEffect(()=>{const t=f.map(i=>{const{id:l,...e}=i;return e});console.log(t),Z(t)},[f]),a.jsx(a.Fragment,{children:a.jsxs("div",{className:"w-full h-[76vh] lg:h-auto overflow-auto ",children:[a.jsxs("div",{className:"flex items-start justify-start flex-col mt-5 ml-5 ",children:[a.jsx("h1",{className:"text-4xl font-semibold text-gray-700",children:"Route Name Form"}),a.jsx("h1",{className:"common-header-smalltext",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]}),a.jsx("div",{className:" mt-1 ml-3 mr-3 ",children:a.jsx("div",{className:"flex h-auto  items-start justify-start w-full",children:a.jsxs("div",{className:"grid grid-cols-12 w-full  ml-3 mr-3 ",children:[a.jsx("div",{className:"col-span-12  lg:col-span-4 w-full flex justify-center",children:a.jsxs("div",{className:"mt-8 border border-teal-300 w-full  rounded-md relative",children:[a.jsxs("div",{className:"bg-white px-3 ",children:[" ",a.jsx("h1",{className:" absolute text-2xl bg-white flex font-semibold  -mt-4 text-[#0F766E] ml-9",children:"Add"})]}),a.jsxs("div",{className:"w-full mb-6 mt-[14vh] pb-10  ",children:[a.jsxs("form",{onSubmit:m.handleSubmit,onChange:yt,children:[a.jsxs("div",{className:"grid grid-cols-12 mt-6",children:[a.jsx("div",{className:" col-span-12 lg:col-span-3",children:a.jsxs("label",{className:" flex items-start justify-start ml-2 text-teal-900 text-md w-full md:w-[20vw] font-bold",htmlFor:"",children:["Route Name",a.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600  ",children:"*"})]})}),a.jsxs("div",{className:"col-span-12 lg:col-span-9",children:[a.jsx("input",{...m.getFieldProps("routeName"),className:"common-input-css",type:"text",placeholder:"Enter route name"}),a.jsx("br",{}),a.jsx("span",{className:"text-red-600  text-xs",children:m.touched.routeName&&m.errors.routeName?m.errors.routeName:null})]})]}),a.jsx("div",{className:"mt-7",children:a.jsx("button",{type:"submit",className:"save-button",children:h!==null?"Update":"Save"})})]}),a.jsx("div",{className:"mandatorytext",children:a.jsx("h1",{children:"Note : (*) is a mandatory field "})})]})]})}),a.jsx("div",{className:" col-span-12 md:col-span-12 lg:col-span-8 w-full lg:ml-2 ",children:a.jsxs("div",{className:"mt-8 border border-teal-300  rounded-md relative",children:[a.jsxs("div",{className:"bg-white px-3 ",children:[" ",a.jsx("h1",{className:" absolute text-2xl bg-white flex font-semibold  -mt-4 text-[#0F766E] ml-9",children:"View List"})]}),a.jsx("div",{className:"mt-5  ",children:a.jsx(Lt,{generatePdf:_t,enable:G,setenable:W,csvdata:X,readymadeListData:f,fetchMasterList:N,setSearchTableData:dt,searchTableData:st})}),a.jsx("div",{className:"-mt-5 main-div",children:a.jsxs("div",{className:" rounded-md h-[80vh] 2xl:p-6 p-4 overflow-y-auto",children:[p&&a.jsx(Tt,{}),at&&a.jsx(Ft,{setdeleteStatus:y,deleteItem:wt,deactivate:R}),a.jsxs("div",{className:"h-[57vh] overflow-auto max-[1004px]:h-full",children:[A&&(g==null?void 0:g.length)!=0&&a.jsx(Pt,{filter:!1,exportStatus:!1,assessmentType:!1,columns:jt,dataList:ht,pageNumber:T}),a.jsx(Bt,{ChangePage:xt,number:n,lastPage:it,nextPage:Nt,prevPage:gt,postperpage:x,blockToast:j,setBlockToast:b})]}),A&&(g==null?void 0:g.length)==0&&a.jsx("div",{className:"data-not-found",children:"Data Not Found"})]})})]})})]})})})]})})};export{Ut as default};
