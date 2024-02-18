"use client"
import { TMedia } from "./types";
import {useForm } from "react-hook-form";
import MediaName from "../Inputs/MediaName";
import Link from "next/link";

const Media = (props: TMedia) => {
    const { URL, name } = props;
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
        <div>
            <video
                height={100}
                width={100}
            >
                <source type="video/mp4" src={`https://stream-it.s3.eu-west-2.amazonaws.com/${URL}#t=2`} />
            </video>

            <Link href={`/${URL}`}>
            {process.env.NEXT_PUBLIC_DOMAIN}{URL}
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
        </div>
    )
}

export default Media;