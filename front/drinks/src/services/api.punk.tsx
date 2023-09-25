import axios from "axios";

export const apiPunk = axios.create({
  baseURL: "https://api.punkapi.com/v2",
  timeout: 8000,
});
