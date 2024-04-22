"use client";

import { TPlayer } from "./types";
import Text from "../Typography/Paragraphs";
import { CTA } from "../Inputs/Buttons";


const Player = (props: TPlayer) => {
    const { URL, name } = props;
    return (
        <div 
            className="flex-col justify-center items-center space-y-2"
        >
            <video
                className="rounded-2xl h-[38rem]"
                controls
                autoPlay>
                <source
                    type="video/mp4" 
                    src={`https://stream-it.s3.eu-west-2.amazonaws.com/${URL}`} 
                    />
            </video>

            <div 
                className="flex flex-row"
            >
                <div 
                    className="flex flex-col"
                >
                    <Text 
                        fweight="font-semibold"
                        fsize="text-lg"
                        extra="text-gray-900"
                    >
                        {name}
                    </Text>

                    <Text 
                        fweight="font-regular"
                        fsize="text-normal"
                        extra="text-gray-900"
                    >
                        {"0 views"}
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default Player;