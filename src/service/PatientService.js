/** @format */

import { endpointPatientLocal } from "../config/config";

export function getAllPatient() {
  return fetch(endpointPatientLocal).then((res) => res.json());
}
export function getPatientById(id) {
  return fetch(endpointPatientLocal + id).then((res) => res.json());
}
export function savePatient(requestInit) {
  return fetch(endpointPatientLocal, requestInit).then((res) => res.json());
}
export function updatePatient(requestInit) {
  return fetch(endpointPatientLocal, requestInit).then((res) => res.json());
}
export function deletePatientById(id) {
  return fetch(endpointPatientLocal + id).then((res) => res.json());
}
