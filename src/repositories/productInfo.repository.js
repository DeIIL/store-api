import productInfoSchema from "../../schemas/productInfo.schema.js";
import { ObjectId } from "mongodb";
import { connect } from "./mongo.db.js";

async function createProductInfo(productInfo) {
  try {
    const mongoose = await connect();
    const ProductInfo = mongoose.model("ProductInfo", productInfoSchema);
    productInfo = new ProductInfo(productInfo);
    await productInfo.save();
  } catch (error) {
    throw error;
  }
}

async function updateProductInfo(productInfo) {
  try {
    const mongoose = await connect();
    const ProductInfo = mongoose.model("ProductInfo", productInfoSchema);
    await ProductInfo.findOneAndUpdate(
      { productId: productInfo.productId },
      productInfo
    );
  } catch (error) {
    throw error;
  }
}

async function getProductInfo(productId) {
  try {
    const mongoose = await connect();
    const ProductInfo = mongoose.model("ProductInfo", productInfoSchema);
    const query = ProductInfo.findOne({ productId: productId });
    return await query.exec();
  } catch (error) {
    throw error;
  }
}

async function createReview(review, productId) {
  try {
    const productInfo = await getProductInfo(productId);
    productInfo.reviews.push(review);
    await updateProductInfo(productInfo);
  } catch (error) {
    throw error;
  }
}

async function deleteReview(productId, index) {
  try {
    const productInfo = await getProductInfo(productId);
    productInfo.reviews.splice(index, 1);
    await updateProductInfo(productInfo);
  } catch (error) {
    throw error;
  }
}

async function getAllProductInfo() {
  try {
    const mongoose = await connect();
    const productInfo = mongoose.model("productInfo", productInfoSchema);
    const query = productInfo.find({});
    return await query.exec();
  } catch (error) {
    throw error;
  }
}

async function deleteProductInfo(id) {
  try {
    const mongoose = await connect();
    const productInfo = mongoose.model("productInfo", productInfoSchema);
    await productInfo.deleteOne({ _id: ObjectId(id) }); //findByIdAndDelete
  } catch (error) {
    throw error;
  }
}

export default {
  createProductInfo,
  createReview,
  updateProductInfo,
  getProductInfo,
  getAllProductInfo,
  deleteReview,
  deleteProductInfo,
};
