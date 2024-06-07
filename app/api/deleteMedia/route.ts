import { deleteMedia, getMedia } from "@/app/libs/prisma-media";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE (request: NextRequest) {
    const data: { URL: string} = await request.json();

    const media = await getMedia(data.URL);
    if(media === null) {
        return NextResponse.json({status: 403, error: `${data.URL} was not found.`});
    }

    const dMedia = await deleteMedia(media.url);

    return NextResponse.json({media: dMedia});
}