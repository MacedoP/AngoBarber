import Image from "next/image";

const Banner = () => {
    return ( 
        <div className="relative w-full h-[150px] mt-0 p-2">
            <Image src="/banner04.jpg" fill className="object-cover rounded-xl w-[60%]" alt="banner img" />
        </div>
     );
}
 
export default Banner;