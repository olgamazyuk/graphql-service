import { Microservice } from "../../../constants";
import axios from "axios";

export const getGenres = async () => {
  const url = Microservice.GENRES_URL;
  const response = await axios.get(url);

  return response.data.items.map((item: { _id: string; id: string }) => {
    if (item?._id) {
      item.id = item._id;
    }
    return item;
  });
};

export const getGenre = async (id: string) => {
  const url = `${Microservice.GENRES_URL}/${id}`;
  const response = await axios.get(url);
  if (response?.data?._id) {
    response.data.id = response.data._id;
  }
  return response.data;
};

export const createGenre = async () => {};

export const deleteGenre = async () => {};

export const updateGenre = async () => {};
