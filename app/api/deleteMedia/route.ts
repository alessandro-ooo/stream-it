import { deleteMedia } from "@/app/libs/prisma-media";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE (request: NextRequest) {
    const data: {url: string} = await request.json();
    const dMedia = await deleteMedia(data.url);

    return NextResponse.json({media: dMedia});
}