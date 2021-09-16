/** @format */

import { endpointAddressLocal } from "../config/config";

export function getAllAddress(requestInit) {
  return fetch(endpointAddressLocal).then((res) => res.json());
}
export function getAddressById(id) {
  return fetch(endpointAddressLocal + id).then((res) => res.json());
}
export function saveAddress(requestInit) {
  return fetch(endpointAddressLocal, requestInit).then((res) => res.json());
}
export function updateAddress(requestInit) {
  return fetch(endpointAddressLocal, requestInit).then((res) => res.json());
}
export function deleteAddressById(id) {
  return fetch(endpointAddressLocal + id).then((res) => res.json());
}
