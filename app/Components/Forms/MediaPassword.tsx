"use client"

import CTA from "../Inputs/Buttons";
import { useRef } from 'react';
import {Checkbox, Input} from "../Inputs/Inputs";
import { TMediaPassword, TVisibilityFields, TVisibilityForm } from "./types";
import { useForm } from 'react-hook-form';

const MediaPasswordForm = (props: TMediaPassword) => {
    const passRef = useRef<null | HTMLFormElement>(null);

    const handleUnmount = () => {
        passRef.current = null;
    };

    const { URL, password } = props;
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
        }
    });

    return (
        <form ref={passRef}
            onSubmit={handleSubmit(async (data) => {
                handleUnmount();
                console.log("g")

                // return the result please
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