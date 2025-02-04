const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://SnehaRastogi:srnaeshta0606@sanjeevani.7s52d.mongodb.net/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
