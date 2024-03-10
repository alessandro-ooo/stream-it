import { TMediaPassword, TVisibilityFields } from "@/app/Components/Forms/types";
import { getHashedPassword, setMediaPassword, setMediaVisibility } from "@/app/libs/prisma-media";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import { allowUser, isUserAllowed } from "@/app/libs/prisma-passwords";
import { cookies } from "next/headers";

export async function POST (request: NextRequest) {
    const data: TVisibilityFields = await request.json();

    const result: string | false = await getHashedPassword(data.URL);
    const rightPassword: boolean = bcrypt.compareSync(data.password, result as string);

    if(rightPassword == false) {
        return NextResponse.json({success: false});
    }
    
    await allowUser(data.URL, cookies().get('email')?.value as string);
    return NextResponse.json({success: true});
}