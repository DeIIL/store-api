import clientService from "../services/client.service.js";

async function createClient(request, response, next) {
  try {
    let client = request.body;
    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error(
        "The fields Name, CPF, Phone, Email and Address are required."
      );
    }
    response.send(await clientService.createClient(client));
    logger.info(`POST on /client - ${JSON.stringify(client)}`);
  } catch (error) {
    next(error);
  }
}

async function getAllClients(request, response, next) {
  try {
    response.send(await clientService.getAllClients());
    logger.info(`GET on /client`);
  } catch (error) {
    next(error);
  }
}

async function getClientById(request, response, next) {
  try {
    const id = request.params.id;
    if (id == null) {
      throw new Error("The field Id is required to search for a client.");
    }
    response.send(await clientService.getClientById(id));
    logger.info(`GET on /client/:id ${id}`);
  } catch (error) {
    next(error);
  }
}

async function updateClient(request, response, next) {
  try {
    let client = request.body;
    if (
      !client.clientId ||
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error(
        "The fields Id, Name, CPF, Phone, Email, Address are required."
      );
    }
    response.send(await clientService.updateClient(client));
    logger.info(`PUT on /client ${JSON.stringify(client)}`);
  } catch (error) {
    next(error);
  }
}

async function deleteClientById(request, response, next) {
  try {
    const id = request.params.id;
    if (id == null) {
      throw new Error("The field Id is required.");
    }
    response.send(await clientService.deleteClientById(id));
    logger.info(`DELETE on /client/:id ${id}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClientById,
};
