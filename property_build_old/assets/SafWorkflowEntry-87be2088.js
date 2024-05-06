import{k as L,j as t,c1 as b,c0 as j,aA as C,n as a,P as v}from"./index-c73b3921.js";function S(){L("SAF Workflow");const{api_safInboxList:s,api_safOutboxList:r,api_getsafSpecialList:i,api_safBTCList:p,api_postEscalateStatus:l,api_postComment:n,api_postApplicationToLevel:d,api_approveRejectForm:m,api_backToCitizen:u,api_getSafDetailsById:c,api_workflowInfo:f,api_verifyDocumentsSaf:_,api_postDepartmental:w,api_uploadDocument:h,api_getDepartmentalData:x,getDocumentList:g,api_uploadDocumentShow:y,api_fieldVerificationList:D}=v(),k={api:{api_inboxList:{method:"get",url:s},api_outboxList:{method:"get",url:r},api_specialList:{method:"get",url:i},apt_btcList:{method:"post",url:p},api_fieldVerificationList:{method:"post",url:D},api_details:{method:"post",url:c},api_workflowInfo:{method:"post",url:f},api_independentComment:{method:"post",url:n},api_sendLevel:{method:"post",url:d},api_escalate:{method:"post",url:l},api_btc:{method:"post",url:u},api_approveReject:{method:"post",url:m},api_postDepartmentalData:{method:"post",url:w},api_getDepartmentalData:{method:"post",url:x},api_uploadDocumentShow:{method:"post",url:y},api_uploadDocument:{method:"post",url:h},api_verifyDocuments:{method:"post",url:_},api_documentList:{method:"post",url:g},documentBaseUrl:C},workflow:{workflowName:"Saf-Workflow",departmentalPostFor:"SAF",workflowId:1,moduleId:1,formUrl:"/property/safform/bo-edit",fullEdit:"/property/safform/full-edit",fullDetailsUrl:"/property/propApplicationDetails"},tableColumns:[{Header:"#",Cell:({row:e})=>t.jsx("div",{className:"pr-2",children:e.index+1})},{Header:"Ward No",accessor:"ward_no",Cell:({cell:e})=>{var o;return t.jsx("span",{children:a((o=e.row.original)==null?void 0:o.ward_no)})}},{Header:"Saf No.",accessor:"saf_no",Cell:({cell:e})=>{var o;return t.jsx("span",{children:a((o=e.row.original)==null?void 0:o.saf_no)})}},{Header:"Owner Name",accessor:"owner_name",Cell:({cell:e})=>{var o;return t.jsx("span",{children:a((o=e.row.original)==null?void 0:o.owner_name)})}},{Header:"Property Type",accessor:"property_type",Cell:({cell:e})=>{var o;return t.jsx("span",{children:a((o=e.row.original)==null?void 0:o.property_type)})}},{Header:"Apply Date",accessor:"apply_date",Cell:({cell:e})=>{var o;return t.jsx("span",{children:a((o=e.row.original)==null?void 0:o.apply_date)})}},{Header:"Assessment Type",accessor:"assessment",Cell:({cell:e})=>t.jsx("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1  "+(e.row.values.assessment=="New Assessment"?"bg-green-200 text-green-900 ":"")+(e.row.values.assessment=="Re Assessment"?"bg-indigo-200 text-indigo-900 ":"")+(e.row.values.assessment=="Mutation"?"bg-red-200 text-red-900":""),children:Array.from(e.row.values.assessment)[0]})}],customTabs:null,hasBTC:!0,hasFieldVerification:!0};return t.jsx(b,{errorMsg:"Bug in PilotWorkflowIndex",children:t.jsx(j,{workflowData:k})})}export{S as default};
