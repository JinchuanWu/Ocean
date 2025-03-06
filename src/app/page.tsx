import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { dataList } from "@/data/data";
import { useMemo } from "react";

const dancingText = Dancing_Script({ weight: "400", subsets: ["latin"] });

export default function Home() {
  // Memoizing mapped items to prevent unnecessary re-renders
  const renderedItems = useMemo(() => 
    dataList.map((item) => (
      <div className="w-60 h-40 overflow-hidden" key={item.id}>
        <Link href={`/info/${item.id}`}>
          <Image 
            src={item.src}
            alt={"Item Image"} 
            width={240} 
            height={160} 
            className="object-cover w-full h-full"
            priority={false} // Lazy load images for performance
          />
        </Link>
      </div>
    )), 
    []
  );

  return (
    <div className="bg-[url('/main-bg.jpg')] bg-cover bg-center">
      <div className="flex flex-col items-center">
        <Image src="/Group.png" alt="Logo" width={128} height={128} />
        <h1 className={`${dancingText.className} text-white text-7xl mt-4`}>
          Catch a Fish
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center mt-6">
        {renderedItems}
      </div>
    </div>
  );
}