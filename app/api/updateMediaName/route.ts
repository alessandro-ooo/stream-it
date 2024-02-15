import { updateMediaName } from "@/app/libs/prisma-media";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const data = await request.json();
    updateMediaName(data.URL, data.newName);
    return NextResponse.json({status: 200});
}