import{r as x,K as fl,j as l,B as wl,n as s,Z as Fl,A as _l,e as Sl,g as yl}from"./index-de640f8f.js";import{I as El,a as gl}from"./image 12-e8bb822a.js";import{a as Il,I as dl}from"./image 20-a4749979.js";import{I as Al}from"./image 23-6e7b7d0e.js";import{I as Ml}from"./image 21-2f26a8c7.js";import{I as Bl}from"./image 22-abc0f0c0.js";import{B as Ll}from"./BottomErrorCard-511fba4a.js";function ql(){var d,n,p,t,h,o,j,b,N,v,u,f,w,F,_,S,y,E,g,I,A,M,B,L,C,P,k,T,z,R,U,q,O,G,H,K,Y,$,X,Z,J,Q,W,V,D,ll,el,sl,al,xl,ml,il;const[nl,i]=x.useState(!1),[pl,tl]=x.useState(!1),[hl,ol]=x.useState(null),[r,jl]=x.useState(),{api_getEmployeeDataById:bl}=yl(),{id:Nl}=fl(),vl=()=>{i(!0),_l.post(bl,{id:Nl},Sl()).then(function(a){var m,cl,rl;console.log("Category By Name..",(m=a==null?void 0:a.data)==null?void 0:m.data),(cl=a==null?void 0:a.data)!=null&&cl.status?jl((rl=a==null?void 0:a.data)==null?void 0:rl.data):c(!0,"Error occured while fetching data."),i(!1)}).catch(function(a){console.log("==2 error list...",a),c(!0,"Error occured while fetching data."),i(!1)})};x.useEffect(()=>{vl()},[]);const[e,ul]=x.useState();x.useEffect(()=>{ul(r)},[r]);const c=(a,m)=>{ol(m),tl(a)};return console.log("Hello moto",e==null?void 0:e.basic_details),l.jsxs(l.Fragment,{children:[nl&&l.jsx(wl,{}),pl&&l.jsx(Ll,{activateBottomErrorCard:c,errorTitle:hl}),l.jsx("div",{className:"w-full bg-white h-[82vh] overflow-auto flex relative",children:l.jsx("div",{className:"w-full bg-white mx-[10px]  mt-[2vh] rounded-[25px] border border-gray-200 h-auto",children:l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-center",children:[l.jsx("span",{className:"bg-[#E6ECFF] text-[2vh] text-black px-[30px] py-[20px] mt-[60px] rounded-l-5xl absolute",children:"Review Application"}),l.jsx("span",{className:"relative ml-[300px]",children:l.jsx("img",{src:El,alt:"review",className:"w-[130px] h-[130px]"})})]}),l.jsxs("div",{className:"h-[75vh] overflow-auto",children:[l.jsxs("div",{className:"mt-5",children:[l.jsx("h1",{style:{zIndex:100},className:" flex items-start justify-start pt-2 my-1 font-bold text-[2.5vh]  text-[#6b7280] pl-[52px]  bg-white w-full ",children:l.jsxs("div",{className:"flex",children:[l.jsx("img",{src:gl,alt:"Basic",className:"mr-5 w-10 h-10 opacity-80"})," ",l.jsx("span",{className:"flex text-slate-600 items-center justify-center text-[22px]",children:"BASIC DETAILS"})]})}),l.jsx("hr",{className:"mx-[40px]"}),l.jsxs("div",{className:"mt-1",children:[l.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[50px]   max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleSatulations",className:"label3",children:"Salutation"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((d=e==null?void 0:e.basic_details)==null?void 0:d.salutation_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"First Name"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((n=e==null?void 0:e.basic_details)==null?void 0:n.first_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Middle Name"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((p=e==null?void 0:e.basic_details)==null?void 0:p.middle_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Last Name"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((t=e==null?void 0:e.basic_details)==null?void 0:t.last_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Mobile No."}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((h=e==null?void 0:e.basic_details)==null?void 0:h.mobile)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"E-mail"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((o=e==null?void 0:e.basic_details)==null?void 0:o.email)})]})})]}),l.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[50px]   max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleSatulations",className:"label3",children:"Gender"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((j=e==null?void 0:e.basic_details)==null?void 0:j.gender_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Caste Category"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((b=e==null?void 0:e.basic_details)==null?void 0:b.category_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Date of birth"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((N=e==null?void 0:e.basic_details)==null?void 0:N.dob)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Date of joining"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((v=e==null?void 0:e.basic_details)==null?void 0:v.doj)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Blood group"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((u=e==null?void 0:e.basic_details)==null?void 0:u.blood_group_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Department"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((f=e==null?void 0:e.basic_details)==null?void 0:f.department_name)})]})})]}),l.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[50px]   max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleSatulations",className:"label3",children:"Employment type"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((w=e==null?void 0:e.basic_details)==null?void 0:w.emp_type_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Marital status"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((F=e==null?void 0:e.basic_details)==null?void 0:F.marital_status_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Teaching title"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((_=e==null?void 0:e.basic_details)==null?void 0:_.teaching_title_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Aadhar No."}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((S=e==null?void 0:e.basic_details)==null?void 0:S.aadhar_no)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Special Ability"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((y=e==null?void 0:e.basic_details)==null?void 0:y.disability)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Uploaded Image"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:l.jsx("img",{src:`${Fl}/${(E=e==null?void 0:e.basic_details)==null?void 0:E.upload_image}`,alt:"image"})})]})})]})]})]}),l.jsxs("div",{className:"mt-5",children:[l.jsx("h1",{style:{zIndex:100},className:" flex items-start justify-start pt-2 my-1 font-bold text-[2.5vh]  text-[#6b7280] pl-[52px]  bg-white w-full ",children:l.jsxs("div",{className:"flex",children:[l.jsx("img",{src:Il,alt:"Address",className:"mr-5 w-10 h-10 opacity-80"})," ",l.jsx("span",{className:"flex text-slate-600 items-center justify-center text-[22px]",children:"ADDRESS DETAILS"})]})}),l.jsx("hr",{className:"mx-[40px]"}),l.jsxs("div",{className:"mt-1",children:[l.jsx("div",{className:"w-[100%] mt-[20px] flex  px-[50px]   max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label3",children:"Peramanent"})})})}),l.jsxs("div",{className:"w-[100%] mt-[10px] flex mb-[20px] px-[50px]   max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleSatulations",className:"label3",children:"Address 1"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((g=e==null?void 0:e.basic_details)==null?void 0:g.p_address1)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Address 2"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((I=e==null?void 0:e.basic_details)==null?void 0:I.p_address2)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Locality"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((A=e==null?void 0:e.basic_details)==null?void 0:A.p_locality)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Landmark"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((M=e==null?void 0:e.basic_details)==null?void 0:M.p_landmark)})]})})]}),l.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[50px]   max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"City"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((B=e==null?void 0:e.basic_details)==null?void 0:B.p_district_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"State"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((L=e==null?void 0:e.basic_details)==null?void 0:L.p_state_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleSatulations",className:"label3",children:"Country"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((C=e==null?void 0:e.basic_details)==null?void 0:C.p_country_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Pincode"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((P=e==null?void 0:e.basic_details)==null?void 0:P.p_pincode)})]})})]}),e!=null&&e.c_address1?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"w-[100%] mt-[20px] flex  px-[50px]   max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Correspondance"})})})}),l.jsxs("div",{className:"w-[100%] mt-[10px] flex mb-[20px] px-[50px]   max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Address 1"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((k=e==null?void 0:e.basic_details)==null?void 0:k.c_address1)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Address 2"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((T=e==null?void 0:e.basic_details)==null?void 0:T.c_address2)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Locality"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((z=e==null?void 0:e.basic_details)==null?void 0:z.c_locality)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Landmark"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((R=e==null?void 0:e.basic_details)==null?void 0:R.c_landmark)})]})})]}),l.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[50px]   max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"City"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((U=e==null?void 0:e.basic_details)==null?void 0:U.c_district_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"State"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((q=e==null?void 0:e.basic_details)==null?void 0:q.c_state_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Country"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((O=e==null?void 0:e.basic_details)==null?void 0:O.c_country_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Pincode"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((G=e==null?void 0:e.basic_details)==null?void 0:G.c_pincode)})]})})]})]}):null]})]}),l.jsxs("div",{className:"mt-5",children:[l.jsx("h1",{style:{zIndex:100},className:" flex items-start justify-start pt-2 my-1 font-bold text-[2.5vh]  text-[#6b7280] pl-[52px]  bg-white w-full ",children:l.jsxs("div",{className:"flex",children:[l.jsx("img",{src:dl,alt:"Basic",className:"mr-5 w-10 h-10 opacity-80"})," ",l.jsx("span",{className:"flex text-slate-600 items-center justify-center text-[22px]",children:"PARENT DETAILS"})]})}),l.jsx("hr",{className:"mx-[40px]"}),l.jsx("div",{className:"mt-1",children:l.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[50px]   max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleSatulations",className:"label3",children:"Father's name"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((H=e==null?void 0:e.basic_details)==null?void 0:H.fathers_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Mother's name"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((K=e==null?void 0:e.basic_details)==null?void 0:K.mothers_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Father's qualification"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((Y=e==null?void 0:e.basic_details)==null?void 0:Y.fathers_qualification_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Mother's qualification"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(($=e==null?void 0:e.basic_details)==null?void 0:$.mothers_qualification_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Father's occupation"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((X=e==null?void 0:e.basic_details)==null?void 0:X.fathers_occupation_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Mother's occupation"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((Z=e==null?void 0:e.basic_details)==null?void 0:Z.mothers_occupation_name)})]})})]})})]}),l.jsxs("div",{className:"mt-5",children:[l.jsx("h1",{style:{zIndex:100},className:" flex items-start justify-start pt-2 my-1 font-bold text-[2.5vh]  text-[#6b7280] pl-[52px]  bg-white w-full ",children:l.jsxs("div",{className:"flex",children:[l.jsx("img",{src:Al,alt:"Basic",className:"mr-5 w-10 h-10 opacity-80"})," ",l.jsx("span",{className:"flex text-slate-600 items-center justify-center text-[22px]",children:"BANK DETAILS"})]})}),l.jsx("hr",{className:"mx-[40px]"}),l.jsx("div",{className:"mt-1",children:l.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[50px]   max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleSatulations",className:"label3",children:"Bank name"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((J=e==null?void 0:e.basic_details)==null?void 0:J.bank_name)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Account number"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((Q=e==null?void 0:e.basic_details)==null?void 0:Q.account_no)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Account type"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((W=e==null?void 0:e.basic_details)==null?void 0:W.account_type)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"IFSC code"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((V=e==null?void 0:e.basic_details)==null?void 0:V.ifsc_code)})]})}),l.jsxs("div",{className:"w-full mx-[10px]  px-[10px]",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Branch name"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((D=e==null?void 0:e.basic_details)==null?void 0:D.branch_name)})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Nominee name"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((ll=e==null?void 0:e.basic_details)==null?void 0:ll.nominee_name)})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Nominee Relation"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((el=e==null?void 0:e.basic_details)==null?void 0:el.nominee_relation_name)})]})]})]})})]}),l.jsxs("div",{className:"mt-5",children:[l.jsx("h1",{style:{zIndex:100},className:" flex items-start justify-start pt-2 my-1 font-bold text-[2.5vh]  text-[#6b7280] pl-[52px]  bg-white w-full ",children:l.jsx("div",{className:"flex",children:l.jsx("span",{className:"flex text-slate-600 items-center justify-center text-[22px]",children:"PAYROLL"})})}),l.jsx("hr",{className:"mx-[40px]"}),l.jsx("div",{className:"mt-1",children:l.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[50px] max-[917px]:block ",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleSatulations",className:"label3",children:"Pan number"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((sl=e==null?void 0:e.basic_details)==null?void 0:sl.pan_no)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"EPF number"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((al=e==null?void 0:e.basic_details)==null?void 0:al.epf_no)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"UAN number"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((xl=e==null?void 0:e.basic_details)==null?void 0:xl.uan_no)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"ESI number"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((ml=e==null?void 0:e.basic_details)==null?void 0:ml.esi_no)})]})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsxs("div",{children:[l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"NPS number"}),l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s((il=e==null?void 0:e.basic_details)==null?void 0:il.nps_no)})]})})]})})]}),l.jsxs("div",{className:"mt-5",children:[l.jsx("h1",{style:{zIndex:100},className:" flex items-start justify-start pt-2 my-1 font-bold text-[2.5vh]  text-[#6b7280] pl-[52px]  bg-white w-full ",children:l.jsxs("div",{className:"flex",children:[l.jsx("img",{src:Ml,alt:"Basic",className:"mr-5 w-10 h-10 opacity-80"})," ",l.jsx("span",{className:"flex text-slate-600 items-center justify-center text-[22px]",children:"EDUCATION DETAILS"})]})}),l.jsx("hr",{className:"mx-[40px]"}),l.jsxs("div",{className:"mt-1",children:[l.jsx("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[50px] max-[1200px]:w-[1200px] max-[1200px]:overflow-auto ",children:l.jsxs("div",{className:"bg-[#E6ECFF] flex w-full py-3 mx-4",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label3",children:"Degree name"})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Board"})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Passing year"})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Division"})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Marks obtained"})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Total Marks"})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Percentage"})})})]})}),(e==null?void 0:e.education_details)&&(e==null?void 0:e.education_details.map(a=>l.jsx(l.Fragment,{children:l.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[50px]  max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a.exam_passed_name)})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a.board_uni_inst)})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a.passing_year)})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a.div_grade_name)})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a.marks_obtained)})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a.total_marks)})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a.percentage)})})})]})})))]})]}),l.jsxs("div",{className:"mt-5",children:[l.jsx("h1",{style:{zIndex:100},className:" flex items-start justify-start pt-2 my-1 font-bold text-[2.5vh]  text-[#6b7280] pl-[52px]  bg-white w-full ",children:l.jsxs("div",{className:"flex",children:[l.jsx("img",{src:Bl,alt:"Basic",className:"mr-5 w-10 h-10 opacity-80"})," ",l.jsx("span",{className:"flex text-slate-600 items-center justify-center text-[22px]",children:"EXPERIENCE DETAILS"})]})}),l.jsx("hr",{className:"mx-[40px]"}),l.jsxs("div",{className:"mt-1",children:[l.jsx("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[50px]  max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:l.jsxs("div",{className:"bg-[#E6ECFF] flex w-full py-3 mx-4",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label3",children:"Name of organization"})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Position head"})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Period From"})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Period to"})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Salary"})})})]})}),(e==null?void 0:e.experience_details)&&(e==null?void 0:e.experience_details.map(a=>l.jsx(l.Fragment,{children:l.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[50px]  max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a.name_of_org)})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a.position_head)})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a.period_from)})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a.period_to)})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a.salary)})})})]})})))]})]}),l.jsxs("div",{className:"mt-5",children:[l.jsx("h1",{style:{zIndex:100},className:" flex items-start justify-start pt-2 my-1 font-bold text-[2.5vh]  text-[#6b7280] pl-[52px]  bg-white w-full ",children:l.jsxs("div",{className:"flex",children:[l.jsx("img",{src:dl,alt:"Basic",className:"mr-5 w-10 h-10 opacity-80"})," ",l.jsx("span",{className:"flex text-slate-600 items-center justify-center text-[22px]",children:"FAMILY DETAILS"})]})}),l.jsx("hr",{className:"mx-[40px]"}),l.jsxs("div",{className:"mt-1",children:[l.jsx("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[50px]  max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:l.jsxs("div",{className:"bg-[#E6ECFF] flex w-full py-3 mx-4",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label3",children:"Family Name"})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleEmail",className:"label3",children:"Relation"})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleMiddlename",className:" label3",children:"Date Of birth"})})})]})}),(e==null?void 0:e.family_details)&&(e==null?void 0:e.family_details.map(a=>l.jsx(l.Fragment,{children:l.jsxs("div",{className:"w-[100%] mt-[30px] flex mb-[20px] px-[50px]  max-[1200px]:w-[1200px] max-[1200px]:overflow-auto  ",children:[l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a==null?void 0:a.f_member_name)})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a==null?void 0:a.f_member_relation_name)})})}),l.jsx("div",{className:"w-full mx-[10px]  px-[10px]",children:l.jsx("div",{children:l.jsx("label",{htmlFor:"exampleSatulations",className:"label4",children:s(a==null?void 0:a.f_member_dob)})})})]})})))]})]})]})]})})})]})}export{ql as default};
