"use client";
import HeaderIndex from "@/components/header/Index";
import { GaugeCircleDemo } from "@/components/loader/IndexLoader";
import Navbar from "@/components/navbar/Navbar";
import { BoxRevealDemo } from "@/components/revealbox/Index";
import { SkillIndex } from "@/components/skills/SkillIndex";
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
          <main className="bg-slate-600 ">
            <Navbar />
            <AnimatePresence mode="wait">
              <motion.div
                id="test1"
                className="h-screen gradientBackground"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
                transition={{ duration: 0.5 }}
              >
                <HeaderIndex />
                {/* <BoxRevealDemo /> */}
              </motion.div>

              <motion.div
                id="test2"
                className="h-screen "
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
                transition={{ duration: 0.5 }}
              >
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
