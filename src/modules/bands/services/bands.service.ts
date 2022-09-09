import { Microservice } from "../../../constants";
import axios from "axios";

export const getBands = async () => {
  const url = Microservice.BANDS_URL;
  const response = await axios.get(url);

  return response.data.items.map((item: { _id: string; id: string }) => {
    if (item?._id) {
      item.id = item._id;
    }
    return item;
  });
};

export const getBand = async (id: string) => {
  const url = `${Microservice.BANDS_URL}/${id}`;
  const response = await axios.get(url);
  if (response?.data?._id) {
    response.data.id = response.data._id;
  }
  return response.data;
};

export const createBand = async () => {};

export const deleteBand = async () => {};

export const updateBand = async () => {};
