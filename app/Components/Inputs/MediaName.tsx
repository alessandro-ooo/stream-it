import React, { LegacyRef } from "react";
import { TMediaName } from "./types";

const MediaName = React.forwardRef(({ value, ...rest }: TMediaName, ref: LegacyRef<HTMLInputElement>) => {
    return (
        <input
            type="text"
            placeholder="Add a title"
            ref={ref}
            {...rest}
        />
    )
});

export default MediaName;