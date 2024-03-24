import DnD from "../Components/Drag n drop/dnd";
import Navbar from "../Components/Navbar/Navbar"
import { getAllUserMedia } from "../libs/prisma-media";
import Collection from "../Components/Media/Collection";
import Media from "../Components/Media/Media";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route";
import VisibilityForm from "../Components/Forms/VisibilityForm";
import Modal from "../Components/Modal/Modal";
import Carousel from "../Components/Carousel/Carousel";
import Text from "../Components/Typography/Paragraphs";
import Image from "next/image";
import Card from "../Components/Card/Card";

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

    if (session == null) {
        return (
            <DnD>
                <Navbar />
                <div
                    className="w-full pt-12 pb-24"
                >
                    <h1
                        className="font-bold text-gray-900 text-7xl text-center pb-20"
                    >
                        Open source video hosting
                    </h1>
                    <div
                        className="flex flex-row place-content-center"
                    >
                        <div
                            className="absolute bg-gray-50 z-50 place-self-center flex flex-col place-content-center pb-24 pt-24 pr-32 pl-32 border border-gray-400 rounded-2xl"
                        >
                            <Text
                                fweight="font-semibold"
                                fsize="text-lg"
                                extra="text-center text-gray-900"
                            >
                                Drag n Drop your clip here
                            </Text>

                            <Text
                                fweight="font-normal"
                                fsize="text-lg"
                                extra="pt-2.5 pb-2.5 text-center text-gray-900"
                            >
                                No credit card or account is required.
                            </Text>
                            <Image
                                src="/Cloud_Upload.svg"
                                alt="icon"
                                height={100}
                                width={100}
                                className="place-self-center"
                            />
                        </div>
                        <Carousel />
                    </div>
                </div>

                <Card 
                    title="Protect your clips" 
                    text="With stream-it you can protect your clips with passwords or owner-only privileges at any time, for free." 
                    img="1.gif" 
                    flex="flex-row"
                    blurred                
                />
                <Card 
                    title="Stored forever" 
                    text="We will never charge you money for space and will never delete your clips because they are getting old." 
                    img="2.gif" 
                    flex="flex-row-reverse"                
                />

                
            </DnD>
        );
    }
}

export default Index