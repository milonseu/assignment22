exports.createCart = async (req, res) => {
    return res.status(201).json({status:"success", data:"Cart created successfully" });
 };
    

exports.readCart = async (req, res) => {
    return res.status(200).json({status:"success", data:"Get Cart  successfully"});
 };
    

exports.deleteCart = async (req, res) => {
    return res.status(200).json({status:"success", data:"Deleted Cart successfully" });
 };


exports.updateCart = async (req, res) => {
    return res.status(201).json({status:"success", data:"Cart Updated successfully" });
 };