"use client"
import Navbar from "../Components/Navbar/Navbar"
import { signIn, signOut, useSession } from "next-auth/react";

const Index = () => {
    const {data: session } = useSession();

    return (
        <div>
            <Navbar>
                    {session == null &&
                        <button onClick={() => signIn('google', {callbackUrl: '/dashboard'})}>log in with google </button>
                    }

                    {session != null &&
                        <button onClick={() => signOut()}>log out</button>
                    }
                <p>{JSON.stringify(session)}</p>
            </Navbar>

            <div>
                <h1>this would be the landing page</h1>
            </div>
        </div>
    )
} 

export default Index;