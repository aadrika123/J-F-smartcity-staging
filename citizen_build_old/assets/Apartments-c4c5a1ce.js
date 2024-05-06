import{j as e}from"./mui-8e804a04.js";import{u as w,r}from"./router-87042356.js";import{c as S,u as v,R as E,aj as D,P as A}from"./index-2435513d.js";import{a as L}from"./axios-97164839.js";import{b as k}from"./index.esm-a4ef204f.js";import{L as C}from"./ListTable-ccf44b95.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";const V=()=>{const{api_searchChallanDirect:p}=A();w();const u=[{Header:"Sl.No.",Cell:({row:s})=>e.jsx("div",{children:(s==null?void 0:s.index)+1})},{Header:"WARD NO."},{Header:"CONSUMER NAME"},{Header:"ADDRESS"},{Header:"MOBILE NO."},{Header:"CONSUMER TYPE",className:"w-[7%]"},{Header:"TOTAL DEMAND"},{Header:"DEMAND UPTO"},{Header:"PAID STATUS"},{Header:"STATUS"},{Header:"Action",Cell:({cell:s})=>e.jsx("div",{className:"flex items-center flex-wrap md:flex-nowrap flex-row gap-2 ",children:e.jsxs("button",{className:`border border-sky-700 text-sky-700 w-24 py-1 rounded-sm shadow-md hover:shadow-xl hover:bg-sky-700 \r
                    hover:text-white flex items-center justify-center gap-1 `,children:[e.jsx(k,{})," View"]})})}],[h,f]=r.useState(),[H,b]=r.useState(0),[g,N]=r.useState(!1),[n,l]=r.useState([]),[F,o]=r.useState(!1),y=S({}),a=v({initialValues:{consumerNo:"",consumerName:"",wordNo:"",mobileNo:""},validationSchema:y,onSubmit:s=>{i(),j(s)}}),i=()=>{const s=h;L.post(p,s).then(t=>{var d,c,m,x;o(!1),(d=t==null?void 0:t.data)!=null&&d.status?l((m=(c=t==null?void 0:t.data)==null?void 0:c.data)==null?void 0:m.data):l([]),console.log("user role list response => ",(x=t==null?void 0:t.data)==null?void 0:x.data)}).catch(t=>{o(!1),l([]),console.log("error user role list => ",t)})};r.useEffect(()=>{o(!0),i()},[]);const j=s=>{f({[s==null?void 0:s.searchBy]:s==null?void 0:s.entry,challanNo:"G003242534600010"}),b(t=>t+1)};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full  -mt-4",children:e.jsx("div",{className:" ",children:e.jsxs("div",{className:"w-full flex flex-col gap-5 justify-center items-center  transition-all duration-200",children:[e.jsx("aside",{className:" w-full bg-slate-50 shadow-md h-max",children:e.jsxs("form",{onSubmit:a.handleSubmit,onChange:a.handleChange,className:"bg-white poppins p-4",children:[e.jsx("h1",{className:"text-xl font-semibold uppercase text-center text-gray-700 border-b border-gray-400 mb-4 pb-1",children:"Search Apartments"}),e.jsxs("div",{className:"flex flex-row flex-wrap gap-x-4 items-center gap-y-2 pb-4 mb-2 border-b",children:[e.jsxs("div",{className:"w-full md:w-[25%] ",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Consumer No.",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",...a.getFieldProps("consumerNo"),placeholder:"Enter the parameter",className:"h-10  w-full px-3 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-400 shadow-md"})]}),e.jsxs("div",{className:"w-full md:w-[25%] ",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Consumer Name",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",...a.getFieldProps("consumerName"),placeholder:"Enter the parameter",className:"h-10  w-full px-3 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-400 shadow-md"})]}),e.jsxs("div",{className:"w-full md:w-[25%] ",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No.",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",...a.getFieldProps("wordNo"),placeholder:"Enter the parameter",className:"h-10  w-full px-3 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-400 shadow-md"})]}),e.jsxs("div",{className:"w-full md:w-[25%] ",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Mobile No.",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",...a.getFieldProps("mobileNo"),placeholder:"Enter the parameter",className:"h-10  w-full px-3 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-400 shadow-md"})]}),e.jsx("div",{className:"mt-4 w-full  justify-center md:justify-start md:w-[30%] flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:mt-6",children:e.jsx("div",{className:" w-full",children:g?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-center",children:e.jsx(E,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"max-sm:w-full justify-center py-2 flex items-center border border-green-600 bg-green-500 hover:bg-green-600 text-white shadow-md rounded-md  text-sm px-5",children:[e.jsx("span",{className:"",children:e.jsx(D,{fontSize:""})}),e.jsx("span",{children:"Search Record"})]})})})]})]})}),e.jsx("aside",{className:"w-full overflow-clip transition-all duration-300 h-full max-sm:mb-[4rem]",children:n.length!=0?e.jsx(C,{columns:u,dataList:n,exportStatus:!1,loader:s=>N(s)}):e.jsxs("div",{className:"bg-red-100 border border-red-400 text-red-700 pl-4 pr-16 max-sm:pr-0 max-sm:pl-0 py-3 rounded relative text-center max-sm:m-2",role:"alert",children:[e.jsx("strong",{className:"font-bold",children:"Sorry! "}),e.jsx("span",{className:"block sm:inline",children:"Some error occured while fetching list. Please try again later."}),e.jsx("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3"})]})})]})})})})};export{V as default};
