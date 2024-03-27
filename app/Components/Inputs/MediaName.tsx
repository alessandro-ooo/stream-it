import React, { LegacyRef } from "react";
import { TMediaName } from "./types";

const MediaName = React.forwardRef(({ value, ...rest }: TMediaName, ref: LegacyRef<HTMLInputElement>) => {
    return (
        <input
            className="p-2 w-full bg-gray-100 text-gray-900 text-lg font-semibold border-l-2 border-r-2 border-gray-400 border-solid border-gray-400"
            type="text"
            placeholder="Add a title"
            ref={ref}
            {...rest}
        />
    )
});

export default MediaName;