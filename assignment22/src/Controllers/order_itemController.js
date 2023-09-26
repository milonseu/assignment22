exports.createOrderItem = async (req, res) => {
    return res.status(201).json({status:"success", data:"OrderItem created successfully" });
 };
    

exports.readOrderItem = async (req, res) => {
    return res.status(200).json({status:"success", data:"Get OrderItem  successfully"});
 };
    

exports.deleteOrderItem = async (req, res) => {
    return res.status(200).json({status:"success", data:"Deleted OrderItem successfully" });
 };


exports.updateOrderItem = async (req, res) => {
    return res.status(201).json({status:"success", data:"OrderItem Updated successfully" });
 };