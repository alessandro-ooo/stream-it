export type TVisibilityForm = {
    URL: string,
    OwnerCheck: boolean;
    page: string; // Page has to be passed in case we need to re-render the page
}
export type TVisibilityFields = {
    password: string;
    URL: string;
    OwnerCheck: boolean;
}

export type TMediaPassword = {
    URL: string;
}

export type TResponse = {
    success: boolean;
}