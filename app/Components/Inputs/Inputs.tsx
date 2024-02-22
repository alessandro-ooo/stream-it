import React, { LegacyRef } from "react";
import { TInputs } from "./types";

const Input = React.forwardRef(({ value, placeholder, label, type, ...rest }: TInputs, ref: LegacyRef<HTMLInputElement>) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            ref={ref}
            // value={(value == undefined ? "" : value)} 
            {...rest}
        />
    )
});

export default Input;