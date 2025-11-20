import { jpAxios } from "../jpAxios";

export const setUSerService = async () => {
  const res = await jpAxios.post("/users", data);
  if (res) {
    console.log(res);
  }
};
