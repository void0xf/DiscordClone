import React from "react";
import DiscordLogo from "../../assets/icons/DiscordPageLogo.svg";
import HomePageButton from "../common/Home/HomePageButton";
import { HomePageButtonSize, HomePageButtonType } from "../../types/Button.t";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between bg-brandColor pt-6 font-ggSansBold">
      <button>
        <div className="lg: min-w-[124px]">
          <Image src={DiscordLogo} alt="Discord logo" />
        </div>
      </button>
      <div className="flex gap-10 font-bold text-[16px] text-white items-center ">
        <a href="" className="hover:underline">
          <p>Download</p>
        </a>
        <a href="" className="hover:underline">
          <p>Nitro</p>
        </a>
        <a href="" className="hover:underline">
          <p>Discorver</p>
        </a>
        <a href="" className="hover:underline">
          <p>Safety</p>
        </a>
        <a href="" className="hover:underline">
          <p>Suppport</p>
        </a>
        <a href="" className="hover:underline">
          <p>Blog</p>
        </a>
        <a href="" className="hover:underline">
          <p>Careers</p>
        </a>
      </div>

      <div>
        <Link href={"login"}>
          <HomePageButton
            text="Login"
            buttonType={HomePageButtonType.white}
            size={HomePageButtonSize.small}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
