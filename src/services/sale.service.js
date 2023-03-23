import saleRepository from "../repositories/sale.repository.js";
import productRepository from "../repositories/product.repository.js";
import clientRepository from "../repositories/client.repository.js";

async function createSale(sale) {
  let product = await productRepository.getProductById(sale.productId);
  if ((await clientRepository.getClientById(sale.clientId)) && product) {
    if (product.stock > 0) {
      sale = await saleRepository.insertSale(sale);
      product.stock--;
      await productRepository.updateProduct(product);
      return sale;
    } else {
      throw new Error("Cannot make a sale for a product that isn't in stock.");
    }
  }
  throw new Error(
    "To create a sale is required to pass an existent ClientId and ProductId."
  );
}

async function getAllSales() {
  return await saleRepository.getSales();
}

async function getSaleByProdId(productId) {
  if (await productRepository.getProductById(productId)) {
    return await saleRepository.getSaleByProdId(productId);
  }
  throw new Error(
    "To search for a product is required to pass an existent ProductId."
  );
}

async function getSaleById(id) {
  return await saleRepository.getSaleById(id);
}

async function updateSale(sale) {
  if (
    (await clientRepository.getClientById(sale.clientId)) &&
    (await productRepository.getProductById(sale.productId))
  ) {
    return await saleRepository.updateSale(sale);
  }
  throw new Error(
    "To update a sale is required to pass an existent ClientId and ProductId."
  );
}

async function deleteSaleById(id) {
  const sale = await saleRepository.getSaleById(id);
  if (sale) {
    await saleRepository.deleteSaleById(id);
    let product = await productRepository.getProductById(sale.productId);
    product.stock++;
    await productRepository.updateProduct(product);
    return "Sucess";
  }
  throw new Error("To delete a sale is required to pass an existent SaleId.");
}

export default {
  createSale,
  getAllSales,
  getSaleByProdId,
  getSaleById,
  updateSale,
  deleteSaleById,
};
