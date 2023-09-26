exports.createPost = async (req, res) => {
    return res.status(201).json({status:"success", data:"Post created successfully" });
 };
    

exports.readPost = async (req, res) => {
    return res.status(200).json({status:"success", data:"Get Post  successfully"});
 };
    

exports.deletePost = async (req, res) => {
    return res.status(200).json({status:"success", data:"Delete Post successfully" });
 };


exports.updatePost = async (req, res) => {
    return res.status(201).json({status:"success", data:"Post Update successfully" });
 };