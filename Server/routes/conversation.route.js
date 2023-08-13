import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {getconversation,createconversation,updateconversation,getsingleconversation} from "../control/conver.control.js"

const router = express.Router();

router.get("/",verifyToken , getconversation)
router.post("/", verifyToken , createconversation)
router.get("/single/:id", verifyToken , getsingleconversation)
router.put("/:id", verifyToken , updateconversation)

export default router;