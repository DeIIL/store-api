import Supplier from "../models/supplier.model.js";

async function insertSupplier(supplier) {
  try {
    return await Supplier.create(supplier);
  } catch (error) {
    throw error;
  }
}

async function getSuppliers() {
  try {
    return await Supplier.findAll();
  } catch (error) {
    throw error;
  }
}

async function getSupplierById(id) {
  try {
    return await Supplier.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function updateSupplier(supplier) {
  try {
    await Supplier.update(supplier, {
      where: {
        supplierId: supplier.supplierId,
      },
    });
    return await getSupplierById(supplier.supplierId);
  } catch (error) {
    throw error;
  }
}

async function deleteSupplierById(id) {
  try {
    await Supplier.destroy({
      where: {
        supplierId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  insertSupplier,
  getSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplierById,
};
