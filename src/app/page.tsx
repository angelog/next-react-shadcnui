import { Button } from '@/components/ui/button'
import { getCurrentUser } from '@/lib/session'

export default async function Home() {
	const user = await getCurrentUser()
	return (
		<div>
			<h1>Home</h1>
			<Button>Botão</Button>
			<p>{JSON.stringify(user)}</p>
		</div>
	)
}
