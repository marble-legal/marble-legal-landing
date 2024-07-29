import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";
import FeedbackCard from "@/components/feedback-card";

const outfit = Outfit({ subsets: ["latin"] });

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="pt-[6.625rem] w-full flex flex-col gap-[4.125rem] bg-[linear-gradient(180deg,#F0FFF3_0%,rgba(240,255,243,0.00)_100%)]"
    >
      <h3
        className={clsx(
          "font-black md:text-[4rem] text-[1.75rem] leading-[120%] max-w-[792px] text-center mx-auto",
          outfit.className
        )}
      >
        What Our Users Say
      </h3>
      <div className="flex flex-row gap-[1.5rem] overflow-auto md:px-16 px-4 pb-[6.625rem]">
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
      </div>
    </section>
  );
}
