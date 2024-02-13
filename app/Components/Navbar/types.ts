import { Session } from "next-auth"

export type TNavbar = {
    // children: React.ReactNode,
    session: Session | null
}