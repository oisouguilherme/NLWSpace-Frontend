import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
  const { searchParams} = new URL(request.url)
  const code = searchParams.get('code')

  const registerRespoonse = await api.post('/register', {
    code,
  })

  const { token }= registerRespoonse.data

  const redirectURL = new URL('/', request.url)
  
  const cookiesExpiresInSeconds = 60*60*24*30

  return NextResponse.redirect(redirectURL, {
    headers:{
      'Set-Cookies': `token=${token}; Path=/; max-age=${cookiesExpiresInSeconds};`,
    },
  })
}