"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LightningIcon = (props: any) => {
  return (
    <svg
      width="20px"
      fill="#757575"
      version="1.1"
      id="Capa_1"
      viewBox="0 0 560.317 560.316"
      stroke="#757575"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M207.523,560.316c0,0,194.42-421.925,194.444-421.986l10.79-23.997c-41.824,12.02-135.271,34.902-135.57,35.833 C286.96,122.816,329.017,0,330.829,0c-39.976,0-79.952,0-119.927,0l-12.167,57.938l-51.176,209.995l135.191-36.806 L207.523,560.316z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

const App = () => {
  return (
    <section className="relative bg-main bg-cover bg-no-repeat w-full h-screen mx-auto">
      <div className="absolute inset-0 mx-auto sm:mx-16 px-6 flex flex-row items-start gap-12">
        <div>
          <h6 className="font-mono flex text-[#757575] lg:mt-12 mt-4">
            <LightningIcon /> Save Money
          </h6>
          <h1 className="font-mono font-black text-primary max-w-4xl lg:text-[50px] sm:text-[40px] xs:text-[30px] text-[25px] lg:leading-[85px]">
            Split and Share expenses with{" "}
            <span className="bg-gradient-to-r from-[#294f4a] via-[#3f8e83] to-[#21c2af] text-transparent bg-clip-text">
              friends and family
            </span>
          </h1>
          <p className="font-mono max-w-2xl mt-5 xs:tracking-tighter tracking-wider lg:text-xl md:text-lg sm:text-sm text-xs">
            Simplify group expenses effortlessly. This user-friendly application
            makes bill splitting, expense tracking, and payments coordination
            seamless. Gain financial clarity and peace of mind with Xplits
          </p>
          <Button className="rounded-md lg:mt-16 md:mt-12 mt-10" variant="default"><p className="max-w-3xl"><Link href="/signup">Open new account and start managing</Link></p></Button>
          <p className="font-mono max-w-2xl lg:mt-14 md:mt-12 sm:mt-10 xs:mt-8 mt-6 tracking-tighter text-4xl">😃😄😋🤩</p>
          <p className="font-mono max-w-2xl tracking-tighter mt-2">The best application to manage your expenses</p>
        </div>
        
      </div>
    </section>
  );
};

export default App;
