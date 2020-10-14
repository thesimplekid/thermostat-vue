import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  headers: { "Content-Type": "application/json" }
});

export async function getHello() {
  const response = await http.get("/");
  console.log(response.data);
  return response.data;
}
