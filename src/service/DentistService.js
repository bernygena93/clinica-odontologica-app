/** @format */

import axios from "axios";
import { endpointDentistLocal } from "../config/config";

export function getAllDentist(config) {
  return axios.get(endpointDentistLocal, config);
}
export function getEnrollment(config) {
  return axios.get(endpointDentistLocal + "dentistenrollment", config);
}
export function getDentistById(id, config) {
  return axios.get(endpointDentistLocal + id, config);
}
export function saveDentist(requestInit, config) {
  return axios.post(endpointDentistLocal, requestInit, config);
}
export function updateDentist(requestInit, config) {
  return axios.put(endpointDentistLocal, requestInit, config);
}
export function deleteDentistById(id, config) {
  return axios.delete(endpointDentistLocal + id, config);
}
