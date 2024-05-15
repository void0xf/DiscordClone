import Hero from "../../presentational/Hero";
import Navbar from "../../presentational/Navbar";
import LeftSideHero from "@/src/assets/banners/leftSideHero.svg";
import RightSideHero from "@/src/assets/banners/rightSideHero.svg";
import CreateAnInvite from "@/src/assets/banners/CreateAnInviteBelong.svg";
import HanigingOut from "@/src/assets/banners/Where hanging out is easy.svg";
import FromFewToFandom from "@/src/assets/banners/From few to a fandom.svg";
import ReliableTech from "@/src/assets/banners/RELIABLETECHFORSTAYINGCLOSE.svg";
import HomePageStars from "@/src/assets/banners/HomePageStars.svg";

import HeroSocialsIcons from "../../presentational/HeroSocialsIcons";
import HeroDiscordLogo from "../../presentational/HeroDiscordLogo";
import Image from "next/image";
import HomePageButton from "../../common/Home/HomePageButton";
import { HomePageButtonSize, HomePageButtonType } from "@/src/types/Button.t";

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className="lg: w-full h-[633px] flex justify-center items-center overflow-hidden divWithSVGBackground bg-brandColor absolute top-0 z-0"></div>
      <div className="mx-auto min-h-[644px] max-w-6xl relative z-1 flex flex-col ">
        <Navbar />
        <div className="my-auto">
          <Hero />
        </div>
        <div className="absolute z-0 bottom-3 -left-[28rem]">
          <Image src={LeftSideHero} alt="" height={410} />
        </div>
        <div className="absolute z-0 bottom-3 -right-[28rem] ">
          <Image src={RightSideHero} alt="" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        <section className="flex gap-16  mt-32">
          <div>
            <Image
              src={CreateAnInvite}
              alt="Create an invite-only place where you belong"
            />
          </div>
          <div className="flex flex-col max-w-96 mt-12 mr-52">
            <h2 className="font-ggSansBold text-5xl text-notQuiteBlack">
              Create an invite-only place where you belong
            </h2>
            <p className="font-ggsansNormal text-xl text-left mt-6 break-words">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </section>

        <section className="flex gap-16 mt-52">
          <div className="flex flex-col max-w-96 mt-12 mr-52">
            <h2 className="font-ggSansBold text-5xl">
              Where hanging out is easy
            </h2>
            <p className="font-ggsansNormal text-xl text-left mt-6 break-words">
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </div>
          <div>
            <Image src={HanigingOut} alt="Where hanging out is easy" />
          </div>
        </section>

        <section className="flex justify-center w-full mx-auto gap-40 mt-52">
          <div>
            <Image src={FromFewToFandom} alt="From few to a fandom" />
          </div>
          <div className="flex flex-col max-w-96 mt-12 mr-52">
            <h2 className="font-ggSansBold text-5xl">From few to a fandom</h2>
            <p className="font-ggsansNormal text-xl text-left mt-6 break-words">
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full mx-auto mt-52">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-abcginto text-wrap mb-4 text-notQuiteBlack">
              RELIABLE TECH FOR STAYING CLOSE
            </h2>
            <p className="text-xl font-ggsansNormal text-center w-1/2">
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src={ReliableTech} alt="RELIABLE TECH FOR STAYING CLOSE" />
          </div>
        </section>

        <section className="mt-40">
          <div className="flex justify-center">
            <div className="absolute">
              <Image src={HomePageStars} alt="" width={800} />
            </div>
            <div className="flex flex-col">
              <h2 className="font-ggSansBold text-black mb-6 text-3xl">
                Ready to Start Your Journey?
              </h2>
              <div className="flex justify-center">
                <HomePageButton
                  text="Download For Windows"
                  Icon={true}
                  buttonType={HomePageButtonType.blue}
                  size={HomePageButtonSize.large}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="w-full bg-notQuiteBlack py-20 mt-40 text-white font-ggSansExtraBold">
        <div className=" border-brandColor flex max-w-6xl mx-auto">
          <div className="mr-20 w-full">
            <div className="mb-6 mt-2">
              <p>English</p>
            </div>
            <div className="mt-6">
              <HeroSocialsIcons />
            </div>
          </div>
          <div className="flex w-full justify-end gap-6 ">
            <div className="w-48">
              <p className=" text-brandColor mb-5">Product</p>
              <p className="mb-2">Download</p>
              <p className="mb-2">Nitro</p>
              <p className="mb-2">Status</p>
              <p className="mb-2">App Directory</p>
              <p className="mb-2">New Mobile Experience</p>
            </div>

            <div className="w-48">
              <p className=" text-brandColor mb-5">Company</p>
              <p className="mb-2">About</p>
              <p className="mb-2">Jobs</p>
              <p className="mb-2">Brand</p>
              <p className="mb-2">Newsroom</p>
            </div>

            <div className="w-48">
              <p className=" text-brandColor mb-5">Resources</p>
              <p className="mb-2">College</p>
              <p className="mb-2">Support</p>
              <p className="mb-2">Safety</p>
              <p className="mb-2">Blog</p>
              <p className="mb-2">Feedback</p>
              <p className="mb-2">StreamKit</p>
              <p className="mb-2">Creators</p>
              <p className="mb-2">Comunnity</p>
              <p className="mb-2">Developers</p>
              <p className="mb-2">Gaming</p>
              <p className="mb-2">Official 3rd Party Merch</p>
            </div>

            <div className="w-48">
              <p className=" text-brandColor mb-5">Policies</p>
              <p className="mb-2">Terms</p>
              <p className="mb-2">Privacy</p>
              <p className="mb-2">Cookie settings</p>
              <p className="mb-2">Guidelines</p>
              <p className="mb-2">Acknowledgements</p>
              <p className="mb-2">Licenses</p>
              <p className="mb-2">Company Information</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-5 py-10 border-t-[1px] border-brandColor flex justify-between">
          <div className="w-[124px]">
            <HeroDiscordLogo />
          </div>
          <div className=" font-ggSansBold">
            {/* <HomePageButton
              onClickHandler={() => {}}
              text="Sign Up"
              buttonType={HomePageButtonType.blue}
              size={HomePageButtonSize.small}
            /> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
