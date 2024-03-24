import { TText } from "./types"

const Text = (props: TText) => {
    const { fsize, fweight, extra } = props;
    return (
        <p 
            className={`${fweight} ${fsize} ${extra}`}
        >
            {props.children}
        </p>
    )
}

export default Text;