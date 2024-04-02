"use client"

import { CTA } from "../Inputs/Buttons";
import { useRef } from 'react';
import {Checkbox, Input} from "../Inputs/Inputs";
import { TMediaPassword, TResponse, TVisibilityFields, TVisibilityForm } from "./types";
import { useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";

const MediaPasswordForm = (props: TMediaPassword) => {
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    const { URL } = props;
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm<TVisibilityFields>({
        defaultValues: {
            password: '',
            URL: URL
        }
    });

    const router = useRouter();

    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                    const res: Response = await fetch('/api/comparePassword', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });

                    const response: TResponse = await res.json();

                    if(response.success == true) {
                        await delay(1000);
                        return router.push(`/${data.URL}`);
                    } 
            })}
        >
            <Input 
                type="password" 
                label="Type a password" 
                placeholder="Password"
                {...register("password", { required: true, minLength: 2, maxLength: 20})}
            />

            <CTA 
                text="Protect" 
            />
        </form>
    )
} 

export default MediaPasswordForm