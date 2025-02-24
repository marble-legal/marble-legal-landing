/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Animated from "@/components/animated";

const outfit = Outfit({ subsets: ["latin"] });

export default function About() {
  const firstSetRef = useRef<HTMLDivElement | null>(null);
  const secondSetRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Select the children elements of both sets
    const firstImages = firstSetRef.current?.children;
    const secondImages = secondSetRef.current?.children;

    if (firstImages && secondImages) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      // Step 1: Fade out the first set while fading in the second set
      tl.to(firstImages, {
        duration: 4,
        opacity: 0, // Fade out first set
        ease: "power1.inOut",
      })
        .to(
          secondImages,
          {
            duration: 4,
            opacity: 1, // Fade in second set
            ease: "power1.inOut",
          },
          "-=4" // Start fading in second set during fade-out of the first
        )

        // Step 2: Fade out the second set while fading in the first set
        .to(secondImages, {
          duration: 4,
          opacity: 0, // Fade out second set
          ease: "power1.inOut",
        })
        .to(
          firstImages,
          {
            duration: 4,
            opacity: 1, // Fade in first set
            ease: "power1.inOut",
          },
          "-=4" // Start fading in first set during fade-out of the second
        );

      // Add grid opacity animation to the timeline
      tl.to(
        gridRef.current,
        {
          duration: 2,
          opacity: 0.5, // Fade to 0.5 opacity
          ease: "power1.inOut",
        },
        0 // Start grid animation from the beginning
      ).to(gridRef.current, {
        duration: 2,
        opacity: 1, // Fade back to full opacity
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col gap-[1.875rem] md:h-[90dvh] items-center justify-center w-full relative max-md:py-[7.875rem] max-md:pb-[12rem] max-md:px-4 overflow-hidden"
    >
      {/* First Set: Green, Red, Green */}
      <div
        ref={firstSetRef}
        className="flex flex-row absolute -bottom-32 left-0 w-full h-full max-md:hidden items-end justify-center opacity-1"
      >
        <img
          src="/green-hue-bg.svg"
          alt="background"
          className="w-[800px] mr-[-20rem] opacity-1"
        />
        <img
          src="/red-hue-bg.svg"
          alt="background"
          className="w-[800px] mr-[-20rem] opacity-1"
        />
        <img
          src="/green-hue-bg.svg"
          alt="background"
          className="w-[800px] opacity-1"
        />
      </div>

      {/* Second Set: Red, Green, Red */}
      <div
        ref={secondSetRef}
        className="flex flex-row absolute -bottom-32 left-0 w-full h-full max-md:hidden items-end justify-center opacity-1"
      >
        <img
          src="/red-hue-bg.svg"
          alt="background"
          className="w-[800px] mr-[-20rem] opacity-0"
        />
        <img
          src="/green-hue-bg.svg"
          alt="background"
          className="w-[800px] mr-[-20rem] opacity-0"
        />
        <img
          src="/red-hue-bg.svg"
          alt="background"
          className="w-[800px] opacity-0"
        />
      </div>

      <img
        src="/grid.svg"
        alt="background"
        className="absolute bottom-16 left-[50%] transform translate-x-[-50%] max-md:hidden"
        ref={gridRef}
      />

      <Image
        src="/about-mobile-bg.svg"
        alt="background"
        layout="intrinsic"
        width={1920}
        height={1080}
        objectFit="none"
        className="absolute bottom-0 left-0 md:hidden"
        priority
      />
      <Animated>
        <div className="flex items-center justify-center lg:justify-start flex-wrap">
          <div className="flex flex-col gap-[1.875rem] text-center">
            <h3
              className={clsx(
                "font-black md:text-[4rem] text-[1.75rem] leading-[120%]",
                outfit.className
              )}
            >
              About <span className="text-[#4AA064]">Marble</span>
            </h3>
            <p className="leading-[180%] max-w-[530px] text-center lg:text-left">
              At Marble, we are dedicated to revolutionizing the legal landscape
              by combining expert legal advice with advanced technology. Our
              mission is to make legal services more accessible, affordable, and
              user-friendly for individuals and businesses alike. By leveraging
              artificial intelligence and cutting-edge strategies, we empower
              customers to reduce legal costs and take control of their legal
              needs through self-help resources.
            </p>
          </div>
          <div className="hidden lg:block mx-16 w-[1px] h-[332px] bg-[#B9D0C0]" />
          <div className="mt-12 lg:mt-0 flex flex-col w-full lg:w-[unset] items-center gap-[1.875rem]">
            <div className="text-lg font-semibold leading-[32.4px]">
              A proud portfolio company of
            </div>
            <Image
              src="/techstars.svg"
              alt="about"
              width={0}
              height={0}
              className="w-[289px] lg:w-full md:h-[215px]"
            />
          </div>
        </div>
      </Animated>
    </section>
  );
}
