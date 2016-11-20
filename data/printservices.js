var printserviceModel = require("../models/printservice");

var printservice = [ new printserviceModel(0, "ВосторгПринт", "Рабфаковская 10", 5), 
                     new printserviceModel(1, "ИГЭУ печать", "Рабфаковская 12", 5),
                     new printserviceModel(2, "FastPrint", "Майская 15", 5),
                ];

exports.GetPrintServises = function()
{
    return printservice;
}