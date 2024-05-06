import{j as e,r as d}from"./index-b42da1a9.js";import{r as l,C as B}from"./index-2dd46ca4.js";import{c as I,d as G,e as z}from"./index.esm-fb304c24.js";function V({filter:s,setFilter:x}){return e.jsxs(e.Fragment,{children:["Search : "," ",e.jsx("input",{className:"border-2 border-gray-600 px-2 bg-gray-200",type:"text",value:s||"",onChange:n=>x(n.target.value)})]})}function W(s){const[x,n]=d.useState("hidden"),w=d.useMemo(()=>s.columns,[]),P=d.useMemo(()=>s.dataList,[s.dataList]);d.useEffect(()=>{j(10),v()},[]);const{getTableProps:q,getTableBodyProps:u,headerGroups:o,page:h,nextPage:k,previousPage:C,canNextPage:c,canPreviousPage:g,prepareRow:L,pageOptions:S,gotoPage:m,pageCount:F,setPageSize:j,state:E,setGlobalFilter:O}=l.useTable({columns:w,data:P,initialState:{pageIndex:0}},l.useGlobalFilter,l.useSortBy,l.usePagination),{globalFilter:T,pageIndex:D,pageSize:H}=E,v=()=>{var r;return(r=s==null?void 0:s.dataList)==null?void 0:r.map((i,A)=>{var f;const M=(f=s==null?void 0:s.columns)==null?void 0:f.map((t,J)=>{var p,y;var b;if(t!=null&&t.option&&((p=t==null?void 0:t.option)==null?void 0:p.length)>0){const N=(y=t==null?void 0:t.option)==null?void 0:y.find(R=>R.hasOwnProperty(i[t==null?void 0:t.accessor]));N?b=N[i[t==null?void 0:t.accessor]]:b=i[t==null?void 0:t.accessor]}return(t==null?void 0:t.Header.toLowerCase())!="action"&&{[t==null?void 0:t.Header]:t!=null&&t.accessor?b:A+1}});return Object.assign({},...M)})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex mb-2 pb-2",children:[e.jsx("div",{className:"flex-initial",children:e.jsx(V,{filter:T,setFilter:O})}),(s==null?void 0:s.exportStatus)!==!1&&e.jsx("div",{className:"flex-initial ml-2",children:e.jsxs("button",{className:"bg-sky-400 px-3 pr-3  shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-green-600 text-center relative",onMouseEnter:()=>n(""),onMouseLeave:()=>n("hidden"),children:[e.jsx(B,{data:v(),children:"Export"}),e.jsx("div",{className:x+" absolute h-full top-3 text-sm left-0 text-center animate-bounce",children:e.jsx(I,{})})]})}),e.jsx("div",{className:"flex-1",children:s.children})]}),e.jsx("div",{className:" p-4 overflow-x-auto bg-white",children:e.jsxs("div",{className:"inline-block min-w-full rounded-lg overflow-hidden bg-white",children:[e.jsxs("table",{...u,className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-sky-50",children:o==null?void 0:o.map(a=>e.jsx("tr",{...a.getHeaderGroupProps(),children:a.headers.map(r=>e.jsxs("th",{...r.getHeaderProps(r.getSortByToggleProps()),className:(r==null?void 0:r.className)+" px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs capitalize",children:[r.render("Header"),e.jsx("span",{children:r.isSorted?r.isSortedDesc?"⬆️":"⬇️":""})]}))}))}),e.jsxs("tbody",{...u(),className:"text-sm",children:[" ",h==null?void 0:h.map(a=>{var r;return L(a),e.jsx("tr",{...a.getRowProps(),className:"bg-white shadow-lg border-b border-gray-200",children:(r=a==null?void 0:a.cells)==null?void 0:r.map(i=>e.jsx("td",{...i.getCellProps(),className:"px-2 py-2 text-sm text-left",children:i.render("Cell")}))})}),e.jsx("tr",{children:e.jsx("td",{})})]})]}),e.jsxs("div",{className:"mt-3 grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-2",children:["  ",e.jsx("select",{className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",value:H,onChange:a=>j(Number(a.target.value)),children:[5,10,25,50].map(a=>e.jsxs("option",{value:a,children:["show ",a]},a))})]}),e.jsxs("div",{className:"col-span-4 text-center col-start-5",children:["   ",e.jsxs("span",{children:["page ","",e.jsxs("strong",{children:[D+1," of ",S.length]}),""]})]}),e.jsxs("div",{className:"col-span-4 text-right",children:[e.jsxs("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>m(0),disabled:!g,children:[e.jsx(G,{})," "]}),e.jsx("button",{className:(g?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>C(),disabled:!g,children:"⬅️"}),e.jsx("button",{className:(c?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>k(),disabled:!c,children:"➡️"}),e.jsxs("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>m(F-1),disabled:!c,children:["  ",e.jsx(z,{})]})]})]})]})})]})}export{W as L};
