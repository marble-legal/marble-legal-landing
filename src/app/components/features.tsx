"use client";
import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";
import Animated from "@/components/animated";
import ContactUsModal from "@/components/contactus-modal";
import { useState } from "react";

const outfit = Outfit({ subsets: ["latin"] });

export default function Features() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);

  return (
    <section
      id="features"
      className="md:py-[7.5rem] md:pb-[4rem] py-24 px-4 flex flex-col md:gap-[4rem] gap-[2rem]"
    >
      <ContactUsModal isOpen={showModal} handleClose={handleModal} />

      <Animated>
        <div className="flex flex-col gap-3 text-center items-center">
          <h3
            className={clsx(
              "font-black md:text-[4rem] text-[1.75rem] leading-[120%] max-w-[792px]",
              outfit.className
            )}
          >
            Comprehensive Legal Solutions
          </h3>
          {/* <p className="max-w-[536px] mx-auto">
            Need to get rid of language that says legal experts. I would just
            delete this entire subparagraph
          </p> */}
        </div>
      </Animated>

      <div className="flex flex-row flex-wrap md:gap-[1.5rem] gap-4 md:px-4 max-w-[1100px] content-center">
        <Card
          title="Real Estate Law"
          description="Expert advice for all your real estate legal needs, ensuring smooth transactions and compliance."
          image="/real-estate.svg"
        />
        <Card
          title="Family Law"
          description="Compassionate and professional guidance through family law matters, protecting your interests."
          image="/family-law.svg"
          delay={0.1}
        />
        <Card
          title="Employment Discrimination"
          description="Navigate complex employment discrimination cases with our experienced legal support."
          image="/employment.svg"
          delay={0.2}
        />
        <Card
          title="Personal Injury"
          description="Receive the compensation and justice you deserve with our dedicated personal injury services."
          image="/injury.svg"
          delay={0.3}
        />
        <Card
          title="Workers Compensation"
          description="Expert assistance to ensure you get the benefits and support you’re entitled to."
          image="/compensation.svg"
          delay={0.4}
        />
        <Card
          title="Business Formation"
          description="Assisting with the formation and growth of your business through expert legal counsel."
          image="/business.svg"
          delay={0.5}
        />
      </div>

      <Animated className="md:px-[1.75rem] md:py-[1.1875rem] w-full justify-center flex flex-row">
        <Button size="large" className="text-lg" onClick={handleModal}>
          Contact us
        </Button>
      </Animated>
    </section>
  );
}

function Card({ title, description, image, delay }: any) {
  return (
    <Animated
      delay={delay}
      variant="moveFromBottom"
      className="flex flex-col md:w-[calc(33.33%-1rem)] border border-[#D7D7D7] rounded-[1.5rem] px-[2rem] py-[2.375rem] items-center text-center flex-grow h-fit md:h-auto md:min-h-[356px]"
    >
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className="mb-[1.375rem]"
      />
      <h4
        className={clsx(
          "font-semibold text-[1.5rem] mb-[0.75rem]",
          outfit.className
        )}
      >
        {title}
      </h4>
      <p>{description}</p>
    </Animated>
  );
}
