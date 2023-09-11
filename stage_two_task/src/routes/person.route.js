import { Router } from "express";

// import controller
import { fetchPerson, createPerson, updatePerson, deletePerson } from "../controllers/person.controller.js";

// initialize router
const router = Router();

// define routes
router.post("/api", createPerson);
router.get("/api/:user_id", fetchPerson);
router.put("/api/:user_id", updatePerson);
router.delete("/api/:user_id", deletePerson);

// export default router
export default router;
