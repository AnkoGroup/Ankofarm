import Image from "next/image";
import coming_soon from '@/public/ankofarm_coming_soon.png'

export default function Header() {

    return (
        <div className="relative pb-[1rem] pl-[1rem] pr-[1rem] h-[calc(100vh-64px)] rounded-xl overflow-hidden" >
            <Image src={coming_soon} className="rounded-[30px] h-full" alt="header"/>
            <div className="absolute p-[3rem] top-0 w-full md:w-1/2">
                <h1 className="">
                
                </h1>
                <p className="">

                </p>
                <div className="">

                </div>
            </div>
        </div>
    );

    
}