import React, { LegacyRef } from "react";
import { TInputs } from "./types";

const Input = React.forwardRef(({ value, placeholder, label, type, disabled = false, ...rest }: TInputs, ref: LegacyRef<HTMLInputElement>) => {
    return (
        <div className="flex flex-col space-y-4">
            <Text 
                fweight="font-semibold"
                fsize="text-regular"
            >
                {label}
            </Text>
            <input
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                type={type}
                placeholder={placeholder}
                ref={ref}
                disabled={disabled}
                // value={(value == undefined ? "" : value)} 
                {...rest}
            />
        </div>
    )
});

import { TCheckbox } from "./types"
import Text from "../Typography/Paragraphs";

const Checkbox = React.forwardRef(({ text, checked, ...rest } : TCheckbox, ref: LegacyRef<HTMLInputElement>)  => {

    return (
        <div className="flex flex-row space-x-4">
            <input
                type="checkbox"
                defaultChecked={checked}
                ref={ref}
                {...rest}
            />
            
            <Text 
                fweight="font-semibold"
                fsize="text-regular"
            >
                {text}
            </Text>
        </div>
    )
});

export { Input, Checkbox };