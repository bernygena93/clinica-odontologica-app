/** @format */

import axios from "axios";
import { endpointUserLocal } from "../config/config";

export function signUp(requestInit) {
  return axios.post(endpointUserLocal + "signup", requestInit);
}
export function signIn(requestInit) {
  return axios.post(endpointUserLocal + "signin", requestInit);
}
