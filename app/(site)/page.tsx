import DnD from "../Components/Drag n drop/dnd";
import Navbar from "../Components/Navbar/Navbar"
import { getAllUserMedia } from "../libs/prisma-media";
import Collection from "../Components/Media/Collection";
import Media from "../Components/Media/Media";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route";

const Index = async () => {

    const session = await getServerSession(authOptions)

    if (session != null) {
        const media = await getAllUserMedia(session.user?.email as string);
        return (
            <DnD>
                <Navbar />
                <Collection reactClass="e">
                    {media.map((vid, i: number) => {
                        return (
                            <Media
                                URL={vid.id}
                                name={vid.name}
                            />
                        )
                    })}
                </Collection>
            </DnD>
        );
    }
    
    if(session == null) {
        return (
            <DnD>
                <Navbar />
                <p>this is the landing page...</p>
            </DnD>
        );
    }

    // fix this mess

    //     useEffect(() => {

    //         console.log("hook")
    //         // if(session != null){
    //             const actionGetAllUserMedia = async (email: string) => {
    //             const media = await getAllUserMedia(email);
    //             return (
    //                 <div>
    //                     <Navbar />
    //                     <Collection reactClass="e">
    //                         {media.map((vid, i: number) => {
    //                             return (
    //                                 <Media 
    //                                     URL={vid.id}
    //                                     name={vid.name}
    //                                 />
    //                             )
    //                         })}
    //                     </Collection>
    //                 </div>
    //             )
    //             }
    //             actionGetAllUserMedia(session!.user?.email as string);
    //         // }
    //     },[])


    // if(session == null) {
    //     return <Navbar session={session}/>
    // }
}

export default Index