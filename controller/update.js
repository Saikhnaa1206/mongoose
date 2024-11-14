const userModel = require("../userModel");
const update = async (req, res) => {
  try {
    const { id, email, password, name } = req.body;
    const response = await userModel.findByIdAndUpdate(id, {
      name,
      email,
      password,
    });
    res.send("updated");
  } catch (error) {
    console.log(error);
  }
};
module.exports = update;
