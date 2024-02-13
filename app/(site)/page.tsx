"use client"
import { useEffect } from "react";
import DnD from "../Components/Drag n drop/dnd";
import Navbar from "../Components/Navbar/Navbar"
import { useSession } from "next-auth/react";
import { getAllUserMedia } from "../libs/prisma-media";
import Collection from "../Components/Media/Collection";
import Media from "../Components/Media/Media";

const Index = () => {
    // fix this mess
    const { data: session } = useSession();
    
        useEffect(() => {
            console.log("hook")
            // if(session != null){
                const actionGetAllUserMedia = async (email: string) => {
                const media = await getAllUserMedia(email);
                return (
                    <div>
                        <Navbar session={session}/>
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
                    </div>
                )
                }
                actionGetAllUserMedia(session!.user?.email as string);
            // }
        },[])
    

    if(session == null) {
        return <Navbar session={session}/>
    }
}

export default Index