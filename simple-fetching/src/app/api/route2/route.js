import { NextResponse, NextRequest } from "next/server";


export async function POST(req) {   
    const message = process.env.API_MESSAGE 
    console.log(message)
    return NextResponse.json({ message })
}