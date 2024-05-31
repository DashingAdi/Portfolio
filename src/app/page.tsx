"use client"

import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
        <Hero />
      </div>
    </main>
  );
}
