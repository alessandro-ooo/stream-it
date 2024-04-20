"use client"

import { CTA } from "../Inputs/Buttons";
import Text from "../Typography/Paragraphs";
import { TVisibilityFields, TVisibilityForm } from "./types";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'

const DeleteMediaForm = (props: TVisibilityForm) => {
    const { URL, OwnerCheck, page } = props;
    const router = useRouter();
    console.log("from deletemedia", page, URL)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm<TVisibilityFields>({
        defaultValues: {
            password: '',
            URL: URL,
            OwnerCheck: OwnerCheck
        }
    });

    return (
        <form
            className="flex flex-col space-y-10"
            onSubmit={handleSubmit(async (data) => {
                data.URL = URL;

                // Delete media from the DATABASE
                const res = await fetch('/api/deleteMedia', {
                    method: "DELETE",
                    body: JSON.stringify({ URL })
                });

                const result = await res.json();

                if(result.status == 403) {
                    return Error(result.status);
                }

                // Then finally delete it from the BUCKET

                const res2 = await fetch('/api/s3-upload', {
                    method: "DELETE",
                    body: JSON.stringify({ URL })
                });

                const s3res = await res2.json();

                // Refresh the page when is done
                
                if(s3res.status == "OK") {
                    return router.refresh();
                }
            })}
        >
            <Text 
                fweight={"font-semibold"} 
                fsize={"text-xl"}
            >
                Are you sure you want to delete this media?
            </Text>

            <div 
                className="flex flex-row justify-center space-x-12"
            >
                <CTA
                    text="No"
                />

                <CTA
                    text="Yes"
                    color="bg-red-500"
                    hover="hover:bg-red-700"
                    fn={() => router.push(`http:/?page=${page}`) as any}
                />
            </div>
        </form>
    )
} 

export default DeleteMediaForm