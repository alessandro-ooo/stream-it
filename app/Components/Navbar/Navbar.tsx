"use client";

import { TNavbar } from "./types";

const Navbar = (props: TNavbar) => {
    return (
        <div>
            { props.children }
        </div>
    )
}

export default Navbar;