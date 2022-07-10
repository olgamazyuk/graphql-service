import { Microservice } from "../../../constants";
import axios from "axios";
import { tokenInstance } from "../../../utils";

export const getFavourites = async () => {
  const url = Microservice.FAVOURITES_URL;
  const headers = {
    Authorization: `Bearer ${tokenInstance.getToken()}`,
  };
  const response = await axios.get(url, { headers });

  if (response.data?._id) {
    response.data.id = response.data._id;
  }
  return response.data;
};

export const addTrackToFavourites = async () => {};

export const addBandToFavourites = async () => {};

export const addArtistToFavourites = async () => {};

export const addGenreToFavourites = async () => {};
