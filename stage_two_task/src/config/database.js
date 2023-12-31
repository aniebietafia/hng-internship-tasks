import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database Connected Successfully.`);
  } catch (error) {
    console.error(`Oops! Connection failed. Try again.: ${error.message}`);
    process.exit(1);
  }
};
