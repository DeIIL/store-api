import supplierService from "../services/supplier.service.js";

async function createSupplier(request, response, next) {
  try {
    let supplier = request.body;
    if (
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.email ||
      !supplier.address
    ) {
      throw new Error(
        "The fields Name, CNPJ, Phone, Email and Address are required."
      );
    }
    response.send(await supplierService.createSupplier(supplier));
    logger.info(`POST on /supplier - ${JSON.stringify(supplier)}`);
  } catch (error) {
    next(error);
  }
}

async function getAllSuppliers(request, response, next) {
  try {
    response.send(await supplierService.getAllSuppliers());
    logger.info(`GET on /supplier`);
  } catch (error) {
    next(error);
  }
}

async function getSupplierById(request, response, next) {
  try {
    const id = request.params.id;
    if (id == null) {
      throw new Error("The field Id is required to search for a supplier.");
    }
    response.send(await supplierService.getSupplierById(id));
    logger.info(`GET on /supplier/:id ${id}`);
  } catch (error) {
    next(error);
  }
}

async function updateSupplier(request, response, next) {
  try {
    let supplier = request.body;
    if (
      !supplier.supplierId ||
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.email ||
      !supplier.address
    ) {
      throw new Error(
        "The fields Id, Name, CNPJ, Phone, Email, Address are required."
      );
    }
    response.send(await supplierService.updateSupplier(supplier));
    logger.info(`PUT on /supplier ${JSON.stringify(supplier)}`);
  } catch (error) {
    next(error);
  }
}

async function deleteSupplierById(request, response, next) {
  try {
    const id = request.params.id;
    if (id == null) {
      throw new Error("The field Id is required.");
    }
    response.send(await supplierService.deleteSupplierById(id));
    logger.info(`DELETE on /supplier/:id ${id}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplierById,
};
