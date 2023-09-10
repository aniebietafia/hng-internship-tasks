// import modules
import http from "http";
import "dotenv/config";

// import app
import app from "./app";

// create server
const server = http.createServer(app);
