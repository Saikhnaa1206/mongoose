const userModel = require("../userModel");
const dlt = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await userModel.findByIdAndDelete(id);
    res.send("deleted");
  } catch (error) {
    console.log(error);
  }
};
module.exports = dlt;
