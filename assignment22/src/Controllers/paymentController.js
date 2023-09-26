exports.createPayment = async (req, res) => {
    return res.status(201).json({status:"success", data:"Payment created successfully" });
 };
    

exports.readPayment = async (req, res) => {
    return res.status(200).json({status:"success", data:"Get Payment  successfully"});
 };
    

exports.deletePayment = async (req, res) => {
    return res.status(200).json({status:"success", data:"Deleted Payment successfully" });
 };


exports.updatePayment = async (req, res) => {
    return res.status(201).json({status:"success", data:"Payment Updated successfully" });
 };