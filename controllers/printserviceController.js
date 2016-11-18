let PrintServiceData = require("../data/printservices");

exports.AllPrintServies = function(req, res)
{
    let printservices = PrintServiceData.GetPrintServises();
    res.render("printservies", { title: 'Express', printservices: printservices });
}

exports.MoblileAllPrintServies = function(req, res)
{
    let printservices = PrintServiceData.GetPrintServises();
    res.send(printservices);
}