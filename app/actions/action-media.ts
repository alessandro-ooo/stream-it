import { getAllUserMedia } from "../libs/prisma-media"

const actionGetAllUserMedia = async (email: string) => {
    const media = getAllUserMedia(email);
    return media;
}