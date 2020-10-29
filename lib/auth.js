import axios from "axios";

axios.defaults.withCredentials = true;

export const loginUser = async (email, password) => {
  const response = await axios.post("/api/login", { email, password });
  console.log(response);
};

export const getUserProfile = async () => {
  const { data } = await axios.get("/api/profile");
  return data;
};
