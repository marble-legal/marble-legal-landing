import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";
import ProcessComponent from "@/components/process-components";

const outfit = Outfit({ subsets: ["latin"] });

export default function Lara() {
  return (
    <section id="lara" className="w-full px-4">
      <div className="bg-[#E6FDEE] md:py-[7.5rem] py-10 max-md:px-4 w-full rounded-[30px] flex flex-col gap-[4rem]">
        <div className="flex flex-col gap-[1.8125rem]">
          <h3
            className={clsx(
              "font-black md:text-[4rem] text-[2rem] leading-[120%] max-w-[792px] text-center mx-auto",
              outfit.className
            )}
          >
            <span className="text-[#4AA064]">LARA,</span> Your AI Legal
            Assistant Coming Soon!
          </h3>
          <p className="leading-[180%] md:text-[1.25rem] text-base max-w-[792px] text-center mx-auto">
            Get ready for LARA, the AI-powered legal assistant transforming
            legal tasks. From contract creation to business formation, LARA
            provides the tools and guidance to navigate the legal landscape with
            ease. Below are some key features:
          </p>
        </div>
        <ProcessComponent />
        <Button size="large">Join the waitlist</Button>
      </div>
    </section>
  );
}
