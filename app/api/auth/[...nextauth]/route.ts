import { createUser, getUser } from "@/app/libs/prisma-user";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { redirect } from 'next/navigation'

export const authOptions: NextAuthOptions  = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        }),
    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const exists = await getUser(user.email as string);

            if(exists == null) {
                await createUser(user.email as string);
            }
            return true;
        },
    },

    secret: process.env.SECRET,
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST }