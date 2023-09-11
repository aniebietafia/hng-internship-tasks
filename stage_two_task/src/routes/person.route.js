import { Router } from "express";

// import controller
import { fetchPerson, createPerson } from "../controllers/person.controller.js";

// initialize router
const router = Router();

// define routes
router.post("/api", createPerson);
router.get("/api/user_id", fetchPerson);
router.put("/api/:user_id");
router.delete("/api/:user_id");

// export default router
export default router;
