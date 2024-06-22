import type { NextPage } from "next";

export type HeroImageType = {
  className?: string;
};

const HeroImage: NextPage<HeroImageType> = ({ className = "" }) => {
  return (
    <div
      className={`ml-[-1px] self-stretch flex flex-row items-center justify-start max-w-full [row-gap:20px] text-left text-13xl text-black font-headline-1-bold mq1525:flex-wrap ${className}`}
    >
      <div className="flex-[0.6083] flex flex-col items-start justify-start py-5 pr-[173px] pl-[203px] box-border gap-[50px] min-w-[624px] max-w-full mq850:gap-[25px] mq850:pl-[50px] mq850:pr-[43px] mq850:box-border mq850:min-w-full mq1225:pl-[101px] mq1225:pr-[86px] mq1225:box-border mq1525:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
          <b className="self-stretch relative mq850:text-7xl mq450:text-lgi">
            Headline
          </b>
          <div className="self-stretch relative text-lg font-text-italic">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur `}</div>
        </div>
        <button className="cursor-pointer [border:none] py-3 px-9 bg-[transparent] rounded-xl [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#3861f4] flex flex-row items-center justify-center whitespace-nowrap hover:bg-royalblue">
          <div className="relative text-lg uppercase font-headline-1-bold text-gray text-left inline-block min-w-[79px]">
            View all
          </div>
        </button>
      </div>
      <img
        className="h-[1080px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[624px] mq850:min-w-full mq1525:flex-1"
        loading="lazy"
        alt=""
        src="/frame-7@2x.png"
      />
    </div>
  );
};

export default HeroImage;
