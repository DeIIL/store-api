import { DataTypes } from "sequelize";
import connect from "../repositories/connection.js";
import Product from "./product.model.js";
import Client from "./client.model.js";

const Sale = connect.define(
  "sales",
  {
    saleId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    value: {
      type: (DataTypes.DECIMAL.types.postgres = ["numeric"]),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  { underscored: true }
);
Sale.belongsTo(Client, { foreignKey: "clientId" });
Sale.belongsTo(Product, { foreignKey: "productId" });

export default Sale;
