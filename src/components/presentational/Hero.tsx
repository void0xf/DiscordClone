import { HomePageButtonSize, HomePageButtonType } from "@/src/types/Button.t";
import HomePageButton from "../common/Home/HomePageButton";

const Hero = () => {
  return (
    <div
      className={` h-max flex justify-center items-center
    `}
    >
      <div className="flex justify-center flex-col max-w-3xl relative z-10">
        <div className="text-6xl text-white pb-[30px] text-center font-extrabold font-abcginto text-nowrap">
          <h1>IMAGINE A PLACE...</h1>
        </div>
        <div className="text-white text-center font-ggsansNormal text-xl">
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>

        <div className="flex justify-center max-w-full gap-6 mt-6 font-ggSansMedium">
          <HomePageButton
            Icon={true}
            text="Download For Windows"
            buttonType={HomePageButtonType.white}
            size={HomePageButtonSize.large}
          />
          <HomePageButton
            text="Open Discord in your Browser"
            buttonType={HomePageButtonType.dark}
            size={HomePageButtonSize.large}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
