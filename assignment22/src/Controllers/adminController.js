exports.createAdmin = async (req, res) => { 
    return res.status(201).json({status:"success", data:"Admin created successfully" });
};


exports.readAdmin = async (req, res) => {
    return res.status(200).json({status:"success", data:"Get Admin  successfully"});
 };


exports.deleteAdmin = async (req, res) => {
    return res.status(200).json({status:"success", data:"Delete Admin successfully" });
 };


exports.updateAdmin = async (req, res) => { 
    return res.status(200).json({status:"success", data:"Update Admin successfully" });
};