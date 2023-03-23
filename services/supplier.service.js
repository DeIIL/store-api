import supplierRepository from "../repositories/supplier.repository.js";

async function createSupplier(supplier) {
  return await supplierRepository.insertSupplier(supplier);
}

async function getAllSuppliers() {
  return await supplierRepository.getSuppliers();
}

async function getSupplierById(id) {
  return await supplierRepository.getSupplierById(id);
}

async function updateSupplier(supplier) {
  return await supplierRepository.updateSupplier(supplier);
}

async function deleteSupplierById(id) {
  return await supplierRepository.deleteSupplierById(id);
}

export default {
  createSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplierById,
};
