import { TMediaPassword, TVisibilityFields } from "@/app/Components/Forms/types";
import { getHashedPassword, setMediaPassword, setMediaVisibility } from "@/app/libs/prisma-media";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import { allowUser } from "@/app/libs/prisma-passwords";
import { cookies } from "next/headers";

export async function POST (request: NextRequest) {
    const data: TVisibilityFields = await request.json();
    const hash = await bcrypt.hashSync(data.password);
    console.log(hash);

    // const result: string | false = await getHashedPassword(data.URL, hash);
    // fix ^^ need to get pass
    if(result == false) {
        return NextResponse.json({success: false});
    }

    await allowUser(data.URL, cookies().get('email')?.value as string);
    return NextResponse.redirect(`/${data.URL}`);
}