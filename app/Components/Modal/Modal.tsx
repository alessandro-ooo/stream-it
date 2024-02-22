import { TModal } from "./types";

const Modal = (props: TModal) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Modal;