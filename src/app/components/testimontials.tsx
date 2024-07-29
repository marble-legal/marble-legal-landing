import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";

const outfit = Outfit({ subsets: ["latin"] });

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="pt-[6.625rem] w-full flex flex-col gap-[4.125rem] bg-[linear-gradient(180deg,#F0FFF3_0%,rgba(240,255,243,0.00)_100%)]"
    >
      <h3
        className={clsx(
          "font-black text-[4rem] leading-[120%] max-w-[792px] text-center mx-auto",
          outfit.className
        )}
      >
        What Our Users Say
      </h3>
      <div className="flex flex-row gap-[1.5rem] overflow-auto px-16 pb-[6.625rem]">
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

function FeedbackCard() {
  return (
    <div className="relative p-[1.75rem] border-[3px] border-white rounded-[16px] shadow-[3px_14px_26px_0px_rgba(30,109,43,0.06)] bg-[rgba(255,255,255,0.33)] min-w-[375px] h-[314px]">
      <p className="text-[#575757]">
        Thanks to Marble, navigating complex legal issues has become much
        easier. Their innovative approach and professional support have been
        invaluable to our company.
      </p>
      <div className="absolute bottom-[1.75rem] flex flex-row gap-3 items-center">
        <Image
          src="/logo.svg"
          alt="user"
          height={62}
          width={62}
          className="rounded-full"
        />
        <div className="flex flex-col text-sm leading-[120%]">
          <span className="text-[#7E7777]">Account Manager</span>
          <span className="text-[#131212] font-bold">Medical Device</span>
        </div>
      </div>
    </div>
  );
}
