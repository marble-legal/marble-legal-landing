import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import Navbar from "./navbar";

const outfit = Outfit({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section id="hero" className="relative w-full">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero-bg.svg"
          alt="background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="relative z-10 w-full">
        {/* nav */}
        <Navbar />
        {/* hero */}
        <div className="flex flex-row max-md:flex-wrap-reverse justify-between items-center md:h-[80vh] md:pl-[8rem] md:pr-[2.5rem] px-4 py-8 pb-[5rem]">
          <div className="flex flex-col max-w-[550px] z-10">
            <h1
              className={clsx(
                outfit.className,
                "max-md:justify-center font-black md:text-[4.875rem] max-md:text-center text-[2.375rem] capitalize leading-[100%] flex flex-row gap-4 flex-wrap mb-[2rem]"
              )}
            >
              <span>Empower Your</span>
              <div className="flex flex-row gap-3">
                <div className="relative w-fit h-full">
                  <span className="z-[2] relative">Legal</span>
                  <Image
                    src="/emphasize.svg"
                    alt="emphasize"
                    layout="intrinsic"
                    className="absolute -bottom-4 left-0 h-fit z-[1]"
                    width={200}
                    height={100}
                  />
                </div>{" "}
                <span>Journey</span>
              </div>
            </h1>
            <h2 className="leading-[160%] md:text-xl text-[0.875rem] max-md:text-center max-md:max-w-[290px] max-md:mx-auto">
              Lower your legal costs and empower yourself with our AI-enhanced
              self-help tools and expert services.
            </h2>
            <div className="md:mt-[2.8125rem] mt-[1.5rem] flex flex-row gap-3 w-fit max-md:self-center">
              <Button
                size="large"
                variant="primary"
                className="max-md:h-[3rem]"
              >
                Contact us
              </Button>
              <Button
                variant="secondary"
                size="medium"
                className="flex flex-row items-center gap-[0.625rem] max-md:text-[0.875rem] max-md:h-[3rem]"
              >
                <Image
                  src="/play.svg"
                  alt="play"
                  width={20}
                  height={20}
                  // className="max-md:hidden"
                />
                See demo
              </Button>
            </div>
          </div>

          <div className="relative w-full h-full items-center flex flex-col justify-center">
            <Image
              src="/hero.svg"
              alt="hero"
              layout="responsive"
              width={450}
              height={10}
              objectFit="contain"
              className="z-[2]"
              priority
            />
            {/* glow */}
            <Image
              src="/hero-glow.svg"
              alt="glow"
              layout="fill"
              objectFit="contain"
              className="z-[1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
