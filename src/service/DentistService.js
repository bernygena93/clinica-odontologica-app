/** @format */

import { endpointDentistLocal } from "../config/config";

export function getAllDentist(requestInit) {
  return fetch(endpointDentistLocal).then((res) => res.json());
}
export function getDentistById(id) {
  return fetch(endpointDentistLocal + id).then((res) => res.json());
}
export function saveDentist(requestInit) {
  return fetch(endpointDentistLocal, requestInit).then((res) => res.json());
}
export function updateDentist(requestInit) {
  return fetch(endpointDentistLocal, requestInit).then((res) => res.json());
}
export function deleteDentistById(id) {
  return fetch(endpointDentistLocal + id).then((res) => res.json());
}
