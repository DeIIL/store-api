import { DataTypes } from "sequelize";
import Supplier from "./supplier.model.js";
import connect from "./src/repositories/connection.js";

const Product = connect.define(
  "products",
  {
    productId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: (DataTypes.DECIMAL.types.postgres = ["numeric"]),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { underscored: true }
);

Product.belongsTo(Supplier, { foreignKey: "supplierId" });

export default Product;
