import { Metadata } from 'next'
import Link from 'next/link'
import backImage from '@/assets/logo.jpeg'
import logo from '@/assets/logo-sf.png'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { UserLoginForm } from '@/components/login-form'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'Authentication',
}

export default function AuthenticationPage() {
	return (
		// < className="container relative hidden h-full flex-col  justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0  ">
		<>
			<Link
				href="/register"
				className={cn(
					buttonVariants({ variant: 'ghost' }),
					'absolute right-4 top-4 md:right-8 md:top-8 bg-blue-600 hover:bg-blue-900 hover:text-white text-white',
				)}
			>
				Register
			</Link>
			{/* <div
				className="relative hidden h-full flex-col bg-muted bg-cover bg-center text-white dark:border-r lg:flex "
				style={{
					backgroundImage: `url(${backImage.src})`,
				}}
			></div> */}
			<div className="lg:p-8 items-center h-full bg-gray-950">
				<div className="mx-auto flex w-full flex-col justify-center items-center space-y-6 sm:w-[450px]">
					<Image src={logo.src} width={150} height={150} alt={'Lion'} />
					<div className="flex flex-col space-y-2 text-center">
						<h1 className="text-2xl font-semibold tracking-tight text-white">
							Login
						</h1>
						<p className="text-sm text-muted-foreground">
							Enter your email to log in
						</p>
					</div>
					<UserLoginForm />
					<p className="px-8 text-center text-sm text-muted-foreground">
						By clicking continue, you agree to our{' '}
						<Link
							href="/terms"
							className="underline underline-offset-4 hover:text-primary"
						>
							Terms of Service
						</Link>{' '}
						and{' '}
						<Link
							href="/privacy"
							className="underline underline-offset-4 hover:text-primary"
						>
							Privacy Policy
						</Link>
						.
					</p>
				</div>
			</div>
		</>
	)
}
