exports.createOrder = async (req, res) => {
    return res.status(201).json({status:"success", data:"Order created successfully" });
 };
    

exports.readOrder = async (req, res) => {
    return res.status(200).json({status:"success", data:"Get Order  successfully"});
 };
    

exports.deleteOrder = async (req, res) => {
    return res.status(200).json({status:"success", data:"Deleted Order successfully" });
 };


exports.updateOrder = async (req, res) => {
    return res.status(201).json({status:"success", data:"Order Updated successfully" });
 };