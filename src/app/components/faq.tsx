import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";

const outfit = Outfit({ subsets: ["latin"] });

export default function Faqs() {
  return (
    <section
      id="faqs"
      className="md:py-[8.25rem] py-8 flex flex-col gap-[3.75rem]"
    >
      <h3
        className={clsx(
          "font-black md:text-[4rem] text-[2.75rem] leading-[120%] max-w-[792px] text-center",
          outfit.className
        )}
      >
        FAQs
      </h3>
      <div className="flex flex-col gap-4 max-md:px-4">
        <FaqCard title="What services does Marble offer?" />
        <FaqCard title="How does the AI-powered chat feature work?" />
        <FaqCard title="Can I upload existing contracts for analysis?" />
        <FaqCard
          title="Does using Marble create an attorney-client relationship?"
          description="No. Any and all attorney-client relationships are created if you choose to hire an attorney."
        />
        <FaqCard title="How does Marble help with business entity formation?" />
        <FaqCard title="Is there a free trial available for Marble services?" />
      </div>
    </section>
  );
}
