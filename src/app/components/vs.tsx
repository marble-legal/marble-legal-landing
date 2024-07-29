import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";

const outfit = Outfit({ subsets: ["latin"] });

export default function VS() {
  return (
    <section
      id="vs"
      className="md:mt-[3.75rem] md:mb-[7.5rem] mb-8 mt-8 w-full md:px-[6.25rem] px-4 flex flex-col items-center"
    >
      <h3
        className={clsx(
          "font-black md:text-[4rem] text-[2.75rem] leading-[120%] max-w-[792px] text-center",
          outfit.className
        )}
      >
        Hiring a <span className="text-[#B85042]">lawyer</span> vs using{" "}
        <br className="max-md:hidden" />
        <span className="text-[#4AA064]">Marble</span>
      </h3>
      <p className="mt-[2rem] mb-[4rem] text-center text-[1.25rem]">
        Save on legal costs with Marble
      </p>
      <div className="flex flex-row max-md:flex-wrap gap-8 w-full">
        <div className="bg-[#FFF8F7] rounded-[16px] w-full relative py-[4.625rem] px-[2.75rem] items-center justify-center flex flex-col gap-[1.4375rem]">
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

          <div className="z-[2] flex flex-col gap-[1.4375rem]">
            <Image
              src="/lawyer.svg"
              alt="lawyer"
              width={125}
              height={125}
              className="self-center"
            />
            <h4
              className={clsx(
                "font-bold md:text-[2.25rem] text-[1.75rem] self-center",
                outfit.className
              )}
            >
              Lawyer
            </h4>
            <ul className="flex flex-col gap-5 text-[1.25rem] text-[#0A100B] items-center [&_ol]:text-center">
              <ol className={outfit.className}>
                Average hourly rate:{" "}
                <span className="text-[#B85042]">$327/h</span>
              </ol>
              <ol className={outfit.className}>
                Average time spent on legal issues:{" "}
                <span className="text-[#B85042]">5-7 hours</span>
              </ol>
              <ol className={outfit.className}>
                Average cost for contract drafting:{" "}
                <span className="text-[#B85042]">$200-$800</span>
              </ol>
            </ul>
          </div>
        </div>
        <div className="bg-[#F0FFF0] rounded-[16px] w-full relative py-[4.625rem] px-[2.75rem] items-center justify-center flex flex-col gap-[1.4375rem]">
          <Image
            src="/green-hue.svg"
            alt="red-hue"
            layout="intrinsic"
            width={1920}
            height={1080}
            objectFit="none"
            className="absolute top-0 left-0 z-[1]"
            priority
          />

          <div className="z-[2] flex flex-col gap-[1.4375rem]">
            <Image
              src="/marble.svg"
              alt="marble"
              width={125}
              height={125}
              className="self-center"
            />
            <h4
              className={clsx(
                "font-bold md:text-[2.25rem] text-[1.75rem] self-center",
                outfit.className
              )}
            >
              Marble
            </h4>
            <p
              className={clsx(
                outfit.className,
                "md:text-[1.75rem] text-[1.25rem] text-center text-[#0A100B]"
              )}
            >
              Get unlimited benefits for less <br />
              than{" "}
              <span className="text-[#4AA064] font-bold">$100 a month</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
