/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ProcessComponent = () => {
  useEffect(() => {
    // section wrapper
    const wrapper = document.querySelector(".process_component");

    // left column - items
    const textList = wrapper?.querySelectorAll(".process_text");

    // right column - items
    const imgList = Array.from(wrapper?.querySelectorAll(".process_img") || []);

    textList?.[0]?.classList.add("is-active");

    // attach scroll trigger to each image
    imgList.forEach((img, i) => {
      const textWrap = textList?.[i];

      ScrollTrigger.create({
        trigger: img,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          textList?.forEach((text) => text.classList.remove("is-active"));
          textWrap?.classList.add("is-active");
        },
        onEnterBack: () => {
          textList?.forEach((text) => text.classList.remove("is-active"));
          textWrap?.classList.add("is-active");
        },
      });
    });
  }, []);

  return (
    <div className="process_component max-w-[1100px] !mx-auto px-4 transition-all">
      <div className="process_col-text sticky top-1/2 transform translate-y-1/2 w-1/2">
        <div className="process_list flex flex-col relative transition-all">
          {/* <Image
            loading="lazy"
            src="/line.svg"
            alt="line"
            height={300}
            width={2}
            className="absolute left-[11px] h-full"
          /> */}

          <div className="process_text flex flex-row items-center gap-3 relative pb-[2.5rem]">
            <div className="line-container absolute left-[11px] top-[20px] h-full">
              <svg
                width="1px"
                height="100%"
                viewBox="0 0 1 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="dotted-line"
              >
                <line
                  opacity="0.4"
                  x1="0.5"
                  y1="0"
                  x2="0.5"
                  y2="100"
                  stroke="#B85042"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>

            <div className="w-fit self-start">
              <div className="process_icon transition-all">
                {/* <div className="process_no">1</div> */}
                <div className="h-3 w-3 bg-[#B85042] rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col w-fit">
              <h3 className="heading-style-h3-smaller is-process_title transition-all duration-400">
                AI-Powered Chat
              </h3>
              <h4 className="process_description transition-all duration-400">
                Engage in real-time conversations for instant legal guidance.
              </h4>
            </div>
          </div>
          <div className="process_text flex flex-row items-center gap-3 relative pb-[2.5rem]">
            <div className="line-container absolute left-[11px] top-[20px] h-full">
              <svg
                width="1px"
                height="100%"
                viewBox="0 0 1 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="dotted-line"
              >
                <line
                  opacity="0.4"
                  x1="0.5"
                  y1="0"
                  x2="0.5"
                  y2="100"
                  stroke="#B85042"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>
            <div className="w-fit self-start">
              <div className="process_icon transition-all">
                {/* <div className="process_no">1</div> */}
                <div className="h-3 w-3 bg-[#B85042] rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col w-fit">
              <h3 className="heading-style-h3-smaller is-process_title transition-all duration-400">
                Contract Drafting
              </h3>
              <h4 className="process_description transition-all duration-400">
                Effortlessly generate customized contracts based on your
                specific needs.
              </h4>
            </div>
          </div>
          <div className="process_text flex flex-row items-center gap-3 relative pb-[2.5rem]">
            <div className="line-container absolute left-[11px] top-[20px] h-full">
              <svg
                width="1px"
                height="100%"
                viewBox="0 0 1 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="dotted-line"
              >
                <line
                  opacity="0.4"
                  x1="0.5"
                  y1="0"
                  x2="0.5"
                  y2="100"
                  stroke="#B85042"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>
            <div className="w-fit self-start">
              <div className="process_icon transition-all">
                {/* <div className="process_no">1</div> */}
                <div className="h-3 w-3 bg-[#B85042] rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col w-fit">
              <h3 className="heading-style-h3-smaller is-process_title transition-all duration-400">
                Contract Analysis
              </h3>
              <h4 className="process_description transition-all duration-400">
                Upload and analyze existing contracts for detailed insights.
              </h4>
            </div>
          </div>
          <div className="process_text flex flex-row items-center gap-3">
            <div className="w-fit self-start">
              <div className="process_icon transition-all">
                {/* <div className="process_no">1</div> */}
                <div className="h-3 w-3 bg-[#B85042] rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col w-fit">
              <h3 className="heading-style-h3-smaller is-process_title transition-all duration-400">
                Business Formation
              </h3>
              <h4 className="process_description transition-all duration-400">
                Simplify the process of forming new business entities.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="process_col-img w-1">
        <div className="process_img-list flex flex-col gap-10">
          <div className="process_img-wrapper">
            <Image
              loading="lazy"
              src="/ai-chat.svg"
              alt="We use AI to help your legal tasks"
              height={400}
              width={500}
              className="process_img"
            />
          </div>
          <div className="process_img-wrapper">
            <Image
              loading="lazy"
              src="/contract-drafting.svg"
              alt="Effortlessly generate customized contracts"
              height={400}
              width={500}
              className="process_img"
            />
          </div>
          <div className="process_img-wrapper">
            <Image
              loading="lazy"
              src="/contract-analysis.svg"
              alt="Effortlessly generate customized contracts"
              height={400}
              width={500}
              className="process_img"
            />
          </div>
          <div className="process_img-wrapper">
            <Image
              loading="lazy"
              src="/business-formation.svg"
              alt="Effortlessly generate customized contracts"
              height={400}
              width={500}
              className="process_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessComponent;
