import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
	const data = await request.json()
	const { name, email, password } = data
	if ([name, email, password].includes(undefined)) {
		return NextResponse.json('Data invalid.', { status: 400 })
	}

	const isUserExist = await db.user.findUnique({
		where: {
			email,
		},
	})

	if (isUserExist) {
		return NextResponse.json(
			{ error: 'E-mail is already in use' },
			{ status: 400 },
		)
	}

	const hashedPassword = await bcrypt.hash(password, 10)

	const user = await db.user.create({
		data: { email, name, hashedPassword },
	})
	return NextResponse.json(user)
}
