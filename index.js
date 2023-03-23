import express from "express";

import cors from "cors";
import winston from "winston";

import clientRounter from "./routes/client.routes.js";
import productRouter from "./routes/product.routes.js";
import saleRouter from "./routes/sales.routes.js";
import supplierRouter from "./routes/supplier.routes.js";

const { combine, timestamp, label, printf } = winston.format;
const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "store-api.log" }),
  ],
  format: combine(label({ label: "store-api" }), timestamp(), logFormat),
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/client", clientRounter);
app.use("/product", productRouter);
app.use("/sale", saleRouter);
app.use("/supplier", supplierRouter);

app.use((error, request, response, next) => {
  logger.error(`${request.method} on ${request.baseURL} - ${error.message}`);
  response.status(400).send({ error: error.message });
});

app.listen(3333, () => {
  console.log("API Started");
});
