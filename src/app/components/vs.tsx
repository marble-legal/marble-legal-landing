import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";
import Animated from "@/components/animated";

const outfit = Outfit({ subsets: ["latin"] });

export default function VS() {
  return (
    <section
      id="vs"
      className="md:mt-[3.75rem] md:mb-[7.5rem] md:my-8 my-[1.5rem] w-full md:px-[6.25rem] px-4 flex flex-col items-center"
    >
      <Animated>
        <h3
          className={clsx(
            "font-black md:text-[4rem] text-[2.75rem] leading-[120%] max-w-[792px] text-center",
            outfit.className
          )}
        >
          Hiring a <span className="text-[#B85042]">lawyer</span> vs{" "}
          <br className="max-md:hidden" />
          using <span className="text-[#4AA064]">Marble</span>
        </h3>
      </Animated>
      <Animated>
        <p className="md:mt-[1rem] mt-[0.8125rem] md:mb-[4rem] mb-[2.5rem] text-center text-[1rem]">
          Save on legal costs with Marble
        </p>
      </Animated>
      <div className="flex flex-row max-md:flex-wrap md:gap-8 gap-4 w-full items-stretch">
        <Animated
          variant="moveFromBottom"
          className="bg-[#FFF8F7] rounded-[16px] w-full relative py-[4.625rem] px-[2.75rem] flex flex-col gap-[1.4375rem] justify-center items-center"
        >
          <Image
            src="/red-hue.svg"
            alt="red-hue"
            layout="intrinsic"
            width={1920}
            height={1080}
            objectFit="none"
            className="absolute bottom-0 left-0 z-[1]"
            priority
          />

          <div className="z-[2] flex flex-col gap-[1.4375rem] items-center">
            <Image
              src="/lawyer.svg"
              alt="lawyer"
              width={125}
              height={125}
              className="self-center"
            />
            <h4
              className={clsx(
                "font-bold md:text-[2.25rem] text-[1.5rem] self-center",
                outfit.className
              )}
            >
              Lawyer
            </h4>
            <ul className="flex flex-col gap-5 md:text-[1.25rem] text-base text-[#0A100B] items-center text-center leading-[140%]">
              <li className={outfit.className}>
                Average hourly rate:{" "}
                <span className="text-[#B85042] text-[1.125rem] font-bold">
                  $327/h
                </span>
              </li>
              <li className={outfit.className}>
                Average time spent on legal issues: <br className="md:hidden" />
                <span className="text-[#B85042] text-[1.125rem] font-bold">
                  5-7 hours
                </span>
              </li>
              <li className={outfit.className}>
                Average cost for contract drafting:{" "}
                <span className="text-[#B85042] text-[1.125rem] font-bold">
                  $200-$800
                </span>
              </li>
            </ul>
          </div>
        </Animated>

        <Animated
          variant="moveFromBottom"
          delay={0.25}
          className="bg-[#F0FFF0] rounded-[16px] w-full relative py-[4.625rem] px-[2.75rem] flex flex-col gap-[1.4375rem] justify-center items-center content-start"
        >
          <Image
            src="/green-hue.svg"
            alt="green-hue"
            layout="intrinsic"
            width={1920}
            height={1080}
            objectFit="none"
            className="absolute top-0 left-0 z-[1]"
            priority
          />

          <div className="z-[2] flex flex-col gap-[1.4375rem] items-center">
            <Image
              src="/marble.svg"
              alt="marble"
              width={125}
              height={125}
              className="self-center"
            />
            <h4
              className={clsx(
                "font-bold md:text-[2.25rem] text-[1.5rem] self-center",
                outfit.className
              )}
            >
              Marble
            </h4>
            <p
              className={clsx(
                outfit.className,
                "md:text-[1.75rem] text-[1.25rem] text-center text-[#0A100B] leading-[140%]"
              )}
            >
              Get unlimited benefits for the price of a cup of coffee a day
            </p>
          </div>
        </Animated>
      </div>
    </section>
  );
}
