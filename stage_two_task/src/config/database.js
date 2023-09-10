import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`Database Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Oops! Connection failed. Try again.: ${error.message}`);
    process.exit(1);
  }
};
