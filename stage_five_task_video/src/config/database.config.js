import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_URI);
    console.log("🟢 MongoDB connection SUCCESS");
  } catch (error) {
    console.log("🔴 MongoDB connection FAIL");
    process.exit(1);
  }
};

export default connectDB;
