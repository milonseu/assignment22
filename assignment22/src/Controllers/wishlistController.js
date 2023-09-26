exports.createWishList = async (req, res) => {
    return res.status(201).json({status:"success", data:"WishList created successfully" });
 };
    

exports.readWishList = async (req, res) => {
    return res.status(200).json({status:"success", data:"Get WishList  successfully"});
 };
    

exports.deleteWishList = async (req, res) => {
    return res.status(200).json({status:"success", data:"WishList Payment successfully" });
 };


exports.updateWishList = async (req, res) => {
    return res.status(201).json({status:"success", data:"WishList Updated successfully" });
 };