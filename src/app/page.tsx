import { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Dashboard',
}

export default async function Home() {
	return (
		<div className=" bg-slate-300 h-full">
			<h1>HOME</h1>
		</div>
	)
}
