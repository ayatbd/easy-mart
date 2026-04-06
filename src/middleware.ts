import { NextResponse } from 'next/server'

export function middleware(request) {
    const token = request.cookies.get('token')?.value;

    // If no token and trying to access admin, redirect to login
    if (!token && request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/admin/:path*'],
};