exports.createCustomer = async (req, res) => {
    return res.status(201).json({status:"success", data:"Customer account created successfully" });
 };
    

exports.readCustomer = async (req, res) => {
    return res.status(200).json({status:"success", data:"Get Customer  successfully"});
 };
    

exports.deleteCustomer = async (req, res) => {
    return res.status(200).json({status:"success", data:"Delete Customer successfully" });
 };


exports.updateCustomer = async (req, res) => {
    return res.status(201).json({status:"success", data:"Customer Update successfully" });
 };