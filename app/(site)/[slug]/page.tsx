import Player from "@/app/Components/Media/Player";
import { getMedia } from "@/app/libs/prisma-media"

const Media = async ({ params }: { params: { slug: string } }) => {
    const media = await getMedia(params.slug);

    return (
        <Player 
            URL={media?.id as string} 
            name={media?.name as string} 
        />
    )
}

export default Media