"use client";
import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";
import Animated from "@/components/animated";

const outfit = Outfit({ subsets: ["latin"] });

export default function Faqs() {
  return (
    <section
      id="faqs"
      className="md:py-[8.25rem] py-8 flex flex-col gap-[3.75rem]"
    >
      <Animated>
        <h3
          className={clsx(
            "font-black md:text-[4rem] text-[1.75rem] leading-[120%] max-w-[792px] text-center",
            outfit.className
          )}
        >
          FAQs
        </h3>
      </Animated>
      <div className="flex flex-col gap-4 max-md:px-4">
        <Animated variant="moveFromBottom">
          <FaqCard title="What services does Marble offer?" />
        </Animated>
        <Animated variant="moveFromBottom">
          <FaqCard title="How does the AI-powered chat feature work?" />
        </Animated>
        <Animated variant="moveFromBottom">
          <FaqCard title="Can I upload existing contracts for analysis?" />
        </Animated>
        <Animated variant="moveFromBottom">
          <FaqCard
            title="Does using Marble create an attorney-client relationship?"
            description="No. Any and all attorney-client relationships are created if you choose to hire an attorney."
          />
        </Animated>
        <Animated variant="moveFromBottom">
          <FaqCard title="How does Marble help with business entity formation?" />
        </Animated>
        <Animated variant="moveFromBottom">
          <FaqCard title="Is there a free trial available for Marble services?" />
        </Animated>
      </div>
    </section>
  );
}
