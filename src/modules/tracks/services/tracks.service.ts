import { Microservice } from "../../../constants";
import axios from "axios";

export const getTracks = async () => {
  const url = Microservice.TRACKS_URL;
  const response = await axios.get(url);

  return response.data.items.map((item: { _id: string; id: string }) => {
    if (item?._id) {
      item.id = item._id;
    }
    return item;
  });
};

export const getTrack = async (id: string) => {
  const url = `${Microservice.TRACKS_URL}/${id}`;
  const response = await axios.get(url);
  if (response?.data?._id) {
    response.data.id = response.data._id;
  }
  return response.data;
};

export const createTrack = async () => {};

export const deleteTrack = async () => {};

export const updateTrack = async () => {};
