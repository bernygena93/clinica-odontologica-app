/** @format */

import axios from "axios";
import { endpointAddressLocal } from "../config/config";

export function getAllAddress(requestInit) {
  return axios.get(endpointAddressLocal, requestInit);
}
export function getAddressById(requestInit, id) {
  return axios.get(endpointAddressLocal + id, requestInit);
}
export function saveAddress(requestInit) {
  return axios.post(endpointAddressLocal, requestInit);
}
export function updateAddress(requestInit) {
  return axios.put(endpointAddressLocal, requestInit);
}
export function deleteAddressById(requestInit, id) {
  return axios.delete(endpointAddressLocal + id, requestInit);
}
