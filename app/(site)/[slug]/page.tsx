import Player from "@/app/Components/Media/Player";
import { getMedia, hasPassword } from "@/app/libs/prisma-media"
import { isUserAllowed } from "@/app/libs/prisma-passwords";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Media = async ({ params }: { params: { slug: string } }) => {
    const media = await getMedia(params.slug);
    const hasPass: string | null = await hasPassword(media?.id as string);
    
    if(hasPass != null) {
        const isAllowed: boolean = await isUserAllowed(media!.id as string, cookies().get('email')?.value as string);

        if(isAllowed == false) {
            redirect(`/access?to=${media?.id}`);
        }
    }

    return (
        <div>
            <Player 
                URL={media?.id as string} 
                name={media?.name as string} 
            />
        </div>
    )
}

export default Media