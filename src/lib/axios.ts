import { UserType } from "@/types/user";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});
