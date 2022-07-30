const userSchema = require("../models/user.model");

const save = async (req, res) => {
  console.log("inside user post", req.body);
  try {
    const response = await new userSchema(req.body).save();
    console.log(
      "🚀 ~ file: user.route.js ~ line 15 ~ router.post ~ response",
      response
    );

    response
      ? res.send({ message: "data stored" })
      : res.send({ message: "ERROR" });
  } catch (err) {
      console.log("🚀 ~ file: user.route.js ~ line 14 ~ router.post ~ err", err);
      res.send({ message: "ERROR" });
  }
};

module.exports = { save };
