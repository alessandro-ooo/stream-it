import { TVisibilityFields } from "@/app/Components/Forms/types";
import { setMediaPassword } from "@/app/libs/prisma-media";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const data: TVisibilityFields = await request.json();
    await setMediaPassword(data.URL, data.password);
    return NextResponse.json({status: 200});
}