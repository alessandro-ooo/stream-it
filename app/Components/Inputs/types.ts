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
}

export type TCheckbox = {
    text: string;
    checked: boolean
}