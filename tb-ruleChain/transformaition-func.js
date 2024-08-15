// Calculate total emissions by type
msg.totalMobileEmission = msg.FN1scope1_MobileCombustion + msg.FN2scope1_MobileCombustion + msg.FN3scope1_MobileCombustion
                         + msg.FS1scope1_MobileCombustion + msg.FS2scope1_MobileCombustion + msg.FS3scope1_MobileCombustion;

msg.totalStationaryEmission = msg.FN1scope1_StationaryCombustion + msg.FN2scope1_StationaryCombustion + msg.FN3scope1_StationaryCombustion
                             + msg.FS1scope1_StationaryCombustion + msg.FS2scope1_StationaryCombustion + msg.FS3scope1_StationaryCombustion;

msg.totalProcessEmission = msg.FN1scope1_ProcessEmissions + msg.FN2scope1_ProcessEmissions + msg.FN3scope1_ProcessEmissions
                          + msg.FS1scope1_ProcessEmissions + msg.FS2scope1_ProcessEmissions + msg.FS3scope1_ProcessEmissions;

msg.totalFugitiveEmission = msg.FN1scope1_FugitiveEmissions + msg.FN2scope1_FugitiveEmissions + msg.FN3scope1_FugitiveEmissions
                           + msg.FS1scope1_FugitiveEmissions + msg.FS2scope1_FugitiveEmissions + msg.FS3scope1_FugitiveEmissions;

msg.totalElectricityConsumptionEmission = msg.FN1scope2_ElectricityConsumption + msg.FN2scope2_ElectricityConsumption + msg.FN3scope2_ElectricityConsumption
                                         + msg.FS1scope2_ElectricityConsumption + msg.FS2scope2_ElectricityConsumption + msg.FS3scope2_ElectricityConsumption;

msg.totalHeatingAndCoolingEmission = msg.FN1scope2_HeatingAndCooling + msg.FN2scope2_HeatingAndCooling + msg.FN3scope2_HeatingAndCooling
                                    + msg.FS1scope2_HeatingAndCooling + msg.FS2scope2_HeatingAndCooling + msg.FS3scope2_HeatingAndCooling;

msg.totalUpstreamEmission = msg.FN1scope3_UpstreamEmissionPurchasedGoodsAndServices + msg.FN2scope3_UpstreamEmissionPurchasedGoodsAndServices + msg.FN3scope3_UpstreamEmissionPurchasedGoodsAndServices
                           + msg.FN1scope3_UpstreamEmissionCapitalGoods + msg.FN2scope3_UpstreamEmissionCapitalGoods + msg.FN3scope3_UpstreamEmissionCapitalGoods
                           + msg.FN1scope3_UpstreamEmissionFuelAndEnergyRelatedActivities + msg.FN2scope3_UpstreamEmissionFuelAndEnergyRelatedActivities + msg.FN3scope3_UpstreamEmissionFuelAndEnergyRelatedActivities
                           + msg.FN1scope3_UpstreamEmissionTransportationAndDistribution + msg.FN2scope3_UpstreamEmissionTransportationAndDistribution + msg.FN3scope3_UpstreamEmissionTransportationAndDistribution
                           + msg.FN1scope3_UpstreamEmissionWasteGeneratedInOperations + msg.FN2scope3_UpstreamEmissionWasteGeneratedInOperations + msg.FN3scope3_UpstreamEmissionWasteGeneratedInOperations
                           + msg.FN1scope3_UpstreamEmissionBusinessTravel + msg.FN2scope3_UpstreamEmissionBusinessTravel + msg.FN3scope3_UpstreamEmissionBusinessTravel
                           + msg.FN1scope3_UpstreamEmissionEmployeeCommuting + msg.FN2scope3_UpstreamEmissionEmployeeCommuting + msg.FN3scope3_UpstreamEmissionEmployeeCommuting
                           + msg.FS1scope3_UpstreamEmissionPurchasedGoodsAndServices + msg.FS2scope3_UpstreamEmissionPurchasedGoodsAndServices + msg.FS3scope3_UpstreamEmissionPurchasedGoodsAndServices
                           + msg.FS1scope3_UpstreamEmissionCapitalGoods + msg.FS2scope3_UpstreamEmissionCapitalGoods + msg.FS3scope3_UpstreamEmissionCapitalGoods
                           + msg.FS1scope3_UpstreamEmissionFuelAndEnergyRelatedActivities + msg.FS2scope3_UpstreamEmissionFuelAndEnergyRelatedActivities + msg.FS3scope3_UpstreamEmissionFuelAndEnergyRelatedActivities
                           + msg.FS1scope3_UpstreamEmissionTransportationAndDistribution + msg.FS2scope3_UpstreamEmissionTransportationAndDistribution + msg.FS3scope3_UpstreamEmissionTransportationAndDistribution
                           + msg.FS1scope3_UpstreamEmissionWasteGeneratedInOperations + msg.FS2scope3_UpstreamEmissionWasteGeneratedInOperations + msg.FS3scope3_UpstreamEmissionWasteGeneratedInOperations
                           + msg.FS1scope3_UpstreamEmissionBusinessTravel + msg.FS2scope3_UpstreamEmissionBusinessTravel + msg.FS3scope3_UpstreamEmissionBusinessTravel
                           + msg.FS1scope3_UpstreamEmissionEmployeeCommuting + msg.FS2scope3_UpstreamEmissionEmployeeCommuting + msg.FS3scope3_UpstreamEmissionEmployeeCommuting;

msg.totalDownstreamEmission = msg.FN1scope3_DownstreamEmissionsTransportationAndDistribution + msg.FN2scope3_DownstreamEmissionsTransportationAndDistribution + msg.FN3scope3_DownstreamEmissionsTransportationAndDistribution
                             + msg.FN1scope3_DownstreamEmissionsProcessingOfSoldProducts + msg.FN2scope3_DownstreamEmissionsProcessingOfSoldProducts + msg.FN3scope3_DownstreamEmissionsProcessingOfSoldProducts
                             + msg.FN1scope3_DownstreamEmissionsUseOfSoldProducts + msg.FN2scope3_DownstreamEmissionsUseOfSoldProducts + msg.FN3scope3_DownstreamEmissionsUseOfSoldProducts
                             + msg.FN1scope3_DownstreamEmissionsEndOfLifeTreatmentOfSoldProducts + msg.FN2scope3_DownstreamEmissionsEndOfLifeTreatmentOfSoldProducts + msg.FN3scope3_DownstreamEmissionsEndOfLifeTreatmentOfSoldProducts
                             + msg.FN1scope3_DownstreamEmissionsFranchises + msg.FN2scope3_DownstreamEmissionsFranchises + msg.FN3scope3_DownstreamEmissionsFranchises
                             + msg.FN1scope3_DownstreamEmissionsInvestments + msg.FN2scope3_DownstreamEmissionsInvestments + msg.FN3scope3_DownstreamEmissionsInvestments
                             + msg.FS1scope3_DownstreamEmissionsTransportationAndDistribution + msg.FS2scope3_DownstreamEmissionsTransportationAndDistribution + msg.FS3scope3_DownstreamEmissionsTransportationAndDistribution
                             + msg.FS1scope3_DownstreamEmissionsProcessingOfSoldProducts + msg.FS2scope3_DownstreamEmissionsProcessingOfSoldProducts + msg.FS3scope3_DownstreamEmissionsProcessingOfSoldProducts
                             + msg.FS1scope3_DownstreamEmissionsUseOfSoldProducts + msg.FS2scope3_DownstreamEmissionsUseOfSoldProducts + msg.FS3scope3_DownstreamEmissionsUseOfSoldProducts
                             + msg.FS1scope3_DownstreamEmissionsEndOfLifeTreatmentOfSoldProducts + msg.FS2scope3_DownstreamEmissionsEndOfLifeTreatmentOfSoldProducts + msg.FS3scope3_DownstreamEmissionsEndOfLifeTreatmentOfSoldProducts
                             + msg.FS1scope3_DownstreamEmissionsFranchises + msg.FS2scope3_DownstreamEmissionsFranchises + msg.FS3scope3_DownstreamEmissionsFranchises
                             + msg.FS1scope3_DownstreamEmissionsInvestments + msg.FS2scope3_DownstreamEmissionsInvestments + msg.FS3scope3_DownstreamEmissionsInvestments;

msg.totalEmission = msg.totalMobileEmission + msg.totalStationaryEmission + msg.totalProcessEmission + msg.totalFugitiveEmission
                   + msg.totalElectricityConsumptionEmission + msg.totalHeatingAndCoolingEmission
                   + msg.totalUpstreamEmission + msg.totalDownstreamEmission;

// Calculate total emissions by scope
msg.totalScope1Emission = msg.FN1scope1_StationaryCombustion + msg.FN1scope1_MobileCombustion + msg.FN1scope1_ProcessEmissions + msg.FN1scope1_FugitiveEmissions
                        + msg.FS1scope1_StationaryCombustion + msg.FS1scope1_MobileCombustion + msg.FS1scope1_ProcessEmissions + msg.FS1scope1_FugitiveEmissions;

msg.totalScope2Emission = msg.FN1scope2_ElectricityConsumption + msg.FN1scope2_HeatingAndCooling
                        + msg.FS1scope2_ElectricityConsumption + msg.FS1scope2_HeatingAndCooling;

msg.totalScope3UpstreamEmission = msg.FN1scope3_UpstreamEmissionPurchasedGoodsAndServices + msg.FN1scope3_UpstreamEmissionCapitalGoods
                                 + msg.FN1scope3_UpstreamEmissionFuelAndEnergyRelatedActivities + msg.FN1scope3_UpstreamEmissionTransportationAndDistribution
                                 + msg.FN1scope3_UpstreamEmissionWasteGeneratedInOperations + msg.FN1scope3_UpstreamEmissionBusinessTravel
                                 + msg.FN1scope3_UpstreamEmissionEmployeeCommuting + msg.FN2scope3_UpstreamEmissionPurchasedGoodsAndServices + msg.FN2scope3_UpstreamEmissionCapitalGoods
                                 + msg.FN2scope3_UpstreamEmissionFuelAndEnergyRelatedActivities + msg.FN2scope3_UpstreamEmissionTransportationAndDistribution
                                 + msg.FN2scope3_UpstreamEmissionWasteGeneratedInOperations + msg.FN2scope3_UpstreamEmissionBusinessTravel
                                 + msg.FN2scope3_UpstreamEmissionEmployeeCommuting + msg.FN3scope3_UpstreamEmissionPurchasedGoodsAndServices + msg.FN3scope3_UpstreamEmissionCapitalGoods
                                 + msg.FN3scope3_UpstreamEmissionFuelAndEnergyRelatedActivities + msg.FN3scope3_UpstreamEmissionTransportationAndDistribution
                                 + msg.FN3scope3_UpstreamEmissionWasteGeneratedInOperations + msg.FN3scope3_UpstreamEmissionBusinessTravel
                                 + msg.FN3scope3_UpstreamEmissionEmployeeCommuting + msg.FS1scope3_UpstreamEmissionPurchasedGoodsAndServices + msg.FS1scope3_UpstreamEmissionCapitalGoods
                                 + msg.FS1scope3_UpstreamEmissionFuelAndEnergyRelatedActivities + msg.FS1scope3_UpstreamEmissionTransportationAndDistribution
                                 + msg.FS1scope3_UpstreamEmissionWasteGeneratedInOperations + msg.FS1scope3_UpstreamEmissionBusinessTravel
                                 + msg.FS1scope3_UpstreamEmissionEmployeeCommuting + msg.FS2scope3_UpstreamEmissionPurchasedGoodsAndServices + msg.FS2scope3_UpstreamEmissionCapitalGoods
                                 + msg.FS2scope3_UpstreamEmissionFuelAndEnergyRelatedActivities + msg.FS2scope3_UpstreamEmissionTransportationAndDistribution
                                 + msg.FS2scope3_UpstreamEmissionWasteGeneratedInOperations + msg.FS2scope3_UpstreamEmissionBusinessTravel
                                 + msg.FS2scope3_UpstreamEmissionEmployeeCommuting + msg.FS3scope3_UpstreamEmissionPurchasedGoodsAndServices + msg.FS3scope3_UpstreamEmissionCapitalGoods
                                 + msg.FS3scope3_UpstreamEmissionFuelAndEnergyRelatedActivities + msg.FS3scope3_UpstreamEmissionTransportationAndDistribution
                                 + msg.FS3_UpstreamEmissionWasteGeneratedInOperations + msg.FS3scope3_UpstreamEmissionBusinessTravel
                                 + msg.FS3scope3_UpstreamEmissionEmployeeCommuting;

msg.totalScope3DownstreamEmission = msg.FN1scope3_DownstreamEmissionsTransportationAndDistribution
                                   + msg.FN1scope3_DownstreamEmissionsProcessingOfSoldProducts
                                   + msg.FN1scope3_DownstreamEmissionsUseOfSoldProducts
                                   + msg.FN1scope3_DownstreamEmissionsEndOfLifeTreatmentOfSoldProducts
                                   + msg.FN1scope3_DownstreamEmissionsFranchises
                                   + msg.FN1scope3_DownstreamEmissionsInvestments
                                   + msg.FS1scope3_DownstreamEmissionsTransportationAndDistribution
                                   + msg.FS1scope3_DownstreamEmissionsProcessingOfSoldProducts
                                   + msg.FS1scope3_DownstreamEmissionsUseOfSoldProducts
                                   + msg.FS1scope3_DownstreamEmissionsEndOfLifeTreatmentOfSoldProducts
                                   + msg.FS1scope3_DownstreamEmissionsFranchises
                                   + msg.FS1scope3_DownstreamEmissionsInvestments;

msg.totalScope3Emission = msg.totalScope3UpstreamEmission + msg.totalScope3DownstreamEmission;

// Calculate total emissions at different assets (e.g., West, North, South, East)
msg.West_Emission = msg.FW1emission + msg.FW2emission + msg.FW3emission;
msg.West_Gas = msg.FW1gas + msg.FW2gas + msg.FW3gas;
msg.West_Water = msg.FW1water + msg.FW2water + msg.FW3water;
msg.West_Energy = msg.FW1energy + msg.FW2energy + msg.FW3energy;
msg.West_Bill = msg.FW1totalBillPrice + msg.FW2totalBillPrice + msg.FW3totalBillPrice;

msg.North_Emission = msg.FN1emission + msg.FN2emission + msg.FN3emission;
msg.North_Gas = msg.FN1gas + msg.FN2gas + msg.FN3gas;
msg.North_Water = msg.FN1water + msg.FN2water + msg.FN3water;
msg.North_Energy = msg.FN1energy + msg.FN2energy + msg.FN3energy;
msg.North_Bill = msg.FN1totalBillPrice + msg.FN2totalBillPrice + msg.FN3totalBillPrice;

msg.South_Emission = msg.FS1emission + msg.FS2emission + msg.FS3emission;
msg.South_Gas = msg.FS1gas + msg.FS2gas + msg.FS3gas;
msg.South_Water = msg.FS1water + msg.FS2water + msg.FS3water;
msg.South_Energy = msg.FS1energy + msg.FS2energy + msg.FS3energy;
msg.South_Bill = msg.FS1totalBillPrice + msg.FS2totalBillPrice + msg.FS3totalBillPrice;

msg.East_Emission = msg.FE1emission + msg.FE2emission + msg.FE3emission;
msg.East_Gas = msg.FE1gas + msg.FE2gas + msg.FE3gas;
msg.East_Water = msg.FE1water + msg.FE2water + msg.FE3water;
msg.East_Energy = msg.FE1energy + msg.FE2energy + msg.FE3energy;
msg.East_Bill = msg.FE1totalBillPrice + msg.FE2totalBillPrice + msg.FE3totalBillPrice;

// Add any additional calculations here as needed for your dashboard

// Return the updated message
return { msg: msg, metadata: metadata, msgType: msgType };
