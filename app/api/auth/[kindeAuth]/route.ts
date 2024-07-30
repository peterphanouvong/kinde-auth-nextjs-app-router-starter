import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = handleAuth() as any;

export const runtime = "edge";
