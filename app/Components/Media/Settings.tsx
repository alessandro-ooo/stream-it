import { TSettings } from "./types"

const Settings = (props: TSettings) => {
    const { URL } = props;
    
    const api_deleteMedia = async (url: string) => {
        const res = await fetch('/api/deleteMedia', {
            method: "DELETE",
            body: JSON.stringify({ url })
        });

        // add checks

        const result = await res.json();
        console.log(result);

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
            <li>
                Visibility
            </li>
        </ul>
    )
}

export default Settings