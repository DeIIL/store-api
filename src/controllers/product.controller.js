import productService from "../services/product.service.js";

async function createProduct(request, response, next) {
  try {
    let product = request.body;
    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
      throw new Error(
        "The fields Name, Description, Value, Stock and SupplierId are required."
      );
    }
    response.send(await productService.createProduct(product));
    logger.info(`POST on /product - ${JSON.stringify(product)}`);
  } catch (error) {
    next(error);
  }
}

async function getAllProducts(request, response, next) {
  try {
    response.send(await productService.getAllProducts());
    logger.info(`GET on /product`);
  } catch (error) {
    next(error);
  }
}

async function getProductById(request, response, next) {
  try {
    const id = request.params.id;
    if (id == null) {
      throw new Error("The field Id is required to search for a product.");
    }
    response.send(await productService.getProductById(id));
    logger.info(`GET on /product/:id ${id}`);
  } catch (error) {
    next(error);
  }
}

async function updateProduct(request, response, next) {
  try {
    let product = request.body;
    if (
      !product.productId ||
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
      throw new Error(
        "The fields ProductId, Name, Description, Value, Stock and SupplierId are required."
      );
    }
    response.send(await productService.updateProduct(product));
    logger.info(`PUT on /product ${JSON.stringify(product)}`);
  } catch (error) {
    next(error);
  }
}

async function deleteProductById(request, response, next) {
  try {
    const id = request.params.id;
    if (id == null) {
      throw new Error("The field Id is required.");
    }
    response.send(await productService.deleteProductById(id));
    logger.info(`DELETE on /product/:id ${id}`);
  } catch (error) {
    next(error);
  }
}

async function createProductInfo(request, response, next) {
  try {
    const productInfo = request.body;
    if (!productInfo.productId) {
      throw new Error("The field ProductId is required.");
    }
    response.send(await productService.createProductInfo(productInfo));
    logger.info(`POST on /product/info - ${JSON.stringify(productInfo)}`);
  } catch (error) {
    next(error);
  }
}

async function updateProductInfo(request, response, next) {
  try {
    const productInfo = request.body;
    if (!productInfo.productId) {
      throw new Error("The field ProductId is required.");
    }
    response.send(await productService.updateProductInfo(productInfo));
    logger.info(`PUT on /product/info - ${JSON.stringify(productInfo)}`);
  } catch (error) {
    next(error);
  }
}

async function createReview(request, response, next) {
  try {
    const { review, productId } = request.body;
    if (!review || !productId) {
      throw new Error("The fields Review and ProductId are required.");
    }
    response.send(await productService.createReview(review, productId));
    logger.info(
      `POST on /product/review - ${JSON.stringify(review, productId)}`
    );
  } catch (error) {
    next(error);
  }
}

async function deleteReview(request, response, next) {
  try {
    response.send(
      await productService.deleteReview(request.params.id, request.params.index)
    );
    logger.info(
      `DELETE on /product/review - ${JSON.stringify(
        request.params.id,
        request.params.index
      )}`
    );
  } catch (error) {
    next(error);
  }
}

async function getAllProductInfo(request, response, next) {
  try {
    response.send(await productService.getAllProductInfo());
    logger.info(`GET on /product/info`);
  } catch (error) {
    next(error);
  }
}

async function deleteProductInfo(request, response, next) {
  try {
    const { id } = request.query;
    if (id === undefined) {
      throw new Error("The field ID is required.");
    }
    response.send(await productService.deleteProductInfo(id));
    logger.info(`DELETE on /product/info - ${id}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createProduct,
  createProductInfo,
  createReview,
  updateProduct,
  updateProductInfo,
  getAllProducts,
  getProductById,
  getAllProductInfo,
  deleteProductById,
  deleteProductInfo,
  deleteReview,
};
