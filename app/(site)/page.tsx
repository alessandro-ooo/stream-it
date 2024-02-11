"use client"
import DnD from "../Components/Drag n drop/dnd";
import Navbar from "../Components/Navbar/Navbar"
import { signIn, signOut, useSession } from "next-auth/react";

const Index = () => {
    const {data: session } = useSession();

    return (
        <DnD>
            <Navbar>
                    {session == null &&
                        <button onClick={() => signIn('google', {callbackUrl: '/'})}>log in with google </button>
                    }

                    {session != null &&
                        <button onClick={() => signOut()}>log out</button>
                    }
                <p>{JSON.stringify(session)}</p>
            </Navbar>

            <div>
                <h1>this would be the landing page</h1>
            </div>
        </DnD>
    )
} 

export default Index;