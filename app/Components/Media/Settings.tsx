import Link from "next/link";
import { TSettings } from "./types"

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
};

const Settings = (props: TSettings, { searchParams }: SearchParamProps) => {
    const { URL } = props;
    const customRef: string = `/?visibility=true&URL=${URL}`;
    
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
                className="p-2 bg-gray-100 text-gray-900 font-semibold text-base w-1/2 flex justify-center p-1 rounded-bl-2xl border border-gray-400 border-solid"
                id={URL}
                key={URL}
                onClick={(mid) => api_deleteMedia(mid.currentTarget.id)}
            >
                <Link href="">Delete</Link>
            </li>
            <li 
                className="p-2 bg-gray-100 text-gray-900 font-semibold text-base w-1/2 flex justify-center p-1 rounded-br-2xl border border-l-0 border-gray-400 border-solid"
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