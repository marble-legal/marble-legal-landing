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
          <FaqCard
            title="What services does Marble offer?"
            description="Marble Legal provides a range of services including real estate law, family law, employment discrimination cases, personal injury claims, workers' compensation, and business entity formation."
          />
        </Animated>
        <Animated variant="moveFromBottom">
          <FaqCard
            title="How does the AI-powered chat feature work?"
            description="Our AI-powered chat interface allows you to engage in real-time conversations with our legal AI, providing instant answers and guidance for your legal questions."
          />
        </Animated>
        {/* <Animated variant="moveFromBottom">
          <FaqCard
            title="Can I upload existing contracts for analysis?"
            description="Yes, you can upload your existing contracts, and our AI will analyze them to extract vital information and provide detailed insights."
          />
        </Animated>
        <Animated variant="moveFromBottom">
          <FaqCard
            title="Does using Marble create an attorney-client relationship?"
            description="No. Any and all attorney-client relationships are created if you choose to hire an attorney."
          />
        </Animated> */}
        <Animated variant="moveFromBottom">
          <FaqCard
            title="What is the cost of using Marble Legal compared to traditional attorneys?"
            description="Traditional attorneys charge an average of $327 per hour, while Marble Legal offers more affordable, fixed-rate services, saving you both time and money."
          />
        </Animated>
        <Animated variant="moveFromBottom">
          <FaqCard
            title="Can I export documents to Microsoft Word?"
            description="Yes, you can seamlessly export your contracts and legal documents to Microsoft Word for easy editing and customization."
          />
        </Animated>
        <Animated variant="moveFromBottom">
          <FaqCard
            title="How does Marble help with business entity formation?"
            description="We simplify the process by gathering essential details, handling payments, and notifying licensed attorneys to process your business entity formation request efficiently."
          />
        </Animated>
        <Animated variant="moveFromBottom">
          <FaqCard
            title="Is there a free trial available for Marble services?"
            description="Yes, we offer a 7-day free trial for you to experience our services and see how they can benefit your legal needs."
          />
        </Animated>
      </div>
    </section>
  );
}
