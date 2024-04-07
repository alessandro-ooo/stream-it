"use client";

import { TPlayer } from "./types";


const Player = (props: TPlayer) => {
    const { URL, name } = props;
    return (
        <div 
            className="bg-red-100"
        >
            <video
                className="rounded-2xl"
                height={100}
                width={400}
                controls
                autoPlay>
                <source
                    type="video/mp4" 
                    src={`https://stream-it.s3.eu-west-2.amazonaws.com/${URL}`} 
                    />
            </video>
            <p>{name}</p>
        </div>
    )
}

export default Player;