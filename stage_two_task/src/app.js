// import packages
import express from "express";

const app = express(); // initialize express

// import routes

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mount routes

// export app
export default app;
