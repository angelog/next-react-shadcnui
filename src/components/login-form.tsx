'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { signIn } from 'next-auth/react'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'
import { useRouter } from 'next/navigation'

type UserAuthForm = React.HTMLAttributes<HTMLDivElement>
type IUser = {
	email: string
	password: string
}
export function UserLoginForm({ className, ...props }: UserAuthForm) {
	const defaultInputState: IUser = {
		email: '',
		password: '',
	}
	const [data, setData] = useState<IUser>(defaultInputState)
	const [IsLoading, setIsLoading] = useState<boolean>(false)
	const { toast } = useToast()
	const router = useRouter()

	async function onSubmit(event: React.SyntheticEvent) {
		event.preventDefault()
		setIsLoading(true)

		const res = await signIn<'credentials'>('credentials', {
			...data,
			redirect: false,
		})
		if (res?.error) {
			toast({
				title: 'Error',
				description: res.error,
				variant: 'destructive',
				action: <ToastAction altText="Try again">Try again</ToastAction>,
			})
			setIsLoading(false)
			return
		} else {
			router.push('/')
		}

		setData(defaultInputState)
	}

	async function handlerOnChenge(e: React.ChangeEvent<HTMLInputElement>) {
		setData((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	return (
		<div className={cn('grid gap-6', className)} {...props}>
			<form action="" onSubmit={onSubmit}>
				<div className="grid gap-2">
					<div className="grid gap-1">
						<Label className="sr-only" htmlFor="email">
							Email
						</Label>
						<Input
							id="email"
							name="email"
							placeholder="name@example.com"
							type="email"
							autoCapitalize="none"
							autoComplete="email"
							autoCorrect="off"
							disabled={IsLoading}
							value={data.email}
							onChange={handlerOnChenge}
						/>
					</div>
					<div className="grid gap-1">
						<Label className="sr-only" htmlFor="password">
							Password
						</Label>
						<Input
							id="password"
							name="password"
							placeholder="**********"
							type="password"
							autoCapitalize="none"
							value={data.password}
							disabled={IsLoading}
							onChange={handlerOnChenge}
						/>
					</div>
					<Button disabled={IsLoading}>
						{IsLoading && (
							<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
						)}
						Sign In
					</Button>
				</div>
			</form>
		</div>
	)
}
