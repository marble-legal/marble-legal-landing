"use client";
import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";
import Animated from "@/components/animated";

const outfit = Outfit({ subsets: ["latin"] });

export default function Contract() {
  return (
    <section
      id="edit-contract"
      className="w-full flex flex-row max-md:flex-wrap md:px-[9.375rem] md:py-[7.5rem] px-4 py-[3.75rem] relative md:gap-[5.625rem] gap-4"
    >
      <Image
        src="/edit-hue.svg"
        alt="background"
        layout="intrinsic"
        width={1920}
        height={1080}
        objectFit="none"
        className="absolute bottom-0 left-0 z-[0]"
        priority
      />
      <Animated className="flex flex-row items-center flex-wrap">
        <div className="flex flex-col gap-[1.8125rem]">
          <h3
            className={clsx(
              "font-black md:text-[4rem] text-[1.75rem] leading-[120%] max-w-[792px] max-md:text-center",
              outfit.className
            )}
          >
            Effortlessly Edit Your Contracts
          </h3>
          <p className="leading-[180%] md:text-[1.25rem] max-w-[600px] text-[0.875rem] max-md:text-center">
            With Marble, you can easily export your contracts and legal
            documents into Microsoft Word, allowing you to edit and customize
            them as needed. Enjoy the flexibility and control over your legal
            documents.
          </p>
        </div>

        <Image
          src="/edit-section.svg"
          alt="edit-section"
          width={400}
          height={400}
          className="z-[1] max-md:mt-[2.5rem] max-md:w-[280px] max-md:mx-auto"
        />
      </Animated>
    </section>
  );
}
