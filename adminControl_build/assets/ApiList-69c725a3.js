import{B as t}from"./ApiHeader-4ed27c1c.js";const a="https://aadrikainfomedia.com/auth";function o(){let p=t,e=a;return{api_login:`${p}/api/login`,api_getNotification:`${p}/api/get-user-notifications`,api_getDashboard:`${p}/`,api_getFreeMenuList:`${p}/api/menu/by-module`,api_getUlbWardList:`${p}/api/get-all-ulb-ward`,api_getUlbList:`${p}/api/v2/get-all-ulb`,api_PostUlb:`${p}/api/create-ulb-master`,api_getUlbById:`${p}/api/get-ulb-by-id`,api_updateUlb:`${p}/api/update-ulb-by-id`,api_deleteUlb:`${p}/api/ulb-master-delete`,api_getWardListByULB:`${p}/api/workflow/getWardByUlb`,api_getFinancialYearList:`${p}/api/property/reports/list-fy`,api_getDistrictList:`${p}/api/list-district`,api_getUlbWiseCollection:`${p}/api/dashboard/state/ulb-wise-collection`,api_getDcbMonthly:`${p}/api/dashboard/state/property/DCB`,api_getOnlinePaymentCount:`${p}/api/dashboard/state/count-online-payment`,api_getPercentageWiseModuleCollection:`${p}/api/dashboard/state/collection-percentage`,api_getUlbDataByDistrict:`${p}/api/dashboard/state/district-wise-data`,api_getOnlineUsers:`${p}/`,api_checkHeartBeat:`${p}/api/heartbeat`,api_logout:`${p}/api/logout`,api_getHeatMapDataByWard:`${p}/api/property/getpropLatLong`,api_wardByUlb:`${p}/api/workflow/getWardByUlb`,api_getTcByWard:`${p}/api/workflow/ward-user/list-tc`,ulbListApi:`${p}/api/get-all-ulb`,zone_list_Api:`${p}/api/get-zone`,api_deleteZoneApi:`${p}/api/delete-zone`,api_PostZoneApi:`${p}/api/create-zone`,api_zone_by_id:`${p}/api/get-zone-by-id`,api_updateZoneApi:`${p}/api/update-zone`,api_getRoleList:`${p}/api/crud/roles/get-all-roles`,api_postRole:`${p}/api/crud/roles/save-role`,api_deleteRole:`${p}/api/crud/roles/delete-role`,api_editRole:`${p}/api/crud/roles/edit-role`,api_getUserList:`${p}/api/get-all-users`,api_postUser:`${p}/api/authorised-register`,getMenuRole:`${e}/api/user-managment/v1/crud/menu-role/list`,api_PostMenuRole:`${e}/api/user-managment/v1/crud/menu-role/save`,api_deleteMenuRole:`${e}/api/user-managment/v1/crud/menu-role/delete`,api_updateMenuRole:`${e}/api/user-managment/v1/crud/menu-role/edit`,api_getMenuListByMenuRoleId:`${e}/api/user-managment/v1/crud/menu-role/menu-list`,api_updateMenuRoleMapping:`${e}/api/user-managment/v1/crud/menu-role-map/save`,getApiRole:`${e}/api/user-managment/v1/crud/api-role/list`,api_PostApiRole:`${e}/api/user-managment/v1/crud/api-role/save`,api_deleteApiRole:`${e}/api/user-managment/v1/crud/api-role/delete`,api_updateApiRole:`${e}/api/user-managment/v1/crud/api-role/edit`,api_getApiListByApiRoleId:`${e}/api/user-managment/v1/crud/api-role/api-list`,api_updateApiRoleMapping:`${e}/api/user-managment/v1/crud/api-role-map/save`,getWorkflowRole:`${e}/api/user-managment/v1/crud/workflow-role/list`,getWorkflowRoleById:`${e}/api/user-managment/v1/crud/workflow-role/get`,api_PostWorkflowRole:`${e}/api/user-managment/v1/crud/workflow-role/save`,api_deleteWorkflowRole:`${e}/api/user-managment/v1/crud/workflow-role/delete`,api_updateWorkflowRole:`${e}/api/user-managment/v1/crud/workflow-role/edit  `,api_getMenuList:`${e}/api/user-managment/v1/crud/menu/list`,api_PostMenu:`${e}/api/user-managment/v1/crud/menu/save`,api_deleteMenu:`${e}/api/user-managment/v1/crud/menu/delete`,api_updateMenu:`${e}/api/user-managment/v1/crud/menu/edit`,api_getMenuById:`${e}/api/user-managment/v1/crud/menu/get`,api_getApiList:`${e}/api/user-managment/v1/crud/api-master/list`,api_PostApi:`${e}/api/user-managment/v1/crud/api-master/save`,api_deleteApi:`${e}/api/user-managment/v1/crud/api-master/delete`,api_updateApi:`${e}/api/user-managment/v1/crud/api-master/edit`,api_getApiById:`${e}/api/user-managment/v1/crud/api-master/get`,api_getUserList:`${e}/api/user-managment/v1/crud/user/list`,api_PostUser:`${e}/api/user-managment/v1/crud/user/create`,api_EnalbeDisableUser:`${e}/api/user-managment/v1/crud/user/delete`,api_updateUser:`${e}/api/user-managment/v1/crud/user/update`,api_getUserById:`${e}/api/user-managment/v1/crud/user/get`,api_getModuleList:`${p}/api/user-managment/v1/crud/module/list`,api_getWorkflowByModule:`${p}/api/user-managment/v1/crud/workflow-by-module`,api_getParentMenuList:`${p}/api/user-managment/v1/crud/menu/list-parent-serial`,api_getApiCategory:`${p}/api/user-managment/v1/api-category`,api_getApiDeveloperList:`${p}/api/user-managment/v1/developer-list`,api_getMenuRolesByUser:`${e}/api/user-managment/v1/crud/menu-role-user/by-user`,api_getApiRolesByUser:`${e}/api/user-managment/v1/crud/api-role-user/by-user`,api_getWorkflowRolesByUser:`${e}/api/user-managment/v1/crud/workflow-role-user/by-user`,api_getUserTypeList:`${e}/api/user-managment/v1/crud/get/user-type`,api_postMenuRoleUserMapping:`${e}/api/user-managment/v1/crud/menu-role-user/save`,api_postApiRoleUserMapping:`${e}/api/user-managment/v1/crud/api-role-user/save`,api_postWorkflowRoleUserMapping:`${e}/api/user-managment/v1/crud/workflow-role-user/save`,api_postWardUserMapping:`${e}/api/user-managment/v1/crud/ward-user/save`,api_getWardListByUser:`${e}/api/user-managment/v1/crud/ward-user/by-user`,api_getConstructionApiList:`${e}/api/property/ref-prop-construction-type-list`,api_PostConstructionApi:`${e}/api/property/ref-prop-construction-type-create`,api_getConstructionApiById:`${e}/api/property/ref-prop-construction-type-get`,api_updateConstructionApi:`${e}/api/property/ref-prop-construction-type-update`,api_deleteConstructionApi:`${e}/api/property/ref-prop-construction-type-delete`,api_getFloorApiList:`${e}/api/property/ref-prop-floor-type-list`,api_PostFloorApi:`${e}/api/property/ref-prop-floor-type-create`,api_getFloorApiById:`${e}/api/property/ref-prop-floor-type-get`,api_updateFloorApi:`${e}/api/property/ref-prop-floor-type-update`,api_deleteFloorApi:`${e}/api/property/ref-prop-floor-type-delete`,api_getUsageTypeApiList:`${e}/api/property/ref-prop-usage-type-list`,api_PostUsageTypeApi:`${e}/api/property/ref-prop-usage-type-create`,api_getUsageTypeApiById:`${e}/api/property/ref-prop-usage-type-get`,api_updateUsageTypeApi:`${e}/api/property/ref-prop-usage-type-update`,api_deleteUsageTypeApi:`${e}/api/property/ref-prop-usage-type-delete`,api_getGbBuildingApiList:`${e}/api/property/ref-prop-gbbuilding-type-list`,api_PostGbBuildingApi:`${e}/api/property/ref-prop-gbbuilding-type-create`,api_getGbBuildingApiById:`${e}/api/property/ref-prop-gbbuilding-type-get`,api_updateGbBuildingApi:`${e}/api/property/ref-prop-gbbuilding-type-update`,api_deleteGbBuildingApi:`${e}/api/property/ref-prop-gbbuilding-type-delete`,api_getObjectionApiList:`${e}/api/property/ref-prop-objection-type-list`,api_PostObjectionApi:`${e}/api/property/ref-prop-objection-type-create`,api_getObjectionApiById:`${e}/api/property/ref-prop-objection-type-get`,api_updateObjectionApi:`${e}/api/property/ref-prop-objection-type-update`,api_deleteObjectionApi:`${e}/api/property/ref-prop-objection-type-delete`,api_getOccupancyApiList:`${e}/api/property/ref-prop-occupancy-type-list`,api_PostOccupancyApi:`${e}/api/property/ref-prop-occupancy-type-create`,api_getOccupancyApiById:`${e}/api/property/ref-prop-occupancy-type-get`,api_updateOccupancyApi:`${e}/api/property/ref-prop-occupancy-type-update`,api_deleteOccupancyApi:`${e}/api/property/ref-prop-occupancy-type-delete`,api_getPropertyApiList:`${e}/api/property/ref-prop-property-type-list`,api_PostPropertyApi:`${e}/api/property/ref-prop-property-type-create`,api_getPropertyApiById:`${e}/api/property/ref-prop-property-type-get`,api_updatePropertyApi:`${e}/api/property/ref-prop-property-type-update`,api_deletePropertyApi:`${e}/api/property/ref-prop-property-type-delete`,api_getGbpropusageApiList:`${e}/api/property/ref-prop-gbpropusage-type-list`,api_PostGbpropusageApi:`${e}/api/property/ref-prop-gbpropusage-type-create`,api_getGbpropusageApiById:`${e}/api/property/ref-prop-gbpropusage-type-get`,api_updateGbpropusageApi:`${e}/api/property/ref-prop-gbpropusage-type-update`,api_deleteGbpropusageApi:`${e}/api/property/ref-prop-gbpropusage-type-delete`,api_getPropOccupancyFactorApiList:`${e}/api/property/ref-prop-occupancy-factor-list`,api_PostPropOccupancyFactorApi:`${e}/api/property/ref-prop-occupancy-factor-create`,api_getPropOccupancyFactorApiById:`${e}/api/property/ref-prop-occupancy-factor-get`,api_updatePropOccupancyFactorApi:`${e}/api/property/ref-prop-occupancy-factor-update`,api_deletePropOccupancyFactorApi:`${e}/api/property/ref-prop-occupancy-factor-delete`,api_getRoadApiList:`${e}/api/property/ref-prop-road-type-list`,api_PostRoadApi:`${e}/api/property/ref-prop-road-type-create`,api_getRoadApiById:`${e}/api/property/ref-prop-road-type-get`,api_updateRoadApi:`${e}/api/property/ref-prop-road-type-update`,api_deleteRoadApi:`${e}/api/property/ref-prop-road-type-delete`,api_getOwnershipApiList:`${e}/api/property/ref-prop-ownership-type-list`,api_PostOwnershipApi:`${e}/api/property/ref-prop-ownership-type-create`,api_getOwnershipApiById:`${e}/api/property/ref-prop-ownership-type-get`,api_updateOwnershipApi:`${e}/api/property/ref-prop-ownership-type-update`,api_deleteOwnershipApi:`${e}/api/property/ref-prop-ownership-type-delete`,api_getTransferModeApiList:`${e}/api/property/ref-prop-transfer-mode-list`,api_PostTransferModeApi:`${e}/api/property/ref-prop-transfer-mode-create`,api_getTransferModeApiById:`${e}/api/property/ref-prop-transfer-mode-get`,api_updateTransferModeApi:`${e}/api/property/ref-prop-transfer-mode-update`,api_deleteTransferModeApi:`${e}/api/property/ref-prop-transfer-mode-delete`,api_getRebateTypeApiList:`${e}/api/property/ref-prop-rebate-type-list`,api_PostRebateTypeApi:`${e}/api/property/ref-prop-rebate-type-create`,api_getRebateTypeApiById:`${e}/api/property/ref-prop-rebate-type-get`,api_updateRebateTypeApi:`${e}/api/property/ref-prop-rebate-type-update`,api_deleteRebateTypeApi:`${e}/api/property/ref-prop-rebate-type-delete`,api_getPenaltyTypeApiList:`${e}/api/property/ref-prop-penalty-type-list`,api_PostPenaltyTypeApi:`${e}/api/property/ref-prop-penalty-type-create`,api_getPenaltyTypeApiById:`${e}/api/property/ref-prop-penalty-type-get`,api_updatePenaltyTypeApi:`${e}/api/property/ref-prop-penalty-type-update`,api_deletePenaltyTypeApi:`${e}/api/property/ref-prop-penalty-type-delete`,api_getForgeryTypeApiList:`${e}/api/property/m-prop-forgery-type-list`,api_PostForgeryTypeApi:`${e}/api/property/m-prop-forgery-type-create`,api_getForgeryTypeApiById:`${e}/api/property/m-prop-forgery-type-get`,api_updateForgeryTypeApi:`${e}/api/property/m-prop-forgery-type-update`,api_deleteForgeryTypeApi:`${e}/api/property/m-prop-forgery-type-delete`,api_getDistrictApiList:`${e}/api/get-district`,api_PostDistrictApi:`${e}/api/add-district`,api_getDistrictApiById:`${e}/api/get-districtBy-Id`,api_updateDistrictApi:`${e}/api/update-districtBy-Id`,api_deleteDistrictApi:`${e}/api/delete-district`,api_getSchemeTypeApiList:`${e}/api/get-scheme-type`,api_PostSchemeTypeApi:`${e}/api/add-scheme-type`,api_getSchemeTypeApiById:`${e}/api/get-scheme-type-by-id`,api_updateSchemeTypeApi:`${e}/api/update-scheme-type`,api_deleteSchemeTypeApi:`${e}/api/scheme-type-delete`,api_getCityApiList:`${e}/api/get-city`,api_PostCityApi:`${e}/api/create-city`,api_getCityApiById:`${e}/api/get-by-Id-city`,api_updateCityApi:`${e}/api/update-city-by-id`,api_deleteCityApi:`${e}/api/city/enable-disable`,api_getWaterTypeApiList:`${e}/api/water/get-water-prop-type`,api_PostWaterTypeApi:`${e}/api/water/create-water-prop-type`,api_getWaterTypeById:`${e}/api/water/getby-id-water-prop-type`,api_updateWaterTypeApi:`${e}/api/water/update-water-prop-type`,api_deleteWaterTypeApi:`${e}/api/water/delete-water-prop-type`,api_getCapitalValuesRateApiList:`${e}/api/property/m-capital-value-rate-list`,api_getCapitalValuesRateById:`${e}/api/property/m-capital-value-rate-get`,api_getBuildingRentalCostApiList:`${e}/api/property/m-prop-building-reantal-const-list`,api_getBuildingRentalCostById:`${e}/api/property/m-prop-building-reantal-const-get`,api_getRentalValuesApiList:`${e}/api/property/m-prop-rental-value-list`,api_getRentalValuesById:`${e}/api/property/m-prop-rental-value-get`,api_getMultiFactorApiList:`${e}/api/property/m-prop-multi-factor-list`,api_getMultiFactorById:`${e}/api/property/m-prop-multi-factor-get`,api_getRoadTypesApiList:`${e}/api/property/m-prop-road-types-list`,api_getRoadTypesById:`${e}/api/property/m-prop-road-types-get`,api_getVacantRentalRatesApiList:`${e}/api/property/m-prop-vacant-rentalrates-list`,api_getVacantRentalRatesById:`${e}/api/property/m-prop-vacant-rentalrates-get`,api_getBuildingRentalTypeApiList:`${e}/api/property/m-prop-building-reantal-rate-list`,api_getBuildingRentalTypeApiById:`${e}/api/property/m-prop-building-reantal-rate-get`,api_getAssetsApiList:`${e}/api/property/m-assets-get`,api_PostAssetsApi:`${e}/api/property/m-assets-create`,api_getAssetsApiById:`${e}/api/property/m-assets-get-by-id`,api_updateAssetsApi:`${e}/api/property/m-assets-update`,api_deleteAssetsApi:`${e}/api/property/m-assets-delete`,api_getSliderApiList:`${e}/api/property/m-slider-get`,api_PostSliderApi:`${e}/api/property/m-slider-create`,api_getSliderById:`${e}/api/property/m-slider-get-by-id`,api_updateSliderApi:`${e}/api/property/m-slider-update`,api_deleteSliderApi:`${e}/api/property/m-slider-delete`,api_getAdminLists:`${e}/api/user-managment/v1/crud/get/admin-list`}}export{o as A};
