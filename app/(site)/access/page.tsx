import MediaPasswordForm from "@/app/Components/Forms/MediaPassword";
import { isUserAllowed } from "@/app/libs/prisma-passwords";
import { cookies } from "next/headers";

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
};
  
const Access = async ({ searchParams }: SearchParamProps) => {

    const URL: string | undefined = searchParams?.to;

    return (
        <MediaPasswordForm URL={URL as string} />
    )
    // const isAllowed: boolean = await isUserAllowed(URL as string, cookies().get('email')?.value as string);

    // if(isAllowed == false) {
    //     return <MediaPasswordForm URL={URL as string} password={"ciao"} />
    // }

    // if(isAllowed == true) {

    // }
}

export default Access