"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <div className="process_component max-w-[1200px] px-4 transition-all">
      <div className="process_col-text sticky top-1/2 transform translate-y-1/2 w-1/2">
        <div className="process_list flex flex-col gap-[1.5rem]">
          <div className="process_text flex flex-row items-center gap-3">
            <div className="w-fit self-start">
              <div className="process_icon">
                {/* <div className="process_no">1</div> */}
                <div className="h-3 w-3 bg-[#B85042] rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col w-fit">
              <h3 className="heading-style-h3-smaller is-process_title">
                We certify the top 1%
              </h3>
              <h4 className="process_description">
                Effortlessly generate customized contracts based on your
                specific needs.
              </h4>
            </div>
          </div>
          <div className="process_text flex flex-row items-center gap-3">
            <div className="w-fit self-start">
              <div className="process_icon">
                {/* <div className="process_no">1</div> */}
                <div className="h-3 w-3 bg-[#B85042] rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col w-fit">
              <h3 className="heading-style-h3-smaller is-process_title">
                We certify the top 1%
              </h3>
              <h4 className="process_description">
                Effortlessly generate customized contracts based on your
                specific needs.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="process_col-img w-1">
        <div className="process_img-list flex flex-col gap-10">
          <div className="process_img-wrapper">
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/66759e5ca6adc75c8bb87d31/66759e5ca6adc75c8bb8882b_Asking%20ques%20(3).webp"
              alt="We use gpt-vetting to interview candidates async"
              className="process_img w-full max-w-4xl h-80"
            />
          </div>
          <div className="process_img-wrapper">
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/66759e5ca6adc75c8bb87d31/66759e5ca6adc75c8bb8884c_DDP%20-%20not%20hired%20(2).webp"
              alt="We only add the top 1% candidates in our talent pool"
              className="process_img w-full max-w-4xl h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessComponent;
