import { NextRequest,NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient()
export async function GET(){
	return Response.json({username:"narayana",email:"gnarayana1755@gmail.com"})
}

export async function POST(req: NextRequest) {
    const body = await req.json();
		await client.user.create({
			data:{
				username:body.username,
				password:body.password
			}
		})
    return NextResponse.json({ username: body.username, password: body.password })
}