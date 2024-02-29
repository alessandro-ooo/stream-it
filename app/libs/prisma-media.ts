import prisma from "./prisma-db";
import bcrypt from 'bcryptjs';

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

const hasPassword = async (URL: string) => {
    const res = await prisma.passwords.findMany({
        where: {
            url: URL
        },
        select: {
            password: true
        }
    });

    if(res.length == 0) {
        return null;
    }

    return res[0].password;
}

const setMediaVisibility = async (URL: string, ownerOnly: boolean) => {
    await prisma.media.update({
        where: {
            id: URL
        },
        data: {
            privacy: ownerOnly
        }
    });
}

const setMediaPassword = async (URL: string, password: string) => {
    const hash = await bcrypt.hashSync(password);
    const hasPass = await hasPassword(URL);
    
    if(hasPass  == null) {
        await prisma.passwords.create({
            data: {
                password: hash,
                url: URL,
            }
        });

    }

    await prisma.passwords.update({
        where: {
            password: hasPass as string
        },
        data: {
            password: hash
        }
    });
}

export { getMedia, getAllUserMedia, insertMedia, updateMediaName, deleteMedia, hasPassword, setMediaPassword, setMediaVisibility};