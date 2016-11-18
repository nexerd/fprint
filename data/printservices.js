var printserviceModel = require("../models/printservice");

var printservice = [ new printserviceModel(0, "ВосторгПринт", "Рабфаковская 10", 5)];

exports.GetPrintServises = function()
{
    return printservice;
}