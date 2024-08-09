"use client";
import Image from "next/image";
import Button from "@/components/button";
import Link from "next/link";
import ContactUsModal from "@/components/contactus-modal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Animated from "@/components/animated";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => {
    setPopoverOpen(!isPopoverOpen);
  };

  return (
    <>
      <ContactUsModal isOpen={showModal} handleClose={handleModal} />
      <nav className="md:flex hidden justify-between items-center w-full px-[5rem] py-[1.25rem] border-b border-white">
        <Image src="/logo.svg" alt="Marble Legal" width={48} height={36} />
        <div className="flex flex-row gap-3">
          <Button variant="primary" size="small" onClick={handleModal}>
            Contact us
          </Button>
          {/* <Link href="https://dev.app.marblels.com/register"> */}
          <Button variant="secondary" size="small">
            Create an account
          </Button>
          {/* </Link> */}
          {/* <Link
            href="https://dev.app.marblels.com/login"
            className="self-center"
          > */}
          <Button variant="text" size="small">
            Sign in
          </Button>
          {/* </Link> */}
        </div>
      </nav>
      <nav className="flex md:hidden justify-between items-center w-full px-[1.5rem] py-[1.25rem] border-b border-white">
        <Image src="/logo.svg" alt="Marble Legal" width={48} height={36} />
        <div className="flex flex-row gap-3">
          <Button variant="primary" size="small">
            Contact us
          </Button>
          <button onClick={togglePopover}>
            <Image src="/menu.svg" alt="menu" width={40} height={40} />
          </button>

          <AnimatePresence>
            {isPopoverOpen && (
              <div className="absolute right-8 mt-12 w-48 bg-white rounded-md shadow-lg z-10 p-[0.625rem]">
                <Animated className="flex flex-col gap-[0.625rem]">
                  {/* <Link
                    href="https://dev.app.marblels.com/login"
                    className="self-center w-full"
                  > */}
                  <Button
                    variant="secondary"
                    size="small"
                    className="w-full !border-[#B85042] border-[1px]"
                  >
                    Sign in
                  </Button>
                  {/* </Link> */}
                  {/* <Link
                    href="https://dev.app.marblels.com/register"
                    className="w-full"
                  > */}
                  <Button variant="primary" size="small" className="w-full">
                    Create an account
                  </Button>
                  {/* </Link> */}
                </Animated>
              </div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
