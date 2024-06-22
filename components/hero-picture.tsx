import type { NextPage } from "next";

export type HeroPictureType = {
  className?: string;
};

const HeroPicture: NextPage<HeroPictureType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-white overflow-hidden flex flex-row items-start justify-between pt-[45px] pb-[449px] pr-[50px] pl-[60px] box-border relative max-w-full gap-[20px] mq850:pt-5 mq850:pb-[190px] mq850:box-border mq1225:pt-[29px] mq1225:pb-[292px] mq1225:pr-[25px] mq1225:pl-[30px] mq1225:box-border mq1525:flex-wrap ${className}`}
    >
      <img
        className="self-stretch flex-1 absolute !m-[0] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/unsplash9foc7c0mae@2x.png"
      />
      <header className="w-[1124px] flex flex-col items-start justify-start max-w-full text-left text-31xl text-black font-headline-1-bold">
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[113px] z-[1]">
          Logo
        </a>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full mt-[-48px] text-13xl">
          <div className="w-[823px] flex flex-col items-end justify-start gap-[249px] max-w-full mq850:gap-[124px] mq450:gap-[62px]">
            <nav className="m-0 flex flex-row items-start justify-start gap-[30px] max-w-full text-left text-13xl text-black font-headline-1-bold">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[87px] z-[1]">
                Home
              </a>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[86px] z-[1]">
                About
              </a>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[121px] z-[1]">
                Services
              </a>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[65px] z-[1]">
                Item
              </a>
            </nav>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[742px] flex flex-col items-start justify-start gap-[40px] max-w-full mq850:gap-[20px]">
                <b className="relative inline-block min-w-[128px] z-[1] mq850:text-7xl mq450:text-lgi">
                  Headline
                </b>
                <div className="self-stretch relative text-lg font-text-italic z-[1]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
        <button className="cursor-pointer [border:none] py-3 px-9 bg-[transparent] rounded-xl [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#3861f4] flex flex-row items-start justify-start z-[1] hover:bg-royalblue">
          <a className="[text-decoration:none] relative text-7xl uppercase font-headline-1-bold text-gray text-left inline-block min-w-[101px] mq450:text-2xl">
            button
          </a>
        </button>
      </div>
    </div>
  );
};

export default HeroPicture;
