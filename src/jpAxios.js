import axios from "axios";

export const jpAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  timeoutErrorMessage: "response time has taken too long",
});
