import Player from "@/app/Components/Media/Player";
import Navbar from "@/app/Components/Navbar/Navbar";
import { getMedia, hasPassword } from "@/app/libs/prisma-media"
import { isUserAllowed } from "@/app/libs/prisma-passwords";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Media = async ({ params }: { params: { slug: string } }) => {
    const media = await getMedia(params.slug);
    const hasPass: string | null = await hasPassword(media!.url);

    if (hasPass != null) {
        const isAllowed: boolean = await isUserAllowed(media!.url, cookies().get('email')?.value as string);

        if (isAllowed == false) {
            redirect(`/access?to=${media?.url}`);
        }
    }

    return (
        <div>
            <Navbar />
            <div
                className="w-full h-full flex justify-center items-center mt-12"
            >
                <Player
                    URL={media?.url as unknown as string}
                    name={media?.name as string}
                />
            </div>
        </div>
    )
}

export default Media