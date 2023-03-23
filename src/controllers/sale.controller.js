import saleService from "../services/sale.service.js";

async function createSale(request, response, next) {
  try {
    let sale = request.body;
    if (!sale.value || !sale.date || !sale.clientId || !sale.productId) {
      throw new Error(
        "The fields Value, Date, ClientId and ProductId are required."
      );
    }
    response.send(await saleService.createSale(sale));
    logger.info(`POST on /sale - ${JSON.stringify(sale)}`);
  } catch (error) {
    next(error);
  }
}

async function getAllSales(request, response, next) {
  try {
    response.send(await saleService.getAllSales());
    logger.info(`GET on /sale`);
  } catch (error) {
    next(error);
  }
}

async function getSaleByProdId(request, response, next) {
  try {
    response.send(await saleService.getSaleByProdId(request.query.productId));
    logger.info(`GET on /sale?product_id= ${request.query.productId}`);
  } catch (error) {
    next(error);
  }
}

async function getSaleById(request, response, next) {
  try {
    const id = request.params.id;
    if (id == null) {
      throw new Error("The field Id is required to search for a sale.");
    }
    response.send(await saleService.getSaleById(id));
    logger.info(`GET on /sale/:id ${id}`);
  } catch (error) {
    next(error);
  }
}

async function updateSale(request, response, next) {
  try {
    let sale = request.body;
    if (
      !sale.saleId ||
      !sale.value ||
      !sale.date ||
      !sale.clientId ||
      !sale.productId
    ) {
      throw new Error(
        "The fields SaleId, Value, Date, ClientId and ProductId are required."
      );
    }
    response.send(await saleService.updateSale(sale));
    logger.info(`PUT on /sale ${JSON.stringify(sale)}`);
  } catch (error) {
    next(error);
  }
}

async function deleteSaleById(request, response, next) {
  try {
    const id = request.params.id;
    if (id == null) {
      throw new Error("The field Id is required.");
    }
    response.send(await saleService.deleteSaleById(id));
    logger.info(`DELETE on /sale/:id ${id}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createSale,
  getAllSales,
  getSaleByProdId,
  getSaleById,
  updateSale,
  deleteSaleById,
};
