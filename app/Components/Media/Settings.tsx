import Link from "next/link";
import { TSettings } from "./types"

const Settings = (props: TSettings) => {
    const { URL } = props;
    const customRef: string = `/?visibility=true?&URL=${URL}`;
    
    const api_deleteMedia = async (url: string) => {

        const res = await fetch('/api/deleteMedia', {
            method: "DELETE",
            body: JSON.stringify({ url })
        });

        const result = await res.json();

        if(result.status == 403) {
            return Error(result.status);
        }

        await fetch('/api/s3-upload', {
            method: "DELETE",
            body: JSON.stringify({ url })
        });
    }

    return (
        <ul 
            className="flex flex-row"
        >
            <li 
                className="bg-neutral-300 text-gray-900 font-semibold text-lg w-1/2 flex justify-center p-1 rounded-bl-2xl border-2 border-gray-400 border-solid"
                id={URL}
                onClick={(mid) => api_deleteMedia(mid.currentTarget.id)}
            >
                Delete
            </li>
            <li 
                className="bg-neutral-300 text-gray-900 font-semibold text-lg w-1/2 flex justify-center p-1 rounded-br-2xl border-2 border-l-0 border-gray-400 border-solid"
            >
                <Link 
                    href={customRef}>
                    Visibility
                </Link>
            </li>
        </ul>
    )
}

export default Settings