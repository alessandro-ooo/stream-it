import Link from "next/link";
import { TSettings } from "./types"

const Settings = (props: TSettings) => {
    const { URL } = props;
    
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
        <ul>
            <li 
                id={URL}
                onClick={(mid) => api_deleteMedia(mid.currentTarget.id)}
            >
                Delete
            </li>
            <li >
                <Link href="/?visibility=true">
                    Visibility
                </Link>
            </li>
        </ul>
    )
}

export default Settings