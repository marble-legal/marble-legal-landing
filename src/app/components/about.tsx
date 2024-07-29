import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";

const outfit = Outfit({ subsets: ["latin"] });

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col gap-[1.875rem] md:h-[80dvh] items-center justify-center w-full relative max-md:py-[7.875rem] max-md:px-4"
    >
      <Image
        src="/about-bg.svg"
        alt="background"
        layout="intrinsic"
        width={1920}
        height={1080}
        objectFit="none"
        className="absolute bottom-0 left-0"
        priority
      />
      <h3
        className={clsx(
          "font-black md:text-[4rem] text-[2.75rem] leading-[120%]",
          outfit.className
        )}
      >
        About <span className="text-[#4AA064]">Marble</span>
      </h3>
      <p className="leading-[180%] max-w-[530px] text-center">
        At Marble, we are dedicated to revolutionizing the legal landscape by
        combining expert legal advice with advanced technology. Our mission is
        to make legal services more accessible, affordable, and user-friendly
        for individuals and businesses alike. By leveraging artificial
        intelligence and cutting-edge strategies, we empower customers to reduce
        legal costs and take control of their legal needs through self-help
        resources.
      </p>
    </section>
  );
}
