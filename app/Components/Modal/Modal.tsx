import { TModal } from "./types";

const Modal = (props: TModal) => {
    return (
        <div className="bg-white rounded-xl border-gray-200 shadow-sm pointer-events-auto w-fit p-8">
            {props.children}
        </div>
    )
}

export default Modal;