"use client"

import { CTA } from "../Inputs/Buttons";
import {Checkbox, Input} from "../Inputs/Inputs";
import Text from "../Typography/Paragraphs";
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
            className="flex flex-col space-y-10"
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
            <Text 
                fweight={"font-semibold"} 
                fsize={"text-xl"}
            >
                Choose the type of protection
            </Text>
            <Checkbox 
                text="Only owner" 
                checked={OwnerCheck}
                {...register("OwnerCheck", { required: false})}
            />
            <Input 
                type="password" 
                label="Password" 
                placeholder="Password"
                {...register("password", { required: true, minLength: 2, maxLength: 20,
                disabled: (watch("OwnerCheck"))})}
            />

            <div 
                className="flex flex-row justify-center space-x-12"
            >
                <CTA
                    text="Save"
                />

                <CTA
                    text="Abort"
                    color="bg-red-500"
                    hover="hover:bg-red-700"
                />
            </div>
        </form>
    )
} 

export default VisibilityForm