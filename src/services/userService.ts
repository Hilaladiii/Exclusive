import { axiosInstance } from "@/lib/axios";
import { UserType } from "@/types/user";
import { AxiosError } from "axios";

export const registerUser = async (userData: UserType) => {
  try {
    const res: { data: string; status: number } = await axiosInstance.post(
      "auth/register",
      userData
    );
    return {
      message: res.data,
      status: res.status,
    };
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError) {
      const errorMessage: { message?: string; status?: number } = {
        message:
          typeof axiosError.response?.data === "string"
            ? axiosError.response?.data
            : "An unexpected error occurred.",
        status: axiosError.response?.status,
      };
      return errorMessage;
    } else {
      return (error as TypeError).name;
    }
  }
};
