'use client'
// Allows to use the client side session hook

import { SessionProvider } from 'next-auth/react'

const Provider = ({ children }: {children: React.ReactNode}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Provider