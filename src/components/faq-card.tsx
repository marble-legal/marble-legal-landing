"use client";

import clsx from "clsx";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const outfit = Outfit({ subsets: ["latin"] });

export default function FaqCard({ title, description }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-[#B8D1B8] border rounded-[16px] md:w-[712px] w-full">
      <button
        onClick={toggleOpen}
        className={clsx(
          "md:p-[1.875rem] p-6 justify-between text-[1.0625rem] flex flex-row items-center w-full transition-all text-start max-md:gap-4",
          outfit.className,
          isOpen && "text-[#4AA064]"
        )}
      >
        {title}
        <Image
          src={isOpen ? "/minus.svg" : "/plus.svg"}
          alt={isOpen ? "minus" : "plus"}
          width={20}
          height={20}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="overflow-hidden"
          >
            <p className="px-[1.875rem] pb-[1.875rem] text-[#717171] text-[0.9375rem]">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
