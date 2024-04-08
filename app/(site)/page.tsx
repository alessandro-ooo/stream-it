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
import Footer from "../Components/Footer/Footer";
import Pagination from "../Components/Pagination/Pagination";

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
};

const Index = async ({ searchParams }: SearchParamProps) => {
    const session = await getServerSession(authOptions);
    const visibilityModal = searchParams?.visibility;
    const URL = searchParams?.URL, page = searchParams?.page

    if (session != null) {
        const media = await getAllUserMedia(session.user?.email as string, (page == undefined ? 1 : page as unknown as number));
        return (
            <div>
                {
                    visibilityModal &&
                    <div className="flex items-center justify-center space-y-24 z-50 h-screen w-full absolute transition bg-gray-900 ease-in-out delay-500">
                        <Modal>
                            <VisibilityForm
                                URL={URL as string}
                                OwnerCheck={false}
                            />
                        </Modal>
                    </div>
                }
                <DnD>
                    <Navbar />
                    <Collection>
                        {media.map((vid) => {
                            return (
                                <Media
                                    URL={vid.url}
                                    name={vid.name}
                                />
                            )
                        })}
                    </Collection>

                    <Pagination current={(page == undefined ? 1 : parseInt(page))} pages={10} />
                </DnD>
            </div>
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

                <Footer>
                    <div
                        className="flex flex-col space-y-2"
                    >
                        <Text
                            fweight="font-semibold"
                            fsize="text-regular"
                            extra="text-gray-900"
                        >
                            Github
                        </Text>

                        <Text
                            fweight="font-normal"
                            fsize="text-regular"
                            extra="text-gray-900"
                        >
                            <a>Documentation</a>
                        </Text>

                        <Text
                            fweight="font-normal"
                            fsize="text-regular"
                            extra="text-gray-900"
                        >
                            <a>How to set up AWS S3 Bucket</a>
                        </Text>
                    </div>

                    <div
                        className="flex flex-col space-y-2"
                    >
                        <Text
                            fweight="font-semibold"
                            fsize="text-regular"
                            extra="text-gray-900"
                        >
                            Technologies
                        </Text>

                        <Text
                            fweight="font-normal"
                            fsize="text-regular"
                            extra="text-gray-900"
                        >
                            <a>NextJS 14.1</a>
                        </Text>

                        <Text
                            fweight="font-normal"
                            fsize="text-regular"
                            extra="text-gray-900"
                        >
                            <a>Prisma ORM</a>
                        </Text>

                        <Text
                            fweight="font-normal"
                            fsize="text-regular"
                            extra="text-gray-900"
                        >
                            <a>TailwindCSS</a>
                        </Text>

                        <Text
                            fweight="font-normal"
                            fsize="text-regular"
                            extra="text-gray-900"
                        >
                            <a>BcryptJS</a>
                        </Text>

                        <Text
                            fweight="font-normal"
                            fsize="text-regular"
                            extra="text-gray-900"
                        >
                            <a>AWS S3 Bucket</a>
                        </Text>
                    </div>

                    <div
                        className="flex flex-col space-y-2"
                    >
                        <Text
                            fweight="font-semibold"
                            fsize="text-regular"
                            extra="text-gray-900"
                        >
                            Creator
                        </Text>
                        
                        <Text
                            fweight="font-normal"
                            fsize="text-regular"
                            extra="text-gray-900"
                        >
                            <a>Alessandro Buonocore</a>
                        </Text>
                    </div>
                </Footer>
            </DnD>
        );
    }
}

export default Index