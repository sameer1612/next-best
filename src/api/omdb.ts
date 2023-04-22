import axios from "axios";
import { Entity, MediaType, SearchResponse } from "../types";

const BASE_URL = "https://www.omdbapi.com";

export async function getDetails(term: string, type: MediaType) {
  const response = await axios.get(BASE_URL, {
    maxBodyLength: Infinity,
    headers: {},
    params: {
      apikey: import.meta.env.VITE_OMDB_KEY,
      t: term,
      type: type,
    },
  });

  return response.data as Entity;
}

export async function getSearchResults(term: string, type: MediaType) {
  const response = await axios.get(BASE_URL, {
    maxBodyLength: Infinity,
    headers: {},
    params: {
      apikey: import.meta.env.VITE_OMDB_KEY,
      s: term,
      type: type,
    },
  });

  return response.data as SearchResponse;
}
