import{u as o,j as i,F as c,b as n}from"./index-ace27d6f.js";import{n as s}from"./PowerupFunctions-37c37caf.js";function h(t){var l;const r=o();return i(c,{children:(l=t==null?void 0:t.dataList)==null?void 0:l.map(e=>i("div",{className:" md:p-2 flex justify-center items-center  overflow-hidden bg-[#eff2f0]",children:i("div",{className:"p-2 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500",children:n("div",{className:" flex items-center  justify-between p-2  rounded-lg bg-[#fdfdfd] shadow-indigo-50 shadow-md",children:[n("div",{children:[i("h2",{className:"text-gray-900 text-md font-bold",children:s(e==null?void 0:e.allottee)}),n("h3",{className:"mt-2 text-md font-bold text-indigo-600 text-left",children:["Shop no. : ",s(e==null?void 0:e.shop_no)]}),n("p",{className:"text-sm font-semibold text-gray-400",children:["Last Paid on : ",s(e==null?void 0:e.last_payment_date)]}),n("p",{className:"text-sm font-semibold text-gray-400",children:[" ",s(e==null?void 0:e.circle_name)]}),i("button",{className:"text-xs mt-2 px-4 py-2 bg-indigo-600  text-white rounded-lg  tracking-wider hover:bg-indigo-700 outline-none",onClick:()=>r(`/shop-details/${e==null?void 0:e.id}`),children:"View"})]}),i("div",{className:"bg-gradient-to-tr from-[#6c68f0] to-[#6c68f0] w-20 h-20  rounded-full shadow-lg shadow-indigo-300 border-white  border-dashed border-2  flex justify-center items-center ",children:i("div",{children:n("h1",{className:"text-white text-sm text-center",children:["Rate ",i("br",{}),s(e==null?void 0:e.rate)]})})})]})})}))})}export{h as default};
