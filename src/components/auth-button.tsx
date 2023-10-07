'use client'
import { cn } from '@/lib/utils'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'

export default function AuthButton() {
	const { data: session, status } = useSession()
	const isAuthenticated = status === 'authenticated'

	return (
		<>
			{!isAuthenticated ? (
				<Link
					href="/login"
					className={cn(
						buttonVariants({ variant: 'ghost' }),
						'w-full bg-blue-600 font-medium text-white hover:bg-blue-900 hover:text-white',
					)}
				>
					Entrar
				</Link>
			) : (
				<Button
					onClick={() => signOut({ callbackUrl: '/login' })}
					className={cn(
						buttonVariants({ variant: 'ghost' }),
						'w-full bg-red-500 hover:bg-red-700 hover:text-white',
					)}
				>
					Sair
				</Button>
			)}
		</>
	)
}
