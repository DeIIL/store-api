import express from "express";
import clientController from "../controllers/client.controller.js";

const router = express.Router();

router.post("/", clientController.createClient);

router.get("/", clientController.getAllClients);

router.get("/:id", clientController.getClientById);

router.put("/", clientController.updateClient);

router.delete("/:id", clientController.deleteClientById);

export default router;
