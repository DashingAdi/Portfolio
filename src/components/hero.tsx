import React from "react";
import { AuroraBackground } from "@/components/ui/aurora";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const words = ["Slaying server demons" , "Optimizing data fortresses", "Securing data realms", "Safeguarding data sanctuaries"];

const Hero = () => {
  return (
    <div>
      <div>
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              <FlipWords words={words} />
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              Hello I'm Aditya, a &nbsp;
              <Highlight className="text-black dark:text-white">Backend Developer</Highlight> 
              &nbsp; based in India.
            </div>
            
          </motion.div>
        </AuroraBackground>
      </div>
    </div>
  );
};

export default Hero;
