import { db } from "@/shared/lib/db/drizzle";
import { account, session, user, verification } from "@/shared/lib/db/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
export const auth = betterAuth({
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },

  database: drizzleAdapter(db, {
    provider: "pg",
    schema: { account, session, user, verification },
  }),
  emailAndPassword: {
    enabled: true,
  },
});
