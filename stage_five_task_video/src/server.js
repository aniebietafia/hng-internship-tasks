import http from "http";
import app from "./app.js";
import { config } from "dotenv";
config();

import connectDB from "./config/database.config.js";

const server = http.createServer(app);

const port = process.env.PORT || 4333;

const startServer = async () => {
  try {
    await connectDB();
    server.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
startServer();
