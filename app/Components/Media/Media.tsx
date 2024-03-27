"use client"
import { TMedia } from "./types";
import {useForm } from "react-hook-form";
import MediaName from "../Inputs/MediaName";
import Link from "next/link";
import Settings from "./Settings";

const Media = (props: TMedia) => {
    const { URL, name } = props;
    const linkToVid: string = process.env.NEXT_PUBLIC_DOMAIN + "/" + URL;
    const {
        register,
        watch,
        formState: { errors } 
    } = useForm({
        defaultValues: {
            name: name
        }
    });
    return (
        <div 
            className="w-96 max-w-96"
        >
            <Link
                href={URL}
            >
                <video
                    className="rounded-tl-3xl rounded-tr-xl border-2 border-gray-400 border-solid"
                    height={350}
                    width={600}
                >
                    <source type="video/mp4" src={`https://stream-it.s3.eu-west-2.amazonaws.com/${URL}#t=2`} />
                </video>
            </Link>

            <form 
                onKeyDown={async e =>  {
                    
                    if(e.key == "Enter") {
                        e.preventDefault();
                        const newName = watch('name');

                        await fetch('/api/updateMediaName', {
                            method: 'POST',
                            body: JSON.stringify({URL, newName})
                        });
                    }
                }}
            >
                <MediaName 
                    value={name} 
                    {...register("name", { required: false, minLength: 2, maxLength: 20})} 
                />
            </form>

            <div>
                <Settings URL={URL} />
            </div>
        </div>
    )
}

export default Media;