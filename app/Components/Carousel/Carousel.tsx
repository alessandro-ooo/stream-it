import Image from "next/image";

const Carousel = () => {
    return (
        <div 
            className="z-10 w-full carousel"
        >
            <div className="carousel-slide flex flex-row space-x-10">
                <Image
                    className="rounded-3xl"
                    src="/1.gif" alt="gif" width={300} height={220}
                />
                <Image
                    className="rounded-3xl"
                    src="/2.gif" alt="gif" width={300} height={220}
                />
                <Image
                    className="rounded-3xl"
                    src="/3.gif" alt="gif" width={300} height={220}
                />
                <Image
                    className="rounded-3xl"
                    src="/4.gif" alt="gif" width={300} height={220}
                />
                <Image
                    className="rounded-3xl"
                    src="/5.gif" alt="gif" width={300} height={220}
                />
                <Image
                    className="rounded-3xl"
                    src="/6.gif" alt="gif" width={300} height={220}
                />
                <Image
                    className="rounded-3xl"
                    src="/7.gif" alt="gif" width={300} height={220}
                />
                <Image
                    className="rounded-3xl"
                    src="/8.gif" alt="gif" width={300} height={300}
                />
                <Image
                    className="rounded-3xl"
                    src="/9.gif" alt="gif" width={300} height={300}
                />
            </div>
        </div>

    )
}

export default Carousel