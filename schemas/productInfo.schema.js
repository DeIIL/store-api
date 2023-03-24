import mongoose from "mongoose";
import reviewSchema from "./review.schema.js";

const productInfoSchema = new mongoose.Schema(
  {
    productId: Number,
    category: String,
    processor: String,
    graphics_adapter: String,
    display: String,
    reviews: [reviewSchema],
  },
  { collection: "productInfo" }
);

export default productInfoSchema;
