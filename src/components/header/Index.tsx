"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "./animated-grid-pattern";
import Image from "next/image";
import img from "../../../public/img.jpg";
import { BoxRevealDemo } from "../revealbox/Index";

const HeaderIndex = () => {
  return (
    // <div className="relative flex h-full w-full max-w-[full] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
    //   <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
    //     Animated Grid Pattern
    //   </p>
    //   <AnimatedGridPattern
    //     numSquares={30}
    //     maxOpacity={0.5}
    //     duration={3}
    //     repeatDelay={1}
    //     className={cn(
    //       "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
    //       "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
    //     )}
    //   />
    // </div>
    <section className="pt-24">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <BoxRevealDemo />
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={img} alt="mockup" className="rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HeaderIndex;
