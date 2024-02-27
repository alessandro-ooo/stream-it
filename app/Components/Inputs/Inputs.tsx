import React, { LegacyRef } from "react";
import { TInputs } from "./types";

const Input = React.forwardRef(({ value, placeholder, label, type, disabled = false, ...rest }: TInputs, ref: LegacyRef<HTMLInputElement>) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            ref={ref}
            disabled={disabled}
            // value={(value == undefined ? "" : value)} 
            {...rest}
        />
    )
});

import { TCheckbox } from "./types"

const Checkbox = React.forwardRef(({ text, checked, ...rest } : TCheckbox, ref: LegacyRef<HTMLInputElement>)  => {

    return (
        <div>
            <span>{text}</span>
            <input
                type="checkbox"
                defaultChecked={checked}
                ref={ref}
                {...rest}
            />
        </div>
    )
});

export { Input, Checkbox };