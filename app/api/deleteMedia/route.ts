import { deleteMedia, getMedia } from "@/app/libs/prisma-media";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE (request: NextRequest) {
    const data: {url: string} = await request.json();

    const media = getMedia(data.url);
    if(media === null) {
        return NextResponse.json({status: 403, error: `${data.url} was not found.`});
    }

    const dMedia = await deleteMedia(data.url);

    return NextResponse.json({media: dMedia});
}