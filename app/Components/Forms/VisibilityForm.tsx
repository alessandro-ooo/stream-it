"use client"

import CTA from "../Inputs/Buttons";
import Input from "../Inputs/Inputs";
import { TVisibilityFields, TVisibilityForm } from "./types";
import { useForm } from 'react-hook-form';

const VisibilityForm = (props: TVisibilityForm) => {
    const { URL } = props;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<TVisibilityFields>({
        defaultValues: {
            password: ''
        }
    });

    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                console.log(data, URL);
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

export default VisibilityForm