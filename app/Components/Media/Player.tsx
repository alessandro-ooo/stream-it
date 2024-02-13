"use client";

import { TPlayer } from "./types";
import { useForm } from 'react-hook-form';


const Player = (props: TPlayer) => {
    const { URL, name } = props;
    return (
        <div>
            <video
                height={400}
                width={400}
                controls
                autoPlay>
                <source type="video/mp4" src={`https://stream-it.s3.eu-west-2.amazonaws.com/${URL}`} />
            </video>
            <p>{name}</p>
        </div>
    )
}

export default Player;