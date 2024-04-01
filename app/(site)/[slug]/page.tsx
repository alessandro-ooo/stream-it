import Player from "@/app/Components/Media/Player";
import { getMedia, hasPassword } from "@/app/libs/prisma-media"
import { isUserAllowed } from "@/app/libs/prisma-passwords";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Media = async ({ params }: { params: { slug: string } }) => {
    const media = await getMedia(params.slug);
    const hasPass: string | null = await hasPassword(media!.url);
    
    if(hasPass != null) {
        const isAllowed: boolean = await isUserAllowed(media!.url, cookies().get('email')?.value as string);

        if(isAllowed == false) {
            redirect(`/access?to=${media?.url}`);
        }
    }

    return (
        <div>
            <Player 
                URL={media?.url as unknown as string} 
                name={media?.name as string} 
            />
        </div>
    )
}

export default Media