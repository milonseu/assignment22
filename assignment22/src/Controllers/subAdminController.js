exports.createSub = async (req, res) => { 
    return res.status(201).json({status:"success", data:"Sub Admin created successfully" });
};


exports.readSub = async (req, res) => { 
    return res.status(200).json({status:"success", data:"Get Sub Admin  successfully"});
};


exports.deleteSub = async (req, res) => { 
    return res.status(200).json({status:"success", data:"Delete Sub Admin successfully" });
};


exports.updateSub = async (req, res) => {
    return res.status(201).json({status:"success", data:"Post created successfully" });
 };