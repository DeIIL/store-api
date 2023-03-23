import clientRepository from "../repositories/client.repository.js";

async function createClient(client) {
  return await clientRepository.insertClient(client);
}

async function getAllClients() {
  return await clientRepository.getClients();
}

async function getClientById(id) {
  return await clientRepository.getClientById(id);
}

async function updateClient(client) {
  return await clientRepository.updateClient(client);
}

async function deleteClientById(id) {
  return await clientRepository.deleteClientById(id);
}

export default {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClientById,
};
