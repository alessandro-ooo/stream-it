import prisma from "./prisma-db";
import bcrypt from 'bcryptjs';

const insertMedia = async (name: string, uploader: string) => {
    const id = (Math.random() + 1).toString(36).substring(2);
    // ^^ this will give issues on the long run.
    // ex: duplicated file names

    const res = await prisma.media.create({
        data: {
            url: id,
            name: name,
            user: uploader
        }
    });

    return {res, id};
}

const deleteMedia = async (url: string) => {
    const res = await prisma.media.delete({
        where: {url: url}
    });

    return res;
}

const updateMediaName = async (id: string, name: string) => {
    await prisma.media.update({
        where: {url: id},
        data: {name: name}
    });
}

const getMedia = async (url: string) => {
    const res = await prisma.media.findUnique({where: {url: url}});
    return res;
}

const getAllUserMedia = async (email: string, page: number) => {
    page--;
    const res = await prisma.media.findMany({
        where: {user: email},
        skip: page * 9,
        take: 9
    });
    return res;
}

const hasPassword = async (URL: string) => {
    const res = await prisma.passwords.findFirst({
        where: {
            url: URL
        },
        select: {
            password: true
        }
    });

    if(res == null) {
        return null;
    }

    return res.password;
}

const setMediaVisibility = async (URL: string, ownerOnly: boolean) => {
    await prisma.media.update({
        where: {
            url: URL
        },
        data: {
            privacy: ownerOnly
        }
    });
}

const setMediaPassword = async (URL: string, password: string) => {
    const hash = await bcrypt.hashSync(password, 8);
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

const getHashedPassword = async (URL: string) => {
    const res = await prisma.passwords.findMany({
        where: {
            AND: [
                {
                    url: {
                        contains: URL
                    }
                },
            ]
        },
        select: { password: true }
    });

    return (res.length != 0 ? res[0].password : false);
}

export { getMedia, getAllUserMedia, insertMedia, updateMediaName, deleteMedia, hasPassword, setMediaPassword, setMediaVisibility, getHashedPassword};