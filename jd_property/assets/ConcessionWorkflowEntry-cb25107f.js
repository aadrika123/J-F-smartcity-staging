import{k,j as t,c2 as y,aA as j,bn as s,P as L,bB as b}from"./index-259f1e14.js";function A(){k("Concession Workflow");const{api_workflowInfo:a,api_postDepartmental:n,api_getDepartmentalData:i}=L(),{get_ConcessionInbox:l,get_ConcessionOutbox:p,get_ConcessionSpecial:r,get_ConcessionDetailsById:c,post_ConcessionEscalate:d,post_ConcessionNextLevel:_,post_ConcessionApprovalRejection:m,post_ConcessionBackToCitizen:u,post_ConcessionComment:C,get_ConcessionDocumentsToUpload:h,get_ConcessionUploadedDocuments:w,post_ConcessionDocumentUpload:f,get_ConcessionBtcList:g,post_ConcessionDocVerify:x}=b(),D={api:{api_inboxList:{method:"post",url:l},api_outboxList:{method:"post",url:p},api_specialList:{method:"post",url:r},apt_btcList:{method:"post",url:g},api_fieldVerificationList:{method:"post",url:""},api_details:{method:"post",url:c},api_workflowInfo:{method:"post",url:a},api_independentComment:{method:"post",url:C},api_sendLevel:{method:"post",url:_},api_escalate:{method:"post",url:d},api_btc:{method:"post",url:u},api_approveReject:{method:"post",url:m},api_postDepartmentalData:{method:"post",url:n},api_getDepartmentalData:{method:"post",url:i},api_uploadDocumentShow:{method:"post",url:h},api_uploadDocument:{method:"post",url:f},api_verifyDocuments:{method:"post",url:x},api_documentList:{method:"post",url:w},documentBaseUrl:j},workflow:{workflowName:"Concession-Workflow AT",departmentalPostFor:"CONCESSION",workflowId:9,moduleId:1},tableColumns:[{Header:"#",Cell:({row:e})=>t.jsx("div",{className:"pr-2",children:e.index+1})},{Header:"Ward No",accessor:"ward_no",Cell:({cell:e})=>{var o;return t.jsx("span",{children:s((o=e.row.original)==null?void 0:o.ward_no)})}},{Header:"Application No.",accessor:"application_no",Cell:({cell:e})=>{var o;return t.jsx("span",{children:s((o=e.row.original)==null?void 0:o.application_no)})}},{Header:"Holding No.",accessor:"holding_no",Cell:({cell:e})=>{var o;return t.jsx("span",{children:s((o=e.row.original)==null?void 0:o.holding_no)})}},{Header:"Owner Name",accessor:"owner_name",Cell:({cell:e})=>{var o;return t.jsx("span",{children:s((o=e.row.original)==null?void 0:o.owner_name)})}},{Header:"Apply Date",accessor:"apply_date",Cell:({cell:e})=>{var o;return t.jsx("span",{children:s((o=e.row.original)==null?void 0:o.apply_date)})}},{Header:"Property Type",accessor:"property_type",Cell:({cell:e})=>{var o;return t.jsx("span",{children:s((o=e.row.original)==null?void 0:o.property_type)})}}],customTabs:null,hasBTC:!0,hasFieldVerification:!1};return t.jsx(y,{workflowData:D})}export{A as default};
