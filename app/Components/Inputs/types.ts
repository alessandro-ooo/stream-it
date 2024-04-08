import { SignInResponse } from "next-auth/react";

export type TMediaName = {
    value?: string;
}

export type TInputs = {
    value?: string;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    type: "text" | "password"
}

export type Tbuttons = {
    text: string;
    color?: string;
    hover?: string;
    fn?: () => Promise<SignInResponse | undefined> | (() => Promise<void>) | (() => void);
}

export type TCheckbox = {
    text: string;
    checked: boolean
}