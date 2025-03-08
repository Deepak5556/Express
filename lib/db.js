const { mongoose } = require("mongoose");

const URL =
  "mongodb+srv://717822f212:B8TGtchvLvMQ0q43@cluster0.9mmp3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

exports.connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB is Running Successfully");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
