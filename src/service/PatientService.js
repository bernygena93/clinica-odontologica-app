/** @format */

import axios from "axios";
import { endpointPatientLocal } from "../config/config";

export function getAllPatient(config) {
  return axios.get(endpointPatientLocal, config);
}
export function getDni(config) {
  return axios.get(endpointPatientLocal + "patientdni", config);
}
export function getPatientById(id, config) {
  return axios.get(endpointPatientLocal + id, config);
}
export function savePatient(requestInit, config) {
  return axios.post(endpointPatientLocal, requestInit, config);
}
export function updatePatient(requestInit, config) {
  return axios.put(endpointPatientLocal, requestInit, config);
}
export function deletePatientById(id, config) {
  return axios.delete(endpointPatientLocal + id, config);
}
