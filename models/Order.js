import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    adress: {
      type: String,
      require: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      require: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
        type: Number,
        required: true
      },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
