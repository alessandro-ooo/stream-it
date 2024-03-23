import Image from "next/image";

const Carousel = () => {
    return (
        <div className="carousel bg-red-400">
            <div className="carousel-slide flex flex-row space-x-10">
                <Image
                    className="rounded-3xl" 
                    src="/1.gif" alt="gif" width={300} height={300} 
                />
                <Image
                    className="rounded-3xl" 
                    src="/2.gif" alt="gif" width={300} height={300} 
                />
                <Image
                    className="rounded-3xl" 
                    src="/3.gif" alt="gif" width={300} height={300} 
                />
                <Image
                    className="rounded-3xl" 
                    src="/4.gif" alt="gif" width={300} height={300} 
                />
                <Image
                    className="rounded-3xl" 
                    src="/5.gif" alt="gif" width={300} height={300} 
                />
            </div>
        </div>
    )
}

export default Carousel