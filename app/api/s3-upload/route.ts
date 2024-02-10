import { NextRequest, NextResponse } from "next/server";
import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3";

const bucket = new S3Client({
    region: process.env.AWS_S3_REGION ?? "",
    credentials: {
        accessKeyId: process.env.AWS_S3_ACCES_KEY_ID ?? "",
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY ?? ""
    }
});

const putInBucket = async (file: any, fileName: any) => {
    const fileBuffer = file;
    console.log(fileName);

    const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `${fileName}`,
        Body: fileBuffer,
        ContentType: "image/jpg"
    }

    const command = new PutObjectCommand(params);
    await bucket.send(command);
    return fileName;
}

export async function POST (request: NextRequest) {
    try {
        const formData = await request.formData();
        const media: any = formData.get("media");

        if(!media) {
            return NextResponse.json({ error: "File is required."}, {status: 400});
        }

        const buffer: Buffer = Buffer.from(await media.arrayBuffer());
        const mediaName = await putInBucket(buffer, media.name);
        return NextResponse.json({ success: true, mediaName});
    } catch (error) {
        return NextResponse.json({error: error});
    }
}