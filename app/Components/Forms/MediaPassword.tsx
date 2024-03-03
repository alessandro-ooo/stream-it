"use client"

import CTA from "../Inputs/Buttons";
import { useRef } from 'react';
import {Checkbox, Input} from "../Inputs/Inputs";
import { TMediaPassword, TVisibilityFields, TVisibilityForm } from "./types";
import { useForm } from 'react-hook-form';

const MediaPasswordForm = (props: TMediaPassword) => {

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

                    console.log(await res.json());
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