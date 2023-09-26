exports.createUser = async (req, res) => { 
    return res.status(201).json({status:"success", data:"User created successfully" });
};


exports.readUser = async (req, res) => {
    return res.status(200).json({status:"success", data:"Get User successfully"});
 };


exports.deleteUser = async (req, res) => {
    return res.status(200).json({status:"success", data:"Delete User successfully" });
 };


exports.updateUser = async (req, res) => { 
    return res.status(200).json({status:"success", data:"Update User successfully" });
};