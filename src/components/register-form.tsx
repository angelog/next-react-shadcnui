'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'
import { useRouter } from 'next/navigation'

type UserAuthForm = React.HTMLAttributes<HTMLDivElement>
// type Roles = {
// 	Admin: string
// 	Operator: string
// }
type IUser = {
	email: string
	password: string
	name: string
	role?: string
}
export function UserRegisterForm({ className, ...props }: UserAuthForm) {
	const defaultInputState: IUser = {
		email: '',
		password: '',
		name: '',
	}
	const [data, setData] = useState<IUser>(defaultInputState)
	const { toast } = useToast()
	const [IsLoading, setIsLoading] = useState<boolean>(false)
	const router = useRouter()

	async function onSubmit(event: React.SyntheticEvent) {
		event.preventDefault()
		setIsLoading(true)

		const request = await fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		const response = await request.json()
		if (!request.ok) {
			toast({
				title: 'Error',
				description: 'Error in request data',
				variant: 'destructive',
				action: <ToastAction altText="Try again">Try again</ToastAction>,
			})
			setIsLoading(false)
			return
		} else {
			console.log(response)
			toast({
				title: 'Success',
				description: 'User cadastration with success',
				variant: 'default',
			})
			setIsLoading(false)
			router.push('/login')
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
						<Label className="sr-only" htmlFor="name">
							Name
						</Label>
						<Input
							id="name"
							name="name"
							placeholder="name"
							type="text"
							autoCapitalize="none"
							autoCorrect="off"
							value={data.name}
							disabled={IsLoading}
							onChange={handlerOnChenge}
						/>
					</div>
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
						Register
					</Button>
				</div>
			</form>
		</div>
	)
}
