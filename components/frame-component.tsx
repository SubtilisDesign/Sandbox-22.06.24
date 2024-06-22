import type { NextPage } from "next";
import TestimonialRoundWithPic from "./testimonial-round-with-pic";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-13xl text-black font-headline-1-bold ${className}`}
    >
      <div className="w-[1514px] flex flex-col items-start justify-start gap-[113px] max-w-full mq850:gap-[56px] mq450:gap-[28px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1206px] flex flex-col items-start justify-start gap-[80px] max-w-full mq850:gap-[40px] mq450:gap-[20px]">
            <b className="self-stretch relative mq850:text-7xl mq450:text-lgi">
              Testimonials
            </b>
            <div className="self-stretch relative text-mid-1 font-text-italic text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[23px] max-w-full text-left text-11xl-4 font-text-italic">
          <TestimonialRoundWithPic imagePlaceholder="/rectangle-2@2x.png" />
          <TestimonialRoundWithPic imagePlaceholder="/rectangle-2-1@2x.png" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 gap-[8px] mq450:flex-wrap mq450:justify-center">
          <div className="h-[15px] w-[15px] relative rounded-81xl bg-darkgray mq450:w-full" />
          <div className="h-[15px] w-[15px] relative rounded-81xl bg-gainsboro mq450:w-full" />
          <div className="h-[15px] w-[15px] relative rounded-81xl bg-gainsboro mq450:w-full" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
