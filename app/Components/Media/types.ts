export type TPlayer = {
    URL: string;
    name: string;
}

export type TCollection = {
    children: React.ReactNode;
    reactClass: string;
}

export type TMedia = {
    URL: string;
    name: string;
    preview?: unknown;
}

export type TSettings = {
    URL: string;
}