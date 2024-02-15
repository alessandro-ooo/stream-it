
"use client"
import { signIn, signOut } from "next-auth/react";
import { TNavbar } from "./types";
import { useSession } from "next-auth/react";

const Navbar = (props: TNavbar) => {
    const { data: session } = useSession();
    return (
        <div>
            {session == null &&
                <button onClick={() => signIn('google', { callbackUrl: '/' })}>log in with google </button>
            }

            {session != null &&
                <button onClick={() => signOut()}>log out</button>
            }
            <p>{JSON.stringify(session)}</p>
        </div>
    )
}

export default Navbar;