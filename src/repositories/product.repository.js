import Product from "../../models/product.model.js";

async function insertProduct(product) {
  try {
    return await Product.create(product);
  } catch (error) {
    throw error;
  }
}

async function getProducts() {
  try {
    return await Product.findAll();
  } catch (error) {
    throw error;
  }
}

async function getProductById(id) {
  try {
    return await Product.findByPk(id, { raw: true });
  } catch (error) {
    throw error;
  }
}

async function updateProduct(product) {
  try {
    await Product.update(product, {
      where: {
        productId: product.productId,
      },
    });
    return await getProductById(product.productId);
  } catch (error) {
    throw error;
  }
}

async function deleteProductById(id) {
  try {
    await Product.destroy({
      where: {
        productId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  insertProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProductById,
};
