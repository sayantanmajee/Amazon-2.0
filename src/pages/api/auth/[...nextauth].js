import NextAuth from "next-auth"
import GoogleProvider  from "next-auth/providers/google"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],

  //helped me to resolve vercel issue : https://github.com/nextauthjs/next-auth/issues/3245
  secret: process.env.SECRET,
})