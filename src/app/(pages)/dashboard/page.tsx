import { Metadata } from 'next'
import { NavMenu } from '@/components/nav'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
export const metadata: Metadata = {
	title: 'Dashboard',
}

export default async function Home() {
	return (
		<div className=" bg-slate-300 h-full">
			<NavMenu />
			<div className="p-5 h-full">
				<h1 className=" font-bold text-lg mb-5">Deshboard</h1>
				<section className="flex flex-row gap-4">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Total Revenue
							</CardTitle>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="h-4 w-4 text-muted-foreground"
							>
								<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
							</svg>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">$45,231.89</div>
							<p className="text-xs text-muted-foreground">
								+20.1% from last month
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Total Revenue
							</CardTitle>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="h-4 w-4 text-muted-foreground"
							>
								<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
							</svg>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">$45,231.89</div>
							<p className="text-xs text-muted-foreground">
								+20.1% from last month
							</p>
						</CardContent>
					</Card>
				</section>
				<section>
					<h3>board</h3>
				</section>
			</div>
		</div>
	)
}
