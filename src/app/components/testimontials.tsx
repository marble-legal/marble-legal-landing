"use client";
import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import FeedbackCard from "@/components/feedback-card";
import Animated from "@/components/animated";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const outfit = Outfit({ subsets: ["latin"] });

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const scrollWidth = element.scrollWidth;
    const containerWidth = element.clientWidth;

    // Calculate the full scroll distance
    const fullScrollDistance = scrollWidth / 2; // Use half of the scroll width due to duplication

    // Create the tween animation
    const scrollTween = gsap.to(element, {
      x: -fullScrollDistance, // Move left by the half of the duplicated content
      duration: 20, // Adjust duration for desired speed
      ease: "linear", // Smooth, constant speed
      repeat: -1, // Infinite scroll
      paused: true, // Start paused
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % fullScrollDistance), // Seamless scrolling
      },
    });

    scrollTween.play(); // Start playing

    // Add event listeners for hover to pause/resume animation
    const handleMouseEnter = () => {
      scrollTween.pause(); // Pause the animation
    };

    const handleMouseLeave = () => {
      scrollTween.resume(); // Resume the animation
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    // Add event listeners for manual scrolling
    const handleScrollStart = () => {
      scrollTween.pause(); // Pause animation during user interaction
    };

    const handleScrollStop = () => {
      // Resume the animation after a short delay
      setTimeout(() => {
        scrollTween.resume();
      }, 1000); // Adjust the delay as needed
    };

    element.addEventListener("scroll", handleScrollStart);

    // Optional: Use a debounce method to detect scroll stop
    let isScrolling: NodeJS.Timeout;
    element.addEventListener("scroll", () => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(handleScrollStop, 100); // Adjust the debounce delay as needed
    });

    // Cleanup function
    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("scroll", handleScrollStart);
      clearTimeout(isScrolling);
      scrollTween.kill(); // Kill the tween on unmount to prevent leaks
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="pt-[6.625rem] w-full flex flex-col gap-[4.125rem] bg-[linear-gradient(180deg,#F0FFF3_0%,rgba(240,255,243,0.00)_100%)]"
    >
      <Animated>
        <h3
          className={clsx(
            "font-black md:text-[4rem] text-[1.75rem] leading-[120%] max-w-[792px] text-center mx-auto",
            outfit.className
          )}
        >
          What Our Users Say
        </h3>
      </Animated>
      <div className="relative w-full overflow-auto">
        <motion.div
          className="flex flex-row gap-[1.5rem] md:px-16 px-4 pb-[6.625rem]"
          ref={containerRef}
        >
          <FeedbackCard
            user={{
              name: "John Doe",
              role: "CEO, Company",
            }}
          />
          <FeedbackCard
            user={{
              name: "Jane Doe 1",
              role: "CTO, Company",
            }}
          />
          <FeedbackCard
            user={{
              name: "Jane Doe 2",
              role: "CTO, Company",
            }}
          />
          <FeedbackCard
            user={{
              name: "Jane Doe 3",
              role: "CTO, Company",
            }}
          />
          <FeedbackCard
            user={{
              name: "Jane Doe 4",
              role: "CTO, Company",
            }}
          />
          {/* Duplicate content to ensure seamless scrolling */}
          <FeedbackCard
            user={{
              name: "John Doe 5",
              role: "CEO, Company",
            }}
          />
          <FeedbackCard
            user={{
              name: "Jane Doe 5",
              role: "CTO, Company",
            }}
          />
          <FeedbackCard
            user={{
              name: "John Doe 5",
              role: "CEO, Company",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
