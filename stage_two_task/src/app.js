// import packages
import express from "express";

const app = express(); // initialize express

// import routes
import personRoutes from "./routes/person.route.js";

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mount routes
app.use(personRoutes);

// export app
export default app;
