// import '../config/envConfig.ts';
import { betterAuth } from "better-auth"
import { MongoClient } from "mongodb"
import { mongodbAdapter } from "better-auth/adapters/mongodb"

const client = new MongoClient(process.env.DATABASE_URL || "")
const db = client.db()

export const auth = betterAuth({
  user: {
    additionalFields: {
      identification: {
        type: "string",
        required: true,
        input: true,
      },
      identificationType: {
        type: "string",
        required: true,
        input: true,
      },
    }
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  // socialProviders: {
  //   google: {
  //     clientId: process.env.GOOGLE_CLIENT_ID!,
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!
  //   }
  // },
  database: mongodbAdapter(db),
})