import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    username: String,
    description: String,
  },
  { collection: "productInfo" }
);

export default reviewSchema;
