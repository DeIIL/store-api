//import pg from "pg";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://vniuujxa:iQf5UIwafDUwU_nj757p4xXlPgbmLXGR@isilo.db.elephantsql.com/vniuujxa",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
// async function connect() {
//   if (global.connection) {
//     return global.connection.connect();
//   }
//   const pool = new pg.Pool({
//     connectionString:
//       "postgres://vniuujxa:iQf5UIwafDUwU_nj757p4xXlPgbmLXGR@isilo.db.elephantsql.com/vniuujxa",
//   });
//   global.connection = pool;
//   return pool.connect();
// }

// export { connect };
