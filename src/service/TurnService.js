/** @format */

import { endpointTurnLocal } from "../config/config";

export function getAllTurn(requestInit) {
  return fetch(endpointTurnLocal).then((res) => res.json());
}
export function getTurnById(id) {
  return fetch(endpointTurnLocal + id).then((res) => res.json());
}
export function saveTurn(requestInit) {
  return fetch(endpointTurnLocal, requestInit).then((res) => res.json());
}
export function updateTurn(requestInit) {
  return fetch(endpointTurnLocal, requestInit).then((res) => res.json());
}
export function deleteTurnById(id) {
  return fetch(endpointTurnLocal + id).then((res) => res.json());
}
