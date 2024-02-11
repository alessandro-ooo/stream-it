import { getMedia } from "@/app/libs/prisma-media"

const Media = async ({ params }: { params: { slug: string } }) => {
    const media = await getMedia(params.slug);

    return (
        <video height={400} width={400} controls autoPlay>
            <source type="video/mp4" src={`https://stream-it.s3.eu-west-2.amazonaws.com/${media?.id}`} />
        </video>
    )
}

export default Media