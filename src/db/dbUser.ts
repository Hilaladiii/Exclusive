import { UserType, userSchema } from "@/common/types/user";
import { prisma } from "../common/lib/prisma";
import bcryptjs from "bcryptjs";

export async function Register(userData: UserType) {
  const validate = userSchema.safeParse(userData);
  if (validate.success) {
    try {
      const email = await prisma.user.findUnique({
        where: {
          email: userData.email,
        },
      });

      if (email) {
        return {
          status: 400,
          message: "User with this email already exists ",
        };
      }
      userData.password = await bcryptjs.hash(userData.password, 10);
      await prisma.user.create({
        data: userData,
      });
      return {
        status: 201,
        message: "Success register your account",
      };
    } catch (error) {
      return {
        status: 500,
        message: (error as TypeError).name,
      };
    }
  } else {
    return {
      status: 400,
      message: "Data is invalid",
    };
  }
}

export async function Login(userData: { email: string; password: string }) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    });
    console.log(user);
    if (user) {
      const isPasswordValid = await bcryptjs.compare(
        userData.password,
        user.password
      );
      if (isPasswordValid) {
        return {
          name: user.firstname + user.lastname,
          email: user.email,
        };
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
