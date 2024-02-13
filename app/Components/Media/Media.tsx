import Link from "next/link";
import { TMedia } from "./types";
import { useForm } from "react-hook-form";
import MediaName from "../Inputs/MediaName";

const Media = (props: TMedia) => {
    const { URL, name } = props;
    const {
        register,
        handleSubmit,
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

            <Link href={`${process.env.DOMAIN}${URL}`}>
                {process.env.DOMAIN}{URL}
            </Link>

            <form 
                onSubmit={handleSubmit(async (data) => {
                    // Update it btw...    
                })}
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