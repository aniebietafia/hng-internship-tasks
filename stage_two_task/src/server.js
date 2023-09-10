// import modules
import http from "http";
import "dotenv/config";

// import app
import app from "./app.js";
import { connectDB } from "./config/database.js";

const PORT = process.env.PORT || 5000;

// create server
const server = http.createServer(app);

const startServer = async () => {
  try {
    // connect to database
    await connectDB();

    // start server
    server.listen(PORT, () => {
      console.log(`🚀 Server is running on PORT: ${PORT}`);
    });
  } catch (error) {
    console.error(`Oops! Something went wrong: ${error.message}`);
    process.exit(1);
  }
};
startServer();
