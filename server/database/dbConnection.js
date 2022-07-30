const mongoose = require("mongoose");
const dbPath = "mongodb://localhost:27017/social-media";
mongoose
  .connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.info("> Successfully connected to the database");
  })
  .catch((err) => {
    console.error(err.message);
  });


exports.mongoose = mongoose;
