import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
    secret:process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            authorize(credentials) {
                if (credentials.email == 'muhammad.zikri@gmail.com' && credentials.password == '1234567890') {
                    return {
                        id: 1,
                        name: 'muhammad zikri',
                        email: 'muhammad.zikri@gmail.com',
                        token: 'fdgasdhjls'
                    }
                } else {
                    throw new Error('wrong password!')
                }
            }   
        })
    ],
    pages: {
        signIn: '/auth/login'
    },
    callbacks: {
        jwt: async ({token, user}) => {
            user && (token.user = user)
            return token
        },
        session: async ({session, token}) => {
            session.user = token.user
            return session
        }
    }
});