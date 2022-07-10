import { Microservice } from "../../../constants";
import axios from "axios";

export const getArtists = async () => {
  const url = Microservice.ARTISTS_URL;
  const response = await axios.get(url);

  return response.data.items.map((item: { _id: string; id: string }) => {
    if (item?._id) {
      item.id = item._id;
    }
    return item;
  });
};

export const getArtist = async (id: string) => {
  const url = `${Microservice.ARTISTS_URL}/${id}`;
  const response = await axios.get(url);
  if (response?.data?._id) {
    response.data.id = response.data._id;
  }
  return response.data;
};

export const createArtist = async () => {};

export const deleteArtist = async () => {};

export const updateArtist = async () => {};
