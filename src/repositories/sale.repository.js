import Client from "../../models/client.model.js";
import Product from "../../models/product.model.js";
import Sale from "../../models/sale.model.js";

async function insertSale(sale) {
  try {
    return await Sale.create(sale);
  } catch (error) {
    throw error;
  }
}

async function getSales() {
  try {
    return await Sale.findAll({
      include: [
        {
          model: Client,
        },
        {
          model: Product,
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function getSaleByProdId(productId) {
  try {
    return await Sale.findAll({
      where: {
        productId,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function getSaleById(id) {
  try {
    return await Sale.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function updateSale(sale) {
  try {
    await Sale.update(sale, {
      where: {
        saleId: sale.saleId,
      },
    });
    return await getSaleById(sale.saleId);
  } catch (error) {
    throw error;
  }
}

async function deleteSaleById(id) {
  try {
    await Sale.destroy({
      where: {
        saleId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  insertSale,
  getSales,
  getSaleByProdId,
  getSaleById,
  updateSale,
  deleteSaleById,
};
