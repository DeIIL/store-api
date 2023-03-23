import { ObjectId } from "mongodb";
import { getClient } from "./mongo.db.js";

async function createProductInfo(productInfo) {
  const client = getClient();
  try {
    await client.connect();
    await client.db("pet-api").collection("productInfo").insertOne(productInfo);
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function updateProductInfo(productInfo) {
  const client = getClient();
  try {
    await client.connect();
    await client
      .db("pet-api")
      .collection("productInfo")
      .updateOne(
        { productId: productInfo.productId },
        { $set: { ...productInfo } }
      );
    return productInfo;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function getProductInfo(productId) {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db("pet-api")
      .collection("productInfo")
      .findOne({ productId });
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function createReview(review, productId) {
  const client = getClient();
  try {
    await client.connect();
    const reviewInfo = await client
      .db("pet-api")
      .collection("productInfo")
      .findOne({ productId });
    reviewInfo.reviews.push(review);
    let updated = await client
      .db("pet-api")
      .collection("productInfo")
      .findOneAndUpdate({ productId: productId }, { $set: { ...reviewInfo } });
    return await getProductInfo(productId);
  } catch (error) {
    throw error;
  } finally {
    await client.close();
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
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db("pet-api")
      .collection("productInfo")
      .find({})
      .toArray();
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function deleteProductInfo(id) {
  const client = getClient();
  try {
    await client.connect();
    await client
      .db("pet-api")
      .collection("productInfo")
      .deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    throw error;
  } finally {
    await client.close();
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
