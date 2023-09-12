import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '@/lib/db'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(db as any),
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'text', placeholder: 'you@email.com' },
				password: {
					label: 'password',
					type: 'password',
					placeholder: 'password',
				},
			},
			async authorize(credentials, req): Promise<any> {
				console.log('authoraze method', credentials)
				if (!credentials?.email || !credentials?.password)
					throw new Error('Credentials necessary for authorization')
				const user = await db.user.findUnique({
					where: { email: credentials.email },
				})
				if (!user) throw new Error('User not found')
				const mathPassword = await bcrypt.compareSync(
					credentials.password,
					user.hashedPassword,
				)

				if (!mathPassword) throw new Error('Password incorrect')
				return user
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	secret: process.env.SECRET_KEY,
	debug: process.env.NODE_ENV !== 'production',
}
