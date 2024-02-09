import { getMedia } from "@/app/libs/prisma-media"

const Media = async ({ params }: { params: { slug: string } }) => {
    const media = await getMedia(params.slug);

    return <div>{JSON.stringify(media)}</div>
}

export default Media