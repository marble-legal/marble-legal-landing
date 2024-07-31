"use client";
import { useState } from "react";
import { Outfit } from "next/font/google";
import Modal from "./modal";
import clsx from "clsx";
import Button from "./button";
import Spinner from "@/app/components/spinner";
import Lottie from "lottie-react";
import CheckmarkLottie from "@/app/components/checkout.json";

const outfit = Outfit({ subsets: ["latin"] });

export default function ContactUsModal({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // call api post https://dev.api.marblels.com/contact-us with email data
    try {
      const response = await fetch("https://dev.api.marblels.com/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setSuccess(true);
      setFailure("");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setFailure("Failed to submit email. Please try again later.");
      setSuccess(false);
    } finally {
      setLoading(false);
      setError("");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {success ? (
        <div className="flex flex-col gap-2 md:min-w-[400px]">
          <h1 className={clsx(outfit.className, "text-[1.5rem]")}>
            Thank you for contacting us!
          </h1>
          <p className="text-base">
            We will get back to you as soon as possible.
          </p>
          <Lottie
            animationData={CheckmarkLottie}
            className="w-[200px] h-[200px] mx-auto"
            loop={false}
          />
          <Button
            size="medium"
            className="w-full text-sm disabled:opacity-80 flex flex-row justify-center"
            onClick={() => {
              handleClose();
              setSuccess(false);
              setError("");
              setFailure("");
              setEmail("");
            }}
          >
            Close
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <h1 className={clsx(outfit.className, "text-[1.5rem]")}>
            Contact us
          </h1>
          <p className="text-base mb-2">
            Please enter your email address and we will get back to you.
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-1">
              <span className="text-sm">Email</span>
              <input
                id="email"
                type="email"
                placeholder="example@marblels.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent w-full rounded-[10px] border-[1px] border-solid border-[#E2E2E2] px-4 py-3 text-[0.875rem] font-[500] focus-visible:outline-none focus-visible:border-[1.5px] focus-visible:border-secondaryGreen disabled:cursor-not-allowed disabled:bg-[#F6F6F6] disabled:text-[#B4B4B4] disabled:border-[#D7D7D7] leading-[18px]"
              />
              {error && <span className="text-red-500 text-xs">{error}</span>}
            </label>
            <Button
              type="submit"
              size="medium"
              className="w-full text-sm disabled:opacity-80 flex flex-row justify-center"
              disabled={loading}
            >
              {loading ? <Spinner /> : "Submit"}
            </Button>
            {failure && <span className="text-red-500 text-xs">{failure}</span>}
          </form>
        </div>
      )}
    </Modal>
  );
}
