import { Microservice } from "../../../constants";
import axios from "axios";

export const getAlbums = async () => {
  const url = Microservice.ALBUMS_URL;
  const response = await axios.get(url);

  return response.data.items.map((item: { _id: string; id: string }) => {
    if (item?._id) {
      item.id = item._id;
    }
    return item;
  });
};

export const getAlbum = async (id: string) => {
  const url = `${Microservice.ALBUMS_URL}/${id}`;
  const response = await axios.get(url);
  if (response?.data?._id) {
    response.data.id = response.data._id;
  }
  return response.data;
};

export const createAlbum = async () => {};

export const deleteAlbum = async () => {};

export const updateAlbum = async () => {};
