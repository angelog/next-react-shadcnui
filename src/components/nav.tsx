import Link from 'next/link'
import { UserNav } from './user-nav'
import Image from 'next/image'
import logo from '@/assets/logo-sf.png'
import { cn } from '@/lib/utils'

export function NavMenu() {
	return (
		<div className=" bg-black w-full p-2 flex flex-row justify-between items-center">
			<div className=" flex flex-row items-center gap-4">
				<Image
					src={logo.src}
					width={100}
					height={100}
					alt={'Lion'}
					className="mr-6"
				/>

				<Link
					href="/dashboard"
					className={cn(
						' font-medium text-white hover:text-blue-300 hover:underline decoration-1',
					)}
				>
					Dashboard
				</Link>

				<Link
					href="/cadastro"
					className={cn(
						' font-medium text-white hover:text-blue-300 hover:underline decoration-1',
					)}
				>
					Cadastro
				</Link>

				<Link
					href="/admin"
					className={cn(
						' font-medium text-white hover:text-blue-300 hover:underline decoration-1',
					)}
				>
					Admin
				</Link>
			</div>
			<div className="mr-5">
				<UserNav />
			</div>
		</div>
	)
}
