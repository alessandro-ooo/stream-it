import Text from "../Typography/Paragraphs";
import Image from "next/image";
import { TCard } from "./types";

const Card = (props: TCard) => {
    const { title, text, img, flex, blurred} = props;
    return(
        <div
            className={`flex ${flex} pt-24 w-full h-auto place-content-center`}
        >
            <Image
                className={`rounded-3xl ${(blurred == true ? "blur" : "")}`}
                src={`/${img}`}
                alt="gif" 
                width={400} 
                height={400}
            />

            <div
                className={`flex flex-col w-96 ${flex == "flex-row" ? "pl-20" : "pr-20"}`}
            >
                <Text
                    fsize="text-4xl"
                    fweight="font-bold"
                    extra="pb-2"
                >
                    {title}
                </Text>

                <Text
                    fsize="text-2xl"
                    fweight="font-normal"
                >
                    {text}
                </Text>
            </div>
        </div>
    )
}

export default Card;