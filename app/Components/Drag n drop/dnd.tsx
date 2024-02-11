"use client";
import { DragEvent, useState } from "react";

const DnD = () => {

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

        await fetch('/api/s3-upload', {
            method: "POST",
            body: formData
        });
    }

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50px",
                width: "300px",
                border: "1px dotted",
                backgroundColor: isOver ? "lightgray" : "white",
            }}
        />

    )
}

export default DnD