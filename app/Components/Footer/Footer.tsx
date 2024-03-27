import { TFooter } from "./types";

const Footer = (props: TFooter) => {
    return(
        <div 
            className="w-full flex flex-row justify-around pt-40 pb-20"
        >
            {props.children}
        </div>
    )
}

export default Footer;