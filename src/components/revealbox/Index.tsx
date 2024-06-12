"use client";
import BoxReveal from "./animated-grid-pattern";

// import { Button } from "@/components/ui/button";

export function BoxRevealDemo() {
  return (
    <div className="h-full max-w-screen-xl w-full items-center justify-center overflow-hidden">
      <div className="ml-8 mt-20 lg:ml-48">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3.5rem] font-semibold">
            Saurabh Dantani<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
            UI library for{" "}
            <span className="text-[#5046e6]">Design Engineers</span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-[1.5rem]">
            <p>
              -&gt; 20+ free and open-source animated components built with
              <span className="font-semibold text-[#5046e6]"> React</span>,
              <span className="font-semibold text-[#5046e6]"> Typescript</span>,
              <span className="font-semibold text-[#5046e6]">
                {" "}
                Tailwind CSS
              </span>
              , and
              <span className="font-semibold text-[#5046e6]">
                {" "}
                Framer Motion
              </span>
              . <br />
              -&gt; 100% open-source, and customizable. <br />
            </p>
          </div>
        </BoxReveal>
      </div>
    </div>
  );
}
