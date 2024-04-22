"use client";
import { DragEvent, useState } from "react";
import { TDnD } from "./types";
import { useRouter } from 'next/navigation'
import Notify from "../Notify/Notify";

const DnD = (props: TDnD) => {
    const router = useRouter();
    const [isOver, setIsOver] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false); 
    const [hasDropped, setHasDropped] = useState(false);

    // Define the event handlers
    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsOver(true);
    };

    const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsOver(false);
    };

    const handleDrop = async (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setHasDropped(true);

        const files = event.dataTransfer.files;
        const formData = new FormData();

        formData.append("media", files[0]);

        const send = await fetch('/api/s3-upload', {
            method: "POST",
            body: formData
        });

        const response = await send.json();

        if(response.success) {
            const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
            await delay(5000);
            router.push(`/${response.id}`)
        }
    }

    return (

        <div id="dragndrop"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`z-10`}
        >
            {hasDropped == true &&
            <div>
                <Notify text="We're uploading your clip on our servers." trigger={hasDropped} uploading={true} />
            </div>
            }
            {props.children}
        </div>

    )
}

export default DnD