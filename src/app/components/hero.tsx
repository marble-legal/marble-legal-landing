"use client";
import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import Navbar from "./navbar";
import Animated from "@/components/animated";
import { useState } from "react";
import DemoDrawer from "@/components/demo-modal";
import { AnimatePresence } from "framer-motion";
import ContactUsModal from "@/components/contactus-modal";

const outfit = Outfit({ subsets: ["latin"] });

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleContactUs = () => setShowModal(!showModal);
  const handleDemo = () => setOpen(!open);

  return (
    <section id="hero" className="relative w-full bg-[#E7FEEF]">
      <ContactUsModal isOpen={showModal} handleClose={handleContactUs} />
      <DemoDrawer isOpen={open} handleClose={handleDemo} />

      <div className="relative z-10 w-full">
        {/* nav */}
        <Navbar />

        {/* hero */}
        <div className="flex flex-row max-md:flex-wrap-reverse justify-between items-center md:h-[80vh] md:pl-[8rem] md:pr-[2.5rem] px-4 py-8 pb-[5rem] gap-4">
          <div className="flex flex-col max-w-[550px] z-10">
            <Animated>
              <h1
                className={clsx(
                  outfit.className,
                  "max-md:justify-center font-black md:text-[4.875rem] max-md:text-center text-[2.375rem] capitalize leading-[100%] flex flex-row md:gap-4 gap-2 flex-wrap mb-[2rem]"
                )}
              >
                <span>Empower Your</span>
                <div className="flex flex-row gap-3">
                  <div className="relative w-fit h-full">
                    <span className="z-[2] relative">Legal</span>
                    <Image
                      src="/emphasize.svg"
                      alt="emphasize"
                      layout="intrinsic"
                      className="absolute -bottom-4 left-0 h-fit z-[1]"
                      width={200}
                      height={100}
                    />
                  </div>{" "}
                  <span>Journey</span>
                </div>
              </h1>
              <h2 className="leading-[160%] md:text-xl text-[0.875rem] max-md:text-center max-md:max-w-[290px] max-md:mx-auto">
                Lower legal costs and empower yourself with AI-enhanced legal
                self-help tools that put the law at your fingertips.
              </h2>
            </Animated>
            <div className="md:mt-[2.8125rem] mt-[1.5rem] flex flex-row gap-3 w-fit max-md:self-center">
              <Animated variant="moveFromBottom">
                <Button
                  size="large"
                  variant="primary"
                  onClick={handleContactUs}
                >
                  Contact us
                </Button>
              </Animated>
              <Animated variant="moveFromBottom" delay={0.1}>
                <Button
                  variant="secondary"
                  size="medium"
                  className="flex flex-row items-center gap-[0.625rem] h-full"
                  onClick={handleDemo}
                >
                  <Image
                    src="/play.svg"
                    alt="play"
                    width={20}
                    height={20}
                    // className="max-md:hidden"
                  />
                  See demo
                </Button>
              </Animated>
            </div>
          </div>

          {/* TODO: scale animation on image */}
          <Animated>
            <div className="relative w-full h-full max-h-[1000px] items-center flex flex-col justify-center md:mr-[12rem]">
              <Image
                src="/hero.svg"
                alt="hero"
                layout="responsive"
                width={700}
                height={10}
                // objectFit="none"
                className="z-[2] object-scale-down"
                priority
              />
              {/* glow */}
              <Image
                src="/hero-glow.svg"
                alt="glow"
                layout="fill"
                objectFit="contain"
                className="z-[1]"
              />
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}
