/** @format */

import axios from "axios";
import { endpointTurnLocal } from "../config/config";

export function getAllTurn(config) {
  return axios.get(endpointTurnLocal, config);
}
export function getTurnById(id, config) {
  return axios.get(endpointTurnLocal + id, config);
}
export function saveTurn(requestInit, config) {
  return axios.post(endpointTurnLocal, requestInit, config);
}
export function updateTurn(requestInit, config) {
  return axios.put(endpointTurnLocal, requestInit, config);
}
export function deleteTurnById(id, config) {
  return axios.delete(endpointTurnLocal + id, config);
}
