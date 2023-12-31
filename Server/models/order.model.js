import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema({
    gigId: {
        type: String,
        required: true,
      },
    img: {
        type: String,
        required: false,
      },
    title: {
        type: String,
        required: true,
      },
    price: {
        type: Number,
        required: true,
      },
    
    },
    {
      timestamps: true,
    });

export default mongoose.model("Order",orderSchema)