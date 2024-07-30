"use client";
import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";
import { useState } from "react";
import ContactUsModal from "@/components/contactus-modal";

const outfit = Outfit({ subsets: ["latin"] });

export default function Contactus() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);

  return (
    <section id="contact-us" className="px-4 w-full">
      <ContactUsModal isOpen={showModal} handleClose={handleModal} />
      <div className="py-[5.4375rem] bg-[#4AA064] rounded-[22px] w-full flex flex-col items-center content-center">
        <h4
          className={clsx(
            "md:text-[4rem] text-[1.75rem] max-md:w-[280px] font-extrabold capitalize leading-[120%] text-white text-center mb-[0.8125rem]",
            outfit.className
          )}
        >
          Want to know more?
        </h4>
        <p className="max-w-[753px] text-white leading-[160%] md:text-[1.25rem] px-4 opacity-80 text-base mx-auto text-center mb-[2.5625rem]">
          Get in touch with us to learn more about how Marble can revolutionize
          your legal processes. We&apos;re here to answer your questions and
          provide the information you need.
        </p>
        <Button
          size="large"
          className="md:text-[1.25rem]"
          onClick={handleModal}
        >
          Contact us
        </Button>
      </div>
    </section>
  );
}
