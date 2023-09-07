// import modules
import http from "http";
import app from "./app.js";

const port = process.env.PORT || 3334;

// create a server object:
const server = http.createServer(app);

// spin up the server
const start = async () => {
  try {
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
