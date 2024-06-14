"use client";
import HeaderIndex from "@/components/header/Index";
import { GaugeCircleDemo } from "@/components/loader/IndexLoader";
import Navbar from "@/components/navbar/Navbar";
import { BoxRevealDemo } from "@/components/revealbox/Index";
import { SkillIndex } from "@/components/skills";
import { motion, AnimatePresence } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

const pageTransition = {
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" },
};

export default function Home() {
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  useLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSecondComponent(true);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <Navbar />
      <AnimatePresence>
        {!showSecondComponent && (
          <motion.div
            key="first-component"
            variants={pageTransition}
            initial="out"
            animate="in"
            exit="out"
          >
            <GaugeCircleDemo />
          </motion.div>
        )}
        {showSecondComponent && (
          <main className="bg-gradient-to-r from-slate-500 to-stone-700 h-screen">
            <Navbar />
            <AnimatePresence mode="wait">
              <motion.div
                id="test1"
                className="h-full"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
                transition={{ duration: 0.5 }}
              >
                {/* <HeaderIndex /> */}
                <BoxRevealDemo />
              </motion.div>

              <motion.div
                id="test2"
                className="w-full h-[750%] bg-red-200"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
                transition={{ duration: 0.5 }}
              >
                {/* <h1>hello</h1> */}
                <SkillIndex />
              </motion.div>
            </AnimatePresence>
          </main>
        )}
      </AnimatePresence>
      {/* <HeaderIndex /> */}
    </>
  );
}
