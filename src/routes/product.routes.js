import express from "express";
import productController from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", productController.createProduct);
router.post("/info", productController.createProductInfo);
router.post("/review", productController.createReview);

router.get("/", productController.getAllProducts);
router.get("/info", productController.getAllProductInfo);
router.get("/:id", productController.getProductById);

router.put("/", productController.updateProduct);
router.put("/info", productController.updateProductInfo);

router.delete("/info", productController.deleteProductInfo);
router.delete("/:id", productController.deleteProductById);
router.delete("/:id/review/:index", productController.deleteReview);

export default router;
