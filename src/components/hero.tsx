import React from "react";
import { AuroraBackground } from "@/components/ui/aurora";
import { motion } from "framer-motion";

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
            <div className="pl-10 pr-10 text-3xl md:text-7xl font-bold dark:text-white text-center">
              Slaying server demons and optimizing data fortresses.
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              Hello I'm Aditya, a Backend Developer based in India.
            </div>
            
          </motion.div>
        </AuroraBackground>
      </div>
    </div>
  );
};

export default Hero;
