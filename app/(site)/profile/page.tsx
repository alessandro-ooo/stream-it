import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getAllUserMedias } from "@/app/libs/prisma-media";
import { getServerSession } from "next-auth"

const Profile = async () => {
    const session = await getServerSession(authOptions);
    const medias = await getAllUserMedias(session?.user?.email as string);

    return <div>{JSON.stringify(medias)}</div>
}

export default Profile