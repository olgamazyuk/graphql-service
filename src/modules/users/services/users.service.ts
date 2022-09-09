import { Microservice } from "../../../constants";
import axios from "axios";
import { tokenInstance } from "../../../utils";

export const getJwt = async (email: string, password: string) => {
  const url = Microservice.LOGIN_URL;

  const response = await axios.post(url, { email, password });
  if (response?.data?.jwt) {
    tokenInstance.setToken(response.data.jwt);
  }
  return response.data;
};

export const getUser = async (id: string) => {
  const url = `${Microservice.LOGIN_URL}/${id}`;
  const response = await axios.get(url);
  if (response?.data?._id) {
    response.data.id = response.data._id;
  }
  return response.data;
};

export const register = async () => {};
