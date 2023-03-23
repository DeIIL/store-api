import express from "express";
import saleController from "../controllers/sale.controller.js";

const router = express.Router();

router.post("/", saleController.createSale);

router.get("/", saleController.getAllSales);

router.get("/prod", saleController.getSaleByProdId);

router.get("/:id", saleController.getSaleById);

router.put("/", saleController.updateSale);

router.delete("/:id", saleController.deleteSaleById);

export default router;
