import { registerUser } from "@/services/userService";
import { UserType } from "@/types/user";
import { useMutation } from "@tanstack/react-query";

export function registerMutation() {
  return useMutation({
    mutationFn: (userData: UserType) => registerUser(userData),
  });
}
