import{b as i,j as t,r as h,F as E}from"./index-92e4a43a.js";import{r as g,C as M}from"./index-d8e523ae.js";import{H as m}from"./react-tooltip.min-64e5fb1e.js";import B from"./ShopListViewInCard-d73b3122.js";import j from"./TollListViewInCard-b656f386.js";function z(e){return i("div",{className:"w-full",children:[i("div",{className:"grid grid-cols-1 md:flex ",children:[t("label",{htmlFor:"search",children:" Search : "}),t("input",{className:"border border-gray-200 shadow-lg px-2 mx-1  bg-gray-50 py-1",type:"text",id:"searchValue",onChange:n=>{e==null||e.setFilter(n.target.value)}}),t(m,{anchorId:"searchGlobal"}),t("button",{type:"button",id:"searchGlobal","data-tooltip-content":"Search your input globally",className:" whitespace-nowrap border bg-sky-400  hover:bg-sky-500 text-white rounded px-1 py-2 mt-2 text-xs",onClick:()=>{var d,u,v,x;let n=document.getElementById("searchValue").value;if(console.log("value length",n.length),n!=""&&(n==null?void 0:n.length)>=4){console.log("val greater",n),(d=e==null?void 0:e.values)==null||d.setsearchValue(n),(u=e==null?void 0:e.values)==null||u.setcurrentPageIndex(1);return}if(n!=""&&(n==null?void 0:n.length)>=1&&(n==null?void 0:n.length)<=3){console.log("val middle",n);return}else{console.log("val empty",n),(v=e==null?void 0:e.values)==null||v.setsearchValue(""),(x=e==null?void 0:e.values)==null||x.setcurrentPageIndex(1);return}},children:"Search Globally"})]}),t("div",{children:i("p",{className:"text-xs  text-gray-500 font-poppins mt-4",children:[t("strong",{children:"Note : "})," If you don't find your search result in the box, ",t("span",{className:"text-blue-500 capitalize",children:" Search Globally"})," to get result from the server."]})})]})}function Z(e){var y,w,P,o,I,L,k,C,S;console.log("values through props",(y=e==null?void 0:e.values)==null?void 0:y.tittle);const[N,n]=h.useState("hidden"),d=h.useMemo(()=>e==null?void 0:e.columns,[]),u=h.useMemo(()=>e==null?void 0:e.dataList,[e==null?void 0:e.dataList]);console.log("props fetchhop list",(w=e==null?void 0:e.values)==null?void 0:w.fetchShopListFun),h.useEffect(()=>{var a,l;(a=e==null?void 0:e.values)!=null&&a.pageLength?s((l=e==null?void 0:e.values)==null?void 0:l.pageLength):s(5)},[(P=e==null?void 0:e.values)==null?void 0:P.pageLength]);const{getTableProps:v,getTableBodyProps:x,headerGroups:A,page:D,nextPage:H,previousPage:O,prepareRow:W,pageOptions:$,gotoPage:q,pageCount:J,setPageSize:s,state:G,setGlobalFilter:F}=g.useTable({columns:d,data:u,initialState:{pageIndex:0}},g.useGlobalFilter,g.useSortBy,g.usePagination),{globalFilter:T,pageSize:b}=G,f=()=>{var a,l;return((a=e==null?void 0:e.values)==null?void 0:a.currentPageIndex)!=((l=e==null?void 0:e.values)==null?void 0:l.lastPageIndex)},r=()=>{var a;return((a=e==null?void 0:e.values)==null?void 0:a.currentPageIndex)!=1},R=()=>{var a,l;(a=e==null?void 0:e.values)==null||a.setcurrentPageIndex(c=>c-1),(l=e==null?void 0:e.values)==null||l.setpageLength(b)},V=()=>{var a,l;(a=e==null?void 0:e.values)==null||a.setcurrentPageIndex(c=>c+1),(l=e==null?void 0:e.values)==null||l.setpageLength(b)};return t(E,{children:i("div",{className:"  ",children:[i("div",{className:"grid grid-cols-12  pr-4",children:[t("div",{className:"col-span-12 mx-auto p-4",children:t(z,{filter:T,setFilter:F,values:e==null?void 0:e.values})}),i("div",{className:"col-span-12 mx-auto",children:[t("div",{className:"",children:i("button",{className:"bg-sky-400 px-3 pr-3 text-sm shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-green-600 text-center relative",onMouseEnter:()=>n(""),onMouseLeave:()=>n("hidden"),children:[t(M,{data:e==null?void 0:e.dataList,children:"Export"}),t("div",{className:N+" absolute h-full top-3 text-sm left-0 text-center animate-bounce"})]})}),t("div",{className:"",children:e==null?void 0:e.children}),(e==null?void 0:e.assessmentType)&&t("div",{className:"",children:i("div",{className:"flex",children:[t(m,{anchorId:"refresh"}),t("div",{className:`${(o=e==null?void 0:e.values)!=null&&o.refreshStatus?"animate-spin":""} h-6 w-6 cursor-pointer text-green-900 text-xs font-semibold text-center bg-s-200 rounded-full flex-initial ml-4 `,"data-tooltip-content":"Refresh all data",id:"refresh",onClick:()=>{var a,l,c;(a=e==null?void 0:e.values)==null||a.fetchInboxList(1,10,""),(l=e==null?void 0:e.values)==null||l.setcurrentPageIndex(1),(c=e==null?void 0:e.values)==null||c.setsearchValue("")},children:t(Refresh,{})}),t("div",{className:"",children:i("span",{className:"absolute flex h-3 w-3",children:[t("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-amber-500"})]})})]})})]})]}),t("div",{className:" overflow-x-auto ",children:i("div",{className:"inline-block min-w-full rounded-lg overflow-hidden mt-2",children:[((I=e==null?void 0:e.values)==null?void 0:I.tittle)=="Shop Rental pay"&&t(B,{dataList:e==null?void 0:e.dataList}),((L=e==null?void 0:e.values)==null?void 0:L.tittle)=="Toll Rental pay"&&t(j,{dataList:e==null?void 0:e.dataList}),i("div",{className:"mt-3 col-span-12 mx-auto w-full",children:[t("div",{className:"",children:i("div",{className:"flex",children:[t("select",{className:"h-10 w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-2",value:b,onChange:a=>{var l,c;s(Number(a.target.value)),(l=e==null?void 0:e.values)==null||l.setpageLength(a.target.value),(c=e==null?void 0:e.values)==null||c.setcurrentPageIndex(1)},children:[5,10,25,50].map(a=>i("option",{value:a,children:["show ",a]},a))}),i("div",{className:"flex space-x-2",children:[t("input",{className:"border border-gray-400 h-10 rounded-md w-32 text-xs px-2",placeholder:"Go to page",type:"text",onBlur:a=>{var l;return(l=e==null?void 0:e.values)==null?void 0:l.setcurrentPageIndex(a.target.value)}}),t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-8 h-8 bg-indigo-500 text-white p-1 rounded-md mt-1",children:t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"})})]})]})}),t("div",{className:"  text-center",children:i("span",{children:["page ","",i("strong",{children:[(k=e==null?void 0:e.values)==null?void 0:k.currentPageIndex," of"," ",(C=e==null?void 0:e.values)==null?void 0:C.lastPageIndex]}),""," ---"," ",i("strong",{children:["Total "," ",(S=e==null?void 0:e.values)==null?void 0:S.totalDataCount," records"]})]})}),t(m,{anchorId:"firstPage"}),t(m,{anchorId:"lastPage"}),i("div",{className:" w-full text-right",children:[t("button",{id:"firstPage","data-tooltip-content":"Go to First Page",className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>{var a;return(a=e==null?void 0:e.values)==null?void 0:a.setcurrentPageIndex(1)},disabled:!r(),children:" "}),t("button",{className:(r()?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:R,disabled:!r(),children:"⬅️"}),t("button",{className:(f()?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:V,disabled:!f(),children:"➡️"}),t("button",{id:"lastPage","data-tooltip-content":"Go to Last Page",className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>{var a,l;return(l=e==null?void 0:e.values)==null?void 0:l.setcurrentPageIndex((a=e==null?void 0:e.values)==null?void 0:a.lastPageIndex)},disabled:!f()})]})]})]})})]})})}export{Z as R};
