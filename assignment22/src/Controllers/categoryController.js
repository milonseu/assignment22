exports.createCategory = async (req, res) => {
    return res.status(201).json({status:"success", data:"Category created successfully" });
 };
    

exports.readCategory = async (req, res) => {
    return res.status(200).json({status:"success", data:"Get Category  successfully"});
 };
    

exports.deleteCategory = async (req, res) => {
    return res.status(200).json({status:"success", data:"Delete Category successfully" });
 };


exports.updateCategory = async (req, res) => {
    return res.status(201).json({status:"success", data:"Category Updated successfully" });
 };