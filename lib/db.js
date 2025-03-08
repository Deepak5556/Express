const { mongoose } = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const URL = process.env.MONGODB_URI;
exports.connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB is Running Successfully");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
