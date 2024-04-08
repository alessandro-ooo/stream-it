"use client";
import { DragEvent, useState } from "react";
import { TDnD } from "./types";
import { useRouter } from 'next/navigation'

const DnD = (props: TDnD) => {
    const router = useRouter();
    const [isOver, setIsOver] = useState(false);

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
        const files = event.dataTransfer.files;
        const formData = new FormData();

        formData.append("media", files[0]);

        const send = await fetch('/api/s3-upload', {
            method: "POST",
            body: formData
        });

        const response = await send.json();

        if(response.success) {
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
            {props.children}
        </div>

    )
}

export default DnD