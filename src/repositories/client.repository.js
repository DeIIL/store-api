//import { connect } from "./connection.js";
import Client from "../../models/client.model.js";

async function insertClient(client) {
  try {
    return await Client.create(client);
  } catch (error) {
    throw error;
  }
  // const conn = await connect();
  // try {
  //   const sql = `
  //   INSERT INTO
  //   clients (name, cpf, phone, email, address)
  //   VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  //   const values = [
  //     client.name,
  //     client.cpf,
  //     client.phone,
  //     client.email,
  //     client.address,
  //   ];
  //   const resultQuery = await conn.query(sql, values);
  //   return resultQuery.rows[0];
  // } catch (error) {
  //   throw error;
  // } finally {
  //   conn.release();
  // }
}

async function getClients() {
  try {
    return await Client.findAll();
  } catch (error) {
    throw error;
  }
  // const conn = await connect();
  // try {
  //   const sql = await conn.query(`
  //   SELECT *
  //   FROM clients`);
  //   return sql.rows;
  // } catch (error) {
  //   throw error;
  // } finally {
  //   conn.release();
  // }
}

async function getClientById(id) {
  try {
    return await Client.findByPk(id);
  } catch (error) {
    throw error;
  }
  // const conn = await connect();
  // try {
  //   const sql = await conn.query(
  //     `
  //   SELECT *
  //   FROM clients
  //   WHERE client_id = $1`,
  //     [id]
  //   );
  //   return sql.rows[0];
  // } catch (error) {
  //   throw error;
  // } finally {
  //   conn.release();
  // }
}

async function updateClient(client) {
  try {
    await Client.update(client, {
      where: {
        clientId: client.clientId,
      },
    });
    return await getClientById(client.clientId);
  } catch (error) {
    throw error;
  }
  // const conn = await connect();
  // try {
  //   const sql = `
  //   UPDATE clients
  //   SET name = $1, cpf = $2, phone = $3, email = $4, address = $5
  //   WHERE client_id = $6 RETURNING *`;
  //   const values = [
  //     client.name,
  //     client.cpf,
  //     client.phone,
  //     client.email,
  //     client.address,
  //     client.id,
  //   ];
  //   const resultQuery = await conn.query(sql, values);
  //   return resultQuery.rows[0];
  // } catch (error) {
  //   throw error;
  // } finally {
  //   conn.release();
  // }
}

async function deleteClientById(id) {
  try {
    await Client.destroy({
      where: {
        clientId: id,
      },
    });
  } catch (error) {
    throw error;
  }
  // const conn = await connect();
  // try {
  //   const sql = await conn.query(
  //     `
  //   DELETE
  //   FROM clients
  //   WHERE client_id = $1`,
  //     [id]
  //   );
  // } catch (error) {
  //   throw error;
  // } finally {
  //   conn.release();
  // }
}

export default {
  insertClient,
  getClients,
  getClientById,
  updateClient,
  deleteClientById,
};
