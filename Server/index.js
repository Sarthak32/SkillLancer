import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";



const app = express();
dotenv.config();

mongoose.set('strictQuery', true);


const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to the database");
        
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }

}

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, // Allow credentials (e.g., cookies)
}));
app.use(express.json())
app.use(cookieParser());
app.use("/api/users",userRoute);
app.use("/api/conver",conversationRoute);
app.use("/api/review",reviewRoute);
app.use("/api/order",orderRoute);
app.use("/api/gig",gigRoute);
app.use("/api/auth",authRoute);
app.use("/api/message",messageRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});


  app.listen(8080, () => {
    connect();
    console.log("Server is running");
  });
