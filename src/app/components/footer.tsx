import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="py-[2.6875rem] px-[1.25rem] w-full">
      <div className="md:px-12 px-4 pt-3 pb-9 flex flex-row max-md:flex-col justify-between items-center border-b border-b-[#E1DADA]">
        <div className="flex flex-row w-full">
          <div className="flex-1">
            <Image src="/logo.svg" alt="Marble Legal" width={48} height={36} />
          </div>
          <nav className="flex-grow items-center flex flex-row justify-center max-md:hidden">
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
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={32}
              height={32}
            />
          </div>
        </div>
        <nav className="flex-grow items-center flex flex-row justify-center md:hidden max-md:mt-[2.25rem] max-md:w-full">
          <ul className="grid grid-cols-3 gap-4 justify-center justify-items-center max-md:w-full">
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
      </div>
      <div className="mt-[2.0625rem] justify-center flex md:flew-row flex-col relative mx-[3rem]">
        <span className="text-[#919191] text-[0.8125rem] font-medium text-center">
          Copyright © 2024 Marble All rights reserved{" "}
          <br className="md:hidden" />
          <span className="max-md:hidden">| </span>
          <span className="underline">Terms and conditions</span> |{" "}
          <span className="underline">Privacy policy</span>
        </span>
        <h6 className="text-[0.8125rem] font-medium text-[#919191] md:absolute bottom-0 left-0 max-md:mt-[1.5rem] max-md:mx-auto">
          Developed by{" "}
          <Link
            href="https://micro1.ai"
            target="_blank"
            className="text-[#4AA064]"
          >
            micro1.ai
          </Link>
        </h6>
      </div>
    </footer>
  );
}
