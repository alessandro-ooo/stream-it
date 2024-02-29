import MediaPasswordForm from "@/app/Components/Forms/MediaPassword";
import Player from "@/app/Components/Media/Player";
import { getMedia, hasPassword } from "@/app/libs/prisma-media"

const Media = async ({ params }: { params: { slug: string } }) => {
    const media = await getMedia(params.slug);
    const hasPass: string | null = await hasPassword(media?.id as string);

    return (
        <div>
            {hasPass != null &&
                <MediaPasswordForm URL={media?.id as string} password={"ciao"} />
            }

            <Player 
                URL={media?.id as string} 
                name={media?.name as string} 
            />
        </div>
    )
}

export default Media