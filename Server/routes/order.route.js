import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {getOrders,intent} from "../control/order.control.js"


const router = express.Router();

router.get("/",verifyToken,getOrders)
//router.post("/:gigId",verifyToken,createOrder)
router.post("/create-payment-intent/:id", verifyToken, intent);

export default router;