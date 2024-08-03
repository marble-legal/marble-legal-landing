"use client";
import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";
import ProcessComponent from "@/components/process-components";
import Animated from "@/components/animated";
import ContactUsModal from "@/components/contactus-modal";
import { useState } from "react";

const outfit = Outfit({ subsets: ["latin"] });

export default function Lara() {
  const [showModal, setShowModal] = useState(false);
  const handleContactUs = () => setShowModal(!showModal);

  return (
    <section id="lara" className="w-full px-4">
      <ContactUsModal isOpen={showModal} handleClose={handleContactUs} />

      <div className="bg-[#E6FDEE] md:py-[7.5rem] py-10 max-md:px-4 w-full rounded-[30px] flex flex-col gap-[4rem]">
        <Animated className="flex flex-col gap-[1.8125rem]">
          <h3
            className={clsx(
              "font-black md:text-[4rem] text-[1.75rem] leading-[120%] max-w-[792px] text-center mx-auto",
              outfit.className
            )}
          >
            <span className="text-[#4AA064]">LARA,</span> Your AI Legal
            Assistant Coming Soon!
          </h3>
          <p className="leading-[180%] md:text-[1.25rem] text-[0.875rem] max-w-[792px] text-center mx-auto">
            Get ready for LARA, the AI-powered legal assistant transforming
            legal tasks. From contract creation to business formation, LARA
            provides the tools and guidance to navigate the legal landscape with
            ease. Below are some key features:
          </p>
        </Animated>
        <div className="max-md:hidden">
          <ProcessComponent />
        </div>
        <MobileProcess />

        <Animated className="w-full flex flex-row justify-center">
          <Button
            size="large"
            className="max-md:px-[1.75rem] max-md:py-[0.875rem] max-md:text-[1.25rem]"
            onClick={handleContactUs}
          >
            Join the waitlist
          </Button>
        </Animated>
      </div>
    </section>
  );
}

function MobileProcess() {
  return (
    <div className="flex flex-row gap-[1.25rem]">
      {/* <Image
        loading="lazy"
        src="/mobile-line.svg"
        alt="line"
        height={400}
        width={2}
        className="absolute left-[11px] h-full"
      /> */}

      <div className="md:hidden flex flex-col gap-4">
        <div className="flex flex-col gap-4 relative">
          <Image
            loading="lazy"
            src="/mobile-line.svg"
            alt="line"
            height={400}
            width={4}
            className="absolute left-[11.5px] h-full top-[20px]"
          />
          <div className="flex flex-col gap-2.5 w-fit">
            <div className="flex flex-row items-center gap-[1.25rem]">
              <div className="bg-[#DCD5C6] p-2 rounded-full">
                <div className="h-3 w-3 bg-[#B85042] rounded-full"></div>
              </div>
              <h3 className="text-base font-[700]">AI-Powered Chat</h3>
            </div>
            <h4 className="pl-[3rem] text-[0.875rem] leading-[160%]">
              Engage in real-time conversations for instant legal guidance.
            </h4>
          </div>
          <div className="ml-8 process_img-wrapper !p-[0.625rem]">
            <Image
              loading="lazy"
              src="/ai-chat.svg"
              alt="We use AI to help your legal tasks"
              height={400}
              width={500}
              className="process_img !rounded-[1.625rem]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 relative">
          <Image
            loading="lazy"
            src="/mobile-line.svg"
            alt="line"
            height={400}
            width={4}
            className="absolute left-[11.5px] h-full top-[20px]"
          />
          <div className="flex flex-col gap-2.5 w-fit">
            <div className="flex flex-row items-center gap-[1.25rem]">
              <div className="bg-[#DCD5C6] p-2 rounded-full">
                <div className="h-3 w-3 bg-[#B85042] rounded-full"></div>
              </div>
              <h3 className="text-base font-[700]">AI-Powered Chat</h3>
            </div>
            <h4 className="pl-[3rem] text-[0.875rem] leading-[160%]">
              Engage in real-time conversations for instant legal guidance.
            </h4>
          </div>
          <div className="ml-8 process_img-wrapper !p-[0.625rem]">
            <Image
              loading="lazy"
              src="/contract-drafting.svg"
              alt="Effortlessly generate customized contracts"
              height={400}
              width={500}
              className="process_img !rounded-[1.625rem]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 relative">
          <Image
            loading="lazy"
            src="/mobile-line.svg"
            alt="line"
            height={400}
            width={4}
            className="absolute left-[11.5px] h-full top-[20px]"
          />
          <div className="flex flex-col gap-2.5 w-fit">
            <div className="flex flex-row items-center gap-[1.25rem]">
              <div className="bg-[#DCD5C6] p-2 rounded-full">
                <div className="h-3 w-3 bg-[#B85042] rounded-full"></div>
              </div>
              <h3 className="text-base font-[700]">AI-Powered Chat</h3>
            </div>
            <h4 className="pl-[3rem] text-[0.875rem] leading-[160%]">
              Engage in real-time conversations for instant legal guidance.
            </h4>
          </div>
          <div className="ml-8 process_img-wrapper !p-[0.625rem]">
            <Image
              loading="lazy"
              src="/contract-analysis.svg"
              alt="Effortlessly generate customized contracts"
              height={400}
              width={500}
              className="process_img !rounded-[1.625rem]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 relative">
          <div className="flex flex-col gap-2.5 w-fit">
            <div className="flex flex-row items-center gap-[1.25rem]">
              <div className="bg-[#DCD5C6] p-2 rounded-full">
                <div className="h-3 w-3 bg-[#B85042] rounded-full"></div>
              </div>
              <h3 className="text-base font-[700]">AI-Powered Chat</h3>
            </div>
            <h4 className="pl-[3rem] text-[0.875rem] leading-[160%]">
              Engage in real-time conversations for instant legal guidance.
            </h4>
          </div>
          <div className="ml-8 process_img-wrapper !p-[0.625rem]">
            <Image
              loading="lazy"
              src="/business-formation.svg"
              alt="Effortlessly generate customized contracts"
              height={400}
              width={500}
              className="process_img !rounded-[1.625rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
