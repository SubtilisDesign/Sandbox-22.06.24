import type { NextPage } from "next";
import HeroPicture from "../components/hero-picture";
import HeroImage from "../components/hero-image";
import FrameComponent from "../components/frame-component";

const DjsDashboard: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[215px] box-border gap-[144px] leading-[normal] tracking-[normal] mq850:gap-[36px] mq1225:gap-[72px]">
      <section className="self-stretch flex flex-col items-start justify-start gap-[44px] max-w-full mq850:gap-[22px]">
        <HeroPicture />
        <HeroImage />
      </section>
      <FrameComponent />
    </div>
  );
};

export default DjsDashboard;
