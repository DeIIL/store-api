import productRepository from "../repositories/product.repository.js";
import productInfoRepository from "../repositories/productInfo.repository.js";
import supplierRepository from "../repositories/supplier.repository.js";

async function createProduct(product) {
  if (await supplierRepository.getSupplierById(product.supplierId)) {
    return await productRepository.insertProduct(product);
  }
  throw new Error(
    "To create a product is required to pass an existent SupplierId."
  );
}

async function getAllProducts() {
  return await productRepository.getProducts();
}

async function getProductById(id) {
  const product = await productRepository.getProductById(id);
  product.info = await productInfoRepository.getProductInfo(parseInt(id));
  delete product.info.productId;
  return product;
}

async function updateProduct(product) {
  if (
    (await supplierRepository.getSupplierById(product.supplierId)) &&
    (await productRepository.getProductById(product.productId))
  ) {
    return await productRepository.updateProduct(product);
  }
  throw new Error(
    "To update a product is required to pass an existent ProductId and SupplierId."
  );
}

async function deleteProductById(id) {
  if (await productRepository.getProductById(id)) {
    return await productRepository.deleteProductById(id);
  }
  throw new Error(
    "To delete a product is required to pass an existent ProductId."
  );
}

async function createProductInfo(productInfo) {
  return await productInfoRepository.createProductInfo(productInfo);
}

async function updateProductInfo(productInfo) {
  return await productInfoRepository.updateProductInfo(productInfo);
}

async function createReview(review, productId) {
  return await productInfoRepository.createReview(review, parseInt(productId));
}

async function deleteReview(productId, index) {
  return await productInfoRepository.deleteReview(
    parseInt(productId),
    parseInt(index)
  );
}

async function getAllProductInfo() {
  return await productInfoRepository.getAllProductInfo();
}

async function deleteProductInfo(id) {
  return await productInfoRepository.deleteProductInfo(id);
}

export default {
  createProduct,
  createReview,
  createProductInfo,
  updateProductInfo,
  updateProduct,
  getAllProducts,
  getProductById,
  getAllProductInfo,
  deleteProductById,
  deleteProductInfo,
  deleteReview,
};
