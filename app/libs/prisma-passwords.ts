import prisma from "./prisma-db";

const isUserAllowed = async (URL: string, user: string) => {
    const res = await prisma.allowList.findMany({
        where: {
            AND: [
                {
                    user: {
                        contains: user
                    }
                },
                {
                    url: {
                        contains: URL
                    }
                }
            ]
        }
    });

    return (res.length != 0 ? true : false);
}

const allowUser = async (URL: string, user: string) => {

    const res = await prisma.allowList.create({
        data: {
            url: URL,
            user: user,
        }
    });

    return res;
}

export { isUserAllowed, allowUser }