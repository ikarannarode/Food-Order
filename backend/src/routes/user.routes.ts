import express from "express";
import { createCurrentUser } from "../controllers/user"; 
const router = express.Router();

router.post("/create", createCurrentUser); 

export default router;
