import DnD from "../Components/Drag n drop/dnd";
import Navbar from "../Components/Navbar/Navbar"
import { getAllUserMedia } from "../libs/prisma-media";
import Collection from "../Components/Media/Collection";
import Media from "../Components/Media/Media";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route";
import VisibilityForm from "../Components/Forms/VisibilityForm";
import Modal from "../Components/Modal/Modal";

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
  };
  
const Index = async ({ searchParams }: SearchParamProps) => {
    const session = await getServerSession(authOptions);
    const visibilityModal = searchParams?.visibility;
    const URL = searchParams?.URL;

    if (session != null) {
        const media = await getAllUserMedia(session.user?.email as string);
        return (
            <DnD>
                {
                    visibilityModal && 
                        <Modal>
                            <VisibilityForm 
                                URL={URL as string} 
                                OwnerCheck={false}
                            />
                        </Modal>
                }
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
}

export default Index