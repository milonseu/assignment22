exports.createProduct = async (req, res) => {
    return res.status(201).json({status:"success", data:"Product created successfully" });
 };
    

exports.readProduct = async (req, res) => {
    return res.status(200).json({status:"success", data:"Get Product  successfully"});
 };
    

exports.deleteProduct = async (req, res) => {
    return res.status(200).json({status:"success", data:"Deleted Product successfully" });
 };


exports.updateProduct = async (req, res) => {
    return res.status(201).json({status:"success", data:"Product Updated successfully" });
 };