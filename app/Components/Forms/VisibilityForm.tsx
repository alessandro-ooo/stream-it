"use client"

import CTA from "../Inputs/Buttons";
import {Checkbox, Input} from "../Inputs/Inputs";
import { TVisibilityFields, TVisibilityForm } from "./types";
import { useForm } from 'react-hook-form';

const VisibilityForm = (props: TVisibilityForm) => {
    const { URL, OwnerCheck } = props;
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
            onSubmit={handleSubmit(async (data) => {
                data.URL = URL;
                console.log(data);
                
                const res: Response = await fetch((data.OwnerCheck == false ? '/api/setMediaPassword' : '/api/setMediaVisibility'), {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                // return the result please
            })}
        >
            <Checkbox 
                text="Only owner" 
                checked={OwnerCheck}
                {...register("OwnerCheck", { required: false})}
            />
            <Input 
                type="password" 
                label="Type a password" 
                placeholder="Password"
                {...register("password", { required: true, minLength: 2, maxLength: 20,
                disabled: (watch("OwnerCheck"))})}
            />

            <CTA 
                text="Protect" 
            />
        </form>
    )
} 

export default VisibilityForm