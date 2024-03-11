import React from "react";
import { ServerPreview } from "../../../types/user.t"
import SidebarButton from "./SidebarButton"
import DiscordLogoSidebar from '../../../assets/icons/Sidebar/DiscordLogoSidebar.svg'
import { SidebarButtonType } from "../../../types/Button.t";
import SidebarUtilityButton from "./SidebarUtilityButton";
import { IoMdAdd } from "react-icons/io";
import { FaCompass } from "react-icons/fa";
import { TfiDownload } from "react-icons/tfi";
import SidebarGulidSeparator from "./SidebarGulidSeparator";




const Sidebar: React.FC<{servers: ServerPreview[]}> = ({servers}) => {

return (
    <div className="w-16 h-full bg-SidebarBackground flex flex-col gap-1">
      <SidebarButton onClickHandler={() => {}} Icon={DiscordLogoSidebar} text="Direct Message" type={SidebarButtonType.home}/>
      <SidebarGulidSeparator />

      {servers.map((server: ServerPreview) => (
        <SidebarButton onClickHandler={() => {}} text={server.name} type={SidebarButtonType.server} Icon={server.SvgIcon} />
      ))}

      <SidebarUtilityButton label="Add a Server" iconSize={24} onClick={() => {}} Icon={IoMdAdd} />
      <SidebarUtilityButton label="Explore Discoverable Servers" iconSize={24} onClick={() => {}} Icon={FaCompass} />
      
      <SidebarGulidSeparator />
      
      <SidebarUtilityButton label="Download Apps" iconSize={24} onClick={() => {}} Icon={TfiDownload} />

    </div>
  )
}

export default Sidebar
