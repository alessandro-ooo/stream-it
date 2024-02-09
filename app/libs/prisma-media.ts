import prisma from "./prisma-db";

const getMedia = async (id: string) => {
    const res = await prisma.media.findUnique({where: {id: id}});
    return res;
}

const getAllUserMedias = async (email: string) => {
    const res = await prisma.media.findMany({where: {user: email} })
    return res;
}

export { getMedia, getAllUserMedias };