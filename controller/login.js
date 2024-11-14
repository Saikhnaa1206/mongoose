const userModel = require("../userModel");
const bcrypt = require("bcrypt");
const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await userModel.findOne({ email: email });
    const hashedPassword = user.password;
    const isUser = bcrypt.compareSync(password, hashedPassword);
    if (isUser) {
      res.send("done");
    } else {
      res.send("wrong password or email");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = login;
