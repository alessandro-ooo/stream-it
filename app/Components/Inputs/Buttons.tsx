import { Tbuttons } from "./types";

const CTA = (props: Tbuttons) => {
    const { text, fn } = props;
    return (
        <button
            type="submit"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-bold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-700"
            onClick={fn}
        >
            {text}
        </button>
    )
}


const Ghost = (props: Tbuttons) => {
    const { text, fn } = props;
    return (
        <button
            type="submit"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent text-gray-900 hover:bg-gray-100"
            onClick={fn}
        >
            {text}
        </button>
    )
}

export { CTA, Ghost };