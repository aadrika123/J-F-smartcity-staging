import{k as x,j as o,c3 as D,aB as j,bo as a,P as k,bC as y}from"./index-a8a14e0c.js";function L(){x("Rainwater Harvesting Workflow");const{api_workflowInfo:r,api_postDepartmental:s,api_getDepartmentalData:i}=k(),{get_HarvestingInbox:l,get_HarvestingOutbox:p,post_HarvestingNextLevel:n,get_HarvestingSpecial:d,post_HarvestingApprovalRejection:c,post_HarvestingEscalate:_,get_HarvestingUploadedDocuments:m,post_HarvestingDocumentUpload:u,get_HarvestingBtcList:g,get_HarvestingBtcAction:h,get_HarvestingDetailsById:w,get_HarvestingDocumentsToUpload:H,post_HarvestingDocVerify:f}=y(),v={api:{api_inboxList:{method:"post",url:l},api_outboxList:{method:"post",url:p},api_specialList:{method:"post",url:d},apt_btcList:{method:"post",url:g},api_fieldVerificationList:{method:"post",url:""},api_details:{method:"post",url:w},api_workflowInfo:{method:"post",url:r},api_independentComment:{method:"post",url:""},api_sendLevel:{method:"post",url:n},api_escalate:{method:"post",url:_},api_btc:{method:"post",url:h},api_approveReject:{method:"post",url:c},api_postDepartmentalData:{method:"post",url:s},api_getDepartmentalData:{method:"post",url:i},api_uploadDocumentShow:{method:"post",url:H},api_uploadDocument:{method:"post",url:u},api_verifyDocuments:{method:"post",url:f},api_documentList:{method:"post",url:m},documentBaseUrl:j},workflow:{workflowName:"Harvesting-Workflow AT",workflowId:13,moduleId:1,fullDetailsUrl:"/property/harvesting-details"},tableColumns:[{Header:"#",Cell:({row:t})=>o.jsx("div",{className:"pr-2",children:t.index+1})},{Header:"Ward No",accessor:"ward_no",Cell:({cell:t})=>{var e;return o.jsx("span",{children:a((e=t.row.original)==null?void 0:e.ward_no)})}},{Header:"Application No.",accessor:"application_no",Cell:({cell:t})=>{var e;return o.jsx("span",{children:a((e=t.row.original)==null?void 0:e.application_no)})}},{Header:"Holding No.",accessor:"holding_no",Cell:({cell:t})=>{var e;return o.jsx("span",{children:a((e=t.row.original)==null?void 0:e.holding_no)})}},{Header:"Applicant Name",accessor:"applicant_name",Cell:({cell:t})=>{var e;return o.jsx("span",{children:a((e=t.row.original)==null?void 0:e.applicant_name)})}},{Header:"Property Type",accessor:"property_type",Cell:({cell:t})=>{var e;return o.jsx("span",{children:a((e=t.row.original)==null?void 0:e.property_type)})}},{Header:"Apply Date",accessor:"date",Cell:({cell:t})=>{var e;return o.jsx("span",{children:a((e=t.row.original)==null?void 0:e.date)})}}],customTabs:null,hasBTC:!0,hasFieldVerification:!1};return o.jsx(D,{workflowData:v})}export{L as default};
