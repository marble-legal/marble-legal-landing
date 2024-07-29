import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";

const outfit = Outfit({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="py-[2.6875rem] px-[1.25rem] w-full">
      <div className="px-12 pt-3 pb-9 flex flex-row justify-between items-center border-b border-b-[#E1DADA]">
        <div className="flex-1">
          <Image src="/logo.svg" alt="Marble Legal" width={48} height={36} />
        </div>
        <nav className="flex-grow items-center flex flex-row justify-center">
          <ul className="flex flex-row max-md:flex-wrap gap-4 justify-center">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#lara">LARA</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact-us">Contact us</a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row gap-2 flex-1 place-content-end">
          <Image src="/x.svg" alt="x" width={32} height={32} />
          <Image src="/linkedin.svg" alt="linkedin" width={32} height={32} />
          <Image src="/instagram.svg" alt="instagram" width={32} height={32} />
        </div>
      </div>
      <div className="mt-[2.0625rem] justify-center flex flew-row relative mx-[3rem]">
        <span className="text-[#919191] text-[0.8125rem] font-medium">
          Copyright © 2024 Marble All rights reserved |{" "}
          <span className="underline">Terms and conditions</span> |{" "}
          <span className="underline">Privacy policy</span>
        </span>
        <h6 className="text-[0.8125rem] font-medium text-[#919191] absolute bottom-0 left-0">
          Developed by <span className="text-[#4AA064]">micro1.ai</span>
        </h6>
      </div>
    </footer>
  );
}
