import roupaRepository from "../repositories/roupa.repository.js";

async function createRoupa(roupa) {
  return await roupaRepository.createRoupa(roupa);
}

async function deleteRoupa(codigo) {
  return await roupaRepository.deleteRoupa(codigo);
}

async function getRoupasCadastradas(codigo) {
  return await roupaRepository.getRoupasCadastradas(codigo);
}

async function getRoupasVendidas(codigo) {
  return await roupaRepository.getRoupasVendidas(codigo);
}

async function getAllRoupas() {
  return await roupaRepository.getAllRoupas();
}

async function getCalcas() {
  return await roupaRepository.getCalcas();
}

async function getCamisas() {
  return await roupaRepository.getCamisas();
}

async function getCalcados() {
  return await roupaRepository.getCalcados();
}

async function getBermudas() {
  return await roupaRepository.getBermudas();
}

async function getVestidos() {
  return await roupaRepository.getVestidos();
}

async function getShorts() {
  return await roupaRepository.getShorts();
}

async function getAgasalhos() {
  return await roupaRepository.getAgasalhos();
}

async function updateRoupa(roupa) {
  return await roupaRepository.updateRoupa(roupa);
}

async function getRoupaPeloCod(codigo) {
  return await roupaRepository.getRoupaPeloCod(codigo);
}

export default {
  createRoupa,
  deleteRoupa,
  getRoupasCadastradas,
  getRoupasVendidas,
  getAllRoupas,
  updateRoupa,
  getRoupaPeloCod,
  getCalcas, //
  getCamisas, //
  getCalcados, //
  getBermudas, //
  getVestidos, //
  getShorts, //
  getAgasalhos //
};
