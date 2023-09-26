exports.createShipment = async (req, res) => {
    return res.status(201).json({status:"success", data:"Shipment created successfully" });
 };
    

exports.readShipment = async (req, res) => {
    return res.status(200).json({status:"success", data:"Get Shipmentt  successfully"});
 };
    

exports.deleteShipment = async (req, res) => {
    return res.status(200).json({status:"success", data:"Deleted Shipment successfully" });
 };


exports.updateShipment = async (req, res) => {
    return res.status(201).json({status:"success", data:"Shipment Updated successfully" });
 };