import Image from "next/image";
import logo from "../../assets/icons/DiscordPageLogo.svg";

const HeroDiscordLogo = () => {
  return (
    <div>
      <Image src={logo} alt="DiscordLogo" />
    </div>
  );
};

export default HeroDiscordLogo;
