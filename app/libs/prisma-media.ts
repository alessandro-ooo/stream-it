import prisma from "./prisma-db";

const insertMedia = async (name: string, uploader: string) => {
    const id = (Math.random() + 1).toString(36).substring(2);
    // ^^ this will give issues on the long run.
    // ex: duplicated file names

    const res = await prisma.media.create({
        data: {
            id: id,
            name: name,
            user: uploader
        }
    });

    return {res, id};
}

const deleteMedia = async (url: string) => {
    const res = await prisma.media.delete({
        where: {id: url}
    });

    return res;
}

const updateMediaName = async (id: string, name: string) => {
    await prisma.media.update({
        where: {id: id},
        data: {name: name}
    });
}

const getMedia = async (id: string) => {
    const res = await prisma.media.findUnique({where: {id: id}});
    return res;
}

const getAllUserMedia = async (email: string) => {
    const res = await prisma.media.findMany({where: {user: email} })
    return res;
}

export { getMedia, getAllUserMedia, insertMedia, updateMediaName, deleteMedia};