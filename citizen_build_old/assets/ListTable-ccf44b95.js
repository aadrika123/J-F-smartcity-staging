import{j as e}from"./mui-8e804a04.js";import{r as d}from"./router-87042356.js";import{J as x,K as B,L as I,M as G,N as z}from"./index-2435513d.js";function J({filter:s,setFilter:o}){return e.jsxs(e.Fragment,{children:["Search : "," ",e.jsx("input",{className:"border-2 border-gray-600 px-2 bg-gray-200",type:"text",value:s||"",onChange:n=>o(n.target.value)})]})}function W(s){const[o,n]=d.useState("hidden"),P=d.useMemo(()=>s==null?void 0:s.columns,[]),k=d.useMemo(()=>s==null?void 0:s.dataList,[s.dataList]);d.useEffect(()=>{v(10),f()},[]);const{getTableProps:K,getTableBodyProps:m,headerGroups:h,page:c,nextPage:p,previousPage:C,canNextPage:g,canPreviousPage:b,prepareRow:L,pageOptions:S,gotoPage:j,pageCount:F,setPageSize:v,state:E,setGlobalFilter:O}=x.useTable({columns:P,data:k,initialState:{pageIndex:0}},x.useGlobalFilter,x.useSortBy,x.usePagination),{globalFilter:T,pageIndex:D,pageSize:H}=E,f=()=>{var r;return(r=s==null?void 0:s.dataList)==null?void 0:r.map((i,M)=>{var N;const A=(N=s==null?void 0:s.columns)==null?void 0:N.map((t,V)=>{var y,w;var l;if(t!=null&&t.option&&((y=t==null?void 0:t.option)==null?void 0:y.length)>0){const u=(w=t==null?void 0:t.option)==null?void 0:w.find(R=>R.hasOwnProperty(i[t==null?void 0:t.accessor]));console.log("matching option ",u),u?l=u[i[t==null?void 0:t.accessor]]:l=i[t==null?void 0:t.accessor]}return console.log("incoming value => ",l),(t==null?void 0:t.Header.toLowerCase())!="action"&&{[t==null?void 0:t.Header]:t!=null&&t.accessor?l:M+1}});return Object==null?void 0:Object.assign({},...A)})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex mb-2 pb-2",children:[e.jsxs("div",{className:"flex items-end",children:[e.jsx("div",{className:"flex-initial",children:e.jsx(J,{filter:T,setFilter:O})}),(s==null?void 0:s.exportStatus)!==!1&&e.jsx("div",{className:"flex-initial ml-2",children:e.jsxs("button",{className:"bg-sky-400 px-3 pr-3  shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-green-600 text-center relative",onMouseEnter:()=>n(""),onMouseLeave:()=>n("hidden"),children:[e.jsx(B,{data:f(),children:"Export"}),e.jsx("div",{className:o+" absolute h-full top-3 text-sm left-0 text-center animate-bounce",children:e.jsx(I,{})})]})})]}),e.jsx("div",{className:"flex-1",children:s.children})]}),e.jsx("div",{className:" md:p-4 overflow-x-auto bg-white",children:e.jsxs("div",{className:"inline-block min-w-full rounded-lg overflow-auto bg-white",children:[e.jsxs("table",{...m,className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-sky-50",children:h==null?void 0:h.map(a=>e.jsx("tr",{...a.getHeaderGroupProps(),children:a.headers.map(r=>e.jsxs("th",{...r.getHeaderProps(r.getSortByToggleProps()),className:(r==null?void 0:r.className)+" px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs capitalize",children:[r.render("Header"),e.jsx("span",{children:r.isSorted?r.isSortedDesc?"⬆️":"⬇️":""})]}))}))}),e.jsxs("tbody",{...m(),className:"text-sm",children:[" ",c==null?void 0:c.map(a=>{var r;return L(a),e.jsx("tr",{...a.getRowProps(),className:"bg-white shadow-lg border-b border-gray-200",children:(r=a==null?void 0:a.cells)==null?void 0:r.map(i=>e.jsx("td",{...i.getCellProps(),className:"px-2 py-2 text-sm text-left",children:i.render("Cell")}))})}),e.jsx("tr",{children:e.jsx("td",{})})]})]}),e.jsxs("div",{className:"mt-3 grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-2",children:[" ",e.jsx("select",{className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",value:H,onChange:a=>v(Number(a.target.value)),children:[5,10,25,50].map(a=>e.jsxs("option",{value:a,children:["show ",a]},a))})]}),e.jsxs("div",{className:"col-span-4 text-center col-start-5",children:[" ",e.jsxs("span",{children:["page ","",e.jsxs("strong",{children:[D+1," of ",S.length]}),""]})]}),e.jsxs("div",{className:"col-span-4 text-right",children:[e.jsxs("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>j(0),disabled:!b,children:[e.jsx(G,{})," "]}),e.jsx("button",{className:(b?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>C(),disabled:!b,children:"⬅️"}),e.jsx("button",{className:(g?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>p(),disabled:!g,children:"➡️"}),e.jsxs("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>j(F-1),disabled:!g,children:[" ",e.jsx(z,{})]})]})]})]})})]})}export{W as L};
