import express from "express";
import supplierController from "../controllers/supplier.controller.js";

const router = express.Router();

router.post("/", supplierController.createSupplier);

router.get("/", supplierController.getAllSuppliers);

router.get("/:id", supplierController.getSupplierById);

router.put("/", supplierController.updateSupplier);

router.delete("/:id", supplierController.deleteSupplierById);

export default router;
