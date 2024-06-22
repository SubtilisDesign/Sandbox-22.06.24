import type { NextPage } from "next";

export type TestimonialRoundWithPicType = {
  className?: string;
  imagePlaceholder?: string;
};

const TestimonialRoundWithPic: NextPage<TestimonialRoundWithPicType> = ({
  className = "",
  imagePlaceholder,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[484px] max-w-full text-left text-11xl-4 text-black font-text-italic mq850:min-w-full ${className}`}
    >
      <div className="self-stretch shadow-[5px_5px_9.91px_rgba(0,_0,_0,_0.1)] rounded-t-61xl rounded-br-61xl rounded-bl-none bg-lightgray overflow-hidden flex flex-col items-start justify-start p-[50px] box-border max-w-full mq850:pl-[25px] mq850:pr-[25px] mq850:box-border mq450:pt-8 mq450:pb-8 mq450:box-border">
        <div className="self-stretch flex flex-col items-start justify-start py-[15.2px] px-[15px] box-border gap-[24.8px] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-center gap-[25px] max-w-full font-headline-1-bold mq850:flex-wrap">
            <b className="flex-1 relative inline-block min-w-[95px] max-w-full mq850:text-5xl mq450:text-lg">
              Headline
            </b>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[3px]">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
                  loading="lazy"
                  alt=""
                  src="/streamlineinterfacefavoritestarrewardratingratesocialstarmediafavoritelikestars.svg"
                />
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
                  loading="lazy"
                  alt=""
                  src="/streamlineinterfacefavoritestarrewardratingratesocialstarmediafavoritelikestars.svg"
                />
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
                  loading="lazy"
                  alt=""
                  src="/streamlineinterfacefavoritestarrewardratingratesocialstarmediafavoritelikestars.svg"
                />
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
                  loading="lazy"
                  alt=""
                  src="/streamlineinterfacefavoritestarrewardratingratesocialstarmediafavoritelikestars.svg"
                />
              </div>
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
                loading="lazy"
                alt=""
                src="/streamlineinterfaceawardhalfstarrewardratingratesocialstarmediafavoritelikestarshalf.svg"
              />
            </div>
          </div>
          <div className="self-stretch relative text-mid-1">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
          <div className="flex flex-row items-start justify-start gap-[25px] text-lg">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/pepiconspencillinex.svg"
            />
            <i className="relative inline-block min-w-[88px]">John Snow</i>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <img
          className="w-[50px] h-[50px] relative rounded-181xl object-cover"
          loading="lazy"
          alt=""
          src={imagePlaceholder}
        />
      </div>
    </div>
  );
};

export default TestimonialRoundWithPic;
