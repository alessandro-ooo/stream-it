'use server'
import prisma from "./prisma-db"

const getUser = async (email: string) => {
    const res = prisma.user.findUnique({
        where: {
            email: email
        }
    });

    return res;
}

const createUser = async (email: string) => {
    const res = await prisma.user.create({data: { email: email } });
    return res;
}
export { getUser, createUser }