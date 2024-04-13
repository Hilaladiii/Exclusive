import { authOption } from "./option";
import nextAuth from "next-auth";

const handler = nextAuth(authOption);
export { handler as GET, handler as POST };
