
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from 'next-auth'

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "email",
                    placeholder: "enter email"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "enter password"
                }
            },
            async authorize(credentials){
                const user = {
                    id: "2334",
                    email: process.env.EMAIL,
                    password: process.env.PASSWORD
                }
                if(credentials?.password === user.password && credentials?.email === user.email){
                    return user;
                }else{
                    return null;
                }
            }
        })
    ],
}