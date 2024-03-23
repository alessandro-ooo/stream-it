"use client"
import { signIn, signOut } from "next-auth/react";
import { TNavbar } from "./types";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = (props: TNavbar) => {
    const { data: session } = useSession();
    return (
        <div
            className="w-full">
            {session == null &&
                <div
                    className="flex flex-row justify-between pt-4 pb-4 pl-96 pr-96"
                >
                    <Image 
                        src="/stream-it.png" 
                        height={200}
                        width={300}
                        alt={"stream-it logo"}
                    />

                    <div
                        className="flex flex-row space-x-10"
                    >
                        <button
                            className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent text-gray-900 hover:bg-gray-100"
                            onClick={() => signIn('google', { callbackUrl: '/' })}
                        >
                            Login 
                        </button>

                        <button 
                            className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-bold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-700"
                            onClick={() => signIn('google', { callbackUrl: '/' })}
                        >
                                Sign up for free
                        </button>
                    </div>
                </div>
            }

            {session != null &&
                <div
                    className="flex flex-row justify-between pt-4 pb-4 pl-96 pr-96"
                >
                    <Image 
                        src="/stream-it.png" 
                        height={200}
                        width={300}
                        alt={"stream-it logo"}
                    />
                    <div
                        className="flex flex-row space-x-10"
                    >
                            <p
                                className="self-center"
                            >
                                {session.user?.email}
                            </p>
                            
                            <button 
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent text-gray-900 hover:bg-gray-100"
                                onClick={() => signOut()}
                            >
                                Log out
                            </button>

                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar;