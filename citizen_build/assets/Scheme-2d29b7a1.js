import{j as t}from"./mui-8e804a04.js";import{u as x,r as a}from"./router-87042356.js";import{W as g}from"./index-19682a6e.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";const o="/assets/card2-d4c9a125.png",n="/assets/card3-3d201e62.jpg",l="/assets/card1-da9ce20c.png",c="/assets/card4-2aacb318.png",p="/assets/stars2-f3b084dd.jpeg",N=()=>{const m=x(),[s,i]=a.useState([]);return a.useEffect(()=>{let e=window.location.pathname;(e==null?void 0:e.split("-")[(e==null?void 0:e.split("-").length)-1])=="inside"?i([{title:"Concession Rebates",route:"/info-con-inside",image:o},{title:"Online Rebate",route:"/info-online-inside",image:n},{title:"JSK Rebate",route:"/info-jsk-inside",image:l},{title:"1st Quarter Rebate",route:"/info-qtr-inside",image:c}]):i([{title:"Concession Rebates",route:"/info-con",image:o},{title:"Online Rebate",route:"/info-online",image:n},{title:"JSK Rebate",route:"/info-jsk",image:l},{title:"1st Quarter Rebate",route:"/info-qtr",image:c}])},[]),t.jsx(t.Fragment,{children:t.jsxs("section",{className:"bg-white relative -mt-2",children:[t.jsxs("div",{className:"container px-6 py-6 mx-auto mb-4",children:[t.jsx("h1",{className:"text-2xl font-semibold text-center text-gray-800 capitalize text-[1.8rem] ",children:"Special Rebates"}),t.jsx("h1",{className:"text-md text-center text-gray-600 capitalize  ",children:"You can get upto 12.5% rebate on your tax. Below is the list of rebate catgories."}),t.jsx("div",{className:"grid grid-cols-1 gap-8 mt-8 xl:mt-8 xl:gap-10 lg:grid-cols-2 mx-[13rem] max-sm:mx-5",children:s==null?void 0:s.map((e,r)=>t.jsx("div",{className:"flex items-end overflow-auto bg-cover rounded-lg h-[10rem] transform w-[18rem]",style:{backgroundImage:`url("${e==null?void 0:e.image}")`,backgroundSize:"cover",transition:"transform .2s"},children:t.jsxs("div",{className:"w-full px-8 py-8 overflow-auto rounded-b-lg ",children:[t.jsx("h2",{className:"mt-4 text-xl font-semibold text-white capitalize ",children:e==null?void 0:e.title}),t.jsx("p",{onClick:()=>m(e==null?void 0:e.route),className:"mt-2 text-sm tracking-wider text-gray-500 capitalize  cursor-pointer ",children:t.jsxs("span",{className:"bg-white md:px-4 max-sm:px-2 py-1 rounded-xl hover:bg-[#78ac9f] font-serif hover:text-white",children:["More Details"," ",t.jsx("span",{children:t.jsx(g,{className:"inline"})})]})})]})},r))}),t.jsx("h1",{className:"text-md text-center text-gray-600 capitalize  mt-6",children:"For more details you can contact 9123254999 or reach your nearest Jan Seva Kendra."})]}),t.jsx("img",{src:p,alt:"",className:"bg-blue-500 opacity-20 absolute top-0 right-0 z-0 w-[12rem]"})]})})};export{N as default};
